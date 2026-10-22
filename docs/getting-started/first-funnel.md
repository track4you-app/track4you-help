---
title: "Seu primeiro funil rodando: checklist"
description: 'Roteiro do zero ao primeiro lead rastreado: canal, domínio, pixel, funil, script, botão e teste, com o link para cada passo.'
---

# Seu primeiro funil rodando: checklist

Este é o caminho completo para colocar o seu primeiro funil no ar com rastreamento avançado. Siga na ordem: cada passo tem um artigo com os detalhes.

## Antes de começar

- **Assinatura ativa.** Se ainda não tem, veja [Criar sua conta e acessar o painel](./create-account).
- **Acesso de administrador ao seu canal do Telegram.**
- **Acesso ao Gerenciador de Eventos da Meta**, com o pixel que vai receber as conversões.
- **Acesso ao editor da sua página de captura** (WordPress, Elementor, HTML ou outro construtor), para colar o script e trocar o link do botão.

::: tip A ordem importa
O funil junta canal, domínio e pixel. Por isso esses três precisam estar prontos antes de você criar o funil.
:::

## Checklist

<div class="steps">

1. **Crie o bot de rastreamento.** No Telegram, crie um bot novo no @BotFather e guarde o token. Veja [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot).

2. **Conecte o seu canal.** Coloque o bot como administrador do canal e conecte em **Canal** → **"Novo Canal"**. O canal está pronto quando aparece com o selo **"Ativo"**. Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel) e [Canal público ou privado?](../telegram-channel/public-vs-private).

   ![Modal "Novo Canal" com o guia de 3 passos](/img/pt-BR/telegram-channel/connect-channel-2.png)

3. **Cadastre o domínio.** Em **Domínios**, digite só o domínio da sua página, sem `https://` e sem o caminho da página. Veja [Cadastrar seu domínio](../domains/add-domain).

   ![Modal "Novo Domínio" com o domínio preenchido](/img/pt-BR/domains/add-domain-2.png)

4. **Cadastre o pixel.** Pegue o ID do pixel e o token no Gerenciador de Eventos e cadastre em **Pixels** → **"Novo Pixel"**. Veja [Onde encontrar o ID do pixel e o token da API de Conversões](../meta-pixel/find-pixel-id-and-token) e [Cadastrar o pixel na Track4you](../meta-pixel/add-pixel).

   ![Modal "Novo Pixel" com Nome, ID e Token de Integração](/img/pt-BR/meta-pixel/add-pixel-1.png)

5. **Envie o Evento Teste e confirme os eventos.** Use o Código de Teste da Meta e, depois, confirme os eventos `enter_channel` e `left_channel` no Gerenciador de Eventos. O pixel fica com o status **"Recebendo dados"**. Veja [Enviar o Evento Teste e confirmar os eventos](../meta-pixel/test-event).

   ![Etapa "Evento Teste" com o Código de Teste preenchido](/img/pt-BR/meta-pixel/test-event-2.png)

6. **Crie o funil.** Em **Funis** → **"Novo funil"**, escolha o nome, o pixel, o domínio e as páginas que fazem parte do funil. Se o seu canal é privado, avalie ligar a **"Solicitação de Entrada"**. Veja [Criar um funil](../funnels/create-funnel) e [Solicitação de Entrada no funil](../funnels/join-request).

   ![Etapa "Instalação" do funil com o script e o link de entrada](/img/pt-BR/funnels/create-funnel-4.png)

7. **Instale o script na página.** Copie o código de **"Adicione esse código ao Head do seu site"** e cole no `<head>` de cada página do funil, sem alterar nada. Veja [Instalar o script na sua página](../funnels/install-script) e os guias para [WordPress (Elementor)](../funnels/install-on-wordpress), [HTML](../funnels/install-on-html) e [outros construtores](../funnels/install-on-other-builders).

   ![Tutorial de Instalação com o script em destaque](/img/pt-BR/funnels/install-script-1.png)

8. **Coloque o link de entrada no botão.** O botão da página que leva ao Telegram usa o link de **"Utilize esse link para entrada no seu Grupo"**. Veja [Configurar o botão da página](../funnels/entry-link).

9. **Teste o funil.** Abra a página, clique no botão e entre no canal. A visita, o clique e a entrada aparecem no **Dashboard**. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

</div>

## Como conferir se deu certo

- Em **Canal**, o canal aparece como **"Ativo"** e todas as linhas do "Status da Integração" estão verdes.
- Em **Pixels**, o pixel está com o status **"Recebendo dados"**.
- No **Dashboard**, o seu teste aparece como visita, clique e entrada.

## Próximos passos

- **Otimize as campanhas para entrada no canal.** Crie a conversão personalizada com `enter_channel` e rode a campanha para ela. Veja [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins).
- **Configure as mensagens automáticas** (boas-vindas, saída e aprovação automática). Veja [Mensagens automáticas: o que dá pra fazer](../messages/overview).
- **Acompanhe os resultados** no [Dashboard](../reports/dashboard) e em [Métricas](../reports/metrics).

## Problemas comuns

- **"Crie um Canal antes de criar um funil."**: conecte o canal primeiro (passo 2).
- **Os campos de pixel ou de domínio não abrem no funil**: cadastre o domínio e o pixel antes (passos 3 e 4).
- **O botão "Novo" abre um aviso de assinatura**: a sua assinatura não está ativa. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).
- **O teste não aparece no Dashboard**: confira [Visitas não aparecem no painel](../troubleshooting/no-pageviews) e [Entradas no canal não aparecem](../troubleshooting/no-joins).

Precisa de ajuda em algum passo? Fale com o [suporte](https://track4you.app/suporte).

## Relacionados

- [O que é a Track4you](./what-is-track4you)
- [O que é um funil](../funnels/what-is-a-funnel)
- [Testar se o funil está rastreando](../funnels/test-funnel)
- [Rastreamento avançado e janela de atribuição](../reports/attribution)
