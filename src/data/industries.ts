// ============================================================================
// INDUSTRIES WE SERVE — shown on the Industries page and as a preview grid
// on the Home page.
//
// These are common industry categories a CA firm might serve — replace this
// list with the industries the firm actually has experience in. Remove any
// that don't apply; add more by copying an object below.
//
// HOW TO ADD AN INDUSTRY:
//   1. Copy one of the objects below.
//   2. Give it a unique `id` (lowercase, hyphenated).
//   3. Pick an `icon` from the ICON_MAP in
//      src/components/icons/ServiceIcons.tsx (or add a new one there).
//   4. `description` is optional — leave it as '' to show just the name.
// ============================================================================

import type { Industry } from '../types/content';

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: '',
    icon: 'manufacturing',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Construction',
    description: '',
    icon: 'real-estate',
  },
  {
    id: 'retail-fmcg',
    name: 'Retail & FMCG',
    description: '',
    icon: 'retail',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: '',
    icon: 'healthcare',
  },
  {
    id: 'it-technology',
    name: 'IT & Technology',
    description: '',
    icon: 'tech',
  },
  {
    id: 'ngo-trusts',
    name: 'NGOs & Charitable Trusts',
    description: '',
    icon: 'ngo',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    description: '',
    icon: 'hospitality',
  },
  {
    id: 'education',
    name: 'Education',
    description: '',
    icon: 'education',
  },
  {
    id: 'construction-infra',
    name: 'Infrastructure',
    description: '',
    icon: 'construction',
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    description: '',
    icon: 'logistics',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: '',
    icon: 'financial',
  },
];
