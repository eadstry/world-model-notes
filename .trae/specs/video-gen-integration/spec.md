# 视频生成后训练笔记库集成 Spec

## Why
当前笔记库仅覆盖视觉世界模型（World Models）领域，用户需要扩展至视频生成后训练与对齐（Video Generation Post-Training & Alignment）领域。基于 [Awesome-Video-Generation-Post-Training](https://github.com/CyL97/Awesome-Video-Generation-Post-Training) 综述仓库，需要将视频生成后训练领域的论文、代码库、数据集和评测基准整合入笔记库，同时重新组织笔记库的顶层结构以清晰容纳两大领域。

## What Changes
- 新增 `video-generation/` 顶级分类，包含方法论文（Methods）、数据集（Datasets）、评测基准（Benchmarks）三个子分类
- 解析 Awesome-Video-Generation-Post-Training 仓库的 README.md、conference.md、arxiv.md，提取约 160 篇论文/数据集/基准的元数据
- 为每篇论文生成学习笔记（元信息、核心思想、技术架构、代码实现要点）
- 为每个数据集/基准生成专题笔记
- 更新站点首页为统一门户（同时展示世界模型 + 视频生成两大领域）
- 更新 VitePress 配置（导航栏、侧边栏）以容纳新分类
- 现有 world model 内容（designs/、datasets/、others/）保持不变，仅首页和导航进行重组

## Impact
- Affected specs: world-model-notes-library（扩展现有规范）
- Affected code: 
  - `docs/index.md` — 首页重构为统一门户
  - `docs/.vitepress/config.mts` — 新增导航和侧边栏
  - 新增 `docs/video-generation/` 目录树
  - 新增 `scripts/parse-video-gen.mjs` — 视频生成解析脚本
  - 新增 `scripts/generate-video-gen-structure.mjs` — 目录生成脚本
  - 现有所有文件路径不变，零破坏性变更

## ADDED Requirements

### Requirement: 视频生成元数据采集
系统 SHALL 从 Awesome-Video-Generation-Post-Training 仓库的 README.md、conference.md、arxiv.md 中解析所有条目（数据集、基准、会议论文、arXiv 预印本），提取标题、年份、arXiv 链接、GitHub 仓库地址、项目主页、数据集链接，并按分类层级组织。

#### Scenario: 解析视频生成论文列表
- **WHEN** 运行视频生成元数据采集脚本
- **THEN** 生成结构化的 JSON 数据文件 `video-gen-papers.json`，包含所有条目的分类路径、名称、链接信息

### Requirement: 视频生成目录结构与导航
系统 SHALL 在 `docs/video-generation/` 下创建三级目录结构：
- `methods/` — 方法论文（按来源分 conference-papers/ 和 arxiv-papers/）
- `datasets/` — 视频生成数据集
- `benchmarks/` — 视频生成评测基准

VitePress 侧边栏 SHALL 包含 video-generation 分类的完整导航。

#### Scenario: 浏览视频生成分类
- **WHEN** 用户导航到 Video Generation 分类
- **THEN** 左侧侧边栏展示 Methods / Datasets / Benchmarks 子分类，点击可展开

### Requirement: 视频生成方法论文笔记
每篇方法论文笔记 SHALL 包含：标题与元信息（arXiv 链接、GitHub 链接、项目主页）、论文核心思想摘要、技术方法分析（后训练方法类型：SFT / 自训练与蒸馏 / 偏好优化 / 推理时对齐）、关键创新点、代表性结果。

#### Scenario: 查看某篇视频生成论文笔记
- **WHEN** 用户点击某篇论文
- **THEN** 展示该论文的完整学习笔记页面

### Requirement: 视频生成数据集与基准笔记
每个数据集/基准 SHALL 包含：名称、来源会议/年份、数据规模、数据模态、主要指标、领域、与世界模型/视频生成的关系、代表性用途。

#### Scenario: 浏览视频生成数据集
- **WHEN** 用户导航到 Video Generation → Datasets
- **THEN** 展示数据集专题笔记页面

### Requirement: 统一首页重构
站点首页 SHALL 重构为统一门户，同时展示"世界模型"和"视频生成后训练"两大领域，包含领域简介、核心分类入口、快速导航。

#### Scenario: 打开站点首页
- **WHEN** 用户访问站点首页
- **THEN** 看到两大领域入口，可分别进入世界模型或视频生成的分类浏览

### Requirement: 分类综述笔记
video-generation/ 的每个层级（一级 methods/、二级 conference-papers/ 和 arxiv-papers/）SHALL 包含该分类的综述笔记，概述视频生成后训练四大方法分类（SFT、自训练与蒸馏、偏好优化、推理时对齐）及其技术演进。

#### Scenario: 查看视频生成分类综述
- **WHEN** 用户点击 Video Generation → Methods
- **THEN** 展示后训练四大方法分类综述，包含方法对比和技术演进说明

## MODIFIED Requirements

### Requirement: VitePress 文档站点导航
系统 SHALL 在顶部导航栏包含：首页、世界模型（Designs / Datasets / Others）、视频生成（Methods / Datasets / Benchmarks）。侧边栏按当前浏览的分类动态切换。

#### Scenario: 导航栏切换领域
- **WHEN** 用户点击导航栏中的"Video Generation"
- **THEN** 侧边栏切换为视频生成分类目录，页面跳转到 video-generation/ 首页
