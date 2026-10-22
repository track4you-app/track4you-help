---
title: "Eventos que chegam no seu pixel"
description: 'Quais eventos a Track4you manda para o seu pixel da Meta em cada etapa do funil (visita, clique, entrada e saída do canal) e como usar cada um nas campanhas.'
---

# Eventos que chegam no seu pixel

Cada etapa do seu funil vira um evento no pixel da Meta, com rastreamento avançado e 99,9% de assertividade. Você não precisa configurar nada além do funil: escolheu o pixel no funil, os eventos chegam nele.

## Os eventos, etapa por etapa

| Etapa do funil | No painel da Track4you | No Gerenciador de Eventos | Para que usar na campanha |
|---|---|---|---|
| Visita à página de captura | "Pageviews" | `ViewContent` | Público de remarketing de quem viu a página |
| Clique no botão que leva ao Telegram | "Cliques" | `Lead` | Público de quem demonstrou interesse e ainda não entrou |
| **Entrada no canal** | "Entradas" | `enter_channel` | **A conversão principal**: otimize as campanhas para ela |
| Saída do canal | "Saídas" | `left_channel` | Excluir de públicos e acompanhar a retenção |

::: tip O evento que mais importa: `enter_channel`
É ele que diz para a Meta quem **realmente entrou no seu canal**, e não só quem clicou. Campanha otimizada para `enter_channel` aprende a buscar pessoas que entram de verdade. Veja [Otimizar suas campanhas para entrada no canal](./optimize-for-channel-joins).
:::

## Eventos personalizados precisam de confirmação

`enter_channel` e `left_channel` são eventos personalizados. Para usar nas campanhas, confirme os dois no Gerenciador de Eventos uma vez por pixel. É isso que o Evento Teste faz aparecer. Veja [Enviar o Evento Teste e confirmar os eventos](./test-event).

## Qual pixel recebe

Os eventos de cada funil vão para o **pixel escolhido nesse funil**. Se você tem mais de um pixel (ex.: "Pixel Principal" e "Pixel Remarketing"), cada funil manda para o seu. Veja [Criar um funil](../funnels/create-funnel).

## Registro, FTD e depósito

Nos planos **Pro** e **Enterprise**, as **Integrações** levam também as conversões que acontecem dentro da sua plataforma (cadastro, primeiro depósito, depósitos) para o pixel que você escolher em cada integração. Veja [Tipos de evento: Registro, FTD, Depósito e Personalizado](../integrations/event-types).

## Como conferir

- No Gerenciador de Eventos, abra o pixel: os eventos aparecem na visão geral conforme os leads passam pelo funil.
- Os números do painel podem não bater um a um com os da Meta. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

## Relacionados

- [Enviar o Evento Teste e confirmar os eventos](./test-event)
- [Otimizar suas campanhas para entrada no canal](./optimize-for-channel-joins)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
- [Eventos não chegam no pixel](../troubleshooting/meta-events-missing)
