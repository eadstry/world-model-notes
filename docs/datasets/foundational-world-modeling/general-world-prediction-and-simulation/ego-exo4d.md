---
title: "Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives"
design: "Ego-Exo4D"
arxiv: https://arxiv.org/abs/2311.18259
website: https://ego-exo4d-data.org/
---

# Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives

::: info 论文信息
- **Design**: Ego-Exo4D
- **论文全称**: Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives
- **arXiv**: [https://arxiv.org/abs/2311.18259](https://arxiv.org/abs/2311.18259)
- **Website**: [https://ego-exo4d-data.org/](https://ego-exo4d-data.org/)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: Ego-Exo4D
- **arXiv**: [https://arxiv.org/abs/2311.18259](https://arxiv.org/abs/2311.18259)
- **官网**: [https://ego-exo4d-data.org/](https://ego-exo4d-data.org/)

## 简介

Ego-Exo4D是由Meta AI主导发布的大规模同步第一人称和第三人称视频数据集，专注于理解熟练的人类技能活动。该数据集包含13个城市839名参与者在执行各类技能任务（如篮球、舞蹈、烹饪、修车、攀岩等）时的同步视频记录。每个参与者同时佩戴第一人称头戴相机并被多个第三人称相机从不同角度拍摄，总计约1,400小时的同步多视角视频。

Ego-Exo4D的独特价值在于其同步多视角特性——同一物理事件同时从第一人称（ego）和第三人称（exo）视角记录，提供了一个完整的"活动场"视角。数据集标注了：1) 多视角相机姿态和时间对齐，2) 3D人体姿态关键点，3) 物体位姿和交互，4) 自然语言动作描述。这个数据集使得研究"跨视角技能迁移"成为可能——从第三人称观察中学习并转化为第一人称的执行能力。

对世界模型研究而言，Ego-Exo4D提供了同时从多个视角观察同一物理事件的训练数据，这对于学习视角无关的世界表征和物理规则非常重要。通过观察同一事件在不同视角下的视觉差异，模型可以学会将特定视角的观测抽象为通用的世界状态表征。

## 关键特征

- **数据模态**: 同步第一人称+第三人称RGB视频、多麦克风音频、IMU、3D姿态
- **规模**: 1,400+小时，839参与者，13个城市的技能活动
- **同步多视角**: 每活动同时有1个ego视角+4-5个exo视角
- **标注**: 3D人体姿态、物体位姿、相机姿态、动作描述、技能专家级别
- **技能领域**: 篮球、舞蹈、攀岩、烹饪、自行车维修等CRAFT技能

## 与世界模型的关系

Ego-Exo4D对世界模型研究具有独特的价值。多视角同步视频为学习视角不变的世界表征提供了天然的训练数据——好的世界模型应该能从任意视角理解同一物理过程。这对于机器人和自动驾驶中的世界模型尤为重要，因为这些应用需要在自我中心视角和全局视角之间切换。此外，基于Ego-Exo4D的"跨视角预测"任务（如给定第三人称观察预测第一人称体验）测试了世界模型的视角泛化能力，这是一般化世界智能的重要标志。

## 代表性用途

- 跨视角技能理解: 使用同步ego-exo视频学习视角不变的活动表征
- 3D人体姿态估计: 多视角数据提供精确的3D标注
- 技能评估: 基于专业级标注评估动作执行质量
- Ego-Exo视频翻译: 将第三人称视频转化为第一人称体验
- 多视角世界模型训练: 利用多视角同步性学习视角无关的物理表征
