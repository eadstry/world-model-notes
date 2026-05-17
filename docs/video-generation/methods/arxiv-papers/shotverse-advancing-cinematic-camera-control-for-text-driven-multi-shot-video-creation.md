---
title: "ShotVerse: 面向文本驱动多镜头视频创作的电影级相机控制"
source: "arxiv"
arxiv_id: "2603.11421"
tags: ["camera control","multi-shot","video generation","VLM","cinematic","trajectory planning","data-driven"]
status: "已读"
---
## 学习笔记

### 核心贡献

- **Plan-then-Control 框架**：将电影级多镜头相机控制解耦为「规划—控制」两阶段，由 VLM-based Planner 和 Controller 分别负责全局相机轨迹规划和逐帧相机控制，解决了多镜头场景下相机运动的一致性和电影感问题。
- **VLM-based Planner**：利用视觉语言模型的先验知识，从文本描述中推断电影级（cinematic）的、全局对齐的多镜头相机轨迹，实现镜头间的语义连贯与风格统一。
- **数据驱动构建三元组**：通过自动化的多镜头相机标定管线（multi-shot camera calibration pipeline），从现有视频中构建 (Caption, Trajectory, Video) 三元组，解决了高质量相机轨迹标注数据稀缺的问题。
- **ShotVerse-Bench 评估基准**：提出三维度评估基准（三轨评估），涵盖电影美学（cinematic aesthetics）、跨镜头一致性（cross-shot consistency）和轨迹可控性。
- **Camera Adapter Controller**：通过轻量级的相机适配器（Camera Adapter）将 Planner 规划的轨迹注入到视频生成扩散模型中，实现对相机运动的精确控制。

### 方法细节

- **Plan-then-Control 架构**：
  - **Planner 阶段**：输入一段描述多镜头场景的文本（如「推轨镜头 + 上升镜头 + 特写」），VLM Planner 利用空间先验（spatial priors）生成全局对齐的相机轨迹序列，包括每个镜头的相机参数（位置、角度、焦距等）及其过渡方式。
  - **Controller 阶段**：Camera Adapter 接收 Planner 输出的轨迹，将其编码为条件信号注入扩散模型（Video Diffusion Model）的去噪过程，指导视频生成使其遵循规划的相机运动。
- **数据管线**：
  - 提出自动化多镜头相机标定管线，对视频素材进行 Structure-from-Motion (SfM) 重建，提取相机内参和外参轨迹。
  - 利用 VLM 为视频片段生成描述性 Caption，将相机轨迹与文本对齐，形成大规模 (Caption, Trajectory, Video) 三元组训练数据。
- **训练策略**：
  - Planner 在文本-轨迹数据上训练，学习从文本到轨迹的映射。
  - Controller (Camera Adapter) 在轨迹-视频数据上训练，学习条件生成。
  - 整体可端到端微调以实现更优的文本-轨迹-视频对齐。

### 关键发现

- 在 ShotVerse-Bench 三轨评估上取得了最优结果：电影美学得分显著高于无相机控制的基线模型，跨镜头一致性（相邻镜头的运动/光照/风格衔接）优于现有的逐镜头生成方法。
- Plan-then-Control 解耦设计相比端到端的相机控制方法，在长序列多镜头场景中具有更好的可控性和鲁棒性。
- 自动标定管线构建的训练数据质量足以支撑电影级相机控制的学习，无需昂贵的人工标注。
- Camera Adapter 作为轻量注入模块，兼容多种基础视频生成模型（如 DiT-based 架构）。

### 方法归类

- **类别**：可控视频生成 / 相机运动控制
- **技术栈**：Video Diffusion Model + VLM + Camera Adapter + SfM 自动标定
- **与应用的关系**：面向视频创作工具链中的相机控制需求，解决多镜头编辑场景的连续性与电影感，与 MotionCtrl、CameraCtrl 等工作同属可控视频生成方向，但在多镜头全局规划上形成差异化。
