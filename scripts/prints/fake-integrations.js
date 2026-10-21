// Dados fictícios para Integrações e Postbacks (rodar depois do fake-data.js).
(() => {
  const F = window.__T4Y;
  const UID = F.UID;
  const now = '2026-10-20T14:32:00.000000Z';
  const base = 'https://track4you.app/api/v1/webhook/event';
  const link = (id, name, type, slug, status, extra = {}) => ({
    id, pixel_id: 301, user_id: UID, event_type: type, custom_event_name: null, domain: null, name,
    target_url: 'https://casademo.bet/cadastro', slug, data_status: status, is_archived: 0, click_id_param: 'click_id', is_synced: 1,
    created_at: now, updated_at: now, pixel: F.pixels[0],
    webhook_url: `${base}/${slug}?click_id={{click_id}}&event=${type}` + (type === 'ftd' || type === 'deposit' ? '&amount={{value}}' : ''),
    ...extra,
  });
  const links = [
    link(501, 'Registro Casa Demo', 'register', 'aB3dE5fG', 'receiving'),
    link(502, 'FTD Casa Demo', 'ftd', 'hJ7kL9mN', 'receiving'),
    link(503, 'Depósito Casa Demo', 'deposit', 'pQ2rS4tU', 'pending'),
  ];
  const paged = { current_page: 1, data: links, first_page_url: '', from: 1, last_page: 1, last_page_url: '', links: [], next_page_url: null, path: '', per_page: 10, prev_page_url: null, to: links.length, total: links.length };
  window.__T4Y_intProps = { trackingLinks: paged, pixels: F.pixels, webhookBaseUrl: `${base}/9f8e7d6c`, shareBaseUrl: 'https://t4y.io/v2' };
  window.__T4Y_pbProps = { postbacks: [
    { id: 601, name: 'Meu CRM', url: 'https://webhook.agenciademo.com.br/track4you', type: 3 },
    { id: 602, name: 'Planilha de leads', url: 'https://hooks.agenciademo.com.br/planilha', type: 1 },
  ] };
  const ev = (id, d, name, pe, type, payout) => ({ id, tracking_click_id: id, event_type: type, pixel_event_name: pe, updated_at: d, payout, integration_name: name, link_event_type: type, custom_event_name: null, pixel_name: 'Pixel Principal' });
  window.__T4Y_mock['integrations/events'] = { data: [
    ev(701, '2026-10-21T21:14:00-03:00', 'FTD Casa Demo', 'FTD', 'ftd', '150.00'),
    ev(702, '2026-10-21T20:47:00-03:00', 'Registro Casa Demo', 'CompleteRegistration', 'register', null),
    ev(703, '2026-10-21T19:02:00-03:00', 'Registro Casa Demo', 'CompleteRegistration', 'register', null),
    ev(704, '2026-10-21T17:38:00-03:00', 'FTD Casa Demo', 'FTD', 'ftd', '50.00'),
    ev(705, '2026-10-21T15:20:00-03:00', 'Registro Casa Demo', 'CompleteRegistration', 'register', null),
    ev(706, '2026-10-20T22:05:00-03:00', 'Depósito Casa Demo', 'Purchase', 'deposit', '200.00'),
  ], total: 6, per_page: 15, current_page: 1, last_page: 1, from: 1, to: 6 };
  if (!window.__T4Y_intInterceptor) {
    window.__T4Y_intInterceptor = window.axios.interceptors.response.use((res) => {
      const d = res.data;
      if (d && d.props && d.component === 'TrackingLink') Object.assign(d.props, JSON.parse(JSON.stringify(window.__T4Y_intProps)));
      if (d && d.props && d.component === 'Postback') Object.assign(d.props, JSON.parse(JSON.stringify(window.__T4Y_pbProps)));
      return res;
    });
  }
  return 'integrações ok';
})();
