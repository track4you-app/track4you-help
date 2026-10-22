---
title: "Formato dos dados enviados"
description: 'Referência técnica dos postbacks da Track4you: método, formato JSON e o significado de cada campo, com exemplos por evento.'
---

# Formato dos dados enviados

Referência para quem vai **receber** os postbacks no seu sistema (CRM, n8n, Make, API própria). Se você não é da parte técnica, mande este artigo para o seu desenvolvedor.

## Como a requisição chega

| Item | Valor |
|---|---|
| Método | `POST` |
| Formato do corpo | JSON (`Content-Type: application/json`) |
| Destino | A URL cadastrada no postback, exatamente como foi salva (sempre com `https://`) |
| Quando | A cada evento do tipo escolhido no postback. Se você tiver dois postbacks do mesmo evento, cada URL recebe o seu envio |
| Resposta esperada | Qualquer status `2xx`, o mais rápido possível |

::: tip Boas práticas no seu endpoint
- **Responda rápido** com `200` e processe os dados depois, em segundo plano.
- **Mantenha o endpoint no ar.** Cada evento é enviado uma única vez para cada postback.
- **Proteja a URL.** A requisição não leva cabeçalho de autenticação. Use um endereço difícil de adivinhar, por exemplo com um código secreto no caminho (`https://webhook.agenciademo.com.br/track4you/a8f3k2`).
- **Use o `type`** do corpo para saber qual evento chegou, principalmente se a mesma URL recebe mais de um evento.
:::

## Estrutura geral

Todo envio tem os mesmos blocos. Entrada e saída do canal trazem também o bloco `telegram` e as datas.

| Bloco | O que traz |
|---|---|
| `type` | O evento: `pageview`, `button_click`, `enter_channel` ou `left_channel` |
| `origin` | A página de onde o lead veio e os parâmetros da campanha |
| `user` | Dados do visitante: IP, navegador, localização e, na entrada e na saída, o ID do Telegram e as datas |
| `tracking` | Identificadores do Meta ligados ao visitante, quando disponíveis |
| `track4you` | Identificação do evento e do funil na Track4you |
| `telegram` | Canal em que o lead entrou ou saiu (só em `enter_channel` e `left_channel`) |

### Valores de `type`

| Evento na tela | `type` |
|---|---|
| "Visualização de Página" | `pageview` |
| "Clique no Botão" | `button_click` |
| "Entrada no Canal" | `enter_channel` |
| "Saída do Canal" | `left_channel` |

## Exemplo: Visualização de Página

O mesmo formato vale para `button_click`.

```json
{
  "type": "pageview",
  "origin": {
    "url": "https://lancamentoblack.com.br/vip?utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento-black",
    "utms": "utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento-black",
    "domain": "lancamentoblack.com.br"
  },
  "user": {
    "ip": "203.0.113.10",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "country": "BR",
    "state": "SP",
    "city": "São Paulo",
    "zip": "01310"
  },
  "tracking": {
    "fbp": "fb.1.1792602012000.1234567890",
    "fbc": "fb.1.1792602012000.IwAR0demoClique"
  },
  "track4you": {
    "event_id": "5f2c1a9e-7b3d-4e8a-9c6f-2d1e0b9a8c7d",
    "funnel_id": "0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
    "funnel_name": "Lançamento Black",
    "link": "https://t.me/+DemoConviteAbc123"
  }
}
```

## Exemplo: Entrada no Canal

```json
{
  "type": "enter_channel",
  "origin": {
    "url": "https://lancamentoblack.com.br/vip?utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento-black",
    "utms": "utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento-black",
    "domain": "lancamentoblack.com.br"
  },
  "user": {
    "ip": "203.0.113.10",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "country": "BR",
    "state": "SP",
    "city": "São Paulo",
    "zip": "01310",
    "telegram_id": "5512345678",
    "enter_channel_date": "2026-10-21T22:40:12.000000Z"
  },
  "tracking": {
    "fbp": "fb.1.1792602012000.1234567890",
    "fbc": "fb.1.1792602012000.IwAR0demoClique"
  },
  "track4you": {
    "event_id": "5f2c1a9e-7b3d-4e8a-9c6f-2d1e0b9a8c7d",
    "funnel_id": "0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
    "funnel_name": "Lançamento Black",
    "link": "https://t.me/+DemoConviteAbc123"
  },
  "telegram": {
    "channel_id": "-1001234567890",
    "channel_name": null
  }
}
```

## Exemplo: Saída do Canal

Igual à entrada, com `"type": "left_channel"` e o campo `left_channel_date` dentro de `user`:

```json
{
  "type": "left_channel",
  "user": {
    "telegram_id": "5512345678",
    "enter_channel_date": "2026-10-21T22:40:12.000000Z",
    "left_channel_date": "2026-10-28T09:15:47.000000Z"
  }
}
```

O trecho acima mostra só o que muda. Os blocos `origin`, `tracking`, `track4you` e `telegram` e os demais campos de `user` chegam completos, como no exemplo de entrada.

## Referência dos campos

| Campo | Tipo | O que é |
|---|---|---|
| `type` | texto | Evento que gerou o envio (tabela acima) |
| `origin.url` | texto | Endereço completo da página de origem, com os parâmetros da campanha |
| `origin.utms` | texto | Só os parâmetros da URL, no formato `chave=valor&chave=valor`. É texto, não objeto: separe pelo `&` se precisar de cada UTM |
| `origin.domain` | texto | Domínio da página de origem |
| `user.ip` | texto | IP do visitante |
| `user.user_agent` | texto | Navegador e aparelho do visitante |
| `user.country` | texto | País |
| `user.state` | texto | Estado |
| `user.city` | texto | Cidade |
| `user.zip` | texto | CEP (pode vir parcial) |
| `user.telegram_id` | texto | ID do lead no Telegram. Só em `enter_channel` e `left_channel` |
| `user.enter_channel_date` | data | Data e hora da entrada no canal, em ISO 8601 (UTC). Só em `enter_channel` e `left_channel` |
| `user.left_channel_date` | data | Data e hora da saída, em ISO 8601 (UTC). Só em `left_channel` |
| `tracking.fbp` | texto | Identificador de navegador do Meta, quando disponível. Útil se o seu sistema também envia eventos para a Meta |
| `tracking.fbc` | texto | Identificador de clique do Meta, quando o lead veio de um anúncio |
| `track4you.event_id` | texto (UUID) | Identificador da visita na Track4you. A visualização, o clique e a entrada da mesma visita podem trazer o mesmo valor: para evitar duplicidade no seu sistema, combine `event_id` com `type` |
| `track4you.funnel_id` | texto (UUID) | ID do funil (o mesmo do link de entrada `https://t4y.io/v2/...`) |
| `track4you.funnel_name` | texto | Nome do funil, como está cadastrado |
| `track4you.link` | texto | Link de convite do canal usado por esse funil |
| `telegram.channel_id` | texto | ID do canal do Telegram. Só em `enter_channel` e `left_channel` |
| `telegram.channel_name` | texto | Nome do canal. Pode vir `null`: para identificar o canal, use `channel_id` |

::: warning Campos podem vir vazios
Qualquer campo de `user` e de `tracking` pode chegar como `null` quando a informação não estiver disponível (por exemplo, `fbc` de quem não veio de anúncio). Trate esses casos no seu sistema.
:::

## Testar o recebimento

O botão **"Testar Postback"** envia dados de exemplo para a sua URL e mostra **"Postback enviado com sucesso!"** quando ela responde com `2xx`. Ele serve para confirmar que o endpoint está no ar. Para validar o formato completo, gere um evento real no funil (abra a página, clique no botão ou entre no canal) e confira o que chegou. Veja [Cadastrar e testar um postback](./create-postback).

## Relacionados

- [O que são postbacks](./overview)
- [Cadastrar e testar um postback](./create-postback)
- [Testar se o funil está rastreando](../funnels/test-funnel)
