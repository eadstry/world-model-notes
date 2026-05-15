---
title: "Unleashing generalization of end-to-end autonomous driving with controllable long video generation"
design: "Delphi"
arxiv: https://arxiv.org/abs/2406.01349
github: https://github.com/westlake-autolab/Delphi
---

# Delphi: Unleashing generalization of end-to-end autonomous driving with controllable long video generation

::: info 论文信息
- **Design**: Delphi
- **论文全称**: Unleashing generalization of end-to-end autonomous driving with controllable long video generation
- **arXiv**: [https://arxiv.org/abs/2406.01349](https://arxiv.org/abs/2406.01349)
- **GitHub**: [https://github.com/westlake-autolab/Delphi](https://github.com/westlake-autolab/Delphi)
:::

## 核心思想

Delphi 针对端到端自动驾驶模型的数据短缺问题，提出了一种创新的可控长视频生成方法。论文洞察到一个关键瓶颈：现有的基于生成的自动驾驶数据增强方法只能生成少于 8 帧的视频，时间和空间一致性不足，无法改善端到端规划模型的性能。Delphi 突破了这一限制，能够生成长达 40 帧的高一致性视频（约为 SOTA 方法的 5 倍），首次使生成数据能够显著提升端到端自动驾驶规划性能（提升 25%）。

Delphi 的另一个核心创新是其失败案例驱动的采样策略。传统的随机生成新数据效率低下，Delphi 利用预训练视觉语言模型识别训练中的失败案例，然后定向生成与失败案例相似的新训练数据，大幅提高了样本效率——仅需生成 4% 训练集大小的数据即可带来显著性能提升。这种"按需生成"的策略比大规模随机生成更为经济高效。

## 技术架构

**Vision Encoding（视觉编码）**：Delphi 采用扩散模型作为视频生成的基础架构。为了保证多视角空间一致性，Delphi 创新性地提出了跨视图共享噪声建模机制（Shared Noise Modeling），即多相机视图共享同一个噪声基底，确保各视角的生成过程在潜在空间保持一致性，从而减少多视图间的空间不一致伪影。

**Knowledge Learning（知识学习）**：Delphi 设计了特征对齐模块（Feature-Aligned Module）来同时实现精确控制性和时间一致性。该模块将控制条件（如自车轨迹、环境条件）与视频特征在时间和空间维度上进行对齐，确保生成的每一帧都忠实反映控制条件，同时相邻帧之间保持平滑过渡。模型可以连续生成 40+ 帧而不出现一致性的明显退化。

**Controllable Simulation（可控模拟）**：Delphi 的可控性体现在两个层面：（1）视频内容控制——通过控制条件精确操控生成的驾驶场景内容；（2）采样控制——通过失败案例驱动的采样策略，利用预训练 VLM 识别失败案例并定向生成相似场景的数据。这种策略确保生成的数据集中在最有价值的训练区域，大幅提高了数据增强的效率。

## 代码实现要点

GitHub 仓库目前仅包含占位 README："Code will be coming later. Stay tuned." 项目页面提供了详细的视频演示：[westlake-autolab.github.io/delphi.github.io](https://westlake-autolab.github.io/delphi.github.io/)。核心代码尚未正式开源。

## 关键创新点

1. **超长视频生成**：首次实现 40 帧（约 5 秒）的一致性视频生成，是当时 SOTA 的 5 倍
2. **共享噪声跨视图建模**：多相机共享噪声基底，从根本上保证空间一致性
3. **特征对齐模块**：平衡控制性和时间一致性，实现可控的长期视频生成
4. **失败案例驱动采样**：利用 VLM 识别失败案例并定向生成，仅需 4% 数据量即可显著提升性能
5. **首次提升端到端规划**：首次证明生成数据可提升端到端自动驾驶规划性能 25%，突破感知和预测的上限

## 代表性结果

Delphi 在端到端自动驾驶规划任务上取得了突破性成果：仅生成训练集 4% 的额外数据，就将规划性能提升了 25%。相比之下，之前的生成式数据增强方法对规划性能几乎没有帮助。在视频质量方面，Delphi 生成的 40 帧视频在 FVD 和 FID 指标上超越了 SOTA 方法，特别是在长视频的一致性保持上表现突出。失败案例驱动的采样策略被证明比随机采样更高效，相同数量下性能提升更显著。
