---
title: "Character Mixing for Video Generation"
arxiv: https://arxiv.org/abs/2510.05093v1
github: https://github.com/TingtingLiao/mimix
venue: arXiv
year: 2025
---

# Character Mixing for Video Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2510.05093v1](https://arxiv.org/abs/2510.05093v1)
- **GitHub**: [https://github.com/TingtingLiao/mimix](https://github.com/TingtingLiao/mimix)
:::

## 学习笔记

### 核心贡献
- 首次系统性研究 T2V 生成中多个角色的外观一致性与交互行为建模问题
- 提出 Cross-Character Embedding（CCE），从多模态数据（文本、参考图像等）中学习角色的身份标识与行为逻辑
- 提出 Cross-Character Augmentation（CCA），通过合成角色共现样本与混合风格训练，解决角色风格错乱（style delusion）——即真人角色被渲染为卡通风格或反之
- 构建包含 10 个角色（覆盖卡通与真人域）的多角色视频生成基准评测集
- 开源完整代码（Mimix 框架）与模型权重，代码仓库位于 GitHub

### 方法细节
- **CCE 模块**：为每个角色编码一个身份嵌入向量，该向量不仅捕获外观特征（面部、服装、体型），还编码行为先验（典型动作、运动模式），嵌入注入扩散去噪过程以引导角色生成
- **CCA 数据增强**：通过合成策略生成多角色共现的训练帧，并引入混合风格训练（mixed-style training）——在同一批次中混合不同视觉风格的样本，强制模型在风格歧义条件下保持角色一致性
- **Style Delusion 问题**：当单个 prompt 中包含风格冲突的角色描述时，扩散模型倾向于将全局风格分配给所有角色；CCA 通过增加风格混合训练数据对此进行对抗性缓解
- **推理流程**：用户通过文本描述或上传参考图像指定各角色，系统提取 CCE 嵌入后注入视频扩散模型（基于主流 T2V 架构），在去噪过程中引导各角色的独立生成与交互
- **评估体系**：从角色身份保持（identity preservation）、交互自然度（interaction naturalness）、风格保真度（style fidelity）三个维度进行定量与人工评估

### 关键发现
- CCE + CCA 的组合在多角色身份保持和交互质量上显著优于直接将角色描述拼接进 prompt 的 baseline
- Style delusion 是多角色视频生成的核心失败模式，CCA 通过风格混合训练有效缓解此问题
- 角色身份保持与交互自然性之间存在一定的 trade-off，需要精细的嵌入注入强度与时间步调度策略

### 方法归类
- **范式**: 扩散模型 + 角色条件嵌入
- **关键技术**: 多模态角色编码（CCE）、合成数据增强（CCA）、混合风格训练
- **适用场景**: 多角色交互视频生成、角色一致性保持、动漫/影视角色动画制作
