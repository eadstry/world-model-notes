---
title: "Phantom: Subject-Consistent Video Generation via Cross-Modal Alignment"
arxiv: https://arxiv.org/abs/2502.11079
github: https://github.com/Phantom-video/Phantom
website: https://phantom-video.github.io/Phantom/
venue: ICCV
year: 2025
---

# Phantom: Subject-Consistent Video Generation via Cross-Modal Alignment

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2502.11079](https://arxiv.org/abs/2502.11079)
- **GitHub**: [https://github.com/Phantom-video/Phantom](https://github.com/Phantom-video/Phantom)
- **Website**: [https://phantom-video.github.io/Phantom/](https://phantom-video.github.io/Phantom/)
:::

## 学习笔记

### 核心贡献
- 提出 Subject-to-Video 任务形式化定义：从参考图像中提取主体元素，根据文本指令生成主体一致的视频，强调文本与图像双模态提示的深层对齐。
- 提出 Phantom，统一的单/多主体参考视频生成框架，在现有 T2V 和 I2V 架构上重新设计联合文本-图像注入模型。

### 方法细节
- **跨模态对齐注入**：重新设计文本-图像联合注入模型，利用文本-图像-视频三元组数据驱动模型学习跨模态对齐，使文本和视觉条件深度协同。
- 通过双模态提示的平衡设计，解决了图像内容泄漏（image content leakage）和多主体混淆（multi-subject confusion）问题。
- 统一支持单主体与多主体参考，无需为不同输入模式分别设计架构。

### 关键发现
- 在多主体引用场景下，Phantom 有效避免了主体间属性混淆和视觉泄漏，生成结果优于闭源商业方案。
- 强调主体一致性评估中的人物生成场景，在 ID 保持视频生成任务上同时获得更优的保真度与可控性。

### 方法归类
- **范式**: 基于扩散模型的双模态条件视频生成
- **关键技术**: 跨模态对齐注入、文本-图像-视频三元组训练、联合注入模型设计
- **适用场景**: 主体一致的视频生成、品牌角色动画、多角色场景视频合成、ID 保持视频创作
