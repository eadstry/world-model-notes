---
title: "TIC-FT：面向视频扩散模型通用控制的时序上下文微调方法"
source: "arxiv"
arxiv_id: "2506.00996"
tags: ["conditional-generation","video-diffusion","in-context-learning","fine-tuning","few-shot","image-to-video","video-to-video"]
status: "已读"
---
## 学习笔记

### 核心贡献

1. **时序上下文微调 (TIC-FT)**：将条件帧和目标帧沿时间轴拼接，而非传统方法的空间拼接或 ControlNet 式外部编码器注入，最小化微调与预训练之间的分布偏移。
2. **缓冲帧机制**：在干净条件帧和完全加噪目标帧之间插入噪声水平逐帧线性递增的缓冲帧，实现自然淡出过渡，避免突变场景割裂和异质噪声水平导致的失配。
3. **架构无关、极低数据需求**：无需任何架构修改或新增模块，仅需 10-30 个训练样本，<1000 steps（CogVideoX-5B 上 <1 小时单卡 A100）。
4. **统一多样化条件生成**：同一框架同时支持图像到视频 (I2V) 和视频到视频 (V2V) 任务，条件帧长度 $L$ 可变，支持角色生成、虚拟试穿、动作迁移、风格迁移、关键帧插值等。
5. **在 CogVideoX-5B 和 Wan-14B 上全面验证**，在条件保真度和视觉质量上一致优于 ControlNet、Fun-pose 和 SIC-FT-Replace。

### 方法细节

- **时序拼接**：将条件帧 $\bar{\mathbf{z}}^{(0)}$ 和目标帧 $\hat{\mathbf{z}}^{(t)}$ 沿时间轴拼接：

$$\mathbf{z}^{(t)} = \underbrace{\bar{\mathbf{z}}_{1:L}^{(0)}}_{\text{condition}} \;\|\; \underbrace{\hat{\mathbf{z}}_{L+1:L+K}^{(t)}}_{\text{target}} \in \mathbb{R}^{(L+K) \times C \times H \times W}$$

  当 $L=1$ 时为 I2V，当 $L>1$ 时为 V2V。

- **缓冲帧**：在条件帧和目标帧之间插入 $B$ 个噪声水平线性递增的帧：

$$\tilde{\tau}_b = \frac{b}{B+1} T, \quad b = 1, \dots, B$$

$$\mathbf{z}^{(T)} = \bar{\mathbf{z}}_{1:L}^{(0)} \;\|\; \tilde{\mathbf{z}}_{L+1:L+B}^{(\tilde{\tau}_{1:B})} \;\|\; \hat{\mathbf{z}}_{L+B+1:L+B+K}^{(T)}$$

  缓冲帧采用条件帧加噪实现（$\tilde{\mathbf{z}}^{(t)} = \bar{\mathbf{z}}^{(t)}$），实验表明效果良好。

- **推理算法** (Algorithm 1)：从 $t=T$ 到 $t=0$，每步仅对噪声水平 $\mathbf{t}_i = t$ 的帧进行去噪。条件帧始终固定（$\mathbf{t}_i=0$），缓冲帧在 $\tilde{\tau}_b < t$ 后开始参与去噪。

- **训练算法** (Algorithm 2)：随机采样 $t \sim \mathcal{U}\{1,\dots,T\}$，构建含异质噪声水平的输入序列。loss 仅计算目标帧部分：

$$\mathcal{L} = \frac{1}{K} \sum_{i=L+B+1}^{L+B+K} \left\| \boldsymbol{\varepsilon}_i - \hat{\boldsymbol{\varepsilon}}_i \right\|_2^2$$

  缓冲帧不参与 loss，让模型自由预测最自然的过渡内容（实践中自发形成 fade-out/fade-in 效果）。

- **关键设计**：利用 DiT 的 3D 全注意力直接访问条件帧（无需外部编码器），避免细节丢失。

### 关键发现

- **I2V 任务（CogVideoX-5B，20训练样本）**：
  - TIC-FT (6K steps)：CLIP-I=0.8329, DINO=0.5530，远超 ControlNet (CLIP-I=0.7349, DINO=0.3427) 和 Fun-pose (CLIP-I=0.7714)。
  - VBench 各指标 TIC-FT 均最高或与前二持平。

- **V2V 任务**：
  - TIC-FT (6K steps)：CLIP-I=0.8794, LPIPS=0.2251, DINO=0.6745，显著优于 ControlNet (CLIP-I=0.6221) 和 Fun-pose (CLIP-I=0.7260)。
  - 在仅 2000 steps 时 TIC-FT 已具竞争性，其他基线远未收敛。

- **Zero-shot 验证**：即使不训练，带缓冲帧的时序拼接也已产生合理输出；无缓冲帧则完全退化。良好的 zero-shot 性能与微调后性能正相关。

- **消融——缓冲帧数量**：3 帧缓冲在质量、动态和效率间取得最佳平衡。更多缓冲帧增强动态但削弱条件保真度。

- **消融——条件帧数量**：增加条件帧微弱提升条件保真度，但收益递减。

- **对比 SDEdit-style 替换策略**：TIC-FT + buffer 在所有指标上优于 TIC-FT-Replace（用 SDEdit 式注入条件）。

### 方法归类

- **类型**：In-Context Fine-Tuning for Conditional Video Generation（上下文微调式条件视频生成）
- **范式**：Fine-tuning（LoRA，rank=128），非训练自由的 ICL
- **核心创新**：将条件视频生成重新定义为沿时间轴的上下文学习任务，利用预训练视频模型的时序建模先验
- **关键设计**：异质噪声水平序列（类似 FIFO-Diffusion、Diffusion Forcing 的思想）+ 缓冲帧平滑过渡
- **适用架构**：DiT-based T2V（3D full-attention），架构无关
- **相关方法**：In-Context LoRA（空间网格拼接）、ControlNet（外部编码器）、FIFO-Diffusion（异质噪声水平）
