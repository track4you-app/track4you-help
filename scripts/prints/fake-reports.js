// Dados fictícios para Dashboard e Métricas (rodar depois do fake-data.js).
(() => {
  const M = window.__T4Y_mock;
  M['retention/v2'] = [
    { day: '21/10', enters: 284, lefts: 31 }, { day: '20/10', enters: 301, lefts: 28 }, { day: '19/10', enters: 276, lefts: 35 },
    { day: '18/10', enters: 259, lefts: 22 }, { day: '17/10', enters: 288, lefts: 41 }, { day: '16/10', enters: 265, lefts: 30 },
    { day: '15/10', enters: 259, lefts: 27 },
  ];
  const now = new Date();
  const prof = [3, 2, 1, 1, 0, 1, 2, 6, 11, 14, 15, 13, 12, 16, 18, 17, 15, 14, 19, 22, 24, 21, 15, 9];
  const labels = [], data = [];
  for (let i = 23; i >= 0; i--) { const d = new Date(now.getTime() - i * 3600e3); labels.push(String(d.getHours()).padStart(2, '0') + 'h'); data.push(prof[d.getHours()]); }
  M['enters/hourly'] = { labels, data };

  M['metrics/summary'] = {
    pageviews: 12480, clicks: 4215, joins: 1932, leaves: 214, conversion_click: 33.77, conversion_join: 45.84,
    tracking_rate: 99.02, avg_stay: '6d 4h 12m', tracked_leaves: 210, leaves_tracking_rate: 98.13, bounce_rate: 7.48,
  };

  const nomes = ['Ana Ribeiro', 'Bruno Lima', 'Carla Mendes', 'Diego Rocha', 'Elisa Prado', 'Felipe Costa', 'Gabriela Nunes', 'Henrique Alves', 'Isabela Farias', 'João Pedro Melo', 'Larissa Teixeira', 'Marcos Vieira', 'Natália Gomes', 'Otávio Ramos', 'Paula Martins'];
  const locais = [['Brazil', 'SP', 'São Paulo'], ['Brazil', 'MG', 'Belo Horizonte'], ['Brazil', 'PR', 'Curitiba'], ['Brazil', 'BA', 'Salvador'], ['Brazil', 'PE', 'Recife'], ['Brazil', 'RJ', 'Rio de Janeiro'], ['Brazil', 'RS', 'Porto Alegre'], ['Portugal', 'LI', 'Lisboa']];
  const uas = ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148', 'Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 Chrome/129.0 Mobile Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/129.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/605.1.15 Safari/605.1.15'];
  const funis = [['Lançamento Black', 'https://lancamentoblack.com.br/vip'], ['Grupo VIP Orgânico', 'https://lancamentoblack.com.br/grupo'], ['Remarketing 7D', 'https://lp.sinaisvipdemo.com.br/oferta']];
  const camp = ['lancamento-black', 'lancamento-black', 'remarketing-7d', 'grupo-vip'];
  const rows = [];
  for (let i = 0; i < 60; i++) {
    const d = new Date(2026, 9, 21, 22, 40); d.setMinutes(d.getMinutes() - i * 97);
    const left = i % 9 === 4;
    const sd = new Date(d.getTime() + (i % 3 + 1) * 3600e3 * 7);
    const f = funis[i % 7 === 3 ? 2 : i % 5 === 1 ? 1 : 0];
    const loc = locais[i % locais.length];
    const tracked = i % 31 !== 17;
    const p2 = (n) => String(n).padStart(2, '0');
    rows.push({
      id: 9000 + i, data: `${p2(d.getDate())}/${p2(d.getMonth() + 1)}/${d.getFullYear()}`, horario: `${p2(d.getHours())}:${p2(d.getMinutes())}`,
      trackeado: tracked, start_bot: false, idTelegram: String(5512345678 + i * 1234567), nome: nomes[i % nomes.length], status: left ? 'Saiu' : 'Entrou',
      funil: f[0], url: f[1], utmSource: tracked ? 'facebook' : null, utmMedium: tracked ? 'cpc' : null, utmCampaign: tracked ? camp[i % camp.length] : null,
      utmContent: tracked ? ['video-01', 'carrossel-02', 'story-03'][i % 3] : null, dispositivo: uas[i % uas.length],
      pais: tracked ? loc[0] : null, estado: tracked ? loc[1] : null, cidade: tracked ? loc[2] : null,
      dataSaida: left ? `${p2(sd.getDate())}/${p2(sd.getMonth() + 1)}/${sd.getFullYear()}` : null, horarioSaida: left ? `${p2(sd.getHours())}:${p2(sd.getMinutes())}` : null,
      permanencia: null,
    });
  }
  M['metrics/table'] = { data: rows, total: rows.length, per_page: 100, current_page: 1, last_page: 1 };
  return 'relatórios ok';
})()
