---
title: "Enviar o Evento Teste e confirmar os eventos"
description: 'Envie o Evento Teste do pixel com o código do Gerenciador de Eventos e confirme na Meta os eventos de entrada e saída do canal para usar nas campanhas.'
---

# Enviar o Evento Teste e confirmar os eventos

O Evento Teste valida o seu pixel com a Meta e faz aparecer, no Gerenciador de Eventos, os dois eventos do canal: `enter_channel` (entrou no canal) e `left_channel` (saiu do canal). Confirmando esses eventos na Meta, eles ficam liberados para otimizar as suas campanhas.

## Antes de começar

- Pixel cadastrado na Track4you. Veja [Cadastrar o pixel na Track4you](./add-pixel).
- **Gerenciador de Eventos** da Meta aberto em outra aba, no pixel que você vai testar.

## Passo a passo

<div class="steps">

1. No **Gerenciador de Eventos**, clique no seu pixel e abra a aba **"Eventos de teste"**. Na parte dos eventos do servidor, copie o **código de teste** (ex.: `TEST12345`) pelo botão **"Copiar"**. Deixe essa aba aberta.

   ![Código de teste do servidor no Gerenciador de Eventos, com o botão "Copiar"](/img/pt-BR/meta-pixel/test-event-1.png)

2. Na Track4you, abra o **"Evento Teste"**:
   - Se acabou de cadastrar o pixel, ele já abre depois do **"Próximo"**.
   - Se o pixel já existe, abra **Pixels** e clique no **avião** da linha do pixel.

3. Cole o código em **"Código de Teste"** e clique em **"Enviar Evento Teste"**. Cole só o código (ex.: `TEST12345`), sem o texto `test_event_code:`.

   ![Modal "Evento Teste" com o "Código de Teste" preenchido e o botão "Enviar Evento Teste"](/img/pt-BR/meta-pixel/test-event-2.png)

4. Volte para a aba **"Eventos de teste"** da Meta e aguarde: em alguns instantes chegam o `enter_channel` e o `left_channel`.

5. Os dois eventos aparecem com um sinal de aviso (⚠️). Clique no aviso e **confirme o evento**. Faça isso nos dois. A partir daí eles ficam disponíveis para otimização nas campanhas.

</div>

::: tip Por que confirmar?
`enter_channel` e `left_channel` são eventos personalizados. A Meta só deixa usar evento personalizado em campanha depois que você confirma que ele é seu. Basta fazer isso uma vez por pixel.
:::

## Como conferir se deu certo

- Na aba **"Eventos de teste"** da Meta, o `enter_channel` e o `left_channel` aparecem recebidos e sem o sinal de aviso depois de confirmados.
- Na Track4you, a coluna **"Status"** do pixel em **"Meus Pixels"** mostra **"Aguardando eventos"**, e muda para **"Recebendo dados"** quando os eventos reais do funil começam a chegar. Se ainda não mudou, atualize a página.

## Problemas comuns

- **Os eventos não aparecem na Meta**: confira se colou o código do mesmo pixel que está testando, sem espaços e sem o texto `test_event_code:`. Copie o código de novo e reenvie.
- **O status continua "Pixel inativo"**: o envio não foi validado pela Meta. Confira o token e o ID do pixel pelo **lápis** da linha (veja [Trocar o token do pixel sem perder eventos](./update-token)) e envie o Evento Teste outra vez.
- **O botão "Enviar Evento Teste" não libera**: preencha o **"Código de Teste"**.
- **Não encontro onde confirmar o evento**: procure o sinal de aviso (⚠️) ao lado do nome do evento no Gerenciador de Eventos e clique nele. Se o evento ainda não apareceu, envie o Evento Teste de novo com a aba "Eventos de teste" aberta.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Eventos que chegam no seu pixel](./events-sent)
- [Otimizar suas campanhas para entrada no canal](./optimize-for-channel-joins)
- [Status do pixel e Histórico de Erros](./status-and-errors)
- [Eventos não chegam no pixel](../troubleshooting/meta-events-missing)
