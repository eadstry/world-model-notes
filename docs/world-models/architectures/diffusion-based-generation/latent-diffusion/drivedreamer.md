---
title: "DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving"
design: "DriveDreamer"
arxiv: https://arxiv.org/abs/2309.09777
github: https://github.com/JeffWang987/DriveDreamer
---

# DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving

::: info 论文信息
- **Design**: DriveDreamer
- **论文全称**: DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2309.09777](https://arxiv.org/abs/2309.09777)
- **GitHub**: [https://github.com/JeffWang987/DriveDreamer](https://github.com/JeffWang987/DriveDreamer)
:::

## 核心思想

DriveDreamer 是面向真实驾驶场景的开拓性世界模型。此前世界模型研究主要集中在游戏环境或仿真设定中，缺乏对真实世界驾驶场景的表征能力。DriveDreamer 首次提出完全从真实世界驾驶数据构建世界模型，在 nuScenes 数据集为基础，利用扩散模型强大的表示学习能力构建复杂驾驶环境的综合表征。

DriveDreamer 的核心洞察是：驾驶场景包含高度结构化的交通约束（如车道线和交通标志规定了车辆的合法运动空间），需要世界模型在生成未来状态时忠实遵守这些约束。为此，DriveDreamer 提出了两阶段训练管线——第一阶段让模型深度理解结构化交通约束，第二阶段赋予模型预测未来状态的能力。这种分阶段策略确保模型先生成符合交通规则的场景结构，再在此基础上进行合理的动态预测。

## 技术架。

**Vision Encoding（视觉编码）**：DriveDreamer 采用扩散模型作为基础架构，将驾驶场景图像编码到隐空间。模型使用nuScenes 的前视相机图像作为输入，通过 VAE 编码器进行压缩。在结构化交通约束理解阶段，模型需要学习场景中的车道线、交通标志、道路布局等高层语义信息。

**Knowledge Learning（知识学习）**：DriveDreamer 采用两阶段训练策略。第一阶段（Traffic Constraint Understanding）：模型学习理解驾驶场景中的结构化交通约束，包括道路拓扑、交通规则、静态场景元素的布局。第二阶段（Future State Prediction）：在第一阶段基础上，模型进一步学习预测未来驾驶场景的视频帧，捕捉车辆运动、行人移动等动态元素的变化。这种分阶段训练策略被证明比直接端到端训练更能保证生成未来场景的合理性和约束一致性。

**Controllable Simulation（可控模拟）**：DriveDreamer 支持多种可控生成模式。用户可以通过文本提示（如晴天、雨天、夜晚）控制场景环境条件；可以通过驾驶动作（如转向、加速）控制自车行为，生成对应动作下的未来视频。模型还支持多样化驾驶视频生成，即从同一初始帧生成多个可能的未来轨迹。此外，DriveDreamer 首次展示了基于视频生成的驾驶策略学习能力。

## 代码实现要点

代码实2024 实11 月开源（Apache-2.0 许可），仓库结构如下。

- `dreamer-datasets/`：数据准备和处理
- `dreamer-models/`：模型定。
- `dreamer-train/`：训练脚。
- `DOCS/`：安装、数据准备、训练测试文。

核心流程。
1. 安装环境（参考`DOCS/install.md`。
2. 准备 nuScenes 数据集和交通约束条件（参考`DOCS/preparation.md`。
3. 训练和评估（参考`DOCS/trainval.md`。

后续版本已迁移至 [GigaAI-research](https://github.com/GigaAI-research/DriveDreamer) 维护。

## 关键创新。

1. **首个真实世界驾驶世界模型**：完全从 nuScenes 真实驾驶数据学习，而非仿真环境
2. **两阶段训练策略*：先学习结构化交通约束，再学习动态预测，保证生成结果的物理合理。
3. **交通约束驱动的条件生成**：通过显式建模交通规则来引导视频生成，生成结果遵守真实世界的交通约。
4. **驾驶策略学习能力**：首次展示世界模型可直接生成驾驶动作（action），而不仅是视频预测
5. **ECCV 2024 接收**：在 Page Digest 于ECCV 最具影响力论文中排名第 15

## 代表性结。

DriveDreamer 在 nuScenes 上展示了多样化的可控视频生成：不同天气（晴天、雨天、夜晚）下的驾驶视频；与驾驶动作交互的未来视频预测（如左转、右转、直行等）；同一场景的多种可能未来。特别值得一提的是，DriveDreamer 不仅能生成高质量视频，还能直接输出驾驶策略（方向盘转角、加减速等），在视频质量和驾驶动作合理性之间取得了良好平衡。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
