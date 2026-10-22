---
title: "Mensagens automáticas: o que dá pra fazer"
description: 'Boas-vindas no privado, mensagem de saída, aprovação automática e disparos no canal: o que o menu Mensagens faz e o que você precisa para liberar.'
---

# Mensagens automáticas: o que dá pra fazer

Enquanto a Track4you cuida do rastreamento avançado das entradas no seu canal, o menu **Mensagens** cuida do relacionamento: recebe o lead no privado, tenta recuperar quem sai, aprova as solicitações sozinho e posta conteúdo no canal nos dias e horários que você escolher.

![Página Mensagens com o bot de mensagens, as Configurações Padrão e as regras por funil](/img/pt-BR/messages/overview-1.png)

## O que você consegue fazer

| Recurso | O que faz | Artigo |
|---|---|---|
| **Entrada** (boas-vindas) | Envia uma mensagem no privado do lead assim que ele pede para entrar no canal. | [Mensagem de boas-vindas](./welcome-message) |
| **Saída** | Envia uma mensagem de retenção no privado de quem sai do canal. | [Mensagem de saída](./exit-message) |
| **Auto-Aceite** | Aprova as solicitações de entrada sozinho, na hora ou depois do tempo que você escolher. | [Aprovação automática](./auto-accept) |
| **Personalizadas (Por Funil)** | Usa mensagens próprias para quem chega por um funil específico. | [Mensagens diferentes por funil](./funnel-rules) |
| **Disparos Recorrentes** | Posta no canal nos dias e horários fixos que você definir, sorteando entre variações. | [Disparos recorrentes](./recurring-posts) |
| **Disparos Únicos** | Posta uma mensagem no canal agora ou na data e hora que você agendar. | [Disparos únicos](./one-time-posts) |

Todas as mensagens são montadas no mesmo editor, com texto formatado, nome do lead, emoji, botões com link, imagem, vídeo, áudio e vídeo em bolinha. Veja [Editor de mensagens](./message-editor).

## O que libera o menu Mensagens

O item **Mensagens** do menu fica bloqueado até você ter:

1. **Um canal conectado** no menu **Canal**. Sem ele, aparece o aviso "Configure um Canal para liberar a aba de Mensagens". Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel).
2. **Pelo menos um funil com "Solicitação de Entrada" ligada.** Sem ele, aparece o aviso "Não é possível configurar mensagens sem um funil com "Solicitação de Entrada" habilitado". Veja [Solicitação de Entrada no funil](../funnels/join-request).

Com o menu liberado, o primeiro passo é configurar o **bot de mensagens**. O resto da página aparece depois dele.

## Dois bots, duas funções

Você vai usar dois bots do Telegram, cada um com o seu papel:

| | Bot de rastreamento | Bot de mensagens |
|---|---|---|
| Onde configura | Menu **Canal** | Menu **Mensagens** |
| Para que serve | Rastrear as entradas e saídas do canal e aprovar as solicitações | Falar com o lead no privado e postar os disparos no canal |
| Pode usar em outra ferramenta? | Não. Ele é exclusivo da Track4you | Sim. Funciona junto com ferramentas de FlowBuilder |

Os dois precisam ser **administradores do mesmo canal** e precisam ser **bots diferentes** (cada um com o seu token). Veja [Configurar o bot de mensagens](./setup-message-bot).

::: tip Por que a Solicitação de Entrada é importante aqui
As mensagens no privado vão para quem pede para entrar no canal pelo link de um funil com "Solicitação de Entrada". É esse pedido que abre a conversa entre o bot e o lead. Por isso o menu só libera quando você tem um funil assim.
:::

## Relacionados

- [Configurar o bot de mensagens](./setup-message-bot)
- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Solicitação de Entrada no funil](../funnels/join-request)
- [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered)
