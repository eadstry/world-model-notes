# Tasks

- [x] Task 1: 重写 Cosmos 平台全景笔记（cosmos.md）
  - [x] 更新 frontmatter 元信息（arxiv 链接指向 2501.03575，GitHub 指向 nvidia-cosmos）
  - [x] 编写平台定位与设计哲学章节（Physical AI、数字孪生、开放平台）
  - [x] 编写六大组件概览（Predict2.5 / Transfer2.5 / Reason2 / Curator / Dataset Search / Evaluator），含功能说明表格与官方仓库/GitHub 链接
  - [x] 编写三大应用场景映射（机器人 / 自动驾驶 / 视频分析），引用官方 Cookbook 和 Blueprint 示例

- [x] Task 2: 编写 Cosmos 技术原理深度分析章节（cosmos.md 内）
  - [x] 2.1 Rectified Flow 生成范式：Flow Matching vs Diffusion 对比、Rectified Flow 公式 $dz_t = v(z_t, t)dt$、UniPC solver 原理、DMD2 蒸馏数学推导
  - [x] 2.2 视频分词器体系：CV8×8×8、DV8×16×16 的时空压缩比、连续 vs 离散 token 对比表
  - [x] 2.3 MultiControlNet 架构（Transfer2.5）：自适应时空控制图、JSON controlnet_specs 配置机制、多模态条件融合
  - [x] 2.4 Cosmos Reason VLM：物理常识推理能力、多帧视频理解、Cosmos RL 后训练框架

- [x] Task 3: 编写完整代码使用流程（cosmos.md 内）
  - [x] 3.1 环境搭建：Python 3.10-3.13、CUDA 12.x/13.x、pip install 和 uv 方式、Docker 部署方案
  - [x] 3.2 模型下载：HuggingFace 模型仓库列表（2B/14B、预训练/后训练/蒸馏）、hf_transfer 加速
  - [x] 3.3 Cosmos-Predict2.5 推理命令：Text2World、Image2World、Video2World 完整命令示例与参数说明、Diffusers pipeline 集成方式
  - [x] 3.4 Cosmos-Transfer2.5 推理命令：基础单模态推理、JSON controlnet_specs 多控制配置、Auto/Multiview 自动驾驶推理、Robot Multiview Control 推理
  - [x] 3.5 后训练微调：LoRA 微调命令与参数说明、Video2World 后训练流程（含 Cosmos-NeMo-Assets 数据集）、DreamGen Bench 使用方式
  - [x] 3.6 模型蒸馏：DMD2 蒸馏完整命令、Edge Distilled 推理实测
  - [x] 3.7 数据管线工具：Cosmos Curator 命令行示例、Dataset Search 查询示例

- [x] Task 4: 更新 cosmos-transfer1.md 笔记
  - [x] 在笔记末尾新增"Transfer2.5 升级与对比"章节
  - [x] 列出 Transfer1 → Transfer2.5 的关键升级点（2B 轻量模型、Edge蒸馏、JSON 配置控制、Auto/Multiview、Robot Multiview Control、滑动窗口生成）
  - [x] 给出 Transfer2.5 的示例 controlnet_specs JSON 配置

- [x] Task 5: 构建验证
  - [x] 运行 `npm run docs:build` 确认构建成功（exit code 0）
  - [x] 确认侧边栏导航三级可正常展开

# Task Dependencies
- Task 2 依赖 Task 1（需要在平台全景基础上展开原理）
- Task 3 可与 Task 2 并行（代码流程章节相对独立）
- Task 4 独立（仅操作 cosmos-transfer1.md）
- Task 5 依赖 Task 1-4
