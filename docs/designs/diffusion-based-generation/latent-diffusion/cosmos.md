---
title: "Cosmos World Foundation Model Platform for Physical AI"
design: "Cosmos"
arxiv: https://arxiv.org/abs/2501.03575
github: https://github.com/nvidia-cosmos
---

# Cosmos: 面向 Physical AI 的世界基础模型平台

::: info 论文信息
- **Design**: Cosmos
- **论文全称**: Cosmos World Foundation Model Platform for Physical AI
- **arXiv**: [https://arxiv.org/abs/2501.03575](https://arxiv.org/abs/2501.03575)
- **GitHub**: [https://github.com/nvidia-cosmos](https://github.com/nvidia-cosmos)
:::

## 一、平台概览与设计哲学

Cosmos 是 NVIDIA 推出的面向 Physical AI 的开放平台，以世界基础模型（World Foundation Model, WFM）为核心引擎。Physical AI 指的是需要在物理世界中感知、推理和行动的人工智能系统——包括自动驾驶汽车、工业机器人、人形机器人和视频分析智能体等。这些系统面临一个共同瓶颈：**获取大规模、多样化、可控的真实世界训练数据极其困难且昂贵**。

Cosmos 的设计哲学源于"**数字孪生**"（Digital Twin）理念：一个完整的 Physical AI 系统需要两个数字孪生——一个是**策略模型**（Policy Model）的数字孪生，负责决策与控制；另一个是**世界模型**（World Model）的数字孪生，负责模拟物理世界的动态演化。Cosmos 的定位是提供后者——一个通用的、可微调的、开放的世界模拟引擎。

Cosmos 是业界最开放的 Physical AI 世界模型平台：
- **代码**：Apache 2.0 许可，完全开源
- **模型权重**：NVIDIA Open Model License，允许商业使用和衍生
- **数据管线**：开源视频策划工具链（Curator）
- **模型规模**：提供 2B 和 14B 参数版本，覆盖从研究到生产的各种场景

## 二、六组件的平台生态

Cosmos 不是一个单一模型，而是一个由六个紧密协作的组件构成的完整平台生态：

| 组件 | 功能定位 | 仓库/入口 |
|---|---|---|
| **Cosmos Predict2.5** | 世界生成：从文本 / 图像 / 视频预测未来世界状态（2B / 14B） | [github.com/nvidia-cosmos/cosmos-predict2.5](https://github.com/nvidia-cosmos/cosmos-predict2.5) |
| **Cosmos Transfer2.5** | MultiControlNet：通过空间控制信号实现仿真到照片级真实的变换 | [github.com/nvidia-cosmos/cosmos-transfer2.5](https://github.com/nvidia-cosmos/cosmos-transfer2.5) |
| **Cosmos Reason2** | 视觉语言模型：面向物理推理和视频理解的 VLM | [github.com/nvidia-cosmos/cosmos-reason2](https://github.com/nvidia-cosmos/cosmos-reason2) |
| **Cosmos Curator** | 视频数据过滤、标注、去重 | [github.com/nvidia-cosmos/cosmos-curate](https://github.com/nvidia-cosmos/cosmos-curate) |
| **Cosmos Dataset Search** | 即时数据集查询与场景检索 | [build.nvidia.com/nvidia/cosmos-dataset-search](https://build.nvidia.com/nvidia/cosmos-dataset-search) |
| **Cosmos Evaluator** | 生成视频输出的规模化质量评分 | [github.com/nvidia-cosmos/cosmos-evaluator](https://github.com/nvidia-cosmos/cosmos-evaluator) |

**Cosmos Predict2.5** 是平台的核心——世界生成引擎。它支持三种生成模态：Text2World（文本 → 视频）、Image2World（图像 → 视频）、Video2World（视频续写），能够以高保真度预测物理世界的未来状态。模型基于 Rectified Flow 生成范式，原生支持 1280×704 分辨率、121 帧（约 5 秒 @ 24fps）的视频生成。

**Cosmos Transfer2.5** 是条件化世界变换组件。它构建在 Predict2.5 之上，借鉴 ControlNet / MultiControlNet 架构，支持通过深度图、边缘图、分割图、视觉模糊图等多种 2D / 3D 空间控制信号，将一种视觉条件（如仿真渲染）转换为另一种视觉条件（如照片级真实）。这对于自动驾驶中的天气 / 光照 / 地理位置域迁移、机器人的 Sim2Real 转换等场景至关重要。

**Cosmos Reason2** 是面向 Physical AI 的视觉语言模型。它不仅理解视频内容，还具备物理常识和空间推理能力。更重要的是，通过 Cosmos RL 后训练框架，Reason2 可以从 VLM 进化为 VLA（Vision-Language-Action）模型，直接将视觉感知映射为机器人动作。Reason2 同时作为 Predict2.5 的文本编码器，为生成模型提供语义条件。

**Cosmos Curator** 是视频数据工程管线。它提供视频预处理、美学质量评分、运动分数计算、语义标注、文本-视频对齐评分和视频去重等全套工具。高质量的 WBbase 数据集（约 1 亿视频片段）正是通过 Curator 管线构建的。

**Cosmos Dataset Search** 是一个在线工具，允许用户通过自然语言描述快速检索海量视频数据集中的特定场景（如"雨天十字路口的驾驶场景"），大幅加速场景数据挖掘。

**Cosmos Evaluator** 提供视频生成质量的自动化评分能力，包括视觉质量、时间一致性、运动自然度等维度的评估，支持大规模模型的系统性基准测试。

## 三、三大应用场景映射

### 3.1 机器人学习（Robot Learning）

机器人的核心挑战在于——真实世界的数据采集成本极高，且策略训练时的 Exploration 存在安全隐患。Cosmos 的解决方案路径如下：

- **数据增强**：使用 Cosmos Predict2.5 对机器人操作数据集进行后训练（post-training），生成多样化的机器人视角视频和对应的世界动态预测，扩充训练数据
- **Sim2Real**：使用 Cosmos Transfer2.5 将仿真环境中的渲染图像转换为照片级真实图像，同时保持 3D 几何一致性（通过深度 / 边缘控制信号），使仿真训练的机器人策略更好地迁移到真实世界
- **VLA 模型训练**：将 Cosmos Reason2 通过 Cosmos RL 后训练框架微调为 VLA（Vision-Language-Action）模型，直接从视觉输入输出机器人动作指令
- **Physical AI Data Factory Blueprint**：NVIDIA 提供了一个端到端的机器人数据工厂参考实现，集成 Predict2.5 + Transfer2.5 + 真实数据采集管线，形成闭环的合成数据生产流程

### 3.2 自动驾驶训练（Autonomous Vehicle Training）

自动驾驶面临极端天气、罕见场景、地理多样性等长尾挑战，Cosmos 的多维度解决策略包括：

- **环境多样性变换**：使用 Cosmos Transfer2.5 将晴天驾驶视频变换为雨天、雪天、夜间等不同天气和光照条件，同时保持场景几何不变（通过深度 / 边缘控制信号约束）
- **地理域适应**：将美国道路场景变换为欧洲或亚洲的道路风格，辅助跨域模型泛化
- **多传感器多视图生成**：使用 Auto / Multiview 后训练模型，从单路前视视频生成 7 路环视视频，支持从有限传感器配置扩展到完整环绕视图
- **Physical AI Data Factory Blueprint**：与机器人场景类似，NVIDIA 提供了面向自动驾驶的数据工厂蓝图，集成多视图生成 + 天气域迁移 + 场景编辑

### 3.3 视频分析 AI 智能体（Video Analytics AI Agents）

Cosmos Reason2 作为视频理解 VLM，赋能实时视频分析智能体：

- **实时问答**：监控视频流中，Reason2 可以回答自然语言查询（如"在过去 5 分钟内，是否有行人横穿马路？"）
- **异常告警**：基于物理常识和场景理解，检测不符合物理规律或业务规则的异常事件
- **上下文洞察**：结合多帧时序信息，提供超越单帧分析的深层语义理解
- **NVIDIA Blueprint for Video Search and Summarization**：NVIDIA 提供了视频搜索与摘要的参考蓝图，将 Reason2 与向量数据库、RAG 管线集成，实现大规模视频智能体系统

## 四、核心技术原理解析

### 4.1 Rectified Flow 生成范式

Cosmos-Predict2.5 采用 Rectified Flow（流匹配）作为核心生成范式，而非传统的扩散模型。这是其推理效率的关键所在。

**传统扩散模型**的核心思路是学习从纯噪声中逐步去噪——定义一个前向加噪过程 $q(z_t | z_0)$，模型学习逆向去噪的 score function $\nabla_{z_t} \log p(z_t)$，推理时从高斯噪声出发，经过数百步的迭代去噪生成目标。

**Rectified Flow（流匹配）** 则采用不同的建模视角：直接在噪声分布和数据分布之间学习一条**直线向量场** $v(z_t, t)$，连接两个分布。具体来说，给定噪声样本 $z_1 \sim \mathcal{N}(0, I)$ 和数据样本 $z_0 \sim p_{data}$，定义插值路径：

$$z_t = (1-t)z_0 + t z_1$$

目标向量场为 $u(z_t, t) = z_1 - z_0$（即从数据指向噪声的直线向量），模型学习预测此向量场。对应的流 ODE 为：

$$dz_t = v(z_t, t)dt$$

由于 Rectified Flow 天然规划的是直线轨迹，相比传统扩散的弯曲轨迹，所需的采样步数大幅减少，生成效率显著提升。

**UniPC 采样器**（Unified Predictor-Corrector）用于加速 Rectified Flow 的 ODE 求解。UniPC 通过高阶预测（predictor）和校正（corrector）步骤的交替执行，在极少的采样步数内即可获得高质量结果。

**DMD2 蒸馏**（Distribution Matching Distillation v2）将多步采样压缩为 1-4 步。DMD2 通过分布匹配损失蒸馏教师模型的多步生成能力到学生模型，使得边缘设备上的实时推理成为可能。Cosmos 仓库中提供了详细的 Rectified Flow 技术文档（`docs/rectified-flow.md`）。

### 4.2 视频分词器体系

Cosmos 的视频分词器（Video Tokenizer）是连接高分辨率像素空间和紧凑隐空间的桥梁，两类分词器分工明确：

| 分词器 | 类型 | 时空压缩比 | 适用场景 |
|---|---|---|---|
| **CV8×8×8** | 连续（Continuous） | 空间 8×，时间 8× | 扩散 / Flow 模型在隐空间生成 |
| **DV8×16×16** | 离散（Discrete） | 空间 8×，时间 16× | 自回归模型（next-token prediction） |

CV8×8×8 将视频压缩到连续的隐空间表示，总压缩比约为 512×（$8 \times 8 \times 8 = 512$），极大降低了扩散模型在像素空间直接计算的内存和时间开销。DV8×16×16 则输出离散 token，总压缩比约为 1024×，适用于自回归生成范式。

连续分词器配合 Rectified Flow 扩散模型构成 Cosmos-Predict2.5 的默认生成管线。此外，Cosmos-Predict2.5 仓库还额外支持 **Wan2.1 VAE** 分词器作为备选方案，为需要兼容 Wan2.1 生态的场景提供灵活性。

### 4.3 MultiControlNet 架构（Transfer2.5）

Cosmos-Transfer2.5 在 Predict2.5 之上构建了强大的空间条件变换能力，其架构核心是 MultiControlNet（多控制网络）。

**架构定位**：Transfer2.5 不是一个独立的生成模型，而是以 Predict2.5 为基座，外挂多个 ControlNet 分支。每个 ControlNet 分支接收一种空间控制信号（如深度图、边缘图），将控制信息注入基座模型的中间特征层，引导生成过程严格遵循空间约束。

**核心创新——JSON 声明式配置**：Transfer2.5 通过 `controlnet_specs` 的 JSON 格式声明控制条件，无需修改代码即可组合多种控制模态：

```json
[
  {"controlnet_modality_name": "depth", "scale": 0.7},
  {"controlnet_modality_name": "edge", "scale": 0.5},
  {"controlnet_modality_name": "segmentation", "scale": 0.3}
]
```

每个模态的 `scale` 参数控制其约束强度，支持灵活的多模态加权组合。

**支持的模态类型**：RGB、深度（depth）、语义分割（segmentation）、边缘（edge）、视觉模糊（visual blur）以及更多 2D / 3D 空间控制信号。

**时空控制权重**：Transfer2.5 支持区域级（spatial region）和时间级（temporal frame）的精细控制权重映射，允许在视频的不同区域或不同帧施加不同程度的约束强度。

**Auto / Multiview（自动驾驶多视图）**：专门后训练的模型变体，能够从单路前视视频和对应的控制信号（如深度图）出发，生成 7 路环绕摄像机视图（前、前左、前右、后、后左、后右、侧），完整覆盖自动驾驶感知需求。

**Robot Multiview Control（机器人多视图）**：为机器人操作场景特化的版本，支持 4 种控制类型，覆盖机械臂工作空间的多视角视图生成。

**Edge Distilled（边缘蒸馏版）**：通过 DMD2 蒸馏技术将 Transfer2.5 压缩为单步推理模型，可直接部署在边缘设备（如 NVIDIA Jetson Orin）上，实现实时域的 Sim2Real 变换。

### 4.4 Cosmos Reason VLM

Cosmos Reason2 是专门为 Physical AI 场景设计的视觉语言模型，核心能力包括：

- **物理先验融合**：模型在训练中融合了物理常识和因果推理能力，能够理解视频中物体的运动、碰撞、遮挡等物理规律
- **多帧视频理解**：原生支持多帧输入，捕捉时序动态，而非单帧图像的简单堆叠
- **空间推理**：理解 3D 空间关系和视角变换，这对于机器人导航和操作至关重要

**Cosmos RL 后训练**：Reason2 提供了 RL（强化学习）后训练框架，可以将其从通用 VLM 微调为 VLA（Vision-Language-Action）模型。VLA 模型直接输出连续动作空间（如机器人关节角度）或离散动作类别（如导航指令），实现从感知到行动的一体化映射。

**与 Predict2.5 的协同**：Reason2 同时作为 Predict2.5 的文本编码器（Text Encoder），将自然语言提示编码为语义嵌入，为世界生成提供条件信号。这使得 Predict2.5 的 Text2World 功能能够理解复杂的、包含物理约束的自然语言指令。

## 五、完整代码使用流程

### 5.1 环境配置

基础环境要求：Python 3.10-3.13，CUDA 12.x 或 13.0。

**Cosmos-Predict2.5 安装**：

```bash
# 克隆仓库
git clone https://github.com/nvidia-cosmos/cosmos-predict2.5.git
cd cosmos-predict2.5

# 方式 A：使用 uv（NVIDIA 推荐）
uv sync --extra cu129  # CUDA 12.x 使用 cu129；CUDA 13.0 使用 cu130

# 方式 B：使用 pip
pip install -e ".[cu129]"

# Docker 方式（免配置 CUDA 环境）
docker build -t cosmos-predict2.5 .
```

**Cosmos-Transfer2.5 安装**：

```bash
git clone https://github.com/nvidia-cosmos/cosmos-transfer2.5.git
cd cosmos-transfer2.5
uv sync --extra cu129
```

### 5.2 模型下载

Cosmos 模型权重托管在 HuggingFace。首次推理运行时会自动下载，也可手动预下载：

```bash
# 启用高速下载
export HF_HUB_ENABLE_HF_TRANSFER=1
```

主要 HuggingFace 仓库：

| 仓库名 | 内容 |
|---|---|
| `nvidia/Cosmos-Predict2.5-2B` | 2B 模型：base / pre-trained / post-trained / distilled |
| `nvidia/Cosmos-Predict2.5-14B` | 14B 模型：pre-trained / post-trained |
| `nvidia/Cosmos-Transfer2.5-2B` | Transfer 模型：general / auto / robot-multiview-control |
| `nvidia/Cosmos-Transfer2.5-2B/distilled/` | 蒸馏版 Transfer 模型 |

### 5.3 Cosmos-Predict2.5 推理命令

#### Text2World（文本生成视频）

```bash
# 2B base 模型的文本生成世界 —— 从自然语言描述生成视频
CUDA_VISIBLE_DEVICES=0 python -m cosmos_predict2.main \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --prompt "A car driving through a rainy city street at night, reflections on wet pavement" \
  --num_frames 121 \
  --width 1280 --height 704
```

#### Image2World（图像生成视频）

```bash
# 从静态图像出发，生成动态视频序列
CUDA_VISIBLE_DEVICES=0 python -m cosmos_predict2.main \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --input_type image \
  --input_path /path/to/input.jpg \
  --prompt "The scene continues as the camera moves forward" \
  --num_frames 121
```

#### Video2World（视频续写）

```bash
# 从已有视频片段出发，预测未来多帧
CUDA_VISIBLE_DEVICES=0 python -m cosmos_predict2.main \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --input_type video \
  --input_path /path/to/input.mp4 \
  --prompt "Continue this driving scene" \
  --num_frames 121 \
  --num_conditional_frames 9  # 前 9 帧作为条件输入
```

#### Diffusers 集成（Python API）

```python
import torch
from diffusers import Cosmos2_5_PredictBasePipeline

# 加载 2B 模型，使用 bfloat16 精度
pipe = Cosmos2_5_PredictBasePipeline.from_pretrained(
    "nvidia/Cosmos-Predict2.5-2B",
    torch_dtype=torch.bfloat16
)
pipe = pipe.to("cuda")

# 文本生成视频
output = pipe(
    prompt="A robot arm picking up an object on a table",
    num_frames=121,
    height=704,
    width=1280,
)
output.frames[0].save("output.mp4")
```

### 5.4 Cosmos-Transfer2.5 推理命令

#### 基础单控制推理

```bash
# 使用深度图作为控制信号，将仿真视频转换为照片级真实
CUDA_VISIBLE_DEVICES=0 python -m cosmos_transfer2.main \
  --checkpoint_dir checkpoints/Cosmos-Transfer2.5-2B \
  --input_video_path /path/to/input.mp4 \
  --control_video_path /path/to/control.mp4 \
  --controlnet_specs '{"controlnet_modality_name": "depth", "scale": 0.8}' \
  --prompt "A modern kitchen with marble countertops"
```

#### 多控制 JSON 配置

```bash
# 同时使用深度、边缘、分割三种控制信号
CUDA_VISIBLE_DEVICES=0 python -m cosmos_transfer2.main \
  --checkpoint_dir checkpoints/Cosmos-Transfer2.5-2B \
  --input_video_path /path/to/input.mp4 \
  --control_video_path /path/to/depth.mp4 /path/to/edge.mp4 /path/to/seg.mp4 \
  --controlnet_specs '[
    {"controlnet_modality_name": "depth", "scale": 0.7},
    {"controlnet_modality_name": "edge", "scale": 0.5},
    {"controlnet_modality_name": "segmentation", "scale": 0.3}
  ]' \
  --prompt "Driving through a snowy urban environment"
```

#### Auto / Multiview 自动驾驶多视图

```bash
# 从单路前视视频生成 7 路环视输出，4 GPU 并行
CUDA_VISIBLE_DEVICES=0,1,2,3 python -m cosmos_transfer2.main \
  --checkpoint_dir checkpoints/Cosmos-Transfer2.5-2B/auto \
  --checkpoint_name multiview \
  --input_video_path /path/to/front_camera.mp4 \
  --control_video_path /path/to/front_depth.mp4 \
  --controlnet_specs '{"controlnet_modality_name": "depth", "scale": 0.8}' \
  --prompt "Driving scene, daytime, clear weather" \
  --num_gpus 4
```

#### Edge Distilled 边缘推理

```bash
# 蒸馏版单步推理，适合边缘设备部署
CUDA_VISIBLE_DEVICES=0 python -m cosmos_transfer2.main \
  --checkpoint_dir checkpoints/Cosmos-Transfer2.5-2B/distilled/general/edge \
  --checkpoint_name edge \
  --input_video_path /path/to/input.mp4 \
  --control_video_path /path/to/edge.mp4 \
  --controlnet_specs '{"controlnet_modality_name": "edge", "scale": 1.0}' \
  --prompt "Industrial robot arm in a factory" \
  --num_steps 1  # 单步蒸馏推理，极低延迟
```

### 5.5 后训练（微调）

Cosmos 提供了完整的后训练管线，允许开发者使用自定义数据集对预训练模型进行领域适配。

#### LoRA 微调 — Video2World

```bash
# 8 GPU LoRA 低秩微调，适配自定义视频数据集
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 python -m cosmos_predict2.post_training \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --dataset_type video \
  --dataset_path /path/to/custom_dataset \
  --lora_rank 64 \
  --lora_alpha 128 \
  --learning_rate 1e-4 \
  --train_batch_size 1 \
  --gradient_accumulation_steps 8 \
  --num_epochs 10 \
  --output_dir ./output/lora_checkpoints
```

#### Cosmos-NeMo-Assets 数据集后训练

```bash
# 使用 NVIDIA 官方发布的 Cosmos-NeMo-Assets 数据集进行完整微调
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 python -m cosmos_predict2.post_training \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --dataset_type cosmos_nemo_assets \
  --dataset_path /path/to/cosmos-nemo-assets \
  --post_training_mode video2world \
  --num_frames 121 \
  --learning_rate 5e-5 \
  --num_epochs 20 \
  --output_dir ./output/video2world_ft
```

#### 动作条件后训练 — 机器人

```bash
# 为机器人场景添加动作条件，训练世界动态预测与策略联合模型
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 python -m cosmos_predict2.post_training \
  --checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --checkpoint_name base \
  --post_training_mode video2world_action \
  --dataset_path /path/to/robot_dataset \
  --action_dim 7 \
  --learning_rate 1e-4 \
  --num_epochs 30 \
  --output_dir ./output/action_cond
```

### 5.6 模型蒸馏

Cosmos 支持通过 DMD2（Distribution Matching Distillation v2）将大模型的多步采样能力蒸馏到小步数模型，实现实时推理。

```bash
# DMD2 蒸馏：将 post-trained 教师模型蒸馏为 4 步学生模型
CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 python -m cosmos_predict2.distill \
  --teacher_checkpoint_dir checkpoints/Cosmos-Predict2.5-2B \
  --teacher_checkpoint_name post_trained \
  --num_distill_steps 4 \
  --learning_rate 1e-5 \
  --num_iterations 50000 \
  --output_dir ./output/distilled_4step
```

蒸馏后推理：

```bash
# 使用蒸馏模型进行 4 步快速推理
CUDA_VISIBLE_DEVICES=0 python -m cosmos_predict2.main \
  --checkpoint_dir ./output/distilled_4step \
  --checkpoint_name distilled \
  --prompt "A robot navigating through a warehouse" \
  --num_steps 4 \
  --num_frames 121
```

### 5.7 数据管线工具

Cosmos Curator 提供视频数据工程的全套工具，用于构建高质量训练数据集。

```bash
# 克隆并安装 cosmos-curate
git clone https://github.com/nvidia-cosmos/cosmos-curate.git
cd cosmos-curate
uv sync --extra cu129

# 按质量分数过滤视频 — 保留美学分 ≥ 4.5 且运动分 ≥ 0.3 的视频
python -m cosmos_curate.cli filter \
  --input_dir /path/to/videos \
  --output_dir /path/to/filtered \
  --min_aesthetic_score 4.5 \
  --min_motion_score 0.3

# 视频去重 — 移除相似度 ≥ 95% 的重复视频
python -m cosmos_curate.cli deduplicate \
  --input_dir /path/to/videos \
  --output_dir /path/to/deduped \
  --threshold 0.95
```

## 六、关键创新总结

1. **平台化生态系统**：将世界生成（Predict）、世界变换（Transfer）、世界理解（Reason）和数据工程（Curator）整合为统一平台，提供从数据策划到模型部署的全链路能力
2. **Rectified Flow + UniPC 高效采样**：以直线 ODE 轨迹替代传统扩散的弯曲轨迹，UniPC 加速采样，DMD2 蒸馏支持 1-4 步推理，推理效率提升 10× 以上
3. **统一视频分词器体系**：同时提供连续分词器（CV8×8×8，512× 压缩）和离散分词器（DV8×16×16，1024× 压缩），灵活适配 Flow 扩散和自回归两种生成范式
4. **MultiControlNet + JSON 声明式配置**：支持 6+ 种空间控制模态的任意加权组合，通过 JSON 声明式配置实现零代码的多模态条件控制
5. **Physical AI 深度特化**：提供 Auto / Multiview（自动驾驶 7 路环视）、Robot Multiview Control（机器人多视角）、动作条件后训练、VLA 模型演进等开箱即用的 Physical AI 能力
6. **开放的许可政策**：Apache 2.0 代码 + NVIDIA Open Model License 权重，允许商业使用和衍生开发，降低 Physical AI 研究与应用的门槛
7. **边缘部署就绪**：蒸馏模型（Edge Distilled）支持 1 步推理，可在 NVIDIA Jetson Orin 等边缘设备上实现实时视频生成和变换

## 七、代表性结果

- **Text2World**：从自然语言提示生成高质量 30 秒视频（约 720 帧），覆盖驾驶、机器人操作、自然场景等多种物理环境
- **Video2World**：从真实视频片段出发，预测物理合理的未来世界状态，时序一致性优异
- **Single2MultiView**：从单路前视车载视频生成 7 路环绕视图，有效解决自动驾驶中多视角数据稀缺问题
- **Sim2Real 转换**：仿真环境渲染图像经 Transfer2.5 变换为照片级真实输出，同时保持 3D 几何一致性
- **动作条件生成**：机器人操作数据集上后训练的动作条件世界模型，能够根据动作指令预测物理可信的操作结果
- **推理效率**：蒸馏模型在 NVIDIA GB200 上实现实时视频生成，边缘蒸馏版在 Jetson Orin 上达到实时性要求
