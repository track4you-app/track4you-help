import { defineConfig } from 'vitepress'
import { pt, ptSearch } from './locales/pt.mts'

// Enquanto a central não for publicada (Etapa 7), o site fica fora dos buscadores.
const PUBLISHED = process.env.HELP_PUBLISHED === 'true'

export default defineConfig({
  title: 'Central de Ajuda',
  titleTemplate: ':title | Track4you',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  sitemap: { hostname: 'https://help.track4you.app' },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-dark.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ...(PUBLISHED ? [] : [['meta', { name: 'robots', content: 'noindex, nofollow' }] as [string, Record<string, string>]]),
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: 'Track4you' },
    siteTitle: 'Central de Ajuda',
    search: {
      provider: 'local',
      // Um bloco por idioma; o inglês entra como `en: enSearch` junto com o locale.
      options: { locales: { root: ptSearch } },
    },
  },
  // PT-BR na raiz. O inglês está em ./locales/en.mts e entra aqui como `en: { ...en, link: '/en/' }`.
  locales: {
    root: pt,
  },
})
