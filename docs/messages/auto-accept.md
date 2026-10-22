---
title: "Aprovação automática (Auto-Aceite)"
description: 'Ligue o Auto-Aceite para aprovar sozinho os pedidos de entrada no canal e escolha o tempo de espera antes da aprovação.'
---

# Aprovação automática (Auto-Aceite)

Com o **Auto-Aceite** ligado, a Track4you aprova sozinha os pedidos de entrada no seu canal. Você não precisa ficar aprovando lead por lead no Telegram, e quem pede entrada não fica esperando.

## Antes de começar

- Funil com **"Solicitação de Entrada"** ligada: o Auto-Aceite aprova os pedidos que chegam por esse tipo de link. Veja [Solicitação de Entrada no funil](../funnels/join-request).
- Bot de mensagens configurado: a seção **"Mensagens no Privado"**, onde fica o Auto-Aceite, aparece depois dele. Veja [Configurar o bot de mensagens](./setup-message-bot).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Mensagens no Privado"** > **"Configurações Padrão"** e ligue a chave do cartão **"Auto-Aceite"**. A alteração é salva na hora e aparece "Configurações atualizadas.".

   ![Cartão "Auto-Aceite" ligado, com o tempo de espera de 1 minuto](/img/pt-BR/messages/auto-accept-1.png)

2. No campo abaixo, escolha o tempo de espera antes da aprovação: "Instantâneo", "10 segundos", "30 segundos", "1 minuto", "5 minutos", "10 minutos", "30 minutos" ou "60 minutos". Também salva na hora.

   ![Lista de tempos de espera do Auto-Aceite aberta](/img/pt-BR/messages/auto-accept-2.png)

</div>

## Instantâneo ou com tempo de espera?

| Opção | Como fica para o lead |
|---|---|
| **"Instantâneo"** | É aprovado na hora e recebe a mensagem de boas-vindas logo em seguida. |
| **Com tempo de espera** (10 segundos a 60 minutos) | Recebe a boas-vindas assim que pede entrada e só é aprovado depois do tempo escolhido. |

::: tip Boas-vindas antes de entrar
Um tempo de espera curto (de 30 segundos a 1 minuto) faz o lead ler a sua boas-vindas, ver as regras e clicar nos seus botões antes de cair no canal. Veja [Mensagem de boas-vindas (Entrada)](./welcome-message).
:::

Com o Auto-Aceite desligado, os pedidos ficam aguardando e você aprova manualmente, pelo próprio Telegram, na lista de pedidos de entrada do canal.

Quer um tempo de espera diferente para um funil específico? Veja [Mensagens diferentes por funil](./funnel-rules).

## Como conferir se deu certo

1. Com uma conta pessoal do Telegram que **não** seja administradora do canal, abra a sua página e peça para entrar no canal.
2. Depois do tempo de espera escolhido, a conta entra no canal sem você aprovar nada.

## Problemas comuns

- **Não encontro o cartão "Auto-Aceite"**: configure primeiro o bot de mensagens. A seção "Mensagens no Privado" aparece depois dele.
- **O lead não foi aprovado**: confira se ele pediu entrada pelo link de um funil com "Solicitação de Entrada" e se o bot de rastreamento continua administrador do canal, com todas as permissões. Veja o diagnóstico no menu **Canal** em [Status da integração do canal](../telegram-channel/connection-status).

## Relacionados

- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Solicitação de Entrada no funil](../funnels/join-request)
- [Mensagens diferentes por funil](./funnel-rules)
