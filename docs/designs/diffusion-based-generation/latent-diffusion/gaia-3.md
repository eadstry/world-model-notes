---
title: "GAIA-3: Scaling World Models to Power Safety and Evaluation"
design: "GAIA-3"
website: https://wayve.ai/thinking/gaia-3/
---

# GAIA-3: Scaling World Models to Power Safety and Evaluation

::: info 论文信息
- **Design**: GAIA-3
- **论文全称**: GAIA-3: Scaling World Models to Power Safety and Evaluation
- **Website**: [https://wayve.ai/thinking/gaia-3/](https://wayve.ai/thinking/gaia-3/)
:::

## 核心思想

GAIA-3 是 Wayve 推出的第三代生成式世界模型，专为自动驾驶安全性和仿真评估而设计。核心创新是大规模扩展（scaling）：GAIA-3 使用比前代 GAIA-1/2 大 10 倍以上的模型和数据量，实现了极强的场景重建保真度和控制能力。GAIA-3 的目标不是直接驾驶，而是作为自动驾驶系统的"安全评估引擎"和"数据生成器"。

GAIA-3 的核心特性是：给定初始帧和自车轨迹，能够生成高度逼真的未来驾驶视频。关键的是它能产生 safety-critical 的多样化场景——包括罕见但危险的边缘案例（如突然横穿的行人、失控车辆），用于自动驾驶系统的压力测试。

## 技术架构

**Vision Encoding（视觉编码）**：使用 VQ-VAE 或扩散自编码器将前视图/环视图压缩为潜在 token。编码器在 Wayve 的内部大规模驾驶数据集上训练。

**Knowledge Learning（知识学习）**：基于 Video Diffusion Transformer（DiT），在潜在空间中学习条件化的视频生成。模型以初始帧和自车轨迹为条件，通过去噪扩散过程生成未来的潜在帧。使用 classifier-free guidance 和 action-conditioning 实现可控生成。

**Controllable Simulation（可控模拟）**：支持多种控制模式：ego trajectory conditioning（自车行为控制）、scene editing（修改场景布局）、safety-critical scenario generation（对抗性场景生成）。模型能够感知和适应控制输入，生成高度匹配的场景演变。

## 代码实现要点

代码未开源（Wayve 商业产品）。基于大规模 Video Diffusion Transformer。在 Wayve 内部数千万小时的驾驶数据上训练。

## 关键创新点

1. **10× 扩展**：模型和数据规模比前代大一个数量级
2. **Safety-critical 生成**：主动生成危险场景用于安全评估
3. **多控制模式**：轨迹条件、场景编辑、对抗生成
4. **工业级质量**：可实际用于自动驾驶系统验证的仿真器

## 代表性结果

Wayve 展示了 GAIA-3 在伦敦市区驾驶场景下的生成质量——时间上稳定（数秒内无闪烁或退化）、空间上保持一致（车道线和建筑不扭曲）、对控制输入高度响应（不同方向盘角度产生截然不同的场景演变）。GAIA-3 被用于大规模 corner case 生成和安全评估 pipeline。
