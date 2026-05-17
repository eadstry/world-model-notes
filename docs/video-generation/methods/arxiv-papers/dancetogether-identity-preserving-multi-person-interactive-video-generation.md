---
title: "DanceTogether! Identity-Preserving Multi-Person Interactive Video Generation"
arxiv: https://arxiv.org/abs/2505.18078v1
github: https://github.com/yisuanwang/DanceTog
website: https://DanceTog.github.io/
venue: arXiv
year: 2025
---

# DanceTogether! Identity-Preserving Multi-Person Interactive Video Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2505.18078v1](https://arxiv.org/abs/2505.18078v1)
- **GitHub**: [https://github.com/yisuanwang/DanceTog](https://github.com/yisuanwang/DanceTog)
- **Website**: [https://DanceTog.github.io/](https://DanceTog.github.io/)
:::

## 学习笔记

### 核心贡献

DanceTogether 解决了可控视频生成中一个尚待突破的难题：**多人物交互场景下的身份保持（Identity Preservation）**。当画面中多于一个人物需要运动、交互并交换位置时，现有方法在噪声控制信号下极易发生身份漂移（Identity Drift）和外观混淆（Appearance Bleeding）。本文做出三项贡献：（1）提出首个**端到端身份保持多人物交互视频扩散框架**，仅需一张参考人物图像 + 独立的姿态-掩码流（Pose-Mask Streams），即可生成长时序、高写实度的交互视频；（2）设计**MaskPoseAdapter**——在每个去噪步骤中将鲁棒的物体跟踪掩码（Tracking Mask）与语义丰富但噪声较大的姿态热力图（Pose Heatmap）进行融合绑定，解耦"谁（Who）"与"如何动（How）"，从根本上消除身份漂移；（3）构建三个数据集与评测基准：PairFS-4K（26 小时双人花滑，7000+ 独立身份）、HumanRob-300（1 小时人形机器人交互，用于跨域迁移验证）、TogetherVideoBench 统一评测框架，覆盖舞蹈、拳击、摔跤、瑜伽和花滑五类交互场景。

### 方法细节

DanceTogether 以预训练视频扩散模型（基于时空 UNet）为骨干，关键创新在于 MaskPoseAdapter 的身份-动作绑定机制：

1. **输入表示**：给定 $N$ 个人的参考图像 $\{\mathbf{I}_{\text{ref}}^i\}_{i=1}^N$ 和对应的姿态-掩码序列 $\{(\mathbf{P}_t^i, \mathbf{M}_t^i)\}_{i=1}^N$，其中 $\mathbf{P}_t^i$ 为第 $i$ 人在时刻 $t$ 的姿态关键点热力图（Pose Heatmap，含 17 个 COCO 关键点），$\mathbf{M}_t^i$ 为同一人的物体跟踪掩码（Tracking Mask，二值图，$1$ 表示该人物像素区域）。

2. **MaskPoseAdapter**：
   - **掩码引导的姿态编码**：对每个人物 $i$，将其姿态热力图 $\mathbf{P}_t^i$ 与跟踪掩码 $\mathbf{M}_t^i$ 进行哈达玛积（Hadamard Product）运算：$\mathbf{F}_t^i = \mathbf{P}_t^i \odot \mathbf{M}_t^i$，产生**掩码受限姿态特征**——仅在掩码区域内保留姿态信息，区域外置零。这一步迫使模型将"运动类型"与"人物区域"严格绑定。
   - **身份嵌入注入**：参考图像 $\mathbf{I}_{\text{ref}}^i$ 经 CLIP 图像编码器提取身份嵌入向量 $\mathbf{e}_{\text{id}}^i$，通过交叉注意力注入到 UNet 的中间层，提供该人物的外观先验。
   - **多人特征聚合**：$N$ 个人的 $\mathbf{F}_t^i$ 在空间维度上按掩码区域叠加（非直接求和，而是按像素取最大值域的索引），形成一张复合控制图 $\mathbf{F}_t^{\text{comp}}$，与噪声潜在变量进行通道维拼接后输入 UNet。

3. **时序一致性保障**：追踪掩码由 SOTA 视频目标分割模型（如 SAM 2.1）对训练视频逐帧生成，确保了"同一掩码 ID 始终追踪同一物理实体"的时序连续性，这是身份保持的关键先验——任何一帧的 ID 交换都会在训练中形成强监督信号以抑制混淆。

4. **训练策略**：两阶段训练——第一阶段在 PairFS-4K 上以双人交互为主进行充分训练，固化 MaskPoseAdapter 的身份-动作绑定能力；第二阶段在 HumanRob-300 上进行仅 1 小时的微调（One-Hour Fine-Tune），展示模型向人机交互（HRI）领域的快速迁移能力。

### 关键发现

- **身份保持能力**：在 TogetherVideoBench 的 DanceTogEval-100 测试集上，DanceTogether 的身份一致性指标（ID Consistency）比此前最优方法（MagicAnimate、Animate Anyone 的多人适配版）提升约 30%，且几乎消除了多人交换位置时的外观渗透（Appearance Bleeding）现象。
- **MaskPoseAdapter 消融**：移除掩码约束、仅使用姿态热力图时，模型在多人场景中频繁出现"张三的脸跑到李四身上"的身份混淆；仅使用掩码、移除姿态信息时，人物虽能保持身份但动作僵硬且不符合控制信号。二者融合才能同时保证身份与动作的忠实度。
- **快速跨域迁移**：HumanRob-300 上的 1 小时微调实验表明，DanceTogether 学习到的"身份-动作绑定"能力是可迁移的抽象知识——模型快速适配到人形机器人的运动学约束和外观特征，生成的人-机器人交互视频在物理合理性和身份保持上均表现优异，预示其在具身智能（Embodied AI）和人机交互（HRI）任务中的潜力。
- **幻觉抑制**：传统的逐帧独立生成方法在人物重叠、遮挡时易产生"多余肢体"或"身份融合"的幻觉，MaskPoseAdapter 的逐步骤绑定机制有效抑制了这类伪影——在遮挡场景下的肢体完整率（Limb Integrity）提升超过 40%。

### 方法归类

- **所属范式**：身份保持的可控人物视频生成（Identity-Preserving Controllable Human Video Generation），属于**条件人物动画扩散模型**。
- **技术路线**：基于预训练视频扩散骨干 + 参考图像身份注入 + 掩码约束运动控制（Adapter 范式），属于**人物驱动视频生成（Human Motion Transfer / Pose-Guided Generation）**的进阶方向。
- **相关方法**：继承自 MagicAnimate（单人生成）、Animate Anyone（外观保持）、DisCo（多人舞蹈），核心突破在于通过**逐去噪步骤的身份-动作解耦绑定**解决多人场景的身份混淆问题，而非依赖后处理或额外判别器。与 Ctrl-Crash、CtrlVDiff 分别代表可控视频扩散在**事件仿真**、**物理编辑**和**人物交互**三个正交方向上的前沿进展。
- **应用领域**：虚拟现实多人社交、影视/动画多角色内容生成、体育训练与动作分析、具身智能中的人机交互模拟、虚拟试衣/舞蹈编排。
