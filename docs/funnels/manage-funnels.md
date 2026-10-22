---
title: "Editar, ver tutorial ou excluir um funil"
description: 'Como editar um funil, copiar de novo o script e o link de entrada pelo "Ver Tutorial" e excluir um funil que você não usa mais.'
---

# Editar, ver tutorial ou excluir um funil

Cada funil da **"Lista de Funis"** tem três ações no fim da linha: **"Ver Tutorial"** (livro), **Editar** (lápis) e **Excluir** (lixeira).

![Ações de um funil na "Lista de Funis": ver tutorial, editar e excluir](/img/pt-BR/funnels/manage-funnels-1.png)

## Ver Tutorial: copiar o script e o link de novo

Clique no ícone de livro. O modal **"Tutorial de Instalação"** mostra:

- **"Adicione esse código ao Head do seu site"**: o script para o cabeçalho das páginas.
- **"Utilize esse link para entrada no seu Grupo"**: o link de entrada para o botão.

Use o botão **"Copiar"** de cada um. É o jeito mais rápido de pegar o script e o link sempre que precisar montar uma página nova. Veja [Instalar o script na sua página](./install-script) e [Configurar o botão da página](./entry-link).

## Editar um funil

<div class="steps">

1. Clique no lápis na linha do funil. Abre o modal **"Editar Funil"**.

   ![Modal "Editar Funil" com o domínio travado](/img/pt-BR/funnels/manage-funnels-2.png)

2. Altere o que precisar:
   - **"Nome do Funil"**.
   - **"Pixel"**: o pixel que recebe as conversões do funil.
   - **"Ativar Solicitação de Entrada"**: ligar ou desligar. Veja [Solicitação de Entrada no funil](./join-request).
   - **Páginas**: adicione em **"Adicionar URLs"** (até 5) ou remova pela lixeira.

3. Clique em **"Salvar"**.

</div>

O script e o link de entrada continuam os mesmos depois de editar: não precisa mexer nas páginas nem nos botões. Só instale o script nas páginas novas que você adicionou.

::: tip Quer trocar o domínio?
O domínio de um funil não muda depois de criado. Para usar outro domínio, crie um funil novo com ele. Veja [Criar um funil](./create-funnel).
:::

## Excluir um funil

<div class="steps">

1. Clique na lixeira na linha do funil.

2. Confira o nome do funil na mensagem **"Excluir o funil?"** e clique em **"Excluir"**.

   ![Confirmação "Excluir o funil?"](/img/pt-BR/funnels/manage-funnels-3.png)

</div>

::: danger A exclusão é definitiva
Excluir não tem volta. As entradas por esse funil deixam de ser rastreadas: antes de excluir, troque o link de entrada nas páginas e nos botões que usavam o funil. Quando o funil sai da lista, ele também libera uma vaga no limite do seu plano.
:::

## Como conferir se deu certo

- **Editou:** a **"Lista de Funis"** mostra o nome, o pixel e as **"Páginas Registradas"** atualizados.
- **Excluiu:** o funil some da lista e o contador ao lado de **"Novo"** diminui.

## Problemas comuns

- **"Essa combinação de domínio + URL já está cadastrada em outro funil."**: a página que você quer adicionar já está em outro funil. Remova dela no outro funil primeiro.
- **"Você já possui um funil com esse nome."**: escolha outro nome.
- **Não consigo excluir um domínio ou pixel**: domínios e pixels em uso por um funil não podem ser excluídos. Edite o funil para usar outro pixel ou exclua o funil antes. Veja [Editar ou excluir um domínio](../domains/manage-domains).

## Relacionados

- [Criar um funil](./create-funnel)
- [Instalar o script na sua página](./install-script)
- [Configurar o botão da página](./entry-link)
- [Solicitação de Entrada no funil](./join-request)
