---
title: "LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences"
design: "LiDARCrafter"
arxiv: https://arxiv.org/abs/2508.03692
github: https://github.com/worldbench/lidarcrafter
---

# LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences

::: info 论文信息
- **Design**: LiDARCrafter
- **论文全称**: LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences
- **arXiv**: [https://arxiv.org/abs/2508.03692](https://arxiv.org/abs/2508.03692)
- **GitHub**: [https://github.com/worldbench/lidarcrafter](https://github.com/worldbench/lidarcrafter)
:::

## 学习笔记

### 核心思想

LiDARCrafter 是一个统一个4D 激光雷达生成与编辑框架，发表于 AAAI 2026 Oral。现有生成式世界模型在自动驾驶中主要聚焦于视频或占用网格生成，忽视了激光雷达数据的独特特性（稀疏性、精确几何、主动传感器属性）。将激光雷达生成扩展到动作4D 世界建模面临可控性、时序一致性和评估标准化的挑战。LiDARCrafter 通过以下方案解决策1) 给定自由形式的自然语言输入，解析为以自我为中心的场景图（ego-centric scene graphs）；(2) 场景图条件驱动一个三支路扩散网络（tri-branch diffusion），分别生成目标结构、运动轨迹和几何形状态3) 自回归模块生成时序连贯的 4D 激光雷达序列。团队还建立了覆盖场景级、目标级和序列级的多维评估基准。
### 技术架。
**Vision Encoding（视觉编码）**：LiDARCrafter 采用三支路扩散架构，分别编码和处理激光雷达点云的三个维度：目标结构（物体形状和类别）、运动轨迹（物体运动路径）和几何形状（场景空间布局）。输入为自然语言描述，通过 LLM 解析为结构化的自我中心场景图，场景图中的节点表示目标及其属性，边表示目标间的空间关系。场景图特征被映射为三个支路的条件信号。
**Knowledge Learning（知识学习）**：三支路扩散网络的NuScenes 数据集上训练，每个支路负责学习激光雷达场景的一个互补维度。目标结构支路学习物体的几何形状和语义类别分布，运动轨迹支路学习动态目标的时序演化模式，几何支路学习整体的场景空间结构。三个支路的输出通过融合模块整合为完整的 4D 点云序列的D 空间 + 1D 时间）。自回归模块额外学习相邻帧间的平滑过渡。
**Controllable Simulation（可控仿真）**：LiDARCrafter 支持通过自然语言实现精细的场景编辑——用户可以指标在左侧增加一辆车"的移除前方的行为等指令，模型通过修改场景的中重新生成对应支路 的融合输出来完成编辑。自回归模块支持连续帧平滑生成。这生LiDARCrafter 成为自动驾驶数据增强和仿真的有力工具。
### 代码实现要点

- **NL 理Scene Graph 解析**：使用LLM 将自然语言指令解析为结构化场景图，节点包含目标类别、位姿、尺寸等
- **三支路扩散*：Tri-branch UNet 架构，每个支路共享基础编码器但有独立的去噪头，分别预测结构/轨迹/几何
- **自回归时序模型*：基于上一帧的 4D 输出生成当前帧，通过隐状态传递维持平滑过的- **评估基准**：WorldBench 集成了场景级（FID 类）、目标级（检测精度）和序列级（时序一致性）三维度指标- **数据集*：基于NuScenes 激光雷达数据训。
### 关键创新。
- **首个激光雷达4D 世界模型**：将生成式世界模型从视觉域扩展到激光雷达域
- **自然语言驱动**：通过 LLM 解析为场景图，支持自由形式的自然语言生成与编辑- **三支路解耦扩散*：将 4D 场景解耦为结构、轨迹、几何三个维度分别建模再融合
- **多维评估基准**：建立覆盖场景目标/序列三级指标的标准化评估体系
- **AAAI 2026 Oral 论文**，代表了激光雷达世界建模的前沿水平

### 代表性结。
- NuScenes 数据集上在保真度、可控性和时序一致性方面全面达到SOTA
- 支持多样化的自然语言驱动场景编辑
- 代码和基准已开源- AAAI 2026 Oral Presentation


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
