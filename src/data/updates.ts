// ============================================================================
// LATEST UPDATES — announcements, tax/GST updates, firm news, regulatory
// updates. Shown on the Home page, most recent first.
//
// HOW TO ADD AN UPDATE:
//   1. Copy one of the objects below.
//   2. Give it a unique `id`.
//   3. Set `date` in YYYY-MM-DD format — the list is sorted newest first
//      automatically, so you can add entries in any order.
//   4. Pick a `category` (one of: Announcement, Tax Update, GST Update,
//      Firm News, Regulatory Update) — it controls the badge shown on the card.
//   5. `readMoreUrl` is optional — omit it (or leave it out) to hide the
//      "Read More" link, e.g. for a short firm-news item with no source page.
//
// HOW TO REMOVE AN UPDATE: delete its object from the array.
// ============================================================================

import type { UpdateItem } from '../types/content';

export const updates: UpdateItem[] = [
  {
    id: 'update-1',
    title: '[Sample] GST Return Filing Due Date Extended',
    date: '2026-08-10',
    category: 'GST Update',
    description:
      '[Replace with a short, accurate summary of the update — 1-2 sentences. Link to the official notification using "readMoreUrl" below.]',
    readMoreUrl: '',
  },
  {
    id: 'update-2',
    title: '[Sample] Firm Now Offering Virtual CFO Services',
    date: '2026-07-22',
    category: 'Firm News',
    description:
      '[Replace with real firm news — a new service line, office, team member, or milestone.]',
  },
  {
    id: 'update-3',
    title: '[Sample] Key Highlights of the Latest Union Budget',
    date: '2026-06-15',
    category: 'Tax Update',
    description:
      '[Replace with a short summary of tax changes relevant to your clients. Keep it factual and cite the official source via "readMoreUrl".]',
    readMoreUrl: '',
  },
  {
    id: 'update-4',
    title: '[Sample] Office Closed for a Public Holiday',
    date: '2026-06-01',
    category: 'Announcement',
    description:
      '[Replace with real announcements — office closures, extended hours during filing season, etc.]',
  },
];

/** Updates sorted newest-first — use this in components instead of the raw array. */
export const sortedUpdates = [...updates].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
