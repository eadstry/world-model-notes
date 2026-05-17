---
title: "Identity-GRPO：基于强化学习的多人身份保持视频生成优化"
source: "arxiv"
arxiv_id: "2510.14256"
tags: ["multi-human","identity-preservation","GRPO","reward-model","preference-optimization"]
status: "已读"
---
## 学习笔记
### 核心贡献
1. 提出 Identity-GRPO，面向多人身份保持视频生成的后训练优化框架，解决现有方法（VACE、Phantom）在多人场景下身份漂移与混淆的问题。
2. 训练专门的视频奖励模型（Video Reward Model），基于大规模偏好数据集，包含人类标注和合成失真数据（如身份交换、模糊、纹理退化），能可靠评估多人身份一致性。
3. 针对多人场景定制 GRPO（Group Relative Policy Optimization）算法，通过分组采样和组内相对奖励来稳定 RL 训练，避免多人场景下的奖励偏移。
4. 作为通用后训练框架，可即插即用地增强 VACE 和 Phantom 等多种基座模型，无需修改基座架构。
5. 在多人身份一致性指标上取得最多 **18.9%** 的提升。

### 方法细节
- **视频奖励模型（Video Reward Model, VRM）**：
  - **训练数据**：构建大规模多人视频偏好数据集，混合人类标注数据（A vs B 对比评分，侧重身份一致性）和合成失真数据（对真实视频施加身份交换、面部模糊、纹理退化等扰动，生成正负样本对）。
  - **模型架构**：基于预训练视频理解模型（如 VideoMAE/VideoCLIP）作为 backbone，输出单帧面部特征后经过帧级拼接和时序 Transformer，最终输出标量奖励分值。
  - **奖励信号维度**：面部身份一致性（主）、动作自然度、纹理保真度。
- **GRPO 定制（Multi-Human GRPO）**：
  - **Group Policy Generation**：对同一文本-参考人物对，独立采样 $K$ 个视频候选，构成一个 group；对每个 group 计算 VRM 奖励。
  - **组内归一化**：对 group 内的奖励值做 z-score 归一化，得到相对优势 $A_i = (r_i - \mu_{\text{group}}) / \sigma_{\text{group}}$，消除不同 group 间的奖励尺度差异。
  - **策略梯度更新**：最大化 $\mathbb{E}[\min(\rho_t A_t, \text{clip}(\rho_t, 1-\epsilon, 1+\epsilon) A_t)]$，其中 $\rho_t$ 为当前策略与旧策略的概率比（PPO-style clipping）。
  - **多人针对性设计**：对不同人物的奖励做逐人分解（per-person identity score），防止某个人物主导整体奖励。
- **训练流程**：先预训练 VRM，再冻结 VRM 作为 reward oracle；在 VACE/Phantom 等基座上执行 GRPO 微调，无需额外标注数据。
- **推理**：与基座方法相同的推理流程，不增加额外推理开销。

### 关键发现
- 在多个多人身份保持基准（含自建和公开数据集）上，Identity-GRPO 对人的身份一致性提升达 **18.9%**（VACE 基座）和 **15.2%**（Phantom 基座）。
- 消融实验：（1）用随机权重替代 VRM → 提升消失，证明奖励模型质量关键；（2）去除组内归一化 → 训练不稳定、效果下降；（3）仅用合成数据训练 VRM → 与人类偏好相关性下降。
- GRPO 相比 DPO（Direct Preference Optimization）在多人场景中更稳定，因组内对比归一化缓解了多人场景的奖励估计方差。
- 在保持视频质量（FVD、CLIPSIM）不退化的情况下提升身份一致性，展现了该方法作为后训练即插即用框架的优势。

### 方法归类
- **所属范式**：基于强化学习的生成模型后训练优化，偏好对齐（preference alignment）。
- **技术路线**：大规模偏好数据构建 → 视频奖励模型预训练 → GRPO 组内对比策略优化 → 身份一致性提升。
- **相关方法**：VACE（全视频编辑）、Phantom（单主体生成）、DPO（直接偏好优化）、PPO/GRPO（策略优化）、InstructVideo（指令对齐视频生成）。
- **应用领域**：多人视频生成、虚拟社交/互动内容、影视角色生成、数字人/虚拟偶像。
