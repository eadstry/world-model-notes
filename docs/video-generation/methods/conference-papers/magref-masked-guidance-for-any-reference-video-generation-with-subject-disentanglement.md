---
title: "MAGREF: Masked Guidance for Any-Reference Video Generation with Subject Disentanglement"
arxiv: https://arxiv.org/abs/2505.23742v2
github: https://github.com/MAGREF-Video/MAGREF
website: https://magref-video.github.io/
venue: ICLR
year: 2026
---

# MAGREF: Masked Guidance for Any-Reference Video Generation with Subject Disentanglement

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2505.23742v2](https://arxiv.org/abs/2505.23742v2)
- **GitHub**: [https://github.com/MAGREF-Video/MAGREF](https://github.com/MAGREF-Video/MAGREF)
- **Website**: [https://magref-video.github.io/](https://magref-video.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出统一框架 MAGREF，解决任意参考视频生成中身份不一致、多主体特征纠缠和 copy-paste 伪影等关键问题。
- Masked guidance 与 subject disentanglement 机制可在不修改预训练骨干架构的前提下，实现灵活的多类型、多数量参考图像条件合成。

### 方法细节
- Masked guidance 采用区域感知掩码配合逐像素通道拼接，沿通道维度保留多主体外观特征，维持身份一致性并保持骨干模型原有生成能力。
- Subject disentanglement 机制从文本条件中提取各主体语义值，将其注入对应视觉区域，有效缓解多参考条件下的主体混淆。
- 设计四阶段数据管线，从单图到多图逐步构造多样化训练对，系统性地消除复制粘贴伪影。

### 关键发现
- 通道维度的区域掩码引导可在不改动 DiT 架构的前提下精准保留多主体身份一致性。
- 将文本语义值注入对应视觉区域能够有效解耦多主体特征，避免主体间外观相互泄漏。
- 在综合基准测试上，MAGREF 一致超越现有 SOTA 方法，验证了 unified framework 在任意参考场景下的有效性。

### 方法归类
- **范式**: 基于预训练 T2V 骨干的参考图像条件注入框架，无需网络架构修改。
- **关键技术**: 区域感知 masked guidance、像素级通道拼接、subject disentanglement、语义值注入、四阶段递进数据管线。
- **适用场景**: 任意类型与数量参考主体的视频生成，如多角色定制视频、多商品场景展示。
