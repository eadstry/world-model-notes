---
title: "ABot-PhysWorld: Interactive World Foundation Model for Robotic Manipulation with Physics Alignment"
design: "ABot-PhysWorld"
arxiv: https://arxiv.org/abs/2603.23376
github: https://github.com/amap-cvlab/ABot-PhysWorld
---

# ABot-PhysWorld: Interactive World Foundation Model for Robotic Manipulation with Physics Alignment

::: info 论文信息
- **Design**: ABot-PhysWorld
- **论文全称**: ABot-PhysWorld: Interactive World Foundation Model for Robotic Manipulation with Physics Alignment
- **arXiv**: [https://arxiv.org/abs/2603.23376](https://arxiv.org/abs/2603.23376)
- **GitHub**: [https://github.com/amap-cvlab/ABot-PhysWorld](https://github.com/amap-cvlab/ABot-PhysWorld)
:::

## 学习笔记

### 核心思想
ABot-PhysWorld 提出物理对齐的交互式世界基础模型（World Foundation Model），专门针对机器人操作场景。核心思想是：构建一个通用的大型世界模型，不仅预测未来视频帧，还同时预测物理属性（碰撞、力、物体运动），通过物理对齐（physics alignment）训练确保生成内容遵守牛顿力学定律。

### 技术架构
- **Vision Encoding（视觉编码）**：使用 VAE 将操作场景的 RGB-D 视频帧编码为 latent tokens。多模态编码器同时处理 RGB 图像、深度图和机器人本体状态（关节角、力矩、接触力）。使用 3D-aware positional encoding 注入空间几何信息。
- **Knowledge Learning（知识学习）**：基于大型 Diffusion Transformer（类似于 Sora 架构），核心创新是多任务物理对齐训练：模型同时预测未来视频、深度图、语义分割和物理属性图（接触力、碰撞 mask）。物理对齐通过将预测的物理属性输入物理仿真器（可微分模拟器）计算物理一致性损失（能量守恒、接触约束等）来实现。模型还使用语言指令作为额外条件。
- **Controllable Simulation（可控仿真）**：支持语言指令控制（如"拿起红色方块"）、动作控制、和交互式操作，生成物理合理的操作视频。

### 关键创新点
1. **物理对齐世界模型**：将可微分物理仿真器集成到训练 loop 中，确保世界模型遵守物理定律。
2. **多任务预测**：同时预测 RGB、深度、语义和物理属性，形成对场景的全面理解。
3. **语言交互**：支持自然语言指令作为世界模型的控制条件。

### 代码实现要点
- 开源（amap-cvlab/ABot-PhysWorld），基于 PyTorch
- 使用可微分物理仿真器（如 Isaac Gym/Taichi）进行物理对齐
- DiT 骨干支持多种条件输入（语言、动作、物理参数）
- 训练数据来自仿真器 + 真实机器人操作数据混合

### 代表性结果
- 物理对齐后生成的视频中物体运动轨迹更符合真实物理规律
- 碰撞预测准确率提升，物理不一致事件减少 >40%
