---
title: "Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model"
design: "Matrix-Game 2.0"
arxiv: https://arxiv.org/abs/2508.13009
github: https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2
---

# Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model

::: info 论文信息
- **Design**: Matrix-Game 2.0
- **论文全称**: Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model
- **arXiv**: [https://arxiv.org/abs/2508.13009](https://arxiv.org/abs/2508.13009)
- **GitHub**: [https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2](https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2)
:::

## 学习笔记

### 核心思想

Matrix-Game 2.0 是一个开源、实时、流式交互式世界模型，由 SkyworkAI（昆仑万维）团队开发。现有交互式世界模型大多依赖双向注意力和冗长的推理步骤，严重限制了实时性能，导致难以模拟真实世界中"结果必须基于历史上下文和当前动作即时更新"的动态特性。Matrix-Game 2.0 通过三个关键组件解决了这一问题：(1) 为 Unreal Engine 和 GTA5 环境构建的可扩展数据生产线，高效产生约 1200 小时的多样化交互标注视频数据；(2) 动作注入模块，使模型能够接受帧级别的鼠标和键盘输入作为交互条件；(3) 基于因果架构的少步蒸馏，实现实时流式视频生成。最终以 25 FPS 的速度在多样化场景中生成分钟级的高质量视频，并全部开源。

### 技术架构

**Vision Encoding（视觉编码）**：Matrix-Game 2.0 采用因果自回归扩散架构（causal autoregressive diffusion），每一帧的生成仅依赖历史帧，不使用未来信息——这是实现流式推理的关键。视觉编码器将游戏画面映射为潜在空间表示，扩散模型在潜在空间中执行去噪。

**Knowledge Learning（知识学习）**：模型在大规模交互式游戏视频数据上训练。数据生产流水线覆盖 Unreal Engine 和 GTA5 两个环境，生成约 1200 小时的视频数据，包含多样化的交互标注（鼠标移动、键盘按键等）。动作注入模块将帧级别的输入事件编码为条件信号，通过交叉注意力或特征调制注入扩散模型。通过少步蒸馏（few-step distillation），模型从需要数百步去噪的标准扩散模型蒸馏为仅需 4-8 步即可生成高质量帧的高效模型。

**Controllable Simulation（可控仿真）**：Matrix-Game 2.0 支持帧级别的鼠标和键盘交互控制——用户移动鼠标即改变视角，按键则触发游戏动作。模型以流式方式运行：收到当前动作后即时生成下一帧，延迟极低（25 FPS 对应 40ms/帧）。可在多样化场景中持续生成分钟级长度的交互视频，并维持场景一致性。

### 代码实现要点

- **数据生产流水线**：基于 Unreal Engine 和 GTA5 的自动化脚本，捕获游戏画面和键鼠输入标注，总规模约 1200 小时
- **动作注入**：鼠标位移编码为二维向量，键盘按键编码为离散 token，通过交叉注意力注入去噪 UNet
- **少步蒸馏**：使用 teacher-student 蒸馏框架，将数十步去噪压缩至 4-8 步，结合 v-prediction 参数化
- **因果架构**：单向因果注意力 mask，确保每帧生成仅依赖历史帧，支持流式推理
- **开源**：模型权重和代码库全部开源

### 关键创新点

- **首个开源实时交互式世界模型**：25 FPS 流式生成，模型权重和代码全开源
- **大规模交互数据管线**：1200 小时 UE + GTA5 交互视频，含帧级键鼠标注
- **少步因果扩散蒸馏**：将因果自回归扩散蒸馏为 4-8 步，实现实时性
- **帧级交互控制**：支持鼠标和键盘作为细粒度动作空间，实现游戏级交互

### 代表性结果

- 25 FPS 实时生成分钟级高质量视频，覆盖多样化游戏场景
- 1200 小时交互数据管线高效可扩展
- 全部开源（权重+代码）以推动交互式世界模型研究
