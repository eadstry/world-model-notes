# NVIDIA Cosmos 综合学习笔记 Spec

## Why
项目中已有 3 个 Cosmos 相关的笔记文件（主论文 cosmos.md、Transfer1 论文 cosmos-transfer1.md、MIT 神经符号 cosmos.md），但均停留在 Predict1 时代的综述层面。NVIDIA Cosmos 平台已迭代至 2.5 版本，发展为包含 Predict、Transfer、Reason、Curator、Evaluator 等六大组件的完整生态系统，且所有仓库均开源可用。用户需要一份全面更新、覆盖原理与完整代码使用流程的综合笔记，使其能够从理论和实践两个维度掌握 Cosmos 平台。

## What Changes
- **更新** `docs/designs/diffusion-based-generation/latent-diffusion/cosmos.md`：将 Predict1 时代的综述笔记升级为覆盖 Cosmos 全平台（Predict2.5、Transfer2.5、Reason2、Curator、Evaluator）的综合笔记
- **更新** `docs/designs/diffusion-based-generation/latent-diffusion/cosmos-transfer1.md`：补充 Transfer2.5 的内容（多控制模态、Edge蒸馏、Auto/Multiview）
- **保留不动** `docs/designs/state-transition/object-centric-modeling/cosmos.md`（MIT 神经符号 cosmos，与 NVIDIA Cosmos 无关）
- 新增完整的代码使用流程章节：环境搭建 → 模型下载 → 各组件推理 → 后训练微调 → 蒸馏优化
- 补充 Cosmos 技术原理深度分析：Rectified Flow 生成范式、视频分词器体系、MultiControlNet 架构、Cosmos Reason VLM 设计

## Impact
- Affected specs: 无（新 spec）
- Affected code:
  - `docs/designs/diffusion-based-generation/latent-diffusion/cosmos.md`（核心文件，重写）
  - `docs/designs/diffusion-based-generation/latent-diffusion/cosmos-transfer1.md`（更新补充）

## ADDED Requirements

### Requirement: Cosmos 平台全景笔记
系统 SHALL 在 `cosmos.md` 中提供 NVIDIA Cosmos 平台的完整学习笔记，包含：
- 平台定位与设计哲学
- 六大组件（Predict2.5 / Transfer2.5 / Reason2 / Curator / Dataset Search / Evaluator）的功能概览
- 与 Physical AI 三大应用场景（机器人、自动驾驶、视频分析）的映射关系

#### Scenario: 用户浏览 Cosmos 笔记
- **WHEN** 用户打开 Cosmos 平台笔记页面
- **THEN** 看到平台全景介绍，了解各组件定位与相互关系

### Requirement: 技术原理深度分析
系统 SHALL 从以下三个技术维度分析 Cosmos 核心原理：
1. **Rectified Flow 生成范式**：Explain flow matching vs diffusion、UniPC solver、DMD2 蒸馏
2. **视频分词器体系**：CV8×8×8 连续 tokenizer、DV8×16×16 离散 tokenizer 的时空压缩策略
3. **MultiControlNet 架构**（Transfer2.5）：自适应时空控制图、多模态条件融合机制
4. **Cosmos Reason VLM**：物理常识推理、多帧视频理解

#### Scenario: 用户理解 Cosmos 原理
- **WHEN** 用户阅读技术原理章节
- **THEN** 能理解 Cosmos 各组件背后的核心技术设计

### Requirement: 完整代码使用流程
系统 SHALL 提供从环境搭建到高级定制的完整代码流程，包含：
1. **环境搭建**：Python 版本、CUDA 要求、pip/uv 安装命令、Docker 方案
2. **模型下载**：HuggingFace 模型列表、hf_transfer 加速下载
3. **Predict2.5 推理**：Text2World / Image2World / Video2World 命令与参数说明、Diffusers 集成方式
4. **Transfer2.5 推理**：ControlNet JSON 配置格式、多模态 controlnet_specs 写法、Auto/Multiview 自动驾驶推理、Robot Multiview 推理
5. **后训练微调**：LoRA 微调流程、Video2World / Text2World 后训练命令、DreamGen Bench 数据集使用
6. **模型蒸馏**：DMD2 蒸馏流程、Edge Distilled 推理
7. **数据管线工具**：Cosmos Curator 使用示例、Dataset Search 查询示例

#### Scenario: 用户跟随代码流程实践
- **WHEN** 用户按照代码使用流程章节操作
- **THEN** 能够成功运行 Cosmos 各组件的推理和微调

### Requirement: Transfer2.5 笔记更新
系统 SHALL 更新 `cosmos-transfer1.md`，补充 Transfer2.5 相较于 Transfer1 的升级内容：
- 2B 参数轻量模型 + Edge Distilled 版本
- JSON controlnet_specs 配置式控制
- Auto/Multiview 自动驾驶专用后训练模型
- Robot Multiview Control 机器人多视图控制
- 自回归滑动窗口生成长视频

#### Scenario: 用户对比 Transfer1 和 Transfer2.5
- **WHEN** 用户阅读 Transfer1 笔记
- **THEN** 看到 Transfer2.5 版本的升级对比和新能力

## MODIFIED Requirements
无

## REMOVED Requirements
无
