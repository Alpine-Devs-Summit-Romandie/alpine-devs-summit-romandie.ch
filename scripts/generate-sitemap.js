#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Emplacement du script (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Domaine canonical (peut être surchargé avec la variable d'environnement SITEMAP_HOST)
const host = (process.env.SITEMAP_HOST || 'https://alpine-devs-summit-romandie.ch').replace(/\/$/, '');

const outDir = path.resolve(__dirname, '..', 'public');
const outFile = path.join(outDir, 'sitemap.xml');

// Routes statiques détectées dans le projet — adapte si tu ajoutes d'autres pages
const routes = [
  '/',
  '/mission',
  '/sondage'
];

// Date au format YYYY-MM-DD
const lastmod = new Date().toISOString().split('T')[0];

const entries = routes.map(route => {
  const loc = host + route;
  const priority = route === '/' ? '1.0' : '0.8';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Sitemap généré par scripts/generate-sitemap.js -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(outFile, xml, 'utf8');
console.log(`Sitemap généré : ${outFile}`);

