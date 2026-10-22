---
title: "Mensagem de boas-vindas (Entrada)"
description: 'Configure a mensagem que o lead recebe no privado assim que pede para entrar no seu canal do Telegram.'
---

# Mensagem de boas-vindas (Entrada)

A mensagem de **Entrada** chega no privado do lead no momento em que ele pede para entrar no seu canal. É o primeiro contato: dá para se apresentar, chamar pelo nome, mandar as regras do canal e já entregar um material.

## Antes de começar

- Bot de mensagens configurado. Veja [Configurar o bot de mensagens](./setup-message-bot).
- Funil com **"Solicitação de Entrada"** ligada. A boas-vindas vai para quem pede para entrar pelo link desse funil. Veja [Solicitação de Entrada no funil](../funnels/join-request).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Mensagens no Privado"** > **"Configurações Padrão"** e, no cartão **"Entrada"**, clique em **"Configurar"**.

   ![Cartão "Entrada" nas Configurações Padrão com o botão "Configurar" em destaque](/img/pt-BR/messages/welcome-message-1.png)

2. No modal **"Configurar Mensagem"**, monte a mensagem com os botões de **"Adicionar:"** (texto, imagem, vídeo, áudio, bolinha e delay). Você pode usar até 5 blocos, e eles chegam ao lead na ordem da tela. Veja todos os detalhes em [Editor de mensagens](./message-editor).

   ![Modal "Configurar Mensagem" com um texto de boas-vindas, um delay de 5 segundos e uma imagem](/img/pt-BR/messages/welcome-message-2.png)

3. Clique em **"Salvar"**. Aparece "Mensagem padrão salva!" e a chave do cartão **"Entrada"** fica ligada.

</div>

Exemplo de boas-vindas:

```
Olá, {first_name}! Bem-vindo ao Sinais VIP Demo.
Fique ligado nas próximas entradas.
[Botão: Ver regras do canal]
```

O `{first_name}` é trocado pelo primeiro nome do lead no Telegram. Insira pelo botão `{}` do bloco de texto.

::: tip Combine com a aprovação automática
Com o **Auto-Aceite** ligado e um tempo de espera, o lead recebe a boas-vindas logo ao pedir entrada e é aprovado depois. Assim ele lê a sua mensagem antes de cair no canal. Veja [Aprovação automática (Auto-Aceite)](./auto-accept).
:::

Para mudar a mensagem depois, clique de novo em **"Configurar"**, edite e salve. A versão nova vale a partir dali.

## Como conferir se deu certo

1. Com uma conta pessoal do Telegram que **não** seja administradora do canal, abra a sua página e clique no botão que leva ao canal.
2. Peça para entrar no canal.
3. A mensagem de boas-vindas chega no privado, enviada pelo bot de mensagens.

## Problemas comuns

- **"Preencha todos os campos obrigatórios antes de salvar."**: algum bloco está vazio (texto sem conteúdo ou mídia sem arquivo). Preencha ou exclua o bloco.
- **"Aguarde o upload dos arquivos finalizar."**: espere o arquivo terminar de subir e clique em **"Salvar"** de novo.
- **A mensagem não chegou**: confira se o lead pediu entrada pelo link de um funil com "Solicitação de Entrada" e se o bot de mensagens continua administrador do canal. Veja [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered).

## Relacionados

- [Editor de mensagens: blocos, formatação, botões e mídia](./message-editor)
- [Aprovação automática (Auto-Aceite)](./auto-accept)
- [Mensagem de saída](./exit-message)
- [Mensagens diferentes por funil](./funnel-rules)
