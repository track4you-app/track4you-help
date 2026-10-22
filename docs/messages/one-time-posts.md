---
title: "Disparos únicos: enviar agora ou agendar"
description: 'Poste uma mensagem no seu canal do Telegram na hora ou agende para uma data e horário, e acompanhe os disparos programados e concluídos.'
---

# Disparos únicos: enviar agora ou agendar

Os **Disparos Únicos** postam uma mensagem no seu canal uma vez só: na hora ou na data e horário que você agendar. Use para avisar a live da noite, liberar um bônus ou anunciar uma novidade.

## Antes de começar

- Bot de mensagens configurado e **administrador do canal com permissão para publicar mensagens**: é ele quem posta. Veja [Configurar o bot de mensagens](./setup-message-bot).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Mensagens no Canal"** > **"Disparos Únicos"** e clique em **"Novo Disparo"**.

   ![Lista de Disparos Únicos com o botão "Novo Disparo" em destaque](/img/pt-BR/messages/one-time-posts-1.png)

2. Na etapa **"Agendamento"** do modal **"Disparo de Mensagem"**, escolha o **"Momento do Envio"**:
   - **"Enviar Agora":** a mensagem é postada assim que você concluir.
   - **"Agendar":** escolha a **"Data de Envio"** no calendário e o **"Horário"** (hora e minutos).

   Clique em **"Próximo"**.

   ![Etapa "Agendamento" com "Agendar" selecionado, data 22/10 e horário 19:00](/img/pt-BR/messages/one-time-posts-2.png)

3. Na etapa **"Mensagem do Disparo"**, monte a mensagem (texto, imagem, vídeo, áudio ou bolinha, até 5 blocos). Veja [Editor de mensagens](./message-editor).

4. Clique em **"Enviar Mensagem"** (se escolheu enviar agora) ou **"Agendar Envio"** (se agendou). Aparece "Mensagem enviada." ou "Disparo agendado.".

   ![Etapa "Mensagem do Disparo" com um texto e o botão "Agendar Envio" em destaque](/img/pt-BR/messages/one-time-posts-3.png)

</div>

::: tip Escreva para o canal todo
O disparo é uma postagem no canal, lida por todos os membros. Escreva sem o nome do lead (sem `{first_name}`).
:::

## Acompanhar os disparos

A lista tem duas abas:

- **"Programados"**: disparos agendados que ainda vão sair, com o status "Programado".
- **"Concluídos"**: disparos que já saíram ("Enviado"), que não puderam ser enviados ("Falhou") ou que você cancelou ("Cancelado").

A coluna **"Agendamento"** mostra a data e a hora marcadas, ou "Imediato" para os enviados na hora.

## Cancelar um disparo agendado

Na aba **"Programados"**, clique no ícone de cancelar do disparo e confirme em **"Cancelar Disparo"**. Aparece "Cancelado." e ele vai para **"Concluídos"** como "Cancelado".

Não dá para editar um disparo depois de criado. Para mudar o texto ou o horário, cancele e crie um novo.

## Como conferir se deu certo

- **Enviar Agora:** a mensagem aparece no canal em instantes, postada pelo bot de mensagens.
- **Agendado:** o disparo aparece em **"Programados"** com a data e a hora. No horário marcado, ele é postado no canal e passa para **"Concluídos"** como "Enviado".

## Problemas comuns

- **"Próximo" desabilitado**: com "Agendar", escolha a data e o horário.
- **"Erro ao criar disparo."**: confira se a mensagem tem pelo menos um bloco preenchido e se a data e o horário ainda não passaram. Tente de novo.
- **Status "Falhou"**: o bot de mensagens não conseguiu postar. Confira se ele está conectado no menu **Mensagens** e se continua administrador do canal com permissão para publicar. Depois, crie o disparo de novo.

Não resolveu? [Fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [Disparos recorrentes no canal](./recurring-posts)
- [Editor de mensagens: blocos, formatação, botões e mídia](./message-editor)
- [Configurar o bot de mensagens](./setup-message-bot)
