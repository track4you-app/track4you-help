---
title: "Configurar o botão da página"
description: 'Como usar o link de entrada do funil (t4y.io/v2) no botão da sua página para rastrear cada clique e cada entrada no canal do Telegram.'
---

# Configurar o botão da página

O botão da sua página é a ponte entre a página e o canal. Com o link de entrada do funil nele, cada clique e cada entrada no canal ficam ligados à campanha de origem, com rastreamento avançado e 99,9% de assertividade.

## Antes de começar

- **Funil criado.** Veja [Criar um funil](./create-funnel).
- **Script instalado** no cabeçalho das páginas do funil. Veja [Instalar o script na sua página](./install-script).

## Passo a passo

<div class="steps">

1. No menu, abra **Funis** e clique em **"Ver Tutorial"** (ícone de livro) na linha do funil.

2. Em **"Utilize esse link para entrada no seu Grupo"**, clique em **"Copiar"**.

   ![Link de entrada do funil com o botão "Copiar" destacado](/img/pt-BR/funnels/entry-link-1.png)

3. No editor da sua página, cole o link no botão que leva ao grupo (no campo de link ou URL do botão). O link tem este formato:

   ```text
   https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d
   ```

4. Se a página tiver mais de um botão para o grupo (no topo, no meio e no fim, por exemplo), use o mesmo link em todos. Publique a página.

</div>

Veja onde fica o campo de link no seu construtor: [WordPress (Elementor)](./install-on-wordpress), [página HTML](./install-on-html) ou [outros construtores](./install-on-other-builders).

## Boas práticas

- **Um link por funil.** Cada funil tem o seu link de entrada. Nas páginas de um funil, use só o link desse funil.
- **O anúncio leva para a página.** O anúncio aponta para a sua página de captura, e o botão da página leva ao canal pelo link de entrada. É esse caminho que a Track4you acompanha do começo ao fim.
- **Use UTMs nos anúncios.** Os parâmetros que você coloca no link do anúncio (como `utm_source`, `utm_medium` e `utm_campaign`) aparecem em **Métricas**, lead a lead.
- **Telegram só para o grupo.** Nas páginas do funil, use links do Telegram apenas no botão de entrada no canal. Para suporte ou contato, prefira WhatsApp, e-mail ou uma página fora do funil.

::: warning Use sempre o link do funil
Não use o link de convite do Telegram (`t.me/+...`) nem o @ do canal no botão. O link de entrada do funil é o que garante que cada entrada seja rastreada e entregue ao seu pixel.
:::

## Como conferir se deu certo

- Abra a página publicada, clique no botão e confira se ele abre o seu canal no Telegram.
- Faça o [teste do funil](./test-funnel): o clique aparece no **Dashboard**, no card **"Cliques"**.

## Problemas comuns

- **O clique não aparece no painel**: confira se o botão tem o link de entrada do funil atual (e não o de um funil que você excluiu). Veja [Cliques não aparecem](../troubleshooting/no-clicks).
- **A entrada no canal não aparece**: confira se a pessoa entrou clicando no botão da página. Veja [Entradas no canal não aparecem](../troubleshooting/no-joins).

## Relacionados

- [Instalar o script na sua página](./install-script)
- [Testar se o funil está rastreando](./test-funnel)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
- [Cliques não aparecem](../troubleshooting/no-clicks)
