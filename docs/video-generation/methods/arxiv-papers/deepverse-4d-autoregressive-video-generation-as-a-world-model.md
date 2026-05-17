---
title: "DeepVerse: 4D Autoregressive Video Generation as a World Model"
arxiv: https://arxiv.org/abs/2506.01103v1
github: https://github.com/SOTAMak1r/DeepVerse
website: https://sotamak1r.github.io/deepverse/
venue: arXiv
year: 2025
---

# DeepVerse: 4D Autoregressive Video Generation as a World Model

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2506.01103v1](https://arxiv.org/abs/2506.01103v1)
- **GitHub**: [https://github.com/SOTAMak1r/DeepVerse](https://github.com/SOTAMak1r/DeepVerse)
- **Website**: [https://sotamak1r.github.io/deepverse/](https://sotamak1r.github.io/deepverse/)
:::

## 学习笔记

### 核心贡献

DeepVerse 提出了一个全新的 4D 交互式世界模型，核心突破在于将显式几何预测纳入自回归视频生成循环，解决现有世界模型因仅关注视觉观测而忽略潜在几何状态导致的误差累积与时间不一致问题：

1. **4D 交互式世界模型**：将视频生成定义为在动作条件驱动下的 4D（3D 空间 + 时间）自回归预测任务，显式建模场景的几何结构（深度图、法线图等）并将其作为状态输入反馈到下一帧预测中。

2. **几何约束驱动的漂移抑制**：通过将前一时间步的几何预测显式注入当前帧预测，形成一个几何-外观联合优化的闭环，有效抑制长序列预测中的误差累积（drift），显著增强时间一致性。

3. **几何感知记忆检索机制**：设计了一种利用几何信息进行记忆检索的方案，在长期预测中通过匹配几何特征来检索和复用历史信息，保持空间一致性，避免场景结构逐渐退化。

### 方法细节

**整体架构**：
- DeepVerse 采用自回归 Transformer 作为骨干网络，输入为当前帧和动作编码，输出为下一帧的 RGB 图像及对应的几何预测（深度图、法线图）。
- 核心循环：$(\text{RGB}_t, \text{Geo}_t) \rightarrow \text{Action}_t \rightarrow (\text{RGB}_{t+1}, \text{Geo}_{t+1})$，其中 $\text{Geo}_{t+1}$ 同时作为辅助输出和下一轮的几何上下文输入。

**几何预测模块**：
- 在主干网络中添加专用解码头（深度头、法线头），与 RGB 解码头共享中间特征表示。
- 几何预测通过辅助损失（深度 L1 损失、法线余弦相似度损失）进行监督，训练数据需包含深度/法线标注（可通过预训练单目深度估计模型或合成数据获取）。

**几何-外观联合建模**：
- 当前时间步的输入由三部分组成：上一帧 RGB、上一帧几何预测（深度 + 法线）、当前动作编码。
- 几何信息通过特征融合模块（如交叉注意力或通道拼接）注入 Transformer 的中间层，引导网络关注空间结构一致性。
- 这种设计迫使模型学习物理上合理的状态转移，而非仅做像素级外推。

**几何感知记忆检索**：
- 维护一个历史帧的几何特征缓存（key-value memory），Key 为每一帧的几何特征向量（由几何编码器提取），Value 为对应的 RGB 特征。
- 在预测当前帧时，用当前几何查询向量在缓存中检索最相似的历史帧特征，通过注意力机制融合检索结果，增强长期空间一致性。
- 该机制使模型在预测遥远未来帧时仍能「回忆」早期场景的几何结构。

**训练策略**：
- 两阶段训练：第一阶段训练 RGB + 几何联合预测能力；第二阶段引入几何感知记忆模块，在长序列上进行端到端微调。
- 使用 teacher forcing 与 scheduled sampling 混合策略，逐步过渡到自回归推理模式。

### 关键发现

1. **显式几何约束显著减少漂移**：在以动作为条件的长期视频预测中（如机器人操作、自动驾驶场景），DeepVerse 相比仅预测 RGB 的基线方法在 50+ 帧的预测范围内保持更高的一致性，PSNR 和 SSIM 衰减更慢。

2. **几何预测与外观预测相互促进**：联合训练 RGB 和几何预测任务，不仅使几何预测更准，还反过来提升了 RGB 预测的质量——网络从几何监督中学会了更好的空间结构表征。

3. **几何感知记忆提升长期空间一致性**：在长度超过 100 帧的预测中，带记忆模块的 DeepVerse 能保持场景中物体的几何形状和空间关系不变，而无记忆的基线方法会出现物体漂移、形变等问题。

4. **多场景有效性验证**：在室内导航、机器人操作、自动驾驶、游戏环境（如 Minecraft-like）等多种场景下均验证了方法的通用性。

5. **物理动态捕捉能力增强**：显式几何约束使模型能更好地预测物理交互（如物体碰撞、遮挡关系），因为几何信息为这些物理事件提供了额外的结构先验。

### 方法归类

- **大方向**：世界模型 / World Model、视频预测 / Video Prediction
- **技术维度**：4D 生成（3D + Time）、几何感知自回归建模、记忆检索增强
- **相关方法**：Genie（交互式世界模型）、DINO-WM（world model via DINO features）、GAIA-1（自动驾驶世界模型）、UniSim（real-world interaction simulation）、Dreamer-v3（RL-based world model）
- **定位**：在自回归视频生成框架中引入几何约束和记忆机制，属于世界模型的结构化建模方向，与纯 RGB 预测的世界模型互补
