---
title: "Puppet-Master: Scaling Interactive Video Generation as a Motion Prior for Part-Level Dynamics"
arxiv: https://arxiv.org/abs/2408.04631
github: https://github.com/RuiningLi/puppet-master
website: https://vgg-puppetmaster.github.io/
venue: ICCV
year: 2025
---

# Puppet-Master: Scaling Interactive Video Generation as a Motion Prior for Part-Level Dynamics

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2408.04631](https://arxiv.org/abs/2408.04631)
- **GitHub**: [https://github.com/RuiningLi/puppet-master](https://github.com/RuiningLi/puppet-master)
- **Website**: [https://vgg-puppetmaster.github.io/](https://vgg-puppetmaster.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Puppet-Master，一个以部件级物体动力学为建模目标的交互式视频生成模型，通过物体上少量 drag 点的轨迹控制部件运动
- 构建 Objaverse-Animation-HQ 数据集，从合成 3D 动画渲染中提取部件级运动片段，避免真实视频中整体运动与相机运动的混淆
- 提出 all-to-first attention 机制替代传统空间注意力，消除在域外数据上微调产生的伪影

### 方法细节
- 基于预训练的文生视频模型扩展，将用户指定的 drag 轨迹编码为条件信号注入去噪 UNet
- All-to-first attention：所有帧的 token 均与第一帧的对应位置 token 计算交叉注意力，有效保持部件身份和外观一致性
- 数据集经过严格筛选：去除次优动画，对合成渲染施加有意义的 drag 标注，强调物体内部动力学而非整体刚体运动

### 关键发现
- Puppet-Master 能生成真实的部件级运动（如动物四肢摆动、机械关节旋转），而现有运动条件视频生成模型仅能驱动整体刚体运动
- 在真实图像上零样本泛化表现优异，超越已有方法在真实世界基准上的性能

### 方法归类
- **范式**: [交互式视频生成 / 部件级运动先验]
- **关键技术**: [drag 条件注入 → all-to-first attention → 合成数据增强]
- **适用场景**: [物体部件级运动精细控制、交互式视频生成、零样本域外泛化]
