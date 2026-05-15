---
title: "Neural volumetric world models for autonomous driving"
design: "NeMo"
website: https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf
---

# NeMo: Neural volumetric world models for autonomous driving

::: info 论文信息
- **Design**: NeMo
- **论文全称**: Neural volumetric world models for autonomous driving
- **Website**: [https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf)
:::

## 学习笔记

### 核心思想

NeMo (Neural Volumetric World Models) 是一种基于体积表示（volumetric representation）的端到端自动驾驶学习方法，发表于 ECCV 2024。现有自动驾驶感知和规划方法主要依赖 2D BEV 空间表示，在真实 3D 世界中面对遮挡、部分可观测、细微运动和不同地形时，难以充分建模运动特性和决策。NeMo 的核心洞察是：BEV 将 3D 信息压缩到 2D 平面，丢失了高度维度的重要信息——例如不同地形高度和物体的立体结构。NeMo 提出基于 3D 体素表示的世界模型，可通过自监督方式训练于图像重建和占用预测任务，从而学到更精确的 4D 体积表示。Motion Flow 模块和 Temporal Attention 模块进一步增强了对动态场景的建模和预测信息在规划中的集成。

### 技术架构

**Vision Encoding（视觉编码）**：NeMo 从多视图图像中构建 3D 体积表示（3D 体素网格），保留完整的空间几何信息。与 BEV 不同，体素网格保留了高度维度的信息，使模型能够感知路面坡度、物体高度和立体遮挡等 3D 特性。体积编码器通过 Lift-Splat-Shoot 或可微体积渲染等方式将 2D 图像特征提升到 3D 空间。

**Knowledge Learning（知识学习）**：NeMo 通过两个自监督任务学习：(1) 图像重建——将体积表示渲染回 2D 图像并与原始输入对比，迫使体积表示保留丰富的视觉信息；(2) 占用预测——预测 3D 空间中的占据状态，提供几何监督。Motion Flow 模块显式估计场景中点的 3D 运动场，额外提供时序一致性监督。Temporal Attention 模块在前向规划时融合预测的未来体积特征，使规划决策对未来场景演化有预见性。

**Controllable Simulation（可控仿真）**：NeMo 作为端到端 sensorimotor 智能体——从原始传感器输入直接输出规划动作。在 NuScenes 和 CARLA 基准上，NeMo 实现了超越先前基线方法超过 18% 的 L2 误差降低。基于自监督学习的体积世界模型使 NeMo 能够在大规模无标注数据上预训练，再通过模仿学习微调部署。

### 代码实现要点

- **3D 体素表示**：使用 3D 体素网格而非 2D BEV，保留高度维度信息
- **Motion Flow 模块**：预测 3D 场景流，建模动态物体的运动场
- **Temporal Attention**：在规划中融合未来体积特征，增强预测性规划
- **自监督双任务**：图像重建 + 占用预测的联合训练
- **数据集**：NuScenes 和 CARLA

### 关键创新点

- **3D 体积世界模型**：从 BEV 升级到全 3D 体素，保留高度维度结构信息
- **Motion Flow 场景流**：显式 3D 运动场建模复杂动态场景
- **预测性规划**：Temporal Attention 融合未来体积预测辅助决策
- **自监督 + 模仿学习**：可扩展的训练范式
- **NL_2 误差降低 >18%**
