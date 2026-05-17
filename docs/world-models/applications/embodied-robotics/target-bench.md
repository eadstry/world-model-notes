---
title: "Target-Bench: Can World Models Achieve Mapless Path Planning with Semantic Targets"
design: "Target-Bench"
arxiv: https://arxiv.org/abs/2511.17792
github: https://github.com/TUM-AVS/target-bench
website: https://target-bench.github.io/
---

# Target-Bench: Can World Models Achieve Mapless Path Planning with Semantic Targets

::: info 论文信息
- **Design**: Target-Bench
- **论文全称**: Target-Bench: Can World Models Achieve Mapless Path Planning with Semantic Targets
- **arXiv**: [https://arxiv.org/abs/2511.17792](https://arxiv.org/abs/2511.17792)
- **GitHub**: [https://github.com/TUM-AVS/target-bench](https://github.com/TUM-AVS/target-bench)
- **Website**: [https://target-bench.github.io/](https://target-bench.github.io/)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2511.17792](https://arxiv.org/abs/2511.17792)
- **GitHub**: [https://github.com/TUM-AVS/target-bench](https://github.com/TUM-AVS/target-bench)
- **Website**: [https://target-bench.github.io/](https://target-bench.github.io/)

## 简介
Target-Bench eTUM 提出的专门评测世界模型无地图路径规模能力的基准。该基准的核心问题是：世界模型是否能够仅通过视觉语义目标（如"走向红色汽车"移到桌子旁"）在没有显式地图的情况下进行路径规划。与传统路径规划基准不同，Target-Bench 不提供几何地图，而是要求模型仅依赖语义理解和视觉世界建模来找到通向指定目标的路径。

Target-Bench eHabitat 仿真平台上构建，包含数百个逼真的室内和室外场景，每个场景都定义了多个语义目标点。智能体必须根据"语义目标描述"（如描述性文本或目标图像）在未知环境中自主导航到指定位置。该基准的评估标准不仅包括到达成功率，还测量路径效率、探索行为质量和是否能在视觉上确认到达（视觉定位能力）。

## 关键特征
- **数据规模**: 数百个真实感 3D 场景，多样化的语义目标配。
- **数据模式**: RGB/RGB-D 图像、语义标签、目标描述图像、导航轨。
- **主要指标**: 语义到达成功率、路径效率（SPL）、视觉定位准确率
- **领域**: 无地图导航、语义路径规划、具身世界模。

## 与世界模型的关系
Target-Bench 为世界模型提供了一种独特的"空间推理"评测维度。一个真正优秀的世界模型不仅应该能预测未来视觉状态，还应该能从预测中提取空间关系和路径信息。Target-Bench 直接测试世界模型的语义空间理解能力——模型是否能在脑中"构建对未见环境的内部空间表征，并基于该表征进行高效规划。这与认知科学中的认知地图"概念高度对应，是评估世界模型空间智能的重要基准。

## 代表性用例
- TUM 团队使用 Target-Bench 评测世界模型的语义导航能。
- 作为导航世界模型的标准化评估协议
- 被用于比较基准VLM 的世界模型与传统 SLAM 方法的导航性能
- 启发了世界模型的"空间推理"研究方向

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)