---
title: "Cosmos transfer1: Conditional world generation with adaptive multimodal control"
design: "Cosmos transfer1"
arxiv: https://arxiv.org/abs/2503.14492
github: https://github.com/nvidia-cosmos/cosmos-transfer1
---

# Cosmos transfer1: Conditional world generation with adaptive multimodal control

::: info 论文信息
- **Design**: Cosmos transfer1
- **论文全称**: Cosmos transfer1: Conditional world generation with adaptive multimodal control
- **arXiv**: [https://arxiv.org/abs/2503.14492](https://arxiv.org/abs/2503.14492)
- **GitHub**: [https://github.com/nvidia-cosmos/cosmos-transfer1](https://github.com/nvidia-cosmos/cosmos-transfer1)
:::

## 学习笔记

## 核心思想

Cosmos-Transfer1 是 NVIDIA 推出的条件式世界生成模型，核心能力是基于多种空间控制输入（如分割图、深度图、边缘图、LiDAR和HDMap等模态）生成可控的世界仿真视频。该模型最突出的设计是其自适应多模态控制方案，允许在不同空间位置以不同权重融合多种条件信号，实现对生成内容的高度精细控制。

Cosmos-Transfer1 的愿景是桥接仿真与现实之间的感知鸿沟（World-to-World Transfer），特别关注 Sim2Real 等 Physical AI 应用场景。通过将一种模态/域的世界观测转换为另一种，模型可用于机器人仿真数据增强和自动驾驶数据扩充，显著降低对真实世界数据采集的依赖。

模型还展示了基于 NVIDIA GB200 NVL72 机架的推理扩展策略，实现实时世界生成，标志着工业级世界模型在算力效率上的重要进展。项目全面开源，包括预训练/后训练脚本和多种模型变体，成为 Physical AI 开发者的基础设施级工具。

## 技术架构

**Vision Encoding（视觉编码）**：Cosmos-Transfer1 建立在 Cosmos 世界基础模型之上，使用预训练视频VAE将输入视频帧编码为潜在空间表示。多种条件模态（分割、深度、边缘等）通过各自的条件编码器处理，提取空间控制特征。

**Knowledge Learning（世界知识学习）**：采用基于 ControlNet/MultiControlNet 的扩散Transformer架构（7B参数规模），在潜在空间中进行视频扩散生成。MultiControlNet架构支持同时接收多种模态条件输入，并通过可学习的时空控制图（Spatiotemporal Control Map）自适应地融合不同条件信号的强度。

**Controllable Simulation（可控推演）**：核心创新在于自适应时空控制图——用户可以为不同空间位置和时间步指定不同模态的控制权重，实现精细到区域级别的生成控制。支持自回归生成模式，以上一帧生成结果作为下一帧条件，可实现无限长视频生成。提供模型蒸馏方案将推理从36步压缩到1步。

## 代码实现要点

- 完整开源，包含预训练、后训练和推理全链路代码
- 支持单模态（ControlNet模式）和多模态（MultiControlNet模式）两种生成模式
- 提供多个预训练模型：Cosmos-Transfer1-7B（通用）、7B-Sample-AV（自动驾驶专用）、7B-4KUpscaler（超分辨率）
- 模型蒸馏支持：Edge Distilled版本支持单步扩散推理，显著降低延迟
- 机器人增强工作流：将合成场景映射到真实感输出用于Sim2Real
- 自动驾驶Single2MultiView：单视角视频生成多视角环视输出

## 关键创新点

- 自适应多模态空间控制：不同位置/时间以不同强度融合多种条件信号
- World-to-World Transfer框架：实现分割→RGB、深度→RGB等多模态转换
- 工业级实时推理：通过模型蒸馏（36步→1步）实现实时世界生成
- 覆盖分割、深度、边缘、模糊、LiDAR、HDMap等6+种条件模态
- 7B参数规模的大规模扩散Transformer架构

## 代表性结果

- 多个基准测试中展示了高质量的条件世界生成能力
- 机器人Sim2Real场景增强实验验证了数据扩充的有效性
- 自动驾驶数据扩充实验表明生成数据可提升下游模型性能
- GB200 NVL72上的推理扩展实现实时世界生成

## Transfer2.5 升级与对比

Transfer2.5 在 Transfer1 的基础上进行了全面升级，以下是关键变化：

**1. 2B轻量模型 + Edge蒸馏**：Transfer2.5 提供 2B 参数规模的轻量模型（vs Transfer1 的 7B），显著降低部署门槛。同时提供 Edge Distilled 版本，支持单步推理（1-step），实现边缘设备实时世界生成。

**2. JSON controlnet_specs 配置式控制**：v2.5 采用 JSON 格式的 declarative 控制配置，替代 v1 的硬编码控制模式。用户可通过 `controlnet_specs` 数组灵活指定多模态控制权重：

```json
[
  {"controlnet_modality_name": "depth", "scale": 0.7},
  {"controlnet_modality_name": "edge", "scale": 0.5},
  {"controlnet_modality_name": "segmentation", "scale": 0.3}
]
```

**3. Auto/Multiview 自动驾驶专用后训练**：v2.5 提供专为自动驾驶场景后训练的 Auto/Multiview 模型，支持从单路前视视频生成 7 路环视视频。仓库路径：`Cosmos-Transfer2.5-2B/auto`。

**4. Robot Multiview Control**：新增机器人多视图控制模型（robot-multiview-control），支持 4 种控制类型（depth、edge、visual blur、segmentation），专为机器人操作臂工作空间设计。

**5. 自回归滑动窗口生成长视频**：新增 autoregressive sliding window 生成模式，以上一帧生成结果作为下一帧条件，实现无限时长视频生成。

**6. 完整工具链生态**：配套 Cosmos Cookbook（nvidia-cosmos.github.io/cosmos-cookbook）、Cosmos Curator 数据管理、Cosmos Evaluator 评测工具。

::: tip 版本对比
| 特性 | Transfer1 | Transfer2.5 |
|------|-----------|-------------|
| 参数规模 | 7B | 2B |
| 控制配置 | 硬编码 | JSON declarative |
| 条件模态数 | 6+ | 6+（新增blur等） |
| 蒸馏推理 | 36→1步 | Edge Distilled 1步 |
| 自动驾驶 | 基础Single2MultiView | Auto/Multiview 7路环视 |
| 机器人 | 通用 | Robot Multiview Control 专用 |
| 滑动窗口 | 不支持 | 支持自回归滑动窗口 |
| 推理框架 | Diffusers only | Diffusers + Native CLI |
:::

Transfer2.5 仓库: [https://github.com/nvidia-cosmos/cosmos-transfer2.5](https://github.com/nvidia-cosmos/cosmos-transfer2.5)
Transfer2.5 论文: [https://arxiv.org/abs/2511.00062](https://arxiv.org/abs/2511.00062)
HuggingFace 模型: [https://huggingface.co/nvidia/Cosmos-Transfer2.5-2B](https://huggingface.co/nvidia/Cosmos-Transfer2.5-2B)
