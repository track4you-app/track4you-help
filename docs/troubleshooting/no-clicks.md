---
title: "Cliques não aparecem"
description: 'O que conferir quando as visitas aparecem, mas o card "Cliques" fica zerado: o botão da página precisa usar o link de entrada do funil.'
---

# Cliques não aparecem

**Sintoma:** o card **"Pageviews"** do Dashboard mostra as visitas, mas o card **"Cliques"** fica zerado ou bem abaixo do esperado.

O clique é contado quando o lead passa pelo **link de entrada do funil**. Então quase sempre o problema está no botão da página.

## O que conferir

<div class="steps">

1. **O botão usa o link de entrada do funil.** Em **Funis**, clique em **"Ver Tutorial"** e copie o link do passo **"Utilize esse link para entrada no seu Grupo"** (começa com `https://t4y.io/v2/`). Esse é o link que vai no botão da página.

   ![Link de entrada do funil com o botão "Copiar" em destaque](/img/pt-BR/funnels/entry-link-1.png)

2. **O botão é um link comum.** Configure o botão com o link direto no campo de link (URL) do construtor. Evite encurtadores (como bit.ly) e botões que abrem o link por código ou pop-up.

3. **O link é do funil certo.** Cada funil tem o seu link. Se você excluiu um funil e criou outro, troque o link nas páginas pelo do funil novo.

4. **O anúncio leva para a página, e não direto para o Telegram.** O caminho rastreado é anúncio → página → botão → canal.

5. **A assinatura está ativa.** Com a assinatura cancelada, o rastreamento fica pausado. Se o painel mostrar o aviso de pagamento em atraso, regularize. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

## Como testar de novo

Abra a página numa aba anônima, clique no botão e confira o card **"Cliques"** do Dashboard em alguns minutos. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Ainda não apareceu?

Fale com o [suporte](https://track4you.app/suporte) e mande o endereço da página e o nome do funil.

## Relacionados

- [Configurar o botão da página](../funnels/entry-link)
- [Visitas não aparecem no painel](./no-pageviews)
- [Entradas no canal não aparecem](./no-joins)
