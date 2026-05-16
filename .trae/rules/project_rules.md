# 世界模型学习笔记库 — 构建技能文档

## 项目概览

本项目是基于 [Awesome-Vision-World-Model](https://github.com/AIWorldLab/Awesome-Vision-World-Model) 仓库的系统性学习笔记库，使用 VitePress 构建为静态文档站点。

**独特定位**：帮你省 Token — 笔记内容经过精心提炼与压缩，在保留核心知识的同时大幅减少无关文字。

## 目录结构

```
c:\Users\93609\OneDrive\世界模型\
├── .github/workflows/deploy.yml    # GitHub Pages 自动部署
├── .trae/
│   ├── rules/project_rules.md      # 本技能文档
│   └── specs/world-model-notes-library/  # 项目 spec/tasks/checklist
├── docs/                           # VitePress 文档根目录
│   ├── .vitepress/
│   │   ├── config.mts              # 站点配置（侧边栏、导航、搜索）
│   │   ├── cache/                  # VitePress 构建缓存（gitignore）
│   │   └── dist/                   # 构建产物（gitignore）
│   ├── index.md                    # 站点首页
│   ├── designs/                    # 架构设计论文笔记
│   │   ├── index.md                # Designs 总览
│   │   ├── sequential-generation/
│   │   │   ├── index.md            # 二级分类综述
│   │   │   ├── visual-autoregressive-modeling/
│   │   │   │   ├── index.md        # 三级分类综述 + 论文列表
│   │   │   │   ├── genie.md        # 单篇论文笔记
│   │   │   │   └── ...
│   │   │   └── mllm-guided-multimodal-autoregressive-model/
│   │   ├── diffusion-based-generation/
│   │   │   ├── index.md
│   │   │   ├── latent-diffusion/
│   │   │   └── autoregressive-diffusion/
│   │   ├── embedding-prediction/
│   │   │   └── jepa/
│   │   ├── state-transition/
│   │   │   ├── latent-state-space-modeling/
│   │   │   └── object-centric-modeling/
│   │   └── other-architectures/
│   ├── datasets/                   # 数据集 & Benchmark 笔记
│   │   ├── index.md
│   │   ├── foundational-world-modeling/
│   │   │   ├── general-world-prediction-and-simulation/
│   │   │   └── physics-and-causality-benchmark/
│   │   └── domain-specific-world-modeling/
│   │       ├── autonomous-driving/
│   │       ├── embodied-ai-and-robotics/
│   │       └── interactive-environments-and-gaming/
│   └── others/                     # 其他分类
│       ├── index.md
│       ├── survey/
│       ├── github-repo/
│       ├── workshop/
│       ├── theory/
│       ├── world-models-for-downstream-tasks/
│       └── other-perspectives-of-world-modeling/
├── scripts/
│   ├── parse-readme.mjs            # 解析 awesome-readme.md → papers.json
│   └── generate-structure.mjs      # 根据 papers.json 生成目录和文件骨架
├── awesome-readme.md               # 原始 README（从 GitHub 拉取）
├── papers.json                     # 解析后的结构化论文元数据
├── package.json
└── package-lock.json
```

## 构建流程（6 个阶段）

### 阶段 1：初始化 VitePress 项目

```bash
cd "c:\Users\93609\OneDrive\世界模型"
$env:Path = "c:\Users\93609\.trae\binaries\node\versions\22.20.0;" + $env:Path
npm init -y
npm install -D vitepress markdown-it-mathjax3
```

package.json scripts：
```json
{
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

### 阶段 2：论文元数据采集

1. 从 GitHub 拉取 awesome-readme.md：
```
https://raw.githubusercontent.com/AIWorldLab/Awesome-Vision-World-Model/main/README.md
```

2. 运行解析脚本 `scripts/parse-readme.mjs`：
```bash
node scripts/parse-readme.mjs
```

该脚本解析 README 中的三级 Markdown 标题（#/##/###）和论文表格（Design | Paper | Link），提取每篇论文的：
- design（设计代号）
- paper（论文全称）
- arxiv（arXiv 链接）
- github（GitHub 仓库链接）
- website（项目主页）

输出 `papers.json`，结构为：
```json
[
  {
    "id": "designs",
    "name": "Designs",
    "subcategories": [
      {
        "id": "sequential-generation",
        "name": "Sequential Generation",
        "subsubcategories": [
          {
            "id": "visual-autoregressive-modeling",
            "name": "Visual Autoregressive Modeling",
            "papers": [
              {
                "design": "Genie",
                "paper": "Genie: Generative Interactive Environments",
                "arxiv": "https://arxiv.org/abs/2402.15391",
                "github": null,
                "website": "https://sites.google.com/view/genie-2024/home"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### 阶段 3：目录结构与配置生成

运行 `scripts/generate-structure.mjs`：
```bash
node scripts/generate-structure.mjs
```

该脚本：
- 根据 papers.json 创建完整的三级目录结构
- 为每篇论文生成占位符 markdown 文件（含 frontmatter 元数据）
- 生成 VitePress 侧边栏配置 docs/.vitepress/config.mts

**重要**：脚本生成的 config.mts 中 `base: '/'`，如需部署到 GitHub Pages 子路径，手动改为 `base: '/world-model-notes/'`。

### 阶段 4：编写分类综述笔记

每个层级的 `index.md` 需要写实质性综述内容，而非占位符。

**一级分类综述**（如 `docs/designs/index.md`）：
- 该分类的核心问题定义
- 四大架构范式概览（比较表格）
- 设计哲学分析

**二级分类综述**（如 `docs/designs/sequential-generation/index.md`）：
- 范式本质与历史脉络
- 子范式分野
- 核心技术挑战与瓶颈分析
- 方法对比表格

**三级分类综述**（如 `docs/designs/sequential-generation/visual-autoregressive-modeling/index.md`）：
- 子类技术演进
- 代表工作概览
- 论文列表（带简要描述）

**数据集 overview 页面**（如 `docs/datasets/domain-specific-world-modeling/autonomous-driving/index.md`）：
- 该领域数据集全景
- 评价体系与指标
- 与世界模型的关系

### 阶段 5：单篇论文笔记填充

这是工作量最大的阶段。为每篇论文的 markdown 文件补充实质性内容。

**Design 论文笔记模板**：

```markdown
---
title: "论文全称"
design: "Design代号"
arxiv: https://arxiv.org/abs/XXXX.XXXXX
github: https://github.com/xxx/xxx
---

# Design代号: 论文全称

::: info 论文信息
- **Design**: Design代号
- **论文全称**: 论文全称
- **arXiv**: [link](link)
- **GitHub**: [link](link)
- **Website**: [link](link)
:::

## 核心思想

[2-3 段段落总结论文的核心贡献与设计理念]

## 技术架构

**Vision Encoding（视觉编码）**：[视觉输入如何处理、tokenization 策略]

**Knowledge Learning（知识学习）**：[模型如何学习世界知识、训练范式]

**Controllable Simulation（可控模拟）**：[模型如何支持交互控制/条件生成]

## 代码实现要点

[若 GitHub 存在：关键安装步骤、推理/训练入口。若不存在：暂无开源代码。]

## 关键创新点

1. [创新点 1]
2. [创新点 2]
...

## 代表性结果

[关键实验结果/基准性能/应用案例]
```

**数据集/Benchmark 笔记模板**：

```markdown
---
title: "数据集/基准全称"
design: "名称"
arxiv: https://arxiv.org/abs/XXXX.XXXXX
github: https://github.com/xxx/xxx
---

# 名称: 数据集全称

::: info 论文信息
[元信息 block]
:::

## 数据集/基准信息

## 简介

[2-3 段：是什么、规模、领域、为什么对世界模型重要]

## 关键特征

- **数据规模**: [规模数据]
- **数据模态**: [所包含的数据类型]
- **主要指标**: [评测指标]
- **领域**: [应用领域]

## 与世界模型的关系

[1-2 段：该数据集/基准如何用于世界模型训练/评测]

## 代表性用途

[使用该数据集/基准的重要论文]
```

**Others 论文笔记**（Survey/Workshop/Theory 等）：

对于非设计论文（综述、研讨会、理论论文），保持简洁：
```markdown
## 论文信息
[元信息]

### 核心思想

[1-2 段基于标题和 arXiv 摘要的总结]
```

**内容来源**：
- arXiv 摘要 → 使用 WebFetch 获取 `https://arxiv.org/abs/XXXX.XXXXX`
- GitHub README → 使用 WebFetch 获取 `https://github.com/xxx/xxx`
- 若无可获取源，基于论文标题和研究方向常识撰写

**批量填充策略**：
- 使用 Task 工具派发多个并行 agent，每个 agent 负责一个子分类
- 将 datasets 按 domain 拆分到多个 agent 并行处理

### 阶段 6：构建与验证

```bash
cd "c:\Users\93609\OneDrive\世界模型"
$env:Path = "c:\Users\93609\.trae\binaries\node\versions\22.20.0;" + $env:Path
npm run docs:build
```

**验证清单**：
- [ ] `npm run docs:build` 构建成功（exit code 0）
- [ ] grep `此部分待补充` 全仓零残留
- [ ] 所有 index.md 有实质性内容（非仅占位符）
- [ ] 侧边栏导航三级皆可点击展开

## 如何新增论文

1. 在 `papers.json` 对应三级分类的 papers 数组中添加条目
2. 在 `docs/{category}/{subcategory}/{subsubcategory}/` 下创建 `{design-slug}.md`
3. 按阶段 5 模板填充内容
4. 更新对应层级的 index.md（确保论文列表包含新条目）
5. 运行 `npm run docs:build` 验证

## 部署

GitHub Actions 自动部署已配置在 `.github/workflows/deploy.yml`：
- 推送到 main 分支触发自动构建
- 部署到 GitHub Pages
- VitePress config 中 `base: '/world-model-notes/'` 匹配仓库名

## 关键技术约定

1. **笔记语言**：全部使用中文
2. **VWM 三维分析框架**：所有设计论文必须从 Vision Encoding、Knowledge Learning、Controllable Simulation 三个维度分析
3. **数学公式**：使用 `$...$` 行内和 `$$...$$` 行间 LaTeX，通过 markdown-it-mathjax3 渲染
4. **VitePress 容器**：使用 `::: tip`、`::: info`、`::: warning` 等自定义容器增强可读性
5. **文件名规范**：使用论文 design 代号的小写 slug 作为文件名（如 cosmos.md, genie.md）
6. **链接格式**：分类间使用相对路径 `./subcategory/`，论文间不使用互相链接
7. **不写 Markdown 注释**：笔记内容不使用 `<!-- -->` 注释
