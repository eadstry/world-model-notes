---
title: "Animate Your Motion: Turning Still Images into Dynamic Videos"
arxiv: https://arxiv.org/abs/2403.10179
github: https://github.com/Mingxiao-Li/Animate-Your-Motion
website: https://mingxiao-li.github.io/smcd/
venue: ECCV
year: 2024
---

# Animate Your Motion: Turning Still Images into Dynamic Videos

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2403.10179](https://arxiv.org/abs/2403.10179)
- **GitHub**: [https://github.com/Mingxiao-Li/Animate-Your-Motion](https://github.com/Mingxiao-Li/Animate-Your-Motion)
- **Website**: [https://mingxiao-li.github.io/smcd/](https://mingxiao-li.github.io/smcd/)
:::

## 学习笔记

### 核心贡献
- 首次在扩散视频生成框架中同时整合语义条件（图像、深度图）与运动条件（移动草图、物体边界框），解决此前两种模态信息各自为政的问题
- 提出 Scene and Motion Conditional Diffusion (SMCD) 方法，系统化地管理多模态输入，促进语义与运动信息之间的协同
- 设计两阶段训练流程，将语义条件与运动条件的注入解耦，降低多模态联合训练的难度
- 在视频质量、运动精度和语义一致性三个维度上均取得显著提升

### 方法细节
- 以预训练的文本到视频扩散模型为骨干，在已有的运动条件模块基础上，探索多种场景条件注入策略（如交叉注意力、特征拼接等）
- 运动条件模块负责编码精确的轨迹与运动信息（如物体边界框序列、移动笔画），语义条件模块负责编码场景上下文
- 两阶段训练：第一阶段单独训练场景条件分支以建立稳定的语义表示；第二阶段联合训练运动与场景模态，实现跨模态融合
- 支持多种条件输入格式，包括参考图像、深度图、语义分割图等作为场景条件，运动草图或边界框作为运动条件
- 沿用级联扩散架构，先生低分辨率视频帧，再通过时空超分辨率模块提升至目标分辨率

### 关键发现
- 语义条件与运动条件在扩散生成过程中具有互补性：语义信息提供丰富的场景背景，运动信息提供精确的动态轨迹
- 直接将两种条件同时注入模型会导致训练不稳定和模态冲突，两阶段训练策略能有效缓解这一问题
- SMCD 生成的视频在运动真实性和场景保真度上显著优于仅使用单一条件的方法

### 方法归类
- **范式**: 条件扩散模型（Conditional Diffusion Model），视频生成
- **关键技术**: 多模态条件注入、两阶段训练、运动条件与语义条件协同、级联扩散
- **适用场景**: 可控视频生成、图像动画化、语义驱动与运动驱动结合的视频合成
