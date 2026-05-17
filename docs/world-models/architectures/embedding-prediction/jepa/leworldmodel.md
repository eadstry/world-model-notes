---
title: "LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels"
design: "LeWorldModel"
arxiv: https://arxiv.org/abs/2603.19312
github: https://github.com/lucas-maes/le-wm
---

# LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels

::: info 论文信息
- **Design**: LeWorldModel
- **论文全称**: LeWorldModel: Stable End-to-End Joint-Embedding Predictive Architecture from Pixels
- **arXiv**: [https://arxiv.org/abs/2603.19312](https://arxiv.org/abs/2603.19312)
- **GitHub**: [https://github.com/lucas-maes/le-wm](https://github.com/lucas-maes/le-wm)
:::

## 学习笔记

## 核心思想

LeWorldModel (LeWM, Yann LeCun 团队) 提出了*首个从原始像素端到端稳定训练的JEPA**，从根本上解决了 JEPA 的表示坍缩问题。现要JEPA 方法依赖复杂的多损失项组合、EMA（指数移动平均）目标编码器、预训练编码器或辅助监督来避免坍缩，为LeWM 仅使用*两个损失可*即可稳定训练：一个下一嵌入预测损失和一个强制潜在嵌入服从高斯分布的正则项。
设计的优雅性令人瞩目：与唯一已有的端到端替代方案相比，可调损失超参数一6 个减少到 1 个。模型仅仅15M 参数，单 GPU 数小时即可完成训练。在规划速度上，LeWM 比基于基础模型的世界模型快 48 倍，同时在多样2D 样3D 控制任务上保持竞争力。
更重要的是，LeWM 的潜在空间编码了有意义的物理结构——通过物理量探测可证实。模型还能通过"惊讶度评估（surprise evaluation）可靠地检测物理上不合理的事件。这项工作由 LeCun 领导，是向简单、稳定、端到端的JEPA 世界模型迈出的重要一步。
## 技术架。
**Vision Encoding（视觉编码）**：从原始像素端到端学习视觉编码，不使用预训练编码器。编码器将观测图像映射到紧凑的潜在空间，通过高斯正则器约束嵌入分布为标准高斯，这是防止表示坍缩的关键设计。
**Knowledge Learning（世界知识学习）**：仅用两个损失项为1) 下一嵌入预测损失 —可从当前潜在状态预测下一帧的潜在嵌入的2) 高斯正则型—的强制潜在嵌入服从高斯分布。无需 EMA、无需动量编码器、无需多损失平衡。预测器在潜在空间中学习动态转移，隐式捕获物理规律。
**Controllable Simulation（可控推演）**：训练完成后，LeWM 作为 MPC（模型预测控制）的动力学模型。规划器在潜在空间中采样动作序列、前向推演状态、评估代价函数，选择最优动作。由于模型紧凑（15M 参数）且推理高效，单步前向极快，实现 48 倍于基础模型世界模型的规划速度。
## 代码实现要点

- 核心模型实现了`jepa.py`：编码器 + 预测器的端到的JEPA 架构
- 训练配置通过 Hydra 管理（`config/train/`），支持 wandb 日志
- 基于 stable-worldmodel 世stable-pretraining 库构建环境和评估
- 数据集采用HDF5 格式快速加载，从 HuggingFace 下载
- 仅需两个损失项的实现：`prediction_loss` + `gaussian_regularizer`
- 评估通过 `eval.py` 加载训练的checkpoint 进行 MPC 规划测试
- 提供预训练checkpoint（pusht, cube, reacher, two-room。
## 关键创新。
- 首个仅用两个损失项稳定端到端训练的JEPA（无需 EMA、预训练编码器）
- 损失超参数从 6 个缩减到 1 个，极大简化调的- 度15M 参数，单 GPU 数小时训练- 规划速度比基础模型世界模型的48 的- 潜在空间编码有意义的物理结构（可通过探测验证可- 能可靠检测物理不合理事件（surprise evaluation。
## 代表性结。
- 2D 控制任务（PushT, PointMaze）上竞争力与 SOTA 持平
- 3D 控制任务（Cube, Reacher）上稳定规划
- 规划速度和DINO-WM 等基础模型方法的48 范- 惊讶度评估：可靠检测物理不合理事件
- 物理量探测：潜在空间编码位置、速度等物理属。
## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
