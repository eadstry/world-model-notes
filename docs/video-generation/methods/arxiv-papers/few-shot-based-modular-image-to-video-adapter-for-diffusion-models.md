---
title: "Few-Shot-Based Modular Image-to-Video Adapter for Diffusion Models"
arxiv: https://arxiv.org/abs/2512.20000
github: https://github.com/yishaohan/MIVA
website: https://yishaohan.github.io/MIVA-web/
venue: arXiv
year: 2025
---

# Few-Shot-Based Modular Image-to-Video Adapter for Diffusion Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2512.20000](https://arxiv.org/abs/2512.20000)
- **GitHub**: [https://github.com/yishaohan/MIVA](https://github.com/yishaohan/MIVA)
- **Website**: [https://yishaohan.github.io/MIVA-web/](https://yishaohan.github.io/MIVA-web/)
:::

## 学习笔记

### 核心贡献

扩散模型在图像/视频生成中表现优异，但将其应用于**图像动画化（image animation）**时仍面临两大瓶颈：(1) 视频信号高维导致训练数据稀缺，模型倾向于记忆而非遵循提示生成运动；(2) 难以泛化到训练集之外的新运动模式，且基于少量数据的微调策略尚未被充分探索。本文提出 **MIVA（Modular Image-to-Video Adapter）**，一种可附加到预训练扩散模型的轻量子网络，每个 MIVA 模块专门捕获一种运动模式，并通过并行化实现规模扩展。MIVA 可用约 10 个样本在单张消费级 GPU 上高效训练，推理时用户通过选择一个或多个 MIVA 来指定运动，无需提示工程。

### 方法细节

1. **模块化架构设计**：MIVA 是以 Adapter 形式插入预训练视频扩散模型（如 SVD/I2VGen-XL）的轻量级子网络。每个 MIVA 模块仅对应一种运动模式（如"从左向右平移""顺时针旋转""放大"等），训练时该模块学会将静态输入图像与该运动模式关联。
2. **训练策略**：每个 MIVA 模块仅需约 **10 个训练样本**，使用单张消费级 GPU（如 RTX 4090）即可训练。训练时冻结基座模型的所有参数，仅更新 MIVA 模块的权重。损失函数为标准扩散去噪损失 $\mathbb{E}_{z,\epsilon,t}[||\epsilon - \epsilon_\theta(z_t, t, c)||^2]$，其中条件 $c$ 包含输入图像和 MIVA 注入的运动表征。
3. **推理时的运动组合**：用户可选择一个或多个 MIVA 模块进行组合推理，实现复合运动模式（如"平移+旋转"）。多个 MIVA 的输出在特征空间中进行加权融合，权重由用户或自动化策略控制。
4. **与提示工程的对比**：传统方法依赖文本提示描述运动（如"camera panning left"），但自然语言对运动的表达能力有限且不精确。MIVA 通过显式学习的运动表征替代文本描述，实现精确且可复现的运动控制。

### 关键发现

- MIVA 在极少样本（~10 个）下即可学习特定运动模式，数据效率远高于端到端微调。
- 多 MIVA 并行推理可实现**运动组合**，支持更复杂的复合运动生成。
- 在保持甚至**超越**大规模数据集训练模型生成质量的同时，提供更精确的运动控制。
- 消除了对运动提示工程（prompt engineering）的依赖，降低了用户使用门槛。

### 方法归类

- **范式**：模块化即插即用适配器（Modular Plug-and-Play Adapter）
- **技术路径**：参数高效微调（PEFT）→ 运动模式解耦学习 → 多适配器组合推理
- **核心机制**：少样本运动适配器（Few-Shot Motion Adapter）、特征空间运动融合
- **相关方向**：Image-to-Video Generation、Motion Controllability、Parameter-Efficient Fine-Tuning、Customized Video Generation
