---
title: "Zero-shot 3D-Aware Trajectory-Guided image-to-video generation via Test-Time Training"
arxiv: "https://arxiv.org/abs/2509.06723"
github: "https://github.com/Richard-Zhang-AI/Zo3T-main"
website: "https://richard-zhang-ai.github.io/"
venue: "arXiv"
year: 2025
---

# Zero-shot 3D-Aware Trajectory-Guided image-to-video generation via Test-Time Training

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [2509.06723](https://arxiv.org/abs/2509.06723)
- **GitHub**: [Richard-Zhang-AI/Zo3T-main](https://github.com/Richard-Zhang-AI/Zo3T-main)
- **Website**: [项目页面](https://richard-zhang-ai.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Zo3T，首个零样本、测试时训练（Test-Time Training）的轨迹引导图像到视频生成框架，无需标注轨迹数据微调
- 引入三项核心创新：3D 感知运动学投影、轨迹引导测试时 LoRA、引导场矫正（Guidance Field Rectification）
- 通过推断场景深度图并应用透视矫正的仿射变换，解决潜空间轨迹编辑中 3D 视角缺失导致的运动失真问题
- 测试时 LoRA 与潜变量协同优化，以区域特征一致性损失驱动，在保持预训练模型生成能力的同时局部适配运动约束

### 方法细节
- 3D 感知运动学投影（3D-Aware Kinematic Projection）：利用 Depth Anything 等单目深度估计模型推断输入图像的场景深度，将用户指定的 2D 轨迹投影到 3D 空间后，再通过透视投影映射为逐帧的仿射变换矩阵，实现透视正确的目标区域位移
- 轨迹引导测试时 LoRA（Trajectory-Guided Test-Time LoRA）：在去噪网络的注意力层动态注入临时 LoRA 低秩适配器，与当前去噪潜变量一起通过梯度下降联合优化；优化结束后即丢弃，不改变预训练权重
- 区域特征一致性损失：对轨迹指定的目标区域，约束连续帧间 DINO 特征保持语义一致，同时允许目标区域的几何变换遵循 3D 投影轨迹
- 引导场矫正（Guidance Field Rectification）：利用一步前瞻（one-step lookahead）策略，预测当前引导信号在下一去噪步的可能偏差并提前修正，避免去噪轨迹偏离目标分布
- 整体流程：输入单张图像 + 2D 轨迹 → 深度估计 → 3D 投影生成逐帧仿射变换 → 初始化去噪潜变量 → 注入临时 LoRA → 联合优化潜变量与 LoRA → 区域特征一致性引导去噪 → 引导场矫正 → 输出视频

### 关键发现
- Zo3T 无需任何轨迹标注数据训练，即可在多个预训练 I2V 模型上实现零样本轨迹控制，显著优于基于潜空间编辑的零样本方法
- 3D 感知投影有效解决了近大远小透视效应导致的运动幅度失真，尤其在深度变化显著的大位移场景中效果明显
- 测试时 LoRA 与引导场矫正的协同使运动精度（轨迹 IoU）和生成质量（FVD）同时提升，而传统方法常在这两者间存在 trade-off

### 方法归类
- **范式**: 零样本测试时训练（Zero-shot Test-Time Training）
- **关键技术**: 3D 感知运动学投影、测试时 LoRA 动态优化、区域特征一致性约束、引导场一步前瞻矫正
- **适用场景**: 用户交互式轨迹控制视频生成、无标注条件下的可控视频合成、基于单张图片的 3D 感知运动编辑
