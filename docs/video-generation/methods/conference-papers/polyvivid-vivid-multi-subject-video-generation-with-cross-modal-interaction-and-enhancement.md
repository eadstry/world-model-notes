---
title: "PolyVivid: Vivid Multi-Subject Video Generation with Cross-Modal Interaction and Enhancement"
arxiv: https://arxiv.org/abs/2506.07848v1
website: https://sjtuplayer.github.io/projects/PolyVivid/
venue: NeurIPS
year: 2025
---

# PolyVivid: Vivid Multi-Subject Video Generation with Cross-Modal Interaction and Enhancement

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.07848v1](https://arxiv.org/abs/2506.07848v1)
- **Website**: [https://sjtuplayer.github.io/projects/PolyVivid/](https://sjtuplayer.github.io/projects/PolyVivid/)
:::

## 学习笔记

### 核心贡献
- 提出 PolyVivid，一个多主体视频定制框架，支持灵活且身份一致的视频生成
- 设计 VLLM 文本-图像融合模块以建立主体图像与文本实体间的精确对应，将视觉身份嵌入文本空间实现精准定位
- 提出 3D-RoPE 增强模块实现文本与图像嵌入的结构化双向融合，以及注意力继承注入模块将融合身份特征注入视频生成过程以缓解身份漂移

### 方法细节
- VLLM 模块将视觉身份信息嵌入文本空间，实现多主体在文本语义空间中的精确 grounding
- 3D-RoPE 增强模块利用三维旋转位置编码实现文本嵌入与图像嵌入的结构化双向交互
- 注意力继承注入模块通过继承预训练注意力层的参数，将融合后的身份特征有效地注入去噪 UNet 的交叉注意力层
- MLLM 数据流水线结合 grounding、分割与团簇（clique）主体合并策略，生成高质量多主体训练数据，减少主体混淆

### 关键发现
- PolyVivid 在身份保真度、视频真实感和主体对齐三项指标上均优于现有开源与商业基线
- 高质量多主体配对数据对下游生成效果至关重要，clique 合并策略有效降低了多主体间的语义歧义

### 方法归类
- **范式**: 基于文本-图像联合条件的多主体视频定制生成
- **关键技术**: VLLM 语义 grounding、3D-RoPE 双向交叉注意力、注意力继承注入、MLLM 数据流水线
- **适用场景**: 多主体身份保持的视频生成、个性化视频内容创作
