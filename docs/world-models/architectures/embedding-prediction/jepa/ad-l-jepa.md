---
title: "Self-Supervised Representation Learning with Joint Embedding Predictive Architecture for Automotive LiDAR Object Detection"
design: "AD-L-JEPA"
arxiv: https://arxiv.org/abs/2501.04969
github: https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release
---

# AD-L-JEPA: Self-Supervised Representation Learning with Joint Embedding Predictive Architecture for Automotive LiDAR Object Detection

::: info 论文信息
- **Design**: AD-L-JEPA
- **论文全称**: Self-Supervised Representation Learning with Joint Embedding Predictive Architecture for Automotive LiDAR Object Detection
- **arXiv**: [https://arxiv.org/abs/2501.04969](https://arxiv.org/abs/2501.04969)
- **GitHub**: [https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release](https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release)
:::

## 学习笔记

## 核心思想

AD-L-JEPA是首个将JEPA范式应用于自动驾驶LiDAR数据自监督预训练的工作。该工作发现直接应用流行的对比学习或生成式方法进行自动驾驶预训练效果不佳，甚至可能带来负迁移（negative transfer）。原因在于驾驶场景的多样性使得简单的对比对构造不够合理，而生成式方法需要重建大规模LiDAR点云计算成本过高。
AD-L-JEPA既不做生成也不做对比，而是采用JEPA的预测范式：在BEV嵌入空间中预测被遮挡区域的表示，而不是重建原始点云。这种方式更高效地捕捉驾驶场景的多样性特征，同时避免了对比学习的手动配对和生成式方法的高计算成本。
该方法的另一个关键设计是显式方差正则化（Explicit Variance Regularization）——通过正则化项防止表示坍缩，无需像对比学习那样手动构造正负样本对。实验结果表明AD-L-JEPA在GPU小时上节角.9x-2.7x，在GPU内存上节角.8x-4x。
## 技术架。
**Vision Encoding（视觉编码）**：使用LiDAR点云的体素化编码器，将D点云转化为BEV特征图。AD-L-JEPA采用上下文编码器和目标编码器的双编码器设计。
**Knowledge Learning（世界知识学习）**：上下文编码器处理部分BEV特征（可见区域），预测器以这些可见区域的表示为条件，预测被遮挡区域的BEV嵌入。目标编码器提供被遮挡区域的真实BEV嵌入作为预测目标。显式方差正则化确保预测器不会输出平凡解（全零向量），维持表示多样性。
**Controllable Simulation（可控推演）**：AD-L-JEPA主要面向LiDAR 3D目标检测的下游微调，不侧重于动作条件的推演。但其预训练学到的BEV空间预测能力为未来开发BEV空间的驾驶世界模型奠定了基础。
## 代码实现要点

- 首个面向自动驾驶LiDAR数据的JEPA预训练框架- BEV嵌入空间预测（而非点云生成），更高度- 显式方差正则化替代对比学习的正负样本构建- 在KITTI3D、Waymo、ONCE三大数据集上验证
- GPU资源效率和.9x-2.7x GPU小时节省帧.8x-4x内存节省
- ONCE 100K帧预训练获得1.61 mAP增益，超越其他方向00K帧的效果

## 关键创新。
- 首个基于JEPA的自动驾驶LiDAR预训练方式- BEV嵌入预测：非生成、非对比的第三条路径
- 显式方差正则化：替代对比对的手动构化- 显著的计算资源和内存效率提升
- 在大规模数据集上验证负迁移问题的缓解

## 代表性结。
- KITTI3D、Waymo、ONCE一致改的- ONCE 100K帧预训练的.61 mAP增益）超越其他方向00K帧效率- ONCE 500K帧（2.98 mAP增益）超越其他方向M帧效率- 1.9x-2.7x GPU小时节省 vs Occupancy-MAE

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
