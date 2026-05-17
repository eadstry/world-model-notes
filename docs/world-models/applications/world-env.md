---
title: "World-Env: Leveraging World Model as a Virtual Environment for VLA Post-Training"
design: "World-Env"
arxiv: https://arxiv.org/abs/2509.24948
github: https://github.com/amap-cvlab/world-env
---

# World-Env: Leveraging World Model as a Virtual Environment for VLA Post-Training

::: info 论文信息
- **Design**: World-Env
- **论文全称**: World-Env: Leveraging World Model as a Virtual Environment for VLA Post-Training
- **arXiv**: [https://arxiv.org/abs/2509.24948](https://arxiv.org/abs/2509.24948)
- **GitHub**: [https://github.com/amap-cvlab/world-env](https://github.com/amap-cvlab/world-env)
:::

## 学习笔记

### 核心思想

该工作提出了 World-Env，利用世界模型作为VLA 模型后训练的虚拟环境。其核心创意是：在不需要真实机器人或仿真器的情况下，通过世界模型生成大量的交互轨迹，规VLA 模型进行后训练（post-training），从而显著提升其在真实环境中的表现。
该工作的实践价值在于提供了一种低成本、高效率和VLA 训练增强方案，展示了世界模型作为"虚拟训练方在具身AI 系统中的巨大实用潜力。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
