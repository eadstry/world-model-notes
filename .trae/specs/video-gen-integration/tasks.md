# Tasks

- [x] Task 1: 视频生成元数据采集 — 解析 Awesome-Video-Generation-Post-Training 仓库
  - [x] 从 GitHub raw 获取 README.md、conference.md、arxiv.md 内容
  - [x] 编写 `scripts/parse-video-gen.mjs` 解析 Markdown 表格
  - [x] 提取数据集（Datesets 表）、基准（Benchmarks 表）、会议论文（conference.md）、arXiv 论文（arxiv.md）
  - [x] 提取每条目的：名称、年份、arXiv 链接、GitHub 链接、Website 链接、Dataset 链接、会议来源标签
  - [x] 输出 `video-gen-papers.json` 结构化数据（508 条记录）

- [ ] Task 2: 目录结构与侧边栏配置生成
  - [ ] 编写 `scripts/generate-video-gen-structure.mjs` 根据 video-gen-papers.json 生成目录
  - [ ] 创建 `docs/video-generation/` 目录及子目录（methods/conference-papers/、methods/arxiv-papers/、datasets/、benchmarks/）
  - [ ] 为每条目生成占位符 markdown 文件（含 frontmatter 元数据）
  - [ ] 生成 VitePress 侧边栏配置代码片段

- [ ] Task 3: VitePress 配置更新与统一首页重构
  - [ ] 更新 `docs/.vitepress/config.mts`：添加 video-generation 导航项和侧边栏
  - [ ] 重构 `docs/index.md` 为统一门户，展示"世界模型"和"视频生成后训练"两大领域
  - [ ] 更新站点 title/description 反映扩展后的范围

- [ ] Task 4: 视频生成分类综述笔记编写
  - [ ] 编写 `docs/video-generation/index.md`（一级综述：概述后训练四大方法分类）
  - [ ] 编写 `docs/video-generation/methods/index.md`（方法论文综述）
  - [ ] 编写 `docs/video-generation/methods/conference-papers/index.md`（会议论文综述）
  - [ ] 编写 `docs/video-generation/methods/arxiv-papers/index.md`（arXiv 论文综述）
  - [ ] 编写 `docs/video-generation/datasets/index.md`（数据集综述）
  - [ ] 编写 `docs/video-generation/benchmarks/index.md`（基准综述）

- [ ] Task 5: 视频生成数据集笔记填充（~20 篇）
  - [ ] 为 ChronoMagic-Pro、SafeSora、TIP-I2V 等数据集编写专题笔记
  - [ ] 每篇包含：数据集信息、简介、关键特征、与世界模型关系、代表性用途

- [ ] Task 6: 视频生成基准笔记填充（~23 篇）
  - [ ] 为 FETV、StoryBench、EvalCrafter、VBench 等基准编写专题笔记
  - [ ] 每篇包含：基准信息、简介、评测维度、代表性用途

- [ ] Task 7: 视频生成方法论文笔记填充（~115 篇）
  - [ ] 对 conference-papers 分类下论文生成笔记（~55 篇），按并行 agent 分批处理
  - [ ] 对 arxiv-papers 分类下论文生成笔记（~60 篇），按并行 agent 分批处理
  - [ ] 每篇笔记包含：元信息、核心思想、技术方法分析、代码实现要点、关键创新点、代表性结果

- [ ] Task 8: 构建验证与清理
  - [ ] 运行 `npm run docs:build` 确保构建成功（exit code 0）
  - [ ] 确认全仓无占位符残留
  - [ ] 验证侧边栏导航三级皆可点击展开
  - [ ] 验证所有链接无死链

# Task Dependencies
- Task 2 依赖 Task 1（需要 video-gen-papers.json）
- Task 4 依赖 Task 2（需要目录结构存在）
- Task 5、6 依赖 Task 2
- Task 7 依赖 Task 2
- Task 3 可与 Task 2 并行（需要知道目录结构即可）
- Task 4、5、6、7 可并行执行
- Task 8 依赖 Task 1-7 全部完成
