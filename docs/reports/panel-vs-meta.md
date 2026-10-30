---
title: "Painel × Gerenciador de Anúncios: por que os números diferem"
description: 'Por que os números do painel da Track4you e do Gerenciador de Anúncios da Meta ou do TikTok Ads Manager não batem exatamente, e como comparar do jeito certo.'
---

# Painel × Gerenciador de Anúncios: por que os números diferem

É normal o painel da Track4you e o Gerenciador de Anúncios da Meta mostrarem números diferentes para o mesmo período. As duas ferramentas medem coisas diferentes e contam de jeitos diferentes. Nenhuma está "errada": cada uma responde uma pergunta.

- **Track4you:** quantas pessoas **entraram de verdade** no seu canal, e de onde vieram.
- **Gerenciador de Anúncios:** quantas conversões a Meta **conseguiu creditar** a cada anúncio.

## Os motivos mais comuns

### 1. Cada ferramenta conta uma coisa

O "clique no link" da Meta é o clique **no anúncio**. Os **Cliques** da Track4you são cliques **no botão da sua página**, que leva ao canal. Entre um e outro, parte das pessoas desiste: a página demora a abrir, a pessoa fecha antes, ou lê e não clica. Por isso o número de cliques da Meta costuma ser maior que o de visitas e cliques do painel.

### 2. A janela de atribuição da Meta

A Meta credita uma conversão ao anúncio se ela acontece **dentro da janela de atribuição dela**. O padrão é até **7 dias depois do clique** ou **1 dia depois de a pessoa ver o anúncio**, mesmo sem clicar.

Além disso, o Gerenciador costuma registrar a conversão no **dia em que a pessoa clicou ou viu o anúncio**, não no dia em que ela entrou no canal. A Track4you mostra a entrada no **dia em que ela aconteceu**. Em um recorte de um dia só, a diferença aparece mais.

### 3. Tempo de processamento

A Meta pode levar algumas horas, às vezes mais de um dia, para consolidar as conversões no Gerenciador de Anúncios. Os números de hoje e de ontem ainda podem mudar por lá. Na Track4you, a entrada aparece no painel em minutos.

### 4. Conversões que a Meta não consegue ligar ao anúncio

Mesmo recebendo o evento de entrada no canal, a Meta nem sempre consegue dizer **qual anúncio** a pessoa viu. Isso acontece, por exemplo, quando a pessoa não está logada no Facebook ou no Instagram naquele aparelho, quando usa restrições de privacidade (comum no iPhone) ou bloqueadores. O evento aparece no Gerenciador de Eventos, mas não entra na coluna de resultados da campanha.

### 5. Entradas que não vieram do anúncio

O painel conta **todas** as entradas pelo funil: anúncio da Meta, mas também tráfego orgânico, bio, outros canais e outras plataformas de anúncio. O Gerenciador mostra só o que veio dos seus anúncios na Meta.

### 6. Eventos de teste

Eventos enviados pelo **Evento Teste** servem para conferir a configuração. Eles não entram nos resultados das campanhas.

## Como comparar do jeito certo

<div class="steps">

1. **Use o mesmo período** nas duas ferramentas, e de preferência vários dias (7 dias ou mais). Recortes de um dia exageram a diferença.
2. **Compare a coluna certa.** No Gerenciador, use a coluna da conversão personalizada criada com o evento `enter_channel`. Veja [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins).
3. **Filtre o painel pelo funil ou pelo pixel** da campanha. Veja [Dashboard: entendendo os números](./dashboard).
4. **Confira o fuso horário** da sua conta de anúncios. O painel da Track4you usa o horário de Brasília.
5. **Espere a Meta consolidar** os dados (24 a 48 horas) antes de tirar conclusões sobre os dias mais recentes.

</div>

::: tip Qual número usar para quê
- **Para saber quantas pessoas entraram e quais campanhas trazem leads que ficam:** use a Track4you. Em [Métricas](./metrics), filtre por **"UTM Campaign"** e compare, na tabela **"Leads"**, as entradas e a permanência dos leads de cada campanha.
- **Para a Meta otimizar a entrega:** a Meta usa os eventos que recebe do seu pixel. O rastreamento avançado da Track4you entrega cada entrada no canal com 99,9% de assertividade, e quanto mais completo esse sinal, melhor a otimização.
- **Compare tendências, não números exatos.** Se os dois sobem e descem juntos, está tudo funcionando.
:::

## E no TikTok Ads Manager?

A lógica é a mesma: o TikTok Ads Manager mostra o que o TikTok conseguiu creditar a cada anúncio, e a Track4you mostra quem entrou de verdade no seu canal. Por isso os números também diferem. Os motivos acima valem, com estas diferenças:

- **A coluna para comparar** é a do evento `Lead`, que no TikTok é a entrada no canal. Veja [Eventos que chegam no seu pixel do TikTok](../tiktok-pixel/events-sent).
- **A janela de atribuição** é a do seu grupo de anúncios no TikTok. Veja [Otimizar campanhas do TikTok para entrada no canal](../tiktok-pixel/optimize-for-channel-joins).

## Quando a diferença merece atenção

Se o Gerenciador de Eventos **não mostra** o evento `enter_channel` chegando, ou se o painel não mostra entradas mesmo com o canal crescendo, o problema é de configuração, não de contagem. Veja:

- [Eventos não chegam no pixel](../troubleshooting/meta-events-missing)
- [Eventos não chegam no TikTok](../troubleshooting/tiktok-events-missing)
- [Entradas no canal não aparecem](../troubleshooting/no-joins)

## Relacionados

- [Rastreamento avançado e janela de atribuição](./attribution)
- [Eventos que chegam no seu pixel](../meta-pixel/events-sent)
- [Eventos que chegam no seu pixel do TikTok](../tiktok-pixel/events-sent)
- [Glossário de métricas](./metrics-glossary)
