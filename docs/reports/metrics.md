---
title: "Métricas: análise de leads"
description: 'Como usar a tela Métricas da Track4you: período, filtros, entradas e saídas trackeadas, permanência, bounce, gráficos, tabela de leads e exportação em CSV.'
---

# Métricas: análise de leads

A tela **Métricas** mostra cada pessoa que entrou no seu canal, lead a lead, com a origem completa: página, campanha (UTMs), aparelho e localização. É onde você descobre quais campanhas trazem leads que **ficam** no canal, não só leads que entram.

## Antes de começar

- Tenha pelo menos um funil rastreando. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Escolher o período e filtrar

<div class="steps">

1. No menu, abra **Métricas**.
2. Em **"Período"**, escolha as datas. Sem escolher nada, a tela mostra os **"Últimos 30 dias"**.

   ![Barra de filtros com Período e o botão "Adicionar Filtro"](/img/pt-BR/reports/metrics-1.png)

3. Para refinar, clique em **"Adicionar Filtro"** e escolha o tipo de filtro.

   ![Menu "Adicionar Filtro" aberto com os tipos de filtro](/img/pt-BR/reports/metrics-2.png)

4. No filtro que apareceu, escolha o valor na lista (ou deixe **"Qualquer"**). Alguns exemplos:
   - **"Dominio"** ou **"Pagina (URL)"**: só os leads que vieram de um domínio ou de uma página.
   - **"UTM Campaign"** ou **"UTM Medium"**: só os leads de uma campanha ou de um meio.
   - **"Status"**: **"Entrou"** (continua no canal) ou **"Saiu"**.
   - **"Trackeado"**: só os leads com a origem identificada ("Sim") ou sem ("Nao").
5. Para tirar um filtro, clique no **X** dele (**"Remover Filtro"**).

</div>

::: tip Combine filtros
Você pode usar vários filtros ao mesmo tempo, um de cada tipo. Exemplo: **"UTM Campaign"** = `lancamento-black` + **"Status"** = **"Saiu"** mostra quem veio dessa campanha e já saiu do canal.
:::

O período considera a **data de entrada** no canal: os números falam de quem entrou dentro das datas escolhidas. Os números podem levar até 1 minuto para atualizar.

## Os cards

![Cards de Entradas, Saídas, Tempo Médio de Permanência e Bounce rate](/img/pt-BR/reports/metrics-3.png)

- **Entradas:** total de pessoas que entraram no canal no período. Embaixo, **"Trackeadas"** (entradas com a origem identificada) e **"Taxa de Trackeamento"** (quanto das entradas foi trackeado).
- **Saídas:** quantas dessas pessoas já saíram do canal, também com **"Trackeadas"** e **"Taxa de Trackeamento"**.
- **Tempo Médio de Permanência:** quanto tempo, em média, os leads ficam no canal (para quem ainda está, conta até agora).
- **Bounce rate (1d-):** quanto dos que saíram ficou **menos de 1 dia** no canal. Quanto menor, melhor.

## Visão Geral

Quatro gráficos mostram de onde vêm os seus leads: **"Por País"**, **"Por Estado"**, **"Por Dispositivo"** (iPhone, Android, Mac, Computador) e **"Por Funil"**. Cada um mostra os 5 maiores e junta o resto em "Outros".

![Gráficos da Visão Geral: por país, estado, dispositivo e funil](/img/pt-BR/reports/metrics-4.png)

## Tabela de leads

A tabela **"Leads"** tem uma linha por pessoa que entrou no canal: data e horário, se foi trackeado, ID do Telegram, nome, status ("Entrou" ou "Saiu"), funil, URL de origem, UTMs, dispositivo, país, estado, cidade, data e hora de saída e permanência.

- Clique no nome de uma coluna para ordenar.
- Arraste a borda da coluna para deixá-la mais larga.
- Use **"Anterior"** e **"Próximo"** para navegar (10 leads por página).

![Tabela "Leads" com o botão "Exportar CSV" em destaque](/img/pt-BR/reports/metrics-5.png)

### Exportar para planilha

Clique em **"Exportar CSV"** para baixar os leads do período e dos filtros aplicados. O arquivo abre no Excel ou no Google Planilhas.

## Como usar no dia a dia

- **Compare campanhas pela permanência**, não só pelo volume: filtre por **"UTM Campaign"** e veja, na tabela **"Leads"**, quem já saiu (coluna **"Status"**) e a **"Permanência"** de cada lead.
- **Ache o público que fica:** com **"Status"** = **"Entrou"**, veja nos gráficos de estado e dispositivo onde está quem continua no canal.
- **Mantenha a taxa de trackeamento alta:** use sempre o link de entrada do funil no botão da página. Veja [Configurar o botão da página](../funnels/entry-link).

## Problemas comuns

- **"Nenhum registro encontrado."**: não houve entradas no período com os filtros escolhidos. Aumente o período ou remova filtros.
- **Cards zerados:** confira se o funil está rastreando. Veja [Entradas no canal não aparecem](../troubleshooting/no-joins).
- **Número de Saídas diferente do Dashboard:** em **Métricas**, as saídas contam quem **entrou** no período e já saiu. No **Dashboard**, contam quem **saiu** no período, mesmo que tenha entrado antes. Os dois estão certos: respondem perguntas diferentes.

## Relacionados

- [Dashboard: entendendo os números](./dashboard)
- [Glossário de métricas](./metrics-glossary)
- [Rastreamento avançado e janela de atribuição](./attribution)
