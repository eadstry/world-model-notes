#!/usr/bin/env python3
"""Gap analysis: awesome-readme.md vs papers.json"""

import json
import re
import os

# ── Parse awesome-readme.md ──────────────────────────────────────────────

readme_path = r"C:\Users\93609\OneDrive\世界模型\awesome-readme.md"
with open(readme_path, "r", encoding="utf-8") as f:
    readme_text = f.read()

# Extract papers from the readme tables
# Each row looks like:
# | `Design` | Paper Title | [![arXiv](...)](arxiv_url) ... [![GitHub](...)](github_url) ... [![Website](...)](website_url) ... |

# Find all table rows with papers (skip headers and separators)
# A paper row has a design code like `Code` in the first column
paper_pattern = re.compile(
    r'\|\s*`([^`]+)`\s*\|\s*(.+?)\s*\|(.+?)\|',
    re.DOTALL
)

# Simpler row-by-row approach
lines = readme_text.split('\n')

readme_papers = []
current_category = "Unknown"
current_subcategory = "Unknown"

# Known category headers
for line in lines:
    line = line.strip()
    
    # Track categories
    if line.startswith('## 1.1.'):
        current_subcategory = "1.1 Sequential Generation"
    elif line.startswith('## 1.2.'):
        current_subcategory = "1.2 Diffusion-based Generation"
    elif line.startswith('## 1.3.'):
        current_subcategory = "1.3 Embedding Prediction"
    elif line.startswith('## 1.4.'):
        current_subcategory = "1.4 State Transition"
    elif line.startswith('## 1.5.'):
        current_subcategory = "1.5 Other Architectures"
    elif line.startswith('## 2.'):
        current_subcategory = "2 Datasets & Benchmarks"
    elif line.startswith('# 1.'):
        current_category = "1. Designs"
    elif line.startswith('# 2.'):
        current_category = "2. Datasets & Benchmarks"
    elif line.startswith('### '):
        subsub = line.replace('### ', '').strip()
        if subsub not in ['Table of Contents']:
            current_subcategory = subsub

    # Parse paper table rows - must start with | and contain `Design`
    if not (line.startswith('|') and '`' in line and line.endswith('|')):
        continue
    
    # Skip header and separator rows
    if ':-' in line or 'Paper' in line:
        continue
    
    # Split by | but carefully
    parts = [p.strip() for p in line.split('|')]
    parts = [p for p in parts if p]  # remove empty strings from start/end
    
    if len(parts) < 3:
        continue
    
    design = parts[0].strip('`').strip()
    title = parts[1].strip()
    link_column = parts[2] if len(parts) > 2 else ''
    
    # Skip if no design code
    if not design:
        continue
    
    # Extract URLs from the link column
    # arxiv URLs
    arxiv_match = re.findall(r'\]\(https://arxiv\.org/abs/([\d\.]+)\)', link_column)
    # Also match arxiv URLs with http
    arxiv_match_http = re.findall(r'\]\(http://arxiv\.org/abs/([\d\.]+)\)', link_column)
    arxiv_match.extend(arxiv_match_http)
    
    # Also match www.arxiv.org
    arxiv_match_www = re.findall(r'\]\(https://www\.arxiv\.org/abs/([\d\.]+)\)', link_column)
    arxiv_match.extend(arxiv_match_www)
    
    arxiv_id = arxiv_match[0] if arxiv_match else None
    arxiv_url = f"https://arxiv.org/abs/{arxiv_id}" if arxiv_id else None
    
    # github URLs
    github_match = re.findall(r'\]\((https://github\.com/[^\)]+)\)', link_column)
    github_url = github_match[0] if github_match else None
    
    # website URLs (non-arxiv, non-github)
    website_match = re.findall(r'\]\((https?://[^\)]+)\)', link_column)
    website_urls = []
    for url in website_match:
        if 'arxiv.org' not in url and 'github.com' not in url and 'img.shields.io' not in url:
            website_urls.append(url)
    website_url = website_urls[0] if website_urls else None
    
    if arxiv_url or github_url or website_url:
        readme_papers.append({
            'design': design,
            'title': title,
            'arxiv_url': arxiv_url,
            'arxiv_id': arxiv_id,
            'github_url': github_url,
            'website_url': website_url,
            'category': current_subcategory
        })

print(f"Parsed {len(readme_papers)} papers from awesome-readme.md")

# ── Parse papers.json ────────────────────────────────────────────────────

json_path = r"C:\Users\93609\OneDrive\世界模型\papers.json"
with open(json_path, "r", encoding="utf-8") as f:
    papers_json = json.load(f)

# Flatten all papers from the JSON hierarchy
json_papers = []  # list of arxiv IDs/URLs
json_papers_by_arxiv = {}  # arxiv_id -> paper record

def extract_papers_from_json(categories):
    """Recursively extract papers from the JSON structure."""
    for category in categories:
        if 'papers' in category:
            for paper in category['papers']:
                # Normalize arxiv URL to ID
                arxiv_url = paper.get('arxiv')
                arxiv_id = None
                if arxiv_url:
                    m = re.search(r'arxiv\.org/abs/([\d\.]+)', arxiv_url)
                    if m:
                        arxiv_id = m.group(1)
                
                record = {
                    'design': paper.get('design'),
                    'title': paper.get('paper'),
                    'arxiv_url': arxiv_url,
                    'arxiv_id': arxiv_id,
                    'github_url': paper.get('github'),
                    'website_url': paper.get('website'),
                }
                json_papers.append(record)
                if arxiv_id:
                    json_papers_by_arxiv[arxiv_id] = record
                # Also index by design code for papers without arxiv
                if record['design'] and arxiv_id is None:
                    key = f"DESIGN:{record['design']}"
                    if key not in json_papers_by_arxiv:
                        json_papers_by_arxiv[key] = record
        
        if 'subcategories' in category:
            extract_papers_from_json(category['subcategories'])
        if 'subsubcategories' in category:
            extract_papers_from_json(category['subsubcategories'])

extract_papers_from_json(papers_json)
print(f"Extracted {len(json_papers)} papers from papers.json")
print(f"Papers with arxiv IDs: {sum(1 for p in json_papers if p['arxiv_id'])}")

# ── Cross-reference ──────────────────────────────────────────────────────

# Build set of arxiv IDs from papers.json
json_arxiv_ids = set()
for p in json_papers:
    if p['arxiv_id']:
        json_arxiv_ids.add(p['arxiv_id'])

# Also build a set of design codes from papers.json (for papers without arxiv)
json_designs = set()
for p in json_papers:
    if p['design']:
        json_designs.add(p['design'])

# 1. Find missing papers (in readme but not in json)
missing_papers = []
found_papers = []
github_null_with_readme = []

for rp in readme_papers:
    aid = rp['arxiv_id']
    design = rp['design']
    
    matched = False
    
    # Try to match by arxiv ID
    if aid and aid in json_arxiv_ids:
        matched = True
        found_papers.append(rp)
        
        # Check github null condition
        json_record = json_papers_by_arxiv.get(aid)
        if json_record and json_record['github_url'] is None and rp['github_url'] is not None:
            github_null_with_readme.append({
                'design': rp['design'],
                'title': rp['title'],
                'arxiv_url': rp['arxiv_url'],
                'readme_github': rp['github_url'],
                'json_github': json_record['github_url'],
                'category': rp['category']
            })
    # Try to match by design code (for papers without arxiv)
    elif design and f"DESIGN:{design}" in json_papers_by_arxiv:
        matched = True
        found_papers.append(rp)
        # Check github null
        key = f"DESIGN:{design}"
        json_record = json_papers_by_arxiv.get(key)
        if json_record and json_record['github_url'] is None and rp['github_url'] is not None:
            github_null_with_readme.append({
                'design': rp['design'],
                'title': rp['title'],
                'arxiv_url': rp['arxiv_url'],
                'readme_github': rp['github_url'],
                'json_github': json_record['github_url'],
                'category': rp['category']
            })
    elif aid is None:
        # No arxiv ID, and design not in json - check by title similarity
        title_lower = rp['title'].lower().strip()
        found_by_title = False
        for jp in json_papers:
            if jp['title'] and jp['title'].lower().strip() == title_lower:
                found_by_title = True
                matched = True
                found_papers.append(rp)
                break
        if not found_by_title:
            missing_papers.append(rp)
    else:
        missing_papers.append(rp)

# ── Output Results ───────────────────────────────────────────────────────

print("\n" + "=" * 80)
print("GAP ANALYSIS RESULTS")
print("=" * 80)

print(f"\nTotal papers in awesome-readme.md: {len(readme_papers)}")
print(f"Total papers in papers.json: {len(json_papers)}")
print(f"Papers from awesome-readme FOUND in papers.json: {len(found_papers)}")
print(f"Papers from awesome-readme MISSING in papers.json: {len(missing_papers)}")
print(f"Papers in papers.json with null github that have github in readme: {len(github_null_with_readme)}")

# ── Missing papers detail ────────────────────────────────────────────────

print("\n" + "-" * 80)
print(f"MISSING PAPERS (in awesome-readme.md but NOT in papers.json): {len(missing_papers)}")
print("-" * 80)

for i, mp in enumerate(missing_papers, 1):
    print(f"\n{i}. [{mp['category']}] {mp['design']} - {mp['title']}")
    print(f"   arXiv: {mp['arxiv_url'] or '(none)'}")
    print(f"   GitHub: {mp['github_url'] or '(none)'}")
    print(f"   Website: {mp['website_url'] or '(none)'}")

# ── GitHub null papers detail ────────────────────────────────────────────

print("\n" + "-" * 80)
print(f"PAPERS IN JSON WITH NULL GITHUB BUT README HAS GITHUB: {len(github_null_with_readme)}")
print("-" * 80)

for i, gn in enumerate(github_null_with_readme, 1):
    print(f"\n{i}. [{gn['category']}] {gn['design']} - {gn['title']}")
    print(f"   arXiv: {gn['arxiv_url'] or '(none)'}")
    print(f"   README GitHub: {gn['readme_github']}")
    print(f"   JSON GitHub:   {gn['json_github']}")

# ── Summary ───────────────────────────────────────────────────────────────

print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
print(f"Found (already in B):    {len(found_papers)}")
print(f"Missing (not in B):      {len(missing_papers)}")
print(f"Null GitHub (B can fill): {len(github_null_with_readme)}")
print(f"Total in A:              {len(readme_papers)}")
