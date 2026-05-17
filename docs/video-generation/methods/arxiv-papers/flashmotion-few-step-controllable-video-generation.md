---
title: "FlashMotion：基于轨迹引导的少步可控视频生成"
source: "arxiv"
arxiv_id: "2603.12146"
tags:
  - "轨迹控制"
  - "少步生成"
  - "蒸馏"
  - "对抗训练"
  - "可控视频生成"
  - "CVPR2026"
status: "已读"
---
## 学习笔记

### 核心贡献

- 首次将少步蒸馏与轨迹可控视频生成结合：指出直接使用现有视频蒸馏方法（如 LCM、SDXL-Turbo）会同时损害视频质量和轨迹精度。
- 提出三阶段训练框架 FlashMotion：(1) 在多步生成器上训练轨迹适配器实现精确控制；(2) 将多步生成器蒸馏为少步版本加速推理；(3) 使用扩散+对抗混合策略微调适配器对齐少步生成器。
- 构建 **FlashBench** 基准：专为长序列轨迹可控视频生成设计，在不同前景物体数量下同时评估视频质量和轨迹精度。
- 被 CVPR 2026 接收。

### 方法细节

**第一阶段：轨迹适配器训练**

在多步视频生成器（如 VideoCrafter2）上训练轨迹适配器。给定轨迹点序列 $\mathcal{T} = \{(x_i, y_i)\}_{i=1}^{N}$，适配器将轨迹编码为条件特征注入去噪 UNet/DiT 的交叉注意力层：

$$ \epsilon_\theta(z_t, t, c_{\text{text}}, \text{Adapter}(\mathcal{T})) $$

适配器使用 ControlNet 风格架构，包含轨迹编码器和零初始化的卷积层，通过可学习副本+零卷积方式注入条件。

**第二阶段：生成器蒸馏**

将多步生成器蒸馏为少步生成器。采用渐进式蒸馏（Progressive Distillation）：

$$ \mathcal{L}_{\text{distill}} = \mathbb{E}_{z, \epsilon, t} \left\| \hat{z}_0^{\text{teacher}}(z_t, t) - \hat{z}_0^{\text{student}}(z_{t'}, t') \right\|_2^2 $$

其中 teacher 需 N 步去噪，student 仅需 N/k 步。目标是将去噪步数从 50 步压缩到 4-8 步。

**第三阶段：混合微调**

在蒸馏后的少步生成器上微调适配器，混合扩散损失与对抗损失：

$$ \mathcal{L}_{\text{hybrid}} = \mathcal{L}_{\text{diffusion}} + \lambda_{\text{adv}} \mathcal{L}_{\text{adversarial}} $$

- 扩散损失保证轨迹精度（MSE 在噪声预测或 x0 预测上）
- 对抗损失通过 PatchGAN 判别器提升少步生成的视觉质量，弥补因步数减少带来的模糊

判别器在视频帧上运行，判断生成的轨迹区域是否真实：

$$ \mathcal{L}_{\text{adv}} = \mathbb{E}_{x}[\log D(x)] + \mathbb{E}_{\hat{x}}[\log(1 - D(\hat{x}))] $$

### 关键发现

- 直接蒸馏会导致轨迹精度显著下降：teacher 模型的 50 步推理可精确控制轨迹，但 4 步 student 在蒸馏后轨迹漂移明显。
- 第三阶段的混合微调是关键：仅用扩散损失微调适配器无法恢复轨迹精度，加入对抗损失后视频质量和轨迹精度同时提升。
- FlashBench 评估显示，FlashMotion 在 4-8 步推理下能达到与 teacher 50 步相近的轨迹精度（IoU > 0.85），同时推理时间降低 6-12 倍。
- 多物体场景下轨迹控制的鲁棒性：随着前景物体数量从 1 增加到 5，轨迹精度下降在可控范围内。

### 方法归类

- **所属范式**：Controllable Video Generation（可控视频生成）
- **技术路线**：蒸馏 + 轨迹适配器 + 对抗训练 + 扩散模型
- **相关方法**：DragNUWA、MotionCtrl、VideoCrafter2、LCM-LoRA、AnimateDiff
- **应用领域**：交互式视频编辑、轨迹驱动动画、实时视频合成
