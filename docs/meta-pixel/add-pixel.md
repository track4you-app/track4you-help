---
title: "Cadastrar o pixel na Track4you"
description: 'Cadastre o seu pixel da Meta na Track4you com nome, ID e token da API de Conversões para começar a mandar os eventos dos seus funis.'
---

# Cadastrar o pixel na Track4you

É aqui que você liga o seu pixel da Meta à Track4you. Com o pixel cadastrado, cada visita, clique e entrada no canal dos seus funis chega na Meta com rastreamento avançado, pronta para otimizar as suas campanhas.

## Antes de começar

- **ID do pixel e token da API de Conversões** em mãos. Veja [Onde encontrar o ID do pixel e o token](./find-pixel-id-and-token).
- **Gerenciador de Eventos** da Meta aberto em outra aba: logo depois do cadastro vem o Evento Teste.
- **Assinatura ativa** e espaço no plano. Starter: 2 pixels · Pro: 4 · Enterprise: 8. Veja [Planos e limites](../account/plans-and-limits).

## Passo a passo

<div class="steps">

1. No menu, abra **Pixels** e clique em **"Novo"**. Se ainda não tem nenhum pixel, clique em **"Novo Pixel"**.

2. Na etapa **"Configuração"**, preencha:
   - **"Nome":** um nome só seu para reconhecer o pixel (ex.: "Pixel Principal").
   - **"ID":** o ID do pixel, só números (ex.: `1234567890123456`).
   - **"Token de Integração":** o token da API de Conversões que você gerou no Gerenciador de Eventos.

   Clique em **"Próximo"**.

   ![Modal "Novo Pixel" na etapa "Configuração" com Nome, ID e Token de Integração preenchidos](/img/pt-BR/meta-pixel/add-pixel-1.png)

3. A Track4you valida o ID e o token com a Meta. Deu certo: aparece "Pixel adicionado com sucesso!" e o modal passa para a etapa **"Evento Teste"**. Siga em [Enviar o Evento Teste e confirmar os eventos](./test-event).

</div>

::: tip Não pule o Evento Teste
É no Evento Teste que você confirma na Meta os eventos de entrada e saída do canal. Sem essa confirmação, eles não ficam disponíveis para otimizar as campanhas.
:::

## Como conferir se deu certo

- O pixel aparece em **"Meus Pixels"**, com o contador ao lado do botão **"Novo"** (ex.: "2/4").
- Depois do Evento Teste, a coluna **"Status"** mostra **"Recebendo dados"**. Veja [Status do pixel e Histórico de Erros](./status-and-errors).

![Lista "Meus Pixels" com nome, ID e status de cada pixel](/img/pt-BR/meta-pixel/add-pixel-2.png)

## Editar ou excluir um pixel

Na lista **"Meus Pixels"**, cada linha tem três ícones: **avião** (Evento Teste), **lápis** (editar nome, ID ou token) e **lixeira** (excluir).

- Para trocar o token, veja [Trocar o token do pixel sem perder eventos](./update-token).
- Para excluir, o pixel não pode estar em uso em nenhum funil. Confirme em **"Excluir o Pixel?"**: a exclusão não tem volta.

## Problemas comuns

- **"Token inválido"**: o token está errado, incompleto ou foi trocado por um novo na Meta. Gere outro e cole de novo. Veja [Onde encontrar o ID do pixel e o token](./find-pixel-id-and-token).
- **"ID do Pixel inválida"**: o ID não é de um pixel que esse token acessa. Confira se o ID e o token são do mesmo pixel.
- **"O Pixel ... já foi registrado para este usuário."**: esse pixel já está na sua lista. Use o que já existe.
- **O botão "Próximo" não libera**: preencha os três campos (Nome, ID e Token de Integração).
- **"Este Pixel não pode ser deletado, pois está vinculado a um funil."**: algum funil usa esse pixel. Troque o pixel do funil ou exclua o funil antes. Veja [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels).
- **O botão "Novo" abre o aviso de assinatura**: a sua assinatura não está ativa. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Onde encontrar o ID do pixel e o token da API de Conversões](./find-pixel-id-and-token)
- [Enviar o Evento Teste e confirmar os eventos](./test-event)
- [Eventos que chegam no seu pixel](./events-sent)
- [Criar um funil](../funnels/create-funnel)
