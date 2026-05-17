---
title: "MagicID: Hybrid Preference Optimization for ID-Consistent and Dynamic-Preserved Video Customization"
arxiv: https://arxiv.org/abs/2503.12689
github: https://github.com/EchoPluto/MagicID
website: https://echopluto.github.io/MagicID-project/
venue: ICCV
year: 2025
---

# MagicID: Hybrid Preference Optimization for ID-Consistent and Dynamic-Preserved Video Customization

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.12689](https://arxiv.org/abs/2503.12689)
- **GitHub**: [https://github.com/EchoPluto/MagicID](https://github.com/EchoPluto/MagicID)
- **Website**: [https://echopluto.github.io/MagicID-project/](https://echopluto.github.io/MagicID-project/)
:::

## 学习笔记

### 核心贡献
- 提出 MagicID，一种基于混合偏好优化的视频 ID 定制框架，以偏好学习替代传统自重建训练，直接优化身份一致性与动态丰富性目标
- 构建成对偏好视频数据（pairwise preference video data），显式引入身份保持奖励与动态质量奖励，使模型对齐用户对身份和动态的偏好差异
- 提出混合采样策略（hybrid sampling strategy），先利用参考图像的静态视频保身份，再用 Frontier-based 采样提升动态质量

### 方法细节
- 将视频 ID 定制建模为偏好优化问题，构造正负例视频对，每对样本在身份一致性和动态质量上具有显式奖励差异
- 采用混合采样策略：第一阶段从参考图像衍生静态视频以优先保证身份保持，第二阶段使用 Frontier-based 采样方法增强生成视频中的动态运动质量
- 利用上述混合偏好对，通过偏好优化（preference optimization）对模型进行对齐训练，使其在身份一致性与动态丰富性之间取得平衡

### 关键发现
- 偏好优化范式显著缓解了传统自重建训练导致的长视频身份退化和训练期动态减弱问题
- MagicID 在身份一致性和自然动态两个维度上均超越现有方法，验证了偏好学习在视频定制任务中的有效性

### 方法归类
- **范式**: 将视频身份定制从自重建训练转变为基于显式奖励的偏好优化对齐
- **关键技术**: Pairwise preference data construction、Hybrid sampling strategy、Frontier-based sampling、Identity reward modeling、Dynamic reward modeling、Preference optimization for video generation
- **适用场景**: 基于参考图像的高保真个性化视频生成、虚拟人/数字人定制、需要稳定身份保持的动态内容创作
