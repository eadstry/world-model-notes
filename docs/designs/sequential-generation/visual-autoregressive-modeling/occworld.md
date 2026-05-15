---
title: "OccWorld"
design: "Video GPT / Visual Autoregressive Model"
arxiv: "https://arxiv.org/abs/2311.16038"
github: "https://github.com/wzzheng/OccWorld"
website: ""
---

# OccWorld

## 论文信息

- **arXiv**: [2311.16038](https://arxiv.org/abs/2311.16038)
- **GitHub**: [https://github.com/wzzheng/OccWorld](https://github.com/wzzheng/OccWorld)
- **发表时间**: 2023年11月
- **作者团队**: 清华大学（Wenzhao Zheng, Jiwen Lu 等）

## 核心思想

OccWorld提出在3D占用（3D Occupancy）空间中学习世界模型，同时预测自车的运动轨迹和周围场景的演变。传统方法通过预测3D检测框的运动来建模场景演变，但这些bbox表示过于粗糙，无法捕获更细粒度的场景信息。OccWorld选择3D占用作为世界模型的表示空间，基于三个原因：(1) 表达力——3D占用能描述场景的细粒度3D结构；(2) 效率——3D占用更经济地获取（如从稀疏LiDAR点云得到）；(3) 通用性——3D占用能同时适配视觉和LiDAR。

这是首个将3D占用作为世界模型核心表示的自动驾驶工作。通过在nuScenes基准上的大量实验，OccWorld证明了3D占用世界模型能有效建模驾驶场景的演变，并在不依赖实例和地图监督的情况下产生有竞争力的规划结果。

## 技术架构

### Vision Encoding
采用基于重建的场景分词器（Scene Tokenizer）将3D占用编码为离散的scene token。3D占用是一个体素化的3D空间表示，每个体素标记为"占用"或"空闲"。编码器通过VQ-VAE范式学习将这些高维3D占用数据压缩为低维离散token序列，同时保留场景的几何和语义信息。

### Knowledge Learning
采用GPT风格的空间-时序生成式Transformer。将场景token（描述周围环境的3D占用）和自车token（描述自车轨迹和状态）统一输入自回归Transformer，通过预测下一个token学习驾驶场景的时空演变规律。模型同时预测未来帧的场景token和未来的自车token，实现联合建模。

### Controllable Simulation
模型根据历史3D占用序列自回归地生成未来的3D占用和自车轨迹。自车token可被视为规划的目标——选择使场景token似然最大化的自车tokens作为最优规划。这使得模型可在不需要实例和地图监督的情况下进行运动规划。

## 代码实现要点

- **开源**: 清华大学开源，github.com/wzzheng/OccWorld
- **核心架构**: 3D占用分词器 + GPT风格时空Transformer
- **数据**: nuScenes数据集
- **评估**: 3D占用预测质量、规划轨迹准确度

## 关键创新点

1. **3D占用世界模型**: 首个以3D占用为核心表示的世界模型
2. **细粒度场景建模**: 超越bbox和分割图的场景表示能力
3. **视觉-LiDAR通用**: 3D占用同时适配两种传感器模态
4. **无监督规划**: 不依赖实例和地图标注的运动规划

## 代表性结果

- nuScenes上有效建模驾驶场景演变
- 无实例/地图监督下实现竞争性规划性能
- 3D占用预测质量优于基于bbox的方法