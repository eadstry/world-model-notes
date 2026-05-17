---
title: "Epipolar Geometry Improves Video Generation Models"
arxiv: https://arxiv.org/abs/2510.21615v1
github: https://github.com/KupynOrest/epipolar-dpo
website: https://epipolar-dpo.github.io
venue: arXiv
year: 2025
---

# Epipolar Geometry Improves Video Generation Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2510.21615v1](https://arxiv.org/abs/2510.21615v1)
- **GitHub**: [https://github.com/KupynOrest/epipolar-dpo](https://github.com/KupynOrest/epipolar-dpo)
- **Website**: [https://epipolar-dpo.github.io](https://epipolar-dpo.github.io)
:::

## 学习笔记

### 核心贡献

本文首次系统地将经典对极几何（Epipolar Geometry）约束引入现代视频扩散模型的对齐训练中，核心贡献包括：

1. **揭示视频扩散模型的几何盲区**：发现即使经过海量数据训练，现代视频扩散模型仍未能内化基础的 3D 几何原理（如对极约束），这是导致几何不一致、运动不稳定和视觉伪影的根源。
2. **基于偏好优化的对极几何对齐方法**：提出通过偏好优化（Preference-based Optimization, 类似于 DPO）将成对帧的对极几何约束对齐到扩散模型，绕过端到端可微性要求，在数学上有原则地强制执行几何一致性。
3. **静态场景训练 → 动态场景泛化的训练范式**：在静态场景+动态相机的视频对上训练（确保几何测量质量），模型却能有效泛化到多样化动态内容，证明几何约束的迁移能力。

### 方法细节

1. **对极几何约束的提取与度量**：
   - 从视频中提取成对帧，使用特征匹配（如 LoFTR 或 SuperPoint+SuperGlue）计算基础矩阵 $F$，进而计算 Sampson 距离或对称极线距离作为几何一致性度量。
   - 给定一对帧 $(I_i, I_j)$，几何不一致得分定义为匹配特征点偏离其对应极线的平均距离。
2. **偏好数据构建**：
   - 对每对帧生成两个候选视频片段：「赢家」（几何一致性较高者）和「输家」（几何一致性较低者）。
   - 通过对极几何度量对生成样本和原始样本进行评分排序，构建偏好对 $(y_w, y_l)$。
3. **基于偏好的扩散模型对齐**：
   - 采用类似 DPO（Direct Preference Optimization）的目标函数，最小化 $\log \sigma\left(\beta \log \frac{p_\theta(y_w|x)}{p_\text{ref}(y_w|x)} - \beta \log \frac{p_\theta(y_l|x)}{p_\text{ref}(y_l|x)}\right)$ 的负值，其中 $y_w$ 为几何一致样本、$y_l$ 为几何不一致样本。
   - 关键优势：无需模型通过几何约束进行端到端反向传播，偏好优化仅需模型输出的 log-probability 即可实现对齐。
4. **度量稳定性分析**：实验对比了经典对极度量与现代学得的感知度量（如 LPIPS、DINO 相似度），发现后者在作为对齐信号时噪声较大，会损害对齐质量，而前者提供稳定、有原则的优化信号。

### 关键发现

- 经典对极几何约束提供的优化信号比现代学习度量（如 LPIPS、CLIP 相似度）更稳定、更少噪声，后者在用于对齐训练时反而会降低生成质量。
- 在仅含静态场景和动态相机的训练数据上训练，模型能有效泛化至包含动态物体的复杂场景，表明几何先验具有跨场景的迁移能力。
- 偏好驱动的几何对齐无需端到端可微性，极大降低了将几何约束纳入视频扩散模型训练的技术门槛。
- 该方法在不牺牲视觉质量的前提下，显著提升了生成视频的空间一致性，缓解了相机轨迹不稳定和几何伪影问题。

### 方法归类

- **任务类别**：视频生成质量提升、3D 一致性视频生成
- **技术路线**：Video Diffusion Models + 偏好优化（Preference Optimization）
- **核心方法论**：经典几何先验（对极几何）驱动数据驱动模型的训练对齐
- **相关方法脉络**：属于「将经典计算机视觉约束引入生成模型」的研究方向，与 VGG Loss、Perceptual Loss 等感知对齐方法形成互补。与 DPO 在 LLM 对齐中的应用一脉相承，但将偏好信号从「人类偏好」替换为「几何一致性度量」，构成一种自动化的、数学上可验证的对齐范式。
