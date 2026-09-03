// Inline SVG icons shared by service AND industry cards (both just need an
// icon name + className). Kept dependency-free — no icon library needed.
//
// To add a new icon: add a key to ICON_MAP pointing at a small SVG, then
// reference that key from a service's `icon` field in src/data/services.ts,
// or an industry's `icon` field in src/data/industries.ts.

import type { JSX } from 'react';

type IconProps = { className?: string };

const AuditIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="9" y="6" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M14 14h12M14 20h12M14 26h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 30l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TaxIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
    <path d="M15 25L25 15M16 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM24 26a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GstIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 6l12 6v8c0 8-5.4 13.6-12 16-6.6-2.4-12-8-12-16v-8l12-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M15 20l3.5 3.5L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookkeepingIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M9 10a2 2 0 012-2h12l6 6v16a2 2 0 01-2 2H11a2 2 0 01-2-2V10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M23 8v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 22h9M14 26h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ComplianceIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 5l11 4v9c0 8.5-5.5 13.8-11 17-5.5-3.2-11-8.5-11-17V9l11-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M20 13v8M20 25h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AdvisoryIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M8 27V16a3 3 0 013-3h9l7-5v24l-7-5h-9a3 3 0 01-3-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M28 15a5 5 0 010 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FinancialIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M7 30V17M15 30V10M23 30V21M31 30V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 30h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DefaultIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="7" y="7" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// --- Industry icons (used on the Industries page/preview) -------------------

const ManufacturingIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M6 33V19l8 6v-6l8 6V13l8 8v12H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 33h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RealEstateIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M8 18l12-9 12 9v14a2 2 0 01-2 2H10a2 2 0 01-2-2V18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 34V23h8v11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const RetailIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M8 13h24l-2 8H10l-2-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M8 13l-2-5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="27" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="27" cy="27" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const HealthcareIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 8v10M15 13h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 13a3 3 0 013-3h16a3 3 0 013 3v16a3 3 0 01-3 3H12a3 3 0 01-3-3V13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 24h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TechIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="9" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M14 33h12M20 27v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const NgoIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 32s-11-6.5-11-15a6.5 6.5 0 0111-4.7A6.5 6.5 0 0131 17c0 8.5-11 15-11 15z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const HospitalityIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M7 30V15a2 2 0 012-2h22a2 2 0 012 2v15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 30h26M12 21a3 3 0 016 0v2h-6v-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EducationIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M4 15l16-7 16 7-16 7-16-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M11 19v7c0 2 4 4 9 4s9-2 9-4v-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const ConstructionIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M6 34l16-22 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 22l10 12M27 12l7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LogisticsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M5 12h17v16H5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 18h7l6 6v4h-13v-10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="30" r="2.4" stroke="currentColor" strokeWidth="2" />
    <circle cx="28" cy="30" r="2.4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ICON_MAP: Record<string, (props: IconProps) => JSX.Element> = {
  audit: AuditIcon,
  tax: TaxIcon,
  gst: GstIcon,
  bookkeeping: BookkeepingIcon,
  compliance: ComplianceIcon,
  advisory: AdvisoryIcon,
  financial: FinancialIcon,
  manufacturing: ManufacturingIcon,
  'real-estate': RealEstateIcon,
  retail: RetailIcon,
  healthcare: HealthcareIcon,
  tech: TechIcon,
  ngo: NgoIcon,
  hospitality: HospitalityIcon,
  education: EducationIcon,
  construction: ConstructionIcon,
  logistics: LogisticsIcon,
};

/** Renders the icon registered for `name` in ICON_MAP, falling back to a generic square. */
export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? DefaultIcon;
  return <Icon className={className} />;
}
