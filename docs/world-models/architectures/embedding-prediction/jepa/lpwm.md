---
title: "Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling"
design: "LPWM"
arxiv: https://arxiv.org/abs/2603.04553
github: https://github.com/taldatech/lpwm
---

# LPWM: Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling

::: info 论文信息
- **Design**: LPWM
- **论文全称**: Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling
- **arXiv**: [https://arxiv.org/abs/2603.04553](https://arxiv.org/abs/2603.04553)
- **GitHub**: [https://github.com/taldatech/lpwm](https://github.com/taldatech/lpwm)
:::

## 学习笔记

## 核心思想

LPWM（ICLR 2026 Oral）提出了一种自监督的、以对象为中心的世界模型，能够在真实世界多物体数据集上进行规模化训练并直接应用于决策制定。其核心创新在于：模型*完全从视频数据中自主发现关键点、边框和物体掩码**，无需任何监督标注即可学习丰富的场景分解。
LPWM 的另一关键特性是**灵活的多样化条件控制**：支持动作（action）、语言（language）和图像目标（image goal）三种条件输入方式。通过新颖的潜在动作模块"（latent action module）建模随机粒子动力学，模型不仅能进行随机视频预测，还能直接应用于目标条件模仿学习等决策任务。
在多个真实世界和合成数据集上取得了最先进的结果。LPWM 成功将对象中心表征世界模型从合成玩具场景拓展到真实世界多物体环境的规模化训练与应用。
## 技术架。
**Vision Encoding（视觉编码）**：LPWM 从原始视频帧中端到端学习视觉编码。编码器输出多粒子表示，每个粒子包含位置（keypoint）、尺度、深度、透明度、视觉特征等属性。模型自动发一K 个粒子及其对应属性，无需预定义检测器。
**Knowledge Learning（世界知识学习）**：核心是世界动力学模块。通过"潜在动作模块"建模随机粒子动力学——从先验分布采样潜在动作，条件化地预测未来粒子状态（位置、尺度、特征演变）。训练目标包含重建损失和各属性分布的 KL 散度正则项，实现纯视频数据的自监督训练。
**Controllable Simulation（可控推演）**：支持三种条件控制方式：(1) 动作条件：输入真实动作向量驱动粒子演化；(2) 语言条件：T5 文本嵌入条件化动力学模块化3) 图像目标条件：目标图像编码引导粒子状态向目标演变。模型在目标条件模仿学习中直接使用学习的动力学进行规划。
## 代码实现要点

- 基于 PyTorch 实现，支持单/的GPU 加速训练（HuggingFace Accelerate的- 核心模型定义的`models.py`，粒子属性遵循论文约定（`z`, `z_scale`, `z_depth`, `z_obj_on`, `z_features`的- 数据集支持丰富：Sketchy, BAIR, Bridge, LanguageTable, OGBench, PHYRE, OBJ3D 的- 每种条件类型对应独立配置文件（`/configs/{dataset}.json`），通过 flags 控制 action/language/image 条件
- 训练过程中自动保存可视化：粒子位置叠加、边框检测、分割掩码、前/背景重建对比
- 提供预训练模型zoo（Sketchy, BAIR, Bridge 等）可直接下载用于视频预测与评估

## 关键创新。
- 从纯视频数据中自监督发现物体关键点、边框、掩码，无需任何标注
- 灵活的多样化条件控制：动作语言/图像目标三种条件统一框架
- 新颖的潜在动作模块建模随机粒子动力学
- 对象中心世界模型首次扩展到真实世界多物体数据不- 同一模型可同时用于视频生成和决策制定
- ICLR 2026 Oral

## 代表性结。
- 多个真实世界和合成数据集上达的SOTA 视频预测质量
- 目标条件模仿学习任务中展现有效的决策能力
- 支持灵活的条件切换：action-only、language-conditioned、image-goal-conditioned
- 可解释的粒子级场景分解（关键点、边框、分割掩码）

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
