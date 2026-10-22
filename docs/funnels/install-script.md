---
title: "Instalar o script na sua página"
description: 'Onde pegar o script da Track4you e como colar no cabeçalho (head) de cada página do funil para começar a rastrear visitas, cliques e entradas.'
---

# Instalar o script na sua página

O script é o código que liga a sua página à Track4you. Com ele no cabeçalho, cada visita e cada clique no botão passam a ser rastreados e enviados para o seu pixel.

## Antes de começar

- **Funil criado**, com as páginas cadastradas. Veja [Criar um funil](./create-funnel).
- **Acesso para editar a página** (construtor de páginas, WordPress ou o arquivo HTML).

## Passo a passo

<div class="steps">

1. No menu, abra **Funis** e clique em **"Ver Tutorial"** (ícone de livro) na linha do funil. Se acabou de criar o funil, o mesmo conteúdo aparece na etapa **"Instalação"**.

2. Em **"Adicione esse código ao Head do seu site"**, clique em **"Copiar"**. O botão muda para **"Copiado!"**.

   ![Modal "Tutorial de Instalação" com o script e o botão "Copiar" destacados](/img/pt-BR/funnels/install-script-1.png)

3. Abra a sua página no editor e cole o script no **cabeçalho** (a parte `<head>` da página), sem alterar nada. O código copiado tem este formato:

   ```html
   <script src="https://track4you.app/v2/9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f.js" defer></script>
   ```

4. Repita em **todas as páginas** cadastradas no funil e publique as alterações.

</div>

Cada construtor tem um lugar diferente para o cabeçalho. Veja o guia do seu:

- [Instalar no WordPress (Elementor)](./install-on-wordpress)
- [Instalar em página HTML](./install-on-html)
- [Instalar em outros construtores de página](./install-on-other-builders)

::: tip Um script para a conta inteira
O script é o mesmo para todos os seus funis e todas as suas páginas. Se você já instalou numa página, pode usar exatamente o mesmo código nas próximas, mesmo de outros funis.
:::

::: warning Cole sem alterar
Copie sempre pelo botão **"Copiar"** e cole o código inteiro, do `<script` até o `</script>`. Não troque nenhum caractere nem tire o `defer`.
:::

Depois do script, configure o botão da página com o link de entrada do funil: veja [Configurar o botão da página](./entry-link).

## Como conferir se deu certo

- Abra a página publicada e faça o [teste do funil](./test-funnel): a visita aparece no **Dashboard**, no card **"Pageviews"**.

## Problemas comuns

- **A visita não aparece no painel**: confira se o endereço da página está igual ao cadastrado no funil (mesmo domínio e mesma página), se o script está no cabeçalho e se a página foi publicada. Veja [Visitas não aparecem no painel](../troubleshooting/no-pageviews).
- **O construtor não deixa colar código no cabeçalho**: procure a opção de "código personalizado" ou "scripts" nas configurações do site ou da página. Veja [Instalar em outros construtores de página](./install-on-other-builders).

## Relacionados

- [Criar um funil](./create-funnel)
- [Configurar o botão da página](./entry-link)
- [Testar se o funil está rastreando](./test-funnel)
- [Visitas não aparecem no painel](../troubleshooting/no-pageviews)
