import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

const INPUT = resolve('c:/Users/93609/OneDrive/世界模型/awesome-readme.md');
const OUTPUT = resolve('c:/Users/93609/OneDrive/世界模型/papers.json');

const content = readFileSync(INPUT, 'utf-8');
const lines = content.split('\n');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseSectionTitle(line) {
  const match = line.match(/^#{1,3}\s+(.+)$/);
  if (!match) return null;
  let title = match[1].trim();
  const level = line.startsWith('### ') ? 3 : line.startsWith('## ') ? 2 : 1;
  title = title.replace(/^\d+(\.\d+)*\.?\s*/, '');
  return { level, title };
}

function extractLinksFromCell(cell) {
  const arxiv = [];
  const github = [];
  const website = [];
  const linkRegex = /\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRegex.exec(cell)) !== null) {
    const url = m[1].trim();
    if (url.includes('img.shields.io') || url.includes('shields.io')) continue;
    if (url.includes('arxiv.org/abs/') || url.includes('arxiv.org/pdf/')) {
      if (!arxiv.includes(url)) arxiv.push(url);
    } else if (url.includes('github.com/')) {
      if (!github.includes(url)) github.push(url);
    } else {
      if (!website.includes(url)) website.push(url);
    }
  }
  return { arxiv, github, website };
}

function extractDesignName(cell) {
  const trimmed = cell.trim();
  if (!trimmed) return null;
  return trimmed.replace(/^`|`$/g, '').trim();
}

function isTableSeparator(line) {
  return /^\|[\s:-]+\|[\s:-]+\|/.test(line);
}

function isTableHeader(line) {
  return /^\|[\s]*[A-Za-z]+[\s]*\|/.test(line);
}

function isTableRow(line) {
  return /^\|/.test(line) && !isTableHeader(line) && !isTableSeparator(line);
}

function parseTableRow(line) {
  return line
    .replace(/^\||\|$/g, '')
    .split('|')
    .map(s => s.trim());
}

function detectTableColumns(headerRow) {
  const cols = parseTableRow(headerRow).map(c => c.toLowerCase().replace(/\s+/g, ''));
  return cols;
}

// --- Main parsing ---

const categories = [];

let currentCategory = null;
let currentSubcategory = null;
let currentSubsubcategory = null;

let inTable = false;
let tableColumns = [];

function finalizeCurrent() {
  if (currentSubsubcategory && currentCategory && currentSubcategory) {
    currentSubcategory.subsubcategories.push(currentSubsubcategory);
    currentSubsubcategory = null;
  }
  if (currentSubcategory && currentCategory) {
    currentCategory.subcategories.push(currentSubcategory);
    currentSubcategory = null;
  }
  if (currentCategory) {
    categories.push(currentCategory);
    currentCategory = null;
  }
}

function ensureSubsubcategory(name) {
  if (!currentSubsubcategory) {
    currentSubsubcategory = {
      id: slugify(name),
      name: name,
      papers: []
    };
  }
  return currentSubsubcategory;
}

let parsingActive = false; // Only parse from "# 1. Designs" onward
let isOthersSection = false; // Track if we're in the "Others" section (no ## level)

let i = 0;
while (i < lines.length) {
  const line = lines[i];

  // Detect section headers
  const section = parseSectionTitle(line);
  if (section) {
    // Close current table
    inTable = false;

    // Start parsing only from "# 1. Designs"
    if (!parsingActive && section.level === 1 && section.title === 'Designs') {
      parsingActive = true;
    }

    // Stop at "# 4. Acknowledgements"
    if (parsingActive && section.level === 1 && section.title.includes('Acknowledgements')) {
      finalizeCurrent();
      break;
    }

    if (!parsingActive) {
      i++;
      continue;
    }

    if (section.level === 1) {
      finalizeCurrent();
      isOthersSection = false;
      currentCategory = {
        id: slugify(section.title),
        name: section.title,
        subcategories: []
      };
      // Detect "Others" section (no ## level, direct ### children)
      if (section.title === 'Others') {
        isOthersSection = true;
      }
    } else if (section.level === 2) {
      if (currentSubsubcategory && currentCategory && currentSubcategory) {
        currentSubcategory.subsubcategories.push(currentSubsubcategory);
        currentSubsubcategory = null;
      }
      if (currentSubcategory && currentCategory) {
        currentCategory.subcategories.push(currentSubcategory);
      }
      currentSubcategory = {
        id: slugify(section.title),
        name: section.title,
        subsubcategories: []
      };
    } else if (section.level === 3) {
      if (isOthersSection) {
        // "Others" section: ### becomes a subcategory (no ## level)
        // Finalize previous subcategory and subsubcategory if exists
        if (currentSubsubcategory && currentCategory && currentSubcategory) {
          currentSubcategory.subsubcategories.push(currentSubsubcategory);
          currentSubsubcategory = null;
        }
        if (currentSubcategory && currentCategory) {
          currentCategory.subcategories.push(currentSubcategory);
          currentSubcategory = null;
        }
        currentSubcategory = {
          id: slugify(section.title),
          name: section.title,
          subsubcategories: []
        };
        // Create matching subsubcategory for papers
        currentSubsubcategory = {
          id: slugify(section.title),
          name: section.title,
          papers: []
        };
      } else {
        // Normal section: ### under ##
        if (currentSubsubcategory && currentCategory && currentSubcategory) {
          currentSubcategory.subsubcategories.push(currentSubsubcategory);
        }
        currentSubsubcategory = {
          id: slugify(section.title),
          name: section.title,
          papers: []
        };
      }
    }
    i++;
    continue;
  }

  // Detect table
  if (isTableHeader(line) && !inTable) {
    // Peek ahead to confirm this is a table (next line should be separator)
    if (i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      inTable = true;
      tableColumns = detectTableColumns(line);
      i += 2; // skip header and separator
      continue;
    }
  }

  // Process table rows
  if (inTable && isTableRow(line)) {
    const cols = parseTableRow(line);

    // Determine column mapping based on detected headers
    let designCol = -1;
    let paperCol = -1;
    let linkCol = -1;
    let venueCol = -1;
    let workshopCol = -1;
    let repoCol = -1;

    for (let c = 0; c < tableColumns.length; c++) {
      const col = tableColumns[c];
      if (col === 'design') designCol = c;
      if (col === 'paper') paperCol = c;
      if (col === 'link') linkCol = c;
      if (col === 'venue') venueCol = c;
      if (col === 'workshop') workshopCol = c;
      if (col === 'repo') repoCol = c;
    }

    // Skip empty rows
    const hasContent = cols.some(c => c.trim().length > 0);
    if (!hasContent) {
      i++;
      continue;
    }

    // Workshop table special case
    if (venueCol >= 0 && workshopCol >= 0 && linkCol >= 0) {
      const venue = extractDesignName(cols[venueCol] || '');
      const workshopPaper = (cols[workshopCol] || '').trim();
      const links = extractLinksFromCell(cols[linkCol] || '');

      if (currentSubsubcategory) {
        currentSubsubcategory.papers.push({
          design: venue || null,
          paper: workshopPaper || null,
          arxiv: links.arxiv.length > 0 ? links.arxiv[0] : null,
          github: links.github.length > 0 ? links.github[0] : null,
          website: links.website.length > 0 ? links.website[0] : null
        });
      }
      i++;
      continue;
    }

    // GitHub Repo table (Repo | Link)
    if (repoCol >= 0 && linkCol >= 0 && paperCol < 0) {
      const repoName = (cols[repoCol] || '').trim();
      const links = extractLinksFromCell(cols[linkCol] || '');

      if (currentSubsubcategory) {
        currentSubsubcategory.papers.push({
          design: null,
          paper: repoName || null,
          arxiv: null,
          github: links.github.length > 0 ? links.github[0] : null,
          website: links.website.length > 0 ? links.website[0] : null
        });
      }
      i++;
      continue;
    }

    // Survey table (Paper | Link) - no Design column
    if (paperCol >= 0 && linkCol >= 0 && designCol < 0) {
      const paperTitle = (cols[paperCol] || '').trim();
      const links = extractLinksFromCell(cols[linkCol] || '');

      if (currentSubsubcategory) {
        currentSubsubcategory.papers.push({
          design: null,
          paper: paperTitle || null,
          arxiv: links.arxiv.length > 0 ? links.arxiv[0] : null,
          github: links.github.length > 0 ? links.github[0] : null,
          website: links.website.length > 0 ? links.website[0] : null
        });
      }
      i++;
      continue;
    }

    // Standard table (Design | Paper | Link)
    if (designCol >= 0 && paperCol >= 0 && linkCol >= 0) {
      const design = extractDesignName(cols[designCol] || '');
      const paper = (cols[paperCol] || '').trim();
      const links = extractLinksFromCell(cols[linkCol] || '');

      // For "Others" section (no ## level), the subsubcategory IS the subcategory
      // But we might be under ## 1.5 which has no ###. In that case, create synthetic subsubcategory.
      if (currentSubcategory && !currentSubsubcategory) {
        // Happens for 1.5 Other Architectures - no ### sub-subsection
        currentSubsubcategory = {
          id: slugify(currentSubcategory.name),
          name: currentSubcategory.name,
          papers: []
        };
      }

      if (!design || design === '-' || design.length === 0) {
        // Paper without explicit design name, still include it
        if (currentSubsubcategory) {
          currentSubsubcategory.papers.push({
            design: null,
            paper: paper || null,
            arxiv: links.arxiv.length > 0 ? links.arxiv[0] : null,
            github: links.github.length > 0 ? links.github[0] : null,
            website: links.website.length > 0 ? links.website[0] : null
          });
        }
      } else {
        if (currentSubsubcategory) {
          currentSubsubcategory.papers.push({
            design: design,
            paper: paper || null,
            arxiv: links.arxiv.length > 0 ? links.arxiv[0] : null,
            github: links.github.length > 0 ? links.github[0] : null,
            website: links.website.length > 0 ? links.website[0] : null
          });
        }
      }
      i++;
      continue;
    }

    i++;
    continue;
  }

  // End of table detection
  if (inTable && !isTableRow(line) && line.trim() !== '') {
    inTable = false;
  }

  i++;
}

// Finalize remaining state
finalizeCurrent();

// Ensure scripts directory exists
mkdirSync(dirname(resolve('c:/Users/93609/OneDrive/世界模型/scripts/parse-readme.mjs')), { recursive: true });

// Write output
writeFileSync(OUTPUT, JSON.stringify(categories, null, 2), 'utf-8');

// Summary
let totalPapers = 0;
for (const cat of categories) {
  for (const sub of cat.subcategories) {
    for (const subsub of sub.subsubcategories) {
      totalPapers += subsub.papers.length;
    }
  }
}

console.log(`Parsed ${categories.length} categories with ${totalPapers} total papers.`);
console.log(`Output written to: ${OUTPUT}`);

// Print category structure
for (const cat of categories) {
  console.log(`\nCategory: ${cat.name} (${cat.id})`);
  for (const sub of cat.subcategories) {
    let subPaperCount = 0;
    for (const subsub of sub.subsubcategories) {
      subPaperCount += subsub.papers.length;
    }
    console.log(`  Subcategory: ${sub.name} (${sub.id}) - ${sub.subsubcategories.length} sub-subcategories, ${subPaperCount} papers`);
    for (const subsub of sub.subsubcategories) {
      console.log(`    Subsubcategory: ${subsub.name} (${subsub.id}) - ${subsub.papers.length} papers`);
    }
  }
}
