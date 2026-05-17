# 笔记库架构重组与交叉链接 Spec

## Why
当前笔记库存在两大结构性问题：(1) 多个子目录存在不必要的双层嵌套（如 `others/theory/theory/`、`designs/other-architectures/other-architectures/`），增加路径深度的同时让目录结构难以理解；(2) 每篇笔记之间缺乏横向交叉引用链接，读者在浏览某篇具体论文笔记时无法快速跳转到相关的数据集、竞争方法或理论讨论，知识图谱的连通性仅停留在首页而未能渗透到每篇笔记中。

## What Changes
- **扁平化双层嵌套目录**：移除 `others/` 下 6 个子目录和 `designs/other-architectures/` 下 1 个子目录的多余嵌套层级，将文件上移一层
- **更新 VitePress 侧边栏配置**：同步所有受影响的路径引用
- **更新首页导航链接**：修复因目录变化产生的死链
- **为已有内容的笔记添加交叉引用区块**：在 `designs/` 和 `datasets/` 下所有非占位笔记末尾新增「相关笔记」章节，提供跨分类的内部跳转链接
- **为各层级 `index.md` 添加交叉引用**：在非占位索引页末尾添加相关分类的跳转链接

## Impact
- Affected specs: world-model-notes-library（重构已有结构）
- Affected code:
  - `docs/others/theory/`、`docs/others/survey/`、`docs/others/github-repo/`、`docs/others/workshop/`、`docs/others/world-models-for-downstream-tasks/`、`docs/others/other-perspectives-of-world-modeling/` — 文件上移一层
  - `docs/designs/other-architectures/` — 文件上移一层，合并 index.md
  - `docs/.vitepress/config.mts` — 更新侧边栏路径
  - `docs/index.md` — 更新导航链接
  - `docs/designs/**/*.md` — 数百篇笔记新增交叉引用区块
  - `docs/datasets/**/*.md` — 数百篇笔记新增交叉引用区块
  - 各层级 `index.md` — 新增交叉引用区块

## MODIFIED Requirements

### Requirement: 笔记库目录结构
系统 SHALL 在笔记库中使用扁平化的目录结构，每级分类目录直接包含其子文件，不得存在无意义的多余嵌套层级（如 `category/category/`）。

#### Scenario: 浏览 Others 分类
- **WHEN** 用户导航到 `others/theory/`
- **THEN** 直接看到该分类下的所有论文笔记文件和 index.md，而非再进入一层 `theory/` 子目录

#### Scenario: 浏览 Other Architectures 分类
- **WHEN** 用户导航到 `designs/other-architectures/`
- **THEN** 直接看到该分类下的 index.md 和所有论文笔记文件

### Requirement: VitePress 导航配置
系统 SHALL 确保 VitePress 侧边栏和导航配置中的所有路径与实际目录结构保持一致。

#### Scenario: 侧边栏链接正确性
- **WHEN** 用户点击侧边栏中的任何分类或论文链接
- **THEN** 均能正确跳转到目标页面，无 404 错误

### Requirement: 首页导航链接
系统 SHALL 确保首页「完整目录导航」表格和「交叉跳转」区块中的所有链接与实际路径一致。

#### Scenario: 首页链接可用性
- **WHEN** 用户在首页点击任意目录导航链接
- **THEN** 均能正确跳转到目标页面

## ADDED Requirements

### Requirement: 论文笔记交叉引用
每篇学习笔记（非占位符笔记）SHALL 在末尾包含「相关笔记」区块，提供以下类型的内部交叉引用链接：
1. 与本文相关或竞争的其他架构方法笔记
2. 本文所用或相关的数据集/Benchmark 笔记
3. 本文所属分类的综述索引页
4. Others 中的相关理论讨论、综述或下游应用笔记

交叉引用映射 SHALL 基于首页已有「交叉跳转」区块建立，并补充论文间的细粒度关联。

#### Scenario: 查看 Latent Diffusion 论文笔记的交叉引用
- **WHEN** 用户阅读某篇 Latent Diffusion 论文笔记（如 `cosmos.md`）
- **THEN** 在笔记末尾看到「## 相关笔记」区块，包含指向 Autonomous Driving 数据集、其他 Latent Diffusion 竞争方法、视频生成后训练方法、相关 Survey 等笔记的链接

#### Scenario: 查看 Autonomous Driving 数据集笔记的交叉引用
- **WHEN** 用户阅读某篇自动驾驶数据集笔记（如 `nuscenes.md`）
- **THEN** 在笔记末尾看到指向使用该数据集的 Latent Diffusion / Autoregressive Diffusion 世界模型笔记的链接

### Requirement: 分类索引页交叉引用
每个非占位分类索引页（index.md）SHALL 在末尾包含「相关分类」区块，提供跨领域的索引页跳转链接。

#### Scenario: 查看 JEPA 分类索引页的交叉引用
- **WHEN** 用户阅读 `designs/embedding-prediction/jepa/index.md`
- **THEN** 在末尾看到指向 General World Prediction 数据集、Physics & Causality 基准、Theory 理论讨论等索引页的链接

### Requirement: 占位笔记最低交叉引用
对于内容为占位符（`*此部分待补充。*`）的笔记，系统 SHALL 至少在笔记开头或末尾提供一个指向其所属分类索引页的链接，确保读者有基本导航能力。

#### Scenario: 查看视频生成占位笔记
- **WHEN** 用户打开一篇视频生成占位笔记
- **THEN** 至少看到一个指向 methods/ 或所属子分类 index.md 的链接
