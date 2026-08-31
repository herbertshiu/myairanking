# Search Visibility Guide

A bilingual (English / 中文) SEO & GEO reference site built with [Astro](https://astro.build).

## Languages

Use the **English | 中文** switcher in the header. Both languages share the same URLs — content toggles on the page.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview production build
```

For production builds with canonical URLs and sitemap:

```bash
SITE_URL=https://myairanking.hk npm run build
```

## Project Structure

```
src/
  i18n/              # Locale config, UI strings
  content/
    insights/        # English articles
    insights-zh/     # Chinese articles
  pages/             # Site routes
```
