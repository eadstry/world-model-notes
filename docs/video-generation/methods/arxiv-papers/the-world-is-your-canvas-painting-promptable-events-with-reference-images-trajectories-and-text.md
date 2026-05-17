---
title: "The World is Your Canvas: Painting Promptable Events with Reference Images, Trajectories, and Text"
arxiv: https://arxiv.org/abs/2512.16924
github: https://github.com/pPetrichor/WorldCanvas
website: https://worldcanvas.github.io/
venue: arXiv
year: 2025
---

# The World is Your Canvas: Painting Promptable Events with Reference Images, Trajectories, and Text

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2512.16924](https://arxiv.org/abs/2512.16924)
- **GitHub**: [https://github.com/pPetrichor/WorldCanvas](https://github.com/pPetrichor/WorldCanvas)
- **Website**: [https://worldcanvas.github.io/](https://worldcanvas.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出了 WorldCanvas，一种多模态世界事件生成框架，通过联合轨迹（编码运动、时序与可见性）、自然语言（语义意图）和参考图像（视觉 grounding）实现用户可引导的交互式世界模拟
- 首次将轨迹控制、文本语义与参考图像外观三者深度融合用于视频生成，突破纯文本和轨迹控制图像到视频方法的局限
- 支持多智能体交互、物体进出场景、参考引导外观保持和反直觉事件等复杂场景的生成
- 实现了涌现式一致性（emergent consistency），即物体在暂时消失后重新出现时仍能保持身份和外观不变

### 方法细节
- 轨迹编码物体的运动路径、时间节奏与可见性状态，提供精确的时空控制信号
- 自然语言提示提供高层语义描述，定义事件的类型、参与者和行为意图
- 参考图像用于视觉 grounding，确保生成物体在运动过程中保持外观一致性
- 多模态条件通过统一的 diffusion 框架融合，生成时空连贯的事件视频
- 框架将世界模型从被动预测器转变为用户可操控的交互式模拟器

### 关键发现
- 多模态条件（轨迹 + 文本 + 参考图像）显著优于仅使用文本或轨迹的单模态控制方案
- 模型在物体暂时离开视野后重新出现时仍能保持身份一致性，展现了强泛化能力
- WorldCanvas 能够生成在物理意义上可能发生但不常见的"反直觉事件"，扩展了世界模拟的边界

### 方法归类
- **范式**: 多模态可控视频生成 / 世界模型
- **关键技术**: 轨迹编码、参考图像 grounding、文本语义引导、Diffusion Transformer
- **适用场景**: 交互式世界模拟、电影/动画预览、自主驾驶场景生成、多智能体交互仿真
