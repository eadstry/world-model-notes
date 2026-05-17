---
title: "OmniNWM: Omniscient Driving Navigation World Models"
design: "OmniNWM"
arxiv: https://arxiv.org/abs/2510.18313
github: https://github.com/Ma-Zhuang/OmniNWM
---

# OmniNWM: Omniscient Driving Navigation World Models

::: info 论文信息
- **Design**: OmniNWM
- **论文全称**: OmniNWM: Omniscient Driving Navigation World Models
- **arXiv**: [https://arxiv.org/abs/2510.18313](https://arxiv.org/abs/2510.18313)
- **GitHub**: [https://github.com/Ma-Zhuang/OmniNWM](https://github.com/Ma-Zhuang/OmniNWM)
:::

## 学习笔记

### 核心思想

OmniNWM (Omniscient Navigation World Models) 是一个全知全景导航世界模型，将自动驾驶世界模型的三维核心能力——状态（State）、动作（Action）和奖励（Reward）——统一在一个框架中。现有世界模型通常局限于有限的状态模态、短视频序列、不精确的动作控制和缺乏奖励感知。OmniNWM 在这三个维度上实现了全面突破在1) 状态：联合生成全景 RGB、语义分割、度量深度和 3D 占用（occupancy）视频；(2) 动作：提出归一化全称Plucker 射线图（ray-map）表示，将输入轨迹编码为像素级信号，实现高精度、可泛化的全景视频控制；(3) 奖励：不依赖外部图像模型学习奖励函数，而是直接利用模型生成的3D 占用来定义基于规则的稠密驾驶合规性和安全性奖励。这种全知设计使 OmniNWM 成为一个真正的闭环评估框架。
### 技术架。
**Vision Encoding（视觉编码）**：OmniNWM 采用全景（panoramic）世界模型架构，在多个全景环视相机视角上联合建模。视觉编码器同时处理全景 RGB 输入，并输出四种模态的预测：RGB、语义分割、度量深度和 3D 占用。这种多模态联合生成使模型不仅能产生视觉上可感知的图像，还能输出场景的语义理解和精确空间几何。Flexible Forcing 策略支持在训练和推理中灵活切像teacher forcing 和自回归生成，确保长时域生成质量。
**Knowledge Learning（知识学习）**：Plucker 射线图是 OmniNWM 的动作编码核心——将驾驶轨迹（位置序列）通过全景相机的几何投影转换为像素对齐的Plucker 坐标表示，为视频扩散模型提供高精度、空间可泛化的控制信号。模型学习将这种像素级轨迹编码转化为对应的全景多模态未来预测的D 占用监督使模型不仅学习视觉外观，还学习场景的精确 3D 几何结构。
**Controllable Simulation（可控仿真）**：OmniNWM 的独特优势在于其奖励机制——利用模型自己生成的 3D 占用（而非外部 Reward Model）直接定义基于规则的稠密奖励。例如，根据占用预测检查车辆是否偏离车道（安全违规）、是否遵守交通规则等。这提供了一个无需额外训练 Reward Model 的内生闭环评估框架。Flexible Forcing 策略使模型能够稳定地自回归生成远超训练序列长度的驾驶视频。
### 代码实现要点

- **多模态全景生成*：单模型同时输出 RGB/语义/深度/占用四种模态的全景预测
- **Plucker 射线图动作编码*：将轨迹通过全景相机投影为像素级 Plucker 坐标图，作为条件注入扩散模型
- **Flexible Forcing**：训练时随机混合 teacher forcing（使用真实历史帧）和自回归方式（使用模型生成帧），提升自回归稳定义- **占用规则奖励**：基础3D 占用预测定义驾驶合规性和安全性规则奖的- **数据集*：基于多种驾驶场景的全景视频数据

### 关键创新。
- **三维全知统一框架**：首次将 State（多模态）、Action（精确控制）、Reward（规则奖励）统一在世界模型框架中
- **Plucker 射线图控的*：像素级轨迹编码，替代传统BEV 坐标或离散动作的粗粒度控的- **内生闭环评估**：无需外部 Reward Model，直接通过生成的3D 占用定义规则奖励
- **多模态全景生成*：RGB + 语义 + 深度 + 3D 占用的联合全景预。
### 代表性结。
- 全景视频生成、控制精度和长时域稳定性均达到 SOTA
- 通过占用规则奖励提供可靠的闭环评估框架- 项目标 https://arlo0o.github.io/OmniNWM/


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
