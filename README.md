# CDIF website

Marketing site for Capacity Development Initiative for Families (CDIF), a community-based NGO registered with the Corporate Affairs Commission of Nigeria (CAC/IT/8601968).

Built with React 19, React Router 7 and Vite. Deployed on Vercel.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint     # oxlint
npm run preview  # serve the production build
```

## Where things live

- `src/data/cdifData.js`: all copy and facts (organisation details, contacts, bank details, programmes, stories, FAQs, reports). Edit content here.
- `public/assets/media/`: photos and videos referenced from the data file.
- `src/pages/`: one component per route; routes are declared in `src/App.jsx`.
- `src/components/`: header, footer, modals and shared sections.
- `src/index.css`: design tokens and shared layout classes.

## Content that is switched off until CDIF confirms it

- **Bank details**: fill in `orgDetails.bankDetails` and set `verified: true` to show them in the donate modal.
- **Phone, WhatsApp, address**: empty values are hidden everywhere.
- **CAC certificate**: set `fieldMedia.certificate` to show the "View CAC Certificate" buttons.
- **Financial reports**: add `href` and `size` to an entry in `transparencyReports` to enable its download.

## Absolute URLs

Link previews and `sitemap.xml` need the site's domain. On Vercel it is read from `VERCEL_PROJECT_PRODUCTION_URL` automatically; elsewhere set `SITE_URL` (for example `SITE_URL=https://example.org npm run build`).
