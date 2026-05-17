---
title: "3DreamBooth: High-Fidelity 3D Subject-Driven Video Generation Model"
arxiv: https://arxiv.org/abs/2603.18524
github: https://github.com/Ko-Lani/3DreamBooth
website: https://ko-lani.github.io/3DreamBooth/
venue: arXiv
year: 2026
---

# 3DreamBooth: High-Fidelity 3D Subject-Driven Video Generation Model

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2603.18524](https://arxiv.org/abs/2603.18524)
- **GitHub**: [https://github.com/Ko-Lani/3DreamBooth](https://github.com/Ko-Lani/3DreamBooth)
- **Website**: [https://ko-lani.github.io/3DreamBooth/](https://ko-lani.github.io/3DreamBooth/)
:::

## 学习笔记

### 核心贡献
- 提出首个 3D 感知的主体制驱动视频生成框架，将空间几何与时间运动解耦，避免 2D 方法在多视角合成时的几何不一致性
- 设计了 3Dapter 视觉条件注入模块，采用非对称条件策略（Asymmetrical Conditioning），仅在部分去噪步中注入多视角参考特征，防止模型过拟合到单帧外观
- 仅需 1 帧参考图像即可完成主体身份优化（Single-Frame Optimization），大幅降低用户输入门槛，同时保持多视角生成时的外观一致性
- 引入多视角联合优化（Multi-View Joint Optimization），在 DreamBooth 微调阶段同时约束多视角渲染结果，确保 3D 主体的外观在不同视角下保持高保真

### 方法细节
- 整体管道分为两阶段：(1) 利用多视角参考图像对预训练视频扩散模型进行 DreamBooth 风格的主体微调；(2) 推理时通过 3Dapter 注入多视角条件，驱动 3D 主体的视频生成
- 3Dapter 基于交叉注意力机制，将多视角参考图像的 CLIP 特征映射为空间条件嵌入，采用「部分步注入」策略——仅在去噪早期步骤注入条件，后期由模型自由生成运动，实现空间-时间的优雅解耦
- 单帧优化策略：使用单张主体图像构造伪多视角数据（通过 3D 重建或数据增强），在微调时联合真实视角与伪视角进行训练，解决了传统 DreamBooth 需要多张参考图的限制
- 多视角联合损失函数在潜空间和像素空间同时计算，包括 LDM 去噪损失 + 多视角外观一致性正则项，有效抑制了生成视频中的纹理漂移和几何畸变
- 训练时冻结基础 UNet 的大部分参数，仅微调 3Dapter 模块和 Cross-Attention 中的 Key/Value 投影层，保持基础模型的泛化能力

### 关键发现
- 2D 主体定制方法（如原始 DreamBooth）在视频生成中容易将「身份」与「特定姿态/视角」绑定，导致相机运动时主体外观崩溃；3DreamBooth 通过显式 3D 感知解耦显著缓解了该问题
- 非对称条件策略（早期步注入条件、后期步移除）比全步骤条件注入更能保持生成视频的运动自然度，同时不牺牲主体保真度

### 方法归类
- **范式**: 基于预训练视频扩散模型微调（DreamBooth 范式扩展）
- **关键技术**: 3D 感知条件注入、非对称条件策略、多视角联合优化、单帧身份适配
- **适用场景**: 个性化 3D 物体视频生成、产品展示动画、AR/VR 内容创作、影视预览
