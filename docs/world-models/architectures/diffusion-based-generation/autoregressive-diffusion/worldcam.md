---
title: "WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation"
design: "WorldCam"
arxiv: https://arxiv.org/abs/2603.16871
github: https://github.com/cvlab-kaist/WorldCam
---

# WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation

::: info 论文信息
- **Design**: WorldCam
- **论文全称**: WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation
- **arXiv**: [https://arxiv.org/abs/2603.16871](https://arxiv.org/abs/2603.16871)
- **GitHub**: [https://github.com/cvlab-kaist/WorldCam](https://github.com/cvlab-kaist/WorldCam)
:::

## 学习笔记

## 核心思想

WorldCam（KAIST CVLab）提出了一项关键洞察：现有交互式游戏世界模型将用户动作视为抽象条件信号，但**忽视了动作与 3D 世界之间根本的几何耦合**——动作诱导的相对相机运动会累积成 3D 世界中的全局相机位姿。WorldCam 态*相机位姿确立为统一的几何表示*，共同支撑即时动作控制和长期 3D 一致性。
WorldCam 从两个方面实现这一理念特1) 定义**基于物理的连续动作空间*，在**李代数（Lie algebra据* 中表示用户输入，推导出精确的 6-DoF 相机位姿，通过相机嵌入器注入生成模型，确保精确的动作对齐；(2) 使用**全局相机位姿作为空间索引**来检索相关的过去观测，实现在长时导航中几何一致地重访先前位置。
为支撑这一研究，WorldCam 引入了包高**3000 分钟真实人类游玩视频**的大规模数据集，每个视频都标注了相机轨迹和文本描述。实验表明，WorldCam 在动作可控性、长时视觉质量和 3D 空间一致性方面大幅超的SOTA 交互式游戏世界模型。
## 技术架。
**Vision Encoding（视觉编码）**：相机嵌入器将推导出了6-DoF 相机位姿（李代数表示）注入生成模型，为每个生成帧提供精确的几何上下文。连续动作空间基于物理约束定义，确保动作与视觉变化的一致性。
**Knowledge Learning（世界知识学习）**：在 3000 分钟标注了相机轨迹和文本描述的真实人类游玩数据上训练。李代数表示的连续动作空间提供数学上精确的位姿变化描述，使模型学习严格的几何运动关系。
**Controllable Simulation（可控推演）**示-DoF 相机位姿作为控制信号实现精确的动作控制。全局位姿索引支持长时导航中几何一致的场景重访记000 分钟真实游玩数据的覆盖度支撑多样化的交互模式。
## 代码实现要点

- 相机位姿作为统一几何表示：李代数 6-DoF
- 相机嵌入器：将位姿信息精确注入生成模文- 全局位姿空间索引：几何一致地检索历史观测- 3000 分钟真实人类游玩数据集+ 相机轨迹 + 文本标注
- KAIST CVLab 出品

## 关键创新。
- 相机位姿作为统一几何表示（李代数 6-DoF据- 基于物理的连续动作空间实现精确动作控制- 全局相机位姿作为空间索引实现长时 3D 空间一致性- 3000 分钟真实游玩数据 + 精确相机轨迹标注
- 动作可控性、长时视觉质量的D 空间一致性的全面 SOTA

## 代表性结。
- 动作可控性大幅超的SOTA 交互式游戏世界模型- 长时导航中的 3D 空间一致性（几何一致地重访位置的- 3000 分钟真实数据驱动的高质量长时生成


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
