---
title: "Trocar o Access Token do TikTok"
description: 'Quando trocar o Access Token do pixel do TikTok e como atualizar na Track4you logo em seguida, sem interromper o envio de eventos.'
---

# Trocar o Access Token do TikTok

Se você gerar um novo Access Token do TikTok, atualize na Track4you logo em seguida, para não interromper o envio de eventos. Por isso, a troca é feita em sequência, sem intervalo.

## Quando trocar

- O **"Histórico de Erros"** mostra o erro **40105** ou **40102** ("Access Token do TikTok inválido ou expirado"). Veja [Status do pixel e erros do TikTok](./status-and-errors).
- Você gerou um token novo no TikTok (por você ou por alguém do seu time).
- Você acha que o token vazou.

## Antes de começar

- Deixe a Track4you aberta na tela **Pixels** e o **Gerenciador de eventos** do TikTok aberto em outra aba.
- Confira se o seu usuário é **Admin ou Operador** da conta de anúncio do pixel.

## Passo a passo

<div class="steps">

1. Na Track4you, abra **Pixels** e clique no **lápis** da linha do pixel. Deixe o modal **"Editar Pixel"** aberto.

2. No **Gerenciador de eventos**, abra o pixel, vá em **Configurações** e gere o novo Access Token. Copie o token. Veja [Onde encontrar o código do pixel e o Access Token do TikTok](./find-pixel-id-and-token).

3. Volte na Track4you, apague o token antigo em **"Access Token"**, cole o novo e clique em **"Salvar"**. A tela confirma com "Pixel salvo com sucesso!".

   ![Modal "Editar Pixel" do TikTok com o campo "Access Token" destacado](/img/pt-BR/tiktok-pixel/update-token-1.png)

4. Clique no **avião** da linha do pixel e faça o Evento Teste. Veja [Enviar o Evento Teste no TikTok](./test-event).

</div>

::: danger Guarde o token como uma senha
Não compartilhe o token por WhatsApp, e-mail ou print.
:::

## Como conferir se deu certo

- A tela mostra "Pixel salvo com sucesso!" e, no Evento Teste, "Evento teste enviado".
- Não aparecem erros **40105** ou **40102** novos no **"Histórico de Erros"**.
- Com os eventos do funil chegando, o status do pixel em **"Meus Pixels"** mostra **"Recebendo dados"**.

## Problemas comuns

- **"Access Token do TikTok inválido ou expirado." ao salvar**: o token foi copiado incompleto. Copie de novo, inteiro.
- **"Access Token sem acesso a este pixel do TikTok." ao salvar**: gere o token na mesma conta de anúncio do pixel, com um usuário Admin ou Operador.
- **Gerei dois tokens seguidos**: cole na Track4you o mais recente.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Onde encontrar o código do pixel e o Access Token do TikTok](./find-pixel-id-and-token)
- [Status do pixel e erros do TikTok](./status-and-errors)
- [Enviar o Evento Teste no TikTok](./test-event)
