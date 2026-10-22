---
title: "Solicitação de Entrada no funil"
description: 'O que muda quando você ativa a Solicitação de Entrada no funil: pedido de entrada no canal, mensagem de boas-vindas no privado e aprovação automática.'
---

# Solicitação de Entrada no funil

Com a Solicitação de Entrada ligada, o lead pede para entrar no canal em vez de entrar direto, e o pedido é aprovado pelo canal. É essa opção que libera as mensagens automáticas: boas-vindas no privado e aprovação automática dos pedidos.

## O que muda com a opção ligada

| | Sem Solicitação de Entrada | Com Solicitação de Entrada |
|---|---|---|
| **Como o lead entra** | Entra no canal direto, ao abrir o link | Pede para entrar e o pedido é aprovado |
| **Mensagem de boas-vindas no privado** | Não | Sim, ao pedir entrada |
| **Aprovação automática (Auto-Aceite)** | Não se aplica | Sim, na hora ou depois de um tempo que você escolhe |
| **Menu Mensagens** | Fica bloqueado | É liberado |

O pedido pode ser aprovado de dois jeitos:

- **Automaticamente**, com o **Auto-Aceite** ligado em **Mensagens**. Você escolhe se aprova na hora ou depois de um tempo. Veja [Aprovação automática (Auto-Aceite)](../messages/auto-accept).
- **Manualmente**, por você ou outro administrador, na lista de pedidos de entrada do canal no Telegram.

## Antes de começar

- **Canal privado.** A Solicitação de Entrada não funciona em canal público. Veja [Canal público ou privado?](../telegram-channel/public-vs-private).

## Passo a passo

<div class="steps">

1. No menu, abra **Funis** e clique em **"Novo"** (ou no lápis de **Editar** de um funil que já existe).

2. Em **"Solicitação de Entrada"**, ligue **"Ativar Solicitação de Entrada"**. Passe o mouse no **"?"** para ver o resumo: o link será configurado com "Solicitar Entrada", a opção habilita mensagens de boas-vindas e não funciona em canais públicos.

   ![Opção "Ativar Solicitação de Entrada" ligada, com a explicação aberta](/img/pt-BR/funnels/join-request-1.png)

3. Termine o cadastro do funil e salve. Veja [Criar um funil](./create-funnel).

4. Abra **Mensagens** e configure o que o lead recebe: o bot de mensagens, a mensagem de boas-vindas e o Auto-Aceite. Veja [Mensagens automáticas: o que dá pra fazer](../messages/overview).

</div>

::: tip Pode ligar ou desligar depois
Você pode mudar a Solicitação de Entrada a qualquer momento em **Editar** no funil. O link de entrada continua o mesmo, então não precisa trocar nada na página.
:::

::: warning Ligue o Auto-Aceite
Sem o Auto-Aceite, cada pedido fica esperando você aprovar no Telegram. Para o lead não ficar parado na porta do canal, ligue o Auto-Aceite em **Mensagens**.
:::

## Como conferir se deu certo

- O menu **Mensagens** fica liberado.
- Abra o link de entrada do funil com uma conta do Telegram que não está no canal: o Telegram mostra a opção de pedir para entrar.
- Com a mensagem de boas-vindas configurada, ela chega no privado assim que o pedido é feito.

## Problemas comuns

- **"Ativar Solicitação de Entrada" está desabilitado** e aparece "Disponível apenas para canais privados.": o seu canal é público. Para usar a opção, deixe o canal privado no Telegram. Veja [Canal público ou privado?](../telegram-channel/public-vs-private).
- **O menu Mensagens continua bloqueado**: confira se o funil foi salvo com **"Ativar Solicitação de Entrada"** ligado.
- **A mensagem de boas-vindas não chega**: veja [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered).

## Relacionados

- [Criar um funil](./create-funnel)
- [Mensagem de boas-vindas (Entrada)](../messages/welcome-message)
- [Aprovação automática (Auto-Aceite)](../messages/auto-accept)
- [Canal público ou privado?](../telegram-channel/public-vs-private)
