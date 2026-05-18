---
title: "Cosmos-Transfer2.5: 基于多控制信号的条件世界生成"
design: "Cosmos-Transfer2.5"
github: https://github.com/nvidia-cosmos/cosmos-transfer2.5
website: https://docs.nvidia.com/cosmos/latest/transfer2.5/model_matrix.html
---

# Cosmos-Transfer2.5: 基于多控制信号的条件世界生成

::: info 资料入口
- **GitHub**: [nvidia-cosmos/cosmos-transfer2.5](https://github.com/nvidia-cosmos/cosmos-transfer2.5)
- **官方文档**: [Transfer2.5 Model Matrix](https://docs.nvidia.com/cosmos/latest/transfer2.5/model_matrix.html)
- **产品页**: [Cosmos-Transfer2.5](https://research.nvidia.com/labs/cosmos-lab/cosmos-transfer2.5/)
:::

## 核心定位

Cosmos-Transfer2.5 是构建在 Cosmos-Predict2.5 之上的条件世界生成模型。它接收来自仿真或真实视频的空间控制信号，例如 depth、edge、segmentation、blur 等，并生成保持结构约束的高质量世界模拟视频。

如果说 Predict2.5 负责“预测未来世界”，Transfer2.5 负责的就是“把一个受控世界转换成另一个视觉域中的世界”。这使它特别适合 Sim2Real、Real2Real、自动驾驶场景改写和机器人数据增强。

## 与 Predict2.5 的关系

Transfer2.5 不是从零训练的独立视频生成器，而是以 Predict2.5 的世界生成能力为基础，再加入可控条件分支。它保留 Predict2.5 的物理世界先验，同时通过控制信号约束结构：

- Predict2.5 提供时序生成和世界动态先验；
- Transfer2.5 提供空间结构、语义布局和外观域控制；
- 二者组合后可以既生成合理动态，又保留几何/语义条件。

## 控制模态

| 控制类型 | 约束内容 | 典型用途 |
|---|---|---|
| depth | 几何深度和 3D 布局 | Sim2Real、机器人场景、驾驶道路结构 |
| edge | 轮廓和局部边界 | 保持物体形状、边界和结构 |
| segmentation | 语义区域 | 保持道路、车辆、机械臂、物体等类别布局 |
| blur / visual control | 外观或低频视觉约束 | 域转换、视觉风格约束 |
| mask | 空间区域选择 | 只在指定区域施加控制，避免全局过约束 |
| multi-control | 多模态组合 | 同时约束几何、语义和边界 |

官方 quickstart 的参数文件采用 JSON 风格配置。一个 multi-control 样例会分别给 depth、edge、seg、vis 指定控制视频路径和 `control_weight`，从而形成声明式控制。

## 方法机制

### 1. 控制信号作为世界结构条件

Transfer2.5 的控制输入不是普通提示词，而是可对齐到每帧、每个空间位置的结构条件。模型在生成过程中被要求同时满足文本语义和控制视频提供的几何/语义约束。

这对世界模型很重要，因为 Physical AI 更关心“可执行结构”而不是纯视觉风格。例如机器人任务中，桌面、物体、机械臂位姿必须保持一致；自动驾驶中，道路拓扑、车道线、交通参与者位置不能随意漂移。

### 2. 多控制权重

Transfer2.5 允许为不同控制模态指定权重。权重越高，生成结果越贴合该模态；权重过高则可能抑制模型补充真实纹理和细节。因此 multi-control 的实用策略通常是：

- depth 用来稳住整体几何；
- segmentation 用来稳住语义布局；
- edge 用来稳住边界；
- blur/visual control 用较低权重提供外观倾向；
- mask 用于局部控制，减少不必要的全局约束。

### 3. 蒸馏与边缘部署

官方文档将 base 和 distilled edge 版本进行了推理性能对比。Distilled Edge 模型显著降低 diffusion 时间，说明 Transfer2.5 的工程目标不只是离线生成，而是逐步走向边缘设备或准实时数据生成。

## 模型与硬件

官方 Model Matrix 中列出的核心模型包括：

| 模型 | 描述 | 最小 GPU 数 | 显存要求 |
|---|---|---:|---:|
| `Cosmos-Transfer2.5-2B` | 面向 Physical AI 和机器人训练的 general checkpoint | 1 | 65.4 GB |
| `Cosmos-Transfer2.5-2B Auto` | 面向自动驾驶应用后训练的专用 checkpoint | 8 | 依赖多视角任务配置 |

Auto 变体可以进一步理解为面向自动驾驶的受控多视角转换模型。它依赖多路相机 spec 和控制信号组织输入，默认多视角配置启用 7 个 view；只要某个 camera entry 提供 `control_path`，就会成为 active view。与 Predict2.5 Auto Multiview 偏重“生成 7 路相机世界状态”不同，Transfer2.5 Auto 更强调在 depth、segmentation、edge、HD map、LiDAR 等控制条件下改变场景外观或域条件，同时尽量保持道路几何、交通参与者位置和相机布局不漂移。

推理性能强依赖 GPU 类型、控制模态、帧数、active view 数量和 guardrail 设置。官方文档中的 segmentation 示例以 720P、16FPS、5 秒、93 帧作为对比条件；多视角推理默认需要 8 GPU，但如果减少 JSON spec 中的 active views，也可以相应减少并行 GPU 数。

## 典型工作流

### 机器人 Sim2Real

1. 在 Isaac Sim 或其他仿真环境中生成 RGB、depth、segmentation、edge 等条件；
2. 用 Transfer2.5 生成照片级真实视频；
3. 保留仿真提供的动作、状态、物体标签等监督信号；
4. 用合成真实感视频训练视觉策略或感知模型；
5. 用真实数据评估 sim-to-real gap 是否缩小。

这条路径的关键在于：仿真提供可控结构，Transfer2.5 提供真实感外观。

### 自动驾驶场景转换

Transfer2.5 可以把已有驾驶视频转换到不同天气、光照、地理风格或感知域。与纯文本视频生成相比，它更容易保持道路结构、车辆位置和摄像头运动一致。

典型用途包括：

- 晴天到雨雪/夜间；
- 仿真渲染到真实摄像头域；
- 单场景多条件重采样；
- 多视角自动驾驶数据增强。

在多视角场景中，Transfer2.5 Auto 的价值在于“同一结构，多种条件”。例如同一组 7-camera driving clips 可以在语义分割或深度控制下转换为雨夜、雾天、逆光或不同城市视觉域；由于控制信号来自原始视频或仿真/地图管线，生成结果更容易保留车道拓扑、障碍物分布和跨相机空间关系。这样得到的数据适合用于测试感知模型是否只记住了晴天纹理，还是能够在结构一致但外观变化的条件下保持鲁棒。

### Real2Real

Real2Real 指真实视频之间的域转换，例如改变天气、时间、材质或风格，同时尽量保持原始运动和几何。它适合构造反事实数据：同一个交通事件在不同天气或光照下可能如何呈现。

## 与 Transfer1 的差异

| 维度 | Cosmos-Transfer1 | Cosmos-Transfer2.5 |
|---|---|---|
| 基座 | Cosmos 早期 WFM | Predict2.5 |
| 参数规模 | 以 7B 路线为主 | 2B general/auto 路线降低部署门槛 |
| 控制配置 | 更偏固定脚本和模型变体 | JSON 参数文件和多控制权重更工程化 |
| 领域变体 | 通用 + 自动驾驶 | general + auto，并与 Predict2.5 生态联动 |
| 性能路径 | 多步生成与蒸馏探索 | distilled edge 性能对比更明确 |

## 方法价值

Transfer2.5 的核心价值是把世界模型从“开放式未来生成”推进到“结构受控的世界编辑与域迁移”。对 Physical AI 来说，这比单纯提升视频清晰度更重要，因为下游训练需要可控标签、可控分布和可解释的场景变化。

它特别适合填补真实数据难以覆盖的部分：

- 稀有天气；
- 稀有物体外观；
- 罕见道路拓扑；
- 机器人工作站中的不同材质和光照；
- 仿真到真实视觉域差异。

## 局限

- 控制信号质量决定上限：错误 depth 或 segmentation 会直接污染生成结果。
- 多控制权重需要调参，过强会僵硬，过弱会漂移。
- 真实物理属性无法仅凭视觉控制完全保证，例如接触力、摩擦、遮挡后的物体状态。
- 自动驾驶多视角场景需要高显存和多 GPU，离轻量部署仍有距离。

## 相关笔记

- [DiT 控制方法综述：ControlNet 路线与 Cosmos-Transfer2.5](dit-control-methods-and-cosmos-transfer2-5)
- [Cosmos 平台总览](cosmos)
- [Cosmos-Predict2.5](cosmos-predict2-5)
- [Cosmos-Transfer1](cosmos-transfer1)
- [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams)
