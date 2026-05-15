---
title: "Towards foundational LiDAR world models with efficient latent flow matching"
design: "LiDARWM"
arxiv: https://arxiv.org/abs/2506.23434
github: https://github.com/Orbis36/OccFM-NeurIPS2025
---

# LiDARWM: Towards foundational LiDAR world models with efficient latent flow matching

::: info 论文信息
- **Design**: LiDARWM
- **论文全称**: Towards foundational LiDAR world models with efficient latent flow matching
- **arXiv**: [https://arxiv.org/abs/2506.23434](https://arxiv.org/abs/2506.23434)
- **GitHub**: [https://github.com/Orbis36/OccFM-NeurIPS2025](https://github.com/Orbis36/OccFM-NeurIPS2025)
:::

## 学习笔记

### 核心思想

LiDARWM 是首个面向基础激光雷达世界模型的系统研究，发表于 NeurIPS 2025。激光雷达世界模型相比图像世界模型提供更结构化和几何感知的表示，但现有方法训练域狭窄——每个模型仅在其构建的领域内表现良好。本文的核心问题是：能否开发出跨多域迁移的激光雷达基础世界模型？团队进行了首个系统域迁移研究，涵盖三个挑战性场景：(1) 室外到室内的泛化；(2) 稀疏光束与稠密光束的适配；(3) 非语义到语义的迁移。实验表明单个预训练模型相比从头训练可实现高达 11% 的绝对提升（83% 相对提升），在 36 组比较中 30 组胜出。此外，提出基于潜在条件流匹配（CFM）的高效框架，仅使用一半训练数据、6× 压缩比，取得语义占用预测 SOTA，且 23× 计算高效（28× FPS 加速）。

### 技术架构

**Vision Encoding（视觉编码）**：LiDARWM 将激光雷达点云作为输入，通过体素化（voxelization）将稀疏 3D 点云转换为规则 3D 体素网格。关键的压缩洞察：现有方法对激光雷达数据压缩不足（lidar 的稀疏性意味着大量零体素），导致表示效率低下。LiDARWM 使用高压缩比的潜在自编码器在潜在空间中进行激光雷达表示学习。

**Knowledge Learning（知识学习）**：LiDARWM 采用潜在条件流匹配（CFM）替代标准扩散目标。CFM 训练更高效，因为流匹配只需要学习从噪声到数据的一条直线路径，而不像扩散需要学习完整的随机微分方程。域迁移实验揭示了关键发现——动态学习能力（场景演化规律）而非静态重建是可迁移的：预训练模型学到的"事物如何移动和变化"的规律跨越不同激光雷达配置仍然适用。仅需 5% 标注数据即可超越之前需要全量标注的语义占用预测方法。

**Controllable Simulation（可控仿真）**：LiDARWM 支持轨迹条件语义占用预测——给定自车未来轨迹，预测对应的未来语义占用状态。这为自动驾驶的数据增强和闭环仿真提供了高效方案。6× 压缩比和 28× FPS 加速使其具备实际部署的可行性。

### 代码实现要点

- **高压缩比潜在自编码器**：将稀疏激光雷达体素编码为极低维潜在表示，6× 高压缩
- **潜在 CFM**：在潜在空间中应用条件流匹配，学习从噪声到数据分布的最优传输路径
- **三域迁移设置**：室内/室外、稀疏/稠密 LiDAR、非语义/语义
- **NeurIPS 2025 accepted**

### 关键创新点

- **首个激光雷达基础世界模型研究**：系统性域迁移分析
- **潜在 CFM 框架**：高效训练替代扩散，加速收敛
- **6× 压缩 + SOTA 精度**：表示效率与生成质量的双赢
- **极低标注依赖**：5% 标注超越全量标注模型
