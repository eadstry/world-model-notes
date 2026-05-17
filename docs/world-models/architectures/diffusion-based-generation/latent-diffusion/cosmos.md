---
title: "Cosmos: Physical AI 的世界基础模型平台"
design: "Cosmos"
arxiv: https://arxiv.org/abs/2501.03575
github: https://github.com/nvidia-cosmos
website: https://docs.nvidia.com/cosmos/latest/
---

# Cosmos: Physical AI 的世界基础模型平台

::: info 资料入口
- **平台定位**: 面向 Physical AI 的 World Foundation Model 平台
- **论文**: [Cosmos World Foundation Model Platform for Physical AI](https://arxiv.org/abs/2501.03575)
- **官方文档**: [NVIDIA Cosmos](https://docs.nvidia.com/cosmos/latest/)
- **GitHub 组织**: [nvidia-cosmos](https://github.com/nvidia-cosmos)
:::

## 一句话概括

Cosmos 不是单一视频生成模型，而是一套面向机器人、自动驾驶和视频智能体的 **Physical AI 世界模拟基础设施**。它把未来状态预测、可控世界转换、物理场景理解、数据筛选、评测和安全护栏组织成一条工具链，使开发者可以用生成式世界模型补足真实物理数据稀缺、长尾场景难采集、仿真到现实迁移困难等问题。

从世界模型角度看，Cosmos 的核心价值不只是“生成视频”，而是把视频生成模型重新定位为可后训练、可条件化、可评测、可服务于下游策略训练的 **世界状态生成器**。

## 平台分层

| 层级 | 组件 | 作用 |
|---|---|---|
| 世界预测 | [Cosmos-Predict2.5](cosmos-predict2-5) | 从文本、图像或视频条件出发，预测未来世界状态；是 Cosmos 2.5 的核心生成模型 |
| 世界转换 | [Cosmos-Transfer2.5](cosmos-transfer2-5) | 在 Predict2.5 之上加入多种空间控制信号，用于 Sim2Real、Real2Real 和场景风格/条件转换 |
| 世界理解 | Cosmos-Reason | 面向 Physical AI 的视觉语言模型，提供物理常识、视频理解和语义条件能力 |
| 数据工程 | [Cosmos Curator](cosmos-curator) | 视频筛选、质量评分、去重、标注和数据集构建 |
| 数据检索 | [Cosmos Dataset Search](cosmos-dataset-search) | 用自然语言从大规模视频集中检索目标场景 |
| 评测与安全 | [Cosmos Evaluator / Guardrail](cosmos-evaluator-guardrail) | 对生成质量、物理合理性和安全风险进行规模化检查 |

这个分层说明 Cosmos 的重点是“闭环数据工厂”：先用 Curator 获得高质量真实视频，再用 Predict/Transfer 生成或转换世界样本，再用 Evaluator/Guardrail 控制质量和风险，最后服务于机器人、自动驾驶或视频智能体的训练与评估。

## 方法谱系

### Predict: 从观测到未来

Cosmos-Predict2.5 是平台中的世界预测器。它把 Text2World、Image2World、Video2World 统一到一个 flow-based 模型族中，并使用 Cosmos-Reason1 作为文本编码器。与传统只做开放域视频生成的模型不同，Predict2.5 的训练和后训练目标明确偏向 Physical AI：机器人操作、自动驾驶多视角、动作条件预测、长尾物理场景生成。

它回答的问题是：给定一个语言描述、初始图像或历史视频，未来合理的物理世界会怎样演化？

### Transfer: 从一种世界观测到另一种世界观测

Cosmos-Transfer2.5 构建在 Predict2.5 之上，通过 depth、edge、segmentation、blur 等控制输入约束生成过程。它不是单纯的图像风格迁移，而是条件世界生成：保持几何、运动或语义结构，同时改变外观、传感器域、天气、光照或仿真/真实域。

它回答的问题是：给定一个结构受控的输入世界，如何生成另一个物理一致但视觉域不同的世界？

### Reason: 从视频到物理语义

Cosmos-Reason 系列承担物理语义理解和文本条件编码。对 Predict 来说，Reason 负责把自然语言提示转成更适合物理生成的语义条件；对视频智能体来说，它还可以直接做视频问答、事件理解、物理常识判断和异常检测。

### Curator/Evaluator: 让世界模型可工程化

世界模型的瓶颈往往不是单个网络结构，而是数据质量、场景覆盖、评估标准和部署约束。Cosmos 把数据筛选和评估做成独立工具，是它区别于许多论文式 world model 的关键：平台默认承认“生成模型需要数据工厂和质量闭环”，而不是只依赖一次性训练。

## 技术核心

### 1. Flow-based 视频世界建模

Predict2.5 使用基于 flow matching / rectified flow 的生成范式。它学习从噪声分布到视频潜变量分布的连续向量场，而不是只把任务写成逐步去噪。对世界模型来说，这带来两个好处：

- 采样路径更直接，有利于减少推理步数；
- 视频生成被组织为一个连续世界状态流，更自然地承接未来预测、视频续写和动作条件模拟。

这种设计把“视频生成”与“状态演化”拉近：模型不是只补纹理，而是在潜空间中学习物理场景随时间变化的方向。

### 2. 统一的 Text/Image/Video 条件入口

Predict2.5 不把文本生成、图像动画和视频续写做成三个割裂模型，而是统一为不同条件下的世界预测：

| 模式 | 输入 | 世界模型含义 |
|---|---|---|
| Text2World | 文本提示 | 从语义描述采样一个物理场景演化 |
| Image2World | 初始图像 + 文本 | 从静态观测预测未来动态 |
| Video2World | 历史视频 + 文本 | 从已有轨迹继续预测未来 |

这种统一入口对 Physical AI 很重要，因为真实系统中的条件往往混合存在：机器人有当前视觉帧和语言任务，自动驾驶有历史多帧和地图/场景语义，视频分析智能体有历史片段和自然语言查询。

### 3. 后训练把通用 WFM 变成领域模型

Cosmos 的方法论不是把所有能力塞进一个静态基础模型，而是先训练通用 WFM，再通过后训练适配任务域。官方 Predict2.5 文档给出的核心后训练路径包括：

- **Auto Multiview**: 基于 Waymo 等多摄像头数据，将模型适配到自动驾驶多视角生成；
- **Action-conditioned Video2World**: 使用机器人动作轨迹作为条件，训练动作到未来视频的预测；
- **Cosmos-NeMo-Assets / DreamGen Bench**: 用官方资产或专门数据集做 Video2World 后训练；
- **LoRA 后训练**: 用更低成本适配特定场景或数据域。

这使 Cosmos 更像一个可迁移的世界模型底座，而不是一次性模型发布。

### 4. 多控制信号约束世界转换

Transfer2.5 通过多种控制输入约束生成过程：

- depth 保持 3D 几何；
- edge 保持轮廓和局部结构；
- segmentation 保持语义布局；
- blur / visual control 约束外观或视觉域；
- mask 控制不同空间区域的条件强度。

这使它适合 Sim2Real：仿真提供几何、深度、分割等“结构真值”，Transfer 负责把这些结构翻译成照片级真实视频。

## 应用分析

### 机器人

机器人任务的关键问题是数据昂贵、探索危险、真实交互采集慢。Cosmos 的路线是：

1. 用 Predict2.5 对机器人操作视频做未来预测或动作条件预测；
2. 用 Transfer2.5 把仿真视觉转换为更真实的传感器观测；
3. 用合成数据补充策略训练，尤其覆盖失败、稀有接触、不同物体外观和不同相机视角；
4. 用 Reason/评测工具检查生成结果是否保持物理和任务语义一致。

### 自动驾驶

自动驾驶最适合 Cosmos 的原因在于长尾场景极难靠真实采集覆盖。Cosmos 可以生成或转换雨雪、夜间、复杂路口、不同地理区域、多摄像头同步视角等样本。Predict2.5 的 Auto Multiview 路径强调 7-camera view，Transfer2.5 的 Auto 变体则强调用控制信号做多视角和场景条件转换。

它的核心价值不是替代真实数据，而是系统化补齐真实数据难以密集覆盖的分布尾部。

### 视频智能体

对视频搜索、摘要、监控和异常检测来说，Cosmos-Reason 提供理解能力，Predict/Transfer 提供可控生成和反事实模拟能力。一个典型用法是：Reason 识别当前事件，Predict 生成未来可能状态，Evaluator 或规则系统判断风险。

## 与其他世界模型路线的关系

| 路线 | 代表思路 | Cosmos 的差异 |
|---|---|---|
| Dreamer 类 latent state model | 学习紧凑状态并用于强化学习规划 | Cosmos 更偏高保真视频世界模拟和数据生成 |
| JEPA/embedding prediction | 在表征空间预测未来 | Cosmos 直接服务视频生成、续写和可视化数据工厂 |
| 驾驶专用生成模型 | 只针对 AV 场景设计 | Cosmos 以 Physical AI 为总平台，覆盖 AV、机器人和视频智能体 |
| 开放域视频生成 | 强调视觉质量和文本对齐 | Cosmos 更强调物理一致、后训练、控制信号、下游训练可用性 |

## 局限与风险

- **物理真实性仍需外部验证**：视频看起来合理不等于动力学真实，尤其接触、碰撞、摩擦和多物体交互仍可能出错。
- **合成数据可能引入偏差**：如果生成分布与真实部署分布不一致，下游模型会学习到虚假的纹理、行为或传感器统计。
- **多视角一致性成本高**：自动驾驶多摄像头生成需要保持跨视角几何和时间一致，通常依赖多 GPU 和专门后训练。
- **部署门槛仍高**：即便 2B 模型降低了门槛，Transfer2.5 general 单卡推理仍需要较高显存；14B 和多视角场景更依赖多 GPU。
- **评测标准未完全收敛**：世界模型应评估生成质量、物理可行性、任务收益、反事实一致性和安全性，单一 FVD/FID 不足以说明价值。

## 研究启发

Cosmos 的核心启发是：Physical AI 的世界模型不应该只被理解为“预测未来帧”，而应该被理解为一种可控、可后训练、可评测的数据与仿真基础设施。真正有用的世界模型需要同时回答四个问题：

1. 未来状态是否视觉真实？
2. 未来状态是否物理可信？
3. 生成样本是否能改善下游策略或感知模型？
4. 生成流程是否能被数据工程、评测和安全机制稳定控制？

Cosmos 的平台化设计正是围绕这四个问题展开。

## 相关笔记

- [Cosmos-Predict2.5](cosmos-predict2-5)
- [Cosmos-Transfer2.5](cosmos-transfer2-5)
- [Cosmos-Transfer1](cosmos-transfer1)
- [Cosmos Curator](cosmos-curator)
- [Cosmos Dataset Search](cosmos-dataset-search)
- [Cosmos Evaluator / Guardrail](cosmos-evaluator-guardrail)
- [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams)
- [Latent Diffusion 分类综述](./)
- [Autonomous Driving 应用](/world-models/applications/autonomous-driving/)
- [Embodied Robotics 应用](/world-models/applications/embodied-robotics/)
