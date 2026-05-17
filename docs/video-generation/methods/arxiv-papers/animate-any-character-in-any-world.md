---
title: "Animate Any Character in Any World"
arxiv: https://arxiv.org/abs/2512.17796
github: https://github.com/snowflakewang/AniX
website: https://snowflakewang.github.io/AniX/
venue: arXiv
year: 2025
---

# Animate Any Character in Any World

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2512.17796](https://arxiv.org/abs/2512.17796)
- **GitHub**: [https://github.com/snowflakewang/AniX](https://github.com/snowflakewang/AniX)
- **Website**: [https://snowflakewang.github.io/AniX/](https://snowflakewang.github.io/AniX/)
:::

## 学习笔记

### 核心贡献
- 桥接静态世界生成模型与可控实体模型两大范式：利用静态世界生成的逼真度和结构 grounding，同时扩展可控实体模型以支持用户指定的任意角色在开放世界中执行多样化动作。
- 提出 **AniX** 系统：用户提供 3DGS 场景 + 3D/多视图角色，通过自然语言指令控制角色行为（行走、手势、物体交互、自由探索），生成时间连贯的视频片段。
- 将问题形式化为条件自回归视频生成：以场景渲染视频、mask 序列、文本指令和多视图角色 token 为条件，基于预训练视频生成器进行 Flow Matching 训练。
- 轻量微调策略仅用基础运动数据（行走、站立等）增强运动动态，同时保留预训练生成器对未见动作的强泛化能力——类比 LLM 的 post-training，不破坏预训练表示空间，仅调整输出风格。

### 方法细节
- **Multi-Modal Diffusion Transformer**：接收四种条件输入——3DGS 场景视频（渲染获得）、角色 mask 序列（分割 + inpainting 生成）、文本指令、多视图角色 token（从 3D 角色渲染多视角图像）。
- **自回归生成模式**：引入额外条件输入——前一视频片段的 token，支持多轮交互和长时域生成，保持相邻片段间的时间连续性与语义连贯性。
- **推理流程**：(a) 用户指定角色、3DGS 场景、虚拟相机位置、角色锚点；(b) 文本指令解析后生成相机路径，渲染对应场景视频；(c) AniX 接收多条件输入生成最终视频；(d) 支持迭代交互，每轮利用前一轮生成结果作为上下文。
- **训练数据构建**：通过分割和 inpainting 从角色 + 视频对中提取场景视频和 mask 序列，训练数据以基础运动为主。
- 在视觉质量、角色一致性、动作可控性和长时域连贯性四维度评估，展示对未见角色、未见动作和未见场景的强泛化。

### 关键发现
- 基础运动数据微调足以唤醒预训练视频生成器的运动动态能力，预训练阶段已编码了丰富的动作知识，轻量微调仅将其「对齐」到人体 embodiment 表示。
- 自回归条件引入对长时域连贯性至关重要，但需要平衡上下文窗口长度与生成质量退化。

### 方法归类
- **范式**: 条件自回归视频生成（Conditional Autoregressive Video Generation）
- **关键技术**: 3D Gaussian Splatting 场景、多模态 Diffusion Transformer、Flow Matching、多视图角色编码、相机可控渲染
- **适用场景**: 虚拟世界角色动画、交互式环境模拟、游戏内容生成、数字人驱动
