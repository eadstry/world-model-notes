---
title: "One-Minute Video Generation with Test-Time Training"
arxiv: https://arxiv.org/abs/2504.05298
github: https://github.com/test-time-training/ttt-video-dit
website: https://test-time-training.github.io/video-dit/
venue: CVPR
year: 2025
---

# One-Minute Video Generation with Test-Time Training

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2504.05298](https://arxiv.org/abs/2504.05298)
- **GitHub**: [https://github.com/test-time-training/ttt-video-dit](https://github.com/test-time-training/ttt-video-dit)
- **Website**: [https://test-time-training.github.io/video-dit/](https://test-time-training.github.io/video-dit/)
:::

## 学习笔记

### 核心贡献
- 将 Test-Time Training (TTT) 层引入视频生成 Diffusion Transformer，实现 1 分钟长视频生成
- TTT 层的核心创新：将隐藏状态建模为一个小型神经网络（MLP），其表达能力远超 Mamba 等固定大小状态向量
- 在预训练 Transformer 视频模型中插入 TTT 层进行微调，保持原始模型权重不变
- 构建 Tom and Jerry 长视频数据集用于训练和评测
- 在人类偏好评估中比 Mamba 2 高出 +34 Elo

### 方法细节
- TTT 层结构：对每个序列位置，隐藏状态是一个迷你 MLP，通过自监督学习在测试时更新参数。输入 token 经 TTT 层时：(1) 用自身做自监督任务更新 MLP 权重；(2) 用更新后的 MLP 做前向传播输出 token
- 具体自监督任务：将 token 分为训练 token 和标签 token，用迷你 MLP 从训练 token 重建标签 token
- 残差插入：在已有 Transformer 的注意力层和前馈层之间插入 TTT 层作为残差模块，对外观 pre-trained Transformer 做最小侵入
- 序列建模能力对比：TTT > Mamba 2 > Gated DeltaNet > 滑动窗口注意力，因为 TTT 的隐藏状态（MLP）参数量随上下文长度线性增长
- 训练策略：先用预训练 Transformer 做短视频（2-4 秒）训练，再冻结 Transformer 部分仅训练 TTT 层适应长序列

### 关键发现
- 长视频生成的关键瓶颈在于序列建模的表达能力而非计算量——TTT 层通过更表达力的隐藏状态解决了长期依赖问题
- TTT 层的参数量可随序列长度自适应调整，使其在长视频场景中具有天然优势

### 方法归类
- **范式**: Test-Time Training 增强的 Diffusion Transformer
- **关键技术**: TTT 层（隐藏状态即神经网络）、自监督在线学习、残差式模型扩展、冻结预训练权重微调
- **适用场景**: 长视频生成（1 分钟+）、故事化视频生成、需要强时序一致性的视频任务
