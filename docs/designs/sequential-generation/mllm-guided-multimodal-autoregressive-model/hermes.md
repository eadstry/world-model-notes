---
title: "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation"
design: "HERMES"
arxiv: https://arxiv.org/abs/2501.14729
github: https://github.com/LMD0311/HERMES
---

# HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation

::: info 论文信息
- **Design**: HERMES
- **论文全称**: HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation
- **arXiv**: [https://arxiv.org/abs/2501.14729](https://arxiv.org/abs/2501.14729)
- **GitHub**: [https://github.com/LMD0311/HERMES](https://github.com/LMD0311/HERMES)
:::

## 核心思想

HERMES 提出了自动驾驶世界模型领域中一个关键的统合理念：**将 3D 场景理解（Scene Understanding）与未来场景生成（Scene Generation）融合在同一框架中**。现有的 Driving World Model（DWM）仅专注于场景生成——预测未来的视觉画面，但缺乏对驾驶环境的语义理解和推理。HERMES 首次将这两个能力统一建模，使模型不仅能"看"清未来，更能"理解"未来。

HERMES 的核心技术手段包括两个关键设计：(1) 使用 Bird's-Eye View（BEV）表征来整合多视图空间信息，同时保留几何关系和交互；(2) 引入"world queries"机制，通过 LLM 中的因果注意力将世界知识注入 BEV 特征，实现上下文的丰富化。通过这种设计，HERMES 在场景理解（如场景描述、行为推理）和场景生成（如未来视频预测）两个维度上均取得了显著提升。后续版本 HERMES++ 进一步扩展了统一框架的能力边界。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：HERMES 使用 BEV 表征作为核心的空间信息整合层。多视角相机输入首先通过 BEVFormer v2 编码为统一的 BEV 特征图，该特征保留了场景中物体的几何位置、尺度和空间关系。同时，InternVL（多模态大语言模型）作为视觉-语言理解 backbone，将视觉特征映射到语言模型的语义空间。

- **未来预测（Future Prediction）**：HERMES 的统一框架同时预测场景的未来演变（视觉生成）和场景的语义理解（文本描述）。在生成维度上，模型自回归地预测未来的 BEV 特征和时间对齐的多视角图像；在理解维度上，模型生成场景描述、行为推理和问答回答。world queries 作为连接两个维度的桥梁——它们通过 causal attention 机制将 LLM 中的世界知识注入 BEV 特征。

- **动作与交互（Action & Interaction）**：HERMES 将驾驶动作（如转向、加速、制动）作为条件信号输入模型。模型不仅预测动作条件下的未来场景，还能基于对当前场景的理解推理出合理的驾驶行为。这种"理解-预测-推理"的闭环设计使 HERMES 超越了单向的端到端驾驶模型，形成了一个真正的驾驶世界模型。

## 代码实现要点

开源代码基于 mmdet3d 框架（[LMD0311/HERMES](https://github.com/LMD0311/HERMES)），Apache 2.0 许可证：

- **项目结构**：[`projects/`](https://github.com/LMD0311/HERMES/tree/main/projects) 包含 HERMES 模型实现，[`configs/`](https://github.com/LMD0311/HERMES/tree/main/configs) 包含训练和推理配置
- **核心依赖**：基于 BEVFormer v2（BEV 编码）、InternVL（多模态理解）、UniPAD（自监督预训练）、OmniDrive（驾驶世界模型基准）
- **数据处理**：[`docs/Data.md`](https://github.com/LMD0311/HERMES/blob/main/docs/Data.md) 说明 nuScenes 和 OmniDrive-nuScenes 数据集准备，包含预训练权重下载
- **训练与推理**：[`docs/Usage.md`](https://github.com/LMD0311/HERMES/blob/main/docs/Usage.md) 提供训练、推理和评估指南
- **扩展版本**：HERMES++ 论文（[arXiv:2604.28196](https://arxiv.org/abs/2604.28196)）和代码已发布

## 关键创新点

1. **统一理解与生成**：首个同时实现 3D 场景理解和未来场景生成的自动驾驶世界模型。
2. **World Queries 机制**：通过 causal attention 将 LLM 的世界知识注入 BEV 空间特征，实现跨模态知识融合。
3. **BEV 表征的桥接作用**：BEV 空间作为理解和生成的共同表征基础，连接了视觉感知和语言推理。
4. **显著的性能提升**：生成误差降低 32.4%，理解指标 CIDEr 提升 8.0%，验证了统一框架优于独立建模。

## 代表性结果

在 nuScenes 和 OmniDrive-nuScenes 数据集上达到 state-of-the-art：场景生成误差降低 32.4%，场景理解 CIDEr 指标提升 8.0%。论文被 ICCV 2025 接收。
