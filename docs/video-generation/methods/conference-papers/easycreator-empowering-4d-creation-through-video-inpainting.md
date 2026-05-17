---
title: "EasyCreator: Empowering 4D Creation through Video Inpainting"
arxiv: https://arxiv.org/abs/2506.04590v1
website: https://follow-your-creation.github.io/
venue: ICLR
year: 2026
---

# EasyCreator: Empowering 4D Creation through Video Inpainting

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2506.04590v1](https://arxiv.org/abs/2506.04590v1)
- **Website**: [https://follow-your-creation.github.io/](https://follow-your-creation.github.io/)
:::

## 学习笔记

### 核心贡献
- 将 4D 视频创建（生成与编辑）重新形式化为视频补全（video inpainting）任务，利用强大的视频补全基础模型作为生成先验，统一处理相机位移导致的遮挡区域填充与用户指定的内容编辑。
- 提出自迭代调优（self-iterative tuning）策略，在训练中逐步增大视点角度，每次微调迭代后使用当前模型生成下一阶段的训练数据，有效提升大视角变化下的时序一致性。

### 方法细节
- 首先对输入视频及其相机轨迹进行深度驱动的点云渲染，生成不可见区域掩码（invisibility masks），标注因相机运动而需要补全的区域。
- 将用户编辑掩码与不可见区域掩码融合为复合掩码数据集，训练时随机采样不同类型的掩码以构建多样化的补全场景，增强模型的泛化能力。
- 自迭代调优策略从较小视角开始微调，逐步放大视角范围，每轮迭代后利用当前模型自动生成下一阶段的训练数据，形成课程学习式的渐进训练流程。
- 推理时引入时序打包模块（temporal packaging module），将多帧上下文打包输入以提升长序列生成的时空一致性。
- 整体方案在视频补全基础模型之上进行微调，不损害原有模型的生成能力，支持基于文本提示的内容编辑。

### 关键发现
- 将 4D 创建任务重新定义为视频补全，可有效利用现有视频扩散模型的先验知识，避免从零训练 4D 生成模型的高昂成本。
- 自迭代训练策略使模型能够逐步适应大视角变化，相比直接在大视角数据上训练，显著减轻了时序一致性崩溃的风险。

### 方法归类
- 属于 4D 内容生成方向，通过 2D 视频扩散模型的补全先验实现新视点合成与场景编辑，是一种投影驱动的 4D 生成范式。
- 与基于 Score Distillation Sampling（SDS）的 3D/4D 生成方法互补，核心创新在于用 video inpainting 替代了隐式 3D 表示的逐视点优化过程。
