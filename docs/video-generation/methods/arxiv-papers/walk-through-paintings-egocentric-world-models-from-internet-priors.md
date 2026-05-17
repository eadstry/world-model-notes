---
title: "Walk through Paintings: Egocentric World Models from Internet Priors"
arxiv: https://arxiv.org/abs/2601.15284
github: https://github.com/miccooper9/egowm
website: https://egowm.github.io/
venue: arXiv
year: 2026
---

# Walk through Paintings: Egocentric World Models from Internet Priors

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2601.15284](https://arxiv.org/abs/2601.15284)
- **GitHub**: [https://github.com/miccooper9/egowm](https://github.com/miccooper9/egowm)
- **Website**: [https://egowm.github.io/](https://egowm.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出自我中心世界模型（EgoWM），一种架构无关的方法，可将任意预训练视频扩散模型转换为动作条件的世界模型，实现可控的未来预测
- 不从头训练，而是复用互联网规模视频模型中的世界先验知识，仅通过轻量级条件注入层注入运动指令
- 提出结构一致性评分（SCS），用于独立于视觉外观评估预测视频中场景元素是否随动作一致演化
- 自然支持多种具身形态和动作空间扩展，覆盖从 3-DoF 移动机器人到 25-DoF 人形机器人的导航与操作任务

### 方法细节
- 以预训练视频扩散模型（如 Stable Video Diffusion）为基础，冻结核心权重，仅训练轻量级的动作条件注入层
- 动作指令通过交叉注意力（cross-attention）或自适应层归一化（adaptive layer norm）注入到扩散模型的去噪网络中，使生成过程以动作为条件
- 微调阶段仅需少量具身视频数据（demonstration data），模型利用互联网预训练中的通用视觉与物理先验进行泛化
- 支持多种动作空间定义：3-DoF 线性/角速度（轮式机器人）、25-DoF 关节角度（人形机器人），通过统一的条件接口接入
- 推理时给定初始观测与动作序列，自回归地生成未来帧，实现长期 rollout 预测

### 关键发现
- EgoWM 将结构一致性评分（SCS）相较于先前最优导航世界模型提升最高 80%，证明行动-视觉物理一致性显著增强
- 推理延迟比先前方法降低最高 6 倍，同时具备对新环境的鲁棒泛化能力，包括在绘画场景中"漫步"的零样本迁移
- 从 3-DoF 导航到 25-DoF 人形关节角驱动的泛化验证了方法对动作空间复杂度的可扩展性，仅需适度微调

### 方法归类
- **范式**: 世界模型 / 动作条件视频生成 / 基于先验的微调
- **关键技术**: 预训练视频扩散模型复用、轻量级条件注入层、跨具身形态泛化、结构一致性评估
- **适用场景**: 机器人导航仿真、具身智能未来预测、虚拟环境漫游、视觉运动规划与预测
