---
title: "iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation"
design: "iMoWM"
arxiv: https://arxiv.org/abs/2510.09036
website: https://xingyoujun.github.io/imowm/
---

# iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation

::: info 论文信息
- **Design**: iMoWM
- **论文全称**: iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2510.09036](https://arxiv.org/abs/2510.09036)
- **Website**: [https://xingyoujun.github.io/imowm/](https://xingyoujun.github.io/imowm/)
:::

## 学习笔记

## 核心思想

iMoWM（Interactive Multi-Modal World Model for Robotic Manipulation）提出了一种**交互式多模态世界模型**，旨在将 2D 视频世界模型拓展为包含 3D 几何信息的具身世界模型。当前 2D 视频世界模型在机器人操作中取得了显著进展，但它们缺乏几何和空间推理能力，无法表征操作场景的关键 3D 物理结构。iMoWM 的核心贡献是自回归地同时生成**彩色图像、深度图和机械臂掩码**，通过多模态表示自然地融入了 3D 结构信息。

iMoWM 的第二个关键创新是 MMTokenizer（多模态 tokenizer）——将三种模态（RGB、深度、掩码）统一编码为紧凑的 token 表示。这使得 iMoWM 可以**利用大规模预训练的 VideoGPT 模型**作为初始化，同时高效地处理多模态数据。多模态预测带来双重优势：(1) 视觉质量——深度和掩码的辅助监督使 RGB 预测更加几何准确；(2) 下游应用——生成的深度图和掩码可以直接用于 model-based RL 中的奖励计算和策略训练，也可用于真实世界的模仿学习。

## 技术架构

**Vision Encoding（视觉编码）**：iMoWM 使用 MMTokenizer 将三种模态统一处理：(1) RGB 图像通过标准 VQ-VAE 编码为视觉 token（捕捉外观和纹理信息）；(2) 深度图通过独立的量化编码器编码为深度 token（捕捉 3D 几何结构）；(3) 机械臂掩码通过二进制编码器处理（捕捉机器人自身的位置和姿态）。三种 token 在序列维度上交错拼接，形成统一的多模态 token 流。MMTokenizer 的紧凑设计使得 token 总数不随模态增加而线性增长——通过共享部分编码层和联合码本实现。

**Knowledge Learning（知识学习）**：iMoWM 利用预训练 VideoGPT 的权重作为初始化，在其基础上添加深度和掩码编码/解码分支。训练目标是最小化三种模态的重建损失：RGB 使用感知损失 + L1 损失，深度图使用 L1 + 结构相似性损失，掩码使用交叉熵损失。预训练 VideoGPT 已经内化了关于场景结构和运动模式的知识，iMoWM 通过添加几何监督信号来强化这种理解——深度图为模型提供了显式的距离信息（物体离相机多远），掩码提供了机器人本体感知信息（机器人在场景中的位置和姿态）。

**Controllable Simulation（可控模拟）**：iMoWM 以机器人动作为条件控制未来帧的生成。多模态输出使其在多个下游任务中发挥价值：(1) **Model-based RL**——生成的多模态预测可以计算更丰富的奖励信号（如基于深度的碰撞检测、基于掩码的目标接近度）；(2) **模仿学习**——生成的多模态训练数据包含更完整的场景信息用于训练策略网络；(3) **真实世界迁移**——深度和掩码预测帮助弥合仿真-现实的视觉差距。

## 代码实现要点

核心实现：(1) MMTokenizer 基于 VQ-VAE 架构，共享编码层，分离模态专用 head；(2) VideoGPT 主干以交错的多模态 token 序列为输入，自回归预测未来 token；(3) 多模态损失函数的加权策略（RGB: 1.0, 深度: 0.5, 掩码: 0.3）。预训练初始化阶段仅加载 VideoGPT 的 RGB 相关权重，深度和掩码分支随机初始化后联合微调。训练数据包括机器人仿真数据和部分真实世界数据。项目主页 xingyoujun.github.io/imowm 提供了交互式 demo。

## 关键创新点

- **首个人机交互多模态世界模型**：同时生成 RGB、深度和机械臂掩码，将 2D 世界模型升级为几何感知的 3D 世界模型
- **MMTokenizer 统一多模态编码**：将三种模态压缩为紧凑 token 表示，实现高效的联合建模
- **复用大规模预训练 VideoGPT**：通过即插即用的模态扩展分支，以最小成本继承预训练视觉知识
- **多下游任务验证**：在 MBRL、模仿学习和真实世界操作中展现了多模态世界模型的独特优势

## 代表性结果

在机器人操作仿真基准上，iMoWM 的 RGB 预测质量（FVD）优于纯 2D 视频世界模型——这得益于深度/掩码额外监督提供的几何正则化。在 MBRL 实验中，基于 iMoWM 的 model-based 策略在样本效率和最终成功率上均超越基于 2D 世界模型的方案。在真实世界操作实验中，深度图和机械臂掩码的生成质量在定性和定量评估中均有良好表现。消融实验验证：移除深度预测分支显著降低远处物体的预测质量；移除掩码预测分支降低与机械臂相关的操作精度。
