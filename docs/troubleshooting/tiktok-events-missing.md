---
title: "Eventos não chegam no TikTok"
description: 'O que conferir quando o painel mostra visitas, cliques e entradas, mas os eventos não aparecem no Gerenciador de eventos do TikTok.'
---

# Eventos não chegam no TikTok

**Sintoma:** o Dashboard mostra visitas, cliques e entradas, mas no Gerenciador de eventos do TikTok o pixel não recebe os eventos (ou para de receber de repente).

## O que conferir

<div class="steps">

1. **O pixel não está pausado.** Em **Pixels**, veja se o pixel do TikTok está com o selo **"Pausado"** ou se há a faixa **"1 pixel do TikTok pausado"**. O Starter não inclui o TikTok: nada é enviado até você voltar para o Pro ou o Enterprise, e aí o envio retoma sozinho. Veja [Trocar de plano](../account/change-plan).

2. **O funil usa o pixel certo.** Em **Funis**, a coluna **Pixel** mostra para qual pixel cada funil manda os eventos, com o logo da plataforma. Cada funil manda para um pixel só: se o funil está com um pixel da Meta, nada vai para o TikTok. Veja [Criar um funil](../funnels/create-funnel).

3. **O token está valendo.** Em **Pixels**, veja o **"Histórico de Erros"**. Os erros **40105**, **40102** ou **40104** pedem um token novo. Veja [Trocar o Access Token do TikTok](../tiktok-pixel/update-token).

4. **O código do pixel e o token são da mesma conta de anúncio.** O erro **40001** indica um token sem acesso a esse pixel. Gere o token na mesma conta de anúncio do pixel, com um usuário Admin ou Operador. Veja [Onde encontrar o código do pixel e o Access Token do TikTok](../tiktok-pixel/find-pixel-id-and-token).

5. **O Evento Teste foi feito.** Se o status está **"Pixel inativo"**, envie o Evento Teste. Veja [Enviar o Evento Teste no TikTok](../tiktok-pixel/test-event).

6. **A assinatura está ativa.** Com a assinatura cancelada, nada é enviado ao TikTok. Se o painel mostrar o aviso de pagamento em atraso, regularize. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

::: tip Procurando `enter_channel`?
No TikTok, a entrada no canal chega como **`Lead`**. A lista do que a Track4you envia está em [Eventos que chegam no seu pixel do TikTok](../tiktok-pixel/events-sent).
:::

## Os eventos chegam, mas os números são diferentes

Isso é normal entre ferramentas diferentes. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

## Ainda não chegou?

Fale com o [suporte](https://track4you.app/suporte) e mande o nome do pixel e do funil.

## Relacionados

- [Status do pixel e erros do TikTok](../tiktok-pixel/status-and-errors)
- [Otimizar campanhas do TikTok para entrada no canal](../tiktok-pixel/optimize-for-channel-joins)
- [Cadastrar o pixel do TikTok na Track4you](../tiktok-pixel/add-pixel)
- [Eventos não chegam no pixel](./meta-events-missing) (Meta)
