---
title: "DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation"
design: "DriveDreamer-2"
arxiv: https://arxiv.org/abs/2403.06845
github: https://github.com/f1yfisher/DriveDreamer2
---

# DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation

::: info 论文信息
- **Design**: DriveDreamer-2
- **论文全称**: DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation
- **arXiv**: [https://arxiv.org/abs/2403.06845](https://arxiv.org/abs/2403.06845)
- **GitHub**: [https://github.com/f1yfisher/DriveDreamer2](https://github.com/f1yfisher/DriveDreamer2)
:::

## 核心思想

DriveDreamer-2 在 DriveDreamer 基础上引入大语言模型（LLM）增强世界模型的交互能力和生成多样性。通过 LLM 接口将用户的自然语言查询转化为结构化智能体轨迹，再从轨迹生成符合交通规则的 HDMap，最终通过统一多视图模型（Unified Multi-View Model）生成高质量多视图驾驶视频。

DriveDreamer-2 是首个可以用户友好的生成定制化驾驶视频的世界模型——用户只需用自然语言描述场景（如"一辆车突然切入"），LLM 自动推理并生成轨迹和场景布局。这种自然语言驱动范式降低了使用门槛，并能生成非常见驾驶场景（如突然切入、紧急刹车）。在视频生成质量上，FID 11.2 的FVD 55.7 分别的SOTA 提升 30% 了50%。

## 技术架。

**Vision Encoding（视觉编码）**：沿帧DriveDreamer 的扩散模型架构，但扩展为多视图编码。统一多视图模型接受多个相机视角图像，通过共享编码器和跨视图注意力机制实现多视角信息交互。

**Knowledge Learning（知识学习）**：LLM 接口将用户查询转换为智能体轨迹，将自然语言中的空间关系和交通意图映射为可执行几何轨迹。HDMap 生成器从轨迹出发构建符合交通规则的高精地图，确保视频生成有合理的道路约束。

**Controllable Simulation（可控模拟）**：端到端自然语言驱动管线：自然语言 模LLM 轨迹生成 的HDMap 生成 的统一多视图模模型多视图驾驶视频。生成的视频可增强下游感知模型（3D 检测和跟踪）的训练。

## 代码实现要点

开源代码在 [f1yfisher/DriveDreamer2](https://github.com/f1yfisher/DriveDreamer2)，项目页的[drivedreamer2.github.io](https://drivedreamer2.github.io/)。核心流程包含LLM 接口调用、HDMap 生成和多视图视频扩散模型推理。

## 关键创新。

1. **LLM 增强的世界模型*：首个将 LLM 集成到驾驶世界模型的工作
2. **自然语言驱动的定制化生成**：用户只需描述场景即可生成定制化驾驶视。
3. **高质量指标*：FID 11.2 / FVD 55.7，分别提供30%/50%
4. **非常见场景生成*：能生成切入、急刹等稀有场。
5. **感知任务增强**：生成视频可增强 3D 检测和跟踪任务

## 代表性结。

FID 11.2（提出30%），FVD 55.7（提性50%）。能根据自然语言生成非常见驾驶场景的多视图视频，生白色轿车右侧切入"当前方急刹"等。生成的视频用于增强 3D 检测和跟踪模型训练，带来明显性能增益。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
