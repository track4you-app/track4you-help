---
title: "Otimizar campanhas do TikTok para entrada no canal"
description: 'Roteiro para o TikTok otimizar suas campanhas para quem entra no canal do Telegram, usando o evento Lead no TikTok Ads Manager.'
---

# Otimizar campanhas do TikTok para entrada no canal

Otimizar para clique traz quem clica. Otimizar para **entrada no canal** traz quem entra de verdade. Com o `Lead` chegando no seu pixel com 99,9% de assertividade, você entrega para o TikTok o sinal certo, e o algoritmo passa a buscar pessoas com o perfil de quem realmente entra no seu canal.

No TikTok o caminho é mais curto que na Meta: **não precisa confirmar evento nem criar conversão personalizada**. Você escolhe o `Lead` direto na campanha.

## Antes de começar

- Pixel do TikTok cadastrado na Track4you e usado no funil da campanha. Veja [Cadastrar o pixel do TikTok na Track4you](./add-pixel).
- Funil criado, com o script instalado e o botão da página usando o link do funil. Veja [Seu primeiro funil rodando: checklist](../getting-started/first-funnel).
- Acesso ao **TikTok Ads Manager**.

::: tip Os nomes das telas do TikTok mudam
O TikTok muda nomes de botões e menus com frequência. Se algum rótulo estiver um pouco diferente, procure a opção com o mesmo sentido.
:::

## Passo a passo

<div class="steps">

1. No **TikTok Ads Manager**, crie uma campanha com o objetivo de **geração de leads** (*Lead generation*).

2. No grupo de anúncios, na parte de otimização, escolha **Site** (*Website*) como local e selecione o seu pixel.

3. Como evento de otimização, escolha o **`Lead`**. É a entrada no canal.

4. Nos anúncios, use o link da sua página de captura (a que tem o script do funil instalado) e publique.

</div>

::: tip Precisa colocar algum parâmetro na URL do anúncio?
Não. O TikTok acrescenta o identificador do clique à URL quando a pessoa clica no anúncio. As suas UTMs continuam funcionando normalmente.
:::

## Janela de atribuição

O TikTok credita as conversões ao anúncio de acordo com a janela de atribuição da **sua conta de anúncio**, que você encontra no **Attribution Manager** do TikTok Ads Manager. Veja [Rastreamento avançado e janela de atribuição](../reports/attribution).

## Como conferir se deu certo

- No grupo de anúncios, o evento de otimização mostra **`Lead`**.
- Com a campanha rodando, as entradas aparecem em **"Entradas"** no Dashboard da Track4you e como resultados da campanha no TikTok Ads Manager.

## Problemas comuns

- **O `Lead` não aparece para escolher**: confira se o pixel escolhido na campanha é o mesmo do funil e se os eventos já estão chegando no Gerenciador de eventos. Veja [Eventos não chegam no TikTok](../troubleshooting/tiktok-events-missing).
- **O número de resultados no TikTok é diferente do painel**: é normal haver diferença. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Eventos que chegam no seu pixel do TikTok](./events-sent)
- [Enviar o Evento Teste no TikTok](./test-event)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
- [Dashboard: entendendo os números](../reports/dashboard)
