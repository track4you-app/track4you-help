---
title: "Criar o bot de rastreamento no BotFather"
description: 'Crie no @BotFather o bot que a Track4you usa para rastrear as entradas no seu canal e copie o token para conectar o canal.'
---

# Criar o bot de rastreamento no BotFather

O bot de rastreamento é a peça que liga o seu canal do Telegram à Track4you. É por ele que cada entrada e cada saída do canal são identificadas. Você cria esse bot em poucos minutos, direto no Telegram, pelo **@BotFather** (o bot oficial do Telegram para criar bots).

## Antes de começar

- Telegram aberto no celular ou no computador (o Telegram Web também serve).
- Um nome para o bot. Dica: use algo que deixe claro que é o bot de rastreamento, como "Sinais VIP Demo Track".

## Passo a passo

<div class="steps">

1. No Telegram, procure por **@BotFather** (ele tem o selo azul de verificado), abra a conversa e toque em **"Iniciar"** (ou "Start"). Envie o comando `/newbot`.

   ![Conversa com o BotFather com o comando /newbot em destaque](/img/pt-BR/telegram-channel/create-bot-1.png)

2. O BotFather pede duas coisas, uma de cada vez:
   - **O nome do bot:** é o nome que aparece no Telegram (ex.: "Sinais VIP Demo Track").
   - **O username do bot:** o @ do bot. Precisa terminar em `bot` e não pode estar em uso (ex.: `sinaisvipdemo_track_bot`). Se o username já existir, o BotFather pede outro.

   ![Nome e username do bot enviados ao BotFather](/img/pt-BR/telegram-channel/create-bot-2.png)

3. Pronto: o BotFather confirma a criação e manda o **token** do bot, logo abaixo de "Use this token to access the HTTP API". O token tem este formato: `7123456789:AAHdemoTrack4you-ExemploToken123`. Copie o token inteiro: você vai colar ele na Track4you ao conectar o canal.

   ![Mensagem do BotFather com o token do bot em destaque](/img/pt-BR/telegram-channel/create-bot-3.png)

</div>

::: danger O token é a chave do seu bot
Quem tem o token controla o bot. Não envie o token em grupos, não publique em prints e não compartilhe com outras pessoas ou ferramentas. Na Track4you, você só cola o token no campo "Token do Bot" (e em "Novo Token", se precisar reconectar).
:::

::: warning Um bot exclusivo para a Track4you
Crie um bot novo só para a Track4you e não use esse bot em outras ferramentas (automações, outros rastreadores, construtores de fluxo). Usar o mesmo bot em outro lugar interfere no rastreamento. Se você quer enviar mensagens automáticas, a Track4you usa um **segundo bot**, separado: veja [Configurar o bot de mensagens](../messages/setup-message-bot).
:::

## Como conferir se deu certo

- O BotFather respondeu com a mensagem de confirmação e o token.
- O bot aparece quando você procura pelo username dele no Telegram.

## Problemas comuns

- **Perdi o token.** No @BotFather, envie `/mybots`, escolha o bot e toque em **"API Token"**: o token atual aparece de novo.
- **Acho que o token vazou.** No mesmo menu **"API Token"**, gere um token novo (o anterior para de funcionar na hora). Se o canal já estava conectado, atualize o token na Track4you: veja [Reconectar o bot com um token novo](./reconnect-bot).
- **O BotFather recusou o username.** Ele precisa terminar em `bot` e ser único no Telegram. Tente outra variação, como `sinaisvipdemo_track2_bot`.

## Próximo passo

Com o token em mãos, coloque o bot como administrador do seu canal e conecte na Track4you: [Conectar seu canal à Track4you](./connect-channel).

## Relacionados

- [Conectar seu canal à Track4you](./connect-channel)
- [Canal público ou privado?](./public-vs-private)
- [Reconectar o bot com um token novo](./reconnect-bot)
- [Seu primeiro funil rodando: checklist](../getting-started/first-funnel)
