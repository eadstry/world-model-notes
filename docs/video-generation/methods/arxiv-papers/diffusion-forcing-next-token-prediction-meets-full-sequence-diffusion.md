---
title: "Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion"
arxiv: https://arxiv.org/abs/2407.01392
github: https://github.com/buoyancy99/diffusion-forcing
website: https://boyuan.space/diffusion-forcing
venue: NeurIPS 2024 (Spotlight)
year: 2024
---

# Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion

::: info 论文信息
- **Venue**: NeurIPS 2024 (Spotlight)
- **arXiv**: [https://arxiv.org/abs/2407.01392](https://arxiv.org/abs/2407.01392)
- **GitHub**: [https://github.com/buoyancy99/diffusion-forcing](https://github.com/buoyancy99/diffusion-forcing)
- **Website**: [https://boyuan.space/diffusion-forcing](https://boyuan.space/diffusion-forcing)
- **作者**: Boyuan Chen, Diego Marti Monso, Yilun Du, Max Simchowitz, Russ Tedrake, Vincent Sitzmann (MIT)
:::

## 学习笔记

### 核心贡献

- **提出 Diffusion Forcing (DF)**：一种全新的序列生成训练范式，将 next-token prediction 与 full-sequence diffusion 统一在同一框架下
- 核心创新：**独立每 token 噪声水平 (independent per-token noise levels)**——每个 token 可以有不同程度的加噪/去噪
- 训练时使用因果架构（causal attention），使模型学会从部分加噪的历史中预测/去噪未来 token
- **理论保证**：证明了 DF 优化了真实联合分布上所有子序列似然的变分下界 (variational lower bound)

### 方法细节

**1. 独立 per-token 噪声调度**
- 传统扩散：所有帧使用相同的噪声水平 $t$
- DF：每帧有独立的噪声水平 $k_t$，较早帧可保持较清晰（低噪声），较晚帧可被完全加噪
- 这使得模型可以在"部分已知历史"条件下进行灵活的条件生成

**2. 训练过程**
- 随机采样不同长度的序列和不同的 per-token 噪声水平
- 使用 causal attention mask，确保帧 $i$ 只能看到帧 $1...i$
- 训练目标：给定不同噪声水平的历史帧，去噪未来帧

**3. 推理能力**
- **变长生成**：类似 next-token prediction，逐帧 AR 生成任意长度序列
- **引导采样 (Guidance)**：利用 full-sequence diffusion 的特性进行 guided sampling
- **滚动展开 (Rollout)**：稳定生成远超训练时长的序列

**4. 应用**
- 视频生成、决策与规划 (Decision Making / Planning)、世界模型

### 代码分析

**开源仓库** (`github.com/buoyancy99/diffusion-forcing`):

```python
# 核心：per-token noise
noisy_tokens = tokens * alpha[noise_levels] + noise * sigma[noise_levels]
# noise_levels: shape (batch, seq_len)

# Causal masking
attention_mask = torch.tril(torch.ones(seq_len, seq_len))
```

**关键实现细节**：
- 基于 Video DiT 架构 + causal attention
- 连续时间扩散公式，支持灵活 per-token scheduling
- Causal mask 实现并行训练（teacher forcing），同时保证推理时 AR 一致性
- 支持视频、状态序列、机器人轨迹等多模态

### 关键发现

- DF 是首个统一 next-token prediction 灵活性和 full-sequence diffusion 引导能力的方法
- 纯 AR 在长序列上发散，DF 不散发——因为训练时见过部分噪声历史
- 全序列扩散受固定长度限制，DF 支持变长生成
- Guided sampling 在决策任务上显著提升
- 为后续 **DFoT**、**Causal Forcing**、**Self Forcing**、**Rolling Forcing** 等 Forcing 系列奠定基础

### 方法归类

AR Diffusion（原生预训练） — 序列生成新范式，属于 Forcing 方法族基础工作

### 交叉引用

| 方法 | 关系 |
|------|------|
| **DFoT** | DF + Video DiT = DFoT；在此基础上引入 History Guidance |
| **Causal Forcing** | 将 DF 预训练模型蒸馏为 few-step AR 实时生成器 |
| **Self Forcing** | 解决 DF 训练的 train-test gap |
| **Resampling Forcing** | 端到端训练 AR 视频扩散，类似 DF 的 self-resampling |
| **AR-Diffusion** | 异步 AR 扩散，共享 AR+Diffusion 思想但机制不同 |
| **PFVG** | MemoryPack + Direct Forcing，继承 DF 的 forcing 思想 |

---

*综述归类来源：Awesome-Video-World-Models-with-AR-Diffusion §1.1; CyL97 Awesome-Video-Generation-Post-Training*
