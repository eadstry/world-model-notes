---
title: "Long Context Tuning for Video Generation"
arxiv: https://arxiv.org/abs/2503.10589
website: https://guoyww.github.io/projects/long-context-video/
venue: ICCV
year: 2025
---

# Long Context Tuning for Video Generation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.10589](https://arxiv.org/abs/2503.10589)
- **Website**: [https://guoyww.github.io/projects/long-context-video/](https://guoyww.github.io/projects/long-context-video/)
:::

## 学习笔记

### 核心贡献
- 提出 Long Context Tuning (LCT)，一种将预训练单镜头视频扩散模型的上下文窗口从单镜头扩展到多镜头场景的训练范式，无需额外参数即可实现联合与自回归式多镜头生成
- 通过 interleaved 3D position embedding 和异步噪声策略，使模型能够直接建模镜头间的视觉与动态一致性
- 在 LCT 后的双向注意力模型上进一步微调为 context-causal attention，支持基于 KV-cache 的高效自回归生成

### 方法细节
- 将预训练单镜头 DiT 的 full attention 机制从单个镜头扩展至场景内所有镜头，实现跨镜头的全局注意力建模
- 引入 interleaved 3D position embedding，为不同镜头内的帧提供可区分的位置编码，保持镜头间的时序关系
- 采用异步噪声策略（asynchronous noise strategy），在训练时对不同镜头施加不同噪声强度，支持联合去噪与自回归生成两种模式
- LCT 后对双向注意力模型进行 context-causal attention 微调，使推理时可复用 KV-cache 加速自回归生成

### 关键发现
- 单镜头模型经 LCT 后能够生成具有场景一致性的连贯多镜头视频，无需对每个镜头独立采样
- LCT 带来了涌现能力，包括组合式生成（compositional generation）和交互式镜头扩展（interactive shot extension）

### 方法归类
- **范式**: 通过扩展上下文窗口将预训练单镜头视频扩散模型适配为多镜头场景生成模型
- **关键技术**: Full attention across shots、Interleaved 3D position embedding、Asynchronous noise strategy、Context-causal attention fine-tuning、KV-cache 推理加速
- **适用场景**: 叙事性多镜头视频生成、交互式视频内容创作、需要跨镜头保持视觉一致性的长视频制作
