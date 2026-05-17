---
title: "Generalized Predictive Model for Autonomous Driving"
design: "GenAD"
arxiv: https://arxiv.org/abs/2403.09630
github: https://github.com/OpenDriveLab/DriveAGI
---

# GenAD: Generalized Predictive Model for Autonomous Driving

::: info 论文信息
- **Design**: GenAD
- **论文全称**: Generalized Predictive Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2403.09630](https://arxiv.org/abs/2403.09630)
- **GitHub**: [https://github.com/OpenDriveLab/DriveAGI](https://github.com/OpenDriveLab/DriveAGI)
:::

## 核心思想

GenAD（Generalized Autonomous Driving）是自动驾驶领域首个大规模视频预测模型。其核心思想是：自动驾驶世界模型如果仅在小规模、场景受限的数据集上训练，会严重限制其泛化能力。GenAD 从互联网海量驾驶视频中学习，构建了包含超过2000 小时驾驶视频生OpenDV 数据集，覆盖全球 40 多个国家模44 个城市，涵盖多样化的天气条件和交通场景。

GenAD 采用潜在扩散模型（latent diffusion model）作为架构基础，并设计了新颖的时间推理模块（temporal reasoning blocks）来处理驾驶场景中的挑战性动态。模型展示出强大的零样本泛化能力——在从未见过的驾驶数据集上超越了专用视频预测模型和通用视频预测模型的性能。更重要的是，GenAD 可以适配为动作条件预测模型或运动规划器，具备直接应用于实际驾驶场景的潜力。

## 技术架。

**Vision Encoding（视觉编码）**：GenAD 使用潜在扩散模型的VAE 编码器将驾驶视频帧压缩到隐空间。由的OpenDV 数据集的视频来自 YouTube，分辨率和画质参差不齐（多为 1080P），模型首先需要对输入进行统一预处理，包括去重、裁剪和尺寸归一化。预处理后的图像约占用24TB 存储空间。

**Knowledge Learning（知识学习）**：GenAD 的核心知识学习在于其时间推理模块（temporal reasoning blocks）。这些模块被设计用来处理驾驶视频中特有的时间动态——包括自车运动、其他车辆运动、行人和场景光照变化等。与通用视频扩散模型不同，GenAD 的时间模块专门针对驾驶场景的高动态性进行了优化。模型在 OpenDV 数据集上训练，该数据集包含大量多样化驾驶场景，使模型学习到丰富的驾驶先验知识。

**Controllable Simulation（可控模拟）**：GenAD 的突出优势在于其可适配性。基础模型（视频预测模型）训练完成后，可以轻松适配为动作条件预测模型（输入：当前帧+驾驶动作，输出：未来帧）或运动规划器（输入：当前的目标位置，输出：动作序列）。这种灵活性使用GenAD 可以服务于多种下游任务。在零样本设置下，GenAD 可以在未见过的数据集上直接生成高质量的未来驾驶视频。

## 代码实现要点

GenAD iOpenDriveLab DriveAGI 项目的一部分（[https://github.com/OpenDriveLab/DriveAGI](https://github.com/OpenDriveLab/DriveAGI)）。核心资源包括：

**OpenDV 数据集*。
- 完整视频列表：Google Sheets 中约 1700 小时 YouTube 驾驶视频
- OpenDV-mini：官方25 小时子集，便于快速实验（原始视频 44GB，处理后的图像390GB。
- OpenDV-YouTube-Language：语言标注，托管在 HuggingFace

**数据预处理*。
```bash
# 参考opendv/README.md 中的详细步骤
python opendv/download.py  # 下载 YouTube 视频
python opendv/process.py   # 预处理为连续图像。
```

**推理与评估*：项目提供了完整的模型推理和评估代码。

## 关键创新。

1. **首个大规模驾驶视频预测模型*：开创性地从互联网海量驾驶视频中学习，而非仅依赖特定标注数据集
2. **OpenDV 数据收*集700+ 小时的0+ 国家个44+ 城市，是当时最大驾驶视频数据集，比 nuScenes 学300 。
3. **零样本泛化*：在从未见过的驾驶数据集上超越了专用模型的性能
4. **CVPR 2024 Highlight**：获得顶级会议的最高评。
5. **灵活的任务适配**：基础模型可适配为视频预测、动作条件预测和运动规划三种模式
6. **时间推理模块**：专门针对驾驶场景动态设计的 temporal reasoning blocks

## 代表性结。

GenAD 在多个未见过的驾驶数据集上进行了零样本视频预测评估，在视频质量指标上超越在general-purpose 了driving-specific 的视频预测模型。论文展示了 GenAD 能在城市道路、高速公路、乡村道路等多样化场景中生成连贯且逼真的未来画面。作的CVPR 2024 Highlight 论文，GenAD 奠定了大规模互联网驾驶视频学习的基础范式，其 OpenDV 数据集成为后训Vista、Vista-2 等多个世界模型工作的基石。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
