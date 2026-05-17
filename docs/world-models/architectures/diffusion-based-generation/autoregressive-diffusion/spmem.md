---
title: "Video World Models with Long-term Spatial Memory"
design: "spmem"
arxiv: https://arxiv.org/abs/2506.05284
website: https://spmem.github.io/
---

# spmem: Video World Models with Long-term Spatial Memory

::: info 论文信息
- **Design**: spmem
- **论文全称**: Video World Models with Long-term Spatial Memory
- **arXiv**: [https://arxiv.org/abs/2506.05284](https://arxiv.org/abs/2506.05284)
- **Website**: [https://spmem.github.io/](https://spmem.github.io/)
:::

## 学习笔记

### 核心思想

spmem 受到人类记忆机制的启发，提出了一种通过几何引导的长期空间记忆来增强视频世界模型长时一致性的新框架。现有的自回归视频世界模型受限于有限的时序上下文窗口大小，在场景重访时经常出现严重的内容遗忘——之前生成的场景在再次回到同一位置时面目全非。spmem 的核心思路是：构建一个显式的长期空间记忆模块，以 3D 几何为基础存储和检索已生成场景的信息。当生成过程回到之前访问过的空间位置时，模型从空间记忆中检索相应的场景信息作为条件，从而维持场景重访时的一致性。研究工作还专门策划了用于训练和评估具有显式 3D 记忆机制的世界模型的数据集。
### 技术架。
**Vision Encoding（视觉编码）**：spmem 基于视频扩散模型的自回归生成框架，在标准视觉编码之外增加了一个空间记忆编码器。每当生成新的帧时，模型将当前帧的视觉特征与其对应的 3D 空间坐标（来自相机位姿和深度估计）绑定，写入长期空间记忆存储器。记忆存储采用结构化代3D 表示（如点云或体素），以空间位置为索引。
**Knowledge Learning（知识学习）**：spmem 的训练数据专门包含重访轨迹（revisit trajectories）——即在场景中绕圈回到之前位置的动作序列。这使模型学会在重访时从空间记忆中检索信息来维持一致性。训练时，对于每个新帧的生成，模型从空间记忆中基于当前相机位姿查询邻近位置的已存储特征，将其作为额外的条件输入到视频扩散模型中。模型学习如何融合记忆检索的特征与当前视觉上下文。
**Controllable Simulation（可控仿真）**：spmem 支持交互式世界探索——用户通过控制相机移动来浏览 3D 场景。当相机回到之前的位置时，空间记忆确保生成的视图与先前的场景内容一致。相比仅依赖隐式时序上下文的基线方法，spmem 在场景重访一致性上表现出显著优势，视频时间跨度也更长。
### 代码实现要点

- **3D 空间记忆**：以 3D 点云或稀疏体素形式存储逐帧视觉特征，以空间坐标索引
- **记忆读写**：写入时根据深度估计的2D 特征投影在3D 空间；读取时根据当前相机位姿进行 KNN 查询
- **记忆条件融合**：检索到的记忆特征通过交叉注意力或特征拼接注入扩散 UNet
- **数据集*：策划包含重访轨迹的专门训练数据

### 关键创新。
- **几何引导的长期空间记数*：受人类记忆机制启发，以 3D 空间坐标显式存储场景记忆
- **显式记忆读写机制**：通过 3D 投影存储 + 相机位姿查询检索，实现可解释的空间记忆管理
- **重访一致性*：解决了现有视频世界模型在场景重访时内容遗忘的关键问题- **专用数据集*：构建了具有重访轨迹的评估数据集

### 代表性结。
- 在场景重访一致性上显著优于依赖隐式时序上下文的基线方法
- 生成视频的时序长度和空间一致性均超过现有方法
- 项目主页: https://spmem.github.io/


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
