---
title: "MotiF: Making Text Count in Image Animation with Motion Focal Loss"
arxiv: https://arxiv.org/abs/2412.16153
website: https://wang-sj16.github.io/motif/
venue: CVPR
year: 2025
---

# MotiF: Making Text Count in Image Animation with Motion Focal Loss

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2412.16153](https://arxiv.org/abs/2412.16153)
- **Website**: [https://wang-sj16.github.io/motif/](https://wang-sj16.github.io/motif/)
:::

## 学习笔记

### 核心贡献
- 提出 Motion Focal Loss，利用光流生成运动热力图，根据运动强度对损失函数进行加权，使模型学习聚焦于运动更强的区域，显著提升文本-图像到视频生成中的文本对齐与运动生成质量
- 构建 TI2V Bench 基准数据集，包含 320 个图像-文本对，填补了该领域缺乏多样化评测基准的空白
- 在 TI2V Bench 上对 9 个开源模型进行人类偏好评估，MotiF 的平均偏好率达到 72%，验证了方法的有效性和泛化性

### 方法细节
- Motion Focal Loss 的核心步骤：首先计算相邻帧之间的光流，据此生成指示运动强度的热力图；然后在标准扩散损失的基础上，按热力图值对各像素位置的损失进行加权，使模型更关注运动区域
- 该方法与现有将光流作为模型输入的运动先验方法正交，可作为插件式训练目标直接应用于现有 TI2V 框架
- 人类评估协议采用两两比较的方式，要求标注者在两个生成视频中选择偏好并给出理由，比传统指标更贴近主观质量

### 关键发现
- 仅修改损失函数的加权策略即可带来显著的文本对齐提升，说明现有 TI2V 模型的主要瓶颈在于对静止区域的过拟合，而非模型架构本身
- 运动区域的加权训练不会牺牲图像保真度，反而通过更好的运动生成间接提升了整体视觉质量
- 在 9 个开源模型的对比中，MotiF 获得 72% 的平均偏好率，展示出跨架构的通用适应性

### 方法归类
- **范式**: 训练目标改进（损失函数重加权）
- **关键技术**: Motion Focal Loss、光流运动热力图、人类偏好评估协议
- **适用场景**: 文本引导的图像动画（TI2V）、任何需要增强运动区域学习能力的视频生成框架
