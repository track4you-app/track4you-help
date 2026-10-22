---
title: "Testar se o funil está rastreando"
description: 'Teste o funil do começo ao fim: abra a página, clique no botão, entre no canal e veja a visita, o clique e a entrada no Dashboard e em Métricas.'
---

# Testar se o funil está rastreando

Antes de ligar os anúncios, faça uma passada pelo funil como se fosse um lead. Em poucos minutos você confirma que a visita, o clique e a entrada no canal estão sendo rastreados.

## Antes de começar

- **Funil criado**, com o script no cabeçalho das páginas e o link de entrada no botão. Veja [Instalar o script na sua página](./install-script) e [Configurar o botão da página](./entry-link).
- **Página publicada** no endereço cadastrado no funil.
- **Uma conta do Telegram que não está no canal.** Se a sua conta já é membro, saia do canal antes ou use outra conta (de um colega, por exemplo).
- Se o funil usa Solicitação de Entrada, deixe o **Auto-Aceite** ligado em **Mensagens** ou fique pronto para aprovar o pedido no Telegram.

## Passo a passo

<div class="steps">

1. **Abra a página do funil** no celular ou no navegador, pelo endereço publicado (ex.: `lancamentoblack.com.br/vip`). Uma aba anônima ajuda a simular um visitante novo.

2. **Clique no botão** que leva ao grupo. O Telegram abre no seu canal.

3. **Entre no canal.** Se o funil usa Solicitação de Entrada, peça para entrar e espere a aprovação (automática ou feita por você).

4. **Abra o Dashboard** na Track4you. No filtro de funis, escolha o funil que você testou. Sem período selecionado, os cards mostram os números de hoje.

5. **Confira os cards:** **"Pageviews"** conta a sua visita, **"Cliques"** conta o clique no botão e **"Entradas"** conta a sua entrada no canal.

6. **Abra Métricas** e veja a tabela **"Leads"**: a sua entrada aparece com o nome da conta do Telegram, o funil e a página de origem, com **"Trackeado"** em "Sim".

</div>

::: tip Confira também no pixel
No Gerenciador de Eventos da Meta, o pixel do funil recebe os eventos do teste, incluindo a entrada no canal (`enter_channel`). Veja [Eventos que chegam no seu pixel](../meta-pixel/events-sent).
:::

::: tip Os números podem levar um instante
Se algum número ainda não apareceu, espere um minuto e atualize a página.
:::

## Como conferir se deu certo

O funil está pronto para receber tráfego quando a visita, o clique e a entrada aparecem no **Dashboard** e a sua entrada aparece em **Métricas** como trackeada. A partir daí, cada lead que passar pelo funil é rastreado com 99,9% de assertividade, dentro da janela de atribuição.

## Problemas comuns

Veja o artigo do número que não apareceu:

- **A visita não aparece:** [Visitas não aparecem no painel](../troubleshooting/no-pageviews).
- **O clique não aparece:** [Cliques não aparecem](../troubleshooting/no-clicks).
- **A entrada não aparece:** [Entradas no canal não aparecem](../troubleshooting/no-joins). Lembre que a conta usada no teste não pode já estar no canal.
- **O pixel não recebe os eventos:** [Eventos não chegam no pixel](../troubleshooting/meta-events-missing).

Se conferiu tudo e ainda não apareceu, fale com o [suporte no WhatsApp](https://track4you.app/suporte) informando o nome do funil e o endereço da página.

## Relacionados

- [Dashboard: entendendo os números](../reports/dashboard)
- [Métricas: análise de leads](../reports/metrics)
- [Seu primeiro funil rodando: checklist](../getting-started/first-funnel)
- [Configurar o botão da página](./entry-link)
