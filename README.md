# edwin-do

Modern portfolio site built with Next.js and deployed to GitHub Pages.

## Overview

This site highlights:
- Professional experience
- Skills grouped by category
- Personal interests
- Contact and social links

## Tech Stack

- Next.js (App Router, TypeScript)
- React
- CSS (custom design tokens + responsive layout)
- Next Metadata routes (`robots`, `sitemap`, `manifest`)

## Key Features

- Responsive hero section with profile image and impact metrics
- Timeline-style experience section with:
  - Company logo + company name
  - Current-role badge (`Present`)
  - Per-role skills chips
  - Collapsible impact highlights (for non-current roles)
- Visual skills cards and chips
- Updated favicon/brand mark and metadata for social sharing
- Accessibility support (focus states, skip link, reduced motion)

## Project Structure

- `app/` - routes, layout, global styles, metadata routes
- `components/` - UI sections and shared components
- `data/` - typed content models and portfolio data
- `public/` - static assets (images, icons, resume)
- `.github/workflows/deploy-pages.yml` - GitHub Pages CI/CD

## Local Development

### Requirements

- Node.js `>= 20.9.0`
- npm

### Commands

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

This project uses static export via:
- `next.config.ts` -> `output: "export"`
- `next.config.ts` -> `images.unoptimized: true`

Build output is generated in `out/`.

## Deployment (GitHub Pages)

Deployment is configured through GitHub Actions:
- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: pushes to `main` or `master`
- Artifact: `out/`

### GitHub Settings

In your repository settings:
1. Go to **Settings -> Pages**
2. Set **Source** to **GitHub Actions**

## Metadata Routes and Static Export

For compatibility with static export, these routes are configured with `force-static`:
- `app/robots.ts`
- `app/sitemap.ts`
- `app/manifest.ts`

## Author

Edwin Do
