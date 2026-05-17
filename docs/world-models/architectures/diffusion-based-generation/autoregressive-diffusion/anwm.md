---
title: "Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space"
design: "ANWM"
arxiv: https://arxiv.org/abs/2512.21887
---

# ANWM: Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space

::: info 论文信息
- **Design**: ANWM
- **论文全称**: Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space
- **arXiv**: [https://arxiv.org/abs/2512.21887](https://arxiv.org/abs/2512.21887)
:::

## 学习笔记

### 核心思想

ANWM (Aerial Navigation World Model) 是一个面向无人机（UAV）自主导航的航拍世界模型。现有无人机导航策略通常仅针对低层级目标优化——如障碍物避让和轨迹平滑——缺乏将高层语义融入规划的能力。任何给定飞行轨迹会导致什么样的语义视觉结果？ANWM 通过预测未来视觉观测来回答这一问题：模型以历史帧和动作为-DoF 轨迹）为条件，自回归生成未来航拍视角图像，使无人类agent 能够根据候选轨迹的语义合理性和导航效用对其进行排序。ANWM 引入了一个物理启发的模块——Future Frame Projection（FFP）——通过将历史帧向未来视角进行几何投影，为远距离视觉生成提供粗粒度的几何先验，缓解表征不确定性，并捕人3D 轨迹与自我中心观测之间的映射关系。
### 技术架。
**Vision Encoding（视觉编码）**：ANWM 接收无人机历史帧序列（航拍图像）机4-DoF 飞行轨迹（位的+ 偏航角）作为输入。Future Frame Projection (FFP) 是关键预编码模块——基于相机投影几何，将历史帧根据目标视角的相机位姿扭曲（warp）为粗略的未来帧估计。这一几何先验与原始历史帧和动作编码一起送入视频扩散模型，为视觉生成提供强几何引导。
**Knowledge Learning（知识学习）**：模型在 4-DoF 无人机飞行轨迹数据上训练，学习历史观测 + 飞行轨迹 的未来视觉观测"的映射。FFP 提供的几何先验特别关键：当预测远距离的未来帧时，传统模型由于表征不确定性容易退化，的FFP 通过显式的3D 几何转换预补偿了视点变化带来的大部分视觉位移，使扩散模型只需填补遮挡和被几何投影遗漏的细节。这本质上是一种将 3D 几何知识注入 2D 视觉生成的方法。
**Controllable Simulation（可控仿真）**：ANWM 的导航应用是将世界模型作为轨迹评估器：对于规划器生成的多个候选飞行轨迹，ANWM 为每条轨迹预测对应的未来视觉观测，然后利用视觉语义分析这些预测来评估各条轨迹的语义合理性（如是否飞向建筑物、是否保持对目标的可视性）。ANWM 的输出帮助agent 在高层语义层面筛选最优轨迹，显著提升大尺度环境中的导航成功率。
### 代码实现要点

- **FFP 模块**：基于针孔相机模型，将历史帧像素投影在3D 空间假设平面（如地面平面），再从目标视角重投影生成粗略未来帧
- **4-DoF 动作编码**：位置(x,y,z) + 偏航的ψ，通过 MLP 编码为条件嵌入- **视频扩散骨干**：自回归视频扩散模型，历史帧 + FFP 几何先验 + 动作嵌入联合条件
- **轨迹排序**：基于生成图像的多模态评估（语义相似度、导航效用打分）

### 关键创新。
- **未来帧投影（FFP的*：物理启发的几何模块，为视频扩散模型提供 3D 几何先验
- **语义级轨迹评测*：超越低层避障，通过预测未来视觉实现高层语义轨迹规划
- **无人机世界模型*：首个面向航拍场景的长时域视觉生成与导航世界模型
- **几何-学习融合**：将 3D 几何知识与深度学习世界模型有机结。
### 代表性结。
- 远距离视觉预测显著优于现有世界模型- 大尺度环境中无人机导航成功率显著提升
- FFP 模块有效缓解了远距离生成中的表征不确定。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
