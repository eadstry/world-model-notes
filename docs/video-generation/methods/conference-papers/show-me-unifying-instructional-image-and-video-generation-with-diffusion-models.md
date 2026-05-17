---
title: "Show Me: Unifying Instructional Image and Video Generation with Diffusion Models"
arxiv: https://arxiv.org/abs/2511.17839v1
github: https://github.com/yujiangpu20/ShowMe-master
website: https://yujiangpu20.github.io/showme/
venue: WACV
year: 2026
---

# Show Me: Unifying Instructional Image and Video Generation with Diffusion Models

::: info 论文信息
- **Venue**: WACV (2026)
- **arXiv**: [https://arxiv.org/abs/2511.17839v1](https://arxiv.org/abs/2511.17839v1)
- **GitHub**: [https://github.com/yujiangpu20/ShowMe-master](https://github.com/yujiangpu20/ShowMe-master)
- **Website**: [https://yujiangpu20.github.io/showme/](https://yujiangpu20.github.io/showme/)
:::

## 学习笔记

### 核心贡献
- 提出 ShowMe 统一框架，将指令式图像生成（文本引导图像编辑）和指令式视频生成（视频预测）两个传统分离的任务整合到单一视频扩散模型中
- 引入结构一致性和运动一致性奖励（structure & motion consistency rewards），提升生成结果的几何保真度和时序连贯性

### 方法细节
- 通过选择性激活视频扩散模型的空间模块或时序模块来控制当前任务模式：仅空间模块激活时处理图像编辑，双模块激活时处理视频预测
- 图像编辑任务利用视频预训练获得的空间知识增强非刚性编辑的真实感；视频预测任务利用指令引导提供更强的目标导向推理能力
- 统一的 action-object state transformer 架构，将指令（action）映射到图像/视频（object state）的变化过程

### 关键发现
- 视频扩散模型的统一训练带来双向收益：图像编辑从视频数据中学到更好的上下文一致性与变形合理性；视频预测从指令编辑中学到更强的目标导向推理
- 在多个基准上，统一架构在两项任务上均超越各自领域的专家模型

### 方法归类
- **范式**: 基于视频扩散模型的指令式图像与视频生成统一框架
- **关键技术**: 空间/时序模块选择性激活、结构&运动一致性奖励、统一 action-object state transformer
- **适用场景**: 需要同时支持文本引导图像编辑与目标导向视频预测的交互式世界模拟器
