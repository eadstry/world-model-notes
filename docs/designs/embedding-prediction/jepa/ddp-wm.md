---
title: "DDP-WM: Disentangled Dynamics Prediction for Efficient World Models"
design: "DDP-WM"
arxiv: https://arxiv.org/abs/2602.01780
github: https://github.com/HCPLab-SYSU/DDP-WM
---

# DDP-WM: Disentangled Dynamics Prediction for Efficient World Models

::: info 论文信息
- **Design**: DDP-WM
- **论文全称**: DDP-WM: Disentangled Dynamics Prediction for Efficient World Models
- **arXiv**: [https://arxiv.org/abs/2602.01780](https://arxiv.org/abs/2602.01780)
- **GitHub**: [https://github.com/HCPLab-SYSU/DDP-WM](https://github.com/HCPLab-SYSU/DDP-WM)
:::

## 学习笔记

## 核心思想

DDP-WM（中山大学 HCP Lab）针对现有密集 Transformer 世界模型的高计算开销问题，提出了**解耦动力学预测**（Disentangled Dynamics Prediction）范式。核心假设是：观测场景中的潜在状态演化是异质的，可分解为(1) **稀疏主动力学**：由物理交互驱动的核心变化区域；(2) **上下文背景更新**：次要的、由环境上下文驱动的背景变化。

基于此假设，DDP-WM 设计了一个四阶段解耦架构：通过**动态定位**（Dynamic Localization）识别前景变化区域，将计算资源集中用于**主预测器**（Primary Predictor）对该区域进行高精度预测，同时利用创新的**低秩修正模块**（Low-Rank Correction Module, LRM）以极低成本更新背景区域。

这一设计不仅显著提升了计算效率，还为规划器提供了更平滑的优化景观。在 Push-T 任务上，DDP-WM 实现约 9 倍推理加速，MPC 成功率从 90% 提升至 98%。

## 技术架构

**Vision Encoding（视觉编码）**：基于 DINOv2 预训练特征作为世界模型的基础视觉表征。历史帧通过"历史信息融合模块"（Historical Information Fusion Module）整合多帧上下文，为后续动态定位提供时序信息。

**Knowledge Learning（世界知识学习）**：分三阶段训练：(1) 动态定位网络：学习识别哪些区域正在发生物理交互驱动的变化，生成稀疏的前景掩码；(2) 稀疏主动力学预测器：仅对定位到的前景区域进行高精度未来状态预测，冻结先前权重；(3) 低秩修正模块（LRM）：通过低秩矩阵分解以极低计算成本更新背景区域，同样使用交叉注意力机制。整个流程实现"好钢用在刀刃上"的资源分配。

**Controllable Simulation（可控推演）**：基于 DINO-WM 的规划框架（MPC + MPPI），但使用 DDP-WM 的解耦预测器作为动力学模型。由于推理效率大幅提升（9 倍加速），相同时间内可评估更多候选动作序列，从而提升规划质量。

## 代码实现要点

- 基于 DINO-WM 代码库重构开发
- 分阶段训练流水线：`model.training_stage=localization|primary_predictor|lrm`
- 各阶段通过 Hydra 配置文件控制，前一阶段 checkpoint 通过 `ckpt_path` 传递给后一阶段
- 核心模型架构：`DDP_Predictor` 和 `DDPVWorldModel` 类
- 动态定位网络使用历史帧融合 + 交叉注意力机制
- Low-Rank Correction Module 通过矩阵分解降低背景更新成本
- 前端变化区域通过稀疏掩码引导计算资源分配

## 关键创新点

- 首次将潜在状态演化分解为主动力学和背景更新
- 动态定位网络自动识别物理交互区域
- 低秩修正模块以极低成本更新背景
- 9 倍推理加速，MPC 成功率从 90% 到 98%（Push-T）
- 为规划器提供更平滑的优化景观
- 适用于导航、桌面操作、可变形物体交互等多种任务

## 代表性结果

- Push-T 任务：9 倍推理加速，成功率 90% → 98%
- 导航任务：高效且高保真
- 桌面操作任务：精确控制
- 可变形和多体交互任务：鲁棒建模
- 计算效率显著优于密集 Transformer 基线（DINO-WM）
