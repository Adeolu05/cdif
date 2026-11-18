import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { coreProgrammes, siteUrl as canonicalSite } from './src/data/cdifData.js'

const siteUrl = (process.env.SITE_URL || canonicalSite).replace(/\/$/, '')

const sitemapPaths = [
  '/',
  '/about',
  '/programmes',
  ...coreProgrammes.map((programme) => `/programmes/${programme.id}`),
  '/mega-ict-island',
  '/impact',
  '/transparency',
  '/get-involved',
  '/contact',
  '/privacy-policy',
]

/* Link previews and sitemaps use the official domain, not the *.vercel.app host. */
function siteMeta() {
  return {
    name: 'cdif-site-meta',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    generateBundle() {
      const sitemapLine = siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${sitemapLine}` })

      if (!siteUrl) return
      const urls = sitemapPaths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
    /* Vercel serves 404.html with a 404 status for paths no rewrite matches; the app then renders NotFoundPage. */
    writeBundle(options) {
      copyFileSync(join(options.dir, 'index.html'), join(options.dir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMeta()],
  build: {
    /* Hashed JS/CSS live apart from public/assets/media so vercel.json can cache them forever */
    assetsDir: 'static',
  },
  server: {
    open: true,
  },
})
