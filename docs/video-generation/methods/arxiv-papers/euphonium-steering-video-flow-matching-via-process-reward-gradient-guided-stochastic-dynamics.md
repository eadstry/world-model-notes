---
title: "Euphonium: Steering Video Flow Matching via Process Reward Gradient Guided Stochastic Dynamics"
arxiv: https://www.arxiv.org/abs/2602.04928
github: https://github.com/zerzerzerz/Euphonium
venue: arXiv
year: 2026
---

# Euphonium: Steering Video Flow Matching via Process Reward Gradient Guided Stochastic Dynamics

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://www.arxiv.org/abs/2602.04928](https://www.arxiv.org/abs/2602.04928)
- **GitHub**: [https://github.com/zerzerzerz/Euphonium](https://github.com/zerzerzerz/Euphonium)
:::

## 学习笔记

### 核心贡献

Euphonium 针对流匹配（Flow Matching）模型在强化学习对齐中探索效率低下的问题，提出以下核心贡献：

1. **过程奖励引导的随机动力学采样框架**：将流匹配采样过程建模为理论上有原则的随机微分方程（SDE），将过程奖励模型（Process Reward Model, PRM）的梯度显式纳入流的漂移项（drift term），实现密集、逐步的生成引导，超越此前方法中的无引导随机探索。
2. **统一现有方法的理论框架**：证明 Flow-GRPO 和 DanceGRPO 等现有方法是 Euphonium SDE 框架的特例 —— 当 PRM 梯度权重为零时退化回无引导探索。
3. **蒸馏目标消除推理时依赖**：推导出将 PRM 引导信号蒸馏（distill）入流网络本身的训练目标，使学生模型在推理时无需额外运行奖励模型即可获得引导效果。
4. **Dual-Reward GRPO 算法实例化**：提出双奖励组相对策略优化（DR-GRPO），将潜在空间中的过程奖励（高效信用分配）与像素空间中的结果奖励（最终视觉保真度）相结合。

### 方法细节

1. **Euphonium SDE 形式化**：
   - 标准流匹配 ODE 为 $\frac{dx_t}{dt} = v_\theta(x_t, t)$。
   - Euphonium 将其推广为 SDE：$dx_t = \left[v_\theta(x_t, t) + \alpha \cdot \nabla_{x_t} R_\phi(x_t, t)\right]dt + \sigma_t dW_t$。
   - 其中 $R_\phi(x_t, t)$ 为过程奖励模型，评估当前中间状态 $x_t$ 的质量，$\nabla_{x_t} R_\phi$ 为奖励梯度，驱动采样轨迹朝向高奖励区域。
2. **过程奖励模型（PRM）**：
   - 在潜在空间中定义，对去噪过程每一中间步计算奖励分数，实现密集信用分配（dense credit assignment）。
   - 与仅使用最终帧结果奖励（outcome reward）的稀疏信号不同，PRM 为每一步提供方向性引导，显著提高奖励信号密度。
3. **蒸馏目标**：
   - 定义蒸馏损失 $L_\text{distill} = \mathbb{E}_{t,x_t}\left[\|v_\theta(x_t, t) - v_\text{teacher}(x_t, t)\|^2\right]$，其中 $v_\text{teacher}$ 包含 PRM 梯度引导项。
   - 蒸馏后的学生模型（即原始流网络）在推理时直接输出已对齐的生成结果，无需调用 PRM，推理速度不受影响。
4. **DR-GRPO 算法**：
   - **过程奖励（Latent PRM）**：在潜在空间计算中间步奖励，实现高效信用分配。
   - **结果奖励（Pixel-level Outcome Reward）**：在像素空间通过视觉质量评估模型（如 aesthetic score、CLIP score）对最终生成帧评分，确保视觉保真度。
   - **组相对策略优化（GRPO）**：同时优化两种奖励，通过组内相对比较减少奖励尺度波动对训练稳定性的影响。

### 关键发现

- Euphonium 在文本到视频生成任务中比现有方法（Flow-GRPO、DanceGRPO）实现了更好的对齐效果，同时训练收敛速度加速 1.66 倍。
- 过程奖励的密集引导信号（每步奖励）显著优于仅依赖最终结果奖励的稀疏信号，后者导致大量低效的随机探索。
- 蒸馏目标成功将 PRM 的引导效果内化至流网络，使推理时不需额外计算开销。
- 理论分析表明 Euphonium SDE 框架具有一般性，可统一描述当前主流方法，为未来方法设计提供了理论基础。

### 方法归类

- **任务类别**：文本到视频生成（Text-to-Video）、流匹配模型对齐
- **技术路线**：Flow Matching + 强化学习（RL）对齐 + 过程奖励模型
- **核心方法论**：随机微分方程（SDE）引导采样 + 奖励梯度蒸馏
- **相关方法脉络**：属于流匹配 / 扩散模型的 RL 对齐方向，与 RLHF（LLM 对齐）、Flow-GRPO、DanceGRPO、Diffusion-DPO 等方法处于同一研究脉络。Euphonium 的核心创新在于用过程奖励替换结果奖励的稀疏信号，并通过 SDE 框架为梯度引导提供理论基础，区别于偏好优化方法（DPO 系）通过偏好对进行间接对齐的路线。
