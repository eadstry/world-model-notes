---
title: "A Control-Centric Benchmark for Video Prediction"
design: "VP²"
arxiv: https://arxiv.org/abs/2304.13723
github: https://github.com/s-tian/vp2
---

# VP²: A Control-Centric Benchmark for Video Prediction

::: info 论文信息
- **Design**: VP²
- **论文全称**: A Control-Centric Benchmark for Video Prediction
- **arXiv**: [https://arxiv.org/abs/2304.13723](https://arxiv.org/abs/2304.13723)
- **GitHub**: [https://github.com/s-tian/vp2](https://github.com/s-tian/vp2)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2304.13723](https://arxiv.org/abs/2304.13723)
- **GitHub**: [https://github.com/s-tian/vp2](https://github.com/s-tian/vp2)

## 简介
VP²（Video Prediction for Planning）是 UC Berkeley 提出的一个以"控制为中心"的视频预测基准。传统视频预测基准（如 KTH、BAIR、Moving MNIST）仅评估逐帧像素重建质量（PSNR、SSIM），但 VP² 的核心洞察是：高重建质量不意味着对控制决策有用的预测。VP² 提出了替代评估协议——基于预测视频的下游控制性能——来衡量视频预测模型对决策制定的实际价值。

VP² 基准使用 robosuite 的 MuJoCo 仿真环境，提供 4 个机器人操作任务（PickPlace、NutAssembly、Door、Lift）。每个任务都有大量真实仿真交互数据（RGB 图像序列），以及用于评估的基于模型的规划器（MPPI）。VP² 的评估流程是：1）用给定数据训练视频预测模型，2）将模型嵌入到 MPPI 规划器中，3）通过闭环控制的成功率来评估视频预测质量。这为视频预测世界模型提供了首个以决策质量为导向的标准化评估协议。

## 关键特征
- **数据规模**: 4 个操作任务，每任务大量仿真交互轨迹（MuJoCo 物理仿真）
- **数据模态**: RGB 图像序列、关节状态、动作序列
- **主要指标**: 基于视频预测的 MPPI 规划成功率（控制导向评估）
- **领域**: 视频预测评估、基于模型的规划、世界模型基准

## 与世界模型的关系
VP² 对世界模型研究的核心贡献在于改变了评估范式——从像素重建质量转向决策质量。这直接影响了世界模型社区对"什么是好的世界模型"的认知。VP² 展示了像素级高保真预测与世界模型的实际控制价值之间的不一致性（高 PSNR 未必带来高成功率），推动社区从追求视觉逼真度转向追求对决策有物理意义的预测。这一范式也影响了后续的 UniSim、Genie 等工作。

## 代表性用途
- 作为视频预测世界模型的标准化决策导向评估协议
- SV2P、FitVid、MCVD 等视频预测模型在 VP² 上进行评估
- 启发了世界模型领域"控制导向评估"的研究方向
- 成为 robot learning 中基于模型的 RL 的基准参考
