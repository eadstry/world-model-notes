---
title: "AnchorWeave: World-Consistent Video Generation with Retrieved Local Spatial Memories"
arxiv: https://www.arxiv.org/abs/2602.14941
github: https://github.com/wz0919/AnchorWeave
website: https://zunwang1.github.io/AnchorWeave
venue: arXiv
year: 2026
---

# AnchorWeave: World-Consistent Video Generation with Retrieved Local Spatial Memories

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://www.arxiv.org/abs/2602.14941](https://www.arxiv.org/abs/2602.14941)
- **GitHub**: [https://github.com/wz0919/AnchorWeave](https://github.com/wz0919/AnchorWeave)
- **Website**: [https://zunwang1.github.io/AnchorWeave](https://zunwang1.github.io/AnchorWeave)
:::

## 学习笔记

### 核心贡献
- 识别全局 3D 重建在多视图视频生成中的根本问题：跨视图位姿与深度估计误差导致同一表面在不同视图中被重建到不同的 3D 位置，融合后噪声几何污染条件信号，导致幻觉与质量退化。
- 提出用**多个干净的局部几何记忆**替代单一失准的全局记忆，从根源上避免跨视图失配误差的累积。
- 设计 **Coverage-driven Local Memory Retrieval** 策略：根据目标相机轨迹贪心地选择能最大化新覆盖可见区域的局部记忆，确保检索到的几何记忆与目标视角高度相关。
- 提出 **Multi-Anchor Weaving Controller**：通过共享注意力块联合处理多锚点的几何特征，再经相机姿态引导融合产生统一控制信号，注入 backbone 模型指导生成。

### 方法细节
- **局部记忆构建**：对历史帧逐帧估计深度并反投影为局部点云，每帧的局部几何独立于其他帧，天然避免跨视图失配。每个局部记忆包含点云 + 对应帧的 RGB 渲染（锚点视频）。
- **覆盖驱动检索**：定义目标相机视锥内的可见区域，从候选记忆池中贪心选择每一步能最大化新增覆盖率的局部记忆；检索终止条件为未覆盖区域归零、达到预算 K 或候选池耗尽。
- **多锚点编织控制器**：将选中的 K 个锚点视频编码后送入共享注意力块联合处理，再通过相机姿态（检索锚点相对目标相机的位姿）引导的特征融合模块进行加权融合，产生最终控制信号。
- **Backbone**：以 CogVideoX-5B-I2V 为基础，也支持 Wan2.2 5B；通过迭代生成 81 帧片段并组合为完整长视频，每段利用历史生成帧的局部记忆。
- 基线对比：Gen3C、TrajCrafter、ViewCrafter（单锚点方法）、Context-as-Memory、SEVA、SPMem 等，AnchorWeave 在重访场景下显著减少模糊、伪影和幻觉。

### 关键发现
- 局部几何记忆的质量远优于全局重建融合的结果，单帧独立点云避免了多帧估计误差的累积传播。
- 覆盖驱动检索 + 多锚点编织的组合是必要的：仅用单个锚点（如基线方法）无法覆盖目标视角的所有可见区域，多锚点协作才能提供充分的几何约束。

### 方法归类
- **范式**: 记忆增强的视频生成（Memory-Augmented Video Generation）
- **关键技术**: 局部 3D 几何记忆、覆盖驱动检索、多锚点注意力融合、相机可控生成
- **适用场景**: 长时域世界一致相机可控视频生成（虚拟场景漫游、3D 场景探索）
