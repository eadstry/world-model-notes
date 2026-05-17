---
title: "Frame In-N-Out: Unbounded Controllable Image-to-Video Generation"
arxiv: https://arxiv.org/abs/2505.21491v2
github: https://github.com/UVA-Computer-Vision-Lab/FrameINO
website: https://uva-computer-vision-lab.github.io/Frame-In-N-Out/
venue: NeurIPS
year: 2025
---

# Frame In-N-Out: Unbounded Controllable Image-to-Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2505.21491v2](https://arxiv.org/abs/2505.21491v2)
- **GitHub**: [https://github.com/UVA-Computer-Vision-Lab/FrameINO](https://github.com/UVA-Computer-Vision-Lab/FrameINO)
- **Website**: [https://uva-computer-vision-lab.github.io/Frame-In-N-Out/](https://uva-computer-vision-lab.github.io/Frame-In-N-Out/)
:::

## 学习笔记

### 核心贡献
- 提出 Frame In/Out 可控视频生成任务：用户指定目标运动轨迹，目标可从画面外进入场景（Frame In）或自然离开场景（Frame Out），模拟电影级镜头语言中进出画效果。
- 构建半自动标注的 Frame In/Out 专用数据集，为模型训练与系统评估提供基础。
- 设计身份保持的运动可控视频 Diffusion Transformer（DiT）架构，同时解决运动轨迹控制与目标外观一致性两大挑战。
- 建立面向 Frame In/Out 任务的综合评估协议，涵盖轨迹精度、身份保真度与生成质量。

### 方法细节
- 输入为起始帧图像和用户指定的运动轨迹（如 B 样条曲线或关键点序列），轨迹描述目标在时空中从入场到出场（或反向）的位移过程。
- 将轨迹信息编码为时空条件信号，注入 DiT 的 Attention 层中，与文本描述和噪声潜在帧共同引导视频生成。
- 引入身份保持模块：通过参考帧特征与生成帧目标区域进行特征对齐，确保目标在进出画大范围运动中外貌不发生退化或崩坏。
- 数据生成管线：从互联网视频数据中自动检测、分割运动目标，筛选符合 Frame In/Out 语义的自然片段，提取并标注运动轨迹。
- 训练分两阶段进行：先训练运动控制分支使模型学会轨迹跟随，再冻结该分支并加入身份保持模块进行微调。

### 关键发现
- 显式建模 Frame In/Out 语义有效缓解了目标在画面边界处常见的形变与外观崩溃问题，相较于通用 I2V 方法有明显优势。
- 仅靠轨迹控制信号不足以在长时序、大运动幅度场景中维持目标外观稳定性，身份保持模块是关键补充，消融实验中移除该模块后身份保真度显著下降。

### 方法归类
- **范式**: [可控 I2V / 身份保持运动控制 / 电影级进出画镜头合成]
- **关键技术**: [运动轨迹编码注入 DiT → 身份保持特征对齐 → Frame In/Out 半自动数据管线]
