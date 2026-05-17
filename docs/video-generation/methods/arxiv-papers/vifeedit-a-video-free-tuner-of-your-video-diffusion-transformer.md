---
title: "ViFeEdit: A Video-Free Tuner of Your Video Diffusion Transformer"
arxiv: https://arxiv.org/abs/2603.15478
github: https://github.com/Lexie-YU/ViFeEdit
website: ""
venue: arXiv
year: 2026
---

# ViFeEdit: A Video-Free Tuner of Your Video Diffusion Transformer

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2603.15478](https://arxiv.org/abs/2603.15478)
- **GitHub**: [https://github.com/Lexie-YU/ViFeEdit](https://github.com/Lexie-YU/ViFeEdit)
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 提出 ViFeEdit，一种完全不使用视频训练数据的视频扩散 Transformer 微调框架，仅依赖 2D 图像即可实现多种视频生成与编辑任务
- 通过架构重参数化将全 3D 注意力解耦为空间独立分量，在保持时序一致性的同时实现视觉忠实编辑，仅需极少额外参数
- 设计双通路（dual-path）推理流水线，结合独立的时间步嵌入进行噪声调度，对多种条件信号表现强适应性

### 方法细节
- 架构重参数化将视频 DiT 中的全 3D 注意力分解为空间注意力与时间注意力两个独立模块，空间模块继承预训练权重，时间模块轻量可调
- 训练阶段仅使用 2D 图像数据，通过设计的损失函数约束，使空间变换在无视频监督下仍保持时序平滑性
- 双通路流水线中，一条通路处理内容保持，另一条通路处理条件注入，两条通路共享主干但使用不同的时间步嵌入控制噪声调度
- 条件注入支持多种形式（如文本、布局、姿态、深度图等），通过交叉注意力或附加条件 token 统一接入
- 微调参数量极小，仅学习新增的时间注意力层和条件注入模块，冻结预训练视频 DiT 的大部分权重

### 关键发现
- 仅使用 2D 图像训练即可在多种可控视频生成和编辑任务上取得有竞争力的结果，显著降低了对配对视频数据的依赖
- 架构重参数化设计使编辑结果在保持原始视频内容完整性的同时，能准确响应编辑指令，避免常见的时序闪烁问题
- 双通路时间步嵌入策略对不同类型条件信号均表现鲁棒，避免了单一噪声调度在不同任务间需要手动调整的问题

### 方法归类
- **范式**: 视频编辑 / 可控生成 / 免视频训练微调
- **关键技术**: Diffusion Transformer 架构重参数化、3D 注意力空间-时间解耦、双通路噪声调度、仅 2D 图像训练
- **适用场景**: 文本驱动的视频编辑、布局/姿态/深度引导的可控视频生成、无需配对视频数据的视频 DiT 适配
