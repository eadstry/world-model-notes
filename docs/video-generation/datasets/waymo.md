---
title: "Waymo Open Dataset"
year: 2020
---

# Waymo Open Dataset (WOD)

::: info 数据集信息
- **Venue**: CVPR (2020)
- **arXiv**: [https://arxiv.org/abs/1912.04838](https://arxiv.org/abs/1912.04838)
- **GitHub**: [https://github.com/waymo-research/waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset)
- **Website**: [https://waymo.com/open](https://waymo.com/open)
- **Dataset**: [https://console.cloud.google.com/storage/browser/waymo_open_dataset_v_1_4_2](https://console.cloud.google.com/storage/browser/waymo_open_dataset_v_1_4_2)
:::

## 学习笔记

### 数据集概览

Waymo Open Dataset (WOD) 是由 Waymo（原 Google 自动驾驶项目）发布的业界最大规模、最高质量的自动驾驶数据集之一。数据由 Waymo 全自动驾驶车队在真实城市道路环境中采集，覆盖美国多个城市（凤凰城、旧金山、山景城等），包含 1150 个驾驶场景（每个 20 秒），总计 1950 个片段。

### 传感器配置与数据模态

WOD 使用 Waymo 自主开发的顶级传感器套件：

| 传感器 | 数量 | 说明 |
|--------|------|------|
| 激光雷达 (LiDAR) | 5 个 | 1 个顶部 + 4 个侧面，360° 覆盖 |
| 高动态范围相机 | 5 个 | front / front_left / front_right / side_left / side_right |
| IMU + GPS | — | 高精度定位与姿态 |

每个场景提供：
- **激光雷达点云**（5 路）
- **高分辨率 RGB 图像**（5 路，10Hz）
- **3D/2D 标注框**（1200 万 3D 框 + 120 万 2D 框）
- **高精度地图**（车道线、路沿、交通标志等）
- **物体运动轨迹与属性**（速度、加速度、类别）

### 数据集版本演进

| 版本 | 年份 | 主要新增 |
|------|------|----------|
| v1.0 | 2020 | 感知数据集首发（1150 场景，3D 检测 + 2D 检测 + 跟踪） |
| v1.2 | 2021 | 扩展场景数，提升标注质量 |
| v1.3 | 2021 | 新增运动预测标注（Motion Dataset / WOMD） |
| v1.4 | 2023 | 新增 3D 语义分割标注 |
| v1.4.2 | 2024 | 当前 Cosmos 训练使用版本，优化数据格式 |

### 评测指标

- **3D 检测**: mAP (Mean Average Precision), mAPH (mAP weighted by Heading)
- **多目标跟踪**: MOTA (Multi-Object Tracking Accuracy)
- **运动预测**: minADE (Minimum Average Displacement Error), minFDE (Minimum Final Displacement Error), Miss Rate

### 与世界模型/视频生成的关系

Waymo Open Dataset 是训练自动驾驶视频生成与世界模型的核心数据源。其多相机同步采集（5 路环视）与 Cosmos-Predict2.5 的 Auto Multiview 多视角生成范式天然对齐，使模型能够学习跨视角几何一致性和时序运动动力学。

相比通用视频数据集，WOD 提供：
- **精确 3D 几何真值**（激光雷达 + 地图），而非仅 2D 像素模式
- **物理运动标注**（速度、加速度），用于学习动力学先验
- **交通规则约束**（地图拓扑），使世界预测符合道路结构
- **多智能体交互场景**，覆盖切入、让行、合流等长尾驾驶工况

### Cosmos 生态中的 Waymo 互连

Waymo Open Dataset 在 NVIDIA Cosmos 平台中扮演核心数据供给角色，贯穿 **数据筛选 -> 世界生成/转换 -> 质量评估 -> 下游训练** 的闭环链路：

| Cosmos 组件 | Waymo 场景 |
|-------------|-----------|
| [Cosmos-Predict2.5 Auto Multiview](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-predict2-5) | 用 Waymo 5 路相机做 Auto Multiview 后训练，学习多视角联合生成 ( `experiment=predict2_multiview_post_train_waymo` ) |
| [Cosmos Auto Multiview 训练教程](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-auto-multiview-training) | Waymo 后训练全流程实操：下载 `scripts/download_waymo.sh` -> 转换 `scripts/convert_waymo.py` -> 训练 |
| [Cosmos-Transfer2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-transfer2-5) | 以 Waymo 真实场景为基础，用 depth/segmentation/edge 等控制信号进行场景增广（天气迁移、光照变化、域迁移） |
| [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams) | 基于 Waymo 数据生成合成驾驶视频，补足长尾场景缺口，增强下游自动驾驶模型 |
| [Cosmos Curator](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-curator) | 从 Waymo 原始片段中筛选高质量训练子集，过滤模糊、遮挡、标注不佳的片段 |
| [Cosmos Dataset Search](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-dataset-search) | 从大规模 Waymo 视频中检索特定场景（长尾天气、复杂路口、施工区、切入行为） |
| [Cosmos Evaluator / Guardrail](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-evaluator-guardrail) | 评估基于 Waymo 生成的视频质量、物理合理性、视角几何一致性 |

### Cosmos 中的 Waymo 5 相机视角

Cosmos-Predict2.5 官方 Waymo 后训练示例使用 5 路相机：

```
CameraNames = ["front", "front_left", "front_right", "side_left", "side_right"]
```

模型架构为 7-camera view（包含 `back` 和 `front_tele`），Waymo 示例中跳过这两个空缺的视角。通过这种多视角训练，模型学习同一驾驶场景在多路相机中的同步呈现关系，确保跨视角几何一致性——即同一辆车、行人在不同摄像头中不会出现矛盾的位置、尺度和运动状态。

### 代表性用例

- **GAIA-1** (Wayve, 2023): 基于 WOD 训练驾驶世界生成模型
- **DriveDreamer** (2024): 基于 WOD 构建驾驶世界模型，生成未来驾驶场景
- **Wayformer** (Waymo, 2022): 使用 WOD 训练 Transformer 感知模型
- **MTR / MTR++** (2022/2023): 在 WOD (WOMD) 上取得运动预测 SOTA
- **UniAD** (2023): 在 WOD 上评测端到端自动驾驶规划
- **Cosmos-Drive-Dreams** (NVIDIA, 2025): 以 WOD 为核心数据源，结合 Cosmos-Predict2.5/Transfer2.5 生成合成驾驶数据

### 相关笔记

- 📂 [自动驾驶数据集总览](/world-models/datasets-benchmarks/domain-specific-world-modeling/autonomous-driving/)
- 🚗 [Waymo Open Dataset (世界模型应用视角)](/world-models/applications/autonomous-driving/waymo)
- 🚗 [Waymo Open Motion Dataset (WOMD)](/world-models/datasets-benchmarks/domain-specific-world-modeling/autonomous-driving/womd)
- 🎨 [Cosmos-Predict2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-predict2-5)
- 🔧 [Cosmos Auto Multiview 训练教程](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-auto-multiview-training)
- 🌐 [Cosmos-Transfer2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-transfer2-5)
- 📊 [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams)
- 🔍 [Cosmos 平台总览](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos)
