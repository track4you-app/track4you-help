---
title: "Entradas no canal não aparecem"
description: 'O que conferir quando os cliques aparecem, mas as entradas no canal do Telegram não: link do funil, bot de rastreamento e assinatura.'
---

# Entradas no canal não aparecem

**Sintoma:** os cliques aparecem no Dashboard, mas o card **"Entradas"** fica zerado, ou as pessoas entram no canal e não aparecem em **Métricas**.

## O que conferir

<div class="steps">

1. **O canal está conectado.** Abra **Canal** e veja o cartão **"Status da Integração"**: **"Conexão com a Track4you"** e **"Conexão com o Canal"** precisam estar em **"Conectado!"**. Se alguma estiver vermelha, veja ["Conexão do canal foi perdida"](./channel-connection-lost).

   ![Cartão "Status da Integração" com as conexões em "Conectado!"](/img/pt-BR/telegram-channel/connection-status-1.png)

2. **O bot de rastreamento é administrador do canal, com todas as permissões.** No Telegram, abra o canal → administradores → o seu bot de rastreamento, e deixe todas as permissões ligadas.

3. **O bot de rastreamento é exclusivo da Track4you.** Se o mesmo bot está ligado em outra ferramenta (um FlowBuilder como a Flow4You, outro rastreador, bot de vendas), crie um bot só para a Track4you. Veja [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot).

4. **O lead entrou pelo link do funil.** Só entra no rastreamento quem clicou no botão da página com o link do funil. Quem entra pelo `@` do canal público, por um link de convite criado à mão no Telegram ou por um link antigo não é rastreado.

5. **Você trocou de canal?** Os funis do canal novo têm links novos. Atualize o botão das páginas com o link de cada funil. Veja [Trocar de canal ou desconectar](../telegram-channel/change-channel).

6. **A assinatura está ativa.** Com pagamento em atraso ou assinatura cancelada, o rastreamento fica pausado. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

::: tip Canal privado rastreia melhor
No canal privado, toda entrada passa pelo link do funil. No canal público, o lead pode achar o canal pela busca do Telegram e entrar sem passar pelo funil. Veja [Canal público ou privado?](../telegram-channel/public-vs-private)
:::

## Como testar de novo

Faça o caminho completo com uma conta do Telegram que **ainda não está no canal**: abra a página, clique no botão e entre. Confira o card **"Entradas"** do Dashboard em alguns minutos. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Ainda não apareceu?

Fale com o [suporte](https://track4you.app/suporte) e mande o nome do canal e do funil.

## Relacionados

- [Status da integração do canal](../telegram-channel/connection-status)
- [Conectar seu canal à Track4you](../telegram-channel/connect-channel)
- [Cliques não aparecem](./no-clicks)
