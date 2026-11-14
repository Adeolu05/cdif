import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { coreProgrammes } from './src/data/cdifData.js'

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = (process.env.SITE_URL || (productionHost ? `https://${productionHost}` : '')).replace(/\/$/, '')

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

/* Link previews and sitemaps need absolute URLs; set SITE_URL, or Vercel provides its production domain. */
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
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteMeta()],
  server: {
    open: true,
  },
})
