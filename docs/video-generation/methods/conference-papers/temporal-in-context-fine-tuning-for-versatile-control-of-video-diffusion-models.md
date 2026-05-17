---
title: "Temporal In-Context Fine-Tuning for Versatile Control of Video Diffusion Models"
arxiv: https://arxiv.org/abs/2506.00996
github: https://github.com/kinam0252/TIC-FT
website: https://kinam0252.github.io/TIC-FT/
venue: NeurIPS
year: 2025
---

# Temporal In-Context Fine-Tuning for Versatile Control of Video Diffusion Models

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.00996](https://arxiv.org/abs/2506.00996)
- **GitHub**: [https://github.com/kinam0252/TIC-FT](https://github.com/kinam0252/TIC-FT)
- **Website**: [https://kinam0252.github.io/TIC-FT/](https://kinam0252.github.io/TIC-FT/)
:::

## 学习笔记

### 核心贡献
- 提出 Temporal In-Context Fine-Tuning（TIC-FT），将"上下文学习"思想引入视频生成：将条件帧与目标帧沿时间轴拼接，使模型从示例中自动推断控制目标。
- 插入缓冲帧（Buffer Frames），在条件帧与目标帧之间添加逐渐加大噪声的过渡帧，实现时序上的平滑衔接，避免突变伪影。
- 极其样本高效：仅需 10-30 张训练图像即可完成微调，无需修改预训练模型架构。
- 单一框架统一支持多种控制任务，包括 I2V（图像到视频）和 V2V（视频到视频/风格迁移）。
- 在 CogVideoX-5B 和 Wan-14B 两种不同架构的 DiT 上验证了通用性。

### 方法细节
- 训练时构建"条件帧 + 噪声过渡缓冲帧 + 目标帧"的拼接序列，沿 DiT 时间轴输入。
- 缓冲帧采用渐进式噪声策略：靠近条件帧处噪声极低，靠近目标帧处噪声逐渐升高，使去噪过程自然连接两端。
- 推理阶段同样构造条件+缓冲+目标的结构，模型通过 in-context 机制自动理解前后帧的语义映射关系。
- 损失函数仅对目标帧区域计算，条件帧和缓冲帧不参与损失，但通过自注意力影响去噪过程。
- 支持多尺度训练（不同帧数、不同分辨率），增强泛化性。

### 关键发现
- 仅 10-30 个训练样本即可学会从条件到目标帧的映射，远超传统微调方法的数据效率。
- 缓冲帧机制是平滑过渡的关键，未经缓冲的直接拼接会导致严重的时序不连续和抖动。

### 方法归类
- **范式**: [时序上下文学习 / 样本高效微调]
- **关键技术**: [条件帧-缓冲帧-目标帧拼接 → 渐进噪声方案 → In-Context 机制]
- **适用场景**: [I2V 可控生成，V2V 风格迁移，少样本视频编辑，多任务统一控制]
