// ============================================================================
// SERVICES — shown on the Services page (full detail) and the Home page
// (preview cards, first 4 entries).
//
// HOW TO ADD A SERVICE:
//   1. Copy one of the objects below.
//   2. Give it a unique `id` (lowercase, hyphenated — used for the URL anchor).
//   3. Fill in title / shortDescription / detailedDescription.
//   4. Pick an `icon` name from src/components/icons/ServiceIcons.tsx
//      (or add a new icon there and reference its name here).
//
// HOW TO REMOVE A SERVICE: delete its object from the array.
// HOW TO REORDER: change the order of objects — cards render in array order.
// ============================================================================

import type { Service } from '../types/content';

export const services: Service[] = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription:
      'Independent statutory, internal, and tax audits that give stakeholders confidence in your financial statements.',
    detailedDescription:
      '[Expand with the firm\'s real audit approach — e.g. statutory audits under the Companies Act, tax audits under the Income Tax Act, internal audits, stock audits, and concurrent audits. Describe the methodology and industries served once available.]',
    icon: 'audit',
  },
  {
    id: 'taxation',
    title: 'Taxation',
    shortDescription:
      'Direct tax planning, return filing, and representation services for individuals, firms, and companies.',
    detailedDescription:
      '[Expand with real details — e.g. income tax return filing, tax planning and advisory, assessment and appeal representation, TDS compliance, and international taxation if applicable.]',
    icon: 'tax',
  },
  {
    id: 'gst-indirect-tax',
    title: 'GST & Indirect Tax',
    shortDescription:
      'End-to-end GST compliance, advisory, and litigation support to keep your business audit-ready.',
    detailedDescription:
      '[Expand with real details — e.g. GST registration, monthly/annual return filing, reconciliation, refund claims, and representation before GST authorities.]',
    icon: 'gst',
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription:
      'Accurate, up-to-date books of accounts so you always know where your business stands financially.',
    detailedDescription:
      '[Expand with real details — e.g. day-to-day bookkeeping, monthly MIS reports, payroll processing, and accounting software setup/migration.]',
    icon: 'bookkeeping',
  },
  {
    id: 'corporate-compliance',
    title: 'Corporate & Compliance Services',
    shortDescription:
      'Company incorporation, secretarial compliance, and regulatory filings handled end to end.',
    detailedDescription:
      '[Expand with real details — e.g. company/LLP incorporation, ROC filings, annual compliance calendars, FEMA/RBI filings, and corporate restructuring support.]',
    icon: 'compliance',
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory',
    shortDescription:
      'Practical, numbers-driven guidance to help growing businesses make sound financial decisions.',
    detailedDescription:
      '[Expand with real details — e.g. budgeting and forecasting, cost optimisation, business process improvement, and startup advisory.]',
    icon: 'advisory',
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory',
    shortDescription:
      'Structured support for fundraising, valuations, and financial due diligence.',
    detailedDescription:
      '[Expand with real details — e.g. business valuations, financial due diligence, fundraising support, and transaction advisory.]',
    icon: 'financial',
  },
];
