---
title: "Genie 2: A large-scale foundation world model"
design: "Genie 2"
website: https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/
---

# Genie 2: A large-scale foundation world model

::: info 论文信息
- **Design**: Genie 2
- **论文全称**: Genie 2: A large-scale foundation world model
- **机构**: Google DeepMind
- **Website**: [https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/](https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/)
- **前置工作**: Genie 1 (2D 世界生成)
:::

## 核心思想

Genie 2 是 Google DeepMind 推出的基础世界模型（Foundation World Model），也是 Genie 系列的里程碑升级。Genie 1 仅支持 2D 平台游戏世界的生成；而 Genie 2 实现了从单张提示图像（由 Imagen 3 生成）出发，生成无限多样的、可动作控制的、可玩的 3D 环境。该模型在大规模视频数据集上训练，涌现出了包括物体交互、复杂角色动画、物理模拟以及预测其他 Agent 行为等能力，代表了世界模型从狭窄领域迈向通用性的关键一步。

Genie 2 的核心理念是为未来的通用具身智能体提供无尽的多样化训练环境。传统上训练通用 Agent 受限于训练环境的丰富性和多样性；Genie 2 通过自回归的视频生成范式，可以用文本描述任意世界、选择渲染结果，然后直接步入并与该世界交互。这意味着任何人（或 AI Agent）都可以在由 Genie 2 生成的、前所未有的新世界中训练和评估。

Genie 2 能生成长达一分钟的持续一致世界（大多数示例展示 10-20 秒），并展示了多项涌现能力：长时记忆（记住不可见区域并在重新可见时正确渲染）、反事实轨迹生成（同一初始帧的不同行动序列）、3D 结构理解、物体可供性交互（如打开门、射击炸药桶）、NPC 行为建模以及水体物理等。

## 技术架构

### 1. 虚拟环境
- 大规模视频数据集训练（具体细节未公开）
- 提示图像由 Imagen 3（DeepMind 的 text-to-image 模型）生成
- 支持第一人称、等距视角、第三人称驾驶视角等多种视角
- 环境类型极其多样：森林、古埃及、紫色星球、城市公寓、水下场景等

### 2. 世界模型
- 自回归视频生成架构（具体骨干未公开，推测为大规模扩散模型或自回归 Transformer）
- 基于单张图像提示 + 历史帧序列 + 用户动作条件生成下一帧
- 关键能力：长时记忆——即使物体暂时离开视野，重新可见时仍能正确渲染
- 支持 counterfactual generation：从同一初始帧出发，不同动作序列导致不同未来

### 3. 行动模型
- 键盘和鼠标输入控制
- 智能识别场景中的可控角色并正确移动
- 支持多种动作：移动、跳跃、游泳等
- Agent 部署：SIMA Agent 可直接在 Genie 2 生成的环境中被部署和评估

## 代码实现要点

暂无开源代码。DeepMind 未公开 Genie 2 的模型权重、训练细节或架构细节。

论文发布形式为博客文章而非正式论文，技术细节有限。

## 关键创新点

1. **从 2D 到 3D 的跨代升级**: Genie 1 → Genie 2 从二维平台游戏世界跃迁至三维通用世界
2. **单图提示即可生成可交互世界**: 用文本描述世界 → Imagen 3 生成图像 → Genie 2 生成可交互 3D 环境
3. **涌现的生成能力**: 物体交互、复杂动画、物理、多 Agent 行为均为训练中自然涌现，非显式编程
4. **反事实生成**: 同一初始帧的不同动作序列可产生不同轨迹，助力 Agent 的多样化训练
5. **长时一致性与记忆**: 在一分钟级别保持世界一致性，记住不可见区域
6. **基座模型范式**: 将世界模型视为 foundation model，强调通用性而非特定领域

## 代表性结果

- **提示方式**: 单张 Imagen 3 生成的图像
- **交互方式**: 键盘 + 鼠标
- **生成时长**: 最长一分钟（大多数示例 10-20 秒）
- **视角**: 第一人称、等距、第三人称驾驶等
- **能力**: 物体交互（气球、门、桶）、角色动画、NPC 行为、物理效果（水）、3D 结构理解
- **Agent 集成**: 可直接部署 SIMA Agent 在生成环境中
