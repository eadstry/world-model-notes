---
title: "Reangle-A-Video: 4D Video Generation as Video-to-Video Translation"
arxiv: https://arxiv.org/abs/2503.09151
github: https://github.com/HyeonHo99/Reangle-Video
website: https://hyeonho99.github.io/reangle-a-video/
venue: ICCV
year: 2025
---

# Reangle-A-Video: 4D Video Generation as Video-to-Video Translation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.09151](https://arxiv.org/abs/2503.09151)
- **GitHub**: [https://github.com/HyeonHo99/Reangle-Video](https://github.com/HyeonHo99/Reangle-Video)
- **Website**: [https://hyeonho99.github.io/reangle-a-video/](https://hyeonho99.github.io/reangle-a-video/)
:::

## 学习笔记

### 核心贡献
- 提出 Reangle-A-Video，一个统一的单输入视频到同步多视角视频生成框架，将多视角视频生成重新定义为视频到视频的翻译任务。
- 无需在大规模 4D 数据集上训练多视角视频扩散模型，仅利用已有的图像和视频扩散先验即可实现 4D 视频生成。

### 方法细节
- 第一阶段——多视角运动学习：以自监督方式对图像到视频扩散 Transformer 进行同步微调，从一组经 warp 的视频中蒸馏出视角不变的运动信息。
- 第二阶段——多视角一致图像翻译：利用 DUSt3R 提供推理时的跨视角一致性引导，将输入视频首帧 warp 并修补到不同相机视角，生成多视角一致的起始图像。

### 关键发现
- 在静态视角迁移和动态相机控制两个设定下，均超越现有方法，建立了一种新的多视角视频生成解决方案。
- 两阶段解耦设计（运动学习 + 图像翻译）有效降低了对大规模 4D 训练数据的依赖。

### 方法归类
- **范式**: 视频到视频翻译的多视角视频生成
- **关键技术**: 自监督 DiT 微调、DUSt3R 跨视角一致性引导、warp 与修补
- **适用场景**: 从单段视频生成多视角/重视角视频，适用于动态相机控制和新视角合成
