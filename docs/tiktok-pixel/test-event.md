---
title: "Enviar o Evento Teste no TikTok"
description: 'Envie o Evento Teste do pixel do TikTok com o código da aba "Eventos de teste". No TikTok não é preciso confirmar nenhum evento.'
---

# Enviar o Evento Teste no TikTok

O Evento Teste valida a ligação do seu pixel com o TikTok. E tem uma boa notícia em relação à Meta: **no TikTok não é preciso aceitar nada**. Os eventos que importam são eventos padrão do TikTok, prontos para otimizar campanha.

## Antes de começar

- Pixel do TikTok cadastrado na Track4you. Veja [Cadastrar o pixel do TikTok na Track4you](./add-pixel).
- **Gerenciador de eventos** do TikTok aberto em outra aba, no pixel que você vai testar.

## Passo a passo

<div class="steps">

1. No **Gerenciador de eventos** do TikTok, selecione o pixel e vá na aba **"Eventos de teste"**. Copie o **código de teste**: ele começa com `TEST` (ex.: `TEST12345`). Deixe essa aba aberta.

2. Na Track4you, abra o **"Evento Teste"**:
   - Se acabou de cadastrar o pixel, ele já abre depois do **"Próximo"**.
   - Se o pixel já existe, abra **Pixels** e clique no **avião** da linha do pixel.

3. Cole o código em **"Código de Teste"** e clique em **"Enviar Evento Teste"**.

   ![Modal "Evento Teste" do TikTok com o "Código de Teste" preenchido e a lista de eventos enviados](/img/pt-BR/tiktok-pixel/test-event-1.png)

4. A tela confirma com "Evento teste enviado". Volte para a aba **"Eventos de teste"** do TikTok e confira.

</div>

## Quais eventos são enviados

| Evento | Quando acontece no funil |
|---|---|
| `Lead` | Quando um usuário entra no canal |
| `Contact` | Quando clica no botão da página |
| `ViewContent` | Quando abre a página |
| `left_channel` | Quando sai do canal (personalizado, só para público) |

Veja os detalhes em [Eventos que chegam no seu pixel do TikTok](./events-sent).

::: tip Diferente da Meta
Na Meta, os eventos do canal são personalizados e precisam ser confirmados no Gerenciador de Eventos. No TikTok, a entrada no canal chega como `Lead`, um evento padrão, então não existe essa etapa.
:::

## Como conferir se deu certo

- Na Track4you, a tela mostra "Evento teste enviado". Isso confirma o envio.
- Na aba **"Eventos de teste"** do TikTok, você acompanha o que chegou.
- Na coluna **"Status"** de **"Meus Pixels"**, o pixel passa para **"Aguardando eventos"** e muda para **"Recebendo dados"** quando os eventos reais do funil começarem a chegar. Veja [Status do pixel e erros do TikTok](./status-and-errors).

## Problemas comuns

- **"Não foi possível enviar o evento teste. Confira o código do pixel, o token e o código de teste."**: confira os dados do pixel pelo **lápis** da linha e copie o código de teste de novo.
- **"O pixel do TikTok está disponível nos planos Pro e Enterprise."**: o pixel está pausado porque o seu plano não inclui o TikTok. Veja [Trocar de plano](../account/change-plan).
- **Enviei, mas não vejo na aba do TikTok**: confira se copiou o código de teste do mesmo pixel que está testando, sem espaços, e envie de novo.
- **O botão "Enviar Evento Teste" não libera**: preencha o **"Código de Teste"**.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Eventos que chegam no seu pixel do TikTok](./events-sent)
- [Otimizar campanhas do TikTok para entrada no canal](./optimize-for-channel-joins)
- [Status do pixel e erros do TikTok](./status-and-errors)
- [Eventos não chegam no TikTok](../troubleshooting/tiktok-events-missing)
