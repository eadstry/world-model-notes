# Tasks

- [x] Task 1: 扁平化 Others 分类的双层嵌套目录
  - [x] 将 `docs/others/theory/theory/` 下所有文件上移到 `docs/others/theory/`，删除多余子目录
  - [x] 将 `docs/others/survey/survey/` 下所有文件上移到 `docs/others/survey/`，删除多余子目录
  - [x] 将 `docs/others/github-repo/github-repo/` 下所有文件上移到 `docs/others/github-repo/`，删除多余子目录
  - [x] 将 `docs/others/workshop/workshop/` 下所有文件上移到 `docs/others/workshop/`，删除多余子目录
  - [x] 将 `docs/others/world-models-for-downstream-tasks/world-models-for-downstream-tasks/` 下所有文件上移到 `docs/others/world-models-for-downstream-tasks/`，删除多余子目录
  - [x] 将 `docs/others/other-perspectives-of-world-modeling/other-perspectives-of-world-modeling/` 下所有文件上移到 `docs/others/other-perspectives-of-world-modeling/`，删除多余子目录

- [x] Task 2: 扁平化 Designs 分类的双层嵌套目录
  - [x] 将 `docs/designs/other-architectures/other-architectures/` 下所有文件上移到 `docs/designs/other-architectures/`，合并 index.md 内容，删除多余子目录

- [x] Task 3: 更新 VitePress 侧边栏配置
  - [x] 修改 `docs/.vitepress/config.mts` 中 Others 分类所有侧边栏路径（去掉多余嵌套层级）
  - [x] 修改 `docs/.vitepress/config.mts` 中 other-architectures 的侧边栏路径

- [x] Task 4: 更新首页导航链接
  - [x] 修改 `docs/index.md` 中「Others — 周边资源」表格的所有链接路径
  - [x] 修改 `docs/index.md` 中「Other Architectures」的链接路径
  - [x] 修改 `docs/index.md` 中「交叉跳转」区块所有受影响的链接路径

- [x] Task 5: 为 World Model 论文笔记添加交叉引用区块
  - [x] 为 `designs/sequential-generation/` 下所有非占位笔记添加「相关笔记」区块
  - [x] 为 `designs/diffusion-based-generation/` 下所有非占位笔记添加「相关笔记」区块
  - [x] 为 `designs/embedding-prediction/` 下所有非占位笔记添加「相关笔记」区块
  - [x] 为 `designs/state-transition/` 下所有非占位笔记添加「相关笔记」区块
  - [x] 为 `designs/other-architectures/` 下所有非占位笔记添加「相关笔记」区块

- [x] Task 6: 为 Dataset/Benchmark 笔记添加交叉引用区块
  - [x] 为 `datasets/foundational-world-modeling/` 下所有非占位笔记添加「相关笔记」区块
  - [x] 为 `datasets/domain-specific-world-modeling/` 下所有非占位笔记添加「相关笔记」区块

- [x] Task 7: 为 Others 分类笔记添加交叉引用区块
  - [x] 为 `others/` 下所有非占位笔记添加「相关笔记」区块

- [x] Task 8: 为各层级 index.md 添加交叉引用区块
  - [x] 为 designs/ 各层级非占位 index.md 添加「相关分类」区块
  - [x] 为 datasets/ 各层级非占位 index.md 添加「相关分类」区块
  - [x] 为 others/ 各层级非占位 index.md 添加「相关分类」区块

- [x] Task 9: 为视频生成占位笔记添加最低交叉引用
  - [x] 为 `video-generation/methods/` 下占位笔记添加所属分类链接
  - [x] 为 `video-generation/datasets/` 下占位笔记添加所属分类链接
  - [x] 为 `video-generation/benchmarks/` 下占位笔记添加所属分类链接

- [ ] Task 10: 构建验证
  - [ ] 运行 `npm run docs:build` 确保构建无报错 — ⚠️ 当前环境无 Node.js/npm，无法执行构建，已手动验证文件和链接
  - [ ] 检查所有内部链接无死链（使用 VitePress dead links 检测或手动抽查）

# Task Dependencies
- Task 3 依赖 Task 1 和 Task 2（目录结构变更后才能更新路径）
- Task 4 依赖 Task 1 和 Task 2（目录结构变更后才能更新链接）
- Task 8 依赖 Task 1 和 Task 2（index.md 路径变更后才能添加交叉引用）
- Task 5、6、7、9 相互独立，可并行执行
- Task 10 依赖 Task 1-9 全部完成
