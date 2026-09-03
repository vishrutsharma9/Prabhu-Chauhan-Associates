// ============================================================================
// SITE CONFIGURATION — firm name, contact details, hours, links, navigation.
//
// This is the SINGLE place to update firm-wide information. Every page
// (header, footer, contact page, structured data, etc.) reads from here,
// so changing a phone number or address once updates it everywhere.
//
// Replace every [PLACEHOLDER] below with real firm details before launch.
// Do NOT invent certifications, years of experience, or client names —
// leave those placeholders until the firm provides real content.
// ============================================================================

export const siteConfig = {
  // --- Identity -------------------------------------------------------
  firmName: 'Prabhu Chauhan & Associates',
  legalName: 'Prabhu Chauhan & Associates, Chartered Accountants',
  tagline: '[FIRM TAGLINE — e.g. "Clarity and Confidence in Every Financial Decision"]',
  foundingYear: '[FOUNDING YEAR]',
  registrationNumber: '[ICAI FIRM REGISTRATION NUMBER]',

  // Short paragraph used in the Home "About" section and meta descriptions.
  shortIntro:
    'Prabhu Chauhan & Associates is a Chartered Accountancy firm offering audit, taxation, ' +
    'GST, accounting, and business advisory services. We work closely with individuals, ' +
    'small businesses, and growing enterprises to keep their finances compliant, organized, ' +
    'and ready for what\'s next.',

  // Longer paragraph(s) for the Home "firm overview" section.
  // TODO: these two paragraphs are genuine draft copy (not a placeholder
  // instruction like elsewhere in this file), written without inventing
  // any specific facts — no founding year, numbers, or claims. Read them,
  // adjust the voice if it doesn't match how the firm actually talks to
  // clients, and fold in real specifics (founding story, focus areas)
  // once you're ready to firm them up.
  aboutParagraphs: [
    "Numbers rarely tell the whole story on their own — the context behind them does. " +
      'That\'s the work we focus on: not just closing the books or filing on time, but making ' +
      'sure you actually understand where you stand and what comes next. We work across the ' +
      'full range, from individuals managing personal tax to businesses navigating audits, ' +
      'GST, and the everyday complexity of staying compliant while trying to grow.',
    'Our approach stays the same regardless of the size of the engagement: clear communication, ' +
      'realistic timelines, and advice you can actually act on — not just a report to file away. ' +
      'You work directly with the people handling your numbers, not a rotating cast of contacts, ' +
      'because financial decisions are easier to make with someone who already knows your ' +
      'situation.',
  ],

  // --- Contact ----------------------------------------------------------
  address: {
    line1: 'B-23 Gayatri Vihar',
    line2: 'Bajarang Nagar',
    city: 'Kota',
    state: 'Rajasthan',
    postalCode: '324001',
    country: 'India',
  },

  // Display string kept separate so it can differ slightly from the
  // structured address fields above (e.g. line breaks for the footer).
  addressDisplay: 'B-23 Gayatri Vihar, Bajarang Nagar, Kota, Rajasthan – 324001',

  // Keep phoneHref in E.164-ish "tel:" format (no spaces) so click-to-call
  // works on mobile.
  phoneDisplay: '+91 94140 78104',
  phoneHref: 'tel:+919414078104',

  emailDisplay: 'cagauravtripathi2000@gmail.com',
  emailHref: 'mailto:cagauravtripathi2000@gmail.com',

  // Careers-specific inbox. Defaults to the general email — update if the
  // firm uses a separate address (e.g. careers@yourfirm.com).
  careersEmailDisplay: 'cagauravtripathi2000@gmail.com',
  careersEmailHref: 'mailto:cagauravtripathi2000@gmail.com',

  officeHours: [
    { days: 'Monday – Friday', hours: '10:00 AM – 6:30 PM' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
  ],

  // Pin for the office address above (25.180313, 75.862296 — from the
  // Google Maps share link). To update: get a new share link (or lat/lng)
  // from Google Maps and swap the coordinates in this URL, or go through
  // Share > Embed a map on Maps and paste the URL inside its src="...".
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=25.180313,75.862296&z=17&output=embed',

  // --- Forms --------------------------------------------------------------
  // This site has no backend, so the contact and careers forms are placeholders
  // for a Google Form. Create a Google Form with matching fields, click
  // Send > Embed <> and paste the iframe "src" URL below.
  // See README.md → "Connecting the contact and careers forms".
  contactGoogleFormEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSel-pL0xcgUs388CchBxeGpZ-DbPawh7ZidGgMcK5SkL3Dwkw/viewform?embedded=true',
  contactGoogleFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSel-pL0xcgUs388CchBxeGpZ-DbPawh7ZidGgMcK5SkL3Dwkw/viewform',
  // TODO: add the careers application Google Form link once created.
  careersGoogleFormUrl: '',

  // --- Social / external links (optional — leave '' to hide the icon) -----
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
  },

  // --- Navigation -----------------------------------------------------
  // Shared by the header (desktop + mobile) and the footer quick links.
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Knowledge', path: '/knowledge' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
