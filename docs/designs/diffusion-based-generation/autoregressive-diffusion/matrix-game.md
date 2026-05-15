---
title: "Matrix-Game: Interactive World Foundation Model"
design: "Matrix-Game"
arxiv: https://arxiv.org/abs/2506.18701
github: https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-1
---

# Matrix-Game: Interactive World Foundation Model

::: info 论文信息
- **Design**: Matrix-Game
- **论文全称**: Matrix-Game: Interactive World Foundation Model
- **arXiv**: [https://arxiv.org/abs/2506.18701](https://arxiv.org/abs/2506.18701)
- **GitHub**: [https://github.com/SkyworkAI/Matrix-Game](https://github.com/SkyworkAI/Matrix-Game)
- **机构**: Skywork AI (昆仑万维)
- **日期**: 2025-06-23
:::

## 核心思想

Matrix-Game 是一个面向 Minecraft 游戏世界的可交互世界基础模型，拥有超过 170 亿参数。其核心思想是通过大规模无标签预训练实现环境理解，再通过动作标注数据进行交互式视频生成训练——这种分离使模型既能获得广泛的世界知识，又能实现精细的交互控制。

Matrix-Game 采用了可控的 image-to-world 生成范式：给定一张参考图像、运动上下文和用户动作，模型生成下一帧。与 Oasis 等前作相比，Matrix-Game 在视觉质量、时序一致性、动作可控性和物理规则理解四个维度上均有显著提升。

Matrix-Game 的主要贡献还包括构建了 **Matrix-Game-MC**——一个包含 2700+ 小时无标签游戏视频和 1000+ 小时高质量标注视频（含细粒度键盘和鼠标动作标注）的全面 Minecraft 数据集，以及开发了 **GameWorld Score**——一个覆盖视觉质量、时序质量、动作可控性和物理规则理解四个维度的统一评估基准。

## 技术架构

### 1. 虚拟环境
- **Matrix-Game-MC 数据集**: 2700+ 小时无标签 + 1000+ 小时有标注 Minecraft 游戏视频
- 标注包含：细粒度键盘动作、鼠标移动和点击
- 场景多样性覆盖 Minecraft 的各种地形、建筑和游戏状态

### 2. 世界模型
- 170 亿参数的大规模扩散模型（推断为 DiT 架构或类似）
- **两阶段训练**:
  - **阶段 1**: 大规模无标签预训练——在 2700+ 小时无标签视频上训练，学习 Minecraft 世界的通用视觉表征和环境动态
  - **阶段 2**: 动作标注训练——在 1000+ 小时高质量标注数据上训练，实现精确的交互控制
- Image-to-world 范式：以参考图像 + 运动上下文为条件，自回归生成后续帧
- 强调物理规则的一致性（如方块行为、重力等）

### 3. 行动模型
- 细粒度的键盘和鼠标动作控制
- 角色移动和相机运动的精确控制
- 动作信号通过条件模块注入扩散模型

## 代码实现要点

GitHub 开源（待发布）: [SkyworkAI/Matrix-Game](https://github.com/SkyworkAI/Matrix-Game)

计划开源的资源：
- Matrix-Game 模型权重（170 亿+ 参数）
- GameWorld Score 评估基准
- Matrix-Game-MC 数据集（部分？）

## 关键创新点

1. **世界基础模型定位**: 将 Minecraft 世界生成定位为 foundation model，追求通用性和规模化
2. **两阶段训练策略**: 无标签预训练 + 动作标注微调，分离世界理解与交互控制
3. **Matrix-Game-MC 数据集**: 最大规模的高质量标注 Minecraft 游戏视频数据集（2700+ 小时无标签 + 1000+ 小时标注）
4. **GameWorld Score**: 首个覆盖视觉、时序、控制、物理四维度的统一评估基准
5. **大幅超越前作**: 在所有指标上一致优于 Oasis 和 MineWorld，尤其在控制性和物理一致性上优势明显
6. **双盲人评验证**: 人类评估者一致认为 Matrix-Game 生成的视频更逼真且更可控

## 代表性结果

- **模型参数**: 170 亿+
- **数据集**: 2700+ 小时无标签 + 1000+ 小时标注
- **对比对象**: Oasis, MineWorld（在所有指标上全面超越）
- **评估维度**: GameWorld Score（视觉质量、时序质量、动作可控性、物理规则理解）
- **人评**: 双盲评估中明显优于对比模型
- **场景多样性**: Minecraft 的各种地形和游戏状态
