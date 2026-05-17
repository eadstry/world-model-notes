---
title: "Hunyuan-GameCraft-2: Instruction-following Interactive Game World Model"
design: "Hunyuan-GameCraft-2"
arxiv: https://arxiv.org/abs/2511.23429
website: https://hunyuan-gamecraft-2.github.io/
---

# Hunyuan-GameCraft-2: Instruction-following Interactive Game World Model

::: info 论文信息
- **Design**: Hunyuan-GameCraft-2
- **论文全称**: Hunyuan-GameCraft-2: Instruction-following Interactive Game World Model
- **arXiv**: [https://arxiv.org/abs/2511.23429](https://arxiv.org/abs/2511.23429)
- **Website**: [https://hunyuan-gamecraft-2.github.io/](https://hunyuan-gamecraft-2.github.io/)
:::

## 学习笔记

### 核心思想

Hunyuan-GameCraft-2 是腾讯混元团队提出的指令驱动的交互式游戏世界模型，开创了一种新的交互范式。现有生成式世界模型在游戏场景中面临两大局限：僵硬的动作模式（仅支持离散键盘输入）和高昂的标注成本，限制了它们建模多样化游戏交互和玩家驱动动态的能力。Hunyuan-GameCraft-2 的核心突破是：不再依赖固定的键盘输入，而是允许用户通过自然语言提示、键盘或鼠标信号来控制游戏视频内容，实现灵活且语义丰富的交互。为此，团队正式定义了交互式视频数据的概念，并开发了一套自动化流水线，将大规模非结构化的文的视频对转化为因果对齐的交互数据集。模型基准14B 参数的图像到视频 Mixture-of-Experts（MoE）基础模型，引入文本驱动的交互注入机制实现细粒度控制。还提出了交互专用基准InterBench。
### 技术架。
**Vision Encoding（视觉编码）**：Hunyuan-GameCraft-2 基于 14B 参数的图像到视频（I2V）MoE 骨干网络。MoE 架构允许模型参数高效扩展——每个token 仅激活部分专家，在保持计算效率的同时获得更大的模型容量。视觉编码器将游戏画面的当前帧和历史帧编码为潜在表示，作为时序生成的条件。
**Knowledge Learning（知识学习）**：训练数据构建是核心创新。团队设计了自动化流水线将大规模非结构化文本-视频对转化为因果对齐的交互数据集：利用VLM 检测视频中的事件动作边界，自动标注动作→结中的因果对应关系。文本驱动的交互注入机制将用户指令编码为条件信号，通过交叉注意力或特征调制统一控制相机运动、角色行为和场景动态。模型在因果对齐数据上学习给定当前状态和用户指令 的预测下一状态的因果映射。
**Controllable Simulation（可控仿真）**：Hunyuan-GameCraft-2 支持三种交互模态的统一控制：自然语言（如"打开源始点燃火把"接触发爆炸"）、键盘信号和鼠标信号。用户可通过自由形式的文字指令触发游戏中的复杂动作和场景变化，模型实时生成对应的视频帧。InterBench 基准从多个维度评估交互性能的全面性。
### 代码实现要点

- **交互数据构建管线**：VLM 辅助的自动化"动作→结构因果标注，从非结构化视频中提取交互数下- **文本交互注入**：自然语言指令通过 text encoder 编码后通过交叉注意力注入I2V 扩散 UNet
- **14B MoE 骨干**：多个专门化专家网络，gating 机制根据内容和条件信号动态路由- **InterBench**：覆盖相机控制、角色行为、环境交互等多维度的交互质量评估

### 关键创新。
- **指令驱动交互范式**：用自然语言替代固定键盘输入，实现自由形式的游戏交互控制
- **自动化交互数据构建*：从非结构化视频中自动提取因果对齐的交互数据，大幅降低标注成框- **14B MoE 架构**：大规模 MoE 模型的I2V 世界模型中的应用，兼顾质量和效率
- **三模态统一控制**：自然语言 + 键盘 + 鼠标的统一交互注入框架

### 代表性结。
- 自由形式用户指令下的时序连贯、因果正确的交互式游戏视频生成- 支持"开源始点燃火把"接触发爆炸"等复杂语义交互- 演示页面: https://hunyuan.tencent.com/game/game-craft


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
