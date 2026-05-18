---
title: "DiT 控制方法综述：ControlNet 路线与 Cosmos-Transfer2.5"
design: "DiT Control Survey"
---

# DiT 控制方法综述：ControlNet 路线与 Cosmos-Transfer2.5

::: info 资料入口
- **Cosmos-Transfer2.5 GitHub**: [nvidia-cosmos/cosmos-transfer2.5](https://github.com/nvidia-cosmos/cosmos-transfer2.5)
- **Cosmos-Transfer2.5 官方文档**: [Inference Guide](https://github.com/nvidia-cosmos/cosmos-transfer2.5/blob/main/docs/inference.md)
- **CameraCtrl**: [hehao13/CameraCtrl](https://github.com/hehao13/CameraCtrl)
- **Ctrl-Adapter**: [HL-hanlin/Ctrl-Adapter](https://github.com/HL-hanlin/Ctrl-Adapter)
:::

## 为什么 DiT 的控制问题和 U-Net 不一样

ControlNet 最早是在 U-Net 扩散模型上成熟起来的。U-Net 自带多尺度 encoder-decoder 结构和 skip connection，因此最自然的做法是复制一个条件分支，在各分辨率层输出 residual，再用 zero-conv 稳定地注入主干。

但 DiT 不一样。DiT 的主体是 patch token 序列和一串 Transformer block，空间结构已经被 tokenization 平铺，主干里也没有 U-Net 那种天然的分辨率级 skip 路径。因此，DiT 做控制时一般要回答三个问题：

1. 控制信号先编码成什么  
   是额外 token、额外通道、还是单独的控制分支。

2. 控制信号注入到哪里  
   是 cross-attention、AdaLN、block residual，还是直接和输入 token 拼接。

3. 多个控制如何融合  
   是前期拼接、逐层加权、MoE 路由，还是每个控制独立一条 branch。

从这个角度看，DiT 的“控制方法”本质上是一个 **条件注入设计空间**，而不是单一的 ControlNet 配方。

## 现有 DiT 控制方法可以分成四类

| 路线 | 注入位置 | 优点 | 典型问题 | 代表方法 |
|---|---|---|---|---|
| 条件 token / cross-attention | 在 Transformer block 的 cross-attention 中注入条件 | 结构最轻，最适合稀疏条件 | 对 dense geometry 约束通常不够硬 | CameraCtrl |
| 输入拼接 / in-context conditioning | 条件帧或条件图直接拼到时间轴或通道轴 | 与预训练分布更接近，工程简单 | 控制种类一多，输入设计会变复杂 | TIC-FT |
| Adapter / LoRA / 轻量投影器 | 在 block 内额外插入小模块 | 参数高效，适合任务适配 | 对强几何控制不如显式控制分支 | VD3D, 各类 Video DiT adapter |
| ControlNet 风格并行控制分支 | 单独建 control branch，逐层产生 hint/residual 注入主干 | 最适合 depth / seg / edge 这类 dense 结构控制 | 计算更重，分支设计更复杂 | Cosmos-Transfer2.5, VD3D, Ctrl-Adapter |

如果按“控制信号的稠密程度”理解：

- 稀疏条件，如文本、相机位姿、动作标签，更适合 cross-attention 或 adapter。
- 稠密条件，如 depth、segmentation、edge、mask，更适合 ControlNet 风格分支。
- 多种 dense 条件同时出现时，就需要多分支融合或显式控制权重。

## DiT 中使用 ControlNet，核心不是复制 U-Net，而是复制“逐层可控残差”

在 DiT 里，ControlNet 思路通常会被改写成下面这个版本：

1. 把控制图也 patchify 成 token  
   深度图、边缘图、分割图先变成和视频 latent 对齐的 token 序列。

2. 建一个 control branch Transformer  
   它不负责直接出图，只负责读取控制 token 并生成逐层 hint。

3. 用 zero-init 投影保证稳定启动  
   控制分支在训练初期近似“不起作用”，避免一开始就破坏主干分布。

4. 把 hint 加回主干 DiT block  
   常见做法是在每个 block 输出处，或 block 内部某个 residual 路径上，加入 `hint_i * scale`。

因此，DiT 版 ControlNet 的等价表述更接近：

```text
control map -> control tokens -> control transformer -> layerwise hints
                                                  |
main video tokens -> main DiT blocks <-----------+
```

这和 U-Net 版 ControlNet 的共同点是“旁路控制分支 + 零初始化 + 渐进注入”，但实现形态已经从“多尺度卷积特征残差”变成了“逐层 token-space hint”。

## 三条最值得记住的 DiT-Control 路线

### 1. CameraCtrl：把条件当作额外语义，在 cross-attention 里注入

CameraCtrl 的思路最像“给视频 DiT 加一个新的条件模态”。相机参数先编码，再在 DiT 的 cross-attention 中和文本条件一起作用。

这条路线的特点是：

- 优点：轻，适合 6-DoF 相机轨迹这类稀疏控制。
- 局限：对 depth/seg 这类逐像素结构约束不够硬。

所以它更像 **condition token injection**，不是完整的 ControlNet。

### 2. Ctrl-Adapter：保留已有 ControlNet，把它适配到 DiT

Ctrl-Adapter 的关键观点是：预训练 ControlNet 中间特征具有跨骨架迁移性，不一定非要为每个 DiT 重训一套 ControlNet。

它的做法是：

- 冻结已有 ControlNet；
- 在 ControlNet 和目标扩散模型之间插入 adaptation layer；
- 用 Cross-Attention / Conv / MoE 路由把 ControlNet 特征对齐到 DiT。

这条路线不是“DiT 自己原生长出 ControlNet”，而是 **把既有 ControlNet 迁移到 DiT**。当已有强 control prior、但目标 DiT 很大、不想重训时，这条路线很有吸引力。

### 3. Cosmos-Transfer2.5：原生多控制分支 DiT

Cosmos-Transfer2.5 则更进一步。它不是简单地“给 DiT 多加一个条件”，而是明确把自己做成 **multi-controlnet**：

- 输入可以是 depth / edge / seg / vis 等多种 dense 控制；
- 控制信号有独立权重；
- 可以附带 spatiotemporal mask；
- 单视角和多视角版本共用同一套逐层 hint 思路。

这条路线特别适合 Physical AI，因为机器人和自动驾驶最需要的是 **结构保持下的域迁移**，而不是自由创作式编辑。

## Cosmos-Transfer2.5 的代码级拆解

下面只抓最关键的几处。

### 1. 入口层：官方直接把它定义成 multi-controlnet

在官方 README 与 `docs/inference.md` 里，Transfer2.5 被定义为：

- 接收多个视频模态控制输入；
- 用 JSON `controlnet_specs` 配置；
- 支持 single-control 和 multi-control；
- 每个控制都可以单独指定 `control_weight`；
- 还可以加 `mask_path` 做局部控制。

这说明它的工程接口本身就是 ControlNet 式的，而不是抽象的“多模态条件”。

### 2. 推理配置层：控制是按 modality 显式组织的

`docs/inference.md` 的 JSON 结构大致是：

```json
{
  "video_path": "...",
  "guidance": 3,
  "depth": { "control_path": "...", "control_weight": 0.5 },
  "edge":  { "control_path": "..." },
  "seg":   { "control_path": "...", "control_weight": 1.0 },
  "vis":   { "control_weight": 0.5 }
}
```

这类设计有两个重要含义：

- 控制不是在 prompt 里隐式描述，而是显式绑定到结构模态。
- 多控制融合在接口层就是一等公民，不是后加 hack。

### 3. `cosmos_transfer2/inference.py`：把多控制权重整理后送入统一推理管线

`Control2WorldInference._generate_sample()` 会：

- 从 sample 中收集各个 control modality；
- 把各 control 的 `control_weight` 组装成字符串/列表；
- 调用 `generate_img2world(...)`；
- 同时保存输出视频、控制视频、mask 视频。

这一步表明 Cosmos 的多控制不是训练时特例，而是推理 API 的标准路径。

### 4. `minimal_v4_lvg_dit_control_vace.py`：单视角版的 DiT-ControlNet 核心

这一文件是理解 Transfer2.5 的关键。

#### `ControlAwareDiTBlock`

主干 block 在正常前向后，会额外做一件事：

```text
x = base_block(x, ...)
x = x + hints[block_id] * control_context_scale
```

这就是 Cosmos 里“把控制信号打进 DiT”的最核心操作。  
不是在输入端一次性拼完就结束，而是 **逐层加 hint**。

#### `ControlEncoderDiTBlock`

这是真正的 control branch block。它负责把控制 token 变成主干可消费的 hint。

关键点有两个：

- `before_proj` / `after_proj` 采用零初始化；
- 注释里直接写了 “Zero convolution as in ControlNet”。

也就是说，虽然 DiT 里没有卷积特征金字塔，Cosmos 仍然保留了 ControlNet 最关键的训练稳定性思想：**零初始化控制投影**。

#### `MinimalV4LVGControlVaceDiT.forward()`

这个前向过程基本就是 DiT-ControlNet 的教科书实现：

1. 对主视频 latent 做 patch embedding；
2. 对 control latent 做单独 patch embedding；
3. control branch 跑若干 `control_blocks`；
4. 得到一组 layerwise `hints`；
5. 主干 `blocks` 逐层消费这些 `hints`；
6. 最后 unpatchify 成输出视频。

如果是多控制分支，还会：

- 按 branch 分开编码；
- 根据 `control_context_scale` 或 `control_weight` 融合；
- 再变成一组共享的 layerwise hints。

所以 Transfer2.5 的 ControlNet 本质可以概括成：

```text
多模态控制图 -> 多个 control branch -> layerwise hints -> 主干 DiT block additive injection
```

### 5. `multiview_dit_control.py`：多视角版本不是另起炉灶，而是把同一套路扩到 multiview

多视角版 `MultiViewControlDiT` 做了三件额外的事：

- 用 `MultiViewCrossAttention` 替换普通 cross-attention；
- 引入 `view_embeddings` 处理 camera/view identity；
- control branch 和主干 branch 共同工作在多相机时序 token 序列上。

因此，多视角 Transfer2.5 的重点不是“多了一个控制器”，而是：

- 控制信号要跨视角一致；
- 主干世界模型要跨视角一致；
- 两者都要在 token 级别对齐。

这也是它比普通视频编辑式 ControlNet 更接近世界模型的地方。

## 用一张表看懂 Cosmos-Transfer2.5 在 DiT 控制版图中的位置

| 方法 | 主要条件 | 注入方式 | 是否是原生 ControlNet 分支 | 与 Cosmos-Transfer2.5 的关系 |
|---|---|---|---|---|
| CameraCtrl | 相机位姿 | cross-attention | 否 | 更轻，但控制更稀疏 |
| TIC-FT | 条件帧/控制帧 | in-context 拼接 | 否 | 更接近数据重排，而非显式控制分支 |
| Ctrl-Adapter | 预训练 ControlNet 特征 | adapter 对齐 | 半原生 | 适合迁移已有 ControlNet 到新 DiT |
| Cosmos-Transfer2.5 | depth / edge / seg / vis / mask | control branch -> layerwise hints | 是 | 原生多控制世界生成方案 |

## 为什么 Cosmos-Transfer2.5 特别适合 Physical AI

对机器人和自动驾驶来说，控制目标往往不是“生成得像”，而是“在几何和语义不漂的前提下改变视觉域”。这正是 Transfer2.5 这类 DiT-ControlNet 的强项：

- `depth` 负责稳住三维布局；
- `seg` 负责稳住语义区域；
- `edge` 负责稳住局部边界；
- `vis/blur` 负责提供较弱的外观先验；
- `mask` 负责把控制限制在需要的时空区域。

这意味着它不是一个通用视频编辑器，而是一个 **结构受控的世界转换器**。  
从世界模型视角看，这比“单纯提高观感”更重要，因为下游训练需要的是可控分布、可解释变化和多视角一致性。

## 实践上怎么选 DiT 控制路线

### 更适合用 cross-attention / adapter 的情况

- 控制信号稀疏，如相机轨迹、文本风格、动作标签；
- 希望尽量少改动主干；
- 任务更像条件补充，而不是硬结构约束。

### 更适合用 ControlNet 分支的情况

- 控制信号稠密，如 depth、seg、edge、optical flow、layout；
- 需要结构不漂；
- 需要多控制组合；
- 需要局部掩码控制；
- 任务是 Sim2Real、Real2Real、域增广、世界状态转换。

如果把用户问题直接翻译成技术选型：

- “让相机怎么走”更偏 CameraCtrl。
- “让画面必须遵守这张 depth / seg / edge”更偏 Cosmos-Transfer2.5 这类 DiT-ControlNet。
- “我已经有强大的预训练 ControlNet，不想重训”更偏 Ctrl-Adapter。

## 结论

DiT 的控制方法并不是简单把 U-Net 时代的 ControlNet 照搬过来，而是把“控制分支产生逐层残差”的思想 token 化、Transformer 化。

Cosmos-Transfer2.5 是这条路线里很典型、也很工程化的一例：

- 接口层把多控制作为标准输入；
- 网络层把 control branch 做成逐层 hint 生成器；
- 训练层保留了 ControlNet 的零初始化稳定策略；
- 多视角层把同一套机制扩展到世界模型场景。

因此，可以把它看成：

> **不是“在 DiT 旁边挂一个 ControlNet”，而是“把 ControlNet 重写成适合 DiT 世界模型的逐层控制分支”。**

## 相关笔记

- [Cosmos-Transfer2.5](cosmos-transfer2-5)
- [Cosmos-Predict2.5](cosmos-predict2-5)
- [Cosmos](cosmos)
- [Ctrl-Adapter 论文笔记](/video-generation/methods/conference-papers/ctrl-adapter-an-efficient-and-versatile-framework-for-adapting-diverse-controls-to-any-diffusion-model)
- [CameraCtrl 论文笔记](/video-generation/methods/conference-papers/cameractrl-enabling-camera-control-for-video-diffusion-models)
- [TIC-FT 论文笔记](/video-generation/methods/conference-papers/temporal-in-context-fine-tuning-for-versatile-control-of-video-diffusion-models)
