---
title: "From Slow Bidirectional to Fast Autoregressive Video Diffusion Models"
arxiv: https://arxiv.org/abs/2412.07772
github: https://github.com/tianweiy/CausVid
website: https://causvid.github.io/
venue: CVPR
year: 2025
---

# From Slow Bidirectional to Fast Autoregressive Video Diffusion Models

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2412.07772](https://arxiv.org/abs/2412.07772)
- **GitHub**: [https://github.com/tianweiy/CausVid](https://github.com/tianweiy/CausVid)
- **Website**: [https://causvid.github.io/](https://causvid.github.io/)
:::

## 学习笔记

### 核心贡献
- 将预训练的双向视频扩散 Transformer 改造为因果自回归 Transformer，实现逐帧实时生成，打破双向注意力对交互应用的制约
- 首次将分布匹配蒸馏（DMD）扩展至视频域，将 50 步扩散模型蒸馏为 4 步生成器，大幅降低推理延迟
- 提出基于教师 ODE 轨迹的学生初始化方案与非对称蒸馏策略，有效缓解自回归生成中的误差累积

### 方法细节
- 从预训练双向 DiT 出发，将自注意力掩码修改为下三角因果掩码，使当前帧仅依赖历史帧，实现因果生成
- 非对称蒸馏框架：双向教师以完整序列上下文做高质量推理，监督因果学生模型仅基于过去帧进行逐帧预测
- 学生初始化时沿教师 ODE 轨迹采样，使学生起点接近教师分布，降低蒸馏训练难度
- 推理时采用 KV Cache 机制，缓存已生成帧的键值对，后续帧生成时复用，大幅降低自回归推理计算量
- 蒸馏训练仅需短片段视频，但因果结构使模型在推理时可生成任意长度的长视频

### 关键发现
- VBench-Long 基准上达到 84.27 总分，超越此前所有视频生成模型，证明自回归范式在质量上不输双向模型
- 单 GPU 上实现 9.4 FPS 的流式生成，且支持零样本的视频到视频翻译、图像到视频和动态提示词控制
- 非对称蒸馏（双向教师监督因果学生）在质量和稳定性上显著优于对称蒸馏，因为教师的全上下文信息有助于学生对历史帧的预测

### 方法归类
- **研究方向**: 高效视频生成、自回归视频扩散
- **技术路线**: 因果 DiT + DMD 视频蒸馏 + KV Cache 流式推理，兼顾生成质量与推理速度
