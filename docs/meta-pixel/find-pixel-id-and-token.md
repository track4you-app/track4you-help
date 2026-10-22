---
title: "Onde encontrar o ID do pixel e o token da API de Conversões"
description: 'Caminho no Gerenciador de Eventos da Meta para copiar o ID do pixel e gerar o token de acesso da API de Conversões que a Track4you usa.'
---

# Onde encontrar o ID do pixel e o token da API de Conversões

Para ligar o seu pixel à Track4you você precisa de duas coisas da Meta: o **ID do pixel** e o **token de acesso da API de Conversões**. Os dois ficam no **Gerenciador de Eventos** e levam poucos minutos para pegar.

## Antes de começar

- Acesso ao **Gerenciador de Eventos** da Meta, com permissão de administrador no pixel (no portfólio empresarial onde ele está).
- Se ainda não tem pixel, crie um no próprio Gerenciador de Eventos (botão de conectar uma nova fonte de dados, opção Web).

::: tip Pixel ou "conjunto de dados"?
No Gerenciador de Eventos, a Meta chama o pixel de **conjunto de dados**. É a mesma coisa: o ID do conjunto de dados é o ID do pixel.
:::

## Passo a passo

<div class="steps">

1. Abra o **Gerenciador de Eventos** da Meta. Na lista **"Conjuntos de dados"**, encontre o seu pixel. O número em **"Identificação"**, embaixo do nome, é o **ID do pixel**. Copie e guarde.

   ![Lista "Conjuntos de dados" no Gerenciador de Eventos, com o nome e a identificação do pixel destacados](/img/pt-BR/meta-pixel/find-pixel-id-and-token-1.png)

2. Clique no nome do pixel e abra a aba **"Configurações"**. Em **"Detalhes"**, o mesmo número aparece em **"Identificação do conjunto de dados"**. Use este caminho se quiser conferir que copiou o ID do pixel certo.

   ![Seção "Detalhes" com a "Identificação do conjunto de dados" destacada](/img/pt-BR/meta-pixel/find-pixel-id-and-token-2.png)

3. Ainda em **"Configurações"**, desça até a seção da **API de Conversões**. Em **"Configurar integração direta"**, marque **"Configurar sem a Dataset Quality API"** e clique em **"Gerar token de acesso"**.

   ![Seção da API de Conversões com a opção "Configurar sem a Dataset Quality API" marcada e o botão "Gerar token de acesso"](/img/pt-BR/meta-pixel/find-pixel-id-and-token-3.png)

4. A Meta mostra o token gerado: um texto longo que começa com `EAA`. Clique para copiar e cole direto no campo **"Token de Integração"** da Track4you. Veja [Cadastrar o pixel na Track4you](./add-pixel).

</div>

::: danger O token é uma senha
Quem tem o token consegue enviar eventos para o seu pixel. Não mande por WhatsApp, e-mail ou print, e não cole em grupos. Cole só no campo **"Token de Integração"** da Track4you.
:::

::: warning Gerar um token novo derruba o anterior
Se esse pixel já tem um token em uso (na Track4you ou em outra ferramenta), gerar um novo invalida o atual na hora. Quando precisar trocar, siga [Trocar o token do pixel sem perder eventos](./update-token).
:::

## Como conferir se deu certo

- Você tem o **ID do pixel** (só números, ex.: `1234567890123456`) e o **token** (texto longo começando com `EAA`).
- Ao cadastrar na Track4you e clicar em **"Próximo"**, o pixel é validado com a Meta e o cadastro avança para o **"Evento Teste"**.

## Problemas comuns

- **Não aparece a opção de gerar token**: o seu usuário não tem permissão de administrador nesse pixel. Peça acesso a quem administra o portfólio empresarial.
- **Copiei o token, mas perdi**: gere outro e cole na Track4you logo em seguida. Lembre que o novo token substitui o anterior.
- **A Track4you diz "Token inválido" ou "ID do Pixel inválida"**: confira se o token e o ID são do mesmo pixel. Veja [Cadastrar o pixel na Track4you](./add-pixel).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Cadastrar o pixel na Track4you](./add-pixel)
- [Enviar o Evento Teste e confirmar os eventos](./test-event)
- [Trocar o token do pixel sem perder eventos](./update-token)
