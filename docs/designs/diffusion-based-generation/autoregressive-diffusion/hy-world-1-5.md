---
title: "HY-World 1.5: A Systematic Framework for Interactive World Modeling with Real-Time Latency and Geometric Consistency"
design: "HY-World 1.5"
github: https://github.com/Tencent-Hunyuan/HY-WorldPlay
---

# HY-World 1.5: A Systematic Framework for Interactive World Modeling with Real-Time Latency and Geometric Consistency

::: info 论文信息
- **Design**: HY-World 1.5
- **论文全称**: HY-World 1.5: A Systematic Framework for Interactive World Modeling with Real-Time Latency and Geometric Consistency
- **GitHub**: [https://github.com/Tencent-Hunyuan/HY-WorldPlay](https://github.com/Tencent-Hunyuan/HY-WorldPlay)
:::

## 学习笔记

### 核心思想

HY-World 1.5 (WorldPlay) 是腾讯混元团队提出的首个开源、实时交互、长期几何一致的世界模型系统框架。HY-World 1.0 虽然能生成沉浸式 3D 世界，但依赖漫长的离线生成过程，缺乏实时交互能力。HY-World 1.5 的核心突破在于同时解决了"速度"和"记忆"两个看似矛盾的挑战：以往追求速度的方法（如蒸馏）牺牲了记忆导致场景重访不一致，而追求一致性的方法因复杂的记忆机制使蒸馏变得困难。WorldPlay 通过四大关键技术实现了这一突破：(1) 双重动作表示支持键盘+鼠标稳健控制；(2) 重构上下文记忆动态重建历史帧上下文，时间重构（temporal reframing）缓解记忆衰减；(3) WorldCompass 强化学习后训练框架直接优化长时域自回归模型的动作跟随和视觉质量；(4) 上下文强制（Context Forcing）蒸馏方法在教师和学生模型间对齐记忆上下文，以 24 FPS 实时速度保持长时域一致。模型支持第一人称和第三人称视角，覆盖真实和风格化环境。

### 技术架构

**Vision Encoding（视觉编码）**：HY-World 1.5 以块（chunk）为单位的自回归视频扩散模型——每个 chunk 包含 16 帧，模型在 chunk 内使用双向扩散生成，chunk 间自回归传递。给定单张图像或文本提示作为世界描述，模型执行"下一个 chunk"预测任务。双重动作表示将键盘输入（离散按键）和鼠标输入（连续位移）统一编码为条件信号，分别驱动相机运动和角色行为。

**Knowledge Learning（知识学习）**：训练分为四个阶段——(1) 预训练：在 170K+ 多样化视频剪辑（含真实场景、游戏画面、风格化内容）上进行自回归视频扩散预训练；(2) 中间训练：集成重构上下文记忆（Reconstituted Context Memory），使模型学会动态从历史帧重建上下文并使用时间重构保持几何关键帧的长期可访问性；(3) WorldCompass RL 后训练：基于 GRPO（Group Relative Policy Optimization）思想的强化学习框架，通过 3D 反馈和视觉反馈直接优化动作跟随精度和长时域视觉质量；(4) Context Forcing 蒸馏：在教师和学生模型间对齐记忆上下文——传统蒸馏会丢失长程信息，而 Context Forcing 确保学生模型保留使用长程历史信息的能力。

**Controllable Simulation（可控仿真）**：HY-World 1.5 以 24 FPS 实时流式生成交互式世界探索视频。用户通过键盘移动（WASD）和鼠标转向实现自由探索。Context Forcing 蒸馏结合工程优化使推理延迟降低至实时水平。模型展现出跨场景的强泛化能力：真实照片级环境、动漫风格场景、3D 重建、可提示事件（promptable events）和无限世界扩展（infinite world extension）。

### 代码实现要点

- **Chunk-wise 自回归扩散**：chunk 内双向扩散 + chunk 间自回归，每 chunk 16 帧
- **重构上下文记忆**：动态选择历史关键帧 + 时间重构（将旧帧重新编码到新视角），缓解内存衰减
- **双重动作表示**：键盘离散按键 → 嵌入编码；鼠标连续位移 → 归一化向量编码；联合注入扩散模型
- **WorldCompass RL**：GRPO 框架，3D 反馈（深度一致性）+ CLIP 视觉反馈作为奖励信号
- **Context Forcing 蒸馏**：学生模型（4-8 步去噪）对齐教师模型（数十步）的记忆上下文表示
- **开源**：WorldPlay-8B（HunyuanVideo）和 WorldPlay-5B（WAN）两个版本 + 训练代码

### 关键创新点

- **首个开源实时交互世界模型**：24 FPS 流式生成 + 长期几何一致 + 全开源
- **速度与记忆兼得**：WorldCompass RL + Context Forcing 蒸馏，突破两难困境
- **重构上下文记忆**：时间重构机制使历史关键帧长期可访问
- **四阶段训练体系**：预训练 → 记忆集成 → RL 后训练 → 蒸馏，渐进式增强
- **跨场景泛化**：第一/第三人称 + 真实/风格化环境 + 3D 重建/事件触发/无限扩展

### 代表性结果

- 24 FPS 实时流式交互，长期几何一致性领先现有技术
- 支持多样化的 3D 重建、可提示事件触发和无限世界扩展应用
- 开源 WorldPlay-8B 和 WorldPlay-5B + 训练代码
