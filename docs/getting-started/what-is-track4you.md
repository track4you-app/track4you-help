---
title: "O que é a Track4you"
description: 'Rastreamento avançado para funis de Telegram: do anúncio até a entrada no canal, com os eventos de conversão entregues direto no seu pixel da Meta ou do TikTok.'
---

# O que é a Track4you

A Track4you é a plataforma de **rastreamento avançado para quem vende por canal do Telegram**. Ela acompanha cada lead do anúncio até a entrada no seu canal e entrega essas conversões direto no seu pixel da Meta ou do TikTok (planos Pro e Enterprise), com **99,9% de assertividade**.

O resultado: suas campanhas param de otimizar para quem só clica e passam a otimizar para **quem realmente entra no canal**.

## O que a Track4you rastreia

Cada etapa do seu funil vira um dado no painel e um evento no seu pixel:

| Etapa | O que acontece | No seu pixel |
|---|---|---|
| **Visita** | O lead abre a sua página de captura | Visita à página |
| **Clique** | O lead clica no botão que leva ao Telegram | Clique |
| **Entrada no canal** | O lead entra no seu canal | `enter_channel` na Meta, `Lead` no TikTok |
| **Saída do canal** | O lead sai do canal | `left_channel` |

Tudo dentro da **janela de atribuição**: cada entrada no canal é ligada à campanha que trouxe o lead. Você sabe qual anúncio, qual página e qual funil estão enchendo o seu canal.

## Por que isso muda o resultado das suas campanhas

Sem rastreamento, a Meta só enxerga o clique. Ela não sabe quem entrou no canal, então entrega o anúncio para quem clica, não para quem converte.

Com a Track4you, o evento `enter_channel` chega no seu pixel. Você aprova esse evento no Gerenciador de Eventos, cria uma conversão personalizada com ele e roda a campanha otimizando para **entrada no canal**. A Meta passa a buscar mais gente com o perfil de quem entra. Veja o passo a passo em [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins). No TikTok, é ainda mais direto: veja [Otimizar campanhas do TikTok para entrada no canal](../tiktok-pixel/optimize-for-channel-joins).

## As 4 peças da Track4you

Para rastrear, você configura quatro coisas no painel, nesta ordem:

1. **Canal:** o seu canal do Telegram, conectado por um bot de rastreamento exclusivo. É ele que identifica cada entrada e saída.
2. **Domínio:** o endereço do site onde ficam as suas páginas de captura.
3. **Pixel:** o seu pixel da Meta ou do TikTok (planos Pro e Enterprise), que vai receber as conversões.
4. **Funil:** junta canal, domínio, pixel e as páginas. Cada funil gera o link de entrada que vai no botão da página. O script de rastreamento é um só para a conta inteira e vai em todas as páginas dos seus funis.

Você pode ter vários funis (por exemplo, um por lançamento ou por público) e comparar o desempenho de cada um.

## E tem mais

- **Dashboard:** visitas, cliques, entradas, saídas e taxa de retenção, com filtros por funil, pixel e período. Veja [Dashboard: entendendo os números](../reports/dashboard).
- **Métricas:** a análise dos seus leads, com a lista de quem entrou e por onde veio. Veja [Métricas: análise de leads](../reports/metrics).
- **Mensagens automáticas:** boas-vindas no privado para quem pede entrada, mensagem de saída, aprovação automática e disparos no canal. Veja [Mensagens automáticas: o que dá pra fazer](../messages/overview).
- **Postbacks:** receba os eventos do funil no seu CRM, planilha ou automação. Veja [O que são postbacks](../postbacks/overview).
- **Integrações:** leve cadastros, FTDs e depósitos da sua casa de apostas, corretora ou plataforma direto para o pixel (planos Pro e Enterprise). Veja [O que são as Integrações](../integrations/overview).

## Por onde começar

Siga o roteiro [Seu primeiro funil rodando: checklist](./first-funnel). Ele leva você do zero ao primeiro lead rastreado, um passo de cada vez.

Ainda não tem conta? Conheça os planos na [página da Track4you](https://track4you.app).

## Relacionados

- [Criar sua conta e acessar o painel](./create-account)
- [Conheça o painel](./panel-tour)
- [Seu primeiro funil rodando: checklist](./first-funnel)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
