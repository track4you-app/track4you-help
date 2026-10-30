---
title: "Mensagens automáticas não chegam ao lead"
description: 'O que conferir quando a mensagem de boas-vindas, a de saída ou os disparos no canal não chegam: bot de mensagens, mensagem salva e funil com Solicitação de Entrada.'
---

# Mensagens automáticas não chegam ao lead

**Sintoma:** o lead entra (ou sai) do canal e não recebe a mensagem no privado, ou os disparos programados não aparecem no canal.

## O que conferir

<div class="steps">

1. **O bot de mensagens está configurado.** Abra **Mensagens**. No topo precisa aparecer o cartão **"Bot de Mensagens"** com o @ do seu bot. Se aparecer **"Bot de mensagens não configurado"**, clique em **"Configurar Bot"**. Veja [Configurar o bot de mensagens](../messages/setup-message-bot).

2. **O bot de mensagens é administrador do canal.** No Telegram, ele precisa estar no mesmo canal do bot de rastreamento, como administrador, com permissão para enviar mensagens. Lembre que são **dois bots diferentes**: o de rastreamento (tela **Canal**) e o de mensagens (tela **Mensagens**).

3. **A mensagem foi salva.** Em **"Configurações Padrão"**, clique em **"Configurar"** no cartão **"Entrada"** (ou **"Saída"**), confira os blocos e clique em **"Salvar"**. Ao salvar, o cartão fica ligado.

4. **Para a boas-vindas: o lead entrou por um funil com Solicitação de Entrada.** A mensagem de entrada é enviada quando o lead **solicita entrada** no canal. Por isso o funil precisa estar com **"Ativar Solicitação de Entrada"** ligado, e o canal precisa ser privado. Veja [Solicitação de Entrada no funil](../funnels/join-request).

5. **O funil tem uma regra própria?** Em **"Personalizadas (Por Funil)"**, a mensagem configurada para um funil é a que vale para quem entra por ele. Confira se ela está preenchida. Veja [Mensagens diferentes por funil](../messages/funnel-rules).

6. **A assinatura está ativa.** Com a assinatura cancelada, as mensagens automáticas ficam pausadas: boas-vindas, saída e aprovação automática. Se o painel mostrar o aviso de pagamento em atraso, regularize. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

## Disparos no canal não aparecem

- Confira se o bot de mensagens tem permissão para **publicar mensagens** no canal.
- Nos **"Disparos Recorrentes"**, confira os dias da semana e os horários escolhidos.
- Nos **"Disparos Únicos"**, confira a data e a hora do agendamento.

Veja [Disparos recorrentes no canal](../messages/recurring-posts) e [Disparos únicos: enviar agora ou agendar](../messages/one-time-posts).

::: tip O lead bloqueou o bot?
Se o lead bloqueou o seu bot de mensagens no Telegram, nenhuma mensagem no privado chega para ele. Os outros leads continuam recebendo normalmente.
:::

## Como testar de novo

Use uma conta do Telegram que **ainda não está no canal**: abra a página do funil, clique no botão, solicite a entrada e veja se a boas-vindas chega no privado.

## Ainda não chegou?

Fale com o [suporte](https://track4you.app/suporte) e mande o @ do bot de mensagens e o nome do funil.

## Relacionados

- [Mensagens automáticas: o que dá pra fazer](../messages/overview)
- [Mensagem de boas-vindas (Entrada)](../messages/welcome-message)
- [Mensagem de saída](../messages/exit-message)
- [Aprovação automática (Auto-Aceite)](../messages/auto-accept)
