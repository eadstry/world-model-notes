---
title: "TACO: Taming Diffusion for in-the-wild Video Amodal Completion"
arxiv: https://arxiv.org/abs/2503.12049
github: https://github.com/Jason-aplp/TACO-code
website: https://jason-aplp.github.io/TACO/
venue: ICCV
year: 2025
---

# TACO: Taming Diffusion for in-the-wild Video Amodal Completion

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.12049](https://arxiv.org/abs/2503.12049)
- **GitHub**: [https://github.com/Jason-aplp/TACO-code](https://github.com/Jason-aplp/TACO-code)
- **Website**: [https://jason-aplp.github.io/TACO/](https://jason-aplp.github.io/TACO/)
:::

## 学习笔记

### 核心贡献
- 提出 TACO，首个基于预训练视频扩散模型的视频模态补全（Video Amodal Completion, VAC）方法，能够从部分遮挡的视频中恢复完整物体外观。
- 构建大规模合成数据集，通过系统性地对无遮挡视频施加不同难度的遮挡来生成训练数据，覆盖多种野外场景。
- 设计渐进式微调范式，从简单恢复任务逐步过渡到复杂遮挡场景，提升模型在非结构化视频上的泛化能力。

### 方法细节
- 利用预训练视频扩散模型（如 Video LDM）中已学习的丰富且一致的流形，将其重新用于 VAC 任务，通过条件去噪过程生成完整的物体外观。
- 合成数据构建采用多级遮挡策略：根据遮挡比例、遮挡物数量、运动复杂度划分难度级别，模拟真实世界中不同程度的遮挡情况。
- 渐进式微调按照课程学习（Curriculum Learning）思路，先训练低遮挡比例样本，再逐步引入高遮挡和动态遮挡样本。

### 关键发现
- 在互联网野外视频、自动驾驶、机器人操作和场景理解等多个未见过的数据集上均表现良好，说明模型具备较强的域泛化能力。
- TACO 生成的完整物体结果可直接用于下游任务（如物体重建和姿态估计），表明视频级模态补全有助于物理世界的理解和推理。
- 渐进式训练策略显著优于直接在全难度数据上训练，尤其在高遮挡场景中效果提升明显。

### 方法归类
- **范式**: 条件视频扩散模型，基于预训练流形重用的视频模态补全
- **关键技术**: 课程学习（Curriculum Learning）渐进式微调，合成遮挡数据集多级难度构造，视频扩散先验利用
- **适用场景**: 野外视频中物体被遮挡时的完整外观恢复，自动驾驶感知、机器人操作中的遮挡推理
