---
title: "TeleBoost：面向高保真、可控、鲁棒视频生成的系统化后训练对齐框架"
source: "arxiv"
arxiv_id: "2602.07595"
tags: ["post-training","alignment","GRPO","DPO","video-generation","reward-modeling","RLHF"]
status: "已读"
---
## 学习笔记

### 核心贡献

1. **系统性三阶段后训练管线**：将视频生成的后训练组织为 SFT（Supervised Fine-Tuning）→ GRPO（强化学习）→ DPO（直接偏好优化）的阶段性优化栈，每阶段承担不同对齐目标。
2. **GRPO 扩展套件**：在标准 critic-free GRPO 骨架上构建 ViPO（结构化信用分配）、BPGO（贝叶斯先验引导优化）、Self-Paced GRPO（自适应奖励课程）三大模块，分别解决「哪里学」「信什么」「何时学」。
3. **视频特有的物理/空间感知 SFT**：引入空间结构感知的 3D 一致性约束和物理感知的辅助运动建模，在 SFT 阶段即压制几何漂移与物理不自然。
4. **多目标联合优化**：将多奖励平衡问题形式化为 advantage 级别的多目标优化，避免显式梯度冲突求解的计算开销。
5. **工业级基础设施**：基于 Ray 的时间多路复用节点整合 + NVIDIA MPS 的联合奖励并行加速，解决 GRPO 中 GPU 闲置和串行评估瓶颈。

### 方法细节

- **三阶段管线设计原则**：(1) 反馈可靠性——需考虑评估器的噪声和偏差；(2) 学习信号的结构对齐——梯度应施加在出错的位置（时空-语义）；(3) 训练的适应性——随生成器能力提升需调整监督策略。

- **Stage I (SFT)**：
  - 指令与控制对齐：包含时间结构描述、相机行为、组合约束的指令数据。
  - 空间结构感知 SFT：自动评估场景级稳定性和物体级几何一致性，对几何失真样本施加更强校正梯度。
  - 物理感知 SFT：结合真实流体视频和物理仿真数据，引入辅助运动预测分支（监督为 GT optical flow），特征融合到 RGB decoder。
  - 骨干冻结，仅更新 decoder 参数。SFT 的作用是 policy shaping 而非质量优化。

- **Stage II (GRPO)**：
  - **GRPO Baseline**：组内相对比较，$\displaystyle A_i = \frac{r_i - \text{mean}(\{r_1,\dots,r_G\})}{\text{std}(\{r_1,\dots,r_G\}) + \epsilon}$，KL 约束参考 SFT policy。
  - **ViPO**：用 DINOv2/VideoMAE 提取时空特征图，构建议程优势图 $M \in \mathbb{R}^{T\times H\times W}$，像素级重新加权梯度：$\mathcal{L}_{\text{ViPO}} = \mathbb{E}\left[ \sum_{t,h,w} M_i^{(t,h,w)} \cdot A_i \cdot \log \pi_{\theta}(v_i) \right]$
  - **BPGO**：Reliability-Adaptive Scaling（组间信任分配）——与先验分布偏差大则降权；Contrastive Reward Transformation（组内先验锚定重标准化）——在先验之上拉伸高置信正样本的 advantage。
  - **Self-Paced GRPO**：监控奖励分布稀疏性和组内判别力，自动切换 Phase 1（视觉保真）→ Phase 2（时间连贯）→ Phase 3（语义对齐）。
  - **Joint Reward**：$\min_{\{c_i\}} \left\| \sum_i c_i A_i \right\|^2, \sum_i c_i = 1, c_i \ge 0 $，在 advantage 层面求解多目标平衡，避免 gradient-level 计算的显存开销。

- **Stage III (DPO)**：
  - 扩散适配：$\mathcal{L}_{\text{DPO}} = -\mathbb{E}\left[ \log \sigma\left( \beta \log \frac{\pi_{\theta}(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_{\theta}(y_l|x)}{\pi_{\text{ref}}(y_l|x)} \right) \right]$
  - 偏好数据构建三策略：(1) Policy-on-Policy Hard Negatives——从当前 GRPO 策略自生成正负对；(2) Synthetic Temporal Negatives——合成时间反转/帧打乱/帧冻结负样本；(3) Holistic Human-Aligned Ranking——人工标注电影品质和风格。
  - 动态 $\beta$ 调度：开始高以保持稳定，后期微降允许偏好边界探索。

- **奖励信号编排**：三类异构反馈——(1) VLM 驱动的语义对齐信号（Video-LLaVA, Gemini-Vision）；(2) 时间动力学和物理信号（运动估计器惩罚非因果过渡和静态帧）；(3) 感知和安全信号（artifact 检测 + 安全合规）。

### 关键发现

- **空间结构感知 SFT**：显著改善相机运动下的几何稳定性，降低下游 RL 的结构性噪声。
- **物理感知 SFT**：减少物理相关 prompt 的奖励信号方差和歧义，使后续 RL 和偏好优化更有效。
- **BPGO**：能有效识别并降权高噪声 prompt 组，避免 reward hacking，在 T2V 和 I2V 模态均适用。
- **ViPO**：结构化信用分配带来的样本效率提升显著，能精确定位修复局部 artifact 同时保留全局结构。
- **Self-Paced GRPO**：防止奖励饱和导致训练停滞，确保训练全程获得有效梯度。
- **基础设施优化**：时间多路复用消除 GPU 空闲，MPS 加速联合奖励评估，端到端训练吞吐量提升显著。

### 方法归类

- **类型**：Systematic Post-Training Alignment Pipeline（系统化后训练对齐管线）
- **范式**：SFT + RL（GRPO）+ DPO，三阶段稳定约束优化
- **适用架构**：Video Diffusion Transformer（DiT-based）
- **核心创新**：将 LLM 对齐方法论（RLHF/DPO/GRPO）系统性迁移到视频生成，解决视频特有的高 rollout 成本、时间累积错误、模糊反馈等问题
- **相关工作**：DanceGRPO、VideoDPO、Flow-GRPO、DeepSpeed-Chat
