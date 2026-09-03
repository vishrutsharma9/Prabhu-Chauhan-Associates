// ============================================================================
// KNOWLEDGE RESOURCES — articles, webinars, presentations, and guides shown
// on the Knowledge page.
//
// HOW TO ADD A RESOURCE:
//   1. Copy one of the objects below.
//   2. Give it a unique `id`.
//   3. Set `date` in YYYY-MM-DD format — the list is sorted newest-first
//      automatically.
//   4. Set `type` to one of: Article, Webinar, Presentation, Guide.
//   5. `url` should point to the resource itself (a PDF, a YouTube recording,
//      a blog post). Leave it as '' to show the card without a link, e.g.
//      for a "recording coming soon" entry.
//
// HOW TO REMOVE A RESOURCE: delete its object from the array.
// ============================================================================

import type { KnowledgeResource } from '../types/content';

export const knowledgeResources: KnowledgeResource[] = [
  {
    id: 'resource-1',
    title: '[Sample] Understanding the New GST Return Filing Process',
    type: 'Article',
    date: '2026-08-05',
    description:
      '[Replace with a real summary of the article — what it covers and who it is useful for.]',
    url: '',
  },
  {
    id: 'resource-2',
    title: '[Sample] Webinar: Income Tax Planning for FY 2026-27',
    type: 'Webinar',
    date: '2026-07-18',
    description:
      '[Replace with a real summary — topics covered, and a link to the recording once available.]',
    url: '',
  },
  {
    id: 'resource-3',
    title: '[Sample] Union Budget Highlights — Presentation',
    type: 'Presentation',
    date: '2026-06-20',
    description:
      '[Replace with a real summary of the presentation and its key takeaways.]',
    url: '',
  },
  {
    id: 'resource-4',
    title: '[Sample] A Founder\'s Guide to Company Incorporation',
    type: 'Guide',
    date: '2026-05-10',
    description:
      '[Replace with a real summary — a short guide covering the incorporation process step by step.]',
    url: '',
  },
];

/** Resources sorted newest-first — use this in components instead of the raw array. */
export const sortedKnowledgeResources = [...knowledgeResources].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
