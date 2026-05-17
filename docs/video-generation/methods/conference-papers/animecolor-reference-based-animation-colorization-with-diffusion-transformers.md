---
title: "AnimeColor: Reference-based Animation Colorization with Diffusion Transformers"
arxiv: https://arxiv.org/abs/2507.20158
github: ""
website: ""
venue: arXiv
year: 2025
---

# AnimeColor: Reference-based Animation Colorization with Diffusion Transformers

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2507.20158](https://arxiv.org/abs/2507.20158)
- **GitHub**: (代码即将发布)
:::

## 学习笔记

### 核心贡献
- 提出基于 Diffusion Transformers (DiT) 的参考图像动画上色框架 AnimeColor，将线稿序列整合到 DiT 视频扩散模型中，实现线稿可控的动画生成
- 设计 High-level Color Extractor (HCE) 模块，从参考图像中提取语义级颜色信息，指导全局色彩风格
- 设计 Low-level Color Guider (LCG) 模块，从参考图像中提取细粒度颜色细节，保证局部纹理和色彩的准确性
- 提出多阶段训练策略，逐步提升模型对参考图像色彩信息的利用效率

### 方法细节
- 以 DiT 视频扩散模型为骨干，将线稿序列作为额外条件注入去噪过程，驱动生成与线稿对齐的彩色动画帧
- HCE 模块通过全局特征编码器（如 CLIP 视觉编码器）提取参考图像的语义色彩特征，注入到扩散模型的交叉注意力层中
- LCG 模块关注低层视觉特征，捕获参考图像中的细节色彩分布，通过空间自适应归一化或特征调制方式融入生成过程
- 多阶段训练策略：第一阶段仅使用 HCE 建立粗粒度色彩风格；第二阶段引入 LCG 细化局部色彩；第三阶段联合微调以保证全局与局部的一致性
- 生成过程中同时约束线稿对齐损失和色彩一致性损失，保帧间平滑过渡

### 关键发现
- HCE 与 LCG 的协同工作机制能有效解耦语义色彩风格与细节色彩纹理，既保证整体色调统一又保留局部色彩差异
- 多阶段训练策略相比直接联合训练能更充分地利用参考图像的色彩信息，避免色彩信息在训练过程中被稀释
- DiT 架构相比传统 UNet 在动画上色任务中展现出更好的时序一致性

### 方法归类
- **范式**: 基于 DiT 的条件视频扩散模型，参考图像引导上色
- **关键技术**: Diffusion Transformers (DiT)、参考图像色彩提取、高低层特征解耦、多阶段训练
- **适用场景**: 动画制作中的自动上色、线稿驱动的视频着色、风格化动画生成
