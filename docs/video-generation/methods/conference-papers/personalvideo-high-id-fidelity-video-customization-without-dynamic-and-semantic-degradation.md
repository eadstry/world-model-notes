---
title: "PersonalVideo: High ID-Fidelity Video Customization without Dynamic and Semantic Degradation"
arxiv: https://arxiv.org/abs/2411.17048
github: https://github.com/EchoPluto/PersonalVideo?tab=readme-ov-file
website: https://personalvideo.github.io/
venue: ICCV
year: 2025
---

# PersonalVideo: High ID-Fidelity Video Customization without Dynamic and Semantic Degradation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2411.17048](https://arxiv.org/abs/2411.17048)
- **GitHub**: [https://github.com/EchoPluto/PersonalVideo?tab=readme-ov-file](https://github.com/EchoPluto/PersonalVideo?tab=readme-ov-file)
- **Website**: [https://personalvideo.github.io/](https://personalvideo.github.io/)
:::

## 学习笔记

### 核心贡献
- 揭示现有视频身份定制方法中图像重建目标与 T2V 模型分布不匹配导致的调优-推理鸿沟（tuning-inference gap），该鸿沟是动态与语义退化的根本原因。
- 提出 PersonalVideo，首个以混合奖励监督替代图像重建目标的视频身份定制框架，在保持 ID 保真度的同时消除动态与语义退化。

### 方法细节
- **身份一致性奖励**：直接在合成视频上监督身份保持，消除调优-推理鸿沟；无需像 DreamBooth 那样在图像上做重建。
- **语义一致性奖励**：约束生成视频的语义分布与原始 T2V 模型对齐，保留模型的动态生成能力和语义跟随能力。
- **模拟提示增强**：在更多语义场景下监督生成结果以缓解过拟合，使模型在仅有一张参考图时仍具鲁棒性。

### 关键发现
- 非重建式奖励训练有效避免了身份注入过程中运动动态和语义能力的退化，显著优于 DreamBooth、IP-Adapter 等基线。
- 单张参考图即可实现高 ID 保真度的视频定制，验证了奖励训练在数据效率上的优势。

### 方法归类
- **范式**: 基于奖励微调的视频身份定制
- **关键技术**: 身份一致性奖励、语义一致性奖励、模拟提示增强
- **适用场景**: 个性化人物视频生成、虚拟数字人、单图驱动的身份保持视频创作
