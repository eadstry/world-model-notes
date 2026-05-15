---
title: "V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning"
design: "V-JEPA 2.1"
arxiv: https://arxiv.org/abs/2603.14482
github: https://github.com/facebookresearch/vjepa2
---

# V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning

::: info 论文信息
- **Design**: V-JEPA 2.1
- **论文全称**: V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning
- **arXiv**: [https://arxiv.org/abs/2603.14482](https://arxiv.org/abs/2603.14482)
- **GitHub**: [https://github.com/facebookresearch/vjepa2](https://github.com/facebookresearch/vjepa2)
:::

## 学习笔记

## 核心思想

V-JEPA 2.1（Meta FAIR, LeCun 团队）是 V-JEPA 2 的升级版本，核心目标是**解锁视频自监督学习中的密集特征（Dense Features）**，同时保持强大的全局场景理解能力。与 V-JEPA 2 侧重全局语义不同，V-JEPA 2.1 引入密集预测损失，使模型学习像素/块级（patch-level）的空间和时间对应关系。

四个关键设计组件推动性能提升：(1) **密集预测损失**（dense predictive loss）：可见和掩码 token 都参与训练信号，强制空间和时间定位；(2) **深度自监督**（deep self-supervision）：自监督目标分层应用于多个中间编码器层；(3) **多模态分词器**（multi-modal tokenizers）：统一图像和视频训练；(4) **有效扩展**：模型容量和数据规模同步增长。

这些设计使 V-JEPA 2.1 在多个竞争性基准上取得 SOTA 表现，尤其在需要密集空间理解的任务上（如动作预测、机器人抓取）展现显著优势。

## 技术架构

**Vision Encoding（视觉编码）**：统一图像和视频编码，通过多模态分词器处理。采用 Vision Transformer (ViT) 架构，关键创新在于密集自监督——监督信号分层注入多个中间层，而非仅在最终层。这使得各层都能学到空间结构化表示。

**Knowledge Learning（世界知识学习）**：基于 JEPA 框架，上下文编码器处理可见块，目标编码器（EMA 更新）处理完整帧。核心创新是密集预测损失：掩码 token 和可见 token 同时贡献训练信号，模型必须预测掩码区域的密集特征而非单一全局向量。这强制模型学习精确的空间定位和时间一致性。

**Controllable Simulation（可控推演）**：V-JEPA 2.1 的表征可直接用于下游控制任务。在机器人实验中，使用 V-JEPA 2.1 AC（action-conditioned 版本）进行零样本抓取，相比 V-JEPA 2 AC 提升了 20 个百分点的抓取成功率。同时支持机器人导航（TartanDrive）、深度估计（NYUv2 linear probe）等任务。

## 代码实现要点

- 基于 PyTorch 实现，与 V-JEPA 2 共享代码库（facebookresearch/vjepa2）
- 密集预测损失：mask 区域和可见区域均参与 loss 计算，需实现 patch-level 目标编码
- 深度自监督：在 ViT 多个中间层添加预测头，各层独立计算 JEPA 损失
- 多模态分词器：统一图像/视频 token 化，支持混合批次训练
- 预训练模型通过 HuggingFace 发布，可直接加载用于下游任务

## 关键创新点

- 密集预测损失：首次在 JEPA 框架中实现 patch 级密集特征学习
- 深度自监督：分层监督信号注入 ViT 中间层
- 多模态统一分词器：图像和视频联合训练
- 相比 V-JEPA 2 AC 机器人抓取成功率提升 20 个百分点
- 在多个密集理解任务上达到 SOTA（Ego4D、EPIC-KITCHENS）

## 代表性结果

- Ego4D 短期物体交互预测：7.71 mAP
- EPIC-KITCHENS 高层动作预测：40.8 Recall@5
- 真实机器人抓取任务：比 V-JEPA 2 AC 提升 20 个百分点
- 机器人导航 TartanDrive：5.687 ATE
- 深度估计 NYUv2（线性探针）：0.307 RMSE
- Something-Something V2 全局识别：77.7
