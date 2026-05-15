---
title: "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots"
design: "GR00T N1"
arxiv: https://arxiv.org/abs/2503.14734
github: https://github.com/NVIDIA/Isaac-GR00T
---

# GR00T N1: An Open Foundation Model for Generalist Humanoid Robots

::: info 论文信息
- **Design**: GR00T N1
- **论文全称**: GR00T N1: An Open Foundation Model for Generalist Humanoid Robots
- **arXiv**: [https://arxiv.org/abs/2503.14734](https://arxiv.org/abs/2503.14734)
- **GitHub**: [https://github.com/NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
:::

## 核心思想

GR00T N1 是 NVIDIA 推出的开源人形机器人基础模型，代表了 MLLM 引导的世界模型在机器人领域的大规模工程化落地。GR00T N1 是一个 Vision-Language-Action (VLA) 模型，采用了独特的**双系统架构**（dual-system architecture）：视觉语言模块（System 2）通过视觉和语言指令解释环境，而扩散 transformer 模块（System 1）实时生成流畅的运动动作。

GR00T N1 的设计哲学是**异构数据融合 + 端到端联合训练**。模型在真实机器人轨迹、人类视频和合成数据集的异构混合数据上进行训练，使其具备跨多种机器人形态的泛化能力。论文在仿真基准和真实 Fourier GR-1 人形机器人上验证了其语言条件双手操作任务的能力，证明了高数据效率下的强大性能。该工作的后续版本（N1.7）进一步引入了 20K 小时 EgoScale 人类视频预训练和相对末端执行器动作空间。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：GR00T N1 使用视觉语言基础模型（VLM）作为 System 2 的 backbone，将视觉观测和语言指令编码为高层次的语义表征。在 N1.7 版本中，VLM backbone 升级为 Cosmos-Reason2-2B（基于 Qwen3-VL 架构），支持灵活的输入分辨率和原生宽高比编码。模型支持多视角视频输入（RGB）、机器人本体状态（关节角度、末端执行器位姿）和自然语言指令的统一输入。

- **未来预测（Future Prediction）**：System 1 模块是一个扩散 transformer（Diffusion Transformer），接收 System 2 的语义表征并去噪生成连续的动作序列。这种设计将"推理"（System 2 的常识和语义理解）与"执行"（System 1 的精确动作生成）解耦。模型以端到端方式联合训练两个系统，并通过相对末端执行器动作空间（relative EEF action space）在人类和机器人数据之间实现统一的动作表征。

- **动作与交互（Action & Interaction）**：GR00T N1 使用 LeRobot v2 数据格式存储机器人演示数据（视频、状态、动作），并支持通过微调适配新的机器人形态（embodiment）。模型在推理时以约 10-30 Hz 的频率输出动作指令，通过 Policy API 与机器人控制器对接。系统还支持 TensorRT 加速部署，将推理时间压缩至实时控制所需的延迟窗口。

## 代码实现要点

基于 NVIDIA Isaac GR00T 开源框架（[NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)），Apache 2.0 许可证：

- **核心代码**：[`gr00t/`](https://github.com/NVIDIA/Isaac-GR00T/tree/main/gr00t) 包含模型定义、数据处理和训练逻辑
- **微调入口**：[`launch_finetune.py`](https://github.com/NVIDIA/Isaac-GR00T) 支持使用自定义机器人数据微调基础模型
- **环境管理**：使用 `uv` 进行快速依赖管理，支持 dGPU（CUDA 12.8）、Jetson Orin/Thor/DGX Spark 等多平台部署
- **数据格式**：基于 LeRobot v2 格式的 `modality.json` 描述状态/动作/视频结构，支持多种 embodiment tag
- **模型检查点**：提供基础模型（3B 参数）和多个微调版本（LIBERO、DROID、SimplerEnv Bridge/Fractal）

## 关键创新点

1. **双系统架构（System 1 + System 2）**：VLM 负责高层次推理（~1-3 Hz），扩散 transformer 负责低层次动作生成（10-100 Hz），平衡了"智慧"与"精确"。
2. **异构数据混合训练**：融合真实机器人轨迹、人类视频和合成数据，实现跨形态泛化。
3. **相对末端执行器动作空间**：N1.7 引入的跨人类和机器人统一的动作表征，是人类视频预训练转移至机器人控制的关键。
4. **全开源生态**：Apache 2.0 许可证的完整开源，包括模型权重、代码、数据处理和部署工具链。
5. **多平台部署**：支持从桌面 GPU 到 Jetson 嵌入式的多平台推理和微调。

## 代表性结果

在 LIBERO 仿真基准上显著超越模仿学习 baseline；在真实 Fourier GR-1 人形机器人上实现语言条件双手操作，具有高数据效率。ALFWorld 环境达到 98% 成功率。N1.7 版本通过 20K 小时人类视频预训练进一步提升了泛化能力和语言遵循能力。
