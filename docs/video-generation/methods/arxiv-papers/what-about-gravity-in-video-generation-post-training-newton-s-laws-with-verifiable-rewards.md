---
title: "What about gravity in video generation? Post-Training Newton's Laws with Verifiable Rewards"
arxiv: "https://arxiv.org/abs/2512.00425"
github: "https://github.com/cvlab-stonybrook/NewtonRewards"
website: "https://cvlab-stonybrook.github.io/NewtonRewards/"
venue: "arXiv"
year: 2025
---

# What about gravity in video generation? Post-Training Newton's Laws with Verifiable Rewards

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [2512.00425](https://arxiv.org/abs/2512.00425)
- **GitHub**: [cvlab-stonybrook/NewtonRewards](https://github.com/cvlab-stonybrook/NewtonRewards)
- **Website**: [项目页面](https://cvlab-stonybrook.github.io/NewtonRewards/)
:::

## 学习笔记

### 核心贡献
- 提出 NewtonRewards，首个基于可验证奖励（verifiable rewards）的物理约束视频生成后训练框架，无需人类反馈或 VLM 评判
- 从生成视频中提取可测量代理量：光流作为速度代理，高层外观特征作为质量代理，实现牛顿力学约束的显式注入
- 设计两个互补奖励函数：牛顿运动学约束奖励（强制恒加速度动力学）与质量守恒奖励（防止退化解），通过 GRPO 联合优化
- 构建大规模评测基准 NewtonBench-60K，覆盖 5 类牛顿运动基元（自由落体、水平/抛物抛射、斜面上滑/下滑）

### 方法细节
- 冻结预训练视频扩散模型，在后训练阶段引入可验证奖励进行 GRPO 优化，无需额外标注数据
- 牛顿运动学约束奖励：基于光流提取逐像素速度，约束相邻帧间速度变化满足 $v_{t+1} = v_t + a \cdot \Delta t$，其中加速度 $a$ 为常数
- 质量守恒奖励：利用 DINOv2 等冻结视觉模型提取外观特征作为质量代理，约束物体区域特征跨帧保持稳定，避免物体凭空消失或形变
- 对 5 种牛顿运动基元分别设计不同的运动先验模板，覆盖平移、旋转、加速等多类刚体运动模式
- NewtonBench-60K 包含 60K 条生成视频，覆盖 5 个运动基元，每个基元使用多种基座模型（CogVideoX、Open-Sora 等）生成后由 NewtonRewards 微调
- 评测指标涵盖视觉质量（FVD、CLIP 相似度）与物理合理性（轨迹误差、加速度偏差、时序一致性）

### 关键发现
- NewtonRewards 在所有运动基元上一致提升物理合理性，自由落体场景中物体漂移现象显著减少
- 质量守恒奖励对防止退化解至关重要——仅使用运动学约束会导致模型产生静态帧或物体消失等退化策略
- 后训练阶段仅需少量步数（~200 steps）即可显著改善物理一致性，计算开销远低于全量微调

### 方法归类
- **范式**: 基于可验证奖励的后训练（Post-Training with Verifiable Rewards）
- **关键技术**: 光流速度代理、外观特征质量代理、牛顿运动学约束、质量守恒约束、GRPO 优化
- **适用场景**: 物理规律敏感的短视频生成，如物体运动模拟、物理教学演示、游戏物理引擎辅助生成
