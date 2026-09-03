#!/usr/bin/env node
// ============================================================================
// Fetches the "What's New" list of GST circulars/notifications from the
// official CBIC GST portal (cbic-gst.gov.in) and writes it to
// src/data/liveNews.json as plain data for the site to render.
//
// This runs on a schedule via .github/workflows/fetch-news.yml — NOT at
// request time — so the deployed site stays fully static. Run it manually
// with `node scripts/fetch-live-news.mjs` to refresh the data locally.
//
// Source: cbic-gst.gov.in is run by the Central Board of Indirect Taxes &
// Customs (Government of India). Their Terms & Conditions explicitly permit
// linking to their content without prior permission (see
// https://cbic-gst.gov.in/terms.html). We only extract circular titles
// (factual labels) and links to the government's own PDFs — no article
// content is reproduced.
//
// The source page does not expose a per-item publish date, so `updatedAt`
// in the output reflects when THIS SCRIPT last synced — not when a given
// circular was actually issued. Be careful not to present it otherwise.
// ============================================================================

import { load } from 'cheerio';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const SOURCE_URL = 'https://cbic-gst.gov.in/';
const SOURCE_NAME = 'CBIC – GST Portal';
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'data',
  'liveNews.json'
);
const MAX_ITEMS = 6;

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PrabhuChauhanAssociatesSiteBot/1.0)' },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();
  const $ = load(html);

  const items = $('#vmarquee li a')
    .map((_, el) => {
      const $el = $(el);
      const title = $el.text().replace(/\s+/g, ' ').trim();
      const href = $el.attr('href');
      if (!title || !href) return null;
      return { title, link: new URL(href, SOURCE_URL).toString() };
    })
    .get()
    .filter(Boolean)
    .slice(0, MAX_ITEMS);

  if (items.length === 0) {
    throw new Error('No items found — the page structure may have changed (expected #vmarquee li a).');
  }

  const data = {
    updatedAt: new Date().toISOString(),
    source: SOURCE_NAME,
    sourceUrl: SOURCE_URL,
    items,
  };

  await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`Wrote ${items.length} items to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('fetch-live-news failed:', err.message);
  process.exit(1);
});
