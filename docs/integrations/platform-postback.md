---
title: "Configurar o postback na sua plataforma"
description: 'Onde colar a URL de postback na sua casa de apostas ou corretora e como trocar o click_id e o valor pelas macros da plataforma.'
---

# Configurar o postback na sua plataforma

:::: v-pre

O postback é o aviso que a sua plataforma manda para a Track4you quando a conversão acontece. Sem ele configurado, a integração fica em "Aguardando dados".

## Antes de começar

- Integração criada. Veja [Criar uma integração](./create-integration).
- Acesso ao painel de afiliados da plataforma (área de "Postback", "S2S", "Webhook" ou "Pixel de servidor").
- A documentação de postback da plataforma, ou o contato do suporte dela.

## Passo a passo

<div class="steps">

1. Em **Integrações**, na integração desejada, clique no ícone **"Ver Tutorial"** (livro) e copie a **"Sua URL de Webhook (Postback)"**.

   ![URL de Webhook (Postback) na etapa "Instalação"](/img/pt-BR/integrations/platform-postback-1.png)

2. No painel de afiliados da plataforma, abra a configuração de postback e escolha o **mesmo evento** da integração (registro, FTD ou depósito).

3. Cole a URL no campo **"Postback URL"** (ou "S2S Webhook").

4. Troque os marcadores pelas **macros da plataforma**:
   - `{{click_id}}` → a macro que devolve o click id que a plataforma recebeu da Track4you.
   - `{{value}}` (só em FTD e Depósito) → a macro que devolve o valor do depósito.

5. Salve e repita para cada evento que você integrou.

</div>

### Exemplo

URL que a Track4you mostra:

```text
https://track4you.app/api/v1/webhook/event/hJ7kL9mN?click_id={{click_id}}&event=ftd&amount={{value}}
```

URL salva numa plataforma que usa macros entre chaves simples:

```text
https://track4you.app/api/v1/webhook/event/hJ7kL9mN?click_id={click_id}&event=ftd&amount={amount}
```

::: warning Cada plataforma tem as suas macros
Os nomes e o formato das macros mudam de uma plataforma para outra: `{click_id}`, `{{clickid}}`, `[subid]`, `%afp%`, `{sub1}`... **Confira na documentação de postback da plataforma, ou com o suporte dela**, qual macro devolve o click id e qual devolve o valor. Se o time técnico da plataforma for configurar por você, mande para eles o [Guia técnico da integração](./developer-guide).
:::

## Regras que não podem quebrar

- **Não mude** o começo da URL, o código depois de `/event/` nem o `event=`.
- A chave é sempre **`click_id=`**, mesmo que o "Identificador de URL" da integração seja outro (`afp`, `subid`, um UTM...). Só o que vai depois do `=` é trocado pela macro.
- Valor com **ponto** decimal (`150.00`), sem "R$".
- **Uma URL por evento.** A URL da integração de Registro vai no postback de registro; a de FTD, no de FTD, e assim por diante.

## Como conferir se deu certo

Faça uma conversão de teste pelo seu **link de divulgação**. Em alguns minutos:

- a integração muda para **"Recebendo dados"**;
- a conversão aparece no **"Histórico de Eventos"**.

## Problemas comuns

- **Status "Dados inválidos"**: o postback chegou sem o `click_id`. Confira se a chave está escrita `click_id=` e se a macro existe na plataforma.
- **Continua "Aguardando dados"**: nenhum postback chegou. Confira se a URL foi salva no evento certo e se a conversão de teste foi feita a partir do link de divulgação.

Mais detalhes em [Integração em "Aguardando dados" ou "Dados inválidos"](../troubleshooting/integration-status).

::::

## Relacionados

- [Guia técnico da integração (para desenvolvedores)](./developer-guide)
- [Status e Histórico de Eventos](./event-history)
- [Criar uma integração](./create-integration)
