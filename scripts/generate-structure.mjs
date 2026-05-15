import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DOCS = join(ROOT, 'docs');

const papers = JSON.parse(readFileSync(join(ROOT, 'papers.json'), 'utf-8'));

const TOP_CATEGORY_DIR_MAP = {
  'designs': 'designs',
  'datasets-and-benchmarks': 'datasets',
  'others': 'others',
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

function sanitizeFilename(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-|-$/g, '');
}

let totalDirs = 0;
let totalFiles = 0;

function buildSidebar() {
  const sidebar = {};

  for (const topCat of papers) {
    const topDir = TOP_CATEGORY_DIR_MAP[topCat.id];
    if (!topDir) continue;

    const topItems = [];

    for (const subcat of topCat.subcategories) {
      const subItems = [];

      for (const subsub of subcat.subsubcategories) {
        subItems.push({
          text: subsub.name,
          link: `/${topDir}/${subcat.id}/${subsub.id}/`,
        });
      }

      topItems.push({
        text: subcat.name,
        collapsed: true,
        items: subItems,
      });
    }

    sidebar[`/${topDir}/`] = [
      {
        text: topCat.name,
        collapsed: false,
        items: topItems,
      },
    ];
  }

  return sidebar;
}

function renderSidebarValue(obj, indent) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => renderSidebarValue(item, indent + 2));
    return '[\n' + items.map(i => ' '.repeat(indent + 2) + i).join(',\n') + '\n' + ' '.repeat(indent) + ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj);
    const pairs = keys.map(k => {
      const val = renderSidebarValue(obj[k], indent + 2);
      const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      return ' '.repeat(indent + 2) + keyStr + ': ' + val;
    });
    return '{\n' + pairs.join(',\n') + '\n' + ' '.repeat(indent) + '}';
  }
  if (typeof obj === 'string') {
    const escaped = obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `'${escaped}'`;
  }
  return String(obj);
}

function generateConfig(sidebar) {
  const configPath = join(DOCS, '.vitepress', 'config.mts');

  const sidebarStr = renderSidebarValue(sidebar, 4);

  const configContent = `import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '世界模型学习笔记库',
  description: '基于 Awesome-Vision-World-Model 综述的视觉世界模型学习笔记',
  base: '/',
  lang: 'zh-CN',

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Designs', link: '/designs/' },
      { text: 'Datasets & Benchmarks', link: '/datasets/' },
      { text: 'Others', link: '/others/' },
    ],

    sidebar: ${sidebarStr},

    outline: 'deep',
  },

  appearance: true,
})
`;

  writeFileSync(configPath, configContent, 'utf-8');
  console.log('  ✅ Updated config.mts');
}

function generateSubcategoryIndex(topDir, subcat, parentName) {
  const subDir = join(DOCS, topDir, subcat.id);
  ensureDir(subDir);
  totalDirs++;

  const content = `---
title: ${yamlQuote(subcat.name)}
---

# ${subcat.name}

::: tip 概述
*此部分为 ${subcat.name} 在 "${parentName}" 分类下的概览，内容待补充。*
:::

## 子分类

${subcat.subsubcategories.map(ss => `- [${ss.name}](./${ss.id}/)`).join('\n')}
`;

  writeFileSync(join(subDir, 'index.md'), content, 'utf-8');
  console.log(`    📄 ${topDir}/${subcat.id}/index.md`);
  totalFiles++;
}

function generateSubsubcategoryIndex(topDir, subcat, subsub, parentName) {
  const ssDir = join(DOCS, topDir, subcat.id, subsub.id);
  ensureDir(ssDir);
  totalDirs++;

  const paperLinks = subsub.papers.map(p => {
    const filename = p.design
      ? sanitizeFilename(p.design)
      : sanitizeFilename(p.paper.substring(0, 40));
    return `- [${p.design}](${filename}): ${p.paper}`;
  }).join('\n');

  const content = `---
title: ${yamlQuote(subsub.name)}
---

# ${subsub.name}

::: tip 概述
*此部分为 **${subsub.name}** 在 "${parentName} → ${subcat.name}" 下的概览，内容待后续补充。*
:::

## 论文列表

${paperLinks}
`;

  writeFileSync(join(ssDir, 'index.md'), content, 'utf-8');
  console.log(`      📄 ${topDir}/${subcat.id}/${subsub.id}/index.md`);
  totalFiles++;

  for (const paper of subsub.papers) {
    generatePaperFile(topDir, subcat, subsub, paper);
  }
}

function generatePaperFile(topDir, subcat, subsub, paper) {
  const ssDir = join(DOCS, topDir, subcat.id, subsub.id);
  const filename = paper.design
    ? sanitizeFilename(paper.design)
    : sanitizeFilename(paper.paper.substring(0, 40));

  const filePath = join(ssDir, `${filename}.md`);

  const frontmatterLines = [
    '---',
    `title: "${paper.paper.replace(/"/g, '\\"')}"`,
  ];
  if (paper.design) {
    frontmatterLines.push(`design: "${paper.design.replace(/"/g, '\\"')}"`);
  }
  if (paper.arxiv) {
    frontmatterLines.push(`arxiv: ${paper.arxiv}`);
  }
  if (paper.github) {
    frontmatterLines.push(`github: ${paper.github}`);
  }
  if (paper.website) {
    frontmatterLines.push(`website: ${paper.website}`);
  }
  frontmatterLines.push('---');
  frontmatterLines.push('');

  const headingTitle = paper.design && !paper.paper.startsWith(paper.design)
    ? paper.design + ': ' + paper.paper
    : paper.paper;
  const bodyLines = [
    `# ${headingTitle}`,
    '',
    '::: info 论文信息',
  ];
  if (paper.design) {
    bodyLines.push(`- **Design**: ${paper.design}`);
  }
  bodyLines.push(`- **论文全称**: ${paper.paper}`);
  if (paper.arxiv) {
    bodyLines.push(`- **arXiv**: [${paper.arxiv}](${paper.arxiv})`);
  }
  if (paper.github) {
    bodyLines.push(`- **GitHub**: [${paper.github}](${paper.github})`);
  }
  if (paper.website) {
    bodyLines.push(`- **Website**: [${paper.website}](${paper.website})`);
  }
  bodyLines.push(':::');
  bodyLines.push('');
  bodyLines.push('## 学习笔记');
  bodyLines.push('');
  bodyLines.push('*此部分待补充。*');

  const content = frontmatterLines.join('\n') + '\n' + bodyLines.join('\n') + '\n';

  writeFileSync(filePath, content, 'utf-8');
  totalFiles++;
}

function yamlQuote(str) {
  return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function updateTopCategoryIndex(topDir, topCat, subcats) {
  const desc = topCat.id === 'others' ? '其他相关资源与补充材料。'
    : topCat.id === 'datasets-and-benchmarks' ? '数据集与基准评测汇总。'
    : '世界模型架构设计分类。';

  const content = `---
title: ${yamlQuote(topCat.name)}
---

# ${topCat.name}

${desc}

## 子分类

${subcats.map(sc => `- [${sc.name}](./${sc.id}/)`).join('\n')}
`;

  writeFileSync(join(DOCS, topDir, 'index.md'), content, 'utf-8');
  console.log(`  📄 ${topDir}/index.md (updated)`);
  totalFiles++;
}

// Main
console.log('🚀 开始生成 VitePress 结构...\n');

for (const topCat of papers) {
  const topDir = TOP_CATEGORY_DIR_MAP[topCat.id];
  if (!topDir) {
    console.log(`⚠️  Unknown top category: ${topCat.id}`);
    continue;
  }

  ensureDir(join(DOCS, topDir));

  console.log(`📁 ${topCat.name} (${topDir}/)`);
  updateTopCategoryIndex(topDir, topCat, topCat.subcategories);

  for (const subcat of topCat.subcategories) {
    console.log(`  📂 ${subcat.name} (${subcat.id})`);
    generateSubcategoryIndex(topDir, subcat, topCat.name);

    for (const subsub of subcat.subsubcategories) {
      console.log(`    📁 ${subsub.name} (${subsub.id}) [${subsub.papers.length} papers]`);
      generateSubsubcategoryIndex(topDir, subcat, subsub, topCat.name);
    }
  }

  console.log('');
}

// Generate sidebar config
console.log('⚙️  生成侧边栏配置...');
const sidebar = buildSidebar();
generateConfig(sidebar);

console.log(`\n✅ 完成! 共创建 ${totalDirs} 个目录, ${totalFiles} 个文件.`);
