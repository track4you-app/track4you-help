---
title: "Integração em \"Aguardando dados\" ou \"Dados inválidos\""
description: 'O que fazer quando a integração não recebe conversões ou recebe postback sem o click_id.'
---

# Integração em "Aguardando dados" ou "Dados inválidos"

:::: v-pre

![Status das integrações](/img/pt-BR/troubleshooting/integration-status-1.png)

## "Dados inválidos"

A plataforma mandou o postback, mas **sem o parâmetro `click_id`**. Confira na plataforma:

<div class="steps">

1. A chave na URL está escrita exatamente **`click_id=`** (não `clickid=`, `click=`, `afp=`, `subid=`). Mesmo que o "Identificador de URL" seja outro, a chave da URL de postback é sempre `click_id`.
2. Depois do `=` está a **macro da plataforma** (ex.: `{click_id}`, `{afp}`, `[subid]`), e não o marcador `{{click_id}}` do Track4you.
3. A macro existe na plataforma e devolve o valor recebido no parâmetro que a integração usa. Confira na documentação de postback da plataforma ou com o suporte dela.

</div>

Corrigiu? Na próxima conversão que chegar certa, o status volta para "Recebendo dados".

## "Aguardando dados"

Nenhum postback chegou ainda. Confira:

- **A URL foi salva no evento certo** da plataforma (a integração de FTD no postback de FTD, e assim por diante).
- **A conversão de teste veio do link de divulgação** (`https://t4y.io/v2/...`). Lead que entrou direto no site da plataforma, sem passar pelo link, não é rastreado.
- **O endereço não foi alterado**: domínio, código depois de `/event/` e o `event=` iguais aos da tela "Ver Tutorial".
- **A plataforma lê o parâmetro certo.** Abra o link de divulgação e veja na barra de endereço em que parâmetro o identificador chegou (ex.: `?click_id=...`). A plataforma precisa ler e guardar esse parâmetro. Se ela usa outro nome, ajuste o "Identificador de URL" da integração. Veja [Editar ou excluir uma integração](../integrations/manage-integrations).

## Chega postback, mas a conversão não aparece no histórico

O identificador devolvido não é o que o Track4you gerou no clique. Causas comuns:

- a macro devolve outro dado (ex.: o ID do usuário na plataforma, e não o click id);
- a plataforma corta ou altera o valor (ele tem 36 caracteres, com hífens);
- o lead não passou pelo link de divulgação.

Para o time técnico da plataforma, mande o [Guia técnico da integração](../integrations/developer-guide): ele traz o formato exato do que sai e do que precisa voltar, com checklist e exemplo de teste.

Ainda com dúvida? Fale com o [suporte](https://track4you.app/suporte).

::::

## Relacionados

- [Configurar o postback na sua plataforma](../integrations/platform-postback)
- [Status e Histórico de Eventos](../integrations/event-history)
