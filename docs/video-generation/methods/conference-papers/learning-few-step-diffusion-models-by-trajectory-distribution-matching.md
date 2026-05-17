---
title: "Learning Few-Step Diffusion Models by Trajectory Distribution Matching"
arxiv: https://arxiv.org/abs/2503.06674
github: https://github.com/Luo-Yihong/TDM
website: https://tdm-t2x.github.io/
venue: ICCV
year: 2025
---

# Learning Few-Step Diffusion Models by Trajectory Distribution Matching

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.06674](https://arxiv.org/abs/2503.06674)
- **GitHub**: [https://github.com/Luo-Yihong/TDM](https://github.com/Luo-Yihong/TDM)
- **Website**: [https://tdm-t2x.github.io/](https://tdm-t2x.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出轨迹分布匹配（TDM），一种统一的扩散蒸馏范式，将分布匹配的保真度优势与轨迹匹配的多步灵活采样能力相结合，解决了现有方法在少步生成中质量与灵活性不可兼得的问题。
- 引入无数据的得分蒸馏目标（data-free score distillation），在分布层面将学生模型的多步轨迹对齐到教师模型，避免了对抗训练或合成数据带来的不稳定性。
- 设计采样步数感知的训练目标（sampling-steps-aware objective），对不同采样步解耦学习目标，使模型在 1 到 4 步之间均可灵活调整采样步数。

### 方法细节
- TDM 在分布匹配中构造学生轨迹，将多步中间预测投影到教师分布的流形上，利用预训练教师扩散模型的得分函数提供监督信号，无需额外数据生成。
- 采样步数感知目标通过在训练时随机采样不同的步数 $K$，并为每个 $K$ 构造对应的中间态分布约束，使单个模型能够覆盖多种采样预算。
- 方法同时支持确定性采样（用于图像质量最优场景）和随机采样，且推理时可通过调整采样步数实现质量-速度的灵活折中。
- TDM 蒸馏过程极为高效：在 PixArt-alpha 上用 500 次迭代、2 张 A800 GPU 即可完成 4 步生成器蒸馏，训练开销仅为教师模型训练成本的约 0.01%。

### 关键发现
- TDM 蒸馏的 4 步 PixArt-alpha 生成器在 1024 分辨率下，真实用户偏好上超过了原始教师模型，证明蒸馏不仅未损失质量反而有所提升。
- 在视频生成领域，TDM 蒸馏的 CogVideoX-2B 仅用 4 NFE 即在 VBench 基准上将总分从 80.91 提升至 81.65，显示出跨模态的泛化能力。
- 在 SDXL、PixArt-alpha 等多种骨干网络上均取得了最优性能，验证了方法的骨干无关性。

### 方法归类
- 属于扩散模型加速/蒸馏方向，与分布匹配蒸馏（如 Diff-Instruct）和轨迹匹配蒸馏（如 consistency models）并列，但通过统一两者实现了更好的少步生成效果。
- 可作为通用的扩散模型后训练加速方法，适用于文生图、文生视频等多种条件生成任务。
