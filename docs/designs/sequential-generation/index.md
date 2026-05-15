---
title: "Sequential Generation — 自回归序列生成"
---

# Sequential Generation — 自回归序列生成

::: tip 核心范式
Sequential Generation 是 VWM 中最自然也是最古老的架构范式。它的核心思想直截了当：**将世界建模为一个序列生成问题**，使用自回归模型逐帧（或逐 token）预测未来。数学上可以表示为 $p(x_{t+1:T} | x_{0:t}, c_t) = \prod_{i=t}^{T-1} p(x_{i+1} | x_{0:i}, c_t)$，其中 $x_i$ 可以是像素级帧、离散视觉 token、或嵌入表示。
:::

## 范式本质与历史脉络

自回归世界模型的本质是**将时序预测问题转化为条件概率分解问题**。这种思路天然继承了语言模型（GPT 系列）和图像生成模型（ImageGPT、VQGAN）的成功经验。在视觉世界模型语境下，Sequential Generation 范式的演进脉络可以追溯到 2010 年代的 Video Prediction 研究，但真正形成体系化的 VWM 范式始于 Genie（2024）——该工作首次证明了：仅从大规模互联网视频数据中，就可以训练出一个可交互的视觉世界模型。

自回归范式的核心吸引力在于其**概念简洁性**：只需要一个统一的 next-token/frame prediction 目标，模型就能隐式地学会物理规律、视觉一致性、以及动作条件影响。这种简洁性使得该范式特别适合大规模预训练——数据越多，模型越大，世界理解的深度就越深。

## 两种子范式的分野

当前 Sequential Generation 内部已分化为两条技术路线，区别在于**如何处理动作/条件信号**以及**是否引入语言模型作为推理骨干**：

### 1. Visual Autoregressive Modeling（视觉自回归建模）

这条路线将世界模型视为一个**纯视觉序列生成器**。输入是历史视频帧和动作 token，输出是未来视频帧。代表工作包括 Genie → iVideoGPT → VideoWorld → MineWorld → Genie 3。其核心技术挑战在于：

- **视觉 tokenization 策略**：如何将连续视频帧高效地离散化为 token 序列？VQ-VAE、ViT-VQGAN、MAGVIT-v2 等方案各有优劣。
- **动作条件机制**：动作信号如何注入生成过程？additive embedding、cross-attention、adaptive layer norm 是三种常见方案。
- **长程一致性**：自回归误差累积使得生成质量随序列长度急剧下降，需要专门的对策（如 teacher forcing with scheduled sampling、stride-based conditioning）。

### 2. MLLM-guided Multimodal AR（MLLM 引导的多模态自回归）

这条路线将**预训练的多模态大语言模型（MLLM）**作为世界模型的推理核心。思想是：MLLM 已经具备丰富的世界知识和因果推理能力，只需将其与视觉生成模块对接即可形成强大的世界模型。代表工作包括 3D-VLA、WorldGPT、GR00T N1、AstraNav-World。关键创新在于：

- **LLM 作为世界推理引擎**：语言模型不仅生成文本描述，还生成视觉生成的中间条件（如布局、3D 场景图、BEV 表征等）。
- **多模态 token 的统一**：将文本 token、视觉 token、动作 token 统一到同一个 token 空间中，实现端到端的跨模态推理。
- **链式推理 + 视觉生成**：类似 Chain-of-Thought，MLLM 先「思考」世界会如何变化，再驱动视觉生成器产出对应画面。

## 视觉 Tokenization：自回归范式的瓶颈与突破口

无论是哪种子范式，视觉 tokenization 都是决定自回归 VWM 性能的核心瓶颈。离散 token 的引入使得世界模型训练与语言模型共享了成熟的 Transformer 架构，但代价巨大：

1. **信息损失**：将连续视觉信号量化为离散 token 必然导致信息损失。VQ-VAE 在压缩比为 16× 时图像质量尚且可接受，但用于视频时（尤其是需要精确物理交互的场景），细节损失会严重影响下游任务。

2. **序列长度爆炸**：一张 256×256 图像经 VQGAN 编码后可产生 256 个 token（16×16 latent grid），这意味着 10 秒 30fps 的视频将产生约 76800 个 token。对于 O(n²) 复杂度的 transformer 而言，这是一个恐怖的计算负担。

3. **token 利用率问题**：视频帧间存在极大的冗余——相邻帧的 token 序列可能有 90% 以上是相似的。如何设计高效的 token 调度策略（如 stride tokenization, keyframe-based conditioning）是当前研究热点。

当前趋势正在向**连续隐空间的自回归**方向探索——即放弃离散 tokenization，直接在连续嵌入空间中做自回归预测，从而避免量化损失。

## 动作条件注入机制的技术对比

自回归 VWM 中，动作信号 $c_t$ 如何注入是一个核心设计选择：

| 机制 | 实现方式 | 优势 | 劣势 | 代表工作 |
|------|---------|------|------|---------|
| **Additive Embedding** | 动作 token embedding 与视觉 token embedding 相加 | 实现简单，计算开销低 | 模态融合弱 | Genie |
| **Cross-Attention** | 在每层 transformer 中让视觉 token 对动作 token 做 cross-attention | 模态交互充分 | 计算开销大，需额外参数量 | iVideoGPT |
| **Adaptive Layer Norm** | 用动作信号调制 transformer 层的归一化参数 | 保持架构简洁的同时实现有效条件控制 | 条件容量有限 | VideoWorld |
| **Prefix-based** | 将动作 token 作为视觉序列的前缀 | 利用 KV-cache 优势 | 无法实现帧间动态调整 | MineWorld |

## 长程生成的误差控制策略

自回归生成的固有缺陷是**误差累积**——每一步的小误差会在后续步骤中被放大。当前的对策可分为四类：

1. **Scheduled Sampling**：训练时以一定概率用模型自身的预测而非 ground truth 作为下一帧的输入，使模型适应推理时的自循环模式。VideoWorld 对此进行了精细的概率调度设计。

2. **Conditional Reset**：每隔 K 帧用 ground truth 状态进行一次条件重置（teacher forcing reset）。这本质上是一种训练策略，无法在推理时使用。

3. **Stride Prediction**：不逐帧预测，而是以固定步长跳跃预测关键帧，中间帧通过插值或上采样获得。Genie 系列采用了此策略。

4. **Latent Recurrency**：在 transformer 之外引入显式的循环状态变量（如 RSSM 中的 deterministic state），让模型学习哪些信息需要长期保持、哪些可以遗忘。这实际上是 Sequential Generation 与 State Transition 范式的交汇点。

## 与 MLLM 的深度融合趋势

2024 年下半年以来，Sequential Generation 最显著的趋势是与多模态大语言模型的深度融合。这种融合有三种模式：

- **MLLM as Planner**（MLLM 作规划器）：MLLM 负责高层任务分解和规划，低层生成由专门的世界模型执行。典型如 GR00T N1。

- **MLLM as World Reasoner**（MLLM 作世界推理器）：MLLM 直接参与世界状态的推理和预测，而非仅做任务规划。WorldGPT 是该路线的代表。

- **Unified Token Space**（统一 token 空间）：将文本、视觉、动作三种模态的 token 统一嵌入到同一空间中，用单一 AR transformer 同时处理。这是 3D-VLA 采用的思路，也是最有野心的方向。

这种融合的根本驱动力是：**语言模型蕴含了人类积累的显式世界知识**，将其与从视频中学习的隐式世界知识结合，理论上可以构建出比纯视觉模型更强大的 VWM。

## Sequential Generation 的优势与局限

**优势**：
- 概念简洁，与语言模型预训练范式高度兼容，便于利用现有 LLM 基础设施
- 天然支持可变长度预测和条件生成
- 可生成视觉上可解释的中间结果（即预测的视频帧）
- 与 MLLM 融合的门槛低，容易嫁接语言模型的推理能力

**局限**：
- 自回归误差累积是本质性难点，难以彻底解决
- 视觉 token 序列长度过大导致计算成本高
- 像素空间的精确物理交互（如精细操作）生成质量不足
- 推理速度慢（逐 token 解码无法并行）

## 子分类导航

- [Visual Autoregressive Modeling](./visual-autoregressive-modeling/) — 纯视觉自回归建模（Genie, iVideoGPT, VideoWorld 等）
- [MLLM-guided Multimodal Autoregressive Model](./mllm-guided-multimodal-autoregressive-model/) — MLLM 引导的多模态自回归（3D-VLA, WorldGPT, GR00T N1 等）
