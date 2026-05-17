---
title: "CtrlVDiff: Controllable Video Generation via Unified Multimodal Video Diffusion"
arxiv: https://arxiv.org/abs/2511.21129v1
github: https://github.com/Tele-AI/CtrlVDiff
website: https://tele-ai.github.io/CtrlVDiff/
venue: arXiv
year: 2025
---

# CtrlVDiff: Controllable Video Generation via Unified Multimodal Video Diffusion

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2511.21129v1](https://arxiv.org/abs/2511.21129v1)
- **GitHub**: [https://github.com/Tele-AI/CtrlVDiff](https://github.com/Tele-AI/CtrlVDiff)
- **Website**: [https://tele-ai.github.io/CtrlVDiff/](https://tele-ai.github.io/CtrlVDiff/)
:::

## 学习笔记

### 核心贡献

CtrlVDiff 瞄准一个根本性矛盾：**纯几何线索（深度、边缘）不足以约束外观、材质与光照**，导致重光照、材质替换等物理编辑难以实现，且易产生时序漂移。本文做出三方面贡献：（1）提出**统一多模态视频扩散框架（Unified Multimodal Video Diffusion）**，同时消化深度（Depth）、法线（Normals）、语义分割（Segmentation）、边缘（Edges）以及图形学内蕴属性——反照率（Albedo）、粗糙度（Roughness）、金属度（Metallic）共 7 种异构模态，实现对视频生成的全方位控制；（2）设计**混合模态控制策略（Hybrid Modality Control Strategy, HMCS）**，使模型能够接受任意模态子集作为控制信号，在部分模态缺失时保持鲁棒，且不损失时序一致性——这解决了多模态条件注入中"架构需灵活、融合需稳定"的工程难题；（3）构建**MMVideo 数据集**——将真实视频与合成渲染视频对齐，为每帧提供像素级多模态标注与文本描述，填补了训练所需的时序对齐监督信号空白。最终实现图层级编辑能力：独立调节光照、材质、插入物体等。

### 方法细节

CtrlVDiff 以预训练视频扩散模型（Video LDM）为骨干，核心在于 HMCS 的多模态路由与融合架构：

1. **多模态编码**：每种控制模态 $\mathbf{m}_k$（共 $K=7$ 种）先经过一个共享的轻量编码器提取特征，再通过**模态特定路由器（Modality-Specific Router）**投影到统一特征空间。具体地，深度/法线/边缘等几何模态用浅层 CNN 编码，语义分割经可学习嵌入表映射，内蕴属性（Albedo/Roughness/Metallic）则拼接后共用编码通路。

2. **HMCS 核心机制**：
   - **可用性掩码（Availability Mask）**：训练时对每个样本随机丢弃模态子集，生成二值掩码 $\mathbf{A} \in \{0,1\}^K$ 指示当前可用的模态。测试时缺失模态对应掩码位置为 0。
   - **自适应融合（Adaptive Fusion）**：对各模态特征加权求和，权重由一个小型门控网络（Gating Network）根据可用性掩码动态生成。门控网络本质上是 $K$ 个标量权重的 softmax，保证模态贡献随可用性自适应分配。
   - **时空注入（Spatiotemporal Injection）**：融合后的控制特征通过零卷积（Zero-Convolution）层逐分辨率注入扩散 UNet 的编码器-解码器跳跃连接（Skip Connections），遵循 ControlNet 范式避免从头训练。

3. **训练策略**：两阶段训练——第一阶段在 MMVideo 合成子集上以所有模态全量训练，稳定初步表示；第二阶段引入随机模态丢弃（Dropout rate $\sim 0.3$），在 MMVideo 全量（真实 + 合成）上联合训练，使模型习得对缺失模态的鲁棒性。

4. **MMVideo 数据集构建**：利用图形渲染管线（Blender/Unreal Engine）渲染合成视频，同步输出 7 种逐像素标注；同时使用现有多模态估计模型（如 DPT、SAM、Intrinsic Image Decomposition）对真实视频片段提取伪标注。合成与真实数据按帧级对齐，统一为相同分辨率和帧率。

### 关键发现

- **多模态互补性**：实验验证了纯几何模态（深度 + 边缘）的组合在视频理解与生成可控性上显著弱于加入图形学内蕴模态（Albedo + Roughness + Metallic）。后者的加入使得重光照和材质编辑成为可能，且大幅减少了时序闪烁（Temporal Flickering）。
- **HMCS 鲁棒性**：在随机屏蔽 1\~4 种模态的情况下，HMCS 的生成质量仅下降 5%\~8%（FVD 增量），而简单的通道拼接或固定权重融合方案下降 15%\~25%，验证了自适应门控路由的有效性。
- **图层级编辑能力**：CtrlVDiff 展现了此前视频扩散方法不具备的细粒度编辑——固定语义分割掩码、仅修改 Albedo 通道即可实现材质替换（如将木质桌面改为金属）；固定材质、仅修改光照通道即可实现重光照效果，且编辑后视频保持时序一致性。
- **SOTA 对比**：在视频理解（语义分割精度、深度估计误差）和生成质量（FVD、CLIP Score、Temporal Consistency）两类基准上全面超越 AnimateDiff+ControlNet、VideoComposer 等基线。

### 方法归类

- **所属范式**：统一多模态可控视频扩散（Unified Multimodal Controllable Video Diffusion），属于**条件注入式扩散模型**。
- **技术路线**：ControlNet 范式的多模态扩展 + 自适应门控路由 + 混合真实/合成数据训练，属于**图生视频（Image-to-Video）可控生成**的进阶方向。
- **相关方法**：继承自 ControlNet（空间控制）、AnimateDiff（运动先验）、VideoComposer（多条件组合），但突破了"几何即控制上限"的认知——首次将图形学内蕴属性（PBR 材质参数）作为扩散控制信号，打开了**基于物理的视觉编辑（Physically-Based Editing）**在视频扩散模型中的应用空间。
- **应用领域**：影视后期特效与材质编辑、虚拟场景光照重打光、自动驾驶场景增强与数据生成、VR/AR 内容创作。
