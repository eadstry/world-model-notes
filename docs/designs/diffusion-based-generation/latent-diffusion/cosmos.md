---
title: "Cosmos World Foundation Model Platform for Physical AI"
design: "Cosmos"
arxiv: https://arxiv.org/abs/2501.03575
github: https://github.com/nvidia-cosmos
---

# Cosmos World Foundation Model Platform for Physical AI

::: info 论文信息
- **Design**: Cosmos
- **论文全称**: Cosmos World Foundation Model Platform for Physical AI
- **arXiv**: [https://arxiv.org/abs/2501.03575](https://arxiv.org/abs/2501.03575)
- **GitHub**: [https://github.com/nvidia-cosmos](https://github.com/nvidia-cosmos)
:::

## 核心思想

Cosmos 是 NVIDIA 推出的世界基础模型平台，旨在为 Physical AI 构建通用的世界模拟能力。其核心思想是：物理世界中的 AI 系统（如自动驾驶、机器人）需要一个"数字孪生"来进行预训练和验证，而传统的仿真平台难以覆盖真实世界的数据多样性和长尾场景。Cosmos 提出将通用世界基础模型（World Foundation Model）作为核心，通过后训练（fine-tune）适配到下游的定制化世界模型。

Cosmos 的定位是一个完整的平台生态，而不仅仅是一个模型。它包含四个核心组件：视频数据策划管线（video curation pipeline）、预训练世界基础模型、模型后训练示例代码，以及高效视频分词器（tokenizer）。其中视频分词器支持连续（continuous）和离散（discrete）两种 token 类型，实现 8×8×8 时空压缩，大幅降低扩散模型的计算成本。Cosmos 模型以 Apache 2.0 许可开源，权重以 NVIDIA Open Model License 发布，是目前最开放的 Physical AI 世界模型之一。

## 技术架构

**Vision Encoding（视觉编码）**：Cosmos 提供了一套高效的 Video Tokenizer 体系，包括连续视频分词器 CV8×8×8、离散视频分词器 DV8×16×16，以及对应图像分词器。Tokenizer 将高分辨率视频压缩到紧凑的隐空间，压缩比约 8 倍（空间）× 8 倍（时间），大幅降低下游扩散模型和自回归模型的训练和推理计算负担。

**Knowledge Learning（知识学习）**：Cosmos 采用双轨架构：（1）基于扩散的 Text2World 和 Video2World 模型（7B/14B 参数），支持从文本提示或视频提示生成未来世界状态；（2）基于自回归的 Video2World 模型（4B-13B 参数），采用 next-token prediction 范式进行未来帧预测。预训练数据集规模巨大，涵盖海量互联网视频。Cosmos 还提供 WorldInterpolator 用于视频插值，实现高帧率生成。

**Controllable Simulation（可控模拟）**：Cosmos 提供了丰富的后训练（post-training）能力。开发者可以使用自己的数据集对预训练的基础模型进行微调，包括添加动作控制（action-conditioned）、多视图生成（multi-view）以及单视图到多视图转换（Single2MultiView）等功能。特别是 Cosmos AV Single2MultiView 能够从单路视频生成动态多路视频，对于自动驾驶仿真具有重要意义。

## 代码实现要点

Cosmos 开源了完整的代码框架（cosmos-predict1），核心技术栈基于 HuggingFace Accelerate 和 Diffusers。

**安装与环境配置**：
```bash
pip install -r requirements.txt
```

**核心推理流程**：
- 扩散模型推理：`examples/inference_diffusion_text2world.md` 支持多 GPU 推理
- 自回归模型推理：`examples/inference_autoregressive_base.md`
- Tokenizer 推理：`examples/inference_tokenizer.md`

**后训练（微调）流程**：
- 扩散模型后训练：`examples/post-training_diffusion_text2world.md` 支持多节点训练
- Action-controlled 后训练：`examples/post-training_diffusion_video2world_action.md`
- 多视图后训练：`examples/post-training_diffusion_text2world_multiview.md`
- Tokenizer 后训练：`examples/post-training_tokenizer.md`

模型权重托管在 HuggingFace：`nvidia/Cosmos-Predict1-7B-Text2World` 等。

## 关键创新点

1. **平台化设计**：将视频分词器、预训练模型、后训练管线整合为统一平台，大幅降低 Physical AI 开发者使用门槛
2. **开放许可**：Apache 2.0 代码 + NVIDIA Open Model License，业界最开放的 Physical AI 世界模型
3. **统一分词器体系**：同时支持连续和离散 token 的 Video Tokenizer，灵活适配扩散和自回归两种生成范式
4. **完善的微调生态**：提供 Text2World、Video2World、WorldInterpolator、多视图等多场景的后训练示例
5. **多 GPU/多节点训练**：开箱即用的分布式训练支持，便于大规模定制化微调

## 代表性结果

Cosmos 在 Text2World 和 Video2World 两个核心任务上展示了高质量的未来世界状态生成。Text2World 可从文本描述（如 "driving on a rainy city street"）生成逼真的驾驶视频；Video2World 可从真实视频片段出发，预测后续多帧未来画面。Cosmos AV Single2MultiView 能将单路前视视频扩展为多路环视视频，在自动驾驶数据增强场景中展示出显著价值。截至 2026 年，Cosmos 已迭代至 Predict2.5 版本，持续在视频质量和可控性方面提升。
