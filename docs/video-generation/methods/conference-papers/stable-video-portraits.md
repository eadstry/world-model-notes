---
title: "Stable Video Portraits"
arxiv: https://arxiv.org/abs/2409.18083
website: https://svp.is.tue.mpg.de/
venue: ECCV
year: 2024
---

# Stable Video Portraits

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2409.18083](https://arxiv.org/abs/2409.18083)
- **Website**: [https://svp.is.tue.mpg.de/](https://svp.is.tue.mpg.de/)
:::

## 学习笔记

### 核心贡献
- 提出 SVP，一种混合 2D/3D 生成方法，利用大规模预训练文本到图像先验（2D）与 3D 可变形人脸模型（3DMM）控制生成逼真的说话人脸视频
- 将通用 Stable Diffusion 模型提升为视频模型，通过时序 3DMM 序列条件化和时序去噪过程实现逐帧平滑过渡
- 支持在测试时无需微调即可将人脸外观编辑为文本定义的 celebrity 风格

### 方法细节
- 对 Stable Diffusion 进行人物特定的微调（person-specific fine-tuning），使其学会特定身份的外观先验
- 以 3DMM 参数序列作为时序条件注入扩散过程，替换原有的文本嵌入，实现对姿态、表情和头部运动的精确控制
- 引入时序去噪机制，在相邻帧之间共享噪声初始化与隐空间特征，保证生成视频的时间一致性

### 关键发现
- SVP 生成的说话人脸视频在时间平滑性和视觉逼真度上显著优于已有单目头部化身方法
- 即使仅对单一人脸数据微调，模型通过文本引导仍可泛化到未知身份和外观风格
- 3DMM 控制与扩散先验的结合为人脸视频编辑和动画提供了灵活的混合驱动管线

### 方法归类
- **范式**: 2D 扩散模型 + 3DMM 条件驱动
- **关键技术**: 人物特定微调 (person-specific fine-tuning), 时序 3DMM 条件化, 时序去噪
- **适用场景**: 说话人脸视频生成、人脸视频编辑、数字人化身创建
