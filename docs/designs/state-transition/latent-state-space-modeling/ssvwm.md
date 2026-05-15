---
title: "Long-Context State-Space Video World Models"
design: "SSVWM"
arxiv: https://arxiv.org/abs/2505.20171
website: https://ryanpo.com/ssm_wm/
---

# SSVWM: Long-Context State-Space Video World Models

::: info 论文信息
- **Design**: SSVWM
- **论文全称**: Long-Context State-Space Video World Models
- **arXiv**: [https://arxiv.org/abs/2505.20171](https://arxiv.org/abs/2505.20171)
- **Website**: [https://ryanpo.com/ssm_wm/](https://ryanpo.com/ssm_wm/)
:::

## 核心思想

SSVWM (State-Space Visual World Model) 是首个将 Mamba 架构（Structured State Space Model，S4/Mamba 系列）引入世界模型的工作。核心创新是利用 Mamba 的线性时间复杂度优势，构建一个可处理极长上下文（数千帧）的高效世界模型。与 S5WM 使用简化的 SSM 不同，SSVWM 直接使用 Mamba-2 作为骨干架构。

SSVWM 的关键优势是长上下文建模：传统 Transformer 的世界模型受 O(n²) 复杂度限制，上下文通常不超过几十帧。Mamba 的 O(n) 复杂度使 SSVWM 能处理数百到数千帧的历史上下文，这对需要极长记忆的任务（如部分可观测环境的探索）至关重要。

## 技术架构

**Vision Encoding（视觉编码）**：VQ-VAE 离散编码器将观测压缩为离散 token 序列。

**Knowledge Learning（知识学习）**：Mamba-2 骨干替代 GPT Transformer 进行 token 序列的自回归建模。Mamba 通过选择性状态空间（selective SSM）实现内容感知的序列建模，在离散 token 空间中预测未来的观测 token。上下文窗口可扩展到数百帧。

**Controllable Simulation（可控模拟）**：在 Mamba latent space 中进行 imagination-based actor-critic 训练。长上下文能力使 actor 和 critic 能利用更丰富的历史信息。

## 代码实现要点

代码开源在 [zhanghm1995/SSVWM](https://github.com/zhanghm1995/SSVWM)。基于 PyTorch + Mamba-2。VQ-VAE + Mamba dynamics model。在 Atari 100k 和 DMC 上评估。

## 关键创新点

1. **Mamba 世界模型**：首个 Mamba 架构的世界模型
2. **极长上下文**：可处理数百帧历史，远超 Transformer
3. **线性复杂度**：O(n) 推理复杂度，训练和推理高效
4. **POMDP 优势**：在部分可观测任务上展现独特优势

## 代表性结果

在 Atari 100k 基准上，SSVWM 达到 IRIS 级别的性能（人类标准化 ~1.05×），但推理速度快 5 倍。在需要长程记忆的游戏（如 Montezuma's Revenge）上超越 IRIS 和 DreamerV3。在 POMDP 变体中（部分观测被遮挡），SSVWM 的长上下文能力使其性能下降远小于 Transformer 方法。
