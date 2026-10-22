---
title: "Disparos recorrentes no canal"
description: 'Programe postagens automáticas no seu canal do Telegram em dias e horários fixos, com variações sorteadas a cada envio.'
---

# Disparos recorrentes no canal

Os **Disparos Recorrentes** postam no seu canal nos dias e horários que você definir, toda semana, sem você precisar estar online. Bom para o "bom dia" de todo dia, o lembrete da live ou o aviso de horário de entradas. Cada disparo pode ter várias **variações**, e a cada envio a Track4you sorteia uma, para o canal não ficar repetitivo.

## Antes de começar

- Bot de mensagens configurado e **administrador do canal com permissão para publicar mensagens**: é ele quem posta. Veja [Configurar o bot de mensagens](./setup-message-bot).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Mensagens no Canal"** > **"Disparos Recorrentes"** e clique em **"Nova Mensagem"**.

   ![Lista de Disparos Recorrentes com o botão "Nova Mensagem" em destaque](/img/pt-BR/messages/recurring-posts-1.png)

2. Na etapa **"Agendamento"** do modal **"Configurar Recorrente"**, preencha:
   - **"Nome da mensagem":** um nome só seu para identificar o disparo (ex.: "Bom dia, time!").
   - **"Dias de Envio":** clique nos dias ou use os atalhos **"Todos os Dias"**, **"Dias de Semana"** ou **"Fins de Semana"**.
   - **"Horários de Envio":** digite a hora e os minutos (HH : MM) e clique em **"Adicionar"**. Repita para cada horário. Para tirar um horário, clique no **x** dele.

   Clique em **"Próximo"**.

   ![Etapa "Agendamento" com o nome, os dias de semana marcados e os horários 08:00 e 12:00](/img/pt-BR/messages/recurring-posts-2.png)

3. Na etapa **"Variações"**, clique em **"Nova Variação"**, monte a mensagem no editor (texto, imagem, vídeo, áudio ou bolinha, até 5 blocos) e clique em **"Salvar Variação"**. Veja [Editor de mensagens](./message-editor).

4. Repita para criar mais variações, se quiser. Em cada variação você pode **editar**, **duplicar** (bom ponto de partida para uma versão parecida) ou **excluir**.

   ![Etapa "Variações" com a Variação 1 e os botões de editar, duplicar e excluir](/img/pt-BR/messages/recurring-posts-3.png)

5. Clique em **"Salvar"**. Aparece "Recorrente criada." e o disparo entra na lista.

</div>

::: tip Escreva para o canal todo
O disparo é uma postagem no canal, lida por todos os membros. Escreva sem o nome do lead (sem `{first_name}`).
:::

## Pausar, editar ou excluir

Na lista, cada disparo mostra o nome, o começo da mensagem, os dias e os horários.

- **Pausar:** desligue a chave do disparo. Ele fica acinzentado e não posta até você ligar de novo.
- **Editar:** clique no ícone de lápis, ajuste e salve. Aparece "Recorrente atualizada.".
- **Excluir:** clique na lixeira e confirme em **"Excluir"**. O disparo é apagado de vez.

## Como conferir se deu certo

- O disparo aparece na lista com a chave ligada, os dias (ex.: "Dias de semana") e os horários.
- No próximo dia e horário da lista, a mensagem é postada no canal pelo bot de mensagens.

## Problemas comuns

- **"Próximo" desabilitado**: falta o nome, pelo menos um dia ou pelo menos um horário.
- **"Salvar" desabilitado**: a etapa "Variações" precisa de pelo menos uma variação com conteúdo ("Adicione pelo menos uma para salvar").
- **"Erro ao salvar."**: confira os campos e tente de novo.
- **A mensagem não foi postada**: confira se a chave do disparo está ligada, se o dia e o horário estão na lista e se o bot de mensagens continua administrador do canal com permissão para publicar. Se continuar, [fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [Disparos únicos: enviar agora ou agendar](./one-time-posts)
- [Editor de mensagens: blocos, formatação, botões e mídia](./message-editor)
- [Configurar o bot de mensagens](./setup-message-bot)
