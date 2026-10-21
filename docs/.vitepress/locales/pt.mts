import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { APP_URL, SUPPORT_URL, sidebarFor } from '../structure'

// Textos de interface em PT-BR (raiz do site). Todo texto do tema mora aqui, nunca fixo no tema.
export const pt: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } = {
  label: 'Português (BR)',
  lang: 'pt-BR',
  title: 'Central de Ajuda',
  description: 'Guias passo a passo para configurar canal, pixel e funis na Track4you, entender suas métricas e resolver problemas.',
  themeConfig: {
    nav: [
      { text: 'Começando', link: '/getting-started/first-funnel' },
      { text: 'Problemas', link: '/troubleshooting/no-pageviews' },
      { text: 'Dúvidas', link: '/faq/faq' },
      { text: 'Suporte', link: SUPPORT_URL },
      { text: 'Acessar o app', link: APP_URL },
    ],
    sidebar: sidebarFor('pt'),
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Atualizado em', formatOptions: { dateStyle: 'short' } },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
    langMenuLabel: 'Idioma',
    skipToContentLabel: 'Pular para o conteúdo',
    notFound: {
      title: 'PÁGINA NÃO ENCONTRADA',
      quote: 'Esse endereço não existe na central. Use a busca ou volte para o início.',
      linkLabel: 'ir para o início',
      linkText: 'Voltar para o início',
    },
    footer: {
      message: `Não achou o que procurava? <a href="${SUPPORT_URL}">Fale com o suporte no WhatsApp</a>.`,
      copyright: `© ${new Date().getFullYear()} Track4you · Rastreamento avançado para funis de Telegram`,
    },
  },
}

// Textos da busca local (o provedor é ligado no config.mts, que é onde o VitePress lê).
export const ptSearch = {
  translations: {
    button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar na central' },
    modal: {
      displayDetails: 'Mostrar lista detalhada',
      resetButtonTitle: 'Limpar busca',
      backButtonTitle: 'Fechar busca',
      noResultsText: 'Nenhum resultado para',
      footer: { selectText: 'abrir', navigateText: 'navegar', closeText: 'fechar' },
    },
  },
}
