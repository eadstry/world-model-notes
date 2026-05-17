---
title: "Cosmos-Predict2.5: 统一 Text/Image/Video 条件的世界预测模型"
design: "Cosmos-Predict2.5"
github: https://github.com/nvidia-cosmos/cosmos-predict2.5
website: https://docs.nvidia.com/cosmos/latest/predict2.5/model_matrix.html
---

# Cosmos-Predict2.5: 统一 Text/Image/Video 条件的世界预测模型

::: info 资料入口
- **GitHub**: [nvidia-cosmos/cosmos-predict2.5](https://github.com/nvidia-cosmos/cosmos-predict2.5)
- **官方文档**: [Predict2.5 Model Matrix](https://docs.nvidia.com/cosmos/latest/predict2.5/model_matrix.html)
- **产品页**: [Cosmos-Predict2.5](https://research.nvidia.com/labs/cosmos-lab/cosmos-predict2.5/)
:::

## 核心定位

Cosmos-Predict2.5 是 Cosmos 平台中的世界预测模型族，目标是以视频形式模拟和预测物理世界的未来状态。它把 Text2World、Image2World 和 Video2World 统一在同一个 flow-based 模型框架下，并使用 Cosmos-Reason1 作为文本编码器，使自然语言提示能够更好地承载物理语义。

它与普通视频生成模型的区别在于任务定义：Predict2.5 不只是生成“看起来像视频”的内容，而是面向 Physical AI 的未来状态建模，强调机器人、自动驾驶、动作条件和多视角等可被下游系统使用的生成能力。

## 模型家族

官方文档把 Predict2.5 分为基础模型、自动驾驶模型和机器人模型：

| 模型 | 能力 | 输入 |
|---|---|---|
| `Cosmos-Predict2.5-2B/pre-trained` | 预训练基础模型 | text + image 或 video |
| `Cosmos-Predict2.5-2B/post-trained` | 后训练基础模型 | text + image 或 video |
| `Cosmos-Predict2.5-2B/auto/multiview` | 自动驾驶 7 摄像头视角生成 | text + image 或 video |
| `Cosmos-Predict2.5-2B/robot/action-cond` | 机器人动作条件预测 | action |

NVIDIA 研究页还列出 14B 的 pre-trained/post-trained 基础模型，以及更多机器人变体，如 robot/multiview、robot/multiview-agibot、robot/gr00tdream-gr1。也就是说，2.5 版本的主线是“基础 WFM + 领域后训练 checkpoint”。

## 三种推理模式

### Text2World

Text2World 从文本描述直接生成一个物理世界片段。它适合生成长尾场景原型，例如雨夜道路、仓库机器人、工厂抓取、施工现场等。这里的关键不是提示词艺术性，而是提示词要包含实体、空间关系、材质、光照、相机运动和物理约束。

### Image2World

Image2World 从单帧图像出发，让静态观测演化为动态视频。它适合“给定当前视觉状态，想象后续可能运动”的任务，比如机器人末端即将接触物体、车辆即将进入路口、人在场景中开始移动。

### Video2World

Video2World 从历史视频片段预测后续视频，是最接近世界模型定义的模式。它保留已有轨迹、场景布局和运动趋势，再生成未来状态。机器人和自动驾驶中更常用这一模式，因为系统通常已经有历史观测。

## 技术结构

### Flow-based 生成

Predict2.5 使用 flow-based 生成模型。与逐步去噪的传统 diffusion 叙述相比，flow matching 更强调学习从噪声到数据的连续传输路径。对视频世界模型来说，这种表述更自然地对应“状态随时间和潜变量轨迹演化”。

简化理解：

$$
z_t = (1-t)z_0 + t z_1
$$

模型学习的是在不同 $t$ 处推动潜变量从噪声走向视频数据分布的速度场。采样时求解这个速度场，生成满足条件的视频潜变量，再解码成视频。

### Cosmos-Reason1 文本编码

Predict2.5 使用 Cosmos-Reason1 作为文本编码器，这是它区别于许多通用视频生成模型的关键设计。Reason1 面向 Physical AI 场景，文本条件更容易携带物体关系、事件因果和物理常识，而不是只做风格描述。

### 多模态条件统一

Predict2.5 把文本、图像和视频条件放在同一个接口中处理。官方 quickstart 的输入参数采用 JSON 文件组织，核心字段包括 `inference_type`、`prompt`、`input_path` 等。不同模式只是在条件是否包含图像/视频、使用多少条件帧上发生变化。

## 后训练路径

Predict2.5 的工程价值主要来自后训练。基础模型提供通用世界先验，后训练把它迁移到具体物理任务。

### 1. Auto Multiview 后训练

Auto Multiview 使用 Waymo 等多摄像头数据进行后训练，目标是生成自动驾驶场景中的多摄像头视角。官方示例数据格式包含前、前左、前右、侧左、侧右等多视角视频和 caption 文件。

官方模型矩阵把 `Cosmos-Predict2.5-2B/auto/multiview` 标为 driving, 7-camera view，因此这里的重点不是普通的单路 Video2World，而是 7 路环视相机的联合生成。模型需要同时保持时间一致性和跨视角几何一致性：同一辆车、行人、车道线或路口结构，不能在不同摄像头中出现互相矛盾的位置、尺度和运动状态。

这个能力解决的是自动驾驶中的多视角数据扩展问题：真实采集的多摄像头同步数据昂贵，而模型一旦学会多视角生成，就可以补充稀有天气、地理区域、交通状态和长尾事件。它更像是环视数据的世界预测器，适合为 BEV 感知、occupancy、预测和规划模型提供多相机一致的训练样本。

### 2. Action-conditioned Video2World

动作条件后训练把机器人动作作为条件输入。官方示例使用 Bridge 数据集，其中每个 JSON annotation 包含末端执行器 pose、夹爪状态和动作位移。模型学习：

$$
p(x_{t+1:t+k} \mid x_{\leq t}, a_{t:t+k})
$$

即给定当前视觉观测和未来动作序列，预测动作会导致怎样的视频结果。这是机器人世界模型最关键的形式之一，因为它把“想象未来”直接绑定到“执行动作”。

### 3. Cosmos-NeMo-Assets 与 DreamGen Bench

这些路径用于把基础 Video2World 模型适配到官方资产或特定数据集。它们的意义在于提供可复现的数据准备、训练配置和 checkpoint 转换流程，降低从基础模型到任务模型的迁移成本。

### 4. LoRA 后训练

LoRA 适合快速适配小规模领域数据。与全量后训练相比，它更适合做特定机器人工作站、特定驾驶区域、特定相机外参或固定视觉域的轻量定制。

## 推理与训练工程

### 安装与运行

官方安装流程使用 `uv sync` 创建环境，checkpoint 通过 Hugging Face 自动下载。推理入口主要是 `examples/inference.py`：

```bash
python examples/inference.py \
  -i assets/base/robot_pouring.json \
  -o outputs/base_video2world \
  --inference-type=video2world
```

多 GPU 推理可用 `torchrun`：

```bash
torchrun --nproc_per_node=8 examples/inference.py \
  -i assets/base/*.json \
  -o outputs/base
```

### 多 GPU 注意点

官方文档强调 context parallelism 会把视频帧分布到多张 GPU 上。实践上应注意：

- GPU 数最好能整除生成帧数；
- 每张 GPU 的显存和算力应一致；
- 14B 或多视角模型更依赖多 GPU；
- NCCL 和 GPU 互联会影响效率。

### Checkpoint 形态

Predict2.5 后训练使用两类 checkpoint：

| 格式 | 用途 | 特点 |
|---|---|---|
| DCP distributed checkpoint | 训练保存与恢复 | 多文件、分片、适合 FSDP 和多 GPU |
| consolidated `.pt` | 推理和分发 | 单文件、易加载、适合发布和单机推理 |

后训练得到的 DCP checkpoint 通常需要转换为 consolidated PyTorch 格式后再推理。

## 方法价值

### 对机器人

Predict2.5 的 action-conditioned 路径把世界模型从“生成未来视频”推进到“根据动作预测后果”。这对策略学习很关键：策略不只需要看到未来，还需要比较不同动作会带来什么不同结果。

### 对自动驾驶

Auto Multiview 让模型学习多摄像头同步世界演化。自动驾驶中的世界模型必须处理跨视角一致性、道路几何、交通参与者运动和长尾场景，Predict2.5 的后训练路径正是围绕这些需求设计。

### 对数据生成

Predict2.5 是合成数据工厂的生成端。它可以从文本构造场景、从图像扩展动态、从视频续写未来，再与 Transfer2.5 的控制生成组合，形成可控的数据扩增流程。

## 局限

- Text2World 的物理约束仍依赖提示、数据和评测闭环，不能默认视为真实仿真。
- Video2World 容易在长时间预测中累积误差，需要滑动窗口、重采样或外部约束。
- Action-conditioned 模型的动作语义强依赖数据集标注格式，跨机器人平台迁移并不自动成立。
- 多视角生成对几何一致性要求高，推理和后训练成本明显高于单视角模型。

## 适合记录的关键词

World Foundation Model, Physical AI, Text2World, Image2World, Video2World, flow matching, Rectified Flow, Cosmos-Reason1, post-training, auto multiview, action-conditioned video prediction, Bridge dataset, Waymo, DCP checkpoint, consolidated checkpoint.

## 相关笔记

- [Cosmos 平台总览](cosmos)
- [Cosmos-Transfer2.5](cosmos-transfer2-5)
- [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams)
- [Latent Diffusion 分类综述](./)
