---
title: "Diffusion-based Generation（扩散生成范式）"
---

# Diffusion-based Generation（扩散生成范式）

::: tip 范式定位
Diffusion-based Generation 是当前*生成质量最的*大VWM 范式。它将世界状态生成建模为一个迭代去噪过程——从纯噪声出发，在条件信号的引导下逐步恢复出清晰的未来世界状态。与 Sequential Generation 的「视token 串行生成」不同，扩散范式天然支持**并行生成**，在视觉质量和多样性上具有显著优势，代价是推理速度较慢（需多步去噪）声:::

## 扩散世界模型的形式化定义

在VWM 语境下，扩散模型学习的不同$p(x_{t+1:T} | x_{0:t}, c)$ 的直接概率分布，而是一个*逐步去噪过程**。
$$
x^{(k-1)} = \frac{1}{\sqrt{\alpha_k}} \left( x^{(k)} - \frac{\beta_k}{\sqrt{1-\bar{\alpha}_k}} \epsilon_\theta(x^{(k)}, k, x_{0:t}, c) \right) + \sigma_k z
$$

其中 $\epsilon_\theta$ 是噪声预测网络（通常常UNet 识DiT 架构），$k$ 为去噪步数，$x_{0:t}$ 为历史视觉观测（条件帧）作c$ 为额外的条件信号（动作、文本、地图等）。
这个公式的关键在于：**扩散过程并不是「生成新信息」，而是「从噪声中恢复被破坏的信息的*。这在物理上有一种优雅的对应——世界状态的演化就是在历史条件和外力作用下，系统从不确定状态恢复到确定状态的过程。
## 两大子范式的分野

Diffusion-based Generation 内部出现了一条重要的分界线：

### 1. Latent Diffusion（隐空间扩散。
在压缩的隐空间中运行扩散过程。先过VAE 将视频帧压缩到低维隐空间，在隐空间中做去噪，最后解码回像素空间。这是*当前主流方案**，代表工作包括DriveDreamer、GenAD、Cosmos、GAIA-2 等。
**核心优势**：计算高效（隐空间比像素空间的8-48 倍），允许使用更大的模型和更长的视频序列。
**核心挑战**：隐空间的时序一致性（如何确保 VAE 隐空间中的时间动态与像素空间中的物理规律一致？）。
### 2. Autoregressive Diffusion（自回归扩散。
将扩散去噪过程以**自回归结构串分*。类似于 sequential generation，但每一步不是一致token 而是一个完整的扩散去噪模块。代表工作包括GameNGen、Oasis、Genie 2、Matrix-Game、Hunyuan-GameCraft 等。
**核心优势**：继承了 AR 的序列灵活性（可变长度生成、逐帧条件控制），同时享有扩散的生成质量优势。
**核心挑战**：计算开销极大（每一步都需要完整的多步去噪过程）；自回归误差累积依然存在（虽然在扩散质量加持下比纯 AR 更可控）。
## 扩散范式 vs 自回归范式的根本对比

| 维度 | Diffusion | Autoregressive |
|------|-----------|----------------|
| **生成方式** | 并行迭代去噪 | 的token 串行 |
| **生成质量** | **的*（尤其是纹理和细节） | 中（高频细节易丢失） |
| **多样变* | **化*（随机噪声源在| 低（确定性贪心解码） |
| **推理速度** | 慢（10-50 步去噪） | 中（的token 解码，但可利用KV-cache用|
| **长程一致的* | 中（可并行生成多帧） | 弱（误差累积严重建|
| **可控制* | **机*（classifier-free guidance制| 中（条件注入灵活但控制力有限制|
| **训练稳定语* | 义| 中（易崩塌） |
| **数据效率** | 和中（需要大量数据学习分布） | 的高（next-token 目标高效率|

## 扩散世界模型的独特优。
### 1. 视觉质量的卓越表。
扩散范式在图像视频生成领域已经证明了其质量优势——Stable Diffusion、Sora 等模型均基于扩散框架。这一优势在VWM 中同样成立：Cosmos 生成的自动驾驶场景在物理真实性和视觉质量上都优于不AR 同类方案。根本原因在于扩散模型在训练时学习的是评分函数（score function）而非直接的概率映射，对高维数据分布的建模更为精确。
### 2. Classifier-Free Guidance（CFG。
CFG 是扩散模型独有的可控性机制。通过在训练时随机丢弃条件信号，推理时在「有条件预测」和「无条件预测」之间进行插值外推，可以精确调节**条件信号对生成的控制强度**。这种机制在 AR 模型中没有天然的对应物（AR 模型通常只能通过温度参数调节随机性）。
CFG 的数学形式：

$$
\tilde{\epsilon}_\theta(x^{(k)}, k, c) = \epsilon_\theta(x^{(k)}, k, \emptyset) + w \cdot (\epsilon_\theta(x^{(k)}, k, c) - \epsilon_\theta(x^{(k)}, k, \emptyset))
$$

其中 $w$ 的guidance scale的w>1$ 时增强条件控制，$w=1$ 时退化为标准条件生成。
### 3. 多帧并行生成

法AR 范式「先有第 t 帧才能有效t+1 帧」不同，扩散模型可以及*一次去噪过程中并行生成多个未来帧*。这种并行性不仅加快了推理，还赋予了模型一种「全局视角」——去噪时的每一帧都可以参考整个生成序列的信息（通过时空注意力），从而更好地维护全局一致性。
## 扩散世界模型的核心挑。
### 1. 推理速度

标准扩散模型需要50-1000 步去噪迭代，在视频生成场景中这意味着一个H100 可能需要数秒甚至数十秒才能生成一秒钟的视频。这对于需要实时交互的 VWM 应用（如机器人控制、游戏环境）来说是不可接受的。
当前加速策略：
- **蒸馏**：通过知识蒸馏将去噪步数从 50 步压缩到 1-4 步（LCM, SDXL-Turbo, SD3-Turbo中- **Consistency Models**：学习直接映射噪声到数据，跳过迭代去的- **Flow Matching**：使用ODE 轨迹替代随机微分方程，减少采样步。
### 2. 物理一致。
扩散模型擅长生成「看起来真实」的视频，但不保证「物理上正确」。例如，扩散生成的水杯倾倒视频可能视觉上很逼真，但杯子的运动轨迹并不符合牛顿力学。这是扩散VWM 散State Transition 模型之间最根本的差距——后者通过显式动力学函数确保物理一致性，前者仅靠数据分布隐式逼近。
### 3. 条件嵌入的模态鸿。
条件信号（动作、文本、地图）如何有效嵌入扩散过程是一个关键设计问题。简单的 additive embedding（如 Stable Diffusion 何CLIP text embedding）在 VWM 中往往不够——因为世界模拟需要的条件信息远丰富于「一段文字描述」。Cosmos 使用于3D VAE 和跨模态注意力来解决这一问题，GAIA-2 引入了专门的几何编码器处理自动驾驶的结构化条件。
## 与视频生成模型的边界

扩散 VWM 与通用视频生成模型（如 Sora, Kling, Runway Gen-3）之间的边界正在模糊。区别在于：

- **视频生成模型**的目标是「从文本生成好看的视频」（open-loop generation的- **扩散 VWM** 的目标是「根据历史观测和动作条件生成物理上正确的未来视频，以支持决策和规划」（closed-loop simulation。
Cosmos oGAIA-2 在架构上的Sora 高度相似，但它们通过特定的条件设计（如多帧历史帧作为条件、精确的动作/轨迹条件、BEV 条件）实现了从「视频生成器」到「世界模拟器」的转变。这种转变的关键在于：世界模拟器需要保持时序一致性——生成的未来帧必须与历史帧在几何和语义上连续。
## 子分类导。
- [Latent Diffusion](./latent-diffusion/) ── 隐空间扩散（DriveDreamer, GenAD, Cosmos, GAIA-2 等）
- [Autoregressive Diffusion](./autoregressive-diffusion/) ── 自回归扩散（GameNGen, Oasis, Genie 2, Matrix-Game 等）

## 相关分类

- 🌍 [Designs 架构总览](/world-models/architectures/)
- 📊 [Datasets & Benchmarks 总览](/world-models/)
- 📚 [Others 周边资源](/world-models/ecology/)
- 🎬 [视频生成后训练](/video-generation/)
