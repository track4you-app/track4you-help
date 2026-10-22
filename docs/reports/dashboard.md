---
title: "Dashboard: entendendo os números"
description: 'O que significa cada card do Dashboard da Track4you (pageviews, cliques, entradas, saídas e taxas), como filtrar por funil, pixel e período e como ler a retenção.'
---

# Dashboard: entendendo os números

O Dashboard é o resumo do seu funil em uma tela: quantas pessoas viram a página, clicaram, entraram e saíram do canal, com as taxas de conversão de cada etapa. Tudo medido com o rastreamento avançado da Track4you, do anúncio até a entrada no canal.

## Antes de começar

- Tenha pelo menos um funil rastreando. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Filtrar o que você quer ver

<div class="steps">

1. No topo do Dashboard, escolha em **"Funis"** um funil específico ou deixe **"Todos os Funis"**.
2. Se quiser, escolha em **"Pixels"** um pixel. O painel mostra só os funis que usam esse pixel.
3. Em **"Período"**, escolha as datas ou um atalho: "Hoje", "Ontem", "Últimos 7 dias", "Últimos 30 dias", "Este mês" ou "Mês passado".
4. Clique em **"Buscar"**.

   ![Barra de filtros do Dashboard: Funis, Pixels, Período e Buscar](/img/pt-BR/reports/dashboard-2.png)

</div>

::: tip Sem período escolhido, o Dashboard mostra o dia de hoje
Ao trocar o funil ou o pixel, os números atualizam na hora. Ao trocar o período, clique em **"Buscar"** para aplicar.
:::

## Os cards

![Os oito cards do Dashboard: Valor Gasto, Pageviews, Cliques, Entradas, Saídas, Cadastros, FTDs e Depósitos](/img/pt-BR/reports/dashboard-1.png)

| Card | Número grande | Taxa no rodapé |
|---|---|---|
| **Pageviews** | Visitas às páginas do funil no período | **"Conv. para Entradas"**: de cada 100 visitas, quantas viraram entrada no canal |
| **Cliques** | Cliques no botão que leva ao canal | **"Cliques por Views"**: de cada 100 visitas, quantas clicaram no botão |
| **Entradas** | Pessoas que entraram no canal pelo funil | **"Entradas por Cliques"**: de cada 100 cliques, quantos viraram entrada |
| **Saídas** | Pessoas do funil que saíram do canal no período | **"Taxa de Retenção"**: quanto das entradas continua no canal |

No card **Saídas**, o campo **"Leads do Período"** mostra quantas pessoas entraram **e** saíram dentro do mesmo período escolhido.

### A etiqueta de variação

No canto de cada card, a etiqueta (por exemplo, **"+18%"**) compara o período escolhido com o período anterior de mesmo tamanho:

- **Verde:** subiu.
- **Vermelho:** caiu.
- **Amarelo:** ficou praticamente igual (variação de até 2%).

No card **Saídas** as cores se invertem: saída caindo é bom sinal, então aparece em verde.

### Cards de investimento e iGaming

- **"Valor Gasto"** e os campos **"Custo por..."** mostram os dados das suas contas de anúncio do Facebook.
- **"Cadastros"**, **"FTDs"** e **"Depósitos"** mostram as conversões que chegam pelas [Integrações](../integrations/overview) com a sua casa de apostas, corretora ou plataforma.

Enquanto não houver dados para esses cards, eles aparecem com "--".

## Taxa de Retenção Diária

A tabela mostra os **últimos 7 dias**, um por linha: **Entradas** do dia, **Saídas** de quem entrou e saiu no mesmo dia, e a **Retenção** do dia.

- **Verde:** acima de 75%.
- **Amarelo:** entre 50% e 75%.
- **Vermelho:** abaixo de 50%.

Retenção baixa no dia em que o lead entra costuma indicar desalinhamento entre a promessa do anúncio e o que o lead encontra no canal.

![Tabela "Taxa de Retenção Diária" com os últimos 7 dias](/img/pt-BR/reports/dashboard-3.png)

## Entradas por hora

O gráfico mostra as entradas no canal hora a hora nas **últimas 24 horas**. Use para ver em que horário seus anúncios trazem mais gente e para planejar os disparos no canal.

![Gráfico "Entradas por hora" das últimas 24 horas](/img/pt-BR/reports/dashboard-4.png)

A tabela de retenção diária e o gráfico de entradas por hora mostram sempre o total da conta, com todos os funis.

## Problemas comuns

- **Tudo zerado:** confira o período (sem período, o painel mostra só hoje) e se o funil está rastreando. Veja [Visitas não aparecem no painel](../troubleshooting/no-pageviews) e [Entradas no canal não aparecem](../troubleshooting/no-joins).
- **"Nenhum dado de retenção nos últimos 7 dias."** ou **"Nenhuma entrada registrada hoje."**: ainda não houve entradas no canal no intervalo. Confira se o botão da página usa o [link de entrada do funil](../funnels/entry-link).
- **Os números não batem com o Gerenciador de Anúncios:** é normal haver diferença entre as ferramentas. Veja [Painel × Gerenciador de Anúncios](./panel-vs-meta).

## Relacionados

- [Métricas: análise de leads](./metrics)
- [Glossário de métricas](./metrics-glossary)
- [Rastreamento avançado e janela de atribuição](./attribution)
