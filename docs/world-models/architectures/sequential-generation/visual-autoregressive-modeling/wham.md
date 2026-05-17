---
title: "World and human action models towards gameplay ideation"
design: "WHAM"
website: https://www.nature.com/articles/s41586-025-08600-3
---

# WHAM: World and Human Action Models towards Gameplay Ideation

::: info 论文信息
- **Design**: WHAM
- **论文全称**: World and human action models towards gameplay ideation
- **Website**: [Nature 2025](https://www.nature.com/articles/s41586-025-08600-3)
:::

## 学习笔记

### 核心思想

WHAM（World and Human Action Model）是微软研究院发表于 Nature 2025 的工作，首次提出了以游戏玩法构想（gameplay ideation）为目标的世界模型。通过对 27 位游戏创意专业人员的用户研究，作者识别出支持创意工作的三个关键维度：一致性（Consistency）——生成内容在时间上和游戏规则上保持一致；多样性（Diversity）——模型能生成多种不同的合理未来，支持发散思维；持续性（Persistence）——用户对帧做手动编辑后，模型应持续尊重修改，继续生成合理后续。WHAM 直接建模游戏画面和操控信号的联合分布，以自回归方式从初始帧和动作序列生成持续的游戏画面和操控。

WHAM 的核心贡献在于建立了支持创意工作的世界模型新范式——人-AI 协作式游戏探索。用户可以通过示范来展示游戏玩法，直接修改中间帧来"注入"创意元素，模型据此调整未来轨迹。模型在 Xbox 游戏《Bleeding Edge》的多人对战数据上训练，学习 3D 游戏中复杂的人物动画、角色动态和操控映射关系。WHAM 的权重、训练数据集和交互式演示已全部开源。

### 架构设计

- **Vision Encoding（视觉编码）**：WHAM 使用 VQ-VAE 将图像 tokenizer 将 128×128 游戏画面压缩为离散视觉 token 序列，同时将手柄操控信号量化为离散 token，视觉 token 和操控 token 共享同一词汇表空间。这种统一 token 设计使视频帧和操控序列可在同一自回归 Transformer 中交替处理。通过对图像分块保留二维空间结构，使 Transformer 能同时学习帧内和帧间的双向依赖关系。
- **Knowledge Learning（知识学习）**：WHAM 的核心是一个大型自回归 Transformer，在《Bleeding Edge》的多人对战数据上训练，建模"视觉 token + 操控 token"交替序列。训练目标为标准 next-token prediction。通过在大规模 3D 游戏数据上的自监督学习，模型自动学会了：3D 场景的几何结构、碰撞检测、角色动画/运动状态转换，以及人类玩家的操控策略和交互模式。WHAM 的最大优势在于游戏引擎本身提供了天然的多模态监督——画面、手柄输入、游戏物理模拟，以隐式方式提供了稠密的训练信号。
- **Controllable Simulation（可控模拟）**：WHAM 支持多种控制模式：(1) 以初始帧 + 真实操控序列为条件，生成一致的游戏画面；(2) 以初始帧为条件，自回归同时生成画面和操控序列；(3) 在帧级别上，用户可通过直接编辑中间帧来"注入"或删除元素，WHAM 能将修改持久化到后续帧中。WHAM Demonstrator 提供了可视化界面，支持拖拽修改帧、调整温度参数、对比多条生成轨迹。

### 关键创新

- **首次以创意支持为目标的游戏世界模型**：通过用户研究确定 Consistency、Diversity、Persistence 三个关键维度。
- **统一视觉-操控联合建模**：将游戏画面和操控输入统一为离散 token 序列，用单一 Transformer 学习联合分布。
- **持久化用户编辑**：支持用户直接对中间帧进行编辑（添加/删除角色），模型将修改持久化到自回归生成的后续帧中。
- **Nature 正刊发表**：作为游戏 AI 领域的里程碑，WHAM 登上 Nature 正刊，标志着生成式世界模型在创意产业应用的突破性进展。
- **完全开源**：模型权重、训练数据集和交互式演示均在 HuggingFace 发布。

### 实验结果要点

WHAM 在三个关键维度上展现了领先的性能：在一致性方面，128×128 分辨率下生成的游戏画面保持时空结构一致性，角色动态、环境结构、游戏规则准确延续；在多样性方面，从相同初始帧可生成多条不同的游戏发展轨迹，包含不同的策略路线和交战方式；在持续性方面，用户编辑后模型准确响应并持续生成后续帧。WHAM Demonstrator 在游戏设计师的用户研究中验证了 brainstorming 和创意探索的实用价值。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
