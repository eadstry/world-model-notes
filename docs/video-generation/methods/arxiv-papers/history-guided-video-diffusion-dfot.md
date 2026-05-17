---
title: "DFoT: History-Guided Video Diffusion"
arxiv: https://arxiv.org/abs/2502.06764
github: https://github.com/kwsong0113/diffusion-forcing-transformer
website: https://boyuan.space/history-guidance/
venue: ICML 2025
year: 2025
---

# DFoT: History-Guided Video Diffusion

::: info 论文信息
- **Venue**: ICML 2025
- **arXiv**: [https://arxiv.org/abs/2502.06764](https://arxiv.org/abs/2502.06764)
- **GitHub**: [https://github.com/kwsong0113/diffusion-forcing-transformer](https://github.com/kwsong0113/diffusion-forcing-transformer)
- **Website**: [https://boyuan.space/history-guidance](https://boyuan.space/history-guidance)
- **作者**: Kiwhan Song, Boyuan Chen, Max Simchowitz, Yilun Du, Russ Tedrake, Vincent Sitzmann (MIT)
:::

## 学习笔记

### 核心贡献

- 提出 **Diffusion Forcing Transformer (DFoT)**：Diffusion Forcing + Video DiT，支持灵活数量历史帧条件生成
- 提出 **History Guidance** 方法族：CFG 在"历史条件"维度上的扩展
  - **Vanilla History Guidance**：简单形式，显著提升生成质量和时序一致性
  - **Time-Frequency History Guidance**：增强 motion dynamics
- 发现传统 CFG-style history dropout 在可变长度历史上表现不佳，DFoT 从架构和训练目标上系统性解决

### 方法细节

**1. DFoT 架构**
- Video DiT + Diffusion Forcing 范式 + causal attention
- 支持任意数量历史帧作为条件
- 历史帧和待生成帧使用独立 per-token 噪声水平

**2. History Guidance**
- 类似 CFG 的 conditional/unconditional 对比，但作用在"历史条件"维度：
  $$\epsilon_\text{guided} = \epsilon_\text{uncond} + w \cdot (\epsilon_\text{cond} - \epsilon_\text{uncond})$$
  - unconditional = "无历史"或"高度噪声历史"，conditional = "清晰历史"
- **Vanilla**：无历史 vs 有历史对比
- **Time-Frequency**：在时间和频率维度分别 guidance，增强动态

**3. 长视频展开**
- 可稳定展开极长视频（远超训练长度）
- 组合泛化：泛化到训练分布外的历史条件

### 代码分析

**开源仓库** (`github.com/kwsong0113/diffusion-forcing-transformer`):
基于 Diffusion Forcing 代码库扩展，增加 Video DiT backbone。History dropout 策略是关键：训练时随机丢弃/加噪历史帧，使模型学会从各种质量的历史条件生成。

```python
# History Guidance 采样核心
def history_guided_sampling(model, prompt, history_frames, guidance_scale):
    cond_pred = model(noisy_frames, clean_history, prompt, t)
    uncond_pred = model(noisy_frames, noisy_history, prompt, t)
    return uncond_pred + guidance_scale * (cond_pred - uncond_pred)
```

### 关键发现

- History Guidance 作为推理时技术，不增加训练成本即大幅提升质量
- Vanilla History Guidance 显著提升视频质量和时序一致性
- Time-Frequency History Guidance 进一步提升运动动态真实感
- 可与 CFG 叠加使用，效果互补
- 分钟级视频稳定展开，不发散

### 方法归类

AR Diffusion（原生预训练） + 推理时对齐（Guidance）

### 交叉引用

| 方法 | 关系 |
|------|------|
| **Diffusion Forcing** | DFoT = DF + Video DiT |
| **Causal Forcing** | 都可在推理时使用 History Guidance |
| **CFG (Classifier-Free Guidance)** | History Guidance 是 CFG 在"历史条件"维度上的扩展 |

---

*综述归类来源：Awesome-Video-World-Models-with-AR-Diffusion §1.1; CyL97 Awesome-Video-Generation-Post-Training*
