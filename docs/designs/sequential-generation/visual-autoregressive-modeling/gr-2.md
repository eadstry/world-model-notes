---
title: "GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation"
design: "GR-2"
arxiv: https://arxiv.org/abs/2410.06158
website: https://gr2-manipulation.github.io/
---

# GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation

::: info 论文信息
- **Design**: GR-2
- **论文全称**: GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2410.06158](https://arxiv.org/abs/2410.06158)
- **Website**: [https://gr2-manipulation.github.io/](https://gr2-manipulation.github.io/)
:::

## 论文信息

- **arXiv**: [2410.06158](https://arxiv.org/abs/2410.06158)
- **Website**: [https://gr2-manipulation.github.io/](https://gr2-manipulation.github.io/)
- **发表时间**: 2024年10月
- **作者团队**: ByteDance Research（Chi-Lam Cheang, Tao Kong 等）

## 核心思想

GR-2是一个生成式视频-语言-动作（Video-Language-Action）模型，其核心思想是：通过在大规模互联网视频上预训练来捕获世界动力学，然后将这种世界知识迁移到机器人操作任务中。GR-2的预训练规模非常惊人——涉及**3800万个视频片段和超过500亿个token**的大规模预训练，使模型具备了跨多种机器人任务和环境的泛化能力。

GR-2代表了从"为特定任务训练机器人"到"预训练通用视觉-动作基础模型再微调"的范式转变。与LLM中"预训练+微调"的成功范式类似，GR-2首先在互联网视频上预训练学习通用世界动力学，然后使用机器人轨迹数据同时微调视频生成和动作预测能力。

GR-2展现出令人印象深刻的多任务学习能力——在100多个任务上平均成功率达到**97.7%**。更重要的是，GR-2能泛化到训练期间未见过的新场景，包括新背景、新环境、新物体和新任务。模型还展现出良好的规模化特性：随着模型规模增大，性能持续提升，预示着未来持续增长的潜力。

## 技术架构

### Vision Encoding（视觉编码）
GR-2采用了大规模视频编码方案来处理3800万个视频片段的预训练。视觉输入被编码为离散token序列（类似于VQ-VAE或类似的视频分词器），以支持自回归Transformer的next-token prediction训练范式。由于预训练规模巨大（50B+ tokens），视觉分词器需要在高压缩率和高保真度之间取得平衡。编码后的视觉token与语言token和动作token统一为单一token序列。

### Knowledge Learning（知识学习）
GR-2的知识学习分为两个阶段：
- **阶段1 — 互联网视频预训练**：在3800万个视频片段（50B+ tokens）上进行大规模预训练，模型通过自回归地预测下一帧的视觉token来学习通用世界动力学——包括物体运动、物理规律、场景结构、人类行为等。这一阶段不使用任何机器人数据，纯粹从互联网视频中学习世界的"常识"。大规模预训练使GR-2获得了强大的视觉理解和动力学预测能力。
- **阶段2 — 机器人轨迹微调**：使用机器人操作数据进行微调，同时优化两个目标：(1) 视频生成——预测机器人操作过程中未来帧的视觉token；(2) 动作预测——预测机器人的控制动作（如末端执行器的位姿）。这种多任务微调使模型既保留了从视频中学到的世界知识，又获得了精确的动作预测能力。

### Controllable Simulation（可控模拟）
GR-2的控制模拟通过视频生成+动作预测的统一框架实现。在推理时，模型接收当前的视觉观察和任务指令（语言），然后：
- 自回归地预测未来的视频帧（视频生成分支），可以"想象"操作过程
- 同时预测对应的机器人动作（动作预测分支），实际控制机器人执行操作

GR-2的多任务泛化能力来源于大规模预训练：即使在新环境中，模型也能利用从互联网视频中学到的物理知识和物体交互常识来指导行为。在100+任务的测试中，模型展现了统一的跨任务策略能力，而非为每个任务训练独立策略。

## 代码实现要点

暂无开源代码。GR-2由ByteDance Research开发，目前提供项目主页和论文（Tech Report），但尚未公开模型权重、训练代码或推理代码。

## 关键创新点

1. **超大规模视频预训练**: 3800万视频片段、500亿+token的预训练规模，在机器人领域前所未有
2. **视频-语言-动作统一框架**: 同时处理视觉、语言和动作三种模态，实现视频预测与动作生成的统一
3. **互联网视频→机器人操作的迁移**: 证明互联网视频中蕴含的世界知识可以有效迁移到机器人操作
4. **多任务统一策略**: 97.7%平均成功率覆盖100+任务，展现通用机器人智能体的潜力
5. **规模化特性**: 模型性能随规模增加而提升，验证了机器人领域的scaling law

## 代表性结果

- 100+任务平均成功率97.7%
- 在全新背景、环境、物体和任务上展现出显著泛化能力
- 模型规模化效果明显——更大模型带来更高成功率
- 38M视频片段、50B token的预训练数据规模
