---
title: "CamC2V: Context-aware Controllable Video Generation"
arxiv: https://arxiv.org/abs/2504.06022v2
github: https://github.com/LDenninger/CamC2V
venue: arXiv
year: 2025
---

# CamC2V: Context-aware Controllable Video Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2504.06022v2](https://arxiv.org/abs/2504.06022v2)
- **GitHub**: [https://github.com/LDenninger/CamC2V](https://github.com/LDenninger/CamC2V)
:::

## 学习笔记

### 核心贡献
- 提出 Context-to-Video（C2V）新范式：将多张图像作为上下文条件（context）联合注入视频生成过程，超越传统单图 I2V，从多视角、多细节层面丰富视频的全局语义与局部纹理
- 设计 3D 约束模块（3D Constraints），在 latent 空间中对生成视频施加几何一致性约束，保证多帧间相机运动与场景结构的物理合理性
- 引入 Camera Control 机制，允许用户通过显式相机参数（位姿、轨迹、FOV）控制视频中的视角变化，实现了细粒度的相机动作可控
- 构建 Temporal Awareness 模块，对多张 context 图像之间的时序关系进行建模，使模型理解输入图像间的语义过渡，而非简单拼接
- 在 RealEstate10K 数据集上验证方法，证明 C2V 范式在多条件控制视频生成任务中的有效性与可控性

### 方法细节
- 整体框架基于预训练视频扩散模型（Video LDM），在 latent space 中完成去噪，输入包含多张 context 图像及其对应的相机参数
- Context 编码：每张 context 图像通过 CLIP 图像编码器提取语义特征，相机参数通过傅里叶特征映射编码为高维向量，两者拼接后经 cross-attention 注入 UNet 的每一层
- 3D 约束模块：利用预训练的深度估计网络或 NeRF 对 context 图像提取 3D 结构信息（深度图、点云），以此构建几何损失（如 depth consistency loss）约束生成视频帧间的 3D 几何连贯性
- Camera Control 通过 ControlNet 风格的旁路网络实现：将目标相机轨迹（位姿序列）渲染为光流图，作为额外条件输入扩散模型，指导视频中像素的逐帧位移
- Temporal Awareness：引入时序位置编码（temporal positional encoding）与因果注意力掩码（causal attention mask），使模型在生成第 t 帧时仅能关注来自 context 图像及已生成的前序帧的信息

### 关键发现
- C2V 范式相比单图 I2V 在视角变化场景下生成质量提升显著，尤其在包含大幅度相机运动的序列中，多 context 图像能有效填充 occluded 区域的视觉信息（避免产生模糊或伪影）
- 3D 约束模块对场景几何一致性的贡献大于相机轨迹控制的贡献，表明隐式几何约束比显式运动控制更为关键
- 随着 context 图像数量增加，生成质量先快速提升后渐趋饱和（3-5 张为最佳性价比），过多 context 图像会引入矛盾信息导致质量波动

### 方法归类
- **范式**: Context-to-Video / 多条件可控视频生成
- **关键技术**: 多图 Context 注入、3D 几何约束、Camera Control（ControlNet 旁路）、Temporal Awareness（时序位置编码 + 因果注意力）、RealEstate10K 评测
- **适用场景**: 房产/场景漫游视频生成（RealEstate10K）、多视角到视频合成、相机轨迹可控的新视角视频生成、需要精确空间可控的视频内容创作
