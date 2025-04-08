// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Define your pages
const pages = [
  { url: '/', priority: 1.0 },
  { url: '/core-assumptions', priority: 0.8 },
  { url: '/risk-areas', priority: 0.8 },
  { url: '/misuse', priority: 0.8 },
  { url: '/misalignment', priority: 0.8 },
  { url: '/safety-cases', priority: 0.8 },
  { url: '/benefits', priority: 0.7 },
  { url: '/about', priority: 0.6 }
];

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://agi-safety-security.vercel.app${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Ensure directory exists
const publicDir = path.resolve('./public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap file
fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://agi-safety-security.vercel.app/sitemap.xml`;

// Write robots.txt file
fs.writeFileSync(path.resolve('./public/robots.txt'), robotsTxt);

console.log('Sitemap and robots.txt generated successfully!');