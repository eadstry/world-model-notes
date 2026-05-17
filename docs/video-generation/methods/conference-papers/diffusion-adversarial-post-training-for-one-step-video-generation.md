---
title: "Diffusion Adversarial Post-Training for One-Step Video Generation"
arxiv: https://arxiv.org/abs/2501.08316
website: https://seaweed-apt.com/
venue: ICML
year: 2025
---

# Diffusion Adversarial Post-Training for One-Step Video Generation

::: info 论文信息
- **Venue**: ICML (2025)
- **arXiv**: [https://arxiv.org/abs/2501.08316](https://arxiv.org/abs/2501.08316)
- **Website**: [https://seaweed-apt.com/](https://seaweed-apt.com/)
:::

## 学习笔记

### 核心贡献
- 提出扩散对抗后训练（Diffusion Adversarial Post-Training, APT）：将预训练多步扩散模型通过 GAN 式对抗训练直接转换为 1 步生成器，无需多步蒸馏管线
- 引入近似 R1 正则化：在隐空间对判别器施加 R1 梯度惩罚的近似形式，有效稳定 GAN 训练、防止判别器过拟合
- 架构与训练流程改进：针对视频生成优化学生模型结构及对抗训练过程，提升 1 步生成质量
- Seaweed-APT 模型：实现 1280×720、24fps、2 秒视频的 1 步生成，以及 1024px 分辨率图像的 1 步生成

### 方法细节
- **训练范式**：预训练扩散模型作为教师 → 学生模型初始化为教师权重 → 冻结教师、对抗训练微调学生 → 判别器区分教师多步 vs 学生 1 步生成
- **判别器设计**：在隐空间（latent space）训练视频/图像判别器，输入为教师多步生成与学生 1 步生成的隐变量，输出真实性评分
- **损失组合**：对抗损失（hinge loss / non-saturating GAN loss）+ 近似 R1 正则化项 + 隐空间蒸馏损失（MSE 或 LPIPS-style 感知损失），多损失联合优化
- **R1 正则化近似**：为标准 R1 正则化设计计算高效的近似形式，避免在隐空间高维判别器上做精确梯度计算的开销
- **灵活推理**：学生模型支持 1-4 步推理，1 步即为最终部署模式；步数越多质量越接近教师，但 1 步已具备竞争力

### 关键发现
- 1 步生成可达到教师模型 50 步约 90% 的视觉质量，推理速度提升约 50 倍
- 近似 R1 正则化显著提升 GAN 训练稳定性，训练曲线平滑，判别器不易坍缩
- 对抗训练对于弥合少步质量差距至关重要：纯蒸馏（MSE）产生的 1 步结果存在模糊和伪影，APT 有效消除
- 方法对多种扩散架构（DiT、U-Net）及视频/图像任务均通用，Seaweed-APT 在 720p 视频 1 步生成上达到实用级质量

### 方法归类
- **范式**: Adversarial Post-Training / Distillation
- **关键技术**: GAN-based Distillation, Approximate R1 Regularization, One-Step Generation, Latent Discriminator
- **适用场景**: One-Step Video Generation, Real-Time Image Generation, Few-Step Inference
