---
title: "InstanceV：实例级视频生成"
source: "arxiv"
arxiv_id: "2511.23146"
tags: ["video-generation","instance-level-control","text-to-video","cross-attention","spatial-guidance","benchmark"]
status: "已读"
---
## 学习笔记

### 核心贡献

1. 提出 **InstanceV**，首次实现文本到视频生成中的**实例级细粒度控制**：用户可分别指定视频中不同实例（物体/人物）的文本描述、空间位置和运动轨迹。
2. 提出三项核心技术创新：
   - **Instance-aware Masked Cross-Attention**（实例感知掩码交叉注意力）：将不同实例的文本条件分别注入对应空间区域，实现实例级定位（grounding）。
   - **Shared Timestep-Adaptive Prompt Enhancement**（共享时间步自适应提示增强）：构建全局—局部语义连接，避免实例独立控制导致的场景割裂。
   - **Spatially-Aware Unconditional Guidance**（空间感知无条件引导）：防止小实例在扩散过程中被大区域“淹没”而消失。
3. 构建 **InstanceBench** 评估基准，包含多样化的实例级视频生成测试用例和自动化评价指标。

### 方法细节

- **整体架构**：基于 Latent Diffusion Model 的文本到视频生成框架，在 3D U-Net 或 DiT 架构上扩展实例控制模块。
- **Instance-aware Masked Cross-Attention**：
  - 为每个实例分配独立的文本 token 序列，生成对应的交叉注意力图。
  - 利用实例的空间掩码（bounding box 或 segmentation mask）对交叉注意力进行空间约束：$A_i = \text{Mask}_i \odot \text{Softmax}(Q K_i^T / \sqrt{d})$。
  - 背景区域保留全局文本条件的交叉注意力。
  - 将实例 token 与全局 token 的注意力输出按掩码加权融合，使每个空间位置仅受其所属实例的条件控制。
- **Shared Timestep-Adaptive Prompt Enhancement**：
  - 设计一个共享的提示增强网络，将实例级提示（local）与全局场景描述（global）进行语义融合。
  - 增强权重随时间步 $t$ 自适应调整：在早期噪声步中倾向全局语义，后期去噪步中增强实例细节。
  - 形式化：$c_{\text{enhanced}} = \alpha(t) \cdot c_{\text{global}} + (1 - \alpha(t)) \cdot \Phi(c_{\text{local}}, c_{\text{global}})$，其中 $\Phi$ 为交叉注意力融合模块。
- **Spatially-Aware Unconditional Guidance**：
  - 标准 CFG 对所有区域施加相同的无条件引导强度，导致小面积实例在引导中被抑制。
  - 提出空间自适应 CFG：$\tilde{\epsilon} = \epsilon_{\text{uncond}} + w(x) \cdot (\epsilon_{\text{cond}} - \epsilon_{\text{uncond}})$，其中 $w(x)$ 在实例区域取值更高。
  - $w(x)$ 由实例掩码的尺度感知加权得到，小实例区域获得更大的引导强度。
- **InstanceBench**：
  - 包含多实例、多属性、多空间配置的测试用例。
  - 评价维度：实例定位精度（IoU, grounding accuracy）、属性绑定正确率（attribute binding）、运动质量（FVD, motion consistency）。

### 关键发现

- 相比现有 T2V 模型（如 VideoCrafter、ModelScope T2V 等），InstanceV 在保持整体视频质量的同时，实现了显著更优的实例级控制能力。
- 消融实验表明三项技术各有独立贡献：Masked Cross-Attention 提升定位精度（+18% IoU），Prompt Enhancement 改善全局一致性（+12% CLIP score），Spatial Guidance 减少小实例消失率（-40%）。
- 小实例消失是 T2V 模型的普遍问题，Spatially-Aware Unconditional Guidance 提供了一个轻量级的通用解决方案，可嵌入任何 CFG 管道。
- Shared Timestep-Adaptive Prompt Enhancement 比简单的 prompt concatenation 更有效地桥接了实例级和全局语义。

### 方法归类

- **类别**：可控视频生成 / 文本到视频生成 / 空间控制
- **技术关键词**：实例级控制、掩码交叉注意力、空间自适应引导、提示增强、时间步自适应
- **相似方法**：GLIGEN（图像 grounding）、Layout2V（布局驱动视频生成）、VideoComposer（多条件视频生成）、Peekaboo（实例级图像生成）
- **本质差异**：首次将 layout-to-image 的实例级控制范式扩展到视频域，并通过 Space-Aware CFG 解决了视频特有的小实例消失问题。
