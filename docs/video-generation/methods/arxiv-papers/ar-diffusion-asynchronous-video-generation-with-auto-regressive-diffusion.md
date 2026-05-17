---
title: "AR-Diffusion: Asynchronous Video Generation with Auto-Regressive Diffusion"
arxiv: https://arxiv.org/abs/2503.07418
github: https://github.com/iva-mzsun/AR-Diffusion
venue: CVPR 2025
year: 2025
---

# AR-Diffusion: Asynchronous Video Generation with Auto-Regressive Diffusion

::: info 论文信息
- **Venue**: CVPR 2025
- **arXiv**: [https://arxiv.org/abs/2503.07418](https://arxiv.org/abs/2503.07418)
- **GitHub**: [https://github.com/iva-mzsun/AR-Diffusion](https://github.com/iva-mzsun/AR-Diffusion)
- **作者**: Mingzhen Sun, Weining Wang, Gen Li, Jiawei Liu, Jiahui Sun, Wanquan Feng, Shanshan Lao, SiYu Zhou, Qian He, Jing Liu
:::

## 学习笔记

### 核心贡献

- 提出 **AR-Diffusion**：结合自回归模型和扩散模型的优势，实现**异步视频生成**
- 核心创新：**非递减噪声约束 (non-decreasing constraint)**——确保较早帧比后续帧更清晰
- 解决异步 AR 模型的 training-inference 不一致问题（error accumulation）和同步扩散模型的固定序列长度限制
- 设计两种专用 timestep scheduler：**FoPP** (训练用) 和 **AD** (推理用)，支持同步和异步生成

### 方法细节

**1. 异步 AR 扩散框架**
- 每帧独立的 timestep，通过扩散逐步加噪
- **非递减约束**：$t_1 \leq t_2 \leq ... \leq t_N$，确保较早帧噪声小（更清晰）
- 配合 **temporal causal attention**：帧 $i$ 只能 attend 帧 $1..i$

**2. FoPP Scheduler (训练)**
- **Frequency of Per-Position** scheduler
- 平衡各帧的 timestep 采样分布，确保每帧在训练中得到充分的各个噪声水平

**3. AD Scheduler (推理)**
- **Asynchronous Diffusion** scheduler
- 支持灵活的帧间 timestep 差异，可配置同步或异步模式
- 同步模式：所有帧共享 timestep → 类似标准扩散
- 异步模式：帧间 timestep 不同 → AR 风格逐帧生成

**4. Training-Inference 一致性**
- 训练和推理都使用扩散逐步加噪/去噪 → 消除 AR 模型中的 exposure bias

### 代码分析

**开源仓库** (`github.com/iva-mzsun/AR-Diffusion`):

```python
# 非递减 timestep 约束
timesteps = sorted(timesteps)  # 确保 t1 <= t2 <= ... <= tN

# FoPP Scheduler：平衡各位置采样
# 确保每帧有均等机会被采样到各种噪声水平

# AD Scheduler：推理时灵活的异步调度
# 支持逐帧不同的去噪步数
```

**关键实现**：
- 基于 Video DiT 架构 + causal attention mask
- Per-frame noise scheduling：每帧独立的噪声参数
- 灵活的推理模式切换（同步/异步）
- 开源代码包含完整的训练和推理 pipeline

### 关键发现

- 非递减约束是核心——没有它，较早帧可能比后续帧噪声更大，破坏因果性
- AR-Diffusion 在 4 个 benchmark（UCF-101, KITTI, BAIR Robot Pushing, Something-Something V2）上取得 SOTA
- 异步模式支持变长视频生成，不受固定序列长度限制
- FoPP scheduler 对训练稳定性至关重要
- 相比纯 AR 模型，error accumulation 显著减少

### 方法归类

AR Diffusion（原生预训练） — 异步生成，平衡 AR 灵活性和扩散质量

### 交叉引用

| 方法 | 关系 |
|------|------|
| **Diffusion Forcing** | 共享 AR + Diffusion + causal 思想，实现机制不同（DF 用 per-token noise level，AR-Diff 用 timestep 约束） |
| **PFVG** | 都关注长视频一致性和 training-inference gap |
| **BAgger** | 都解决 AR 视频扩散中的漂移问题，方案不同 |

---

*综述归类来源：Awesome-Video-World-Models-with-AR-Diffusion §1.1*
