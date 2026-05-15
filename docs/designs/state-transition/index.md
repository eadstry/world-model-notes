---
title: "State Transition — 状态转移范式"
---

# State Transition — 状态转移范式

::: tip 范式定义
State Transition 范式的核心思想是：**将世界建模为一个紧凑的隐状态空间动力学系统**。与 Sequential Generation 和 Diffusion-based Generation 不同，State Transition 模型不生成像素，而是学习一个低维的**状态转移函数** $s_{t+1} = f(s_t, a_t)$，其中 $s_t$ 是从高维视觉观测中压缩的隐状态，$a_t$ 是动作。这是所有范式中**最适合强化学习和规划**的路线。
:::

## 范式本质：世界是一种动态系统

State Transition 范式的数学根基是**动态系统理论**和**最优控制**。它将世界模型定义为：

$$
s_t \sim p(s_t | s_{t-1}, a_{t-1}, o_t)
$$
$$
o_t \sim p(o_t | s_t)
$$

其中 $s_t$ 是隐状态，$o_t$ 是视觉观测，$a_t$ 是动作。这个公式隐含了三个关键假设：

1. **马尔可夫性**：未来只依赖于当前状态和动作，与更早的历史无关（通过隐状态 $s_t$ 的充分统计量属性来保证）
2. **状态抽象**：高维像素观测可以被压缩为低维状态而不损失决策相关信息
3. **动力学可学习**：状态转移函数 $f(s_t, a_t)$ 可以从数据中学习

这些假设看似简单，但在实践中的验证令人惊讶——Dreamer 系列在 Atari、DeepMind Control Suite、Minecraft 等多样化的环境中证明了它们在大规模场景中的有效性。

## 两大子范式的分野

State Transition 内部主要分化为两条互补的技术路线：

### 1. Latent State-Space Modeling（隐状态空间建模）

将整个场景编码为**单一紧凑的隐状态向量**。这是 State Transition 范式的主流路线，代表工作包括 Dreamer 系列（PlaNet → DreamerV1 → V2 → V3 → DayDreamer）和 Transformer-based 变体（TWM、IRIS、STORM、TD-MPC2）。

**核心优势**：简单、高效、在大规模任务中已证明其有效性（DreamerV3 在 Minecraft 中仅用 100M 参数即实现了钻石收集）。

**核心机制**：RSSM（Recurrent State-Space Model）——将确定性循环状态和随机状态拆分，确定性部分捕捉规律性动态，随机部分建模多模态未来。

### 2. Object-Centric Modeling（对象中心建模）

将世界分解为**多个独立对象**，每个对象拥有自己的状态表示，对象间通过交互影响彼此。代表工作包括 SlotFormer、slotSSM、SSWM 等。

**核心优势**：组合泛化能力强（训练在 2 个对象上，可泛化到 3+ 个对象），可解释性高（每个 slot 可解释为一个独立对象）。

**核心机制**：Slot Attention + Slot-level Transformer/SSM——用竞争性注意力从视觉特征中分离对象，在对象层面进行动力学建模。

## State Transition 范式的核心优势

### 1. 极致的样本效率

这是 State Transition 模型最核心的优势。DreamerV3 在 Atari 100k benchmark 上的表现说明了这一点——仅需 100k 交互步骤（约等于人类玩 2 小时游戏），模型就能在 55 款 Atari 游戏中达到超人类水平。它的样本效率比无模型 RL（如 PPO、DQN）高 1-2 个数量级，比基于像素空间预测的方法（如 Video Prediction + Planning）也高出数倍。

样本效率的根本来源是**想象力**——State Transition 模型可以在隐空间中通过「想象」进行 rollout，而无需在真实环境中采样。一次真实交互可以被重复利用成百上千次的想象轨迹。

### 2. 规划与策略搜索的天然适配

由于状态转移函数 $s_{t+1} = f(s_t, a_t)$ 是紧凑且可微的（或通过采样近似），State Transition 模型天然支持多种规划算法：

- **Model Predictive Control（MPC）**：在当前状态处执行 rollout，选择最优动作序列
- **Latent Imagination**：在隐空间中用 actor-critic 进行策略学习，Dreamer 系列的核心机制
- **Monte Carlo Tree Search（MCTS）**：在状态空间中进行树搜索（TD-MPC2 的方法）
- **Shooting Methods**：通过随机采样大量动作序列并评估来搜索最优策略

### 3. 隐状态的可复用性

State Transition 模型学习到的隐状态不仅可用于当前任务，还可迁移到新任务。显式的动力学模型允许**零样本策略迁移**——在新任务中，只需定义新的奖励函数，就可在已有的世界模型中进行规划，而无需重新学习世界的运行规律。

## 核心挑战

### 1. 视觉编码的信息损失

将高维像素压缩为低维隐状态不可避免地会丢失信息。关键问题是：**丢失的是「与决策无关的细节」还是「对决策至关重要的信息」？** 在 Atari 游戏中，这个问题的答案通常是前者——DreamerV3 的隐状态（~1024 维）足以捕捉所有对游戏策略至关重要的信息。但在需要精确视觉反馈的任务中（如机器人精细操作），隐状态的信息损失可能成为性能瓶颈。

### 2. 长期预测的误差累积

Imagination rollout 越长，累积误差越大。DreamerV3 通过将 imagination horizon 动态调整（短 horizon 更可信，长 horizon 更省样本但更不准确）来应对。TD-MPC2 则通过将 MCTS 搜索深度限制在中等范围（~5-10 步）来规避这一问题。

### 3. 世界模型与策略的共适应性

State Transition 模型通常与策略联合训练（尤其是在 Dreamer 系列中）。这引入了一个鸡和蛋的问题：好的世界模型需要好的数据（来自好的策略），而好的策略需要好的世界模型（用于规划）。DreamerV3 通过精心设计的训练循环（交替 env interaction、world model training、policy training）来处理这一问题。

## 子分类导航

- [Latent State-Space Modeling](./latent-state-space-modeling/) — Dreamer 系列、TWM、IRIS、STORM、TD-MPC2 等
- [Object-Centric Modeling](./object-centric-modeling/) — SlotFormer、slotSSM、SSWM 等
