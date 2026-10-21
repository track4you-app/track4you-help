import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { APP_URL, SUPPORT_URL, sidebarFor } from '../structure'

// Inglês: pronto, mas ainda NÃO registrado em config.mts.
// Para ligar: traduzir os títulos em structure.ts, criar docs/en/<mesma árvore>.md
// e adicionar `en: { ...en, link: '/en/' }` em `locales` no config.mts.
export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } = {
  label: 'English',
  lang: 'en-US',
  title: 'Help Center',
  description: 'Step-by-step guides to set up your channel, pixel and funnels on Track4you.',
  themeConfig: {
    nav: [
      { text: 'Getting started', link: '/en/getting-started/first-funnel' },
      { text: 'Troubleshooting', link: '/en/troubleshooting/no-pageviews' },
      { text: 'FAQ', link: '/en/faq/faq' },
      { text: 'Support', link: SUPPORT_URL },
      { text: 'Open the app', link: APP_URL },
    ],
    sidebar: sidebarFor('en', '/en'),
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: `Didn't find it? <a href="${SUPPORT_URL}">Talk to support on WhatsApp</a>.`,
      copyright: `© ${new Date().getFullYear()} Track4you`,
    },
  },
}

export const enSearch = {
  translations: {
    button: { buttonText: 'Search', buttonAriaLabel: 'Search the help center' },
    modal: { noResultsText: 'No results for' },
  },
}
