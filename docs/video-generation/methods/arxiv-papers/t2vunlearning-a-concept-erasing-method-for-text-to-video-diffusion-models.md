---
title: "T2VUnlearning：基于遗忘的文本到视频扩散模型概念擦除方法"
source: "arxiv"
arxiv_id: "2505.17550"
tags: ["concept-erasing","unlearning","text-to-video","diffusion-models","safety"]
status: "已读"
---
## 学习笔记

### 核心贡献

1. **首个 T2V Unlearning 方法**：首次将遗忘式概念擦除从 T2I 扩展到 T2V 领域，对 CogVideoX-2B/5B 和 HunyuanVideo 均有效。
2. **负向引导速度预测 + Prompt 增强**：将 T2I 的 ESD 中的负向引导适配到 T2V 的速度预测范式，并通过未审查 LLaMA3 增强生成伪数据的 prompt，提升对 LLM 改写 prompt 的鲁棒性。
3. **掩码定位正则化**：利用 DiT 全注意力层中 text-to-video 区域的 QK 图提取概念相关注意力掩码，约束 adapter 仅在目标概念区域生效，避免上下文知识的意外遗忘。
4. **概念保留正则化**：受 DreamBooth 启发，引入语义相近的保留概念 $c^{\text{pre}}$ 防止灾难性遗忘，显著保持非目标概念的生成能力。
5. **全面实验验证**：在 nudity、ImageNet 物体、人脸三大场景下显著优于 SAFREE、NegPrompt 以及迁移的 T2I unlearning 方法。

### 方法细节

- **速度预测统一框架**：HunyuanVideo 使用 Rectified Flow（$v$ 预测），CogVideoX 使用 v-prediction。通过 Tweedie 公式可在速度和 score 之间等价转换，将 ESD 的 score 域推导推广到速度域：

$$\mathbf{v}_{neg} = \mathbf{v}_{\theta}(\mathbf{x}_t, t) - \eta \left( \mathbf{v}_{\theta}(\mathbf{x}_t, c, t) - \mathbf{v}_{\theta}(\mathbf{x}_t, t) \right)$$

$$\mathcal{L}_{unlearn} = \mathbb{E} \left\| \mathbf{v}_{neg} - \mathbf{v}_{\theta'}(\mathbf{x}_t, c, t) \right\|_2^2$$

- **Prompt 增强**：使用未审查 LLaMA3 对目标概念 prompt 添加上下文/细节，使伪训练数据分布覆盖 LLM 改写后的复杂 prompt，避免训练-测试分布偏移。
- **掩码定位正则化**：从全注意力层的 text→visual QK map 中提取概念激活区域，计算二值掩码 $M$，约束 adapter 输出仅在 $M$ 内生效：

$$\mathcal{L}_{loc} = \frac{1}{L} \sum_{l=1}^{L} \left\| o^l \odot (1 - M) \right\|_2^2$$

- **概念保留正则化**：对 HunyuanVideo 额外引入保留概念 $c^{\text{pre}}$（如 nudity 擦除时选 "person"），要求 unlearned 模型在 $c^{\text{pre}}$ 上的输出与原始模型一致：

$$\mathcal{L}_{pre} = \mathbb{E} \left\| \mathbf{v}_{\theta'}(\mathbf{x}_t^{pre}, c^{pre}, t) - \mathbf{v}_{\theta}(\mathbf{x}_t^{pre}, c^{pre}, t) \right\|_2^2$$

- **整体目标**：$\mathcal{L} = \mathcal{L}_{unlearn} + \alpha \mathcal{L}_{loc} + \beta \mathcal{L}_{pre}$
- Adapter-based 微调，inner dim=128，学习率 $1\times 10^{-4}$，500 epochs，bf16。CogVideoX 上 $\alpha=1.0, \beta=0.0$；HunyuanVideo 上 $\alpha=\beta=5.0$。

### 关键发现

- **Nudity 擦除**：HunyuanVideo 上 Nudity Rate 从 78.08% 降至 12.73%（Gen 数据集），Object Class 从 88.57 降至 87.00（几乎无损）。
- **对比优势**：SAFREE 降到 48.37%，NegPrompt 降到 55.35%，T2I unlearning（ESD/Receler）在 T2V 效果大幅下降。
- **ImageNet 物体擦除**：ESR-1 达 92.38%，ESR-5 达 77.09%，远优于基线（SAFREE ESR-1=61.65%）。用户调研中超过 80% 选择 T2VUnlearning。
- **人脸擦除**：目标人脸的 ID-Similarity 显著降低（如 Obama 从 0.4362→0.1074），非目标人脸大部分保持。
- **消融实验**：去除 prompt 增强导致 Nudity Rate 从 12.73% 升至 50.69%；去除 $\mathcal{L}_{loc}$ 虽降低 Nudity Rate 但损害生成质量；去除 $\mathcal{L}_{pre}$ 导致 Object Class 从 87.00 降至 68.37。
- **η 参数**：nudity 场景 η=3.0，face η=5.0，CogVideoX 统一 η=7.0。η 越高擦除越强但会损害非目标概念。

### 方法归类

- **类型**：Unlearning-based Concept Erasing（遗忘式概念擦除）
- **范式**：Fine-tuning（Adapter-based），非训练自由的 prompt manipulation
- **适用架构**：DiT-based T2V（CogVideoX, HunyuanVideo），不依赖 cross-attention
- **相关方法**：ESD（T2I 遗忘）、Receler（掩码定位）、SAFREE（prompt 操纵）、DreamBooth（保留正则化）
