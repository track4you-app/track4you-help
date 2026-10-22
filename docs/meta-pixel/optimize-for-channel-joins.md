---
title: "Otimizar suas campanhas para entrada no canal"
description: 'Roteiro para a Meta otimizar suas campanhas para quem entra no canal do Telegram: confirmar o enter_channel, criar a conversão personalizada e rodar a campanha para ela.'
---

# Otimizar suas campanhas para entrada no canal

Otimizar para clique traz quem clica. Otimizar para **entrada no canal** traz quem entra de verdade. Com o `enter_channel` chegando no seu pixel com 99,9% de assertividade, você entrega para a Meta o sinal certo, e o algoritmo passa a buscar pessoas com o perfil de quem realmente entra no seu canal.

O roteiro tem três partes: confirmar o evento, criar a conversão personalizada e rodar a campanha para ela.

## Antes de começar

- Pixel cadastrado na Track4you e usado no funil da campanha. Veja [Cadastrar o pixel na Track4you](./add-pixel).
- Funil criado, com o script instalado e o botão da página usando o link do funil. Veja [Seu primeiro funil rodando: checklist](../getting-started/first-funnel).
- Acesso ao **Gerenciador de Eventos** e ao **Gerenciador de Anúncios** da Meta.

::: tip Os nomes das telas da Meta mudam
A Meta muda nomes de botões e menus com frequência. Se algum rótulo estiver um pouco diferente, procure a opção com o mesmo sentido.
:::

## Parte 1: confirmar o `enter_channel` no Gerenciador de Eventos

<div class="steps">

1. Faça o Evento Teste do pixel na Track4you. Veja [Enviar o Evento Teste e confirmar os eventos](./test-event).

2. No **Gerenciador de Eventos**, abra o pixel e procure o `enter_channel`. Se ele estiver com o sinal de aviso (⚠️), clique no aviso e **confirme o evento**.

</div>

## Parte 2: criar a conversão personalizada

<div class="steps">

1. No **Gerenciador de Eventos**, abra **"Conversões personalizadas"** no menu lateral e clique em **"Criar conversão personalizada"**.

2. Preencha:
   - **Nome:** algo fácil de achar depois, como "Entrada no canal".
   - **Fonte de dados:** o seu pixel (ex.: "Pixel Principal").
   - **Evento de conversão:** o evento personalizado `enter_channel`.

   Não precisa adicionar regra de URL. Salve a conversão.

</div>

## Parte 3: rodar a campanha para a conversão

<div class="steps">

1. No **Gerenciador de Anúncios**, crie a campanha com o objetivo **"Vendas"** (é o ponto de partida que recomendamos).

2. No conjunto de anúncios, escolha **Site** como local da conversão, selecione o seu pixel e, como evento de conversão, a conversão personalizada **"Entrada no canal"**.

3. Nos anúncios, use o link da sua página de captura (a que tem o script do funil instalado) e publique.

</div>

::: tip Teste e fique com o que funciona
"Vendas" é o começo recomendado, não uma regra. Cada operação responde de um jeito: teste objetivos e configurações diferentes, compare o custo por entrada no canal e fique com o que der o melhor resultado.
:::

## Como conferir se deu certo

- No conjunto de anúncios, o evento de conversão mostra **"Entrada no canal"**.
- Com a campanha rodando, as entradas aparecem em **"Entradas"** no Dashboard da Track4you e como resultados da campanha no Gerenciador de Anúncios.

## Problemas comuns

- **O `enter_channel` não aparece para criar a conversão**: faça o Evento Teste e confirme o evento (Parte 1). Confira também se o pixel escolhido na conversão é o mesmo do funil.
- **A conversão aparece como inativa**: ela fica ativa quando o pixel recebe o `enter_channel`. Confira se os leads estão entrando pelo link do funil. Veja [Entradas no canal não aparecem](../troubleshooting/no-joins).
- **O número de resultados na Meta é diferente do painel**: é normal haver diferença. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Eventos que chegam no seu pixel](./events-sent)
- [Enviar o Evento Teste e confirmar os eventos](./test-event)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
- [Dashboard: entendendo os números](../reports/dashboard)
