---
title: "Causally Steered Diffusion for Automated Video Counterfactual Generation"
arxiv: https://arxiv.org/abs/2506.14404v2
github: https://github.com/nysp78/counterfactual-video-generation
website: https://nysp78.github.io/counterfactual-video-generation/
venue: arXiv
year: 2025
---

# Causally Steered Diffusion for Automated Video Counterfactual Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2506.14404v2](https://arxiv.org/abs/2506.14404v2)
- **GitHub**: [https://github.com/nysp78/counterfactual-video-generation](https://github.com/nysp78/counterfactual-video-generation)
- **Website**: [https://nysp78.github.io/counterfactual-video-generation/](https://nysp78.github.io/counterfactual-video-generation/)
:::

## 学习笔记

### 核心贡献
- 首次将因果推断（Causal Inference）与视频生成结合，定义因果反事实视频生成（Causal Counterfactual Video Generation）为 OOD（out-of-distribution）预测任务：给定观察视频，生成改变指定因果变量后的反事实视频
- 提出 Causally Steered Diffusion（CSVC）框架：将因果图结构编码为文本提示（causal graph $\to$ text prompt），通过 VLM 文本损失引导 LDM latent 空间向因果反事实方向演化
- 完全黑盒兼容（black-box compatible）：无需修改预训练扩散模型内部结构、无需微调、无需访问模型参数，仅需 VLM 可微分文本损失作为引导信号
- 定义了因果有效性（Causal Effectiveness）与因果最小性（Causal Minimality）两个评估指标：有效性衡量反事实结果是否真的体现了因果干预的效果，最小性要求仅改变目标因果变量而保持其他因素不变
- 在面部视频数据集上验证，展示了 CSVC 可自动化生成高质量因果反事实视频（如改变表情、年龄、光照等因果因子），无需人工标注或专家因果建模

### 方法细节
- 输入为一段观测视频 $V_{obs}$ 与因果图 $G$（描述因果变量间的结构关系），目标因果干预变量 $X$（do-operator），输出为该干预下的反事实视频 $V_{cf}$
- 因果图到文本提示映射：将因果图 $G$ 解析为「节点变(Edge) ⇔ 文本关系描述」的映射表，干预变量 $X$ 结合图中因果关系生成形式为「如果 $X$ 发生了改变，同时保持 $Y, Z$ 不变，视频应该呈现……」的结构化提示词
- 引导去噪过程：在扩散模型每一步去噪中，将当前 latent code $z_t$ 解码为低分辨率图像帧，投入 VLM（如 CLIP）计算文本-图像对齐分数作为损失 $\mathcal{L}_{text}$，梯度 $\nabla_{z_t} \mathcal{L}_{text}$ 用于修正 $z_t$ 的去噪方向，迭代引导 latent 向反事实方向逼近
- 因果最小性约束：引入正交投影正则 $\mathcal{L}_{min}$，约束干预变量 $X$ 对应的 latent 方向与无关变量 $Z$ 对应的 latent 方向正交，减少无关因素受干扰
- 评估时采用面部动作单元（Action Units）与因果变量之间的对应关系，通过回归模型量化干预后目标变量的变化幅度（有效性）及非目标变量的变化幅度（最小性）

### 关键发现
- 仅通过文本引导（不修改模型参数）即可在 LDM latent 空间中实现有效的因果干预，说明预训练扩散模型的 latent 空间已蕴含丰富的因果语义结构
- 因果最小性约束对于反事实片段的自然度至关重要：在没有 $\mathcal{L}_{min}$ 时，反事实片段往往表现出生硬的「风格迁移」效果，而非自然的因果变化
- VLM 的选择对引导效果影响显著：CLIP 在面部属性相关因果关系中表现良好，但更复杂的场景因果（如物理因果）可能需要更强的 VLM（如 Video-LLaMA）作为引导器

### 方法归类
- **范式**: Causally Steered Diffusion / 黑盒因果反事实视频生成
- **关键技术**: 因果图到文本提示映射、VLM 文本损失引导去噪、因果最小性正交正则、do-operator 因果干预建模、OOD 预测视角
- **适用场景**: 因果反事实视频生成（What-if 场景）、面部属性因果干预（表情/年龄/光照）、社会/医疗场景下的反事实推理可视化、可解释 AI 的视频化展示
