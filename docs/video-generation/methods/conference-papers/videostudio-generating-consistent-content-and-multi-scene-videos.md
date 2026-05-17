---
title: "VideoStudio: Generating Consistent-Content and Multi-Scene Videos"
arxiv: https://arxiv.org/abs/2401.01256
github: https://github.com/FuchenUSTC/VideoStudio
website: https://vidstudio.github.io/
venue: ECCV
year: 2024
---

# VideoStudio: Generating Consistent-Content and Multi-Scene Videos

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2401.01256](https://arxiv.org/abs/2401.01256)
- **GitHub**: [https://github.com/FuchenUSTC/VideoStudio](https://github.com/FuchenUSTC/VideoStudio)
- **Website**: [https://vidstudio.github.io/](https://vidstudio.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 VideoStudio 框架，首次在多场景视频生成中同时保证前后景内容的一致性和场景间逻辑的连贯性
- 利用大语言模型（LLM）将输入提示自动扩展为包含事件描述、前景/背景实体和镜头运动的多场景脚本

### 方法细节
- 通过 LLM 识别脚本中跨场景的共同实体并为每个实体生成详细描述，再经文本到图像模型生成参考图像
- 扩散模型以参考图像作为条件和对齐信号，与事件描述和镜头运动提示共同控制每个场景片段的生成过程

### 关键发现
- 引入 LLM 作为脚本文本生成模块能有效利用其内置的逻辑知识来规划多场景叙事结构
- 跨场景的实体参考图像是维持视觉一致性的关键；相比仅依赖文本条件，显式参考图像能显著提升前后景在不同场景中的外观稳定性

### 方法归类
- **范式**: Multi-Scene Video Generation + LLM Planning
- **关键技术**: LLM 脚本生成, 实体参考图像条件, 扩散模型跨场景对齐
- **适用场景**: 叙事性多场景视频生成，如微电影、商品展示、故事情节可视化
