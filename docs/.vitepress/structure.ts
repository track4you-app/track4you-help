// Árvore da central: categorias e artigos (fonte: HELP-CENTER/02-ESTRUTURA.md da pasta de docs).
// Slugs são iguais em todos os idiomas; títulos e descrições ficam por idioma.
// Para criar artigo novo: adicionar aqui e criar docs/<categoria>/<slug>.md (e docs/en/... quando o inglês entrar).

export type Locale = 'pt' | 'en'

export interface Article {
  slug: string
  title: Record<Locale, string>
}

export interface Category {
  key: string
  icon: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  articles: Article[]
}

const t = (pt: string, en = pt): Record<Locale, string> => ({ pt, en })

export const categories: Category[] = [
  {
    key: 'getting-started',
    icon: 'flag',
    title: t('Começando', 'Getting started'),
    description: t('O que é a Track4you, sua conta e o primeiro funil rodando.'),
    articles: [
      { slug: 'what-is-track4you', title: t('O que é a Track4you') },
      { slug: 'create-account', title: t('Criar sua conta e acessar o painel') },
      { slug: 'panel-tour', title: t('Conheça o painel') },
      { slug: 'first-funnel', title: t('Seu primeiro funil rodando: checklist') },
    ],
  },
  {
    key: 'telegram-channel',
    icon: 'send',
    title: t('Canal do Telegram', 'Telegram channel'),
    description: t('Bot de rastreamento, conexão com o canal e status.'),
    articles: [
      { slug: 'create-bot', title: t('Criar o bot de rastreamento no BotFather') },
      { slug: 'connect-channel', title: t('Conectar seu canal à Track4you') },
      { slug: 'public-vs-private', title: t('Canal público ou privado?') },
      { slug: 'connection-status', title: t('Status da integração do canal') },
      { slug: 'reconnect-bot', title: t('Reconectar o bot com um token novo') },
      { slug: 'change-channel', title: t('Trocar de canal ou desconectar') },
    ],
  },
  {
    key: 'domains',
    icon: 'globe',
    title: t('Domínios', 'Domains'),
    description: t('Os domínios das suas páginas de captura.'),
    articles: [
      { slug: 'add-domain', title: t('Cadastrar seu domínio') },
      { slug: 'manage-domains', title: t('Editar ou excluir um domínio') },
    ],
  },
  {
    key: 'meta-pixel',
    icon: 'target',
    title: t('Pixel da Meta', 'Meta pixel'),
    description: t('Pixel, token da API de Conversões, Evento Teste e campanhas.'),
    articles: [
      { slug: 'find-pixel-id-and-token', title: t('Onde encontrar o ID do pixel e o token da API de Conversões') },
      { slug: 'add-pixel', title: t('Cadastrar o pixel na Track4you') },
      { slug: 'test-event', title: t('Enviar o Evento Teste e confirmar os eventos') },
      { slug: 'events-sent', title: t('Eventos que chegam no seu pixel') },
      { slug: 'optimize-for-channel-joins', title: t('Otimizar suas campanhas para entrada no canal') },
      { slug: 'status-and-errors', title: t('Status do pixel e Histórico de Erros') },
      { slug: 'update-token', title: t('Trocar o token do pixel sem perder eventos') },
    ],
  },
  {
    key: 'funnels',
    icon: 'funnel',
    title: t('Funis', 'Funnels'),
    description: t('Criar o funil, instalar o script e configurar o botão.'),
    articles: [
      { slug: 'what-is-a-funnel', title: t('O que é um funil') },
      { slug: 'create-funnel', title: t('Criar um funil') },
      { slug: 'install-script', title: t('Instalar o script na sua página') },
      { slug: 'install-on-wordpress', title: t('Instalar no WordPress (Elementor)') },
      { slug: 'install-on-html', title: t('Instalar em página HTML') },
      { slug: 'install-on-other-builders', title: t('Instalar em outros construtores de página') },
      { slug: 'entry-link', title: t('Configurar o botão da página') },
      { slug: 'join-request', title: t('Solicitação de Entrada no funil') },
      { slug: 'test-funnel', title: t('Testar se o funil está rastreando') },
      { slug: 'manage-funnels', title: t('Editar, ver tutorial ou excluir um funil') },
    ],
  },
  {
    key: 'messages',
    icon: 'message',
    title: t('Mensagens automáticas', 'Automated messages'),
    description: t('Boas-vindas, saída, aprovação automática e disparos no canal.'),
    articles: [
      { slug: 'overview', title: t('Mensagens automáticas: o que dá pra fazer') },
      { slug: 'setup-message-bot', title: t('Configurar o bot de mensagens') },
      { slug: 'welcome-message', title: t('Mensagem de boas-vindas (Entrada)') },
      { slug: 'exit-message', title: t('Mensagem de saída') },
      { slug: 'message-editor', title: t('Editor de mensagens: blocos, formatação, botões e mídia') },
      { slug: 'auto-accept', title: t('Aprovação automática (Auto-Aceite)') },
      { slug: 'funnel-rules', title: t('Mensagens diferentes por funil') },
      { slug: 'recurring-posts', title: t('Disparos recorrentes no canal') },
      { slug: 'one-time-posts', title: t('Disparos únicos: enviar agora ou agendar') },
    ],
  },
  {
    key: 'integrations',
    icon: 'link',
    title: t('Integrações', 'Integrations'),
    description: t('Cadastro, FTD e depósito da sua plataforma direto no pixel.'),
    articles: [
      { slug: 'overview', title: t('O que são as Integrações') },
      { slug: 'create-integration', title: t('Criar uma integração') },
      { slug: 'event-types', title: t('Tipos de evento: Registro, FTD, Depósito e Personalizado') },
      { slug: 'platform-postback', title: t('Configurar o postback na sua plataforma') },
      { slug: 'developer-guide', title: t('Guia técnico da integração (para desenvolvedores)') },
      { slug: 'test-event', title: t('Evento Teste da integração') },
      { slug: 'event-history', title: t('Status e Histórico de Eventos') },
      { slug: 'manage-integrations', title: t('Editar ou excluir uma integração') },
    ],
  },
  {
    key: 'postbacks',
    icon: 'webhook',
    title: t('Postbacks', 'Postbacks'),
    description: t('Receba os eventos do funil no seu sistema.'),
    articles: [
      { slug: 'overview', title: t('O que são postbacks') },
      { slug: 'create-postback', title: t('Cadastrar e testar um postback') },
      { slug: 'payload-reference', title: t('Formato dos dados enviados') },
    ],
  },
  {
    key: 'reports',
    icon: 'chart',
    title: t('Relatórios e métricas', 'Reports and metrics'),
    description: t('O que cada número do Dashboard e de Métricas mostra.'),
    articles: [
      { slug: 'dashboard', title: t('Dashboard: entendendo os números') },
      { slug: 'metrics', title: t('Métricas: análise de leads') },
      { slug: 'metrics-glossary', title: t('Glossário de métricas') },
      { slug: 'attribution', title: t('Rastreamento avançado e janela de atribuição') },
      { slug: 'panel-vs-meta', title: t('Painel × Gerenciador de Anúncios: por que os números diferem') },
    ],
  },
  {
    key: 'account',
    icon: 'card',
    title: t('Conta e assinatura', 'Account and billing'),
    description: t('Planos, limites, assinatura e dados da conta.'),
    articles: [
      { slug: 'plans-and-limits', title: t('Planos e limites') },
      { slug: 'change-plan', title: t('Trocar de plano') },
      { slug: 'billing', title: t('Assinatura, faturas e cancelamento') },
      { slug: 'overdue-or-canceled', title: t('Pagamento em atraso ou assinatura cancelada') },
      { slug: 'settings', title: t('Configurações da conta') },
      { slug: 'password', title: t('Alterar ou recuperar a senha') },
    ],
  },
  {
    key: 'troubleshooting',
    icon: 'wrench',
    title: t('Solução de problemas', 'Troubleshooting'),
    description: t('Quando algo não aparece onde deveria.'),
    articles: [
      { slug: 'no-pageviews', title: t('Visitas não aparecem no painel') },
      { slug: 'no-clicks', title: t('Cliques não aparecem') },
      { slug: 'no-joins', title: t('Entradas no canal não aparecem') },
      { slug: 'meta-events-missing', title: t('Eventos não chegam no pixel') },
      { slug: 'channel-connection-lost', title: t('"Conexão do canal foi perdida"') },
      { slug: 'messages-not-delivered', title: t('Mensagens automáticas não chegam ao lead') },
      { slug: 'integration-status', title: t('Integração em "Aguardando dados" ou "Dados inválidos"') },
      { slug: 'cannot-create', title: t('Não consigo criar domínio, pixel ou funil') },
      { slug: 'login-access', title: t('Não consigo entrar na minha conta') },
    ],
  },
  {
    key: 'faq',
    icon: 'help',
    title: t('Dúvidas frequentes', 'FAQ'),
    description: t('Perguntas rápidas, glossário e contato com o suporte.'),
    articles: [
      { slug: 'faq', title: t('Perguntas frequentes') },
      { slug: 'glossary', title: t('Glossário') },
      { slug: 'contact-support', title: t('Falar com o suporte') },
    ],
  },
]

// Primeiro passo de quem acabou de assinar (bloco "Comece por aqui" da home).
export const quickStart = [
  { link: '/telegram-channel/connect-channel', title: t('Conectar o canal'), text: t('Crie o bot no Telegram e torne ele administrador do seu canal.') },
  { link: '/domains/add-domain', title: t('Adicionar o domínio'), text: t('O domínio da página de captura onde o rastreamento vai rodar.') },
  { link: '/meta-pixel/add-pixel', title: t('Cadastrar o pixel'), text: t('ID e token da API de Conversões da Meta, com o Evento Teste.') },
  { link: '/funnels/create-funnel', title: t('Criar o funil'), text: t('Junte pixel, domínio e páginas, instale o script e use o link de entrada.') },
]

export const popular = [
  { link: '/troubleshooting/meta-events-missing', title: t('Eventos não chegam no pixel') },
  { link: '/funnels/install-script', title: t('Instalar o script na página') },
  { link: '/troubleshooting/no-joins', title: t('Entradas não aparecem') },
]

export const SUPPORT_URL = 'https://track4you.app/suporte'
export const APP_URL = 'https://track4you.app'
export const LANDING_URL = 'https://track4you.app'

export function sidebarFor(locale: Locale, prefix = '') {
  return categories.map((c) => ({
    text: c.title[locale],
    collapsed: true,
    items: c.articles.map((a) => ({ text: a.title[locale], link: `${prefix}/${c.key}/${a.slug}` })),
  }))
}
