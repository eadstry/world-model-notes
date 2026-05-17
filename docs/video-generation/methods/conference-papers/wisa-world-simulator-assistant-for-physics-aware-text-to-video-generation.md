---
title: "WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation"
arxiv: https://arxiv.org/abs/2503.08153
github: https://github.com/360CVGroup/WISA
website: https://360cvgroup.github.io/WISA/
venue: NeurIPS
year: 2025
---

# WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2503.08153](https://arxiv.org/abs/2503.08153)
- **GitHub**: [https://github.com/360CVGroup/WISA](https://github.com/360CVGroup/WISA)
- **Website**: [https://360cvgroup.github.io/WISA/](https://360cvgroup.github.io/WISA/)
:::

## 学习笔记

### 核心贡献
- 提出 WISA（World Simulator Assistant）：利用 GPT-4 作为世界模拟器，为视频生成模型提供物理感知的文本增强
- 构建 WISA-80K 数据集：8 万条经过物理知识增强的 T2V prompt
- 将物理知识蒸馏到视频生成模型中，无需修改模型架构

### 方法细节
- **世界模拟器 LLM**：GPT-4 被用作物理知识库，对用户 prompt 进行物理规律增强
- **Prompt 增强流程**：用户指令 → LLM 分析物理可行性 → 补充物理约束描述 → 增强后的 prompt → 视频生成
- **物理维度**：涵盖重力、碰撞、流体、光学、材料属性等 10+ 种物理现象
- **SFT 微调**：在 WISA-80K 数据集上微调视频生成模型

### 关键发现
- 仅通过 prompt 增强和 SFT 即可显著改善生成视频的物理合理性
- LLM 作为世界模拟器在识别物理不合理性方面表现良好，但偶有过度修正
- WISA 可与 PhyGDPO / VideoREPA 等方法互补——一个在数据侧增强，一个在训练侧优化

### 方法归类
监督微调 — 领域适配（物理感知）
