---
title: "CustomTTT: Motion and Appearance Customized Video Generation via Test-Time Training"
arxiv: https://arxiv.org/abs/2412.15646
github: https://github.com/RongPiKing/CustomTTT
website: https://customttt.github.io/
venue: AAAI
year: 2025
---

# CustomTTT: Motion and Appearance Customized Video Generation via Test-Time Training

::: info 论文信息
- **Venue**: AAAI (2025)
- **arXiv**: [2412.15646](https://arxiv.org/abs/2412.15646)
- **GitHub**: [RongPiKing/CustomTTT](https://github.com/RongPiKing/CustomTTT)
- **Website**: [Project Page](https://customttt.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 CustomTTT，实现外观（Appearance）和运动（Motion）的联合定制化视频生成
- 分析揭示外观定制和运动定制的 LoRA 仅需作用于 VDM 的不同特定层，揭示了各层的功能分化
- 提出测试时训练（Test-Time Training）技术，在组合多个独立训练的 LoRA 后通过额外优化消除组合伪影
- 在定性和定量评估上均优于现有 SOTA 定制化视频生成方法

### 方法细节
- 分别训练外观 LoRA 和运动 LoRA：外观 LoRA 从参考图像学习主体特征，运动 LoRA 从参考视频学习运动模式
- 通过分析发现，外观定制仅需在 VDM 的部分特定层（如交叉注意力层）插入 LoRA，运动定制仅需在时序相关层插入 LoRA，而非全层
- 将多个独立训练的 LoRA 直接组合注入同一网络时会产生明显伪影，原因是训练时各 LoRA 彼此独立、未考虑参数协同
- 测试时训练阶段：在推理时利用预训练的定制化模型对组合后的参数进行少量额外更新，使多个 LoRA 协同工作
- 测试时训练无需额外标注数据，利用模型自身生成能力进行自监督参数优化，仅在推理时执行少量更新

### 关键发现
- 外观定制和运动定制的 LoRA 作用于 VDM 的不同层，侧面揭示了不同层在视频生成中的功能分化——空间外观信息与时间运动信息由不同层负责
- 独立训练的 LoRA 直接简单组合会导致参数冲突，测试时训练是一种有效的后融合优化方法
- 仅需在测试时进行少量参数更新即可显著改善多概念组合的视频质量，证明了测试时优化的有效性

### 方法归类
- **范式**: 定制化视频生成 / 测试时训练 / 参数高效微调（LoRA）
- **关键技术**: 分层 LoRA 定制 → 测试时训练融合 → 外观-运动联合定制 → 自监督参数优化
- **适用场景**: 同时指定参考主体外观和参考视频运动，生成外观与运动双定制的视频
