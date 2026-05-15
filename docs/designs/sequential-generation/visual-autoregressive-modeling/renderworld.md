---
title: "RenderWorld"
design: "Video GPT / Visual Autoregressive Model"
arxiv: "https://arxiv.org/abs/2409.11356"
github: ""
website: ""
---

# RenderWorld

## 论文信息

- **arXiv**: [2409.11356](https://arxiv.org/abs/2409.11356)
- **发表时间**: 2024年9月（ICRA 2025）
- **作者团队**: 上海科技大学 等（Ziyang Yan, Yuexin Ma 等）

## 核心思想

RenderWorld是一个纯视觉端到端自动驾驶框架，其核心创新在于将3D高斯泼溅（Gaussian Splatting）与世界模型相结合。纯视觉方案比LiDAR-视觉融合更经济，但需要解决从2D图像到3D场景理解的鸿沟。RenderWorld通过自监督的Img2Occ模块生成3D占用标签。

RenderWorld使用3D高斯泼溅来表示3D场景并渲染2D图像，相比基于NeRF的方法显著提高了分割精度并降低了GPU内存消耗。此外，AM-VAE（Air-Matter VAE）将"空气"和"非空气"（物体）分别编码，实现了更细粒度的场景元素表示。基于这种高质量的场景表示，使用自回归世界模型进行4D占用预测和运动规划，在两项任务上均达到了SOTA性能。

## 技术架构

### Vision Encoding
视觉编码分为两个阶段：(1) Img2Occ模块——使用自监督的3D高斯泼溅（Gaussian Splatting）从2D图像生成3D占用标签，利用3DGS的可微渲染特性自监督训练；(2) AM-VAE——将3D占用编码为离散token，创新地将空气（air）和非空气（matter）分别编码，使模型能更好区分可通行区域与障碍物。

### Knowledge Learning
使用自回归世界模型在4D占用数据上进行训练（3D空间+时间）。模型接收历史占用序列，通过自回归预测未来占用帧。由于AM-VAE将空气和物体分别编码，世界模型能学习区分空间结构和物体动力学的不同知识。训练数据来自驾驶场景的真实3D占用标注。

### Controllable Simulation
控制机制体现在运动规划上：世界模型根据历史场景和可能的自车运动预测未来场景演变。规划器在世界模型生成的未来场景中评估不同轨迹的安全性和可行性，选择最优路径。AM-VAE对空气/物体的细粒度区分使规划器能更准确地判断是否会导致碰撞。

## 代码实现要点

暂无开源代码（ICRA 2025接收）。

## 关键创新点

1. **3D高斯泼溅世界模型**: 首次将3DGS融入世界模型框架
2. **Img2Occ模块**: 自监督地从2D图像生成3D占用，无需3D标注
3. **AM-VAE（空气-物质分离编码）**: 细粒度区分可通行空间与障碍物
4. **纯视觉端到端**: 成本更低且可靠的自动驾驶方案

## 代表性结果

- 4D占用预测和运动规划SOTA性能
- 比NeRF方案更高的精度、更低的内存消耗
- ICRA 2025接收