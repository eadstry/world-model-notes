---
title: "CustomCrafter: Customized Video Generation with Preserving Motion and Concept Composition Abilities"
arxiv: https://arxiv.org/abs/2408.13239
github: https://github.com/WuTao-CS/CustomCrafter
website: https://customcrafter.github.io/
venue: AAAI
year: 2025
---

# CustomCrafter: Customized Video Generation with Preserving Motion and Concept Composition Abilities

::: info 论文信息
- **Venue**: AAAI (2025)
- **arXiv**: [2408.13239](https://arxiv.org/abs/2408.13239)
- **GitHub**: [WuTao-CS/CustomCrafter](https://github.com/WuTao-CS/CustomCrafter)
- **Website**: [Project Page](https://customcrafter.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 CustomCrafter，在定制化视频生成中同时保留 VDMs 的运动生成能力和概念组合能力，无需额外参考视频或重新微调
- 设计即插即用（Plug-and-Play）主体学习模块，仅更新 VDM 少量参数即可增强对新主体外观细节的捕捉和概念组合能力
- 提出动态加权视频采样策略（Dynamic Weighted Video Sampling），根据去噪阶段自适应调节主体模块的影响强度
- 发现 VDMs 在去噪过程中存在明确阶段分工——早期关注运动恢复，后期关注外观细节，并据此设计阶段感知的权重调节机制

### 方法细节
- 主体学习模块以插件形式插入 VDM，通过更新少量参数增强模型对新主体外观和概念组合的捕捉能力
- 动态加权采样策略的核心：去噪早期降低主体学习模块的权重，保留 VDM 原有的运动生成能力；去噪后期恢复模块权重，修复指定主体的外观细节
- 利用模块的即插即用特性，通过动态调整模块权重实现去噪阶段的自适应控制，无需重新训练
- 主体学习模块训练仅使用静态参考图像，不依赖额外视频数据或引导视频
- 整个流程无需针对不同运动模式频繁更换引导视频或重新微调，用户使用便捷

### 关键发现
- 视频扩散模型在去噪过程的不同阶段有明确的功能分化——早期关注运动生成，后期关注外观细节修复
- 动态加权策略利用这一阶段分工特性，在不牺牲运动质量的前提下保持主体外观保真度
- 即插即用模块设计使定制化视频生成更加灵活高效，避免了现有方法需要频繁更换引导视频或重新微调的痛点

### 方法归类
- **范式**: 定制化视频生成 / 参数高效微调 / 即插即用模块
- **关键技术**: 即插即用主体学习 → 动态加权视频采样 → 去噪阶段分工利用 → 冻结主干训练
- **适用场景**: 给定参考图像生成包含特定主体的定制化视频，需保留原模型运动多样性和概念组合能力
