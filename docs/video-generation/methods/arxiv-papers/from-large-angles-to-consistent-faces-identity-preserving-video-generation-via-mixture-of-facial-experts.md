---
title: "从大角度到一致人脸：基于面部专家混合的身份保持视频生成"
source: "arxiv"
arxiv_id: "2508.09476"
tags:
  - "video-generation"
  - "identity-preservation"
  - "face-generation"
  - "DiT"
  - "mixture-of-experts"
  - "data-curation"
status: "已读"
---
## 学习笔记

### 核心贡献

- 提出 CoFE（Collaborative Face Experts Fusion），在 DiT 主干网络中动态融合三个专家化模块：身份专家（identity expert）捕捉跨姿态不变特征，语义专家（semantic expert）编码高层视觉上下文，细节专家（detail expert）保留皮肤纹理与颜色梯度等像素级属性
- 设计数据筛选管道，包含面部约束（Face Constraints）、身份一致性（Identity Consistency）和语音消歧（Speech Disambiguation）三个组件，构建 LaFID-180K 大规模姿态标注视频数据集
- 解决了现有视频生成模型在大角度面部姿态下身份保持困难的问题，通过专家混合机制将互补信息注入 DiT 架构
- 填补了开源视频数据集中大角度面部姿态覆盖不足的空白

### 方法细节

- **整体架构**：基于 DiT（Diffusion Transformer）的视频生成框架，在去噪过程中引入三个面部专家模块
- **CoFE 融合机制**：
  - 身份专家：使用身份编码器从参考图像提取身份特征，捕捉对姿态变化不敏感的全局身份信息
  - 语义专家：从参考图像中提取高层语义信息（面部结构、表情语义等），提供视觉上下文约束
  - 细节专家：保留纹理、肤色梯度等像素级细节属性，确保生成面部的高保真度
  - 三个专家的输出通过动态融合权重组合，注入 DiT 的各层 attention 或 cross-attention 中
- **LaFID-180K 数据集构建**：
  - 面部约束：基于面部关键点检测，筛选包含大角度姿态的视频片段
  - 身份一致性：使用人脸识别模型确保同一视频片段中的面部属于同一身份
  - 语音消歧：利用音频-视觉同步信号排除多说话人场景，保证人脸与语音的匹配

### 关键发现

- CoFE 在大角度面部姿态下的身份保持效果显著优于基线方法（如 ID-Animator 等），在 FaceNet 身份距离和 ArcFace 余弦相似度等指标上取得提升
- 三个专家的消融实验表明，身份专家和细节专家的组合对最终效果贡献最大，语义专家提供额外的一致性增益
- LaFID-180K 数据集的引入有效缓解了大角度姿态下训练数据不足的问题，在多个姿态范围的子集上均有稳定提升
- 定性结果显示，CoFE 生成的人脸在旋转、俯仰等极端角度下仍能保持身份一致性和视觉质量

### 方法归类

- **所属范式**：基于 DiT 的视频生成 + 身份保持注入
- **技术路线**：专家混合（Mixture of Experts）在扩散模型中的身份感知融合
- **相关方法**：ID-Animator, Animate Anyone, LivePortrait, IP-Adapter（身份注入范式）
- **应用领域**：数字人动画、虚拟主播、影视面部替换、身份保持的视频编辑
