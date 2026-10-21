---
title: "Status e Histórico de Eventos"
description: 'Acompanhe o status de cada integração e todas as conversões que chegaram da sua plataforma, com valor, evento no pixel e filtros.'
---

# Status e Histórico de Eventos

Na tela de **Integrações** você acompanha, em tempo real, se cada integração está recebendo conversões e o que já foi entregue ao pixel.

## Status da integração

Na tabela **"Integrações Realizadas"**, a coluna "Status" mostra:

| Status | O que significa |
|---|---|
| **"Recebendo dados"** (verde) | A plataforma já mandou conversões por esta integração. Tudo funcionando. |
| **"Aguardando dados"** (amarelo) | Nenhuma conversão chegou ainda. É o normal logo depois de criar. |
| **"Dados inválidos"** (vermelho) | Chegou postback **sem o parâmetro `click_id`**. Revise a URL na plataforma. |

![Coluna "Status" das integrações](/img/pt-BR/troubleshooting/integration-status-1.png)

Se a integração não sai de "Aguardando dados" ou ficou em "Dados inválidos", veja [Integração em "Aguardando dados" ou "Dados inválidos"](../troubleshooting/integration-status).

## Histórico de Eventos

Logo abaixo da lista fica o **"Histórico de Eventos"**: cada conversão que chegou das suas plataformas, já com o nome com que foi entregue ao pixel.

![Histórico de Eventos com conversões de registro, FTD e depósito](/img/pt-BR/integrations/event-history-1.png)

### Colunas

- **Data** e **Horário** da conversão.
- **Nome Interno**: o nome da integração.
- **Evento no Pixel**: como o evento chegou na Meta (`CompleteRegistration`, `FTD`, `Purchase` ou o nome personalizado).
- **Tipo do Evento**: Registro, FTD, Depósito ou Personalizado.
- **Valor**: o valor do FTD ou depósito ("--" quando o evento não tem valor).
- **Pixel**: o pixel que recebeu.

Clique no título de uma coluna para ordenar.

### Filtros

- **"Período"**: começa nos últimos 7 dias.
- **"Tipo"**: um tipo de evento específico.
- **"Pixel"**: só as conversões de um pixel.
- **"Buscar"**: pelo nome da integração, pelo tipo ou pelo **ClickID** (o identificador do clique, útil para conferir uma conversão específica com a plataforma).

### Exportar

**"Exportar CSV"** baixa a página que está na tela, com os filtros aplicados.

::: tip Conversões novas
O histórico mostra uma linha por lead, com o evento mais recente dele. Para ver conversões que acabaram de chegar, recarregue a página.
:::

## Relacionados

- [Configurar o postback na sua plataforma](./platform-postback)
- [Guia técnico da integração (para desenvolvedores)](./developer-guide)
- [Editar ou excluir uma integração](./manage-integrations)
