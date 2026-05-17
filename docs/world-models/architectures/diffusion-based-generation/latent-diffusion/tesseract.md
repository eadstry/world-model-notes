---
title: "Tesseract: Learning 4d embodied world models"
design: "Tesseract"
arxiv: https://arxiv.org/abs/2504.20995
github: https://github.com/UMass-Embodied-AGI/TesserAct
---

# Tesseract: Learning 4d embodied world models

::: info 论文信息
- **Design**: Tesseract
- **论文全称**: Tesseract: Learning 4d embodied world models
- **arXiv**: [https://arxiv.org/abs/2504.20995](https://arxiv.org/abs/2504.20995)
- **GitHub**: [https://github.com/UMass-Embodied-AGI/TesserAct](https://github.com/UMass-Embodied-AGI/TesserAct)
:::

## 核心思想

Tesseract 是提出的面向 4D 时空建模的世界模型。核心创新是将世界模型的预测空间定义物4D 体素"在D 空间 + 1D 时间，即 tesseract/四维超立方体）。这实4D 时空表示使模型能同时捕获空间和时间的信息流，避免了"先预测空间再预测时间" 的序列化处理。

Tesseract 的关键洞察是：世界的时空演变本质上是 4D 的——物体的运动同时涉及空间和时间维度，的4D 空间中处理比 3D+1D 的序列化处理更自然且更物理合理理D 卷积的4D 注意力能捕获"spacetime locality"（时空局部性）——相邻体素在空间和时间上都接近的事件具有最强的因果关系。

## 技术架。

**Vision Encoding（视觉编码）**：多个3D occupancy 序列被堆叠为 4D 体素 tensor（x, y, z, t）。每个4D 体素包含 occupancy、semantic、flow 信息。

**Knowledge Learning（知识学习）**中D UNet 的4D Transformer 物4D 体素空间中学习时空动力学。模型以过去 2 秒的 4D 体素为输入，预测未来 3 秒的 4D 体素。使用4D 卷积（空间时间的联合卷积核）捕捉spacetime 相关性。

**Controllable Simulation（可控模拟）**：预测的未来 4D 体素可直接用于轨迹规划（collision check、free space query）。

## 代码实现要点

暂无开源代码。基准4D Conv/4D Attention。在 nuScenes 于Waymo 上评估。

## 关键创新。

1. **4D 时空世界模型**：在统一 4D 空间中处理空间和时间
2. **4D 卷积/注意数*：捕捉时空局部分的联合模。
3. **统一预测**：一个pass 预测整个未来时空。
4. **物理自然后*后D 处理更符合真实的时空物理规律

## 代表性结。

在 nuScenes 上3 秒未来预测上，Tesseract 的4D IoU > 80%，时空一致性显著优化空间模型+时间模型"的序列化组合成D 预测在运动长程预测（3 试）中的退化速度比序列化方法范50%。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
