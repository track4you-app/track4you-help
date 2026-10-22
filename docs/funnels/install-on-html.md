---
title: "Instalar em página HTML"
description: 'Exemplo pronto de página HTML com o script da Track4you no head e o botão apontando para o link de entrada do funil.'
---

# Instalar em página HTML

Se a sua página é um arquivo HTML (feito à mão, exportado de um construtor ou hospedado no seu servidor), a instalação é colar o script dentro do `<head>` e usar o link de entrada do funil no botão.

## Antes de começar

- **Funil criado**, com o script e o link de entrada em mãos. Os dois ficam em **Funis** → **"Ver Tutorial"** (ícone de livro). Veja [Criar um funil](./create-funnel).
- **Acesso ao arquivo** da página (pelo gerenciador de arquivos da hospedagem, FTP ou editor de código).

## Passo a passo

<div class="steps">

1. Abra o arquivo HTML da página do funil (ex.: o `index.html` da pasta `vip`).

2. Procure a tag `<head>` no começo do arquivo. Cole o script logo antes do `</head>`.

3. Procure o botão que leva ao grupo e coloque o link de entrada do funil no `href`.

4. Salve o arquivo e envie para a hospedagem. Repita em todas as páginas do funil.

</div>

## Exemplo pronto

Página `lancamentoblack.com.br/vip` com o script no `<head>` e o botão com o link de entrada:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lançamento Black | Grupo VIP</title>

  <!-- Track4you: cole aqui, dentro do head -->
  <script src="https://track4you.app/v2/9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f.js" defer></script>
</head>
<body>

  <h1>Entre no Grupo VIP</h1>
  <p>Receba os sinais em primeira mão no nosso canal do Telegram.</p>

  <!-- Botão com o link de entrada do funil -->
  <a href="https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d" class="botao">
    Quero entrar no grupo
  </a>

</body>
</html>
```

::: tip O botão é um link
Use o botão como link (`<a href="...">`), com o link de entrada do funil no `href`. Pode estilizar do jeito que quiser: o que importa é o endereço.
:::

::: warning Use o seu script e o seu link
O código acima usa dados de exemplo. Copie o script e o link do seu funil em **"Ver Tutorial"** e cole sem alterar.
:::

## Como conferir se deu certo

- Abra a página publicada e faça o [teste do funil](./test-funnel).
- Se quiser conferir o código, abra a página no navegador, clique com o botão direito e escolha **Exibir código-fonte**: o script precisa aparecer dentro do `<head>`.

## Problemas comuns

- **A visita não aparece no painel**: confira se o arquivo editado é o da página cadastrada no funil e se ele foi enviado para a hospedagem. Veja [Visitas não aparecem no painel](../troubleshooting/no-pageviews).
- **O clique não aparece**: confira se o `href` do botão tem o link de entrada do funil. Veja [Cliques não aparecem](../troubleshooting/no-clicks).

## Relacionados

- [Instalar o script na sua página](./install-script)
- [Configurar o botão da página](./entry-link)
- [Instalar em outros construtores de página](./install-on-other-builders)
- [Testar se o funil está rastreando](./test-funnel)
