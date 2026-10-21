(() => {
  const app = document.querySelector('#app').__vue_app__;
  const gp = app.config.globalProperties;
  const now = '2026-10-20T14:32:00.000000Z';
  const UID = '9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f';
  const bot = { id: 101, bot_username: 'sinaisvipdemo_track_bot', channel_id: '-1001234567890', channel_name: 'Sinais VIP Demo', token: '7123456789:AAHdemoTrack4you-ExemploToken123', channel_type: 1, user_id: UID, created_at: now, updated_at: now };
  const domains = [
    { id: 201, url: 'lancamentoblack.com.br', user_id: UID, created_at: now, updated_at: now },
    { id: 202, url: 'lp.sinaisvipdemo.com.br', user_id: UID, created_at: now, updated_at: now },
  ];
  const pixels = [
    { id: 301, name: 'Pixel Principal', pixel_id: '1234567890123456', provider: 'facebook', pixel_token: 'EAAGdemo0Track4youTokenFicticio1234567890abcdefGHIJ', user_id: UID, created_at: now, updated_at: now, test_event_sent: 1, status: 'active' },
    { id: 302, name: 'Pixel Remarketing', pixel_id: '6543210987654321', provider: 'facebook', pixel_token: 'EAAGdemo0Track4youTokenFicticio0987654321zyxwvuTSRQ', user_id: UID, created_at: now, updated_at: now, test_event_sent: 0, status: 'inactive' },
  ];
  const fd = (id, fid, dom, url) => ({ id, funnel_id: fid, domain_id: dom.id, created_at: now, updated_at: now, url, domain: dom });
  const mkFunnel = (id, name, pix, dom, urls, jr, idx) => ({
    id, name, urls, link_uuid: 'https://t.me/+DemoConviteAbc12' + idx, user_id: UID, pixel_id: pix.id, bot_id: bot.id,
    redirect_url_synced: 1, created_at: now, updated_at: now, join_request: jr, bot, pixel: pix,
    funnel_domain: urls.map((u, i) => fd(400 + idx * 10 + i, id, dom, u)),
  });
  const funnels = [
    mkFunnel('0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d', 'Lançamento Black', pixels[0], domains[0], ['vip', 'vip-2'], 1, 1),
    mkFunnel('1b2c3d4e-5f6a-4b7c-9d8e-0f1a2b3c4d5e', 'Grupo VIP Orgânico', pixels[0], domains[0], ['grupo'], 1, 2),
    mkFunnel('2c3d4e5f-6a7b-4c8d-8e9f-1a2b3c4d5e6f', 'Remarketing 7D', pixels[1], domains[1], ['oferta'], 0, 3),
  ];
  const plan = { domain: 4, pixel: 4, funnel: 12, bots: 1, integrations: 4 };
  const cards = [
    { id: 0, title: 'Pageviews', value: 12480, text: 'Conversão geral para Entradas', value_change: 18, old_value: '15' },
    { id: 1, title: 'Clicks na página', value: 4215, text: 'Taxa de Cliques por Pageviews', value_change: 12, old_value: '34' },
    { id: 2, title: 'Entradas', value: 1932, text: 'Taxa de Entradas por Cliques', value_change: 9, old_value: '46' },
    { id: 3, title: 'Saídas', value: 214, text: 'Taxa de Retenção', value_change: -4, old_value: '88.92', leads_in_period: 37 },
  ];
  const F = { UID, bot, domains, pixels, funnels, plan, cards };
  window.__T4Y = F;

  function patchAuth(props) {
    if (!props.auth) return;
    if (props.auth.user) Object.assign(props.auth.user, { name: 'Rafael Souza', email: 'rafael@agenciademo.com.br', id: UID, cpf_cnpj: '12345678000190', phone: null, avatar_url: null, avatar_path: null, stripe_id: null, pm_last_four: null, api_version: 2, subscriptions: [] });
    props.auth.current_plan = 'Pro';
    props.auth.subscription_status = 'active';
    props.auth.hasBots = true;
    props.auth.hasJoinRequestFunnel = true;
  }
  function patchProps(component, props) {
    patchAuth(props);
    if ('botStatus' in props) props.botStatus = { track4you: true, channel: true, channel_type: 'private', channel_interference: false };
    if ('plan' in props) props.plan = plan;
    if ('bots' in props) props.bots = [bot];
    if ('domains' in props) props.domains = domains;
    if (component === 'Funnel' && 'urls' in props) props.urls = domains;
    if ('pixels' in props) props.pixels = pixels;
    if ('funnels' in props) props.funnels = component === 'Dashboard' ? funnels.map(f => ({ id: f.id, name: f.name })) : funnels;
    if ('api_version' in props) props.api_version = 2;
    if ('cards' in props) props.cards = cards;
    return props;
  }
  window.__T4Y_patch = patchProps;

  if (!window.__T4Y_interceptor) {
    window.__T4Y_interceptor = window.axios.interceptors.response.use((res) => {
      try {
        if (res.headers && res.headers['x-inertia'] && res.data && res.data.props) patchProps(res.data.component, res.data.props);
        const u = res.config && res.config.url || '';
        if (window.__T4Y_json) for (const [k, fn] of Object.entries(window.__T4Y_json)) if (u.includes(k)) res.data = fn(res.data, u);
      } catch (e) { console.warn('T4Y fake', e); }
      return res;
    });
  }
  // página atual
  patchProps(gp.$page.component, gp.$page.props);
  return 'ok ' + gp.$page.component;
})()
