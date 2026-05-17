---
title: "UniVerse-1: Unified Audio-Video Generation via Stitching of Experts"
arxiv: https://arxiv.org/abs/2509.06155
github: https://github.com/Dorniwang/UniVerse-1-code
website: https://dorniwang.github.io/UniVerse-1/
venue: arXiv
year: 2025
---

# UniVerse-1: Unified Audio-Video Generation via Stitching of Experts

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2509.06155](https://arxiv.org/abs/2509.06155)
- **GitHub**: [https://github.com/Dorniwang/UniVerse-1-code](https://github.com/Dorniwang/UniVerse-1-code)
- **Website**: [https://dorniwang.github.io/UniVerse-1/](https://dorniwang.github.io/UniVerse-1/)
:::

## 学习笔记

### 核心贡献
- 提出 UniVerse-1，一个类似 Veo-3 的统一音视频联合生成模型，能够同步生成协调的音频和视频内容
- 提出专家拼接（Stitching of Experts, SoE）技术，将预训练的视频生成专家模型和音乐生成专家模型的对应层进行深度融合，无需从头训练即可充分复用已有基础能力
- 设计在线标注管线（Online Annotation Pipeline），在训练过程中实时为训练数据生成标注和时序对齐标签，规避传统离线标注中文本与音视频时序错位导致的性能退化
- 仅使用约 7600 小时音视频数据进行微调即可产出环境音生成协调、语音生成对齐良好的结果
- 构建 Verse-Bench 新基准数据集用于系统评估音视频联合生成质量，并开源模型与代码以推动社区发展

### 方法细节
- SoE 技术核心是将两个独立预训练的专家模型（视频生成专家和音乐生成专家）在对应 Transformer 层进行深度融合，通过可学习的拼接模块在各层之间传递和融合跨模态信息，而非简单地在输入端或输出端做浅层拼接
- 视频专家提供视觉内容的生成能力和时序动态建模，音乐专家提供音频语义理解和声学质量保障，拼接后两者协同合作，在保持各自模态优势的同时建立跨模态配准
- 在线标注管线在训练过程中同步处理原始音视频数据，自动生成环境音和语音的时间对齐标注，避免了预标注数据的偏差和滞后问题，确保训练标签与模型当前学习状态匹配
- 训练分为两个阶段：预训练阶段利用 SoE 在大规模无标注数据上进行自监督跨模态对齐学习，微调阶段使用 7600 小时精心筛选的音视频数据进行有监督训练
- Verse-Bench 基准包含多样化的音视频场景，涵盖环境音生成、语音-唇形同步、动作-音效对齐等多个子任务，提供标准化的评估协议

### 关键发现
- SoE 技术通过复用预训练专家的基础能力，显著降低了从头训练统一音视频模型所需的计算资源，同时避免了多模态训练中的灾难性遗忘问题
- 在线标注管线相比传统离线标注方案，使语音对齐准确率有显著提升，验证了训练同步标注策略在需要精确时序对齐任务中的优势
- 在仅 7600 小时微调数据下，UniVerse-1 的环境音生成质量已能接近专有模型 Veo-3 的水平，表明 SoE 范式在缩小开源与闭源模型差距方面具有较大潜力

### 方法归类
- **范式**: 专家拼接（SoE）+ 扩散模型
- **关键技术**: 专家拼接深度融合、在线标注管线、跨模态协同微调
- **适用场景**: 音视频联合生成、环境音自动生成、语音-视频同步合成
