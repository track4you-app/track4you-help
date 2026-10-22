---
title: "Instalar no WordPress (Elementor)"
description: 'Como colar o script da Track4you no cabeçalho de um site WordPress com Elementor e colocar o link de entrada do funil no botão da página.'
---

# Instalar no WordPress (Elementor)

No WordPress, você instala o script uma vez no cabeçalho do site e coloca o link de entrada do funil no botão da página no Elementor. São dois ajustes rápidos.

## Antes de começar

- **Funil criado**, com o script e o link de entrada em mãos. Os dois ficam em **Funis** → **"Ver Tutorial"** (ícone de livro). Veja [Criar um funil](./create-funnel).
- **Acesso de administrador** ao painel do WordPress.

## Parte 1: colar o script no cabeçalho

Escolha **um** dos caminhos abaixo.

### Com Elementor Pro (Código personalizado)

<div class="steps">

1. No painel do WordPress, vá em **Elementor** → **Código personalizado** (em inglês, "Custom Code") e clique em **Adicionar novo**.

2. Dê um nome ao código (ex.: "Track4you") e cole o script no campo de código:

   ```html
   <script src="https://track4you.app/v2/9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f.js" defer></script>
   ```

3. Em **Local**, escolha **`<head>`**.

4. Clique em **Publicar** e, nas condições de exibição, escolha **Site inteiro** (ou só as páginas do funil). Salve.

</div>

### Sem Elementor Pro (plugin de cabeçalho)

<div class="steps">

1. No painel do WordPress, vá em **Plugins** → **Adicionar novo**, procure por **WPCode** (antigo "Insert Headers and Footers"), instale e ative.

2. Vá em **Code Snippets** → **Header & Footer** (em português pode aparecer como "Cabeçalho e rodapé").

3. Cole o script no campo **Header** (cabeçalho) e clique em **Salvar alterações**.

</div>

::: tip Já tem outro plugin de cabeçalho?
Se o seu tema ou outro plugin já tem um campo de "scripts no cabeçalho" (ou "head"), pode colar o script lá. O importante é que ele fique no cabeçalho das páginas do funil.
:::

## Parte 2: colocar o link de entrada no botão

<div class="steps">

1. Abra a página do funil em **Páginas** → **Editar com Elementor**.

2. Clique no botão que leva ao grupo.

3. No painel da esquerda, aba **Conteúdo**, cole o link de entrada do funil no campo **Link**:

   ```text
   https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d
   ```

4. Se a página tiver mais de um botão para o grupo, repita em todos. Clique em **Atualizar** para publicar.

</div>

::: warning Usa plugin de cache?
Se o site usa plugin de cache ou de otimização (WP Rocket, LiteSpeed Cache, W3 Total Cache e parecidos), limpe o cache depois de instalar. Assim a versão nova da página, já com o script, vai para o ar na hora.
:::

## Como conferir se deu certo

- Abra a página publicada e faça o [teste do funil](./test-funnel): a visita, o clique e a entrada aparecem no **Dashboard**.

## Problemas comuns

- **Não aparece "Código personalizado" no menu do Elementor**: esse recurso é do Elementor Pro. Use o caminho com plugin de cabeçalho.
- **A visita não aparece no painel**: confira se o endereço da página publicada é o mesmo cadastrado no funil e limpe o cache do site. Veja [Visitas não aparecem no painel](../troubleshooting/no-pageviews).
- **O clique não aparece**: confira se o campo **Link** do botão tem o link de entrada do funil. Veja [Cliques não aparecem](../troubleshooting/no-clicks).

## Relacionados

- [Instalar o script na sua página](./install-script)
- [Configurar o botão da página](./entry-link)
- [Instalar em outros construtores de página](./install-on-other-builders)
- [Testar se o funil está rastreando](./test-funnel)
