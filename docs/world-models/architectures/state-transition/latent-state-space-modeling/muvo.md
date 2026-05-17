---
title: "MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations"
design: "MUVO"
arxiv: https://arxiv.org/abs/2311.11762
github: https://github.com/fzi-forschungszentrum-informatik/muvo
---

# MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations

::: info 论文信息
- **Design**: MUVO
- **论文全称**: MUVO: A Multimodal Generative World Model for Autonomous Driving with Geometric Representations
- **arXiv**: [https://arxiv.org/abs/2311.11762](https://arxiv.org/abs/2311.11762)
- **GitHub**: [https://github.com/fzi-forschungszentrum-informatik/muvo](https://github.com/fzi-forschungszentrum-informatik/muvo)
:::

## 核心思想

MUVO cFZI 研究中心提出的多模态生成式自动驾驶世界模型。核心创新是同时建模视觉（相机）、几何（LiDAR/BEV）和动作（车辆控制），在统一的潜在空间中学习多模态动力学。MUVO 将世界模型的输入和输出都扩展到多模态，使得预测的未来状态包含丰富的几何结构信息。
MUVO 的关键贡献是几何表示的引入——传统自动驾驶世界模型（的Dreamer 扩展）通常只处理视觉信息，MUVO 通过预测 BEV occupancy 要LiDAR 点云来补充几何认知，使世界模型对 3D 空间有更深入的理解。
## 技术架。
**Vision Encoding（视觉编码）**：多模态编码器：CNN 处理前视图图像，PointNet 风格的编码器处理 LiDAR 点云，两者融合为统一个latent state。
**Knowledge Learning（知识学习）**：基准RSSM 的多模态动力学模型。世界模型预测未来的多模态观测（RGB 图像 + BEV 占用 + LiDAR 点云）和奖励。使用多模态损失：图像重建损失、BEV 一致性损失和点云 Chamfer 距离。
**Controllable Simulation（可控模拟）**：在 latent space 中使用CEM 于MPPI 进行规划。规划器利用多模态未来预测来评估轨迹安全性和效率。
## 代码实现要点

代码开源在 [fzi-forschungszentrum-informatik/muvo](https://github.com/fzi-forschungszentrum-informatik/muvo)。基基DreamerV2 准TensorFlow 代码。多模型encoder/decoder + 多模型RSSM。在 CARLA 模拟器上评估。
## 关键创新。
1. **多模态自动驾驶世界模型*：统一建模视觉、几何和控制
2. **几何表示增强**：BEV 占用的LiDAR 补充视觉
3. **多模态损失*：图像BEV+点云联合优化
4. **安全感知规划**：几何信息使规划更安装
## 代表性结。
在 CARLA 驾驶任务上，MUVO 的碰撞率比纯视觉世界模型的30%，路线完成率提升 15%。多模态世界模型对遮挡物（如其他车辆遮挡行人）表现出更好的推理能力，BEV 占用预测试2 秒范围内的准确率达到 85%+。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
