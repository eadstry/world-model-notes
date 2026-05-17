---
title: "Pyramid Flow: Pyramidal Flow Matching for Efficient Video Generative Modeling"
arxiv: https://arxiv.org/abs/2410.05954
github: https://github.com/jy0205/Pyramid-Flow
website: https://pyramid-flow.github.io/
venue: ICLR 2025
year: 2025
---

# Pyramid Flow: Pyramidal Flow Matching for Efficient Video Generative Modeling

::: info 论文信息
- **Venue**: ICLR 2025
- **arXiv**: [https://arxiv.org/abs/2410.05954](https://arxiv.org/abs/2410.05954)
- **GitHub**: [https://github.com/jy0205/Pyramid-Flow](https://github.com/jy0205/Pyramid-Flow)
- **Website**: [https://pyramid-flow.github.io/](https://pyramid-flow.github.io/)
- **作者**: Yang Jin, Zhicheng Sun, Ningyuan Li, Kun Xu, Hao Jiang, Nan Zhuang, Quzhe Huang, Yang Song, Yadong Mu, Zhouchen Lin (北大/快手)
:::

## 学习笔记

### 核心贡献

- 提出 **Pyramidal Flow Matching**：统一端到端视频生成框架，将 cascaded 架构各阶段统一为单个 DiT
- 将扩散去噪轨迹重新解释为**金字塔阶段 (pyramid stages)**，仅最后阶段在全分辨率运行
- 仅需 **20.7k A100 GPU 小时**训练出 5秒 768p 24FPS 高质量视频生成模型
- 全开源：代码 + 模型权重 + 训练流程

### 方法细节

**1. Pyramidal Flow 设计**
- 传统 cascaded：多个独立子模型分别处理低→高分辨率，缺乏知识共享
- Pyramid Flow：不同分辨率阶段统一到单个 DiT，共享参数
  - 早期阶段：低分辨率去噪（计算便宜）
  - 后期阶段：高分辨率去噪（有良好初始化）
- 金字塔各阶段通过精心设计相互连接，保持去噪轨迹连续性

**2. Temporal Pyramid 用于 AR 视频生成**
- 生成长视频时，历史帧用**低分辨率表示**（压缩全分辨率历史）
- 当前帧在全分辨率生成 → "时间金字塔"：历史低分辨率 + 当前高分辨率

**3. 端到端训练**
- 整个框架在单个统一 DiT 中端到端优化
- 使用 Flow Matching (FM) 提供更直接的噪声→数据映射路径

### 代码分析

**开源仓库** (`github.com/jy0205/Pyramid-Flow`):
基于 DiT 架构 + Flow Matching 训练目标。核心模块：`pyramid_scheduler` 管理不同 pyramid stage 的分辨率和噪声水平。支持 T2V 和 I2V，~2B 参数。

```
pyramid_flow/
├── models/dit.py          # 统一 DiT，支持多分辨率输入
├── schedulers/pyramid_fm.py  # Pyramid Flow Matching 调度器
└── pipelines/pipeline.py     # T2V / I2V 推理 pipeline
```

**关键设计**：不同 pyramid stage 使用相同的 DiT 参数但不同分辨率输入，通过分辨率嵌入 (resolution embedding) 区分阶段。

### 关键发现

- 金字塔设计使不同分辨率阶段共享 DiT 参数，知识共享大幅提升训练效率
- 仅需 cascaded 方法 1/3~1/5 的训练计算量即达同等或更优质量
- 支持 5-10 秒视频，768p，24 FPS
- AR 扩展时时间金字塔有效压缩历史信息，保持一致性
- 开源模型在 VBench 取得 competitive 结果

### 方法归类

AR Diffusion（原生预训练） — 高效视频生成模型，兼具 AR 灵活性和 flow matching 高效性

### 交叉引用

| 方法 | 关系 |
|------|------|
| **Diffusion Forcing** | 共享 AR + Diffusion 思想，Pyramid Flow 侧重计算效率 |
| **CausVid** | CausVid 蒸馏双向→AR，Pyramid Flow 原生 AR 训练 |
| **Rolling Forcing** | 都关注长视频 AR 效率，Rolling Forcing 侧重实时性 |
| **Helios / LongLive** | 都追求高效训练推理，各有侧重 |

---

*综述归类来源：Awesome-Video-World-Models-with-AR-Diffusion §1.1*
