// ============================================================================
// CAREER OPENINGS — shown as job cards on the Careers page.
//
// HOW TO ADD AN OPENING:
//   1. Copy one of the objects below.
//   2. Give it a unique `id`.
//   3. Fill in the fields. `applyUrl` should be a mailto: link (with a
//      pre-filled subject is fine) or a Google Form URL — see
//      src/data/siteConfig.ts for the shared careers email/form.
//
// HOW TO REMOVE AN OPENING: delete its object from the array.
// HOW TO SHOW "NO OPENINGS": leave the array empty ([]) — the Careers page
// automatically displays a friendly "no current openings" message.
// ============================================================================

import type { JobOpening } from '../types/content';
import { siteConfig } from './siteConfig';

export const careers: JobOpening[] = [
  {
    id: 'job-1',
    position: '[Sample] Semi-Qualified CA / Audit Associate',
    location: '[CITY, STATE]',
    experience: '1–3 years',
    employmentType: 'Full-time',
    description:
      '[Replace with a real job description — key responsibilities, and what kind of engagements the role covers, e.g. statutory and tax audits across client industries.]',
    applyUrl: `mailto:${siteConfig.careersEmailDisplay}?subject=Application: Semi-Qualified CA / Audit Associate`,
  },
  {
    id: 'job-2',
    position: '[Sample] Article Assistant',
    location: '[CITY, STATE]',
    experience: '0 years (Articleship)',
    employmentType: 'Articleship',
    description:
      '[Replace with a real description of the articleship — exposure areas, mentorship structure, and expectations.]',
    applyUrl: `mailto:${siteConfig.careersEmailDisplay}?subject=Application: Article Assistant`,
  },
  {
    id: 'job-3',
    position: '[Sample] Tax & GST Executive',
    location: '[CITY, STATE] / Remote',
    experience: '2–4 years',
    employmentType: 'Full-time',
    description:
      '[Replace with a real description — direct/indirect tax compliance, return filing, and client coordination responsibilities.]',
    applyUrl: `mailto:${siteConfig.careersEmailDisplay}?subject=Application: Tax %26 GST Executive`,
  },
];
