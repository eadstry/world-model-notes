import { writeFileSync } from 'fs';
import { resolve } from 'path';

const OUTPUT = resolve('c:/Users/93609/OneDrive/世界模型/video-gen-papers.json');

const URLS = {
  readme: 'https://raw.githubusercontent.com/CyL97/Awesome-Video-Generation-Post-Training/main/README.md',
  conference: 'https://raw.githubusercontent.com/CyL97/Awesome-Video-Generation-Post-Training/main/conference.md',
  arxiv: 'https://raw.githubusercontent.com/CyL97/Awesome-Video-Generation-Post-Training/main/arxiv.md',
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractVenueFromCell(cell) {
  const imgMatch = cell.match(/!\[([^\]]*)\]\(https:\/\/img\.shields\.io\/badge\/([^-]+)/);
  if (imgMatch) {
    return imgMatch[1].trim();
  }
  return null;
}

function extractLinksFromCell(cell) {
  const result = {
    arxiv: null,
    github: null,
    website: null,
    dataset: null,
  };

  const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  const allUrls = [];
  while ((m = linkRegex.exec(cell)) !== null) {
    const url = m[2].trim();
    if (url.includes('img.shields.io') || url.includes('shields.io')) continue;
    allUrls.push(url);
  }

  for (const url of allUrls) {
    if (url.includes('arxiv.org/abs/') || url.includes('arxiv.org/pdf/')) {
      if (!result.arxiv) result.arxiv = url;
    } else if (
      url.includes('huggingface.co/datasets') ||
      url.includes('modelscope.cn/datasets') ||
      url.includes('drive.google.com') ||
      url.includes('pan.baidu.com') ||
      url.includes('docs.google.com/forms')
    ) {
      if (!result.dataset) result.dataset = url;
    } else if (url.includes('github.com/')) {
      if (!result.github) result.github = url;
    } else {
      if (!result.website) result.website = url;
    }
  }

  return result;
}

function cleanTitle(raw) {
  let t = raw.trim();
  t = t.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  t = t.trim();
  return t || null;
}

function isTableSeparator(line) {
  return /^\|[\s:-]+\|[\s:-]+\|/.test(line);
}

function isTableHeader(line) {
  const stripped = line.replace(/\*\*/g, '');
  return /^\|[\s]*[A-Za-z]+[\s]*\|/.test(stripped);
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

function parseTableLines(lines, startIdx, columns) {
  const rows = [];
  let i = startIdx;

  while (i < lines.length && isTableRow(lines[i])) {
    const cols = parseTableRow(lines[i]);
    const row = {};
    for (let c = 0; c < columns.length; c++) {
      if (c < cols.length) {
        row[columns[c]] = cols[c];
      }
    }
    rows.push(row);
    i++;
  }

  return { rows, endIdx: i };
}

function findTableHeaders(lines) {
  const tables = [];
  let i = 0;
  while (i < lines.length) {
    if (isTableHeader(lines[i]) && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const headerRow = lines[i];
      const cols = parseTableRow(headerRow).map(c => c.toLowerCase().replace(/[^a-z0-9]/g, ''));
      tables.push({ startIdx: i, columns: cols });
      i += 2;
    } else {
      i++;
    }
  }
  return tables;
}

async function fetchContent(url) {
  const resp = await fetch(url);
  if (!resp.ok) {
    console.error(`Failed to fetch ${url}: ${resp.status}`);
    return '';
  }
  return resp.text();
}

function findSectionBoundaries(lines, sectionTitle) {
  let start = -1;
  let end = lines.length;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^###\s+/) && line.trim() === `### ${sectionTitle}`) {
      start = i;
    } else if (start >= 0 && (line.match(/^###\s+/) || line.match(/^---$/)) && i > start) {
      end = i;
      break;
    }
  }

  return { start, end };
}

async function main() {
  console.log('Fetching source files...');
  const [readmeContent, conferenceContent, arxivContent] = await Promise.all([
    fetchContent(URLS.readme),
    fetchContent(URLS.conference),
    fetchContent(URLS.arxiv),
  ]);

  const categories = [];

  const methodsSubsubs = [];

  // --- Parse Conference Papers ---
  console.log('Parsing conference papers...');
  {
    const lines = conferenceContent.split('\n');
    const tables = findTableHeaders(lines);
    let confPapers = [];

    for (const table of tables) {
      const { rows } = parseTableLines(lines, table.startIdx + 2, table.columns);
      for (const row of rows) {
        const rawTitle = row.title || row[''] || '';
        const year = row.year || '';
        const linksCell = row.links || '';

        const venue = extractVenueFromCell(rawTitle) || null;
        const title = cleanTitle(rawTitle);
        const links = extractLinksFromCell(linksCell);

        if (!title) continue;

        confPapers.push({
          paper: title,
          year: year || null,
          arxiv: links.arxiv,
          github: links.github,
          website: links.website,
          dataset: links.dataset,
          venue: venue,
        });
      }
    }

    if (confPapers.length > 0) {
      methodsSubsubs.push({
        id: 'conference-papers',
        name: 'Conference Papers',
        papers: confPapers,
      });
      console.log(`  Conference papers: ${confPapers.length}`);
    }
  }

  // --- Parse arXiv Papers ---
  console.log('Parsing arXiv papers...');
  {
    const lines = arxivContent.split('\n');
    const tables = findTableHeaders(lines);
    let arxivPapers = [];

    for (const table of tables) {
      const { rows } = parseTableLines(lines, table.startIdx + 2, table.columns);
      for (const row of rows) {
        const rawTitle = row.title || row[''] || '';
        const year = row.year || '';
        const linksCell = row.links || '';

        const title = cleanTitle(rawTitle);
        const links = extractLinksFromCell(linksCell);

        if (!title) continue;

        arxivPapers.push({
          paper: title,
          year: year || null,
          arxiv: links.arxiv,
          github: links.github,
          website: links.website,
          dataset: links.dataset,
          venue: 'arXiv',
        });
      }
    }

    if (arxivPapers.length > 0) {
      methodsSubsubs.push({
        id: 'arxiv-papers',
        name: 'arXiv Papers',
        papers: arxivPapers,
      });
      console.log(`  arXiv papers: ${arxivPapers.length}`);
    }
  }

  if (methodsSubsubs.length > 0) {
    categories.push({
      id: 'methods',
      name: 'Methods',
      subsubcategories: methodsSubsubs,
    });
  }

  // --- Parse Datasets from README ---
  console.log('Parsing datasets from README...');
  {
    const lines = readmeContent.split('\n');
    const bounds = findSectionBoundaries(lines, 'Datasets');

    let datasets = [];
    if (bounds.start >= 0) {
      const sectionLines = lines.slice(bounds.start, bounds.end);
      const tables = findTableHeaders(sectionLines);

      for (const table of tables) {
        const { rows } = parseTableLines(sectionLines, table.startIdx + 2, table.columns);
        for (const row of rows) {
          const rawName = row.dataset || row[''] || '';
          const year = row.year || '';
          const linksCell = row.links || '';

          const venue = extractVenueFromCell(rawName) || null;
          const name = cleanTitle(rawName);
          const links = extractLinksFromCell(linksCell);

          if (!name) continue;

          datasets.push({
            paper: name,
            year: year || null,
            arxiv: links.arxiv,
            github: links.github,
            website: links.website,
            dataset: links.dataset,
            venue: venue,
          });
        }
      }
    }

    if (datasets.length > 0) {
      categories.push({
        id: 'datasets',
        name: 'Datasets',
        subsubcategories: [
          {
            id: 'datasets',
            name: 'Datasets',
            papers: datasets,
          },
        ],
      });
      console.log(`  Datasets: ${datasets.length}`);
    }
  }

  // --- Parse Benchmarks from README ---
  console.log('Parsing benchmarks from README...');
  {
    const lines = readmeContent.split('\n');
    const bounds = findSectionBoundaries(lines, 'Benchmarks');

    let benchmarks = [];
    if (bounds.start >= 0) {
      const sectionLines = lines.slice(bounds.start, bounds.end);
      const tables = findTableHeaders(sectionLines);

      for (const table of tables) {
        const { rows } = parseTableLines(sectionLines, table.startIdx + 2, table.columns);
        for (const row of rows) {
          const rawName = row.benchmark || row[''] || '';
          const year = row.year || '';
          const linksCell = row.links || '';

          const venue = extractVenueFromCell(rawName) || null;
          const name = cleanTitle(rawName);
          const links = extractLinksFromCell(linksCell);

          if (!name) continue;

          benchmarks.push({
            paper: name,
            year: year || null,
            arxiv: links.arxiv,
            github: links.github,
            website: links.website,
            dataset: links.dataset,
            venue: venue,
          });
        }
      }
    }

    if (benchmarks.length > 0) {
      categories.push({
        id: 'benchmarks',
        name: 'Benchmarks',
        subsubcategories: [
          {
            id: 'benchmarks',
            name: 'Benchmarks',
            papers: benchmarks,
          },
        ],
      });
      console.log(`  Benchmarks: ${benchmarks.length}`);
    }
  }

  // Build final JSON structure
  const output = [
    {
      id: 'video-generation',
      name: 'Video Generation',
      subcategories: categories,
    },
  ];

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2), 'utf-8');

  // Summary
  console.log('\n=== Summary ===');
  let totalPapers = 0;
  for (const subcat of categories) {
    let catTotal = 0;
    for (const subsub of subcat.subsubcategories) {
      catTotal += subsub.papers.length;
    }
    totalPapers += catTotal;
    console.log(`  ${subcat.name}: ${catTotal} entries`);
    for (const subsub of subcat.subsubcategories) {
      console.log(`    ${subsub.name}: ${subsub.papers.length} entries`);
    }
  }
  console.log(`\nTotal: ${totalPapers} entries`);
  console.log(`Output written to: ${OUTPUT}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
