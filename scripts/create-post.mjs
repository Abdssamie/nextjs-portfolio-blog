import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const title = args[0];

if (!title) {
  console.error('Please provide a post title.');
  console.error('Usage: npm run new-post "Your Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const date = new Date().toISOString().split('T')[0];
const targetDir = path.join(process.cwd(), 'content', 'blog');
const targetPath = path.join(targetDir, `${slug}.mdx`);

if (fs.existsSync(targetPath)) {
  console.error(`Error: Post already exists at ${targetPath}`);
  process.exit(1);
}

const template = `---
title: "${title}"
description: "Briefly describe the business problem and the solution."
date: "${date}"
author: "Abdessamie"
image: "/blog/default-thumbnail.png"
tags: ["Architecture", "Performance", "Case Study"]
---

# ${title}

## The Problem
*Describe the specific business challenge. e.g., "The client's dashboard took 10 seconds to load, causing a 20% drop-off rate."*

## The Solution
*High-level overview of the technical approach.*

## Technical Implementation
*Key code snippets and architectural decisions.*

## The Result
*Hard numbers. e.g., "Reduced load time by 80%, increasing conversion by 5%."*
`;

fs.writeFileSync(targetPath, template);

console.log(`✅ Created new post: ${targetPath}`);
