---
title: "PhysWorld: From Real Videos to World Models of Deformable Objects via Physics-Aware Demonstration Synthesis"
design: "PhysWorld"
arxiv: https://arxiv.org/abs/2510.21447
github: https://github.com/AlanYoung123/PhysWorld
---

# PhysWorld: From Real Videos to World Models of Deformable Objects via Physics-Aware Demonstration Synthesis

::: info 论文信息
- **Design**: PhysWorld
- **论文全称**: PhysWorld: From Real Videos to World Models of Deformable Objects via Physics-Aware Demonstration Synthesis
- **arXiv**: [https://arxiv.org/abs/2510.21447](https://arxiv.org/abs/2510.21447)
- **GitHub**: [https://github.com/AlanYoung123/PhysWorld](https://github.com/AlanYoung123/PhysWorld)
:::

## 学习笔记

### 核心思想

PhysWorld 是一种从真实视频中学习可变形物体世界模型的框架，核心突破是克服了数据稀缺的挑战。交互式世界模型对机器人、VR 和 AR 至关重要，但学习物理一致的可变形物体动态模型需要大量高质量交互数据，而从有限真实视频中学习尤为困难。PhysWorld 的创新思路是：先利用物理模拟器合成物理合理且多样化的演示数据来训练高效世界模型。具体三步骤：(1) 通过本构模型选择（constitutive model selection）和全局-局部物理属性优化构建真实物体的物理一致数字孪生（digital twin）；(2) 对物理属性施加零件感知扰动（part-aware perturbations），生成多种运动模式，合成大量多样化演示；(3) 使用这些演示训练嵌入物理属性的轻量级 GNN 世界模型。真实视频可进一步微调物理属性。PhysWorld 的推理速度比 PhysTwin 快 47 倍，同时保持竞争力性能。

### 技术架构

**Vision Encoding（视觉编码）**：PhysWorld 不直接从原始视频像素学习，而是通过仿真-真实桥接方式——在 MPM（Material Point Method）模拟器中构建数字孪生。数字孪生是物体在物理模拟器中的精确表示，通过全局（整体物理参数如弹性模量）到局部（每个质点或区域的不同参数）的优化确定。物理属性嵌入 GNN 世界模型将物体状态编码为图结构，节点表示质点或关键点，边表示物理连接。

**Knowledge Learning（知识学习）**：GNN 世界模型在合成演示数据上训练——这些演示来自对数字孪生施加多样化扰动后模拟生成的运动序列。GNN 的节点和边嵌入了物理属性（质量、刚度、阻尼等），使其推理具有物理感知性。最重要地，真实视频可用于微调/校正物理属性，弥合仿真与真实的 domain gap。

**Controllable Simulation（可控仿真）**：PhysWorld 可以预测可变形物体（如布料、绳索、软体）在不同交互力下的未来运动状态。相比 PhysTwin（先前 SOTA），PhysWorld 保持竞争力预测精度的同时实现 47× 推理加速。这对需要实时物理仿真的机器人控制和 VR/AR 应用至关重要。

### 代码实现要点

- **MPM 数字孪生**：在 Material Point Method 模拟器中构建物理一致的数字孪生
- **物理属性 GNN**：图神经网络编码每个节点/边的物理属性
- **零件感知扰动**：基于物体分部位施加多样化物理属性扰动，生成丰富演示
- **仿真-真实桥接**：真实视频用于微调物理属性

### 关键创新点

- **仿真驱动少样本学习**：利用模拟器合成数据克服真实交互数据稀缺
- **物理感知 GNN 世界模型**：节点和边嵌入物理属性，推理具有物理意义
- **47× 推理加速**：相比 PhysTwin 实现大幅速度提升
- **可变形物体世界模型**：解决布料、绳索等非刚性物体的物理一致仿真
