---
title: "WorldWeaver: Generating Long-Horizon Video Worlds via Rich Perception"
arxiv: https://arxiv.org/abs/2508.15720v1
website: https://johanan528.github.io/worldweaver_web/
venue: NeurIPS
year: 2025
---

# WorldWeaver: Generating Long-Horizon Video Worlds via Rich Perception

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2508.15720v1](https://arxiv.org/abs/2508.15720v1)
- **Website**: [https://johanan528.github.io/worldweaver_web/](https://johanan528.github.io/worldweaver_web/)
:::

## 学习笔记

### 核心贡献
- 提出 WorldWeaver 框架，在统一的长期建模方案中联合建模 RGB 帧与感知条件（深度图），显著提升长视频生成的结构与时间一致性。
- 利用深度图比 RGB 更抗漂移的特性，构建基于深度线索的记忆库（Memory Bank），保留更清晰的长期上下文信息。
- 引入分段噪声调度（Segmented Noise Scheduling）用于训练预测组，进一步缓解时序漂移并降低计算开销。

### 方法细节
- 模型从统一表示中联合预测感知条件（深度）和颜色信息，使感知信号成为结构先验约束生成过程。
- 记忆库沿时间轴存储深度特征，作为后续帧生成的参考上下文，减少 RGB 域累积误差的影响。
- 分段噪声调度将长序列切分为多个预测组，每组独立分配噪声调度策略，在保持时序连贯的同时降低训练复杂度。

### 关键发现
- 联合感知建模在扩散模型和 Rectified Flow 模型上均有效，稳定提升长视频生成质量。
- 深度记忆库的漂移鲁棒性优于 RGB 记忆库，是长时序一致性提升的关键因素。

### 方法归类
- **范式**: [联合感知建模 / 长时序世界生成]
- **关键技术**: [RGB + 深度联合预测 → 深度记忆库 → 分段噪声调度 → 时序漂移抑制]
- **适用场景**: [长时序视频生成，世界模型仿真，结构一致性要求高的视频生成任务]
