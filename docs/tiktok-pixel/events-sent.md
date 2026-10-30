---
title: "Eventos que chegam no seu pixel do TikTok"
description: 'Quais eventos a Track4you manda para o seu pixel do TikTok em cada etapa do funil, e por que a entrada no canal aparece como Lead.'
---

# Eventos que chegam no seu pixel do TikTok

Cada etapa do seu funil vira um evento no pixel do TikTok, com rastreamento avançado e 99,9% de assertividade. Você não precisa configurar nada além do funil: escolheu o pixel do TikTok no funil, os eventos chegam nele.

## Os eventos, etapa por etapa

| Etapa do funil | No painel da Track4you | No TikTok | Para que usar na campanha |
|---|---|---|---|
| Visita à página de captura | "Pageviews" | `ViewContent` | Público de quem viu a página |
| Clique no botão que leva ao Telegram | "Cliques" | `Contact` | Público de quem demonstrou interesse e ainda não entrou |
| **Entrada no canal** | "Entradas" | `Lead` | **A conversão principal**: otimize as campanhas para ela |
| Saída do canal | "Saídas" | `left_channel` | Só para público (excluir quem saiu, por exemplo) |

::: tip O evento que mais importa: `Lead`
No TikTok, **`Lead` é a entrada no canal**. Campanha otimizada para `Lead` aprende a buscar pessoas que entram de verdade. Veja [Otimizar campanhas do TikTok para entrada no canal](./optimize-for-channel-joins).
:::

O script também registra a visita à página no navegador, então o Gerenciador de eventos pode mostrar uma visualização de página além dos eventos da tabela. É normal.

## Por que não existe `enter_channel` no TikTok?

O TikTok não otimiza campanha por evento personalizado. Se a entrada no canal fosse um evento personalizado, como o `enter_channel` da Meta, você não conseguiria usar esse sinal na campanha. Por isso a Track4you manda a entrada como `Lead`, um evento padrão, pronto para otimizar.

::: warning `Lead` não é a mesma coisa na Meta e no TikTok
Na Meta, `Lead` é o clique no botão. No TikTok, `Lead` é a entrada no canal. Vale a tabela de cada plataforma: [Meta](../meta-pixel/events-sent) e esta aqui.
:::

## Qual pixel recebe

Os eventos de cada funil vão para o **pixel escolhido nesse funil**, e cada funil tem um pixel só. Se você roda Meta e TikTok no mesmo canal, crie um funil para cada plataforma, cada um com as próprias páginas. Veja [Criar um funil](../funnels/create-funnel).

## E o cadastro, o FTD e o depósito?

As **Integrações** mandam esses eventos só para o pixel da Meta. No seletor de pixel da integração, o pixel do TikTok aparece desabilitado, com **"Em breve"**. Veja [O que são as Integrações](../integrations/overview).

## Como conferir

- No Gerenciador de eventos do TikTok, abra o pixel: os eventos aparecem conforme os leads passam pelo funil.
- Os números do painel podem não bater um a um com os do TikTok. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

## Relacionados

- [Enviar o Evento Teste no TikTok](./test-event)
- [Otimizar campanhas do TikTok para entrada no canal](./optimize-for-channel-joins)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
- [Eventos não chegam no TikTok](../troubleshooting/tiktok-events-missing)
