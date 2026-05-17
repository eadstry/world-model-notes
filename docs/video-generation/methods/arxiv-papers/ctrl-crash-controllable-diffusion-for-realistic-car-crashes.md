---
title: "Ctrl-Crash: Controllable Diffusion for Realistic Car Crashes"
arxiv: https://arxiv.org/abs/2506.00227v1
github: https://github.com/AnthonyGosselin/Ctrl-Crash
website: https://anthonygosselin.github.io/Ctrl-Crash-ProjectPage/
venue: arXiv
year: 2025
---

# Ctrl-Crash: Controllable Diffusion for Realistic Car Crashes

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2506.00227v1](https://arxiv.org/abs/2506.00227v1)
- **GitHub**: [https://github.com/AnthonyGosselin/Ctrl-Crash](https://github.com/AnthonyGosselin/Ctrl-Crash)
- **Website**: [https://anthonygosselin.github.io/Ctrl-Crash-ProjectPage/](https://anthonygosselin.github.io/Ctrl-Crash-ProjectPage/)
:::

## 学习笔记

### 核心贡献

Ctrl-Crash 聚焦于**稀缺事件的可控视频生成**——交通事故视频在驾驶数据集中天然稀疏，导致现有扩散模型难以生成逼真的碰撞画面。本文的核心贡献在于：（1）提出首个面向**车辆碰撞场景的可控扩散模型**，接受边界框（Bounding Box）、碰撞类型（Crash Type）和初始帧三种异构条件信号，生成具有物理真实感的碰撞视频；（2）引入**独立可调的分类器自由引导（Classifier-Free Guidance, CFG）**机制，为每种条件信号分配独立的引导尺度，在推理时实现对碰撞类型、车辆轨迹和场景布局的**精细粒度解耦控制**；（3）支持**反事实场景生成（Counterfactual Scenario Generation）**——对输入条件的微小扰动（如偏移边界框位置）可产生显著不同的碰撞结果，从而拓展了安全性测试与仿真中的数据多样性边界。

### 方法细节

整体架构基于**视频扩散模型（Video Diffusion Model）**，在预训练的文本-视频扩散骨干上融入多模态条件注入模块：

1. **多条件编码**：初始帧通过预训练 VAE 编码为潜在表示，作为时空去噪过程的锚点；碰撞类型通过可学习的嵌入层映射为条件向量；边界框序列编码为时空热力图（Gaussian Heatmap），在空间维度上标注车辆位置，在时间维度上对齐视频帧序列。

2. **条件注入方式**：边界框热力图和碰撞类型嵌入通过交叉注意力（Cross-Attention）和特征拼接（Concatenation）注入到扩散 UNet 的多个分辨率层级。初始帧潜在表示在输入端与噪声潜在变量进行通道维拼接。

3. **独立可调 CFG**：训练阶段随机丢弃部分条件信号（Dropout），使模型学习不同条件组合下的条件分布。推理阶段，对每种条件信号 $c_i$ 计算独立的条件/无条件分数差异，加权求和：

   $$ \hat{\epsilon}_\theta(z_t, c) = \epsilon_\theta(z_t, \emptyset) + \sum_i w_i \cdot (\epsilon_\theta(z_t, c_i) - \epsilon_\theta(z_t, \emptyset)) $$

   其中 $w_i$ 为每种条件的独立引导强度，用户可分别调节以控制碰撞类型忠实度 $w_{\text{crash}}$、空间位置精确度 $w_{\text{bbox}}$ 和视觉一致性 $w_{\text{frame}}$。

4. **训练数据**：由于公开碰撞视频数据匮乏，作者在合成驾驶模拟器数据上训练，并通过域适应策略迁移到真实场景。

### 关键发现

- **定量指标**：在 FVD（Fréchet Video Distance）和 JEDi（一种评估生成视频与条件一致性的指标）上达到 SOTA，显著优于 DriveDreamer 等基线方法。
- **人类评估**：物理真实性（Physical Realism）和视频质量（Video Quality）的 A/B 测试均优于此前扩散方法，尤其在大变形、遮挡复杂的碰撞场景中优势显著。
- **CFG 解耦有效**：独立调节不同条件信号的引导尺度能灵活控制视频输出——增大 $w_{\text{bbox}}$ 使车辆轨迹更精确但可能降低自然度，增大 $w_{\text{frame}}$ 提升单帧质量但可能削弱运动一致性，用户可根据应用需求进行权衡。
- **反事实生成能力**：通过微调边界框初始位置，可生成从轻微刮擦到严重碰撞的一系列连续变化结果，为自动驾驶安全性测试提供多样化仿真数据。

### 方法归类

- **所属范式**：可控视频扩散（Controllable Video Diffusion），属于**条件扩散模型**在视频生成领域的扩展。
- **技术路线**：基于预训练视频扩散骨干 + 多模态条件注入 + 独立可调 CFG，属于**即插即用适配器（Adapter）式**可控生成。
- **相关方法**：与 ControlNet 系列（空间控制）、AnimateDiff（运动控制）、DriveDreamer（驾驶场景生成）共享技术基因，但独特之处在于处理**稀缺事件（长尾场景）**的可控生成问题。
- **应用领域**：自动驾驶仿真与安全性测试、交通事故重建、数据增强。
