---
title: "Trocar o token do pixel sem perder eventos"
description: 'Como gerar um token novo da API de Conversões e atualizar o pixel na Track4you na hora, sem deixar de mandar eventos para a Meta.'
---

# Trocar o token do pixel sem perder eventos

Gerar um token novo na Meta **derruba o token anterior na hora**. A partir desse momento, o pixel só volta a receber os eventos dos seus funis quando o token novo estiver salvo na Track4you. Por isso, a troca é feita em sequência, sem intervalo.

![Aviso "Importante" da tela Pixels sobre gerar um novo token](/img/pt-BR/meta-pixel/update-token-1.png)

## Quando trocar

- O **"Histórico de Erros"** mostra o erro **190** ("Token de acesso inválido ou expirado"). Veja [Status do pixel e Histórico de Erros](./status-and-errors).
- Você gerou um token novo na Meta (por você ou por alguém do seu time).
- Você acha que o token vazou.

## Antes de começar

- Deixe a Track4you aberta na tela **Pixels** e o **Gerenciador de Eventos** aberto em outra aba.
- Escolha um momento com menos tráfego, se puder.

## Passo a passo

<div class="steps">

1. Na Track4you, abra **Pixels** e clique no **lápis** da linha do pixel. Deixe o modal **"Editar Pixel"** aberto.

2. No **Gerenciador de Eventos**, gere o token novo: abra o pixel, vá em **"Configurações"**, na seção da API de Conversões marque **"Configurar sem a Dataset Quality API"** e clique em **"Gerar token de acesso"**. Copie o token. Veja o caminho com prints em [Onde encontrar o ID do pixel e o token](./find-pixel-id-and-token).

3. Volte na Track4you, apague o token antigo em **"Token de Integração"**, cole o novo e clique em **"Salvar"**. A tela confirma com "Pixel salvo com sucesso!".

   ![Modal "Editar Pixel" com o campo "Token de Integração" destacado](/img/pt-BR/meta-pixel/update-token-2.png)

4. Clique no **avião** da linha do pixel e faça o Evento Teste para confirmar que o token novo está valendo. Veja [Enviar o Evento Teste e confirmar os eventos](./test-event).

</div>

::: danger Guarde o token como uma senha
Não compartilhe o token por WhatsApp, e-mail ou print. Se ele vazou, gere um novo e atualize aqui: o antigo deixa de funcionar.
:::

## Como conferir se deu certo

- O Evento Teste chega na aba **"Eventos de teste"** da Meta.
- O status do pixel em **"Meus Pixels"** mostra **"Recebendo dados"** e não aparecem erros 190 novos no **"Histórico de Erros"**.

## Problemas comuns

- **"Token inválido" ao salvar**: o token foi copiado incompleto ou é de outro pixel. Copie de novo, inteiro.
- **Usa o mesmo pixel em mais de uma ferramenta**: o token novo vale para todas. Atualize em cada uma logo depois de gerar, começando pela Track4you.
- **Gerei dois tokens seguidos**: só o último vale. Cole na Track4you o mais recente.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Onde encontrar o ID do pixel e o token da API de Conversões](./find-pixel-id-and-token)
- [Status do pixel e Histórico de Erros](./status-and-errors)
- [Enviar o Evento Teste e confirmar os eventos](./test-event)
