---
title: "TransPixeler: Advancing Text-to-Video Generation with Transparency"
arxiv: https://arxiv.org/abs/2501.03006
github: https://github.com/wileewang/TransPixeler
website: https://wileewang.github.io/TransPixar/
venue: CVPR
year: 2025
---

# TransPixeler: Advancing Text-to-Video Generation with Transparency

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2501.03006](https://arxiv.org/abs/2501.03006)
- **GitHub**: [https://github.com/wileewang/TransPixeler](https://github.com/wileewang/TransPixeler)
- **Website**: [https://wileewang.github.io/TransPixar/](https://wileewang.github.io/TransPixar/)
:::

## 学习笔记

### 核心贡献
- 提出 TransPixeler，将预训练文本到视频模型扩展为 RGBA 视频生成，首次实现 alpha 通道透明度的端到端生成
- 采用 DiT 架构，引入 alpha 专用 token 和 LoRA 高效微调策略，在保留原 RGB 能力的同时联合生成 RGB 和 alpha 通道
- 在缺乏大规模透明度视频数据集的条件下，仍能实现 RGB 与 alpha 通道的高一致性

### 方法细节
- 基于 Diffusion Transformer 架构，新增 alpha 通道特定 token 以扩展模型容量，不改变原有 RGB token 的处理流程
- 使用 LoRA 进行参数高效微调，避免全量微调破坏预训练的 RGB 生成先验
- 通过优化注意力机制加强 RGB 与 alpha token 之间的信息交互，确保二者语义对齐

### 关键发现
- 在有限训练数据下仍能生成多样且一致的 RGBA 视频，RGB 与 alpha 通道的强对齐优于现有后处理方案
- 生成的 alpha 通道可直接用于 VFX 特效合成（如烟雾、反射等透明元素），无需后期抠像
- 保留原 RGB 模型在非透明场景下的全部生成质量，未因 alpha 通道引入而退化

### 方法归类
- **范式**: RGBA Video Generation
- **关键技术**: Diffusion Transformer (DiT), LoRA Fine-Tuning, Alpha-Specific Token, Cross-Channel Attention
- **适用场景**: 视觉特效制作、交互式内容创作、广告与教育视频合成、烟雾/反射等透明元素生成
