---
title: "Video Generators are Robot Policies"
design: "Video Policy"
arxiv: https://arxiv.org/abs/2508.00795
github: https://github.com/cvlab-columbia/videopolicy
---

# Video Policy: Video Generators are Robot Policies

::: info 论文信息
- **Design**: Video Policy
- **论文全称**: Video Generators are Robot Policies
- **arXiv**: [https://arxiv.org/abs/2508.00795](https://arxiv.org/abs/2508.00795)
- **GitHub**: [https://github.com/cvlab-columbia/videopolicy](https://github.com/cvlab-columbia/videopolicy)
:::

## 核心思想

Video-Policy 是提出的用视频生成作为视觉运动策略表示的方法。核心创新是"生成即行动"——将视觉运动策略重新表述为视频生成问题：给定当前观测，生成一个未来视频片段，该视频中机器人"自然"地执行正确的动作。动作信号从生成的视频中通过逆运动学提取。

Video-Policy 的关键贡献是将策略学习从"输出关节角度"转变为"输出操控视频"，利用视频扩散模型强大的生成能力来间接表达复杂的机器人操控行为。这解决了直接输出动作在高维动作空间中的困难。

## 技术架构

**Vision Encoding（视觉编码）**：使用 VAE encoder 压缩当前观测（RGB 或 RGB-D 图像）。

**Knowledge Learning（知识学习）**：Video Diffusion Model 以当前观测为条件，生成包含机器人执行正确动作的未来视频。模型在大量机器人操控视频（如 RoboTurk、RH20T 数据集）上训练。生成的视频通过 robot IK（逆运动学）后处理提取实际的可执行动作。

**Controllable Simulation（可控模拟）**：给定初始帧 + task prompt，生成"展示正确执行"的操控视频 → 提取动作轨迹 → 在真实机器人上执行。

## 代码实现要点

代码开源在 [https://video-policy.github.io](https://video-policy.github.io/)。基于 Stable Video Diffusion + robot IK post-processing。在 RoboTurk、BridgeData 上训练和评估。

## 关键创新点

1. **生成即行动**：视频生成作为策略表示
2. **间接动作表示**：通过生成视频间接表达复杂动作
3. **利用大规模视频数据**：从机器人操控视频学习行为
4. **IK 后处理**：视频到动作的精确转换

## 代表性结果

在多种机器人操控任务（抓取、放置、插拔）中，Video-Policy 通过视频生成间接实现了成功的策略执行。生成的视频能准确展示正确的操控动作，成功率在未见过的物体和场景上表现良好。
