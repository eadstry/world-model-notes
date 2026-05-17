---
title: "Prompt-A-Video: Prompt Your Video Diffusion Model via Preference-Aligned LLM"
arxiv: https://arxiv.org/abs/2412.15156
github: https://github.com/jiyt17/Prompt-A-Video
venue: ICCV
year: 2025
---

# Prompt-A-Video: Prompt Your Video Diffusion Model via Preference-Aligned LLM

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2412.15156](https://arxiv.org/abs/2412.15156)
- **GitHub**: [https://github.com/jiyt17/Prompt-A-Video](https://github.com/jiyt17/Prompt-A-Video)
:::

## 学习笔记

### 核心贡献
- 提出基于 LLM 的 prompt 适配框架 Prompt-A-Video，自动为视频扩散模型生成偏好对齐的提示词，避免人工多次修改 prompt 的迭代过程
- 两阶段优化管线：奖励驱动的 prompt 进化自动构建高质量 prompt 池用于 SFT 微调 LLM，再通过 DPO 进行偏好对齐
- 系统性解决自动 prompt 优化的三个挑战：模态不一致性、成本不一致性、模型不可知性

### 方法细节
- 第一阶段：利用多维度奖励信号（如视频质量、文本-视频对齐等）驱动 prompt 进化，生成高质量 prompt 池，用于对 LLM 进行监督微调
- 第二阶段：基于 SFT 模型生成 pairwise 数据，使用 DPO 算法进行偏好对齐，使 LLM 输出的 prompt 更契合目标视频扩散模型的偏好
- 无需人工标注，可适配多种视频生成模型，即插即用

### 关键发现
- SFT + DPO 两阶段训练后，LLM 生成的 prompt 在视频质量指标上显著优于原始用户 prompt
- 偏好对齐后的 prompt 对不同视频扩散模型具有良好的泛化能力

### 方法归类
- **范式**: [LLM prompt 优化 / 偏好对齐]
- **关键技术**: [奖励驱动 prompt 进化 → SFT → DPO 偏好对齐]
- **适用场景**: [文生视频扩散模型的 prompt 自动优化与零样本适配]
