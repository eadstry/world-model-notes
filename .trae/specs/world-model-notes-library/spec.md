# 世界模型学习笔记库 Spec

## Why
Awesome-Vision-World-Model 仓库收录了大量视觉世界模型论文及其代码链接，但仅以列表形式呈现，缺乏结构化的学习笔记。需要将每篇论文的核心思想、技术架构与代码实现相结合，构建一个可检索、可浏览的世界模型学习笔记库，帮助研究者快速深入理解各模型的设计思路与实现细节。

## What Changes
- 基于 Awesome-Vision-World-Model 仓库的论文分类体系，构建结构化学习笔记库
- 为每篇论文生成学习笔记，包含：论文核心思想、技术架构（三大组件分析）、代码实现要点
- 按照综述的四大架构家族（Sequential Generation / Diffusion-based / Embedding Prediction / State Transition）组织笔记
- 提供数据集与 Benchmarks 专题笔记
- 构建可导航的静态文档站点（VitePress），支持分类浏览与关键词检索

## Impact
- Affected specs: 无（全新项目）
- Affected code: 工作目录 `c:\Users\93609\OneDrive\世界模型` 下新建完整项目

## ADDED Requirements

### Requirement: 论文元数据采集
系统 SHALL 从 Awesome-Vision-World-Model 的 README.md 中解析所有论文条目，提取论文名称、设计代号、arXiv ID、GitHub 仓库地址、项目主页链接，并按分类层级组织。

#### Scenario: 解析论文列表
- **WHEN** 运行元数据采集脚本
- **THEN** 生成结构化的 JSON 数据文件，包含所有论文的分类路径、名称、链接信息

### Requirement: 结构化笔记目录
系统 SHALL 按照综述的分类体系生成多层级目录结构：一级分类（Designs / Datasets & Benchmarks / Others）→ 二级分类（Sequential Generation 等）→ 三级分类（Visual Autoregressive Modeling 等）→ 单篇论文笔记。

#### Scenario: 浏览笔记目录
- **WHEN** 用户打开文档站点
- **THEN** 左侧导航栏展示完整的三级分类目录树，点击可展开/折叠

### Requirement: 单篇论文学习笔记
每篇论文笔记 SHALL 包含以下结构化内容：标题与元信息（arXiv 链接、GitHub 链接、项目主页）、论文核心思想摘要、技术架构分析（Vision Encoding / Knowledge Learning / Controllable Simulation 三维度）、代码实现要点（若 GitHub 仓库存在）、关键图示或公式引用。

#### Scenario: 查看某篇论文笔记
- **WHEN** 用户点击某篇论文
- **THEN** 展示该论文的完整学习笔记页面，包含所有结构化内容模块

### Requirement: 分类综述笔记
每个分类层级（一级/二级/三级）SHALL 包含该分类的综述笔记，概述该类方法的设计理念、代表性工作对比、技术演进脉络。

#### Scenario: 查看分类综述
- **WHEN** 用户点击某个分类节点
- **THEN** 展示该分类的综述笔记，包含方法对比表格和技术演进说明

### Requirement: 全文搜索
系统 SHALL 支持对论文名称、设计代号、核心关键词进行全文搜索。

#### Scenario: 搜索论文
- **WHEN** 用户在搜索框输入关键词
- **THEN** 返回匹配的论文笔记列表，点击可跳转到对应页面

### Requirement: 数据集与 Benchmarks 专题
系统 SHALL 为数据集与 Benchmarks 分类生成专题笔记，包含数据集概述、评价指标说明、典型应用场景。

#### Scenario: 浏览数据集专题
- **WHEN** 用户导航到 Datasets & Benchmarks 分类
- **THEN** 展示数据集和 Benchmark 的专题笔记页面

### Requirement: VitePress 文档站点
系统 SHALL 使用 VitePress 构建文档站点，自动生成侧边栏导航，支持暗色模式，响应式布局。

#### Scenario: 启动文档站点
- **WHEN** 运行 `npm run docs:dev`
- **THEN** 本地开发服务器启动，浏览器可访问文档站点
