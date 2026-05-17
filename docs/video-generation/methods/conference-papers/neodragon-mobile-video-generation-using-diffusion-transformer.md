---
title: "Neodragon: Mobile Video Generation using Diffusion Transformer"
arxiv: https://arxiv.org/abs/2511.06055v1
website: https://qualcomm-ai-research.github.io/neodragon
venue: ICLR
year: 2026
---

# Neodragon: Mobile Video Generation using Diffusion Transformer

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2511.06055v1](https://arxiv.org/abs/2511.06055v1)
- **Website**: [https://qualcomm-ai-research.github.io/neodragon](https://qualcomm-ai-research.github.io/neodragon)
:::

## 学习笔记

### 核心贡献
- 首次将文生视频扩散 Transformer 全模型部署至移动端 NPU，在骁龙 Hexagon NPU 上以 6.7 秒端到端延迟生成 640×1024 分辨率、2 秒（49 帧 @24fps）视频
- 提出四项面向移动端的模型压缩与加速技术：文本编码器蒸馏（T5xxl → DT5）、非对称解码器蒸馏、MMDiT 模块剪枝、以及针对金字塔流匹配的 DMD 步蒸馏
- 在 4.945B 总参数量、3.5GB 峰值内存和 6.7s 延迟约束下实现 VBench 总分 81.61，证明端侧高质量视频生成的可行性

### 方法细节
- 文本编码器蒸馏：将 4.762B 的 T5xxl 替换为仅 0.2B 的 DT5（DistilT5），通过 Text-Encoder Distillation 过程保持语义理解能力，大幅降低文本编码阶段的计算与内存开销
- 非对称解码器蒸馏：在不扰动生成管道潜在空间的前提下，将原生 codec-latent-VAE 解码器替换为更轻量的解码器，实现解码阶段的高效加速
- MMDiT 模块剪枝：基于各块对生成质量的相对重要性进行剪枝，再通过两阶段蒸馏恢复剪枝导致的性能损失，显著缩减去噪骨干网络的计算量
- DMD 步蒸馏适配金字塔流匹配：将 DMD 蒸馏技术扩展到金字塔式流匹配框架，减少去噪器的 NFE（神经功能评估次数），直接加速推理步数
- 端到端系统集成 SSD-1B 首帧图像生成器 + QuickSRNet 2 倍超分，形成完整的移动端文生视频管线

### 关键发现
- 文本编码器是移动端视频生成的主要瓶颈之一：T5xxl 参数量占全模型的 96% 以上，蒸馏至 DT5 后几乎无损地将编码器开销压缩至原来的 1/24
- MMDiT 剪枝 + 两阶段蒸馏策略可在去除约 30-40% 参数量后通过蒸馏恢复生成质量，验证了大规模扩散 Transformer 中存在大量冗余
- DMD 步蒸馏显著减少了去噪所需的迭代次数（从数十步降至 4-8 步），使得实时推理成为可能，且与金字塔流匹配兼容良好

### 方法归类
- **范式**: 基于 Diffusion Transformer（MMDiT）的移动端部署优化，结合知识蒸馏、结构化剪枝和步蒸馏
- **关键技术**: Text-Encoder Distillation（T5xxl → DT5）、Asymmetric Decoder Distillation、MMDiT block pruning + 两阶段蒸馏、DMD step distillation for pyramidal flow-matching、QuickSRNet 超分
- **适用场景**: 移动端 / 边缘设备上的文生视频实时推理，要求低延迟（<10s）、低内存（<4GB）和高隐私性的应用场景
