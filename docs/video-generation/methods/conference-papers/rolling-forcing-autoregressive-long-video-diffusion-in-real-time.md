---
title: "Rolling Forcing: Autoregressive Long Video Diffusion in Real Time"
arxiv: https://arxiv.org/abs/2509.25161v1
github: https://github.com/TencentARC/RollingForcing
website: https://kunhao-liu.github.io/Rolling_Forcing_Webpage
venue: ICLR
year: 2026
---

# Rolling Forcing: Autoregressive Long Video Diffusion in Real Time

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2509.25161v1](https://arxiv.org/abs/2509.25161v1)
- **GitHub**: [https://github.com/TencentARC/RollingForcing](https://github.com/TencentARC/RollingForcing)
- **Website**: [https://kunhao-liu.github.io/Rolling_Forcing_Webpage](https://kunhao-liu.github.io/Rolling_Forcing_Webpage)
:::

## 学习笔记

### 核心贡献
- 提出 Rolling Forcing 框架：首个支持实时自回归长视频生成的扩散模型方法，单 GPU 即可生成数分钟级别视频
- 联合去噪（Joint Denoising）机制：在单次前向传播中同时对多帧、递进噪声水平的图像进行去噪，有效抑制自回归误差累积
- 注意力汇聚机制（Attention Sink）：将历史帧的 KV 状态保留为全局上下文锚点，新帧自回归生成时持续引用，保持长距离时序一致性
- 高效少步蒸馏：在扩展时间窗口上实现少步去噪（4-8 步），推理延迟接近常数，实现实时流式生成

### 方法细节
- **非重叠窗口训练**：仅在非重叠时间窗口上训练，避免相邻窗口之间的信息泄漏，强制模型学习真正的自回归生成能力
- **渐进噪声调度**：为同一 batch 内的不同帧分配递进的噪声水平，使得联合去噪能够同时恢复多帧的干净图像
- **Attention Sink 设计**：保留历史帧的 Key-Value 状态作为固定的注意力锚点，新帧通过交叉注意力查询历史上下文，避免 KV cache 无限增长
- **扩展窗口蒸馏**：在扩展的时序窗口上训练少步学生模型，蒸馏步长（4-8 步）在速度与质量之间取得平衡
- **实时推理流程**：窗口滑动 + Attention Sink 持久化，每步仅对新窗口内的帧进行少步去噪，历史帧结果直接复用

### 关键发现
- 单 GPU 可实时流式生成数分钟视频，推理延迟接近常数，不随视频长度增长
- 联合去噪显著优于逐帧独立去噪，长视频质量退化远小于传统 Autoregressive 基线
- Attention Sink 对长距离时序一致性的贡献最大，消融实验中移除后一致性显著下降
- 非重叠窗口训练是保证自回归泛化的关键设计

### 方法归类
- **范式**: Autoregressive + Diffusion Distillation
- **关键技术**: Joint Denoising, Attention Sink, Non-overlapping Window Training, Few-Step Distillation
- **适用场景**: Real-time Long Video Generation, Streaming Video, Infinite Video
