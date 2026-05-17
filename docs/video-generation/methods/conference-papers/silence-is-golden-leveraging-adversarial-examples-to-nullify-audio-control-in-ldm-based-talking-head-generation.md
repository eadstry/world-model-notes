---
title: "Silence is Golden: Leveraging Adversarial Examples to Nullify Audio Control in LDM-based Talking-Head Generation"
arxiv: https://arxiv.org/abs/2506.01591v1
github: https://github.com/yuangan/Silencer
venue: CVPR
year: 2025
---

# Silence is Golden: Leveraging Adversarial Examples to Nullify Audio Control in LDM-based Talking-Head Generation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2506.01591v1](https://arxiv.org/abs/2506.01591v1)
- **GitHub**: [https://github.com/yuangan/Silencer](https://github.com/yuangan/Silencer)
:::

## 学习笔记

### 核心贡献
- 提出 Silencer，一种面向 LDM 驱动的 talking-head 生成的两阶段主动防御方法，通过在肖像上施加对抗性扰动来消除音频条件对生成的控制
- 设计 nullifying loss 使音频条件信息在 LDM 的 cross-attention 层中被忽略，同时提出 anti-purification loss 优化潜空间特征，抵御扩散模型的去噪净化攻击

### 方法细节
- 第一阶段：在 portrait 图像上优化可微扰动，使 LDM 在生成过程中无法从音频嵌入中提取有效控制信号，从而实现音频无关的生成
- 第二阶段：将扰动投影到 LDM 的潜空间并施加 anti-purification loss，使其能够抵抗扩散模型的净化操作，增强扰动的鲁棒性

### 关键发现
- 现有针对 LDM 的主动防御方法（如 Photoguard）在 image-to-video 场景下失效，原因是它们无法阻止音频信号的操纵且易被扩散净化去除
- Silencer 生成的扰动在多种 talking-head 模型上具有跨模型迁移性，且对下游净化攻击具有显著鲁棒性

### 方法归类
- **范式**: 主动防御 / 对抗性攻击
- **关键技术**: Nullifying loss、Anti-purification loss、LDM latent inversion
- **适用场景**: 肖像隐私保护、深度伪造防御、AI 安全中针对 talking-head 生成的反制
