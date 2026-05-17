---
title: "GenieDrive：基于4D占用引导的物理感知驾驶世界模型视频生成"
source: "arxiv"
arxiv_id: "2512.12751"
tags:
  - "video-generation"
  - "world-model"
  - "autonomous-driving"
  - "4d-occupancy"
  - "multi-view"
  - "physics-aware"
status: "已读"
---
## 学习笔记

### 核心贡献

- 提出 GenieDrive 两阶段框架：首先生成 4D occupancy 作为物理感知的中间表示，再基于 occupancy 引导生成多视图驾驶视频，解决一步式视频生成中物理不一致的问题
- 设计 occupancy 专用 VAE，将高分辨率 4D occupancy 编码为 latent tri-plane 表示，latent 大小仅为前方法的 58%，实现高效压缩
- 提出 Mutual Control Attention（MCA），精确建模驾驶控制信号（方向盘转角、速度等）对 occupancy 时序演化的影响
- 引入 Normalized Multi-View Attention，在视频生成阶段利用 4D occupancy 引导生成多视图一致的驾驶视频，FVD 降低 20.7%

### 方法细节

- **两阶段框架**：
  - 阶段一：Occupancy 生成网络。以初始 occupancy 状态和控制信号为输入，逐帧预测未来 occupancy 序列，作为物理世界的中间表示
  - 阶段二：视频生成网络。以 occupancy 序列为条件，结合多视图相机参数，生成对应的 RGB 驾驶视频
- **Occupancy VAE（Tri-plane Compression）**：
  - 将 3D/4D occupancy 体素编码到三个正交平面的 latent 特征（tri-plane），大幅降低维度
  - 解码时从 tri-plane 插值恢复 occupancy 体积，用于后续视频生成的条件输入
- **Mutual Control Attention（MCA）**：
  - 设计交叉注意力机制，将控制信号（action / ego-motion）与 occupancy latent 进行双向交互
  - 使模型能够精确建模控制输入如何影响环境的 3D 几何和动态变化
- **Normalized Multi-View Attention**：
  - 在视频 DiT 的注意力层中加入 multi-view 信息的归一化约束
  - 使不同视角生成的视频在相同 occupancy 条件下保持几何一致性和外观连续性

### 关键发现

- 与端到端一步法（如 DriveDreamer、WoVoGen 等）相比，GenieDrive 生成的多视图驾驶视频在物理一致性、几何稳定性和长时预测方面显著更优
- FVD 指标降低 20.7%，同时在多视图一致性（如跨视角重投影误差）和长期预测稳定性上有定量提升
- Tri-plane VAE 在保持 occupancy 重建精度的同时将 latent 尺寸压缩至 58%，有效减少了后续视频生成网络的计算开销
- MCA 模块的消融表明，直接在 occupancy 空间施加控制约束比在像素空间施加更有效，物理可解释性更强

### 方法归类

- **所属范式**：两阶段世界模型（中间物理表示 + 条件视频生成）
- **技术路线**：4D occupancy 表示 + VAE 压缩 + 多视图注意力
- **相关方法**：DriveDreamer, WoVoGen, GAIA-1, DriveGAN, UniAD（occupancy prediction）
- **应用领域**：自动驾驶仿真、闭环规划评估、OOD 场景数据合成、驾驶行为分析
