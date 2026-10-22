---
title: "Glossário de métricas"
description: 'O que significa cada número do Dashboard e das Métricas da Track4you: pageview, clique, entrada, saída, trackeado, retenção, bounce rate e permanência.'
---

# Glossário de métricas

Todos os números do painel, em linguagem de quem roda tráfego. Os nomes estão como aparecem na tela.

## Etapas do funil

| Termo | O que é |
|---|---|
| **Pageview** (visualização de página) | Uma visita a uma página do funil com o script instalado. Cada vez que a página abre, conta uma. |
| **Clique** | Um clique no botão da página que leva ao canal (o botão com o link de entrada do funil). |
| **Entrada** | Uma pessoa que entrou no seu canal do Telegram pelo funil. É a conversão principal da Track4you. |
| **Saída** | Uma pessoa do funil que saiu do canal. |

## Taxas de conversão (Dashboard)

| Termo | Conta | Exemplo |
|---|---|---|
| **Conv. para Entradas** | Entradas ÷ Pageviews | 12.480 visitas e 1.932 entradas = 15% |
| **Cliques por Views** | Cliques ÷ Pageviews | 12.480 visitas e 4.215 cliques = 34% |
| **Entradas por Cliques** | Entradas ÷ Cliques | 4.215 cliques e 1.932 entradas = 46% |
| **Taxa de Retenção** | Quanto das entradas continua no canal (1 − saídas ÷ entradas) | 1.932 entradas e 214 saídas = 88,92% |

Como ler: **"Cliques por Views"** baixo indica que a página não convence a clicar. **"Entradas por Cliques"** baixo indica que algo trava entre o clique e o canal (por exemplo, pedido de entrada que ninguém aprova). Veja [Aprovação automática](../messages/auto-accept).

## Retenção e qualidade do lead

| Termo | O que é |
|---|---|
| **Leads do Período** | No card Saídas do Dashboard: quantas pessoas entraram **e** saíram dentro do período escolhido. |
| **Taxa de Retenção Diária** | Tabela do Dashboard: para cada um dos últimos 7 dias, quanto dos que entraram naquele dia **não** saiu no mesmo dia. |
| **Tempo Médio de Permanência** | Quanto tempo, em média, os leads ficam no canal. Para quem ainda está, conta até agora. Aparece como "6d 4h 12m" (dias, horas e minutos). |
| **Bounce rate (1d-)** | Dos que saíram, quantos ficaram **menos de 1 dia** no canal. É o lead que entra e sai logo. Quanto menor, melhor. |
| **Retidos** | O contrário do bounce: quem saiu depois de 1 dia ou mais (aparece no gráfico de rosca do Bounce rate). |

## Rastreamento

| Termo | O que é |
|---|---|
| **Trackeado** | Entrada (ou saída) com a origem identificada: página, campanha, UTMs, aparelho e localização. Na tabela de leads aparece como "Sim" ou "Não". |
| **Taxa de Trackeamento** | Quanto das entradas (ou saídas) foi trackeado. O rastreamento avançado da Track4you trabalha com 99,9% de assertividade quando o lead chega pelo link do funil. |
| **UTM** | Parâmetros que você coloca no link do anúncio (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) para identificar a origem. A Track4you guarda as UTMs de cada lead. |
| **Janela de atribuição** | Período em que uma entrada no canal é ligada ao anúncio que gerou o clique: até 7 dias depois do clique, conforme as regras de atribuição do Facebook. Veja [Rastreamento avançado e janela de atribuição](./attribution). |
| **Variação (+N% / −N%)** | Etiqueta dos cards do Dashboard: compara o período escolhido com o período anterior de mesmo tamanho. |

## Relacionados

- [Dashboard: entendendo os números](./dashboard)
- [Métricas: análise de leads](./metrics)
- [Eventos que chegam no seu pixel](../meta-pixel/events-sent)
