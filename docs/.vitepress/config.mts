import { defineConfig, type DefaultTheme } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join, posix } from 'node:path'

const DOCS_ROOT = fileURLToPath(new URL('../', import.meta.url))
const collator = new Intl.Collator('zh-CN', {
  numeric: true,
  sensitivity: 'base',
})

const titleCache = new Map<string, string>()
const preferredDirectoryOrder: Record<string, string[]> = {
  'world-models': [
    'fundamentals',
    'architectures',
    'datasets-benchmarks',
    'applications',
    'ecology',
  ],
  'world-models/architectures': [
    'sequential-generation',
    'diffusion-based-generation',
    'embedding-prediction',
    'state-transition',
    'other-architectures',
  ],
  'world-models/datasets-benchmarks': [
    'foundational-world-modeling',
    'domain-specific-world-modeling',
  ],
  'world-models/datasets-benchmarks/foundational-world-modeling': [
    'general-world-prediction-and-simulation',
    'physics-and-causality-benchmark',
  ],
  'world-models/datasets-benchmarks/domain-specific-world-modeling': [
    'embodied-ai-and-robotics',
    'autonomous-driving',
    'interactive-environments-and-gaming',
  ],
  'world-models/ecology': ['surveys', 'workshops', 'repositories', 'perspectives'],
  'video-generation': ['methods', 'datasets', 'benchmarks'],
  'video-generation/methods': ['conference-papers', 'arxiv-papers'],
}

function normalizeRoute(relativePath: string) {
  return `/${relativePath.split('\\').join('/')}`
}

function getIndexRoute(relativeDir: string) {
  return `${normalizeRoute(relativeDir)}/`
}

function getDocRoute(relativeFile: string) {
  return normalizeRoute(relativeFile.replace(/\.md$/i, ''))
}

function humanizeSegment(segment: string) {
  return segment
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function readDocTitle(relativeFile: string) {
  const cached = titleCache.get(relativeFile)
  if (cached) return cached

  const absoluteFile = join(DOCS_ROOT, relativeFile)
  if (!existsSync(absoluteFile)) {
    const fallback = humanizeSegment(relativeFile.split(/[\\/]/).pop() ?? relativeFile)
    titleCache.set(relativeFile, fallback)
    return fallback
  }

  const content = readFileSync(absoluteFile, 'utf-8')
  const frontmatterTitle = content.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim()
  const headingTitle = content.match(/^#\s+(.+)$/m)?.[1]?.trim()
  const title = frontmatterTitle || headingTitle || humanizeSegment(relativeFile.split(/[\\/]/).pop() ?? relativeFile)

  titleCache.set(relativeFile, title)
  return title
}

function hasNestedMarkdown(relativeDir: string) {
  const absoluteDir = join(DOCS_ROOT, relativeDir)
  return readdirSync(absoluteDir, { withFileTypes: true }).some((entry) => {
    if (entry.name.startsWith('.')) return false
    if (entry.isDirectory()) return true
    return entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md'
  })
}

function compareEntries(a: string, b: string) {
  return collator.compare(a, b)
}

function compareDirectoryEntries(parentDir: string, a: string, b: string) {
  const order = preferredDirectoryOrder[parentDir]
  if (!order) return compareEntries(a, b)

  const aIndex = order.indexOf(a)
  const bIndex = order.indexOf(b)

  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  }

  return compareEntries(a, b)
}

function buildDirectoryItems(relativeDir: string): DefaultTheme.SidebarItem[] {
  const absoluteDir = join(DOCS_ROOT, relativeDir)
  const entries = readdirSync(absoluteDir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) {
        return a.isDirectory() ? -1 : 1
      }
      return compareDirectoryEntries(relativeDir.replace(/\\/g, '/'), a.name, b.name)
    })

  const items: DefaultTheme.SidebarItem[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const childRelativeDir = posix.join(relativeDir.replace(/\\/g, '/'), entry.name)
      const childIndex = posix.join(childRelativeDir, 'index.md')
      const childItems = buildDirectoryItems(childRelativeDir)
      const childHasNestedContent = childItems.length > 0 || hasNestedMarkdown(childRelativeDir)

      if (!existsSync(join(DOCS_ROOT, childIndex)) && childItems.length === 0) {
        continue
      }

      const group: DefaultTheme.SidebarItem = {
        text: readDocTitle(childIndex),
        collapsed: true,
      }

      if (existsSync(join(DOCS_ROOT, childIndex))) {
        group.link = getIndexRoute(childRelativeDir)
      }

      if (childHasNestedContent && childItems.length > 0) {
        group.items = childItems
      }

      items.push(group)
      continue
    }

    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === 'index.md') {
      continue
    }

    const childRelativeFile = posix.join(relativeDir.replace(/\\/g, '/'), entry.name)
    items.push({
      text: readDocTitle(childRelativeFile),
      link: getDocRoute(childRelativeFile),
    })
  }

  return items
}

function buildSidebarSection(sectionDir: string): DefaultTheme.SidebarItem[] {
  const indexFile = `${sectionDir}/index.md`
  return [
    {
      text: readDocTitle(indexFile),
      link: getIndexRoute(sectionDir),
      collapsed: false,
      items: buildDirectoryItems(sectionDir),
    },
  ]
}

export default defineConfig({
  title: '世界模型与视频生成后训练笔记库',
  description: '按真实目录结构生成的 VitePress 笔记库',
  base: '/world-model-notes/',
  lang: 'zh-CN',

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '世界模型', link: '/world-models/' },
      {
        text: '视频生成后训练',
        items: [
          { text: 'Methods', link: '/video-generation/methods/' },
          { text: 'Datasets', link: '/video-generation/datasets/' },
          { text: 'Benchmarks', link: '/video-generation/benchmarks/' },
        ],
      },
    ],

    sidebar: {
      '/world-models/': buildSidebarSection('world-models'),
      '/video-generation/': buildSidebarSection('video-generation'),
    },

    outline: 'deep',
  },

  appearance: true,
})
