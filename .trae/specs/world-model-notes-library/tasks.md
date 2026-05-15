# Tasks

- [x] Task 1: 项目初始化 - 搭建 VitePress 文档站点骨架
  - [x] 初始化 Node.js 项目，安装 VitePress 依赖
  - [x] 创建 VitePress 配置文件（含搜索、侧边栏、导航栏配置）
  - [x] 创建文档站点首页 index.md

- [x] Task 2: 论文元数据采集 - 解析 Awesome-Vision-World-Model README
  - [x] 编写 Node.js 脚本，从 GitHub raw 链接获取 README.md 内容
  - [x] 解析 Markdown 表格，提取论文名称、设计代号、arXiv 链接、GitHub 链接、项目主页
  - [x] 按三级分类层级组织数据（Designs → Sequential Generation → Visual Autoregressive Modeling → 论文）
  - [x] 输出结构化 JSON 数据文件 papers.json（498篇论文）

- [x] Task 3: 目录结构与导航配置生成
  - [x] 根据 papers.json 生成 VitePress 侧边栏配置 config.mts
  - [x] 按三级分类创建目录结构 docs/designs/sequential-generation/visual-autoregressive-modeling/...
  - [x] 确保所有导航链接正确

- [x] Task 4: 分类综述笔记编写
  - [x] 编写一级分类综述笔记（Designs、Datasets & Benchmarks、Others 概览页）
  - [x] 编写二级分类综述笔记（各架构家族概述、设计理念、代表工作对比）
  - [x] 编写三级分类综述笔记（子类方法对比分析、技术演进脉络）

- [x] Task 5: 单篇论文学习笔记批量生成
  - [x] 笔记模板包含：元信息、核心思想、三维技术架构分析、代码实现要点
  - [x] 对 Visual Autoregressive Modeling 分类下论文生成笔记（29篇）
  - [x] 对 MLLM-guided Multimodal AR 分类下论文生成笔记（22篇）
  - [x] 对 Latent Diffusion 分类下论文生成笔记（72篇）
  - [x] 对 Autoregressive Diffusion 分类下论文生成笔记（52篇）
  - [x] 对 JEPA 分类下论文生成笔记（19篇）
  - [x] 对 Latent State-Space Modeling 分类下论文生成笔记（45篇）
  - [x] 对 Object-Centric Modeling 分类下论文生成笔记（17篇）
  - [x] 对 Other Architectures 分类下论文生成笔记（14篇）

- [x] Task 6: 数据集与 Benchmarks 专题笔记
  - [x] 解析 README 中 Datasets & Benchmarks 部分
  - [x] 为各子分类（Foundational World Modeling、Domain-specific）编写专题笔记（113篇）
  - [x] 包含数据集概述、评价指标、应用场景

- [x] Task 7: Others 分类笔记
  - [x] 为 Survey、GitHub Repo、Workshop、Theory 等子分类编写笔记（115篇）
  - [x] 编写 Others 各子分类 overview 页面

- [x] Task 8: 站点优化与验证
  - [x] 配置 VitePress 全文搜索
  - [x] `npm run docs:build` 验证构建成功（exit code 0, 16.23s）
  - [x] 无占位符残留（grep "此部分待补充" 返回 0 matches）

# Task Dependencies
- Task 3 依赖 Task 2（需要 papers.json 才能生成目录）
- Task 5 依赖 Task 2 和 Task 3（需要论文数据和目录结构）
- Task 6 依赖 Task 2
- Task 8 依赖 Task 3-7
- Task 1、2 可并行执行
- Task 4、5、6、7 可并行执行
