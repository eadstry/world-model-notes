---
title: "Identity-Preserving Text-to-Video Generation by Frequency Decomposition"
arxiv: https://arxiv.org/abs/2411.17440
github: https://github.com/PKU-YuanGroup/ConsisID
website: https://pku-yuangroup.github.io/ConsisID/
venue: CVPR
year: 2025
---

# Identity-Preserving Text-to-Video Generation by Frequency Decomposition

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2411.17440](https://arxiv.org/abs/2411.17440)
- **GitHub**: [https://github.com/PKU-YuanGroup/ConsisID](https://github.com/PKU-YuanGroup/ConsisID)
- **Website**: [https://pku-yuangroup.github.io/ConsisID/](https://pku-yuangroup.github.io/ConsisID/)
:::

## 学习笔记

### 核心贡献
- 提出 ConsisID：通过频域分解实现身份保持的文本到视频生成
- 将参考图像的频率信息分解为高频（身份细节）和低频（结构/光照），分别注入视频 DiT
- CVPR 2025 录用，主体驱动视频生成的代表性 SFT 方法

### 方法细节
- **频域分解**：用 DCT/FFT 将参考图像分解为不同频率分量
- **双流注入**：高频分量注入 DiT 的浅层（保持纹理/面部细节），低频分量注入深层（保持全局结构）
- **身份保持损失**：在生成视频帧与参考人脸之间计算 identity embedding 一致性
- **训练策略**：冻结 DiT 主干，仅训练频域注入的 adapter 层

### 关键发现
- 频域分解有效解耦了身份保持（高频）和运动/光照变化（低频）
- 双流注入优于单流注入：仅高频注入导致结构漂移，仅低频注入导致身份模糊
- 该方法对 facial identity 效果显著，但对非人脸物体（如特定玩具、宠物）泛化有限

### 方法归类
监督微调 — 主体驱动生成
