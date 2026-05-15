---
title: "Aether: Geometric-aware unified world modeling"
design: "Aether"
arxiv: https://arxiv.org/abs/2503.18945
github: https://github.com/InternRobotics/Aether
---

# Aether: Geometric-aware unified world modeling

::: info 论文信息
- **Design**: Aether
- **论文全称**: Aether: Geometric-aware unified world modeling
- **arXiv**: [https://arxiv.org/abs/2503.18945](https://arxiv.org/abs/2503.18945)
- **GitHub**: [https://github.com/InternRobotics/Aether](https://github.com/InternRobotics/Aether)
:::

## 核心思想

Aether 是 ICCV 2025 的优秀论文（Outstanding Paper Award），其核心思想在于统一几何重建与生成式建模——这是实现类人空间推理的关键挑战。Aether 通过任务交织特征学习（task-interleaved feature learning），将三种核心能力联合优化在单一框架中：（1）4D 动态重建，（2）动作条件视频预测，（3）目标条件视觉规划。三个任务共享特征提取骨干，实现知识协同增强。

Aether 最引人注目的特点是其零样本合成到真实泛化能力。模型完全在合成数据上训练（从未见过真实世界数据），但在真实场景中展现出强大的泛化性能。其重建性能甚至可媲美或超越领域专用模型，这证明了 Aether 学习到的是真正通用的几何先验，而非局限于特定训练数据分布。Aether 还创新性地使用相机轨迹作为几何感知的动作空间，将空间推理自然地融入动作条件预测和视觉规划。

## 技术架构

**Vision Encoding（视觉编码）**：Aether 基于视频生成模型架构（CogVideoX 等），输入视频通过编码器压缩到潜在空间。模型使用"raymap"作为几何感知的动作表示——将相机轨迹转换为 6 通道的射线映射（raymap），编码了相机的空间运动信息。Raymap 的分辨率为原图的 1/8（h/8 × w/8），与潜在特征图的空间尺寸对齐。

**Knowledge Learning（知识学习）**：Aether 的核心训练策略是任务交织特征学习（Task-Interleaved Feature Learning）。三个任务——4D 重建、视频预测、视觉规划——共享特征提取模块但有不同的输出头。训练时三个任务交替进行，使得重建任务学习的几何特征可以辅助预测任务的时空推理，预测任务学习的动态特征可以增强规划任务的目标达成能力。这种协同训练在纯合成数据上产生强大的真实世界泛化能力。

**Controllable Simulation（可控模拟）**：Aether 的模拟控制体现为相机轨迹驱动的视频预测和目标图像驱动的视觉规划。用户提供起始图像和 raymap 动作序列，Aether 可以预测相机沿轨迹运动时的未来画面。在视觉规划模式中，用户提供观测图像和目标图像，Aether 自动生成从观测到目标的视觉路径。模型支持 Gradio 在线交互演示，可本地部署或在 Hugging Face 上体验。

## 代码实现要点

Aether 开源了完整的推理代码和模型权重（MIT 许可），运行在 Python 3.10 + A100 80GB GPU：

```bash
git clone https://github.com/OpenRobotLab/Aether.git
cd Aether
conda create -n aether python=3.10
conda activate aether
pip install -r requirements.txt
```

**三种推理模式**：
```bash
# 4D 重建
python scripts/demo.py --task reconstruction --video ./assets/example_videos/moviegen.mp4

# 动作条件视频预测
python scripts/demo.py --task prediction --image ./assets/example_obs/car.png --raymap_action assets/example_raymaps/raymap_forward_right.npy

# 目标条件视觉规划
python scripts/demo.py --task planning --image ./assets/example_obs_goal/01_obs.png --goal ./assets/example_obs_goal/01_goal.png
```

**Raymap 动作生成**：使用 `aether.utils.postprocess_utils.camera_pose_to_raymap()` 将相机轨迹转换为 raymap。

模型主要基于 Accelerate、Diffusers、CogVideoX、CUT3R、MonST3R 等框架构建。

## 关键创新点

1. **几何与生成统一**：首个将几何重建与生成式建模深度统一的世界模型框架
2. **纯合成训练 + 零样本真实泛化**：完全在合成数据训练，却在真实场景中展现出色泛化
3. **任务交织学习**：三种互补任务轮流训练，实现跨任务的特征知识共享
4. **Raymap 动作空间**：用相机轨迹编码几何感知的动作，连接空间推理与条件生成
5. **ICCV 2025 Outstanding Paper**：获得顶级会议的最高评价

## 代表性结果

Aether 在三个任务上展示了统一框架的能力。4D 重建方面，即使在未见过真实数据的情况下，其重建性能可媲美或超越领域专用模型。动作条件视频预测方面，给定单张图像和 raymap 动作序列，可生成沿指定相机轨迹运动的视频。视觉规划方面，能从当前观测平滑过渡到目标图像，展示类人空间推理能力。论文也诚实指出了当前限制：高度动态场景处理不佳、相机位姿估计在部分条件下不够稳定。
