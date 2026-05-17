---
title: "Any-to-Bokeh: Arbitrary-Subject Video Refocusing with Video Diffusion Model"
arxiv: https://arxiv.org/abs/2505.21593
github: ""
website: https://bwgzk-keke.github.io/DiffPhy/
venue: ICLR
year: 2026
---

# Any-to-Bokeh: Arbitrary-Subject Video Refocusing with Video Diffusion Model

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2505.21593](https://arxiv.org/abs/2505.21593)
- **Website**: [https://bwgzk-keke.github.io/DiffPhy/](https://bwgzk-keke.github.io/DiffPhy/)
:::

## 学习笔记

### 核心贡献
- 首次提出面向视频散景渲染的专用扩散框架 Any-to-Bokeh，填补了扩散模型在视频散景（bokeh）生成领域的空白
- 实现单步扩散推理（one-step diffusion），在保证散景质量的同时大幅提升视频处理的效率
- 采用多平面图像（Multi-Plane Image, MPI）表示适配焦平面，以此作为条件注入视频扩散模型，充分利用预训练骨干网络的 3D 先验
- 提出渐进式训练策略，逐步提升模型在时序稳定性、深度鲁棒性和细节保留方面的表现

### 方法细节
- 以预训练视频扩散模型为骨干，将 MPI 表示作为空间-深度条件输入，控制不同深度平面的模糊强度和模糊形态
- MPI 表示将场景按深度分层投影到多个平面上，根据焦平面位置调节各层模糊半径，生成符合物理光学规律的条件信号
- 单步扩散：在训练时通过知识蒸馏或一致性模型思想，使模型能从噪声状态一步生成高质量散景视频帧
- 渐进式训练分为多个阶段：先在大规模合成数据上学习散景物理模型；再在真实数据上微调以提升细节保真度；最后引入时序一致性约束以消除帧间闪烁
- 给定输入视频和任意目标焦平面参数，模型可灵活调整聚焦主体和背景虚化强度

### 关键发现
- MPI 表示能够有效编码场景深度信息，为视频扩散模型提供精确的 3D 几何先验，使生成的散景效果在物理上更加合理
- 渐进式训练策略是解决视频散景时序闪烁和模糊过渡不一致问题的关键设计
- 单步推理框架在计算开销大幅降低的前提下，达到了与多步扩散相媲美的散景渲染质量

### 方法归类
- **范式**: 条件视频扩散模型，单步扩散推理，基于物理的相机效果模拟
- **关键技术**: 多平面图像（MPI）表示、深度感知条件注入、渐进式训练、单步扩散（one-step diffusion）、时序一致性
- **适用场景**: 视频散景渲染、动态景深编辑、计算摄影、影视后期虚化效果生成
