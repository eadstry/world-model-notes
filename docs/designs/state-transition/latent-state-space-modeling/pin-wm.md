---
title: "PIN-WM: Learning Physics-Informed World Models for Non-Prehensile Manipulation"
design: "PIN-WM"
arxiv: https://arxiv.org/abs/2504.16693
github: https://github.com/XuAdventurer/PIN-WM
---

# PIN-WM: Learning Physics-Informed World Models for Non-Prehensile Manipulation

::: info 论文信息
- **Design**: PIN-WM
- **论文全称**: PIN-WM: Learning Physics-Informed World Models for Non-Prehensile Manipulation
- **arXiv**: [https://arxiv.org/abs/2504.16693](https://arxiv.org/abs/2504.16693)
- **GitHub**: [https://github.com/XuAdventurer/PIN-WM](https://github.com/XuAdventurer/PIN-WM)
:::

## 核心思想

PIN-WM (Physics-Informed World Model) 提出了物理信息融入世界模型的框架，专注于非抓取式操作。核心创新是在世界模型中嵌入物理定律作为正则化约束——传统的世界模型通过纯数据驱动学习动力学，可能产生物理上不合理的预测（如物体加速飞起、穿透桌面）。PIN-WM 通过在训练中加入物理约束（能量守恒、动量守恒、接触约束）来防止此类不合理预测。

PIN-WM 的物理信息约束以软约束形式加入损失函数——不是严格硬编码物理方程（这会限制模型灵活性），而是通过惩罚项使模型倾向于产生物理上合理的预测。这实现了数据驱动灵活性和物理一致性的最佳平衡。

## 技术架构

**Vision Encoding（视觉编码）**：RGB-D 输入通过 CNN encoder 压缩为包含物体位置、速度、形状等信息的 latent state。

**Knowledge Learning（知识学习）**：RSSM 通过学习动力学，同时加入三个物理损失：Energy Conservation Loss（物体的动能+势能变化应等于外力做功）、Contact Consistency Loss（物体不能穿透支撑面）和 Momentum Conservation Loss（无外力时动量守恒）。这些物理损失以自适应权重与数据驱动的预测损失联合优化。

**Controllable Simulation（可控模拟）**：在物理约束的 latent space 中进行 imagination rollout。物理一致性确保想象轨迹在物理上可行，防止模型"幻想"出不合理的物体运动。

## 代码实现要点

代码开源在 [XuAdventurer/PIN-WM](https://github.com/XuAdventurer/PIN-WM)。基于 PyTorch。RSSM + physics-informed regularization。在 Isaac Gym 和 MuJoCo 非抓取式操作任务上评估。

## 关键创新点

1. **物理信息正则化**：将物理定律作为软约束融入世界模型
2. **三重物理损失**：能量、接触、动量三方面物理一致性
3. **数据-物理平衡**：在数据驱动和物理约束间取得最佳平衡
4. **防止物理幻觉**：消除世界模型中的物理不合理预测

## 代表性结果

在物体推动和滑动任务中，PIN-WM 的物理违规概率（如物体穿透桌面）比 DreamerV3 降低 80%。在长时间推操作中（100+ 步），PIN-WM 的预测质量保持稳定（dreamerV3 在 50 步后开始偏离真实物理）。规划成功率比纯数据驱动方法高 20%。
