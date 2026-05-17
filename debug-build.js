const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const distAssetsDir = path.join(__dirname, 'docs', '.vitepress', 'dist', 'assets');

function findMarkdownFiles(dir, baseDir = '') {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    const relative = baseDir ? path.join(baseDir, entry.name) : entry.name;
    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath, relative));
    } else if (entry.name.endsWith('.md')) {
      files.push(relative);
    }
  }
  return files;
}

const mdFiles = findMarkdownFiles(docsDir, '');

let chunkFiles = [];
try {
  const entries = fs.readdirSync(distAssetsDir);
  chunkFiles = entries.filter(f => f.endsWith('.js') && !f.includes('chunk') && !f.startsWith('app.') && !f.startsWith('style.'));
} catch (e) {
  console.error('dist not found');
  process.exit(1);
}

// Build a set of chunk base names (path with _ replaced and .md retained)
const chunkSet = new Set();
for (const chunk of chunkFiles) {
  // Pattern: {path_with_underscores}.md.{hash}.js or {path_with_underscores}.md.{hash}.lean.js
  const baseName = chunk.replace(/\.([\w-]+)\.lean\.js$/, '').replace(/\.([\w-]+)\.js$/, '');
  chunkSet.add(baseName);
}

console.log(`Total markdown files: ${mdFiles.length}`);
console.log(`Total chunk base names: ${chunkSet.size}`);
console.log(`Total chunk files: ${chunkFiles.length}`);

// Sample chunk base names
console.log("\n=== SAMPLE CHUNK BASE NAMES ===");
let count = 0;
for (const name of chunkSet) {
  console.log(`  ${name}`);
  count++;
  if (count >= 10) break;
}

console.log("\n=== MISSING PAGES ===");
let missingCount = 0;
for (const mdFile of mdFiles) {
  // Convert file path to chunk name: replace backslashes with forward slashes, then / with _, keep .md
  const expectedName = mdFile.replace(/\\/g, '/').replace(/\//g, '_');
  
  if (!chunkSet.has(expectedName)) {
    console.log(`  MISSING: ${mdFile} (expected: ${expectedName})`);
    missingCount++;
  }
}

console.log(`\nMissing count: ${missingCount}`);
