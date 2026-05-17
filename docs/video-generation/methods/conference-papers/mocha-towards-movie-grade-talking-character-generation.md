---
title: "MoCha: Towards Movie-Grade Talking Character Generation"
arxiv: https://arxiv.org/abs/2503.23307
github: https://github.com/congwei1230/MoCha-Demo
website: https://congwei1230.github.io/MoCha/
venue: NeurIPS
year: 2025
---

# MoCha: Towards Movie-Grade Talking Character Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2503.23307](https://arxiv.org/abs/2503.23307)
- **GitHub**: [https://github.com/congwei1230/MoCha-Demo](https://github.com/congwei1230/MoCha-Demo)
- **Website**: [https://congwei1230.github.io/MoCha/](https://congwei1230.github.io/MoCha/)
:::

## 学习笔记

### 核心贡献
- 提出 "Talking Characters" 任务——根据语音和文本生成人物全身像动画，超越传统 talking head 的面部区域限制
- MoCha 是首个实现多角色轮对话（turn-based dialogue）的说话角色生成模型，具备电影级叙事连贯性

### 方法细节
- 设计语音-视频窗口注意力机制，有效对齐语音 token 与视频 token，实现精确的音画同步
- 提出联合训练策略，同时利用语音标注和文本标注视频数据，缓解大规模语音标注视频数据匮乏问题
- 构建结构化提示模板 + 角色标签，首次支持 AI 角色间的上下文感知对话生成

### 关键发现
- 联合训练策略显著提升了模型在不同角色动作上的泛化能力
- 人类偏好评估和基准对比表明，MoCha 在真实感、表现力、可控性和泛化性四个维度均达到新标杆

### 方法归类
- **范式**: 扩散模型 + 多模态条件控制
- **关键技术**: 语音-视频交叉注意力、联合训练（语音+文本标注）、结构化角色提示
- **适用场景**: 电影级动画生成、角色驱动故事叙述、AI 虚拟角色交互

