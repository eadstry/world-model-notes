---
title: "FlashI2V：傅里叶引导的潜在偏移防止图像到视频生成中的条件图像泄漏"
source: "arxiv"
arxiv_id: "2509.25187"
tags:
  - "Image-to-Video"
  - "条件图像泄漏"
  - "傅里叶变换"
  - "Flow Matching"
  - "潜在偏移"
status: "已读"
---
## 学习笔记

### 核心贡献

- 首次系统阐明 I2V 生成中「条件图像泄漏」（Conditional Image Leakage）现象的机理：去噪器倾向于走捷径依赖条件图像，导致生成视频出现慢动作、颜色不一致等问题，同时在域外（out-of-domain）场景下性能显著下降。
- 提出 **Latent Shifting** 技术：修改 Flow Matching 的源分布与目标分布，从噪声潜在变量中减去条件图像信息，从而隐式地注入条件，迫使模型真正学习生成动态变化。
- 提出 **Fourier Guidance** 机制：利用傅里叶变换提取高频幅度特征，加速训练收敛，并允许在推理时调节生成视频的细节程度。
- 仅 1.3B 参数即取得优异性能：在 VBench-I2V 上的动态程度得分达 53.01，超过 CogVideoX1.5-5B-I2V 和 Wan2.1-I2V-14B-480P 等更大模型。
- 在域外数据上展现出当前 I2V 范式中最佳的泛化能力。

### 方法细节

**条件图像泄漏的形式化**：

在标准 I2V 方法中，条件图像 $c_{\text{img}}$ 与噪声潜在变量 $x_t$ 沿通道维度拼接后输入去噪器 $v_\theta([x_t; c_{\text{img}}], t, c_{\text{text}})$。由于条件图像始终存在，去噪器倾向于学习恒等映射（直接复制条件帧），即：

$$ v_\theta([x_t; c_{\text{img}}], t, c_{\text{text}}) \approx \text{const} \cdot (c_{\text{img}} - x_t) $$

这导致模型在训练时对域内数据过拟合，在域外场景泛化性差。

**Latent Shifting（潜在偏移）**：

定义源分布和目标分布的偏移。设原始 Flow Matching 中：

- 源样本 $x_0 \sim p_{\text{data}}$（干净视频潜在变量）
- 噪声 $x_1 \sim \mathcal{N}(0, I)$
- 插值路径 $x_t = (1-t)x_0 + t x_1$

Latent Shifting 将条件图像 $c_{\text{img}}$ 从 $x_t$ 中减去：

$$ \tilde{x}_t = x_t - \alpha_t \cdot c_{\text{img}} $$

其中 $\alpha_t$ 为时间相关的缩放系数。模型学习预测速度场 $v_\theta(\tilde{x}_t, t, c_{\text{text}})$，条件图像不再显式出现于输入，从而消除泄漏。

**Fourier Guidance（傅里叶引导）**：

对生成的潜在变量做 2D 傅里叶变换，提取高频幅度特征：

$$ \mathcal{F}(x)_{\text{high}} = \text{FFT}(x) \odot H_{\text{high-pass}} $$

在训练中额外监督高频分量与真实视频的高频分量对齐：

$$ \mathcal{L}_{\text{fourier}} = \|\mathcal{F}(\hat{x}_0)_{\text{high}} - \mathcal{F}(x_0)_{\text{high}}\|_2^2 $$

推理时可通过调整高频引导的权重来控制视频细节水平和动态强度。

**总体损失函数**：

$$ \mathcal{L} = \mathcal{L}_{\text{flow}} + \lambda_{\text{fourier}} \mathcal{L}_{\text{fourier}} $$

### 关键发现

- 条件图像泄漏是 I2V 生成中动态不足和颜色漂移的根源，模型在学习中会过度依赖条件帧。
- Latent Shifting 使去噪器无法走捷径，强制学习帧间变化，显著提升视频动态性。
- Fourier Guidance 在加速收敛的同时提供了推理时可控的细节调节能力。
- 域外泛化实验证明 FlashI2V 在未见过的图像风格/内容上仍能生成合理的动态视频。
- 以 1.3B 参数超越 5B 和 14B 模型，表明架构效率优于模型规模。

### 方法归类

- **所属范式**：Image-to-Video Generation（图像到视频生成）
- **技术路线**：Flow Matching + 傅里叶变换引导 + 潜在空间偏移
- **相关方法**：CogVideoX-I2V、Wan2.1-I2V、Stable Video Diffusion、VideoCrafter、DynamicCrafter
- **应用领域**：图像动画化、视频内容创作、域外泛化视频生成
