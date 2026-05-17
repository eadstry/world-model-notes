---
title: "Structure and Content-Guided Video Synthesis with Diffusion Models"
arxiv: https://arxiv.org/abs/2302.03011
github: https://github.com/kyegomez/Gen1
website: https://runwayml.com/research/gen-1
venue: ICCV
year: 2023
---

# Structure and Content-Guided Video Synthesis with Diffusion Models

::: info 论文信息
- **Venue**: ICCV (2023)
- **arXiv**: [https://arxiv.org/abs/2302.03011](https://arxiv.org/abs/2302.03011)
- **GitHub**: [https://github.com/kyegomez/Gen1](https://github.com/kyegomez/Gen1)
- **Website**: [https://runwayml.com/research/gen-1](https://runwayml.com/research/gen-1)
:::

## 学习笔记

### 核心贡献
- 提出结构与内容引导的视频扩散模型（Runway Gen-1），支持通过文本或图像描述编辑视频内容同时保留原始结构。
- 发现用户提供的内容编辑与结构表示之间存在纠缠问题，并提出通过训练具有不同细节层次的单目深度估计来控制结构与内容的保真度。
- 提出一种新的引导方法，在图像和视频联合训练下显式控制时间一致性。

### 方法细节
- 模型基于潜在扩散模型（LDM）架构，以深度估计作为结构条件、CLIP 嵌入作为内容条件进行条件生成。
- 训练时使用不同程度的深度细节（从稀疏边缘到完整深度图）作为结构输入，实现结构保真度的连续控制。
- 通过新颖的引导采样策略，在推理时调节时间一致性强度，避免逐帧独立编辑带来的闪烁伪影。

### 关键发现
- 深度图中细节层次的改变可以平滑调节视频的"结构保留"与"内容自由度"之间的权衡。
- 在图像和视频上的联合训练使得模型同时具备单帧编辑能力和跨帧一致性，无需针对每个输入重新训练。
- 用户偏好实验表明，该方法在保持结构的同时实现内容编辑，显著优于基于逐帧传播的基线方法。

### 方法归类
- **范式**: 条件潜在扩散模型（Conditional LDM），基于深度结构引导的视频编辑
- **关键技术**: 单目深度估计（MonoDepth）作为结构条件，CLIP 文本/图像嵌入作为内容条件，引导采样控制时间一致性
- **适用场景**: 视频内容编辑（换风格、换纹理、换背景等），需要保留原始动作和几何结构
