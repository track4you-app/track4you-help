---
title: "Cadastrar o pixel do TikTok na Track4you"
description: 'Cadastre o seu pixel do TikTok com nome, código e Access Token. Disponível nos planos Pro e Enterprise, dentro do mesmo limite de pixels do plano.'
---

# Cadastrar o pixel do TikTok na Track4you

É aqui que você liga o seu pixel do TikTok à Track4you. Com o pixel cadastrado e escolhido no funil, cada visita, clique e entrada no canal chega no TikTok com rastreamento avançado, pronta para otimizar as suas campanhas.

## Antes de começar

- **Plano Pro ou Enterprise.** O Starter fica só com a Meta. Veja [Trocar de plano](../account/change-plan).
- **Espaço no limite de pixels.** O pixel do TikTok soma com os da Meta: Pro 4 pixels, Enterprise 8. Veja [Planos e limites](../account/plans-and-limits).
- **Código do pixel e Access Token** em mãos. Veja [Onde encontrar o código do pixel e o Access Token do TikTok](./find-pixel-id-and-token).
- **Gerenciador de eventos** do TikTok aberto em outra aba: logo depois do cadastro vem o Evento Teste.

## Passo a passo

<div class="steps">

1. No menu, abra **Pixels** e clique em **"Novo"**. Se ainda não tem nenhum pixel, clique em **"Novo Pixel"**.

2. Em **"Plataforma"**, escolha o card **"TikTok"**.

3. Na etapa **"Configuração"**, preencha:
   - **"Nome":** um nome só seu para reconhecer o pixel (ex.: "Pixel TikTok").
   - **"Código do Pixel":** o código copiado do Gerenciador de eventos (ex.: `CABC123DEF456GHI7J8K`).
   - **"Access Token":** o token que você gerou nas configurações do pixel.

   Clique em **"Próximo"**.

   ![Modal "Novo Pixel" com o card "TikTok" escolhido e Nome, Código do Pixel e Access Token preenchidos](/img/pt-BR/tiktok-pixel/add-pixel-1.png)

4. A Track4you confere o código e o token com o TikTok. Deu certo: aparece "Pixel adicionado com sucesso!" e o modal passa para a etapa **"Evento Teste"**. Siga em [Enviar o Evento Teste no TikTok](./test-event).

</div>

::: warning A plataforma não muda depois
Depois de salvo, o pixel continua sempre na mesma plataforma. Para usar outra, cadastre um pixel novo.
:::

## Como conferir se deu certo

- O pixel aparece em **"Meus Pixels"** com o logo do TikTok na coluna **"Plataforma"**.
- O contador ao lado do botão **"Novo"** soma Meta e TikTok (ex.: "3/4").

![Lista "Meus Pixels" com as colunas Plataforma e Status, com pixels da Meta e do TikTok](/img/pt-BR/tiktok-pixel/add-pixel-2.png)

## Usar o pixel no funil

Cada funil manda os eventos para **um pixel**. Para mandar para o TikTok, escolha o pixel do TikTok no campo **"Pixel"** do funil. Veja [Criar um funil](../funnels/create-funnel).

Quer rodar Meta e TikTok no mesmo canal? Crie um funil para cada plataforma. Cada funil precisa das **próprias páginas**, porque a mesma página não pode estar em dois funis.

## Sua página já tem o pixel do TikTok?

Não precisa instalar nada a mais: o script da Track4you já carrega o pixel. Se a página já tem o código do pixel, a visita não conta em dobro. Se esse código também dispara eventos próprios (como `ViewContent`, `Contact` ou `Lead`), tire esses disparos, porque a Track4you já manda esses eventos.

## Editar ou excluir um pixel

Na lista **"Meus Pixels"**, cada linha tem três ícones: **avião** (Evento Teste), **lápis** (editar nome, código ou token) e **lixeira** (excluir).

- Para trocar o token, veja [Trocar o Access Token do TikTok](./update-token).
- Para excluir, o pixel não pode estar em uso em nenhum funil. Confirme em **"Excluir o Pixel?"**: a exclusão não tem volta.

## Problemas comuns

- **O card do TikTok aparece com cadeado e "PRO E ENTERPRISE"**: o seu plano não inclui o TikTok. Clique em **"Ver planos"** para trocar de plano ou em **"Cadastrar pixel da Meta"** para seguir com a Meta. Veja [Trocar de plano](../account/change-plan).

  ![Modal "Novo Pixel" no Starter: card do TikTok com cadeado e o aviso "O pixel do TikTok está nos planos Pro e Enterprise"](/img/pt-BR/tiktok-pixel/add-pixel-3.png)

- **"Access Token do TikTok inválido ou expirado."**: o token está errado ou incompleto. Gere um novo em Gerenciador de eventos → pixel → Configurações e cole de novo.
- **"Access Token sem acesso a este pixel do TikTok."**: gere o Access Token na mesma conta de anúncio do pixel, com um usuário Admin ou Operador.
- **"O código do pixel do TikTok tem letras maiúsculas e números (de 15 a 30)."**: confira se copiou o código inteiro.
- **"O Pixel ... já foi registrado para este usuário."**: esse pixel já está na sua lista. Use o que já existe.
- **O botão "Próximo" não libera**: preencha os três campos (Nome, Código do Pixel e Access Token).
- **"Este Pixel não pode ser deletado, pois está vinculado a um funil."**: algum funil usa esse pixel. Troque o pixel do funil ou exclua o funil antes. Veja [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Onde encontrar o código do pixel e o Access Token do TikTok](./find-pixel-id-and-token)
- [Enviar o Evento Teste no TikTok](./test-event)
- [Eventos que chegam no seu pixel do TikTok](./events-sent)
- [Criar um funil](../funnels/create-funnel)
