---
title: "Moto: Latent motion token as the bridging language for learning robot manipulation from video"
design: "Moto"
arxiv: https://arxiv.org/abs/2412.04445
github: https://github.com/TencentARC/Moto
---

# Moto: Latent motion token as the bridging language for learning robot manipulation from video

::: info 论文信息
- **Design**: Moto
- **论文全称**: Moto: Latent motion token as the bridging language for learning robot manipulation from video
- **arXiv**: [https://arxiv.org/abs/2412.04445](https://arxiv.org/abs/2412.04445)
- **GitHub**: [https://github.com/TencentARC/Moto](https://github.com/TencentARC/Moto)
:::

## 论文信息

- **arXiv**: [2412.04445](https://arxiv.org/abs/2412.04445)
- **GitHub**: [https://github.com/TencentARC/Moto](https://github.com/TencentARC/Moto)
- **发表时间**: 2024年12月（ICCV 2025 Oral）
- **作者团队**: 腾讯ARC Lab（Yi Chen, Yuying Ge, Yixiao Ge, Ying Shan, Xihui Liu 等）

## 核心思想

Moto提出了一个核心问题：鉴于互联网上有大量包含交互知识的视频数据作为丰富的"语料库"，能否采用类似大语言模型的生成式预训练方法来增强机器人学习？关键挑战在于：什么样的表征形式适合用于自回归预训练并最终有利于机器人操作任务？

Moto的回答是：有效的机器人学习应该强调运动相关知识（motion-related knowledge）——运动与底层动作紧密相关，且与硬件无关（hardware-agnostic），便于将学到的运动迁移到实际机器人动作中。基于此，Moto提出了潜在运动分词器（Latent Motion Tokenizer），以无监督方式将视频内容转化为潜在运动token序列，学习一种"运动语言"作为视觉与动作之间的桥梁。

Moto通过运动token自回归预训练Moto-GPT，使其具备生成语义可解释运动token、预测合理运动轨迹以及通过输出似然评估轨迹合理性的能力。最关键的是，Moto提出了一种联合微调策略（co-fine-tuning strategy），无缝桥接潜在运动token预测和真实机器人控制，将从视频中学到的运动先验有效迁移到实际机器人操作中。

## 技术架构

### Vision Encoding（视觉编码）
Moto使用MAE（Masked Autoencoder）Large作为视觉骨干网络来提取视频帧的特征。视觉编码分为两个层次：(1) 单帧特征提取——通过预训练的MAE Large对每帧进行编码，获得高维视觉特征；(2) 运动信息提取——Latent Motion Tokenizer从连续多帧的视觉特征中提取帧间运动变化信息，将其量化为离散的运动token（codebook size=128, dim=32, num_quantizers=8）。视觉编码器在训练Latent Motion Tokenizer时一起优化。

### Knowledge Learning（知识学习）
Moto的知识学习分为两个阶段：
- **Stage 1 — 训练Latent Motion Tokenizer**: 采用VQ-VAE范式，输入连续视频帧的视觉特征，通过编码器提取运动信息并量化为离散token，解码器通过运动token重建未来的视觉特征。Tokenizer在CALVIN或Open X-Embodiment数据集上训练。
- **Stage 2 — 预训练Moto-GPT**: 基于自回归Transformer，将视觉token和运动token交织为序列，通过next-token prediction预训练。训练时对运动token施加mask（mask_prob=0.5），使模型学会从部分观察中推理完整运动。在Open X-Embodiment百万级轨迹上预训练。

### Controllable Simulation（可控模拟）
Moto的控制能力通过联合微调实现——Stage 3同时优化运动token预测和真实机器人动作预测。在Moto-GPT输出端增加动作预测头，同时预测运动token和动作（如末端执行器7自由度位姿），使两个任务共享视觉和运动表征。推理时，Moto-GPT接收历史视觉观察，自回归预测运动token和动作序列。模型在CALVIN（长序列操作）和SIMPLER（真实机器人）基准上评估。

## 代码实现要点

- **完整开源**: 腾讯ARC Lab开源，173+ Stars，包含训练和推理代码
- **三阶段训练**: Tokenizer训练 → Moto-GPT预训练 → 联合微调
- **模型发布**: HuggingFace提供Latent Motion Tokenizer、预训练Moto-GPT和微调Moto-GPT
- **关键代码结构**: latent_motion_tokenizer（VQ-VAE风格运动分词器）、moto_gpt（自回归GPT架构）、data_preprocessing（CALVIN和OXE预处理）、scripts（训练和评估脚本）
- **评估框架**: CALVIN（ABCD split长序列测试）、SIMPLER（真实机器人操作）
- **参考项目**: Taming Transformers、Phenaki-Pytorch、GR-1

## 关键创新点

1. **运动作为桥梁语言**: 首次将视频中的运动信息抽象为离散token，作为视觉与动作之间的通用中间表示
2. **硬件无关**: 运动token不绑定特定机器人平台，实现跨embodiment的运动知识迁移
3. **无监督运动学习**: Latent Motion Tokenizer完全无监督地从视频中学习运动表示
4. **联合微调**: 创新多任务微调策略，同时优化运动预测和动作预测，实现视频知识到机器人控制的平滑迁移
5. **运动轨迹评估**: 预训练后的Moto-GPT可通过输出似然评估运动轨迹合理性

## 代表性结果

- 在CALVIN基准上展现卓越的长序列操作能力
- 在SIMPLER真实机器人基准上表现鲁棒
- Latent Motion Tokenizer学到语义可解释的运动token
- 在Open X-Embodiment大规模预训练后有显著的迁移效果
- ICCV 2025 Oral接收
