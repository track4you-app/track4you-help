---
title: "Configurar o bot de mensagens"
description: 'Crie um segundo bot no BotFather, coloque como administrador do seu canal e conecte na Track4you para enviar boas-vindas, saída e disparos.'
---

# Configurar o bot de mensagens

O bot de mensagens é quem fala com o seu lead: envia as mensagens no privado (boas-vindas e saída) e posta os disparos no canal. Ele é um **segundo bot**, separado do bot de rastreamento que você conectou no menu **Canal**.

## Antes de começar

- Canal conectado no menu **Canal**. Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel).
- Pelo menos um funil com "Solicitação de Entrada" ligada (é o que libera o menu **Mensagens**). Veja [Solicitação de Entrada no funil](../funnels/join-request).
- Um bot **diferente** do bot de rastreamento. Pode ser um bot novo ou um que você já usa em ferramenta de FlowBuilder.

## Passo a passo

<div class="steps">

1. No Telegram, abra o **@BotFather**. Para um bot novo, envie `/newbot`, escolha um nome e um username terminado em `bot` (ex.: `@sinaisvipdemo_msg_bot`). Se já tem um bot, envie `/mybots` e selecione ele. Copie o **token HTTP API** que o BotFather mostra.

2. No seu canal do Telegram, abra as configurações do canal > **Administradores** > **Adicionar administrador**, busque o username do bot de mensagens e adicione. Deixe ligada a permissão de **publicar mensagens**. O mais simples é liberar todas as permissões, como você fez com o bot de rastreamento.

3. Na Track4you, abra o menu **Mensagens** e clique em **"Configurar Bot"**.

4. Cole o token no campo **"Token do Bot"** e clique em **"Validar Token"**. Quando aparecer "Token válido e canal encontrado!", o botão vira **"Validado"**.

   ![Modal do bot de mensagens com o campo "Token do Bot" e o botão "Validar Token"](/img/pt-BR/messages/setup-message-bot-2.png)

5. Clique em **"Salvar"**. Aparece a mensagem "Bot configurado!".

</div>

::: warning O token é segredo
O token dá controle total do bot. Não compartilhe em grupo, print ou e-mail. Se ele vazar, gere um novo no @BotFather (`/revoke`) e configure de novo aqui.
:::

::: tip Pode usar no FlowBuilder também
Diferente do bot de rastreamento, o bot de mensagens pode ser usado em ferramentas de FlowBuilder e na Track4you ao mesmo tempo. A tela confirma isso no selo "Compatível com ferramentas de FlowBuilder!".
:::

## Como conferir se deu certo

Depois de salvar, o topo da página mostra o card **"Bot de Mensagens"** com o username do bot e o token mascarado. Logo abaixo aparecem as seções **"Mensagens no Privado"** e **"Mensagens no Canal"**.

![Card "Bot de Mensagens" com o username do bot e os botões "Editar" e "Desconectar"](/img/pt-BR/messages/setup-message-bot-1.png)

## Trocar ou remover o bot de mensagens

- **"Editar"** abre o bot salvo para você conferir o username e o token.
- Para usar **outro bot**, clique em **"Desconectar"**, confirme em **"Desconectar"** e configure o bot novo pelo **"Configurar Bot"**. Enquanto nenhum bot estiver conectado, as mensagens automáticas não são enviadas.

## Problemas comuns

- **"Formato de token inválido."**: o token não foi copiado inteiro. Ele tem o formato `números:letras`, sem espaços. Copie de novo no @BotFather.
- **"Token inválido."**: o token foi digitado errado ou foi revogado. Pegue o token atual no @BotFather.
- **"Adicione o Bot ao canal configurado."**: o bot ainda não é administrador do canal conectado no menu **Canal**. Refaça o passo 2 e valide de novo.
- **"Este Bot já está cadastrado como Bot de Canal."**: você usou o token do bot de rastreamento. Crie ou use outro bot para as mensagens.
- **"Esse Bot já está cadastrado."**: esse bot já está em uso na Track4you, como bot de rastreamento ou de mensagens. Use um bot que ainda não esteja cadastrado.
- **"Você já cadastrou este Bot de Mensagens."**: esse bot já está salvo como bot de mensagens na sua conta.
- **"Este Bot já está vinculado a outra conta."**: o bot está em uso em outra conta da Track4you. Use um bot diferente.

Não resolveu? [Fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [Mensagens automáticas: o que dá pra fazer](./overview)
- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot)
- [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered)
