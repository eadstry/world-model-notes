---
title: "Counter-Strike Deathmatch with Large-Scale Behavioural Cloning"
design: "CS-Deathmatch"
arxiv: https://arxiv.org/abs/2104.04258
github: https://github.com/TeaPearce/Counter-Strike_Behavioural_Cloning
---

# CS-Deathmatch: Counter-Strike Deathmatch with Large-Scale Behavioural Cloning

::: info 论文信息
- **Design**: CS-Deathmatch
- **论文全称**: Counter-Strike Deathmatch with Large-Scale Behavioural Cloning
- **arXiv**: [https://arxiv.org/abs/2104.04258](https://arxiv.org/abs/2104.04258)
- **GitHub**: [https://github.com/TeaPearce/Counter-Strike_Behavioural_Cloning](https://github.com/TeaPearce/Counter-Strike_Behavioural_Cloning)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2411.01224](https://arxiv.org/abs/2411.01224)
- **GitHub**: [https://github.com/DIAMOND-VR/DIAMOND-CSGO](https://github.com/DIAMOND-VR/DIAMOND-CSGO)
- **Website**: [https://diamond-wm.github.io/](https://diamond-wm.github.io/)

## 简介
CS-Deathmatch eDIAMOND 团队创建的一个基准Counter-Strike: Global Offensive (CS:GO) 的第一人称射击游戏世界模型评测环境。该环境中CS:GO 建Deathmatch 模式中提取了大量真实玩家的游戏视频和对应的键盘鼠标输入数据（通过游戏机demo 录制功能），构建了世界上首个大规模FPS 交互数据与世界模型的结合评测基准。

CS-Deathmatch 的独特之处在于其"高动态的——FPS 游戏中的画面变化极其剧烈（快速转身、跳跃、奔跑、射击），远比自动驾驶或机器人操作场景中的视觉变化更为激烈。这对世界模型的预测能力提出了极高要求。DIAMOND 团队在CS:GO 上收集了 500 万帧以上的游戏画面和精准对齐的玩家控制输入（WASD 移动+鼠标视角+射击动作），构建了一个标准化的扩散世界模型训练和评测框架。环境提供了多种评估指标，包括单帧预测质量（PSNR、SSIM、LPIPS）、长时域生成一致性和交互可控性。

## 关键特征
- **数据规模**: 500 模 型CS:GO 游戏画面、精确对齐的键盘/鼠标输入
- **数据模式**: RGB 游戏画面、鼠标视角移动、WASD 移动输入、射用装弹动作
- **主要指标**: PSNR/SSIM/LPIPS（帧预测）、长时域一致性、交互实时。
- **领域**: FPS 游戏世界模型、高动态性场景预测、交互式内容生成

## 与世界模型的关系
CS-Deathmatch eDIAMOND 扩散世界模型的关键评测环境之一，代表了世界模型的慢速交互（机器人操作、驾驶仿真）的高速交互（FPS 游戏）的跨越。FPS 场景对世界模型的能力要求是全方位的：不仅要预测未来帧，还要在极短延迟内完成预测以支持实时游戏——这是一个极其严格的实时性挑战。DIAMOND 团队成功展示了扩散世界模型在 CS:GO 中的交互玩法，这是世界模型实时交互"能力的里程碑突破。

## 代表性用例
- DIAMOND (2024) 在 CS:GO Deathmatch 中展示扩散世界模型的实时交互
- 用于验证高动态场景下的世界模型鲁棒。
- 为 FPS 游戏的AI 内容生成提供技术基础
- 推动世界模型向高速交互应用的发展

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)