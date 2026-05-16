import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DOCS = join(ROOT, 'docs');
const BASE = join(DOCS, 'video-generation');

const data = JSON.parse(readFileSync(join(ROOT, 'video-gen-papers.json'), 'utf-8'));

let totalDirs = 0;
let totalFiles = 0;

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
}

function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

function yamlQuote(str) {
  return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function writeIfNotExists(filePath, content) {
  if (existsSync(filePath)) {
    console.log(`  ⏭️  SKIP: ${filePath} (already exists)`);
    return false;
  }
  writeFileSync(filePath, content, 'utf-8');
  return true;
}

// ─── Top-level index ─────────────────────────────────────────────

function generateTopIndex() {
  ensureDir(BASE);
  totalDirs++;

  const content = `---
title: "视频生成后训练与对齐"
---

# 视频生成后训练与对齐

::: tip 综述
本分类基于综述论文 **"Video Generation Models: A Survey of Post-Training and Alignment"** (Li et al., 2026)，系统梳理视频生成模型的后训练与对齐技术，涵盖监督微调（SFT）、自训练与蒸馏、基于偏好的优化（Preference Optimization）、推理时对齐（Inference-Time Alignment）四大方法范式。
:::

## 后训练方法分类

视频生成后训练的核心目标是将预训练的视频生成模型与人类意图、物理约束和部署需求对齐。主要分为四大类：

1. **监督微调（Supervised Fine-Tuning）** — 使用高质量标注数据对预训练模型进行领域适配
2. **自训练与蒸馏（Self-Training & Distillation）** — 利用模型自身或教师模型生成数据进行迭代改进
3. **偏好优化（Preference Optimization）** — 基于人类偏好反馈（RLHF / DPO 等）优化生成质量
4. **推理时对齐（Inference-Time Alignment）** — 无需训练，在推理阶段通过引导/约束实现对齐

## 子分类导航

- **[Methods](./methods/)** — 方法论文，按来源分为会议论文和 arXiv 预印本
- **[Datasets](./datasets/)** — 视频生成后训练相关数据集
- **[Benchmarks](./benchmarks/)** — 视频生成评测基准
`;

  if (writeIfNotExists(join(BASE, 'index.md'), content)) {
    console.log('  📄 video-generation/index.md');
    totalFiles++;
  }
}

// ─── Methods index ───────────────────────────────────────────────

function generateMethodsIndex() {
  const dir = join(BASE, 'methods');
  ensureDir(dir);
  totalDirs++;

  const content = `---
title: "方法综述"
---

# 视频生成后训练方法

## 方法分类

### 1. 监督微调 (SFT)
利用高质量标注数据对预训练视频生成模型进行细粒度调整。典型应用包括：主体驱动生成、运动控制、相机控制、视频编辑等。

### 2. 自训练与蒸馏
通过模型生成的合成数据进行自我改进（Self-Training），或将大模型/多步模型的知识蒸馏到小模型/少步模型（Distillation），以提升效率和质量。

### 3. 偏好优化
将人类偏好信号引入训练过程，包括：
- **RLHF / RLAIF**：基于强化学习的人类/AI 反馈
- **DPO（Direct Preference Optimization）**：直接偏好优化，无需显式奖励模型
- **GRPO（Group Relative Policy Optimization）**：群体相对策略优化

### 4. 推理时对齐
不更新模型参数，在推理阶段通过引导信号、约束条件、或 external memory 实现可控生成。

## 子分类

- [Conference Papers](./conference-papers/) — 已被顶级会议/期刊录用的论文
- [arXiv Papers](./arxiv-papers/) — arXiv 预印本论文
`;

  if (writeIfNotExists(join(dir, 'index.md'), content)) {
    console.log('  📄 video-generation/methods/index.md');
    totalFiles++;
  }
}

// ─── Methods subsubcategory indexes ──────────────────────────────

function generateConferencePapersIndex() {
  const dir = join(BASE, 'methods', 'conference-papers');
  ensureDir(dir);
  totalDirs++;

  const content = `---
title: "会议论文"
---

# 会议论文

收录已被顶级会议和期刊录用的视频生成后训练方法论文，涵盖 ICLR、NeurIPS、CVPR、ICCV、AAAI、ACM MM、WACV 等。
`;

  if (writeIfNotExists(join(dir, 'index.md'), content)) {
    console.log('  📄 video-generation/methods/conference-papers/index.md');
    totalFiles++;
  }
}

function generateArxivPapersIndex() {
  const dir = join(BASE, 'methods', 'arxiv-papers');
  ensureDir(dir);
  totalDirs++;

  const content = `---
title: "arXiv 论文"
---

# arXiv 论文

收录最新发布的视频生成后训练 arXiv 预印本论文，反映该领域的最新研究动态。
`;

  if (writeIfNotExists(join(dir, 'index.md'), content)) {
    console.log('  📄 video-generation/methods/arxiv-papers/index.md');
    totalFiles++;
  }
}

// ─── Datasets index ──────────────────────────────────────────────

function generateDatasetsIndex() {
  const dir = join(BASE, 'datasets');
  ensureDir(dir);
  totalDirs++;

  const content = `---
title: "数据集"
---

# 视频生成后训练数据集

收录视频生成后训练与对齐研究中使用的数据集。这些数据集覆盖多种应用场景，包括物理仿真、人机交互、烹饪视频、安全对齐、第一人称视角等。
`;

  if (writeIfNotExists(join(dir, 'index.md'), content)) {
    console.log('  📄 video-generation/datasets/index.md');
    totalFiles++;
  }
}

// ─── Benchmarks index ────────────────────────────────────────────

function generateBenchmarksIndex() {
  const dir = join(BASE, 'benchmarks');
  ensureDir(dir);
  totalDirs++;

  const content = `---
title: "评测基准"
---

# 视频生成评测基准

收录视频生成后训练与对齐研究中使用和提出的评测基准，覆盖文本-视频对齐、物理一致性、安全性、故事生成、视频编辑等多个评测维度。
`;

  if (writeIfNotExists(join(dir, 'index.md'), content)) {
    console.log('  📄 video-generation/benchmarks/index.md');
    totalFiles++;
  }
}

// ─── Paper stub ──────────────────────────────────────────────────

function generatePaperStub(dirPath, entry) {
  const filename = slugify(entry.paper);
  const filePath = join(dirPath, `${filename}.md`);

  const frontmatter = [
    '---',
    `title: "${entry.paper.replace(/"/g, '\\"')}"`,
  ];
  if (entry.arxiv) frontmatter.push(`arxiv: ${entry.arxiv}`);
  if (entry.github) frontmatter.push(`github: ${entry.github}`);
  if (entry.website) frontmatter.push(`website: ${entry.website}`);
  if (entry.venue) frontmatter.push(`venue: ${entry.venue}`);
  if (entry.year) frontmatter.push(`year: ${entry.year}`);
  frontmatter.push('---');
  frontmatter.push('');

  const body = [
    `# ${entry.paper}`,
    '',
    '::: info 论文信息',
  ];
  if (entry.venue) body.push(`- **Venue**: ${entry.venue} (${entry.year})`);
  if (entry.arxiv) body.push(`- **arXiv**: [${entry.arxiv}](${entry.arxiv})`);
  if (entry.github) body.push(`- **GitHub**: [${entry.github}](${entry.github})`);
  if (entry.website) body.push(`- **Website**: [${entry.website}](${entry.website})`);
  body.push(':::');
  body.push('');
  body.push('## 学习笔记');
  body.push('');
  body.push('*此部分待补充。*');
  body.push('');

  const content = frontmatter.join('\n') + '\n' + body.join('\n');

  if (writeIfNotExists(filePath, content)) {
    totalFiles++;
    return true;
  }
  return false;
}

// ─── Dataset/Benchmark stub ──────────────────────────────────────

function generateResourceStub(dirPath, entry) {
  const filename = slugify(entry.paper);
  const filePath = join(dirPath, `${filename}.md`);

  const frontmatter = [
    '---',
    `title: "${entry.paper.replace(/"/g, '\\"')}"`,
  ];
  if (entry.year) frontmatter.push(`year: ${entry.year}`);
  frontmatter.push('---');
  frontmatter.push('');

  const body = [
    `# ${entry.paper}`,
    '',
    '::: info 数据集信息',
  ];
  if (entry.venue) body.push(`- **Venue**: ${entry.venue} (${entry.year})`);
  if (entry.arxiv) body.push(`- **arXiv**: [${entry.arxiv}](${entry.arxiv})`);
  if (entry.github) body.push(`- **GitHub**: [${entry.github}](${entry.github})`);
  if (entry.website) body.push(`- **Website**: [${entry.website}](${entry.website})`);
  if (entry.dataset) body.push(`- **Dataset**: [${entry.dataset}](${entry.dataset})`);
  body.push(':::');
  body.push('');
  body.push('## 学习笔记');
  body.push('');
  body.push('*此部分待补充。*');
  body.push('');

  const content = frontmatter.join('\n') + '\n' + body.join('\n');

  if (writeIfNotExists(filePath, content)) {
    totalFiles++;
    return true;
  }
  return false;
}

// ─── Count papers in JSON ────────────────────────────────────────

function countEntries() {
  let total = 0;
  const counts = {};
  for (const topCat of data) {
    for (const subcat of topCat.subcategories) {
      if (subcat.subsubcategories) {
        let catTotal = 0;
        for (const subsub of subcat.subsubcategories) {
          catTotal += subsub.papers.length;
          counts[`${topCat.id}/${subcat.id}/${subsub.id}`] = subsub.papers.length;
        }
        total += catTotal;
      }
    }
  }
  return { total, counts };
}

// ─── Main ────────────────────────────────────────────────────────

console.log('🚀 开始生成 Video Generation 文档结构...\n');

const { total: totalEntries, counts: entryCounts } = countEntries();
console.log(`📊 JSON 统计: ${totalEntries} 条记录\n${JSON.stringify(entryCounts, null, 2)}\n`);

// Generate all index files
console.log('📝 生成索引页面...');
generateTopIndex();
generateMethodsIndex();
generateConferencePapersIndex();
generateArxivPapersIndex();
generateDatasetsIndex();
generateBenchmarksIndex();

// Generate stub files for all entries
console.log('\n📝 生成论文/数据集/基准桩文件...');

for (const topCat of data) {
  for (const subcat of topCat.subcategories) {
    if (subcat.id === 'methods') {
      // Methods: papers go into subsubcategory dirs
      for (const subsub of subcat.subsubcategories) {
        const dirPath = join(BASE, 'methods', subsub.id);
        console.log(`\n  📁 methods/${subsub.id}/ [${subsub.papers.length} papers]`);
        let created = 0;
        for (const paper of subsub.papers) {
          if (generatePaperStub(dirPath, paper)) {
            created++;
          }
        }
        console.log(`    ✅ ${created} created, ${subsub.papers.length - created} skipped`);
      }
    } else if (subcat.id === 'datasets' || subcat.id === 'benchmarks') {
      // Datasets & Benchmarks: files go directly into the subcategory dir
      const dirPath = join(BASE, subcat.id);
      // Flatten: all papers from all subsubcategories
      let allEntries = [];
      for (const subsub of subcat.subsubcategories) {
        allEntries = allEntries.concat(subsub.papers);
      }
      console.log(`\n  📁 ${subcat.id}/ [${allEntries.length} entries]`);
      let created = 0;
      for (const entry of allEntries) {
        if (generateResourceStub(dirPath, entry)) {
          created++;
        }
      }
      console.log(`    ✅ ${created} created, ${allEntries.length - created} skipped`);
    }
  }
}

// ─── Summary ─────────────────────────────────────────────────────

console.log(`\n${'='.repeat(50)}`);
console.log(`✅ 完成! 共创建 ${totalDirs} 个目录, ${totalFiles} 个文件.`);
console.log(`${'='.repeat(50)}`);
