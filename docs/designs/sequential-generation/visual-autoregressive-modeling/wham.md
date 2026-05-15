---
title: "World and human action models towards gameplay ideation"
design: "WHAM"
website: https://www.nature.com/articles/s41586-025-08600-3
---

# WHAM: World and human action models towards gameplay ideation

::: info 论文信息
- **Design**: WHAM
- **论文全称**: World and human action models towards gameplay ideation
- **Website**: [https://www.nature.com/articles/s41586-025-08600-3](https://www.nature.com/articles/s41586-025-08600-3)
:::

## 学习笔记

## 核心思想

WHAM（World and Human Action Model）由微软研究院发表在 Nature 2025 上，是首个以游戏创意构思（gameplay ideation）为目标的世界模型。通过对 27 位游戏开发创意人员的用户研究，论文识别出生成式 AI 支持创意实践所需的三个关键模型能力：**一致性（Consistency）**——生成序列必须在时空上和游戏机制上保持一致；**多样性（Diversity）**——模型应产生多种不同的合理延续以支持发散思维；**持久性（Persistency）**——用户对帧或控制器动作的修改应被模型持久化融入后续生成。WHAM 直接建模游戏画面和控制信号的联合分布，以条件自回归方式从初始帧和动作序列出发生成长序列的游戏画面和控制器动作。

WHAM 的核心洞察在于将创意支持从"文本到内容"的单向生成，重新定义为"人-AI 交互式迭代探索"——用户不仅通过输入提示游戏场景，还能直接修改中间帧并观察世界模型如何据此调整未来轨迹。模型在 Xbox 游戏《Bleeding Edge》的多人对战数据上训练，学习到了 3D 游戏环境中复杂的物理交互、角色动态和控制器映射关系。WHAM 的权重、评估数据集和交互式演示器已开源，为创意 AI 研究提供了可复现的基准。

## 技术架构

**Vision Encoding（视觉编码）**：WHAM 采用 VQ-VAE 风格的图像 tokenizer 将 128×128 的游戏画面编码为离散视觉 token 序列。同时，控制器动作被量化为离散 token，与视觉 token 共享同一词汇空间。这种统一的 token 化使得视频帧和控制器序列可以用同一个自回归 Transformer 建模。编码器还保留了下采样的空间结构，使 Transformer 可以学习帧内和帧间的双重依赖关系。

**Knowledge Learning（知识学习）**：WHAM 的核心是一个大容量自回归 Transformer，在《Bleeding Edge》数年的多人对局数据上训练，建模"视觉 token + 动作 token"的联合序列。训练目标为标准的 next-token prediction。通过在大规模 3D 多人游戏数据上的自监督学习，模型自动学会了：3D 场景的几何结构、碰撞检测的物理约束、角色的动作动画与移动物理、以及多人互动中的社交动力学。WHAM 最大的创新是利用了**游戏数据的天然多模态监督**——画面、手柄输入、游戏引擎的物理反馈隐式地提供了稠密的训练信号。

**Controllable Simulation（可控模拟）**：WHAM 支持两种控制模式：(1) 以初始帧 + 真实控制器序列为条件，生成一致的游戏画面（类似神经渲染）；(2) 以初始帧为条件，自回归地同时生成控制器动作和对应画面（开放式探索）。在多帧 level 上，用户可以通过修改中间帧来"注入"新元素（如新增一个角色），WHAM 能将此修改持久化到后续所有帧中。交互式 WHAM Demonstrator 提供了可视化的调参界面，支持用户探索不同"温度"参数下的生成多样性。

## 代码实现要点

WHAM 的模型权重和推理代码已在 HuggingFace 开源（microsoft/wham）。核心分为三个模块：(1) VQ-VAE tokenizer 负责图像- token 的双向转换；(2) 自回归 Transformer 主干（基于 GPT 架构）建模多模态 token 序列；(3) 采样/推理管道支持多种条件模式。演示器（WHAM Demonstrator）是一个交互式前端，支持拖拽修改帧、调整温度参数、对比多个生成轨迹。关键实现细节：动作 token 的词汇量约为图像 token 的 1/10，但通过位置编码共享统一的序列空间；推理时自回归的速度瓶颈通过 KV-cache 优化缓解。

## 关键创新点

- **首次以创意支持为驱动设计世界模型**：通过用户研究明确定义 Consistency、Diversity、Persistency 三个能力维度，并以此指导模型开发
- **统一的视觉-动作联合建模**：将游戏画面和控制器输入统一为离散 token 序列，用单一 Transformer 建模其联合分布，隐式学习游戏物理和交互规则
- **持久化用户修改**：支持用户直接对中间帧进行修改（如增加/删除物体），模型将修改融入后续自回归生成，这是当前视频生成模型普遍缺乏的能力
- **Nature 顶刊发表**：作为游戏 AI 领域的里程碑，WHAM 发表在 Nature 杂志上，代表了生成式世界模型在创意产业应用的突破性进展
- **完全开源**：模型权重、评估数据集和交互式演示器均在 HuggingFace 发布，为学术研究和产业应用提供了可复现的基础设施

## 代表性结果

WHAM 在三项核心能力上展现了领先的性能：一致性方面，在 128×128 分辨率下生成的游戏序列在数秒内保持空间和物理一致性，角色移动符合游戏引擎的物理约束；多样性方面，相同初始条件下可以生成多种合理的游戏发展轨迹（如不同的移动路线和交战策略）；持久性方面，用户添加的视觉元素能在后续帧中被正确渲染并保持合理的位置和交互。此外，模型展示了初步的规模化规律——随着模型参数量和训练数据的增加，生成质量和多样性均有提升。在用户研究中，WHAM Demonstrator 被游戏设计师用于快速原型验证和 brainstorm 场景探索。
