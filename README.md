# [FIRM NAME] — Website

A static Chartered Accountancy firm website built with **React + TypeScript + Vite**. No backend, no database, no CMS — content lives directly in the source code and the site is deployed as static files via **GitHub Pages**.

> **New to this project?** The most important thing to know: almost everything you'll want to edit (firm name, address, phone, services, updates, job openings) lives in the `src/data/` folder. You rarely need to touch anything else.

---

## 1. Project structure

```
├── index.html                # Static <head> (title/meta defaults, favicon, JSON-LD, GH Pages redirect script)
├── public/                   # Files copied as-is to the build output
│   ├── images/
│   │   └── ca-india-logo.png  # Logo mark used in header/footer/favicon — replace with the firm's own logo
│   ├── 404.html               # GitHub Pages SPA redirect (do not remove — see §6)
│   ├── robots.txt
│   └── .nojekyll              # Tells GitHub Pages not to run Jekyll processing
├── src/
│   ├── data/                 # ALL EDITABLE CONTENT LIVES HERE
│   │   ├── siteConfig.ts      # Firm name, tagline, address, phone, email, hours, nav, forms
│   │   ├── services.ts        # Services shown on Home + Services page + their detail pages
│   │   ├── industries.ts      # Industries shown on Home + Industries page
│   │   ├── knowledge.ts       # Articles/webinars/etc. shown on the Knowledge page
│   │   ├── updates.ts         # "Latest Updates" items shown on Home
│   │   ├── careers.ts         # Job openings shown on Careers page
│   │   └── liveNews.json      # Auto-generated — see scripts/fetch-live-news.mjs. Don't hand-edit.
│   ├── types/content.ts       # Shared TypeScript shapes for the data above
│   ├── components/            # Reusable UI: Header, Footer, cards, contact form, icons
│   ├── pages/                 # One file per route: Home, Services, ServiceDetail, Industries,
│   │                            # Knowledge, Contact, Careers, NotFound
│   ├── hooks/                  # Small helpers (per-page <title>/meta, scroll-reveal animation)
│   ├── App.tsx                 # Route definitions
│   └── main.tsx                 # App entry point
├── scripts/fetch-live-news.mjs   # Fetches live GST circulars — see §3 "Live GST circulars" below
└── .github/workflows/
    ├── deploy.yml                # Builds and deploys to GitHub Pages on every push to main
    └── fetch-news.yml            # Scheduled job that refreshes liveNews.json and redeploys
```

**Design principle:** content (`src/data/`) is kept separate from presentation (`src/components/`, `src/pages/`, and each component's colocated `.css` file), so you can update firm information without touching any styling code.

---

## 2. Running the site locally

Requirements: [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot-reload — edit any file and the browser updates automatically.

Other commands:

```bash
npm run build     # Type-checks and builds the production site into dist/
npm run preview   # Serves the dist/ build locally, to sanity-check a production build
npm run lint       # Runs the linter
```

---

## 3. Editing content

### Firm details (name, tagline, address, phone, email, hours, nav, social links)

Edit **`src/data/siteConfig.ts`**. Every field has a `[PLACEHOLDER]` value and a comment explaining what to put there. This is a single source of truth — the header, footer, contact page, and structured data (SEO) all read from this file, so updating a phone number here updates it everywhere.

Two spots outside this file also need manual updates if you change firm name/description, because they can't import TypeScript:
- `index.html` — the default `<title>`, meta description, Open Graph tags, and JSON-LD block at the top of `<head>`.
- These are only the *fallback* values used before the page's JavaScript runs (see `src/hooks/useDocumentHead.ts`, which overwrites them per-page) — but should still be kept accurate for SEO and for the fallback the site shows if JavaScript is disabled.

### Adding a new service

Open **`src/data/services.ts`** and copy one of the existing objects in the `services` array:

```ts
{
  id: 'my-new-service',            // unique, lowercase, hyphenated — also becomes the URL /services/my-new-service
  title: 'My New Service',
  shortDescription: 'One or two sentences shown on the card.',
  detailedDescription: 'Longer copy shown on the service\'s own detail page.',
  icon: 'advisory',                 // pick an existing icon name (see below) or add a new one
}
```

Each service card's "Read More" link automatically points to `/services/<id>`, which renders `src/pages/ServiceDetail.tsx` — you don't need to create a page per service, just add the data.

Available icon names are the keys in `ICON_MAP` inside `src/components/icons/ServiceIcons.tsx` (`audit`, `tax`, `gst`, `bookkeeping`, `compliance`, `advisory`, `financial`, plus a set of industry icons — see below). To add a new icon, add a small inline SVG component there and register it in `ICON_MAP`.

To remove a service, delete its object from the array. To reorder, change the order of the objects — cards render in array order. The Home page automatically shows the first 6 services as a preview.

### Adding a new industry

Open **`src/data/industries.ts`** and copy one of the existing objects in the `industries` array:

```ts
{
  id: 'my-new-industry',           // unique, lowercase, hyphenated
  name: 'My New Industry',
  description: '',                  // optional one-sentence note — leave '' to show just the name
  icon: 'manufacturing',             // pick an existing icon name from ICON_MAP, or add a new one
}
```

The Home page shows the first 8 industries as a preview, with a link to the full Industries page. To remove an industry, delete its object.

### Adding a knowledge resource (article, webinar, presentation, guide)

Open **`src/data/knowledge.ts`** and copy one of the existing objects in the `knowledgeResources` array:

```ts
{
  id: 'resource-5',
  title: 'Understanding TDS on Property Purchases',
  type: 'Article',                  // one of: Article, Webinar, Presentation, Guide
  date: '2026-09-01',                // YYYY-MM-DD — list is sorted newest-first automatically
  description: 'Short 1-2 sentence summary.',
  url: 'https://...',                 // link to the resource — leave '' to hide the "View" link
}
```

To remove a resource, delete its object.

### Adding a new "Latest Update"

Open **`src/data/updates.ts`** and copy one of the objects in the `updates` array:

```ts
{
  id: 'update-5',
  title: 'GST Annual Return Due Date Extended',
  date: '2026-09-01',              // YYYY-MM-DD — list is sorted newest-first automatically
  category: 'GST Update',           // one of: Announcement, Tax Update, GST Update, Firm News, Regulatory Update
  description: 'Short 1-2 sentence summary.',
  readMoreUrl: 'https://...',        // optional — omit to hide the "Read More" link
}
```

The Home page shows the "Latest Updates" section near the top, right below the hero: the most recent update as a large featured card, plus the next 3 in a compact list (`src/components/UpdatesShowcase.tsx`). To remove an update, delete its object. You don't need to worry about ordering — entries are sorted by `date` automatically.

### Live GST circulars (auto-updating, no backend)

Below your own updates, the Home page also shows a small "Live GST Circulars" list — the official "What's New" notifications from the CBIC GST portal (`cbic-gst.gov.in`), refreshed automatically on a schedule. This is genuinely live (not hand-written), but it's still a fully static site at runtime — here's how:

- **`scripts/fetch-live-news.mjs`** fetches the CBIC GST homepage, extracts the circular titles + links, and writes them to `src/data/liveNews.json`.
- **`.github/workflows/fetch-news.yml`** runs that script on a daily schedule (and can be triggered manually from the Actions tab → "Refresh Live GST Circulars" → Run workflow), commits the updated JSON if it changed, and then triggers `deploy.yml` to republish the site.
- The site itself never calls any external API at runtime — `src/components/LiveNewsFeed.tsx` just renders the static JSON that was baked in at the last scheduled sync. No CORS issues, no exposed keys, no third-party runtime dependency.
- Run `npm run fetch-news` to refresh `src/data/liveNews.json` locally at any time.

**Why CBIC specifically, and not a commercial source like Taxmann or a Google News feed:** both were investigated and ruled out — Taxmann's live data comes from an internal, authenticated API with no public access or CORS support (and is paid subscription content, not free to redisplay), and Google News' RSS feed explicitly restricts use to "personal, non-commercial" feed readers. CBIC's GST portal is official government content, and its Terms & Conditions explicitly permit linking to it without prior permission — we only show circular *titles* (factual labels) linking to the government's own PDFs, nothing is reproduced. See the comments at the top of `scripts/fetch-live-news.mjs` for the full reasoning.

One honest limitation: CBIC's page doesn't expose a per-item publish date, so the "Synced {date}" label reflects when *this site* last checked — not when a given circular was actually issued (the PDFs themselves state their own effective dates).

### Adding a career opening

Open **`src/data/careers.ts`** and copy one of the objects in the `careers` array:

```ts
{
  id: 'job-4',
  position: 'Senior Tax Associate',
  location: 'Mumbai, Maharashtra',
  experience: '3–5 years',
  employmentType: 'Full-time',
  description: 'Short description of responsibilities.',
  applyUrl: `mailto:${siteConfig.careersEmailDisplay}?subject=Application: Senior Tax Associate`,
}
```

To remove a listing, delete its object. If the `careers` array is empty (`[]`), the Careers page automatically shows a friendly "no current openings" message instead of an empty grid — you don't need to handle that yourself.

### Updating contact information

All of it lives in `src/data/siteConfig.ts` — `address`, `addressDisplay`, `phoneDisplay`/`phoneHref`, `emailDisplay`/`emailHref`, `officeHours`, and `googleMapsEmbedUrl`. See §5 below for the Google Maps embed specifically.

### Updating the logo and favicon

The logo used in the header, footer, and browser-tab favicon is a single file: `public/images/ca-india-logo.png`. To replace it with the firm's own logo:

1. Save the new logo as a PNG (ideally with a transparent background) and replace `public/images/ca-india-logo.png` with it — keep the same filename, or update the three references below if you rename it.
2. It's referenced in three places: `src/components/Header.tsx`, `src/components/Footer.tsx`, and the `<link rel="icon">` tag in `index.html`.
3. The header shows it directly (works best on a light background); the footer wraps it in a small white "plate" (`.site-footer__logo-plate` in `Footer.css`) since the current logo is drawn for a light background — remove that wrapper if the new logo already works on a dark background.
4. It's also used in the splash screen (`src/components/SplashScreen.tsx`) — see below.

### The splash screen

A brief logo/name reveal shown once per browser tab session when the site first loads (`src/components/SplashScreen.tsx`) — it doesn't reappear on internal navigation (React Router doesn't reload the page for that), and it's skipped instantly for visitors with "reduce motion" enabled in their OS/browser settings.

- To change how long it stays visible, edit `VISIBLE_MS` and `FADE_MS` at the top of `SplashScreen.tsx` (`FADE_MS` must also match the `.is-leaving` animation duration in `SplashScreen.css`).
- To remove it entirely, delete the `<SplashScreen />` line in `src/App.tsx` (and optionally the component files).

---

## 4. Connecting the contact and careers forms (no backend required)

This site has **no backend or database**, so both forms are designed to work without one:

- **Contact page form** (`src/components/ContactForm.tsx`): by default, submitting the form opens the visitor's email app with a pre-filled message addressed to the firm's email. Nothing is stored or sent through the website itself.
- **Careers "Apply Now" buttons**: link to a `mailto:` address with a pre-filled subject line (see `src/data/careers.ts`).

### Optional: switch the contact form to an embedded Google Form

1. Create a Google Form with fields matching Name, Email, Phone, Service Required, Message.
2. In the Form editor: **Send → Embed `<>`** and copy the URL inside `src="..."`.
3. Paste that URL into `contactGoogleFormEmbedUrl` in `src/data/siteConfig.ts`.
4. The Contact page will automatically render the embedded Google Form instead of the built-in form — no code changes needed.

You can do the same for careers applications by creating a Google Form and linking to it from `applyUrl` in `src/data/careers.ts` (a normal `https://forms.gle/...` link works fine, in addition to or instead of a `mailto:` link).

---

## 5. Adding the Google Maps embed

1. Open [Google Maps](https://maps.google.com), search for the firm's address.
2. Click **Share → Embed a map**, then copy the URL inside the `<iframe src="...">` code it gives you.
3. Paste that URL into `googleMapsEmbedUrl` in `src/data/siteConfig.ts`.

Until you do this, the Contact page shows a clearly labeled placeholder instead of a broken/empty map.

---

## 6. Deploying to GitHub Pages

This repo includes a ready-to-use GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes it automatically on every push to `main`.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions** (not "Deploy from a branch").
4. Push to `main` (or re-run the workflow manually from the **Actions** tab). The site will build and deploy automatically — the deployed URL is shown in the workflow run summary.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### About the GitHub Pages "SPA redirect" trick

Because this is a React single-page app, and GitHub Pages has no server-side routing, a direct visit or refresh on a URL like `/services` would normally 404. This project includes a small, well-established workaround ([rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)):

- `public/404.html` — GitHub Pages serves this automatically for any unknown path, and it redirects back to `index.html` while preserving the intended URL.
- The script at the top of `index.html`'s `<head>` — reads that preserved URL back out and restores it, so React Router ends up on the right page.

You don't need to understand or touch this to maintain the site — just don't delete `public/404.html` or the matching script in `index.html`.

---

## 7. Connecting your existing domain

You said you already own a domain and will connect it later. Once you're ready:

1. In the repo, go to **Settings → Pages → Custom domain**, and enter your domain (e.g. `yourfirm.com` or `www.yourfirm.com`). GitHub will create a `CNAME` file in the repo automatically (or add one yourself to `public/CNAME` containing just the domain name).
2. At your domain registrar / DNS provider, add the DNS records GitHub's Pages settings page asks for:
   - For an **apex domain** (`yourfirm.com`): four `A` records pointing to GitHub's IP addresses (shown in the Pages settings page).
   - For a **subdomain** (`www.yourfirm.com`): a `CNAME` record pointing to `<your-username>.github.io`.
3. Wait for DNS to propagate (can take a few minutes to a few hours), then enable **Enforce HTTPS** in the same Pages settings page once GitHub shows the certificate as ready.

This project's `vite.config.ts` is already set up with `base: '/'`, which is correct for a custom domain served at the root. You only need to change this if you deploy **without** a custom domain (i.e., at `https://<username>.github.io/<repo-name>/`) — in that case, change `base` to `/<repo-name>/` and `pathSegmentsToKeep` in `public/404.html` to `1`.

---

## 8. SEO notes

- Each page sets its own `<title>` and meta description at runtime via `src/hooks/useDocumentHead.ts`.
- `index.html` contains fallback title/description/Open Graph tags and a JSON-LD `AccountingService` structured data block — update these placeholders alongside `siteConfig.ts`.
- `public/robots.txt` allows all crawling; add a real sitemap URL there once you have one.
- All interactive icons are decorative SVGs paired with visible text labels (no meaningful images requiring alt text are used yet) — if you add photos or a logo image, remember to give them descriptive `alt` text.

---

## 9. Before you consider a change "done"

A quick checklist worth re-running after any content or design change:

- [ ] `npm run build` completes with no errors
- [ ] All nav links (Home, Services, Industries, Knowledge, Careers, Contact Us) work
- [ ] Mobile menu opens/closes correctly at a narrow viewport
- [ ] No console errors in the browser dev tools
- [ ] Any new images have `alt` text
- [ ] Placeholder text (`[LIKE THIS]`) you meant to replace is actually replaced
