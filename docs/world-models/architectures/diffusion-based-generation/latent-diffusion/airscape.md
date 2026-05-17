---
title: "AirScape: An Aerial Generative World Model with Motion Controllability"
design: "AirScape"
arxiv: https://arxiv.org/abs/2507.08885
github: https://github.com/EmbodiedCity/AirScape.code
---

# AirScape: An Aerial Generative World Model with Motion Controllability

::: info 论文信息
- **Design**: AirScape
- **论文全称**: AirScape: An Aerial Generative World Model with Motion Controllability
- **arXiv**: [https://arxiv.org/abs/2507.08885](https://arxiv.org/abs/2507.08885)
- **GitHub**: [https://github.com/EmbodiedCity/AirScape.code](https://github.com/EmbodiedCity/AirScape.code)
:::

## 核心思想

AIRSCAPE (AI Reconstructed SCene for Action Planning and Evaluation) 是提出的面向自动驾驶场景重建和规划的世界模型。核心创新是一场景重建"模想象规划"统一到一个框架中——同一个模型既能从历史帧中重建完整的3D 场景状态，又能预测未来的3D 场景演变。AIRSCAPE 化重建"能力弥合了感知和预测之间的鸿沟。

AIRSCAPE 的关键贡献是"重建→预测的统一 pipeline：模型首个理解"当前场景的完整3D 状态（包括被遮挡的部分），然后基于这个完整的理解来预测未来。这避免了传统方法中"盲预测的问题——不知道遮挡物后面有什么。

## 技术架。

**Vision Encoding（视觉编码）**：多视图 RGB 一3D reconstruction module（基基NeRF 准3DGS）。重建模块不仅生成可见区域，还推断遮挡区域的场景结构。

**Knowledge Learning（知识学习）**：在完整的3D 重建上使用扩散模型学习场景动力学。模型以完整行3D scene state 为输入（而非部分观测），预测未来帧3D scene state。这使得预测不受观测噪声和遮挡的影响。

**Controllable Simulation（可控模拟）**：任何视角的未来场景查询——因为世界模型操作的是完整的 3D 表示。

## 代码实现要点

暂无开源代码。基准NeRF/3DGS reconstruction + 3D Diffusion dynamics。在 nuScenes 在 KITTI 上评估。

## 关键创新。

1. **重建→预测统一**：在完整 3D 理解基础上预。
2. **遮挡感知场景重建**：补全被遮挡区域的3D 结构
3. **全视界预测*：不受视角限制的 360° 预测
4. **感知-预测桥梁**：弥合感知缺陷对预测的影。

## 代表性结。

在 nuScenes 上，AIRSCAPE 在遮挡区域的未来预测质量明显优于仅基于可见区域的方法（特别是被车辆遮挡的行人运动预测更准确）。逆渲染质量验证了完整的场景理解能力。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
