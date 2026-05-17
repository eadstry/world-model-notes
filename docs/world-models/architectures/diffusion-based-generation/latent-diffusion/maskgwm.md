---
title: "MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction"
design: "MaskGWM"
arxiv: https://arxiv.org/abs/2502.11663
github: https://github.com/SenseTime-FVG/OpenDWM
---

# MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction

::: info 论文信息
- **Design**: MaskGWM
- **论文全称**: MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction
- **arXiv**: [https://arxiv.org/abs/2502.11663](https://arxiv.org/abs/2502.11663)
- **GitHub**: [https://github.com/SenseTime-FVG/OpenDWM](https://github.com/SenseTime-FVG/OpenDWM)
:::

## 核心思想

MaskGWM (Masked Gaussian World Model) 是将 MAE（Masked Autoencoder）掩码训练策略与 3DGS Gaussian 世界模型结合的方法。核心创新是一Gaussian 动力学学习中引入随机掩码——在训练时随机掩盖一部分 Gaussians，迫使模型从可见过Gaussians 中推断被掩盖区域的运动和外观。这种掩码训练显著增强了世界模型的鲁棒性和泛化能力。

MaskGWM 的关键洞察是：MAE 的成功在 2D 图像上已充分证明，将其扩展到 3DGS 可以产生类似的表示增强效果。通过迫使模型从部分Gaussian 信息论补全"完整场景运动，模型学到的不是"记忆"特定训练场景，而是通用的3D 物理动力学。

## 技术架。

**Vision Encoding（视觉编码）**为DGS 重建将场景编码为 Gaussians。随机掩掩50-75% 码Gaussians（按空间区域）。

**Knowledge Learning（知识学习）**：Masked Gaussian Dynamics Transformer——接收部分可见的 Gaussians，预测所在Gaussians（包括被掩盖的）的未来状态（位置、颜色、协方差）。训练损失同时约束可见区和被掩盖区的重建质量。

**Controllable Simulation（可控模拟）**：推理时使用所用Gaussians 进行完整预测，质量因掩码训练而更鲁棒。

## 代码实现要点

暂无开源代码。基于3DGS + MAE 预训练策略。在 Robosuite 上评估。

## 关键创新。

1. **Masked Gaussian Training**3DGS 空间中的 MAE 训练
2. **鲁棒动力学学习*：掩码迫使模型学会推断而非记忆
3. **泛化增强**：掩码训练提升模型对未见场景的泛。
4. **通用物理学习**：从部分信息推断完整 3D 运动

## 代表性结。

在Robosuite nGaussian 运动预测中，MaskGWM 在未见过的场景配置上预测精度（position MSE）比非掩码训练的方法的25%。掩码训练使模型的observation dropout 场景中保持预测质量（仅见 25% Gaussians 时仍能准确预测）。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
