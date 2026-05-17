---
title: "Diffuman4D: 4D Consistent Human View Synthesis from Sparse-View Videos with Spatio-Temporal Diffusion Models"
arxiv: https://arxiv.org/abs/2507.13344
github: https://github.com/zju3dv/Diffuman4D
website: https://diffuman4d.github.io/
venue: ""
year: 2025
---

# Diffuman4D: 4D Consistent Human View Synthesis from Sparse-View Videos with Spatio-Temporal Diffusion Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2507.13344](https://arxiv.org/abs/2507.13344)
- **GitHub**: [https://github.com/zju3dv/Diffuman4D](https://github.com/zju3dv/Diffuman4D)
- **Website**: [https://diffuman4d.github.io/](https://diffuman4d.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出滑动迭代去噪过程（Sliding Iterative Denoising Process），用于增强 4D 扩散模型的时空一致性，解决稀疏视角视频人体视角合成中的不一致问题
- 定义潜在网格（Latent Grid），每个潜在编码同时包含图像、相机位姿和人体姿态信息，实现对多视角-多时间戳的统一建模
- 沿空间维度和时间维度交替去噪，配合滑动窗口机制，在不显著增加 GPU 显存消耗的前提下实现信息在潜在网格中的充分流动
- 在 DNA-Rendering 和 ActorsHQ 数据集上取得了显著优于现有方法的稀疏视角人体视角合成质量

### 方法细节
- **潜在网格构建**：将稀疏视角 RGB 视频按视角和时间戳组织为二维潜在网格 $G \in \mathbb{R}^{V \times T}$，其中 $V$ 为视角数，$T$ 为帧数，每个网格单元 $g_{v,t}$ 编码对应视角和时刻的图像、相机外参和 SMPL 人体姿态
- **交替去噪策略**：先沿空间维度（不同视角之间）滑动去噪，再沿时间维度（同一视角不同时刻）滑动去噪，交替迭代多轮，使每个潜在能聚合来自邻域视角和邻域帧的信息
- **滑动窗口机制**：每次去噪仅处理当前窗口内的局部潜在子集，窗口沿空间/时间维度滑动，确保每个位置在多次迭代中获得足够大的感受野
- **4D 扩散模型骨干**：基于预训练的时空扩散模型，通过修改去噪输入条件（相机位姿、人体姿态）实现新视角生成
- **显存优化**：滑动窗口去噪避免了在完整潜在网格上做全局注意力，使方法在消费级 GPU 上可运行
- **解码阶段**：去噪完成后，从目标视角对应的潜在直接解码出 RGB 视频序列

### 关键发现
- 潜在网格 + 交替滑动去噪的设计等价于为扩散模型提供了一个极大感受野的隐式 4D 优化过程，信息在空间和时间维度间双向流动
- 与直接生成所有视角视频的方法相比，滑动迭代去噪在时空一致性和显存消耗之间取得了有效折衷
- 人体姿态作为条件输入对于稀疏视角下的高保真人体重建至关重要，尤其是在大角度视差场景中

### 方法归类
- **范式**: 4D View Synthesis / Novel View Synthesis
- **关键技术**: Sliding Iterative Denoising, Latent Grid, Spatio-Temporal Alternating Denoising, 4D Diffusion Model
- **适用场景**: 稀疏视角人体视频的任意新视角合成、自由视点视频生成、数字人重建
