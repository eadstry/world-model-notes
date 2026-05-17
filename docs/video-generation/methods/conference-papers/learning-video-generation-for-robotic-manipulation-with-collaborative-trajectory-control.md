---
title: "Learning Video Generation for Robotic Manipulation with Collaborative Trajectory Control"
arxiv: https://arxiv.org/abs/2506.01943v2
github: https://github.com/KlingTeam/RoboMaster
website: https://fuxiao0719.github.io/projects/robomaster/
venue: ICLR
year: 2026
---

# Learning Video Generation for Robotic Manipulation with Collaborative Trajectory Control

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2506.01943v2](https://arxiv.org/abs/2506.01943v2)
- **GitHub**: [https://github.com/KlingTeam/RoboMaster](https://github.com/KlingTeam/RoboMaster)
- **Website**: [https://fuxiao0719.github.io/projects/robomaster/](https://fuxiao0719.github.io/projects/robomaster/)
:::

## 学习笔记

### 核心贡献
- 提出 RoboMaster 框架，通过协同轨迹建模（collaborative trajectory formulation）解决视频扩散模型在机器人操作场景中多物体交互建模的难题。
- 将交互过程分解为三个子阶段（交互前、交互中、交互后），并在每个阶段分别以主导物体（交互前后为机械臂，交互中为被操作物体）进行建模，有效缓解了多物体特征在重叠区域纠缠导致的视觉退化问题。
- 引入外观感知和形状感知的潜在表示（appearance- and shape-aware latent representations），在整段视频中保持物体的语义一致性。

### 方法细节
- 在交互前阶段，以机械臂的运动轨迹为主导构建条件信号；在交互阶段切换为被操作物体，模拟抓取和移动过程；在交互后阶段恢复以机械臂为主导，处理放置后的完整动作序列。
- 外观感知潜在表示通过保留物体的视觉特征（如颜色、纹理），确保物体在不同帧之间外观稳定；形状感知的潜在表示则建模物体的几何形态变化，尤其在物体被遮挡或变形时保持形状连续性。
- 以预训练视频扩散模型为骨干，将协同轨迹条件以条件注入的方式整合到扩散去噪过程中，训练时对多阶段分解后的轨迹进行统一优化。
- 在 Bridge、RLBench 和 SIMPLER 等具有挑战性的基准数据集上进行评估，涵盖多样化的真实和仿真机器人操作场景。

### 关键发现
- RoboMaster 在轨迹控制的视频生成任务中显著超越现有方法，在多物体交互场景中视觉保真度和轨迹控制精度均达到新 SOTA。
- 交互阶段分解策略有效改善了复杂操作场景（如抓取、移动、放置）中的物体运动连贯性和交互区域的视觉质量。
- 外观和形状感知的潜在表示对于保持物体在长序列中的身份一致性至关重要，尤其在物体经历遮挡或形态变化时效果突出。

### 方法归类
- 属于可控视频生成在机器人领域的交叉应用，聚焦于轨迹条件驱动的操作视频生成，是视频扩散模型在具身智能数据生成方向的前沿探索。
- 以阶段化交互建模解决多物体动态场景生成问题，可与一般物体运动控制视频生成方法（如 DragNUWA、MOFA-Video）形成互补。
