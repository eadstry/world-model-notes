---
title: "UnifiedReward-Flex: A Unified Personalized Reward Model for Vision Generation"
arxiv: https://arxiv.org/abs/2602.02380
github: https://github.com/CodeGoat24/UnifiedReward
website: https://codegoat24.github.io/UnifiedReward/flex
venue: arXiv
year: 2026
---

# UnifiedReward-Flex: A Unified Personalized Reward Model for Vision Generation

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2602.02380](https://arxiv.org/abs/2602.02380)
- **GitHub**: [https://github.com/CodeGoat24/UnifiedReward](https://github.com/CodeGoat24/UnifiedReward)
- **Website**: [https://codegoat24.github.io/UnifiedReward/flex](https://codegoat24.github.io/UnifiedReward/flex)
:::

## 学习笔记

### 核心贡献
- 指出现有视觉奖励模型（Reward Model）存在"一刀切"问题：假设单一的偏好分布或依赖固定的评估准则，难以捕捉内容特异的视觉线索，导致与人类主观、上下文依赖的偏好产生系统性错位
- 提出 UnifiedReward-Flex，一种统一的个性化视觉生成奖励模型，将奖励建模与灵活、上下文自适应的推理能力相结合
- 设计分层评估框架：根据输入 prompt 和生成视觉内容，先解释语义意图并建立视觉证据依据，再在预定义和自生成的高层维度下动态实例化细粒度评估准则
- 采用两阶段训练管线：先从先进闭源 VLM 蒸馏结构化推理轨迹进行 SFT，赋予模型灵活推理行为；再通过 DPO 在精心筛选的偏好对上强化推理忠实度和判别性对齐
- 将 UnifiedReward-Flex 集成到 GRPO 框架中用于图像和视频合成，实验验证其作为奖励信号的有效性

### 方法细节
- 奖励模型的推理流程分为两步：第一步语义意图解读，基于 prompt 与生成内容进行视觉证据定位，理解用户期望的视觉目标；第二步分层评估构建，在高层次维度（如构图、风格、语义对齐等）下动态生成符合具体场景的细粒度评判指标
- 维度系统同时包含预定义通用维度（由先验知识固定）和自生成维度（模型根据内容自行生成），确保评估既覆盖常见质量标准，又能适配内容特异性需求
- SFT 阶段：使用闭源 VLM 生成的详细推理链作为教师信号，训练模型进行结构化评估推理，使其具备"先理解、再评判"的能力
- DPO 阶段：构建偏好数据对，其中胜出样本具有更忠实于视觉证据的推理过程，通过直接偏好优化来修正推理偏差、提升奖励信号与人类偏好的对齐度
- 在应用中，UnifiedReward-Flex 作为 GRPO（Group Relative Policy Optimization）的奖励函数，为图像和视频生成模型提供细粒度的学习信号，替代传统的粗粒度 preference 信号

### 关键发现
- 上下文自适应的分层评估比固定准则评估能更准确地捕捉内容特异的视觉质量差异，在细粒度偏好对齐任务上表现显著优于传统 Bradley-Terry 模型和固定评分的 VLM-as-judge 方案
- 两阶段训练（SFT+DPO）比单独使用 SFT 或 DPO 产生更忠实的推理轨迹和更精确的判别能力，验证了结构化蒸馏与偏好优化的互补性
- 集成到 GRPO 后，UnifiedReward-Flex 能够稳定驱动图像和视频生成模型的 RL 优化，在多个视觉质量维度上带来一致提升

### 方法归类
- **范式**: 生成式奖励模型 + 强化学习（GRPO）
- **关键技术**: 上下文自适应分层评估、结构化推理蒸馏（SFT）、直接偏好优化（DPO）
- **适用场景**: 图像/视频生成的奖励信号建模、视觉生成模型的 RL 微调、个性化偏好对齐
