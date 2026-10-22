---
title: "Reconectar o bot com um token novo"
description: 'Quando a conexão do canal cai, gere um token novo no @BotFather e use "Reconectar" na Track4you para voltar a rastrear.'
---

# Reconectar o bot com um token novo

O botão **"Reconectar"** atualiza o token do seu bot de rastreamento na Track4you, sem precisar desconectar o canal nem refazer os funis. Use quando a conexão do canal cair.

## Quando usar

- O card do canal está com o selo **"Inativo"** e o botão **"Reconectar"** apareceu.
- O painel mostrou o aviso **"Conexão do canal foi perdida"**.
- Você gerou um token novo no @BotFather (por exemplo, porque o token antigo vazou).
- O bot foi usado em outra ferramenta e a linha **"Conexão com a Track4you"** ficou vermelha.

## Antes de começar

- O bot de rastreamento **continua no canal como administrador**, com todas as permissões. Se ele foi removido, adicione de novo antes de reconectar.
- Acesso ao **@BotFather** na mesma conta do Telegram que criou o bot.

## Passo a passo

<div class="steps">

1. **Gere um token novo no @BotFather.** Envie `/mybots`, escolha o seu bot de rastreamento, toque em **"API Token"** e gere um novo token. Copie o token novo inteiro. O token anterior para de funcionar na hora.

2. **Na Track4you, abra Canal no menu e clique em "Reconectar"**, no card do canal.

   ![Card do canal com o selo "Inativo" e o botão "Reconectar"](/img/pt-BR/telegram-channel/reconnect-bot-1.png)

3. No modal **"Reconectar Bot"**, cole o token em **"Novo Token"** e clique em **"Reconectar"**.

   ![Modal "Reconectar Bot" com o campo "Novo Token" preenchido](/img/pt-BR/telegram-channel/reconnect-bot-2.png)

</div>

::: warning Use o token do mesmo bot
Reconecte sempre com o token do bot que já está conectado ao seu canal. Para usar outro bot ou outro canal, veja [Trocar de canal ou desconectar](./change-channel).
:::

::: danger Token é segredo
O token novo vale o mesmo que o antigo: quem tem o token controla o bot. Não compartilhe com ninguém nem cole em outra ferramenta.
:::

## Como conferir se deu certo

- O card volta a mostrar o selo **"Ativo"** e o botão **"Reconectar"** some.
- No **"Status da Integração"**, as linhas **"Conexão com a Track4you"** e **"Conexão com o Canal"** ficam com **"Conectado!"**.
- O aviso "Conexão do canal foi perdida" para de aparecer.

## Problemas comuns

- **"Informe o novo token do bot."**: o campo está vazio. Cole o token antes de clicar em **"Reconectar"**.
- **"Token inválido."**: o token foi copiado pela metade ou já foi trocado de novo no @BotFather. Copie o token mais recente, inteiro, e tente outra vez.
- **Aviso dizendo que o bot de trackeamento foi removido**: o bot não está mais no canal. Adicione o bot de volta como administrador, com todas as permissões, e clique em **"Reconectar"** de novo.
- **"Erro inesperado ao validar o token."**: aguarde alguns instantes e tente de novo. Se continuar, fale com o [suporte](https://track4you.app/suporte).

## Relacionados

- [Status da integração do canal](./connection-status)
- ["Conexão do canal foi perdida"](../troubleshooting/channel-connection-lost)
- [Criar o bot de rastreamento no BotFather](./create-bot)
- [Trocar de canal ou desconectar](./change-channel)
