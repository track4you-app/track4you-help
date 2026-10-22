---
title: "Cadastrar e testar um postback"
description: 'Como cadastrar um postback na Track4you, escolher o evento, testar a URL e editar ou excluir depois.'
---

# Cadastrar e testar um postback

Cada postback liga **um evento** do funil a **uma URL** do seu sistema. Em poucos cliques você cadastra, testa e já começa a receber os leads no seu CRM, planilha ou automação.

## Antes de começar

- Tenha a **URL completa** que vai receber os dados, começando com `https://` (ex.: `https://webhook.agenciademo.com.br/track4you`). Ela precisa ser pública, acessível pela internet.
- Saiba qual evento você quer receber: "Visualização de Página", "Clique no Botão", "Entrada no Canal" ou "Saída do Canal". Veja [O que são postbacks](./overview).
- Assinatura ativa.

## Passo a passo

<div class="steps">

1. No menu, abra **Postbacks** e clique em **"Novo"**. Se ainda não houver nenhum postback, o botão aparece no centro da tela como **"Novo Postback"**.

   ![Lista "Meus Postbacks" com o botão "Novo" em destaque](/img/pt-BR/postbacks/create-postback-1.png)

2. Na janela **"Novo Postback"**, preencha:
   - **"Escolha o evento do Postback":** clique no cartão do evento que vai disparar este postback.
   - **"Nome":** um nome só seu para identificar o postback (ex.: "Meu CRM").
   - **"URL":** o endereço completo que vai receber os dados, **sempre com `https://`** no começo.

   ![Formulário do postback com o evento "Entrada no Canal" escolhido, o nome e a URL preenchidos](/img/pt-BR/postbacks/create-postback-2.png)

3. Clique em **"Testar Postback"**. A Track4you envia dados de exemplo para a sua URL. Se ela responder com sucesso, aparece **"Postback enviado com sucesso!"**.

   ![Botão "Testar Postback" em destaque](/img/pt-BR/postbacks/create-postback-3.png)

4. Clique em **"Salvar"**. Aparece **"Postback adicionado com sucesso!"** e o postback entra na lista **"Meus Postbacks"**.

</div>

::: tip O teste confirma a URL, o formato vem no artigo técnico
O **"Testar Postback"** usa dados de exemplo, só para confirmar que a sua URL está no ar e respondendo. Para montar o recebimento no seu sistema, siga o formato descrito em [Formato dos dados enviados](./payload-reference).
:::

## Editar um postback

1. Na lista **"Meus Postbacks"**, clique no **lápis** da linha.
2. A janela **"Editar Postback"** abre preenchida. Troque o evento, o nome ou a URL.
3. Clique em **"Salvar"**. Aparece **"Postback atualizado!"**.

## Excluir um postback

1. Clique na **lixeira** da linha.
2. Confirme em **"Excluir"**. Aparece **"Postback excluído com sucesso!"**.

::: danger A exclusão não pode ser desfeita
Depois de excluir, a URL para de receber os eventos na hora. Se precisar dela de novo, cadastre outra vez.
:::

## Como conferir se deu certo

- O postback aparece em **"Meus Postbacks"** com o nome, a URL e o tipo do evento.
- O teste mostrou **"Postback enviado com sucesso!"**.
- Gere um evento real (abra a página do funil, clique no botão ou entre no canal) e confira se ele chegou no seu sistema. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Problemas comuns

- **"Salvar" não libera:** escolha um evento, preencha o **"Nome"** e confira se a **"URL"** está completa.
- **"Erro ao enviar postback!" no teste:** confira se a URL está certa e começa com `https://`, se o seu sistema está no ar e se ele responde com sucesso (status 2xx) em até 5 segundos. Endereços internos (como `localhost` ou IPs da sua rede) não são aceitos: a URL precisa ser pública.
- **Botão "Novo" apagado:** você já tem 4 postbacks, o máximo. Exclua um que não usa ou edite um existente para trocar a URL ou o evento.
- **Ao clicar em "Novo", aparece um aviso sobre a assinatura:** para cadastrar postbacks a assinatura precisa estar ativa. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).
- **O teste deu certo, mas os eventos reais não chegam:** confira se escolheu o evento certo (por exemplo, "Entrada no Canal" e não "Saída do Canal") e se o funil está rastreando. Se continuar, [fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [O que são postbacks](./overview)
- [Formato dos dados enviados](./payload-reference)
- [Testar se o funil está rastreando](../funnels/test-funnel)
