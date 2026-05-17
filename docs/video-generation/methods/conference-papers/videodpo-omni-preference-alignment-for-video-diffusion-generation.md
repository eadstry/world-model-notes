---
title: "VideoDPO: Omni-Preference Alignment for Video Diffusion Generation"
arxiv: https://arxiv.org/abs/2412.14167
github: https://github.com/CIntellifusion/VideoDPO
website: https://videodpo.github.io/
venue: CVPR
year: 2025
---

# VideoDPO: Omni-Preference Alignment for Video Diffusion Generation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2412.14167](https://arxiv.org/abs/2412.14167)
- **GitHub**: [https://github.com/CIntellifusion/VideoDPO](https://github.com/CIntellifusion/VideoDPO)
- **Website**: [https://videodpo.github.io/](https://videodpo.github.io/)
:::

## 学习笔记

### 核心贡献
- 将 DPO 从文本/图像域扩展到视频生成，提出全偏好对齐（Omni-Preference）框架
- 统一处理多种偏好维度：文本对齐、视觉质量、运动连贯性、审美偏好
- 无需显式奖励模型，直接通过成对偏好比较优化视频扩散模型

### 方法细节
- **全偏好数据构造**：从多维度收集偏好对（win/lose），涵盖 text-video alignment、motion smoothness、visual quality、aesthetics
- **VideoDPO 损失**：扩展标准 DPO 到视频扩散模型的去噪轨迹上
- **多偏好联合优化**：将不同维度的偏好信号加权联合训练，避免单一维度过拟合

### 关键发现
- VideoDPO 在 VBench 等基准上一致优于 SFT baseline
- 多偏好联合优化优于分别优化各维度再集成
- 对 unseen prompts 的泛化性好，说明偏好对齐不仅是记忆训练分布

### 方法归类
偏好优化 — DPO
