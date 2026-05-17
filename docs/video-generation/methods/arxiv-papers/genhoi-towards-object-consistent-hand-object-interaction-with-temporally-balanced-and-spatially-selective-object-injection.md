---
title: "GenHOI：基于时间均衡与空间选择性注入的目标一致性手物交互生成"
source: "arxiv"
arxiv_id: "2603.06048"
tags:
  - "video-generation"
  - "hand-object-interaction"
  - "object-consistency"
  - "RoPE"
  - "attention-gate"
  - "video-editing"
status: "已读"
---
## 学习笔记

### 核心贡献

- 提出 GenHOI，一种轻量级增强方案，可附加到预训练视频生成模型上，通过时间均衡与空间选择性的参考物体注入实现手物交互（HOI）中的目标一致性
- 设计 Head-Sliding RoPE 机制：为参考 token 分配逐头的时间偏移量（head-specific temporal offsets），将参考物体的影响均匀分布到所有帧，避免时间维度上的信息衰减
- 提出两级空间注意力门控（two-level spatial attention gate）：分别在 token 级和区域级过滤注意力，将物体条件化的注意集中在 HOI 区域
- 首次在 in-the-wild 场景中统一解决 HOI 重演（reenactment）和通用视频编辑中的物体外观一致性问题

### 方法细节

- **整体框架**：在预训练视频扩散模型（如 Stable Video Diffusion）的 U-Net 或 DiT backbone 中插入参考物体注入模块，无需重新训练基础模型
- **Head-Sliding RoPE**：
  - 标准 RoPE 对每个 token 施加统一的时间位置编码，导致参考信息在远距离帧中衰减
  - Head-Sliding RoPE 为不同注意力头分配不同的时间偏移量 $\Delta t_h$，使得参考 token 在时间轴上"滑动"，各头覆盖不同的时间段
  - 实现参考信息在所有帧中的均衡分布
- **两级空间注意力门控**：
  - 第一级（token 级门控）：基于参考物体特征与视频 token 的相似度计算注意力掩码，保留与物体相关的 token
  - 第二级（region 级门控）：利用手部关键点 / 接触区域预测，生成空间掩码将物体注意限制在 HOI 区域，减少对背景与无关区域的干扰
- **训练策略**：在 HOI 视频数据上微调门控参数，固定预训练模型的其余部分

### 关键发现

- 在多个 in-the-wild 测试场景中，GenHOI 在物体外观一致性（如 FID、LPIPS 对齐度）和手物交互物理合理性上显著优于现有 HOI 重演方法（如 HOI-Diff、ReEnact）和通用视频编辑方法（如 AnyV2V、TokenFlow）
- 消融实验验证了 Head-Sliding RoPE 对时间一致性的关键作用，移除后远端帧物体外观明显退化
- 两级空间门控中的 region 级门控对减少背景伪影有显著贡献，token 级门控负责精细化的物体特征对齐
- 方法具有良好的模型无关性，可在不同的视频生成 backbone 上即插即用

### 方法归类

- **所属范式**：预训练视频生成模型的条件注入 / 即插即用增强
- **技术路线**：时间位置编码调整（RoPE 变体）+ 空间注意力约束
- **相关方法**：HOI-Diff, ReEnact, AnyV2V, TokenFlow, Stable Video Diffusion, ControlNet（空间条件注入）
- **应用领域**：手物交互重演、视频编辑中的物体替换、虚拟试戴、增强现实交互
