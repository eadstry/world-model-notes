---
title: "Diffusion-NPO: Negative Preference Optimization for Better Preference Aligned Generation of Diffusion Models"
arxiv: https://arxiv.org/abs/2505.11245
github: https://github.com/G-U-N/Diffusion-NPO
website: ""
venue: ICLR
year: 2025
---

# Diffusion-NPO: Negative Preference Optimization for Better Preference Aligned Generation of Diffusion Models

::: info 论文信息
- **Venue**: ICLR (2025)
- **arXiv**: [https://arxiv.org/abs/2505.11245](https://arxiv.org/abs/2505.11245)
- **GitHub**: [https://github.com/G-U-N/Diffusion-NPO](https://github.com/G-U-N/Diffusion-NPO)
- **Website**: （无）
:::

## 学习笔记

### 核心贡献
- 首次揭示现有扩散模型偏好对齐方法（如 Diffusion-DPO）忽视无条件/负条件输出建模的问题，指出这限制了 CFG（Classifier-Free Guidance）效能的充分发挥
- 提出 Negative Preference Optimization（NPO），通过额外训练模型对负偏好进行有意识的对齐，使模型明确学习「不应生成什么」
- 方法改动极小：仅需在正样本去噪损失上叠加负样本去噪损失，无需新训练策略、无需额外数据集、无需修改推理流程
- 完全即插即用，可无缝集成到 SD1.5、SDXL、视频扩散模型（如 AnimateDiff）及已有偏好对齐模型上

### 方法细节
- **负偏好构造**：将正样本 $x_w$ 的 CFG 无条件分支输出（ground truth 被破坏的版本）或人工标注的低质量样本作为负样本 $x_l$
- **NPO 损失函数**：在标准去噪损失 $L_{\text{simple}}$ 上叠加负样本项，优化目标为 $\min_{\theta}\; L_{\text{simple}}(x_w) - \lambda \cdot L_{\text{simple}}(x_l)$，使模型分布远离负样本区域
- **与 CFG 的协同机制**：标准 CFG 推理时通过 $\epsilon_{\text{cfg}} = \epsilon_{\text{cond}} + s \cdot (\epsilon_{\text{cond}} - \epsilon_{\text{uncond}})$ 增强条件控制；NPO 训练后无条件分支 $\epsilon_{\text{uncond}}$ 已被推离低质量区域，使 CFG 的对比效应更强
- **训练实现**：代码改动量极小，仅在现有训练循环中额外采样负样本并累加损失项，无需修改模型架构或采样器
- 可与 Diffusion-DPO、DCO 等正偏好对齐方法叠加使用，实现先「推开负分布」再「拉近正分布」的双阶段优化

### 关键发现
- NPO 能显著改善高 guidance scale（$s > 10$）下的生成质量，缓解大尺度 CFG 导致的过饱和和伪影问题
- 在视频扩散模型上，NPO 增强 CFG 后可减少帧间闪烁和时序不一致性，提升视频流畅度
- NPO 与 Diffusion-DPO 叠加使用时，双阶段优化效果优于任何单一偏好对齐方法

### 方法归类
- **范式**: Preference Optimization（偏好优化）
- **关键技术**: Negative Preference Optimization, CFG Enhancement, 去噪损失叠加
- **适用场景**: 文生图偏好对齐增强、视频扩散模型质量改善、高 guidance scale 推理优化
