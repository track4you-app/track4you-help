---
title: "Rastreamento avançado e janela de atribuição"
description: 'Como a Track4you liga cada entrada no canal à campanha de origem com 99,9% de assertividade, o que é a janela de atribuição e a única regra para manter o rastreamento completo.'
---

# Rastreamento avançado e janela de atribuição

Com a Track4you, cada pessoa que entra no seu canal do Telegram chega **com a origem identificada**: o anúncio, a página, a campanha, o aparelho e a cidade. É o **rastreamento avançado**: do primeiro clique no anúncio até a entrada no canal, com **99,9% de assertividade**.

Sem isso, o Telegram é uma caixa-preta: você vê o canal crescer, mas não sabe qual campanha trouxe cada pessoa. Com a Track4you, você sabe.

## O que você ganha

- **Saber o que funciona de verdade.** Cada entrada aparece em [Métricas](./metrics) com a campanha (UTMs) e a página de origem. Você compara campanhas pelo que importa: gente entrando e ficando no canal.
- **Campanhas que otimizam para entrada no canal.** A entrada chega no seu pixel da Meta como o evento `enter_channel`, ou no seu pixel do TikTok como `Lead`. A plataforma passa a buscar mais pessoas parecidas com quem **entra**, não só com quem clica. Veja como fazer [na Meta](../meta-pixel/optimize-for-channel-joins) e [no TikTok](../tiktok-pixel/optimize-for-channel-joins).
- **Dados no seu sistema.** Com os [postbacks](../postbacks/overview), cada entrada vai para o seu CRM ou planilha já com a origem.

## O que é a janela de atribuição

A **janela de atribuição** é o período em que uma entrada no canal continua sendo creditada ao anúncio que trouxe o lead.

Na prática: o lead clica no anúncio, lê a página, pensa um pouco e entra no canal depois. Dentro da janela de atribuição, essa entrada é ligada à campanha certa. Você não perde a conversão só porque o lead não entrou no mesmo segundo do clique.

Na **Meta**, a janela de atribuição é de **até 7 dias** depois do clique. Esse prazo segue as regras de atribuição do Facebook e pode mudar se o Facebook alterar essas regras.

No **TikTok**, vale a janela do seu grupo de anúncios. O TikTok informa como padrão, para eventos de site, **7 dias depois do clique** e **1 dia depois da visualização**. Essa janela é configurável: confira a do seu grupo de anúncios. Veja [Otimizar campanhas do TikTok para entrada no canal](../tiktok-pixel/optimize-for-channel-joins).

Você não precisa configurar nada: a janela de atribuição já vem ativa em todos os funis.

## A única regra: use sempre o link do funil

Todo o rastreamento depende de o lead passar pelo seu funil. Para manter a assertividade em 99,9%:

<div class="steps">

1. **Instale o script em todas as páginas do funil**, no `<head>`, sem alterar. Veja [Instalar o script na sua página](../funnels/install-script).
2. **Use o link de entrada do funil** (`https://t4y.io/v2/...`) no botão da página, e não o link direto do canal (`t.me/...`). Veja [Configurar o botão da página](../funnels/entry-link).
3. **Coloque UTMs nos links dos anúncios** (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`). Assim você vê cada campanha separada em Métricas.

</div>

::: warning Link do canal divulgado direto fica fora do rastreamento
Se você divulgar o link do canal direto (o `t.me/...`) em anúncios, bio ou grupos, essas entradas não passam pelo funil e a origem não é identificada. Para rastrear, aponte tudo para a página do funil ou para o link de entrada do funil.
:::

## Como conferir se deu certo

- Em [Métricas](./metrics), o card **Entradas** mostra a **"Taxa de Trackeamento"**. Com o funil bem instalado, ela fica perto de 100%.
- Na tabela **"Leads"**, a coluna **"Trackeado"** mostra **"Sim"** e as colunas de UTM vêm preenchidas.
- No Gerenciador de Eventos da Meta, o evento `enter_channel` aparece chegando no pixel. No Gerenciador de eventos do TikTok, o `Lead`.

## Problemas comuns

- **Muitas entradas como "Não" em "Trackeado":** confira se o botão usa o link de entrada do funil e se o link do canal não está sendo divulgado direto. Veja [Entradas no canal não aparecem](../troubleshooting/no-joins).
- **UTMs vazias:** os links dos anúncios estão sem UTMs. Acrescente os parâmetros na URL do anúncio.
- **Números diferentes do Gerenciador de Anúncios:** é normal. Veja [Painel × Gerenciador de Anúncios](./panel-vs-meta).

## Relacionados

- [Painel × Gerenciador de Anúncios: por que os números diferem](./panel-vs-meta)
- [Eventos que chegam no seu pixel](../meta-pixel/events-sent)
- [Eventos que chegam no seu pixel do TikTok](../tiktok-pixel/events-sent)
- [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins)
- [Métricas: análise de leads](./metrics)
