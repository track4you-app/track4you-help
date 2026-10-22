---
title: "Instalar em outros construtores de página"
description: 'Regra geral para instalar a Track4you em qualquer construtor de página: o script no cabeçalho do site ou da página e o link de entrada no botão.'
---

# Instalar em outros construtores de página

A Track4you funciona em qualquer construtor que deixe colar um código no cabeçalho e colocar um link no botão. Os nomes dos menus mudam de um para outro, mas a regra é sempre a mesma.

## Antes de começar

- **Funil criado**, com o script e o link de entrada em mãos. Os dois ficam em **Funis** → **"Ver Tutorial"** (ícone de livro). Veja [Criar um funil](./create-funnel).
- **Acesso para editar** o site ou a página no seu construtor.

## A regra geral

<div class="steps">

1. **Script no cabeçalho.** Nas configurações do site ou da página, procure a opção de código no cabeçalho. Ela costuma se chamar "Código personalizado", "Scripts do cabeçalho", "Código no head", "Header code", "Custom code" ou "Código de rastreamento". Cole o script lá, sem alterar:

   ```html
   <script src="https://track4you.app/v2/9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f.js" defer></script>
   ```

2. **Link no botão.** Edite o botão que leva ao grupo e, no campo de link (ou "URL", "Ação ao clicar", "Abrir link"), cole o link de entrada do funil:

   ```text
   https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d
   ```

3. **Publique** a página. Se o construtor tiver versão de rascunho e versão publicada, confira se publicou.

</div>

Essa regra vale para os construtores mais usados, como Wix, Webflow, Framer, Systeme.io, Greatpages e páginas de plataformas de cursos e de e-mail marketing. Se tiver dúvida sobre onde fica o campo de cabeçalho no seu, procure na central de ajuda do construtor por "adicionar código ao head" ou "código personalizado".

::: tip Cabeçalho do site ou da página?
Tanto faz. Se o construtor deixa colar o código para o site inteiro, é mais prático: todas as páginas já ficam prontas. Se só deixa por página, cole em cada página do funil.
:::

::: warning Só no corpo da página? Fale com a gente
Alguns construtores só deixam colar código no meio da página, dentro de um bloco de HTML. Antes de usar esse caminho, chame o [suporte no WhatsApp](https://track4you.app/suporte) para conferir a melhor forma de instalar no seu caso.
:::

## Como conferir se deu certo

- Abra a página publicada e faça o [teste do funil](./test-funnel): a visita, o clique e a entrada aparecem no **Dashboard**.

## Problemas comuns

- **A visita não aparece no painel**: confira se o domínio da página publicada é o mesmo cadastrado em **Domínios** e se a página está cadastrada no funil. Domínio provisório do construtor (ex.: um endereço do próprio construtor) é outro domínio. Veja [Visitas não aparecem no painel](../troubleshooting/no-pageviews).
- **O clique não aparece**: confira se o botão abre o link de entrada do funil. Veja [Cliques não aparecem](../troubleshooting/no-clicks).

## Relacionados

- [Instalar o script na sua página](./install-script)
- [Instalar no WordPress (Elementor)](./install-on-wordpress)
- [Instalar em página HTML](./install-on-html)
- [Configurar o botão da página](./entry-link)
