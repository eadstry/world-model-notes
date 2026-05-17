---
title: "CAGE: Unsupervised Visual Composition and Animation for Controllable Video Generation"
arxiv: https://arxiv.org/abs/2403.14368
github: https://github.com/araachie/cage
website: https://araachie.github.io/cage/
venue: "AAAI"
year: 2025
---

# CAGE: Unsupervised Visual Composition and Animation for Controllable Video Generation

::: info 论文信息
- **Venue**: AAAI 2025
- **arXiv**: [2403.14368](https://arxiv.org/abs/2403.14368)
- **GitHub**: [araachie/cage](https://github.com/araachie/cage)
- **Website**: [项目页面](https://araachie.github.io/cage/)
:::

## 学习笔记

### 核心贡献
- 首次实现**完全无标注的可控组合视频生成**，无需文本、边界框或运动线索等任何人工标注，具有高度可扩展性
- 提出**统一控制格式**：以随机选取的预训练自监督局部特征子集作为生成条件，迫使模型学习场景的组合性与物体运动动力学
- 推理时可将物体部件自由放置于任意时空坐标，实现灵活的场景组合与物体动画，控制方式简洁统一
- 条件特征对微小视觉扰动具有不变性，只需在目标位置放置相同的局部特征即可实现跨帧时间一致的运动控制

### 方法细节
- 在无标注视频数据集上从零训练，训练时随机选择一个局部特征子集作为条件（如 DINO 特征），其余位置特征被丢弃
- 模型接收不完整的特征图作为条件输入，被迫学习**时空补全**（spatial and temporal inpainting）：预测缺失特征对应区域的视觉内容与运动
- 通过这种条件补全训练，模型隐式地学习到场景中不同物体及其部件的组合关系以及运动动力学
- 推理时用户只需在目标时空位置放置所需物体的局部特征，模型即可在该位置生成对应物体并自动补全合理的运动序列
- 统一控制格式的抽象性使模型与具体语义标签解耦，保证了控制的灵活性和泛化性

### 关键发现
- 自监督局部特征作为条件信号具有足够的抽象层次和对视觉扰动的不变性，是运动控制的理想表示
- 无监督条件补全训练可以使模型自发学习场景的组合结构与物体运动动力学，无需显式运动监督
- 该方法摆脱了标注依赖，为大规模、低成本的可控视频生成提供了可行路径

### 方法归类
- **范式**: 无监督可控视频生成
- **关键技术**: 自监督局部特征条件注入、时空条件补全训练、统一控制格式
- **适用场景**: 无标注场景的可控视频生成、物体组合动画、交互式场景编辑、低成本视频合成
