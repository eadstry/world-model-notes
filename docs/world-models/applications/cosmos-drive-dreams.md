---
title: "Cosmos-Drive-Dreams: 基于世界基础模型的可扩展自动驾驶合成数据生成"
design: "Cosmos-Drive-Dreams"
arxiv: https://arxiv.org/abs/2506.09042
github: https://github.com/nv-tlabs/Cosmos-Drive-Dreams
website: https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams/
---

# Cosmos-Drive-Dreams: 基于世界基础模型的可扩展自动驾驶合成数据生成

::: info 论文信息
- **论文**: [Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models](https://arxiv.org/abs/2506.09042)
- **GitHub**: [nv-tlabs/Cosmos-Drive-Dreams](https://github.com/nv-tlabs/Cosmos-Drive-Dreams)
- **Website**: [Cosmos-Drive-Dreams](https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams/)
:::

## 核心定位

Cosmos-Drive-Dreams 是 Cosmos 世界基础模型在自动驾驶数据生成上的代表性应用。它关注的问题不是“能否生成驾驶视频”，而是合成视频是否能系统性补足自动驾驶数据中的长尾缺口，并实际提升下游感知、预测或规划模型的鲁棒性。

自动驾驶数据的痛点非常明确：

- 真实采集昂贵，标注成本高；
- 极端天气、夜间、复杂路口、事故前兆等长尾场景难以覆盖；
- 多摄像头同步、跨城市/跨国家数据采集成本更高；
- 纯仿真数据几何可控但视觉域与真实世界差距明显。

Cosmos-Drive-Dreams 的方法价值在于把 Cosmos 的世界生成能力用于“可扩展合成数据工厂”：用世界基础模型生成高保真、多样化、可控的驾驶场景，再作为训练数据增强自动驾驶系统。

## 与 Cosmos 平台的关系

| Cosmos 组件 | 在 Drive-Dreams 中的作用 |
|---|---|
| [Cosmos-Predict2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-predict2-5) | 生成或续写驾驶视频，提供未来场景演化 |
| [Cosmos-Transfer2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-transfer2-5) | 用 depth/segmentation/edge 等控制信号保持道路结构并改变天气、光照或视觉域 |
| [Cosmos Curator](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-curator) | 从真实驾驶视频中筛选高质量训练片段和场景子集 |
| [Cosmos Dataset Search](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-dataset-search) | 从大规模驾驶视频中检索长尾天气、复杂路口、切入、施工等目标场景 |
| [Cosmos Evaluator / Guardrail](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-evaluator-guardrail) | 检查生成视频质量、物理合理性和安全风险 |

因此，Drive-Dreams 可以看作 Cosmos 平台在自动驾驶领域的一条垂直闭环：数据筛选 -> 世界生成/转换 -> 质量评估 -> 下游训练。

## 方法逻辑

### 1. 从真实数据出发，而不是凭空生成

自动驾驶合成数据最怕“看起来真实但分布不对”。Drive-Dreams 的合理路线是从真实驾驶数据或结构化条件出发，用世界基础模型扩展它们，而不是完全无条件地生成场景。这样可以保留真实道路拓扑、车辆运动和相机几何。

### 2. 用生成模型覆盖长尾条件

世界基础模型适合做反事实扩展：

- 同一路口在雨天、雪天、夜间、逆光条件下的表现；
- 同一交通事件在不同车流密度下的表现；
- 同一车道结构在不同城市视觉域中的表现；
- 同一前视场景扩展到多摄像头环视条件。

这些变化如果靠真实采集，需要极高成本；如果靠传统仿真，又容易有视觉域差距。Cosmos 的定位正好介于二者之间。

### 3. 合成数据必须服务下游任务

Drive-Dreams 的关键评估不应只看视频 FID/FVD，而要看合成数据加入训练后是否提升自动驾驶模型在长尾场景上的表现。真正有意义的指标包括：

- 感知检测/分割在恶劣天气和夜间的鲁棒性；
- 轨迹预测对罕见交互的覆盖；
- 规划模型对复杂路口和风险事件的反应；
- 多摄像头一致性对 BEV 感知的帮助。

## 适用场景

### 长尾天气与光照

用 Transfer2.5 把已有晴天视频转换为雨雪、雾天、夜间或逆光条件，同时用深度和语义控制保持道路结构与交通参与者位置。这类数据可用于提升感知模型的域泛化能力。

### 多视角数据扩展

Predict2.5 的 Auto Multiview 路线强调 7-camera view，重点是让世界预测模型直接学习自动驾驶环视相机之间的同步生成关系。它不是只生成一个前视视频，而是面向前视、前左、前右、侧向、后向等多路相机视角的联合建模：同一个交通参与者、车道线、路口结构和自车运动，应该在不同摄像头画面中以一致的空间关系出现。对 BEV 感知、occupancy 预测和多相机规划模型来说，这种数据比单视角视频更有价值，因为下游系统训练时依赖的正是跨视角对齐后的环视信息。

因此，Predict2.5 Auto Multiview 更适合承担“补齐或扩展多相机观测”的角色。例如给定一个真实驾驶片段，可以围绕同一场景生成更多同步视角组合；也可以在长尾天气、复杂路口或稀有交通事件下补充难以采集的多摄像头样本。它解决的核心瓶颈是多视角同步数据稀缺：真实采集需要多相机标定、时间同步和高成本车队，某一路视角缺失、遮挡严重或质量较差时，还会影响 BEV 训练样本的完整性。

Transfer2.5 的 Auto 变体侧重点不同。它强调用 depth、segmentation、edge、HD map、LiDAR 或其他结构化控制信号，把已有驾驶场景转换成新的多视角和场景条件版本。也就是说，Transfer2.5 不是单纯“想象未来视角”，而是在控制信号约束下做受控生成：道路几何、车辆位置、语义区域和相机布局尽量保持一致，天气、光照、材质、地域风格或传感器域可以发生变化。这使它更适合做场景条件转换，例如晴天到雨夜、仿真渲染到真实摄像头域、普通城市道路到特定地域风格、或同一多摄像头片段在不同视觉条件下的重采样。

两者在 Drive-Dreams 中可以形成互补：Predict2.5 Auto Multiview 偏向“生成和续写多摄像头世界状态”，补足环视数据的视角覆盖；Transfer2.5 Auto 偏向“在结构约束下改变场景条件”，保证多视角样本在几何和语义上可控。前者回答“这个驾驶世界在 7 路相机下应该如何同步呈现”，后者回答“在保持这个世界结构不变的前提下，它在雨夜、雾天、不同城市域或不同传感器域中应该如何呈现”。对自动驾驶数据工厂而言，最有用的不是孤立的视频生成，而是把这两类能力串起来：先用 Predict2.5 扩展多视角时空覆盖，再用 Transfer2.5 做受控条件变换，最后通过 evaluator/guardrail 和下游 ablation 筛掉不一致或无收益的样本。

### 稀有事件重采样

例如行人突然横穿、车辆切入、施工区域、非机动车混行等。世界模型可以围绕少量真实样例生成更多视觉变体，但必须通过规则、评测器或人工检查过滤不物理的样本。

### 跨地域域迁移

不同国家和城市的道路标识、建筑风格、车辆类型、天气和光照差异都会造成域偏移。Drive-Dreams 可以用于构造跨域训练样本，但需要避免生成模型把不真实的地域符号当成数据规律。

## 方法风险

- **合成偏差**: 生成模型可能放大训练数据中的偏差，使下游系统学到错误的天气、道路或交通模式。
- **物理幻觉**: 视频看起来连续不代表交通行为合理，车辆速度、碰撞关系和遮挡后状态可能出错。
- **多视角不一致**: 环视摄像头之间如果几何不一致，会伤害 BEV 感知模型。
- **标签一致性问题**: 合成视频的检测框、分割、轨迹标签需要与生成结果严格对齐，否则数据增强会变成噪声注入。
- **评测闭环成本**: 有效使用合成数据需要质量筛选、物理检查、下游 ablation，而不是简单把生成视频加入训练集。

## 与其他驾驶世界模型的区别

| 方向 | 典型目标 | Drive-Dreams 的侧重点 |
|---|---|---|
| 驾驶视频生成 | 生成高质量前视视频 | 更强调可扩展训练数据生产 |
| 仿真器 | 几何和标签完全可控 | 借助 WFM 缩小视觉真实感差距 |
| 数据重采样 | 从已有真实数据做增强 | 用生成模型系统构造长尾条件 |
| 多视角世界模型 | 保持环视一致性 | 面向下游 AV 数据闭环 |

## 研究启发

Cosmos-Drive-Dreams 的核心启发是：自动驾驶世界模型的最终价值不在于单个视频样例是否惊艳，而在于它能否作为数据基础设施稳定生产“下游有用”的样本。它把世界模型评价从视觉生成质量推进到任务收益、长尾覆盖和数据闭环效率。

## 相关笔记

- [Cosmos 平台总览](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos)
- [Cosmos-Predict2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-predict2-5)
- [Cosmos-Transfer2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/cosmos-transfer2-5)
- [Autonomous Driving 应用](/world-models/applications/autonomous-driving/)
- [Latent Diffusion World Models](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
