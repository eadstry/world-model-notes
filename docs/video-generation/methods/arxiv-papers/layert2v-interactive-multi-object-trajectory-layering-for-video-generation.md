---
title: "LayerT2V：统一多层视频生成框架"
source: "arxiv"
arxiv_id: "2508.04228"
tags: ["Text-to-Video","Layered Representation","Alpha Matte","Video Decomposition","Diffusion Model"]
status: "已读"
---
## 学习笔记
### 核心贡献
- 提出 LayerT2V，首次实现单次推理同时输出完整视频、独立背景层及多个带 alpha 遮罩的前景 RGB 图层，所有输出语义一致且可独立编辑。
- 核心洞察：现代视频 backbone 的高时空压缩率使得沿时间维度序列化多个图层表示成为可能，无需额外网络分支。
- 提出 LayerAdaLN（Layer-Adaptive Layer Normalization）和层感知交叉注意力调制（Layer-Aware Cross-Attention Modulation），为不同图层注入可区分的条件信号。
- 构建 VidLayer，首个面向多层视频生成的大规模数据集，包含前景-背景分层标注及 alpha matte 真值。
### 方法细节
- **图层序列化策略**：利用视频 VAE 的高压缩率（如 4x8x8），将背景、前景1+alpha、前景2+alpha 等多层表示沿时间轴拼接为单一 latent 序列，送入 Diffusion Transformer 进行联合去噪。
- **LayerAdaLN**：在 DiT 的 AdaLN 层中引入 layer-specific 的 scale/shift 参数，使不同帧位置（对应不同图层）获得差异化归一化，本质是将图层身份编码为时间步上的位置嵌入。
- **层感知交叉注意力**：在交叉注意力中为每个图层附加可学习的 layer embedding，让模型区分「当前 token 属于背景/前景/alpha」并通过文本条件引导对应图层的生成。
- **损失函数**：联合去噪损失 + alpha 一致性正则化，确保 RGB 层与 alpha 遮罩的几何对齐。
- **VidLayer 数据集**：从视频分割、抠图、合成等多源数据构建，提供逐帧的前景-背景分层真值，支持训练和评估。
### 关键发现
- 单次推理即可获得多图层输出，无需多次前向或后处理，推理开销接近标准 T2V。
- 前景图层的 alpha 遮罩质量显著优于先分割后抠图的 pipeline 方法，边缘细节更自然。
- LayerAdaLN 和层感知交叉注意力是方法有效的关键消融组件，去掉后各图层间出现语义混淆。
- VidLayer 数据集训练后，模型在未见域上展示出一定的泛化能力。
### 方法归类
- **任务**：Text-to-Video，视频图层分解
- **架构**：Diffusion Transformer (DiT) + 时序图层序列化
- **关键技术**：LayerAdaLN、层感知交叉注意力、alpha matte 联合生成
- **训练策略**：基于 VidLayer 数据集的监督训练，联合去噪 + alpha 正则化
- **推理特点**：单阶段、单次前向，图层数可配置
