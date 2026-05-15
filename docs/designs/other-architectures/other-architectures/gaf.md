---
title: "GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation"
design: "GAF"
arxiv: https://arxiv.org/abs/2506.14135
---

# GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation

::: info 论文信息
- **Design**: GAF
- **论文全称**: GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2506.14135](https://arxiv.org/abs/2506.14135)
:::

## 学习笔记

### 核心思想

GAF (Gaussian Action Field) 提出了 V-4D-A（Vision-to-4D-to-Action）框架，为机器人操控任务引入基于 4D 表示的直接动作推理。现有方法遵循 V-A（视觉直接预测动作）或 V-3D-A（通过 3D 中间表示推理动作）范式，但两者在复杂的动态操控场景中都面临动作精度不足的问题。GAF 的核心创新是扩展 3D Gaussian Splatting（3DGS），为其增加可学习的运动属性（motion attributes），使高斯表示从静态 3D 扩展到动态 4D——同时建模场景几何和操控动作的运动。GAF 提供三个相互关联的输出：当前场景重建、未来帧预测、以及通过高斯运动估计的初始动作（init action）。进一步，使用动作-视觉对齐的去噪框架，以 GAF 生成的统一表示（初始动作 + 高斯感知）为条件，精细化输出更精确的终端动作。

### 技术架构

**Vision Encoding（视觉编码）**：GAF 的视觉编码核心是可运动 4D 高斯表示。在标准 3DGS（位置、协方差、颜色、不透明度）的基础上，每个高斯额外学习运动属性——包括速度矢量、运动不确定性和时间依赖性。这些运动属性使高斯表示能够同时编码场景的瞬时外观和随时间的演化趋势。从多视角 RGB-D 输入中，模型通过可微渲染重建当前时刻的 3D 高斯场，同时估计每个高斯体的运动参数。

**Knowledge Learning（知识学习）**：GAF 通过三个相互关联的监督信号进行训练：场景重建（预测的高斯渲染 vs 实际观测）、未来帧预测（预测的未来高斯渲染 vs 实际未来帧）、动作估计（从高斯运动中推导的初始动作 vs 真值动作）。这种多任务学习使模型既理解场景的静态结构，又理解动态演化和操控动作的因果关系。动作-视觉对齐的去噪模块进一步以联合表示为条件进行扩散去噪，生成精细化的操控动作。

**Controllable Simulation（可控仿真）**：GAF 的核心应用是机器人操控——给定当前场景观测，模型同步输出场景重建、未来预测和操控动作建议。V-4D-A 范式相比 V-A 和 V-3D-A 的优势在于：4D 表示同时捕获了空间几何和时间动态，为动作推理提供了更丰富的上下文。在多种操作任务中，GAF 相比 SOTA 方法平均提升 +7.3% 成功率。

### 代码实现要点

- **可运动高斯**：扩展 3DGS，为每个高斯添加运动速度矢量和时序依赖属性
- **三重输出头**：重建头（渲染当前帧）、预测头（渲染未来帧）、动作头（从高斯运动场估计操控动作）
- **动作-视觉对齐去噪**：GAF 的感知和初始动作编码为联合条件，输入扩散策略网络进行动作去噪
- **端到端训练**：重建损失 + 预测损失 + 动作估计损失的联合优化

### 关键创新点

- **V-4D-A 新范式**：超越 V-A 和 V-3D-A，直接基于 4D 表示进行动作推理
- **高斯动作场**：首次将可学习运动属性集成到 3DGS 中，构建 4D 世界模型
- **三重互关联输出**：同时进行场景重建、未来预测和动作推理，相互增强
- **大幅超越 SOTA**：+11.5dB PSNR 重建提升 + +7.3% 操控成功率提升
