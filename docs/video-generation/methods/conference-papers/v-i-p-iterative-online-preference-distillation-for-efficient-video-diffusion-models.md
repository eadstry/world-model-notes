---
title: "V.I.P.: Iterative Online Preference Distillation for Efficient Video Diffusion Models"
arxiv: https://arxiv.org/abs/2508.03254
website: https://jiiiisoo.github.io/VIP.github.io/
venue: ICCV
year: 2025
---

# V.I.P.: Iterative Online Preference Distillation for Efficient Video Diffusion Models

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2508.03254](https://arxiv.org/abs/2508.03254)
- **Website**: [https://jiiiisoo.github.io/VIP.github.io/](https://jiiiisoo.github.io/VIP.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 ReDPO 蒸馏方法，将 Direct Preference Optimization（DPO）与监督微调（SFT）相结合，用于压缩视频扩散模型
- 设计 V.I.P. 框架，包含高质量偏好对数据集的迭代式在线筛选和校准训练流程
- 在 VideoCrafter2 和 AnimateDiff 上分别实现 36.2% 和 67.5% 的参数缩减，同时保持或超越原模型性能

### 方法细节
- ReDPO 的核心思想是让学生模型通过 DPO 专注于恢复教师模型的目标属性（而非被动模仿），同时用 SFT 维持整体性能
- V.I.P. 框架通过在线逐帧质量评估自动筛选"赢/输"样本对，构建偏好数据集用于 DPO 训练
- 采用分步在线策略（step-by-step online approach），在蒸馏过程中逐步细化偏好对的标注质量，确保训练信号的校准
- 剪枝后的学生模型容量大幅降低，SFT 直接匹配教师输出会导致模式坍塌，DPO 的偏好学习有效缓解了这一问题

### 关键发现
- 纯 SFT 蒸馏在剪枝后的小容量学生模型上效果差，容易引发模式坍塌和生成质量下降
- DPO 通过偏好学习使学生模型主动聚焦关键属性恢复，比被动模仿教师更适合容量受限场景
- 在线偏好对筛选（V.I.P.）比使用固定偏好数据更鲁棒，能够适应蒸馏过程中学生模型的分布变化
- 大幅压缩（67.5% 参数减少）的 AnimateDiff 仍能产生与原模型质量相当的视频，验证了视频扩散模型中存在大量冗余

### 方法归类
- **范式**: 知识蒸馏 + 偏好优化
- **关键技术**: DPO、SFT、在线偏好对筛选、模型剪枝
- **适用场景**: 视频扩散模型压缩、资源受限环境下的视频生成、模型高效部署
