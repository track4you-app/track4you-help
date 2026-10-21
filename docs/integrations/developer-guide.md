---
title: "Guia técnico da integração (para desenvolvedores)"
description: 'Como o Track4you repassa o click_id para a sua plataforma e como a plataforma deve devolver o postback S2S: formato, parâmetros, macros e testes.'
---

# Guia técnico da integração (para desenvolvedores)

:::: v-pre

Esta página foi escrita para ser **enviada ao time técnico** da casa de apostas, corretora ou plataforma de afiliados que vai mandar as conversões (registro, FTD, depósito) para o Track4you. Ela descreve o contrato completo: o que o Track4you envia para a plataforma e o que a plataforma precisa devolver.

::: tip Resumo em uma frase
O Track4you manda o visitante para a sua plataforma com um identificador único de clique na URL. A plataforma **guarda esse valor** e, quando a conversão acontece, **chama a nossa URL de postback devolvendo o mesmo valor no parâmetro `click_id`**.
:::

## Visão geral do fluxo

```text
1. Visitante clica no link de divulgação
   https://t4y.io/v2/aB3dE5fG

2. O Track4you registra o clique e redireciona (HTTP 302) para o destino,
   acrescentando o identificador único do clique:
   https://casademo.bet/cadastro?click_id=3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41

3. A plataforma lê o parâmetro e guarda o valor junto do cadastro do usuário.

4. Quando a conversão acontece (registro, FTD, depósito), a plataforma
   chama a URL de postback do Track4you (servidor para servidor):
   GET https://track4you.app/api/v1/webhook/event/hJ7kL9mN?click_id=3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41&event=ftd&amount=150.00

5. O Track4you reconhece o clique e envia a conversão para o pixel da Meta.
```

## Parte 1: o que o Track4you envia para a plataforma

### O link de divulgação

Cada integração gera um link curto no formato:

```text
https://t4y.io/v2/{slug}
```

- `{slug}` é um código de 8 caracteres que identifica a integração (diferencia maiúsculas de minúsculas).
- O link aceita parâmetros UTM (`utm_source`, `utm_medium`, `utm_campaign`), que ficam registrados junto do clique.

### O redirecionamento para o destino

A cada clique, o Track4you gera um **identificador único** e redireciona o visitante (HTTP 302) para o "Link de Redirect (Destino)" configurado na integração, acrescentando esse identificador num parâmetro da URL:

```text
https://casademo.bet/cadastro?click_id=3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41
```

- **Formato do valor:** UUID v4, 36 caracteres (letras minúsculas, números e hífens). Exemplo: `3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41`.
- **Um valor novo por clique.** Dois cliques do mesmo visitante geram dois identificadores diferentes.
- Se o destino já tiver parâmetros (`?ref=abc`), o identificador entra no final com `&`, e os parâmetros existentes são mantidos.

### O nome do parâmetro é configurável

Por padrão o identificador vai no parâmetro **`click_id`**. Como cada plataforma lê o identificador de clique (sub-id) num parâmetro diferente, o nome pode ser trocado no campo **"Identificador de URL"** da integração:

| Opção na tela | Como chega na URL de destino |
|---|---|
| "click_id (padrão)" | `?click_id=3f6c1a2e-...` |
| "afp" | `?afp=3f6c1a2e-...` |
| "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term" | `?utm_source=3f6c1a2e-...` (e assim por diante) |
| "Personalizado" | qualquer nome com letras, números, `_` ou `-`, sem espaços. Ex.: `?subid=3f6c1a2e-...`, `?aff_sub=3f6c1a2e-...` |

::: warning Confira com a plataforma qual parâmetro ela lê
O identificador só volta no postback se a plataforma **ler e guardar** o parâmetro em que ele chegou. Cada plataforma usa um nome (`click_id`, `clickid`, `afp`, `subid`, `sub1`, `aff_sub`, `utm_*`...). Pergunte ao suporte ou ao gerente de afiliados da plataforma **em qual parâmetro da URL ela recebe o sub-id/click id do afiliado** e escolha esse mesmo nome no "Identificador de URL".
:::

::: tip Escolheu um parâmetro UTM?
Se o "Identificador de URL" for, por exemplo, `utm_source`, esse parâmetro na URL de destino passa a carregar o identificador do clique. Não use o mesmo UTM para outra informação no link de destino.
:::

## Parte 2: o que a plataforma precisa devolver (postback)

### A URL de postback

Na etapa "Instalação", a integração mostra a **"Sua URL de Webhook (Postback)"**, neste formato:

```text
https://track4you.app/api/v1/webhook/event/{slug}?click_id={{click_id}}&event={tipo}[&amount={{value}}]
```

Exemplos de cada tipo de evento:

```text
Registro:
https://track4you.app/api/v1/webhook/event/aB3dE5fG?click_id={{click_id}}&event=register

FTD:
https://track4you.app/api/v1/webhook/event/hJ7kL9mN?click_id={{click_id}}&event=ftd&amount={{value}}

Depósito:
https://track4you.app/api/v1/webhook/event/pQ2rS4tU?click_id={{click_id}}&event=deposit&amount={{value}}
```

### Parâmetros

| Parâmetro | Obrigatório | O que enviar |
|---|---|---|
| `click_id` | **Sim** | O identificador que a plataforma recebeu no redirecionamento, **exatamente igual** (mesmas letras, hífens e tamanho). |
| `event` | Sim | Já vem preenchido na URL (`register`, `ftd`, `deposit` ou o nome do evento personalizado). **Não altere.** |
| `amount` | Só em FTD e Depósito | Valor da conversão, com **ponto** como separador decimal e sem símbolo de moeda: `150.00`, `49.9`, `1000`. |

::: danger A chave é sempre click_id
Mesmo que o "Identificador de URL" seja `afp`, `subid` ou um UTM, **na URL de postback a chave continua `click_id=`**. O que muda é só o que vai **dentro** das chaves: a macro da plataforma que devolve o valor recebido naquele parâmetro.

Exemplo com "Identificador de URL" = `afp`:

```text
O Track4you mostra:  ...?click_id={{afp}}&event=register
A plataforma usa:    ...?click_id={afp}&event=register      (macro da plataforma)
Chamada que chega:   ...?click_id=3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41&event=register
```
:::

### Troque `{{...}}` pela macro da sua plataforma

`{{click_id}}` e `{{value}}` são **marcadores**: o Track4you não os preenche. Antes de salvar na plataforma, substitua cada um pela **macro (variável) que a própria plataforma usa** para preencher aquele dado no momento do disparo. Cada plataforma tem a sua sintaxe:

| Sintaxe comum | Exemplo para o click id | Exemplo para o valor |
|---|---|---|
| Chaves simples | `{click_id}` | `{amount}` |
| Chaves duplas | `{{clickid}}` | `{{payout}}` |
| Colchetes | `[click_id]` | `[deposit_amount]` |
| Porcentagem | `%subid%` | `%value%` |

O nome da macro **varia de plataforma para plataforma** (`click_id`, `clickid`, `afp`, `sub1`, `subid`, `aff_sub`...). Confira na documentação de postback da plataforma, ou com o suporte dela, qual macro devolve o valor recebido no parâmetro escolhido no "Identificador de URL" e qual macro devolve o valor do depósito.

### Requisitos técnicos da chamada

- **Método:** `GET`, com os parâmetros na query string. Não envie corpo (JSON ou formulário).
- **Protocolo:** `https`.
- **Quando disparar:** uma chamada por conversão, no momento em que ela acontece (servidor para servidor). Cada integração representa **um** tipo de evento: configure uma URL de postback para cada evento na plataforma (uma para registro, outra para FTD, outra para depósito).
- **Resposta:** `HTTP 200` com o corpo `{"status":"ok"}` confirma o recebimento. `HTTP 404` indica slug errado na URL.
- **Caracteres especiais:** se a macro da plataforma puder trazer espaço ou acento, o valor deve ir codificado (URL encode). O identificador do Track4you não tem esses caracteres.

## Parte 3: como testar

<div class="steps">

1. Abra o link de divulgação (`https://t4y.io/v2/{slug}`) no navegador.
2. Ao chegar na plataforma, copie da barra de endereço o valor do parâmetro (ex.: `click_id=3f6c1a2e-...`).
3. Faça uma conversão de teste na plataforma (ex.: um cadastro). Se a plataforma tiver ferramenta de teste de postback, use o identificador copiado.
4. No Track4you, abra **Integrações → "Histórico de Eventos"** e procure o identificador no campo de busca. A conversão aparece com o tipo, o pixel e o valor.
5. Na tabela **"Integrações Realizadas"**, o status da integração passa para **"Recebendo dados"**.

</div>

::: warning Chamada manual vai para o pixel de verdade
Disparar a URL de postback na mão (navegador, `curl`, Postman) com um identificador real conta como conversão real e é enviada ao pixel. Para validar só a comunicação com a Meta, use o [Evento Teste da integração](./test-event).
:::

Exemplo de chamada manual (troque o identificador por um gerado no passo 2):

```bash
curl "https://track4you.app/api/v1/webhook/event/aB3dE5fG?click_id=3f6c1a2e-8b4d-4e7a-9c15-2d8e0f7b6a41&event=register"
```

## Checklist para o desenvolvedor

- ☐ A plataforma lê o parâmetro escolhido no "Identificador de URL" e guarda o valor no cadastro do usuário.
- ☐ O valor guardado é o identificador **inteiro** (36 caracteres), sem cortes nem alterações.
- ☐ A URL de postback foi colada **sem alterar** o domínio, o slug e o `event`.
- ☐ `{{click_id}}` (ou `{{afp}}`, `{{subid}}`...) foi trocado pela macro da plataforma, e a chave continua `click_id=`.
- ☐ Em FTD e Depósito, `{{value}}` foi trocado pela macro do valor, com ponto decimal.
- ☐ Cada evento (registro, FTD, depósito) tem a sua própria URL de postback, vinda da integração correspondente.
- ☐ O teste apareceu no "Histórico de Eventos" e a integração ficou "Recebendo dados".

## Problemas comuns

| Sintoma | Causa provável |
|---|---|
| Integração em **"Dados inválidos"** | O postback chegou sem o parâmetro `click_id`, ou com a chave trocada (ex.: `clickid=`, `afp=`). A chave tem que ser `click_id`. |
| Integração em **"Aguardando dados"** | Nenhum postback chegou ainda. Confira se a URL foi salva no evento certo da plataforma e se a conversão aconteceu. |
| Postback chega, mas a conversão não aparece no histórico | O valor devolvido não é o que o Track4you gerou: a macro está errada (devolve outro dado), o valor foi cortado, ou o visitante não passou pelo link de divulgação. |
| `click_id` chega literalmente como `{{click_id}}` ou `{click_id}` | A macro não existe na plataforma. Confira o nome exato da variável na documentação dela. |
| Valor do FTD/depósito errado | Macro do valor incorreta ou valor com vírgula. Use ponto: `150.00`. |

Ainda com dúvida? Fale com o [suporte do Track4you](https://track4you.app/suporte).

::::

## Relacionados

- [Configurar o postback na sua plataforma](./platform-postback)
- [Criar uma integração](./create-integration)
- [Tipos de evento: Registro, FTD, Depósito e Personalizado](./event-types)
- [Integração em "Aguardando dados" ou "Dados inválidos"](../troubleshooting/integration-status)
