---
title: "Onde encontrar o código do pixel e o Access Token do TikTok"
description: 'Caminho no TikTok Ads Manager para copiar o código do pixel e gerar o Access Token que a Track4you usa para mandar os eventos do seu funil.'
---

# Onde encontrar o código do pixel e o Access Token do TikTok

Para ligar o seu pixel do TikTok à Track4you você precisa de duas coisas: o **código do pixel** e o **Access Token**. Os dois ficam no **Gerenciador de eventos** do TikTok Ads Manager.

## Antes de começar

- O pixel do TikTok está nos planos **Pro** e **Enterprise**. Veja [Planos e limites](../account/plans-and-limits).
- Você precisa ser **Admin ou Operador** da conta de anúncio do pixel.
- Se ainda não tem pixel, crie um no próprio Gerenciador de eventos, em **Web**. Você não precisa instalar o código do pixel na sua página: o script da Track4you já cuida disso.

::: tip Os nomes das telas do TikTok mudam
O TikTok muda nomes de botões e menus com frequência. Se algum rótulo estiver um pouco diferente, procure a opção com o mesmo sentido.
:::

## Passo a passo

<div class="steps">

1. No **TikTok Ads Manager**, abra **Ferramentas** → **Gerenciador de eventos** → **Web** e clique no seu pixel.

2. Copie o **código do pixel** e guarde. Ele tem letras maiúsculas e números (ex.: `CABC123DEF456GHI7J8K`). Na Meta o ID é só número; no TikTok, não.

3. Ainda no pixel, abra **Configurações** e gere o **Access Token**.

4. Copie o token e cole direto no campo **"Access Token"** da Track4you. Veja [Cadastrar o pixel do TikTok na Track4you](./add-pixel).

</div>

::: danger O token é uma senha
Quem tem o token consegue enviar eventos para o seu pixel. Não mande por WhatsApp, e-mail ou print, e não cole em grupos. Cole só no campo **"Access Token"** da Track4you.
:::

::: warning Gerar um token novo derruba o anterior
Se esse pixel já tem um token em uso (na Track4you ou em outra ferramenta), gerar um novo invalida o atual. Quando precisar trocar, siga [Trocar o Access Token do TikTok](./update-token).
:::

## Como conferir se deu certo

- Você tem o **código do pixel** (letras maiúsculas e números, de 15 a 30 caracteres) e o **Access Token**.
- Ao cadastrar na Track4you e clicar em **"Próximo"**, o par é conferido com o TikTok e o cadastro avança para o **"Evento Teste"**.

## Problemas comuns

- **Não aparece a opção de gerar o token**: o seu usuário precisa ser Admin ou Operador da conta de anúncio. Peça acesso a quem administra a conta.
- **Copiei o token, mas perdi**: gere outro e cole na Track4you logo em seguida. Lembre que o novo token substitui o anterior.
- **A Track4you recusa o token**: veja a mensagem na tela e a correção em [Status do pixel e erros do TikTok](./status-and-errors).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Cadastrar o pixel do TikTok na Track4you](./add-pixel)
- [Enviar o Evento Teste no TikTok](./test-event)
- [Trocar o Access Token do TikTok](./update-token)
