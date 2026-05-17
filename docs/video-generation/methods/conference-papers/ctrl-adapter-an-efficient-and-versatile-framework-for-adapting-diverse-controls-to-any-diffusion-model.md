---
title: "Ctrl-Adapter: An Efficient and Versatile Framework for Adapting Diverse Controls to Any Diffusion Model"
arxiv: https://arxiv.org/abs/2404.09967
github: https://github.com/HL-hanlin/Ctrl-Adapter
website: https://ctrl-adapter.github.io/
venue: arXiv
year: 2024
---

# Ctrl-Adapter: An Efficient and Versatile Framework for Adapting Diverse Controls to Any Diffusion Model

::: info 论文信息
- **Venue**: arXiv (2024)
- **arXiv**: [2404.09967](https://arxiv.org/abs/2404.09967)
- **GitHub**: [HL-hanlin/Ctrl-Adapter](https://github.com/HL-hanlin/Ctrl-Adapter)
- **Website**: [Project Page](https://ctrl-adapter.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Ctrl-Adapter，将预训练 ControlNet 适配到任意图像/视频扩散模型，无需重新训练 ControlNet 或修改目标模型权重
- 引入 MoE（Mixture of Experts）路由器，支持多条件（边缘、深度、姿态等）自适应融合，实现空间级别的动态权重分配
- 支持 6 种以上主流扩散模型骨架（SDXL、PixArt-α、SVD、Latte、Hotshot-XL 等），跨 UNet/DiT 架构通用
- 训练成本极低：< 10 GPU 小时即可完成适配，显著低于传统 ControlNet 训练方案
- 覆盖视频编辑、风格迁移、文本驱动运动控制等多模态下游任务

### 方法细节
- Ctrl-Adapter 在 ControlNet 与目标扩散模型之间插入适配层（Adaptation Layers），由 Cross-Attention 和 Conv 模块构成
- 适配层将 ControlNet 输出的中间特征与目标模型中间表示对齐，解决不同架构（UNet 层级 vs DiT 块结构）之间的空间/通道映射问题
- MoE 路由器对每个 spatial token 计算专家权重，动态融合来自不同 ControlNet 的条件信号，实现多条件协同控制
- 训练时仅优化适配层和路由器参数，ControlNet 与目标扩散模型权重保持冻结，保留预训练知识
- 适配层采用残差结构设计，可灵活插拔，推理时支持条件信号强度调节

### 关键发现
- ControlNet 的中间层特征具有跨模型骨架的可迁移性，仅需轻量适配即可在新模型上复现控制效果
- MoE 路由器在无显式多条件标注的情况下，通过隐式路由学习有效避免了多条件冲突（如边缘与深度的空间矛盾）
- 在 COCO 上匹配原生 ControlNet 性能，在 DAVIS 2017 上达到 SOTA

### 方法归类
- **范式**: 模型适配器 / 零修改控制注入
- **关键技术**: ControlNet 适配 → MoE 多条件路由 → 跨骨架特征对齐 → 冻结训练
- **适用场景**: 快速为任意扩散模型添加空间控制信号，多条件视频/图像生成，视频编辑，风格迁移
