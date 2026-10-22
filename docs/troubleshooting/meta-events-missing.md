---
title: "Eventos não chegam no pixel"
description: 'O que conferir quando o painel mostra visitas, cliques e entradas, mas os eventos não aparecem no Gerenciador de Eventos da Meta.'
---

# Eventos não chegam no pixel

**Sintoma:** o Dashboard mostra visitas, cliques e entradas, mas no Gerenciador de Eventos da Meta o pixel não recebe os eventos (ou para de receber de repente).

## O que conferir

<div class="steps">

1. **O funil usa o pixel certo.** Em **Funis**, a coluna **Pixel** mostra para qual pixel cada funil manda os eventos. Confira se é o pixel que você está olhando no Gerenciador de Eventos.

2. **O token não foi trocado na Meta.** Gerar um novo token da API de Conversões no Gerenciador de Eventos invalida o anterior na hora. Se você (ou alguém da equipe) gerou um token novo, atualize o pixel na Track4you. Veja [Trocar o token do pixel sem perder eventos](../meta-pixel/update-token).

3. **O ID e o token estão certos.** Em **Pixels**, clique no lápis do pixel, confira o **"ID"** e cole de novo o **"Token de Integração"**. Ao salvar, a Track4you confere os dados com a Meta: se aparecer **"Token inválido"** ou **"ID do Pixel inválida"**, copie de novo do Gerenciador de Eventos. Veja [Onde encontrar o ID do pixel e o token](../meta-pixel/find-pixel-id-and-token).

4. **O Evento Teste foi feito e os eventos foram confirmados.** O status do pixel precisa estar em **"Recebendo dados"**. Se estiver **"Pixel Inativo"**, envie o Evento Teste. Depois, no Gerenciador de Eventos, confirme os eventos `enter_channel` e `left_channel` (clique no aviso ao lado de cada um). Veja [Enviar o Evento Teste e confirmar os eventos](../meta-pixel/test-event).

5. **A assinatura está ativa.** Com pagamento em atraso ou assinatura cancelada, o rastreamento fica pausado. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

::: tip Onde olhar na Meta
No Gerenciador de Eventos, abra o pixel e veja a **Visão geral**. Os eventos podem levar alguns minutos para aparecer. A lista do que a Track4you envia está em [Eventos que chegam no seu pixel](../meta-pixel/events-sent).
:::

## Os eventos chegam, mas os números são diferentes

Isso é normal entre ferramentas diferentes. Veja [Painel × Gerenciador de Anúncios: por que os números diferem](../reports/panel-vs-meta).

## Ainda não chegou?

Fale com o [suporte](https://track4you.app/suporte) e mande o nome do pixel e do funil.

## Relacionados

- [Status do pixel e Histórico de Erros](../meta-pixel/status-and-errors)
- [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins)
- [Cadastrar o pixel na Track4you](../meta-pixel/add-pixel)
