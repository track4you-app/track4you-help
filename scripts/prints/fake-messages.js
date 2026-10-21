// Dados fictícios para a tela Mensagens (rodar depois do fake-data.js).
(() => {
  const F = window.__T4Y;
  const UID = F.UID;
  const now = '2026-10-20T14:32:00.000000Z';
  const IMG = 'https://track4you-help.vercel.app/favicon-dark.png';
  const welcome = [
    { id: 'b1', type: 'text', message: '<b>Olá, {first_name}!</b> Bem-vindo ao Sinais VIP Demo 🎯<br>Fique ligado nas próximas entradas.', buttons: [{ text: 'Ver regras do canal', url: 'https://lancamentoblack.com.br/regras' }] },
    { id: 'b2', type: 'delay', seconds: 5 },
    { id: 'b3', type: 'image', media_url: IMG, filename: 'boas-vindas.png' },
  ];
  const exit = [{ id: 'b4', type: 'text', message: 'Sentimos sua falta, {first_name}! Volte quando quiser: o canal continua aberto pra você.', buttons: [{ text: 'Voltar ao canal', url: 'https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d' }] }];
  const msgProps = {
    bots: [{ id: 'mb1', user_id: UID, token: '7987654321:AAFdemoMensagens-ExemploToken456', bot_username: 'sinaisvipdemo_msg_bot', bot_id: '7987654321', status: 'ativo', created_at: now, updated_at: now }],
    botChannel: F.bot,
    messagesConfigs: { id: 1, enter: 1, left: 1, auto_accept: 1, time: 60, user_id: UID, enter_text: null, enter_buttons_json: null, enter_media_url: null, enter_media_type: null, left_text: null, left_buttons_json: null, left_media_url: null, left_media_type: null, enter_sequence_json: welcome, left_sequence_json: exit, created_at: now, updated_at: now },
    funnels: F.funnels.map((f) => ({ ...f, message_config: null })),
    userFunnelsMessageConfigs: [
      { id: 11, funnel_id: F.funnels[1].id, enter: 1, left: 0, auto_accept: 1, time: 0, enter_sequence_json: [{ id: 'b5', type: 'text', message: 'Bem-vindo ao <b>Grupo VIP Orgânico</b>, {first_name}! 🚀', buttons: [] }], left_sequence_json: null, created_at: now, updated_at: now },
    ],
    recurringMessages: [
      { id: 21, user_id: UID, name: 'Bom dia, time!', days: ['mon', 'tue', 'wed', 'thu', 'fri'], times: ['08:00', '12:00'], enabled: true, variations: [
        { id: 31, recurring_message_id: 21, sequence_json: [{ type: 'text', message: 'Bom dia, time! ☀️ Hoje tem análise ao vivo às 20h.', buttons: [] }] },
        { id: 32, recurring_message_id: 21, sequence_json: [{ type: 'text', message: 'Bom dia! 📈 Separei as oportunidades do dia, fique de olho.', buttons: [] }] },
      ] },
      { id: 22, user_id: UID, name: 'Lembrete da live', days: ['sat', 'sun'], times: ['19:30'], enabled: false, variations: [
        { id: 33, recurring_message_id: 22, sequence_json: [{ type: 'image', media_url: IMG, filename: 'live.png' }, { type: 'text', message: 'Live começando em 30 minutos! 🔴', buttons: [] }] },
      ] },
    ],
    dispatches: [
      { id: 41, name: null, sequence_json: [{ type: 'text', message: 'Live hoje às 20h no canal! Traga suas dúvidas.' }], scheduled_at: '2026-10-22T19:30:00-03:00', status: 'scheduled' },
      { id: 42, name: null, sequence_json: [{ type: 'text', message: 'Bônus liberado para quem entrou hoje 🎁' }], scheduled_at: '2026-10-23T10:00:00-03:00', status: 'scheduled' },
      { id: 43, name: null, sequence_json: [{ type: 'text', message: 'Resultado da semana: confira o resumo no canal.' }], scheduled_at: '2026-10-18T09:00:00-03:00', status: 'sent' },
      { id: 44, name: null, sequence_json: [{ type: 'image', media_url: IMG }], scheduled_at: null, status: 'sent' },
    ],
  };
  window.__T4Y_msgProps = msgProps;
  if (!window.__T4Y_msgInterceptor) {
    window.__T4Y_msgInterceptor = window.axios.interceptors.response.use((res) => {
      if (res.data && res.data.component === 'Message' && res.data.props) Object.assign(res.data.props, JSON.parse(JSON.stringify(window.__T4Y_msgProps)));
      return res;
    });
  }
  return 'mensagens ok';
})();
