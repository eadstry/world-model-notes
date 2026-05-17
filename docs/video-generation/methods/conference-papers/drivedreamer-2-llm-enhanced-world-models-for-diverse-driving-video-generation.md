---
title: "DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation"
arxiv: https://arxiv.org/abs/2403.06845
github: https://github.com/f1yfisher/DriveDreamer2
website: https://drivedreamer2.github.io/
venue: AAAI
year: 2025
---

# DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation

::: info 论文信息
- **Venue**: AAAI (2025)
- **arXiv**: [https://arxiv.org/abs/2403.06845](https://arxiv.org/abs/2403.06845)
- **GitHub**: [https://github.com/f1yfisher/DriveDreamer2](https://github.com/f1yfisher/DriveDreamer2)
- **Website**: [https://drivedreamer2.github.io/](https://drivedreamer2.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 DriveDreamer-2，首个支持用户自定义驾驶场景的世界模型，通过引入大语言模型将自然语言查询转化为可执行的自动驾驶视频生成。
- 设计 Unified Multi-View Model，统一建模多视角视频的时空一致性，显著提升生成驾驶视频的时序连贯性与空间一致性。
- 证明生成驾驶视频可作为感知模型（3D 检测与跟踪）的有效训练数据增广手段，FID 和 FVD 分别达到 11.2 和 55.7。

### 方法细节
- 引入 LLM 接口模块，将用户的自然语言查询（如「车辆突然切入」）解析并转换为智能体轨迹，实现驾驶场景的灵活定制。
- 基于生成的轨迹，构建符合交通规则的 HDMap 作为结构化空间约束，确保生成视频中的道路布局与行驶行为真实可行驶。
- Unified Multi-View Model 将多视角视频生成统一为单一模型，通过时空注意力机制同时优化跨视角和跨帧一致性。
- 整体框架继承 DriveDreamer 的基础架构，在此基础上叠加 LLM 交互层与多视图统一生成模块。

### 关键发现
- DriveDreamer-2 能够生成训练数据中罕见的驾驶场景（如车辆突然切入），弥补了真实数据采集的覆盖不足问题。
- 生成的驾驶视频用于训练 3D 检测与跟踪等感知模型时可带来性能提升，验证了合成数据的实用价值。
- FID 与 FVD 指标相较当前最优方法分别相对提升 30% 和 50%，视频生成质量在驾驶领域达到领先水平。

### 方法归类
- 属于自动驾驶领域的**世界模型驱动的视频生成**方向，核心特征是将 LLM 的场景理解能力与多视图视频扩散生成相结合。
- 在应用层面，可归类为**合成数据增广用于自动驾驶感知**的典型工作，展示了生成式世界模型在下游任务中的迁移价值。
