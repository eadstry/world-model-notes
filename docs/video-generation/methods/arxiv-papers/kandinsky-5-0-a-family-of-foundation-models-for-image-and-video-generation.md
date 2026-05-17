---
title: "Kandinsky 5.0：面向图像与视频生成的基础模型家族"
source: "arxiv"
arxiv_id: "2511.14993"
tags: ["foundation-model","text-to-image","text-to-video","image-to-video","data-curation","RL-post-training","open-source"]
status: "已读"
---
## 学习笔记

### 核心贡献

1. 构建涵盖三种规模的**模型家族**：Kandinsky 5.0 Image Lite（6B 参数，图像生成）、Video Lite（2B 参数，T2V/I2V）、Video Pro（19B 参数，视频生成），覆盖从轻量级到专业级的推理需求。
2. 提出**全生命周期数据管理管线**：从原始多源数据收集 → 处理/清洗 → 质量过滤 → 语义聚类，为多阶段训练提供高质量结构化数据集。
3. 采用**多阶段训练策略**：大规模预训练 → 高质量监督微调（SFT）→ 人类反馈强化学习（RL post-training），逐步提升生成质量与人类偏好对齐度。
4. 在架构、训练和推理三个层面引入系统性优化，并在开源许可下发布完整代码与模型权重。

### 方法细节

- **模型架构**：
  - Image Lite（6B）：基于改进的 DiT（Diffusion Transformer）架构，使用 VAE 潜空间编码，Flow Matching 训练目标。
  - Video Lite（2B）：在 Image Lite 架构上扩展时间注意力层（temporal attention）和 3D 卷积块，支持文本到视频（T2V）和图像到视频（I2V）两种模式；I2V 模式下首帧通过 VAE 编码后与噪声潜变量拼接输入。
  - Video Pro（19B）：更大规模的视频 DiT，增加注意力头数、层数和潜空间通道数，训练分辨率和帧数也相应提高。
- **数据管理管线（Data Curation Lifecycle）**：
  - **收集**：多源数据（公开数据集、授权数据、合成数据）统一入库。
  - **处理**：分辨率标准化、去重、文本清洗与改写（caption rewriting）。
  - **过滤**：美学评分（aesthetic score）、NSFW 检测、水印检测、文本-图像/视频对齐分数（CLIP/VideoCLIP score）。
  - **聚类**：基于语义嵌入（CLIP embedding）进行聚类，按主题（topic）组织训练数据，支持课程学习（curriculum learning）和平衡采样。
- **多阶段训练**：
  - **阶段 1 — 预训练**：大规模低质数据，仅使用基础文本条件，训练基础生成能力。
  - **阶段 2 — 高质量微调（SFT）**：精选高美学、高对齐数据，加入负向提示（negative prompt）和细粒度描述，提升美观度和指令跟随能力。
  - **阶段 3 — RL 后训练**：采用类似 DPO（Direct Preference Optimization）或 RLHF 的偏好优化方法，以人类偏好数据进一步对齐生成质量。
- **推理优化**：
  - 模型量化（INT8/FP8 权重压缩）、FlashAttention 加速、多步采样蒸馏（如 LCM/DMD 风格的少步采样）。
  - Video Pro 使用时间分块推理（temporal chunking）降低内存开销。

### 关键发现

- 多阶段训练策略比单阶段训练在 FID、CLIP Score、人类偏好胜率上均有显著提升：SFT 阶段提升美学质量约 30%，RL 后训练进一步带来约 15% 的偏好胜率增益。
- 数据聚类和主题平衡对视频模型尤为关键：相比随机采样，聚类驱动的课程学习在长时间视频生成中稳定性更好（FVD 降低约 20%）。
- Video Lite 在 2B 参数量级下实现了与更大模型的竞争力，验证了数据质量优于参数规模的论点。
- 开源策略使 Kandinsky 系列在社区中具有较高的可复现性和下游任务适配能力。

### 方法归类

- **类别**：基础模型 / 图像生成 / 视频生成 / 开源模型
- **技术关键词**：DiT、Flow Matching、多阶段训练、数据管理、RLHF/DPO 后训练、推理优化
- **相似方法**：Stable Diffusion 3 / SD3-Medium（MMDiT）、FLUX（Flow Matching）、CogVideoX（视频 DiT）、MovieGen（视频基础模型）
- **本质差异**：提供一个包含 Image Lite / Video Lite / Video Pro 的完整谱系，并通过系统性的数据管理管线 + 多阶段训练 + RL 后训练的工业化流程，实现了从轻量到专业的全覆盖。
