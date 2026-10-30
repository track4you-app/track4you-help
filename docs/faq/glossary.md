---
title: "Glossário"
description: 'Os termos da Track4you explicados em uma frase: canal, bots, funil, script, pixel, plataforma, token, Solicitação de Entrada, Auto-Aceite, postback, integração, FTD e mais.'
---

# Glossário

Os termos que aparecem no painel e na central, em ordem alfabética. Para os números do Dashboard e de Métricas (pageview, retenção, bounce etc.), veja o [Glossário de métricas](../reports/metrics-glossary).

| Termo | O que é |
|---|---|
| **Access Token (TikTok)** | A chave que autoriza a Track4you a enviar eventos para o seu pixel do TikTok. Gerada nas configurações do pixel, no Gerenciador de eventos. Veja [Onde encontrar o código do pixel e o Access Token do TikTok](../tiktok-pixel/find-pixel-id-and-token). |
| **Assinatura** | O seu plano pago. Gerenciada no menu do perfil → "Assinatura". Veja [Assinatura, faturas e cancelamento](../account/billing). |
| **Auto-Aceite** | Aprovação automática de quem pede para entrar no canal, na hora ou depois de um tempo de espera. Veja [Aprovação automática (Auto-Aceite)](../messages/auto-accept). |
| **Bot de mensagens** | O segundo bot do Telegram, usado para mandar boas-vindas, mensagem de saída e disparos no canal. Veja [Configurar o bot de mensagens](../messages/setup-message-bot). |
| **Bot de rastreamento** | O bot do Telegram exclusivo da Track4you, administrador do seu canal, que identifica cada entrada e saída. Veja [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot). |
| **BotFather** | O bot oficial do Telegram para criar bots e gerar tokens (@BotFather). |
| **Canal** | O seu canal do Telegram, conectado à Track4you na tela **Canal**. Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel). |
| **click_id** | O identificador único de cada clique no link de divulgação de uma integração. A plataforma devolve esse valor no postback para a conversão ser ligada ao clique. Veja o [Guia técnico da integração](../integrations/developer-guide). |
| **Código do pixel (TikTok)** | O identificador do seu pixel do TikTok, com letras maiúsculas e números (ex.: `CABC123DEF456GHI7J8K`). Na Meta, o equivalente é o ID do pixel, só com números. |
| **Conversão personalizada** | Conversão criada no Gerenciador de Eventos da Meta a partir de um evento (como o `enter_channel`), usada para otimizar campanhas. Veja [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins). |
| **Depósito** | Tipo de evento das Integrações: um depósito do lead na sua plataforma. Chega no pixel como Compra (`Purchase`). |
| **Disparo** | Mensagem publicada no canal pelo bot de mensagens: recorrente (dias e horários fixos) ou único (agora ou agendado). Veja [Disparos recorrentes no canal](../messages/recurring-posts). |
| **Domínio** | O endereço do site das suas páginas de captura (ex.: `lancamentoblack.com.br`). Veja [Cadastrar seu domínio](../domains/add-domain). |
| **`enter_channel`** | O evento de entrada no canal que chega no seu pixel. É para ele que você otimiza as campanhas. Veja [Eventos que chegam no seu pixel](../meta-pixel/events-sent). |
| **Evento Teste** | Envio de teste para o pixel da Meta ou do TikTok, usando o código de teste do gerenciador de eventos da plataforma, para confirmar que a conexão funciona. Veja [na Meta](../meta-pixel/test-event) e [no TikTok](../tiktok-pixel/test-event). |
| **FTD** | *First Time Deposit*: o primeiro depósito do lead numa casa de apostas ou corretora. Tipo de evento das Integrações. |
| **Funil** | O caminho do lead: página de captura → botão → canal. Junta canal, domínio, pixel e páginas, e gera o link de entrada. Veja [O que é um funil](../funnels/what-is-a-funnel). |
| **Gerenciador de eventos do TikTok** | A área do TikTok Ads Manager onde ficam o pixel, o Access Token e a aba "Eventos de teste". Veja [Onde encontrar o código do pixel e o Access Token do TikTok](../tiktok-pixel/find-pixel-id-and-token). |
| **Integração** | Ligação entre a sua plataforma (casa de apostas, corretora) e o pixel, para levar cadastros, FTDs e depósitos à Meta. Veja [O que são as Integrações](../integrations/overview). |
| **Janela de atribuição** | Período em que uma entrada no canal continua ligada ao anúncio que trouxe o lead: até 7 dias depois do clique. Esse prazo segue as regras do Facebook e pode mudar se elas mudarem. No TikTok, vale a janela da sua conta de anúncio. Veja [Rastreamento avançado e janela de atribuição](../reports/attribution). |
| **`left_channel`** | O evento de saída do canal que chega no seu pixel. |
| **Link de divulgação** | Link curto de uma integração (`https://t4y.io/v2/...`), usado nos anúncios e conteúdos que levam o lead à sua plataforma. |
| **Link de entrada** | Link do funil que vai no botão da página e leva o lead ao canal. Veja [Configurar o botão da página](../funnels/entry-link). |
| **Macro** | Variável da sua plataforma (ex.: `{click_id}`) que ela troca pelo valor real na hora de disparar o postback. |
| **Pixel** | O seu pixel da Meta (conjunto de dados) ou do TikTok, que recebe as conversões. Veja como cadastrar [na Meta](../meta-pixel/add-pixel) e [no TikTok](../tiktok-pixel/add-pixel). |
| **Plataforma do pixel** | Onde o pixel vive: Meta ou TikTok (planos Pro e Enterprise). Você escolhe ao cadastrar e ela não muda depois. Aparece na coluna "Plataforma" de "Meus Pixels". |
| **Postback** | Aviso automático enviado de um sistema para outro quando um evento acontece. Na Track4you, os postbacks levam os eventos do funil para o seu sistema. Veja [O que são postbacks](../postbacks/overview). |
| **Rastreamento avançado** | O rastreamento da Track4you: do clique no anúncio até a entrada no canal, com 99,9% de assertividade. |
| **Registro** | Tipo de evento das Integrações: o cadastro do lead na sua plataforma. Chega no pixel como Concluir Cadastro (`CompleteRegistration`). |
| **Script** | O código que vai no cabeçalho das páginas dos seus funis. É um só para a conta inteira: o mesmo serve para todos os funis. Veja [Instalar o script na sua página](../funnels/install-script). |
| **Solicitação de Entrada** | Opção do funil em que o lead pede para entrar no canal privado, em vez de entrar direto. Libera as boas-vindas no privado e o Auto-Aceite. Veja [Solicitação de Entrada no funil](../funnels/join-request). |
| **Token da API de Conversões** | A chave que autoriza a Track4you a enviar eventos para o seu pixel. Gerada no Gerenciador de Eventos. Veja [Onde encontrar o ID do pixel e o token](../meta-pixel/find-pixel-id-and-token). |
| **Token do bot** | A chave do bot do Telegram, gerada no @BotFather. Quem tem o token controla o bot: não compartilhe. |
| **Trackeado** | Lead com a origem identificada (página, campanha, aparelho). Veja [Métricas: análise de leads](../reports/metrics). |
| **UTM** | Parâmetros no link do anúncio (`utm_source`, `utm_medium`, `utm_campaign`...) que identificam a campanha de cada lead. |
