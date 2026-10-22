---
title: "Mensagem de saída"
description: 'Configure a mensagem de retenção que o lead recebe no privado quando sai do seu canal do Telegram.'
---

# Mensagem de saída

A mensagem de **Saída** chega no privado do lead quando ele sai do canal. É a sua chance de recuperar quem foi embora: lembrar o que ele está perdendo, oferecer um bônus ou mandar um link para voltar.

A mensagem chega mesmo que o lead saia dias ou semanas depois de entrar, desde que ele não tenha bloqueado o seu bot de mensagens.

## Antes de começar

- Bot de mensagens configurado. Veja [Configurar o bot de mensagens](./setup-message-bot).
- Leads entrando pelo link de um funil com **"Solicitação de Entrada"**: é o mesmo caminho que leva a boas-vindas. Veja [Solicitação de Entrada no funil](../funnels/join-request).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Mensagens no Privado"** > **"Configurações Padrão"** e, no cartão **"Saída"**, clique em **"Configurar"**.

   ![Cartão "Saída" nas Configurações Padrão com o botão "Configurar" em destaque](/img/pt-BR/messages/exit-message-1.png)

2. Monte a mensagem no modal **"Configurar Mensagem"**, com até 5 blocos (texto, imagem, vídeo, áudio, bolinha e delay). Veja [Editor de mensagens](./message-editor).

3. Clique em **"Salvar"**. Aparece "Mensagem padrão salva!" e a chave do cartão **"Saída"** fica ligada.

</div>

Exemplo de mensagem de saída:

```
Sentimos sua falta, {first_name}!
Volte quando quiser: o canal continua aberto pra você.
[Botão: Quero voltar]
```

::: tip O que costuma funcionar na saída
- Mensagem curta e pessoal, com o nome do lead.
- Um motivo para voltar: bônus, próxima live, resultado recente.
- Um botão com link para a sua página, para o lead voltar pelo mesmo caminho e continuar no seu rastreamento.
:::

Para mudar a mensagem, clique de novo em **"Configurar"**, edite e salve.

## Como conferir se deu certo

1. Com uma conta pessoal do Telegram que **não** seja administradora do canal, entre no canal pela sua página (pedindo entrada pelo funil).
2. Depois de aprovado, saia do canal.
3. A mensagem de saída chega no privado, enviada pelo bot de mensagens.

## Problemas comuns

- **O "Salvar" do modal está cinza**: algum bloco está vazio ou o texto ainda está em edição. Preencha ou exclua o bloco e clique em **"Salvar"** dentro do bloco de texto.
- **A mensagem não chegou**: confira se o lead entrou pelo link de um funil com "Solicitação de Entrada" e se o bot de mensagens continua administrador do canal. Veja [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered).

## Relacionados

- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Editor de mensagens: blocos, formatação, botões e mídia](./message-editor)
- [Mensagens diferentes por funil](./funnel-rules)
