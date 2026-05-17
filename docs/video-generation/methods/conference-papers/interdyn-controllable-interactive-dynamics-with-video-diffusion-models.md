---
title: "InterDyn: Controllable Interactive Dynamics with Video Diffusion Models"
arxiv: https://arxiv.org/abs/2412.11785
github: https://github.com/rickakkerman/InterDyn
website: https://interdyn.is.tue.mpg.de/
venue: CVPR
year: 2025
---

# InterDyn: Controllable Interactive Dynamics with Video Diffusion Models

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2412.11785](https://arxiv.org/abs/2412.11785)
- **GitHub**: [https://github.com/rickakkerman/InterDyn](https://github.com/rickakkerman/InterDyn)
- **Website**: [https://interdyn.is.tue.mpg.de/](https://interdyn.is.tue.mpg.de/)
:::

## 学习笔记

### 核心贡献
- 提出 InterDyn 框架，将大规模视频生成模型同时用作神经渲染器和隐式物理「模拟器」，从单帧初始帧和控制信号生成交互物体的连续动态视频。
- 设计了交互控制机制（interactive control mechanism），以驱动实体（driving object/actor）的运动信号为条件控制视频生成过程，实现了对复杂物体交互行为的可控建模。
- 突破了现有方法仅能处理简化场景或静态状态转移的局限，将可控交互动态生成推广到复杂真实环境。

### 方法细节
- 以初始帧和驱动实体的运动控制信号（control signal）作为联合条件输入，引导视频扩散模型生成后续帧序列。
- 核心洞察在于大规模视频生成模型已从海量视频数据中隐式学习了交互动力学先验，无需显式物理建模即可模拟物体间的互动行为。
- 交互控制机制将驱动实体的运动编码为条件特征，注入扩散生成过程，实现对被驱动物体运动轨迹的间接约束。
- 生成的视频在时间维度上保持了一致性，能够反映物体间的碰撞、推动等复杂物理交互。

### 关键发现
- 定性结果显示 InterDyn 能够生成合理且时序一致的复杂物体交互视频，并对未见过的物体具有良好的泛化能力。
- 定量评估表明 InterDyn 在交互动态生成质量上显著优于仅关注静态状态转移的基线方法。
- 验证了将大规模视频生成模型作为隐式物理模拟器的可行性，为物理推理与视觉生成的交叉研究开辟了新路径。

### 方法归类
- 可控视频生成（controllable video generation），聚焦于交互动态（interactive dynamics）的建模与控制。
- 属于视频扩散模型中利用隐式物理先验实现运动控制的子方向，区别于传统的显式物理仿真路径。
