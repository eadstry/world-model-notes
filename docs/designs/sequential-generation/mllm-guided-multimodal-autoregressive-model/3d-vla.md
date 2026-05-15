---
title: "3D-VLA: A 3D Vision-Language-Action Generative World Model"
design: "3D-VLA"
arxiv: https://arxiv.org/abs/2403.09631
website: https://vis-www.cs.umass.edu/3dvla
---

# 3D-VLA: A 3D Vision-Language-Action Generative World Model

::: info 论文信息
- **Design**: 3D-VLA
- **论文全称**: 3D-VLA: A 3D Vision-Language-Action Generative World Model
- **arXiv**: [https://arxiv.org/abs/2403.09631](https://arxiv.org/abs/2403.09631)
- **Website**: [https://vis-www.cs.umass.edu/3dvla](https://vis-www.cs.umass.edu/3dvla)
- **发表于**: 2024年3月
- **作者**: Haoyu Zhen, Xiaowen Qiu, Peihao Chen, Jincheng Yang, Xin Yan, Yilun Du, Yining Hong, Chuang Gan
:::

## 核心思想

3D-VLA 是 MLLM 引导的多模态自回归世界模型路线中最具标志性的工作之一。该论文提出了一种全新的具身基础模型范式——将 **3D 感知、推理和动作通过生成式世界模型无缝链接**。与传统的 VLA（Vision-Language-Action）模型仅依赖 2D 输入并学习从感知到动作的直接映射不同，3D-VLA 借鉴了人类通过"世界模型"（world model）来想象未来场景以规划动作的认知机制。

3D-VLA 的核心主张是构建一个**统一的 3D 生成式世界模型**，该模型同时理解 3D 场景、语言指令和物理动作。论文引入了一组称为"互动令牌"（interaction tokens）的新机制来与具身环境交互，并训练了一系列具身扩散模型将其对齐到 LLM 中，以预测目标图像和点云。为了训练该模型，作者从现有机器人数据集中提取了大规模 3D 相关信息，构建了一个大规模的 3D 具身指令数据集。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：3D-VLA 构建于一个 3D-based 大语言模型之上。与传统 VLA 的 2D 视觉输入不同，3D-VLA 使用 3D 场景 tokenization 将 3D 场景编码为离散 token，保留了场景的几何和空间信息。通过引入 interaction tokens，模型能够在统一的嵌入空间中处理 3D 场景表征、语言指令和动作序列，实现跨模态的语义桥接。

- **未来预测（Future Prediction）**：3D-VLA 在自回归 transformer 中统一处理文本 token、3D 场景 token 和动作 token。论文训练了一系列具身扩散模型（embodied diffusion models）并将其对齐到 LLM 中，用于预测目标图像（goal image）和点云（point cloud）。这种以语言指令为条件的未来场景生成，实现了"说一句话，世界发生变化"的效果——模型能够预测执行动作后的 3D 场景变化。

- **动作与交互（Action & Interaction）**：通过 interaction tokens 机制，3D-VLA 能够在推理过程中参与与具身环境的实时交互。模型以统一的 token 空间将文本、3D 场景和动作映射到同一嵌入空间，使得单一的自回归模型能处理所有模态间的交互和转换。这种设计借用了 LLM 训练中大规模的预训练范式和数据，显著降低了世界模型训练的门槛。

## 代码实现要点

暂无公开代码（论文发布于 2024 年 3 月，项目页面 [vis-www.cs.umass.edu/3dvla](https://vis-www.cs.umass.edu/3dvla/) 提供了更多细节）。

## 关键创新点

1. **统一 token 空间**：文本、3D 场景、动作被映射到同一嵌入空间，单一自回归模型处理所有模态间的交互和转换，充分利用了 LLM 的预训练优势。
2. **3D 场景 tokenization + interaction tokens**：突破了传统 VLA 仅依赖 2D 输入的限制，将 3D 场景的几何和空间信息完整保留在模型表征中。
3. **具身扩散模型对齐**：将扩散模型的对齐到 LLM 框架中，实现了从语言指令到 3D 场景变化（图像和点云）的生成式预测。
4. **大规模 3D 具身指令数据集**：从现有机器人数据集中提取 3D 相关信息构建训练数据，为 3D 世界模型提供了数据基础设施。

## 代表性结果

论文在 held-in 数据集上的实验表明，3D-VLA 在具身环境中的推理（reasoning）、多模态生成（multimodal generation）和规划（planning）能力上均取得了显著提升，验证了 3D 生成式世界模型在真实世界应用中的潜力。
