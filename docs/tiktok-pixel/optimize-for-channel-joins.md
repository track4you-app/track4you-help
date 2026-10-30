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

1. No **TikTok Ads Manager**, clique em **"Campaigns"** e depois em **"Create"**. Escolha o objetivo **"Lead generation"** (geração de leads), que é o ponto de partida que recomendamos.

2. No grupo de anúncios, na seção de otimização, escolha **"Website"** e selecione o seu pixel.

3. Como evento, escolha o **`Lead`**. É a entrada no canal.

4. Nos anúncios, use o link da sua página de captura (a que tem o script do funil instalado) e publique.

</div>

::: tip Teste e fique com o que funciona
"Lead generation" é o começo recomendado, não uma regra. Cada operação responde de um jeito: teste configurações diferentes, compare o custo por entrada no canal e fique com o que der o melhor resultado.
:::

::: tip A Track4you já manda os eventos que o TikTok recomenda
Para campanhas de leads com site, a ajuda do TikTok recomenda trabalhar com pelo menos três tipos de evento, como `ViewContent`, `Contact` e `Lead`. Com o pixel no funil, os três já chegam.
:::

::: tip Precisa colocar algum parâmetro na URL do anúncio?
Não. O TikTok acrescenta o identificador do clique à URL quando a pessoa clica no anúncio. As suas UTMs continuam funcionando normalmente.
:::

## Janela de atribuição

O TikTok credita as conversões ao anúncio de acordo com a janela de atribuição do seu grupo de anúncios. O TikTok informa como padrão, para eventos de site, **7 dias depois do clique** e **1 dia depois da visualização**. Essa janela é configurável: confira a do seu grupo de anúncios.

Você ajusta a janela ao criar o grupo de anúncios, em **"Bidding and Optimization"**: de 1, 7, 14 ou 28 dias depois do clique, e desligada, 1 ou 7 dias depois da visualização. **Depois de publicar o grupo de anúncios, a janela não muda.** Para usar outra, crie um grupo novo. Veja [Rastreamento avançado e janela de atribuição](../reports/attribution).

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
