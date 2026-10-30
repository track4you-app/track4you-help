---
title: "Perguntas frequentes"
description: 'Respostas rápidas sobre canal, funis, pixel, mensagens, integrações, planos e assinatura da Track4you, com link para o passo a passo completo.'
---

# Perguntas frequentes

Respostas curtas para as dúvidas mais comuns. Cada uma leva ao artigo com o passo a passo completo.

## Começo

### Preciso de programador para usar a Track4you?
Não. Você conecta o canal, cadastra domínio e pixel, cria o funil e cola um script na sua página. Tudo pelo painel, com passo a passo. Comece pelo [checklist do primeiro funil](../getting-started/first-funnel).

### O que a Track4you rastreia?
Visita na página, clique no botão, entrada no canal e saída do canal, com a origem de cada lead. As entradas chegam no seu pixel da Meta ou do TikTok (Pro e Enterprise) para você otimizar as campanhas para **quem entra no canal**. Veja [O que é a Track4you](../getting-started/what-is-track4you).

### Quanto tempo leva para os dados aparecerem no painel?
Poucos minutos. No Gerenciador de Anúncios da Meta pode levar mais, porque a Meta consolida os dados no tempo dela. Veja [Painel × Gerenciador de Anúncios](../reports/panel-vs-meta).

## Canal do Telegram

### Funciona com canal público?
Funciona, mas o **canal privado é o recomendado**: só com ele você usa a Solicitação de Entrada, as boas-vindas no privado e a aprovação automática. Veja [Canal público ou privado?](../telegram-channel/public-vs-private).

### Posso usar o mesmo bot em outra ferramenta?
Não. O bot de rastreamento precisa ser **exclusivo da Track4you**. Se ele for usado em outra ferramenta, a conexão com o canal cai. Veja [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot).

### Quantos canais posso conectar?
Mais de um, no mesmo login. Cada canal tem o próprio plano e os próprios funis, pixels e domínios. Veja [Rastrear mais de um canal](../telegram-channel/multiple-channels).

### Apareceu "Conexão do canal foi perdida". E agora?
O bot saiu do canal, perdeu a permissão de administrador, o token mudou ou o bot foi usado em outra ferramenta. Veja [Conexão do canal foi perdida](../troubleshooting/channel-connection-lost).

## Domínio, pixel e funis

### Preciso de domínio próprio?
Sim. As páginas de captura precisam estar num domínio seu, cadastrado em **Domínios**. Subdomínio conta como domínio separado; `www.` não. Veja [Cadastrar seu domínio](../domains/add-domain).

### Funciona com WordPress, Elementor e outros construtores?
Sim. É só colar o script no cabeçalho da página e usar o link de entrada no botão. Veja [Instalar o script na sua página](../funnels/install-script).

### Posso usar o mesmo pixel em vários funis?
Pode. Cada funil escolhe o seu pixel, e vários funis podem mandar para o mesmo.

### Quantos funis, domínios e pixels posso ter?
Depende do plano: Starter 2 domínios, 2 pixels e 6 funis; Pro 4, 4 e 12; Enterprise 8, 8 e 24. O pixel do TikTok soma com os da Meta no limite de pixels. Veja [Planos e limites](../account/plans-and-limits).

### Posso divulgar o link do canal (`t.me/...`) direto?
Pode, mas essas entradas ficam fora do rastreamento. Para rastrear, divulgue a página do funil e use o link de entrada no botão. Veja [Rastreamento avançado e janela de atribuição](../reports/attribution).

### Como sei se o funil está rastreando?
Faça o teste: abra a página, clique no botão, entre no canal e veja os números no Dashboard. Veja [Testar se o funil está rastreando](../funnels/test-funnel).

## Pixel e campanhas

### Para qual evento devo otimizar a campanha?
Para a entrada no canal (`enter_channel`). Aprove o evento no Gerenciador de Eventos, crie uma conversão personalizada com ele e rode a campanha para ela. Veja [Otimizar suas campanhas para entrada no canal](../meta-pixel/optimize-for-channel-joins).

### Por que os números do painel e do Gerenciador de Anúncios não batem?
As duas ferramentas contam coisas diferentes e de jeitos diferentes. É normal. Veja [Painel × Gerenciador de Anúncios](../reports/panel-vs-meta).

### O que é a janela de atribuição?
O período em que uma entrada no canal continua ligada ao anúncio que trouxe o lead: até 7 dias depois do clique. Esse prazo segue as regras do Facebook e pode mudar se elas mudarem. No TikTok, vale a janela da sua conta de anúncio. Veja [Rastreamento avançado e janela de atribuição](../reports/attribution).

## Pixel do TikTok

### Quais plataformas a Track4you atende?
Meta em todos os planos e TikTok nos planos Pro e Enterprise. O Kwai vem em breve. Veja [Planos e limites](../account/plans-and-limits).

### Tenho Starter, consigo usar o TikTok?
Não. O Starter fica só com a Meta. Para usar o TikTok, passe para o Pro ou o Enterprise. Veja [Trocar de plano](../account/change-plan).

### O pixel do TikTok conta no limite de pixels?
Sim: Pro 4 pixels e Enterprise 8, somando Meta e TikTok. Veja [Planos e limites](../account/plans-and-limits).

### Posso mandar o mesmo funil para a Meta e para o TikTok?
Não. Cada funil tem um pixel só. Para rodar nas duas plataformas, crie um funil para cada uma, cada funil com as próprias páginas (a mesma página não pode estar em dois funis). Veja [Cadastrar o pixel do TikTok na Track4you](../tiktok-pixel/add-pixel).

### Preciso instalar o pixel do TikTok na minha página?
Não. O script da Track4you já carrega o pixel. Se a sua página já tem o código, veja o que fazer em [Cadastrar o pixel do TikTok na Track4you](../tiktok-pixel/add-pixel).

### Preciso confirmar ou aprovar evento no TikTok, como na Meta?
Não. Os eventos do funil são eventos padrão do TikTok, prontos para otimizar campanha. Você só faz o [Evento Teste](../tiktok-pixel/test-event).

### Por que a entrada no canal aparece como `Lead` no TikTok?
Porque o TikTok não otimiza campanha por evento personalizado. Como `Lead` é um evento padrão, você consegue otimizar a campanha para a entrada no canal. Veja [Eventos que chegam no seu pixel do TikTok](../tiktok-pixel/events-sent).

### Preciso colocar algum parâmetro na URL do anúncio?
Não. O TikTok acrescenta o identificador do clique à URL sozinho. Veja [Otimizar campanhas do TikTok para entrada no canal](../tiktok-pixel/optimize-for-channel-joins).

### As Integrações (cadastro, FTD, depósito) mandam para o pixel do TikTok?
Ainda não: as Integrações mandam só para o pixel da Meta. Veja [O que são as Integrações](../integrations/overview).

### Se eu passar para o Starter, o que acontece com o meu pixel do TikTok?
O envio pausa. O pixel e os funis ficam, e voltam a enviar sozinhos no Pro ou no Enterprise. Veja [Trocar de plano](../account/change-plan).

### Os números do TikTok Ads Manager não batem com o painel. É normal?
É. As duas ferramentas contam coisas diferentes e de jeitos diferentes. Veja [Painel × Gerenciador de Anúncios](../reports/panel-vs-meta).

## Mensagens

### Por que a mensagem de boas-vindas não chega?
Ela vai para quem **pede entrada** no canal pelo funil com Solicitação de Entrada, e precisa do bot de mensagens configurado como administrador do canal. Veja [Mensagens automáticas não chegam ao lead](../troubleshooting/messages-not-delivered).

### Preciso de um segundo bot para as mensagens?
Sim. O bot de mensagens é diferente do bot de rastreamento e também fica como administrador do canal. Veja [Configurar o bot de mensagens](../messages/setup-message-bot).

## Integrações e postbacks

### Consigo mandar cadastro, FTD e depósito da casa de apostas para o pixel?
Sim, com as Integrações (planos Pro e Enterprise). A plataforma precisa ter postback com click id. Veja [O que são as Integrações](../integrations/overview).

### Qual a diferença entre Integrações e Postbacks?
**Integrações** trazem conversões da sua plataforma **para** a Track4you e o pixel. **Postbacks** levam os eventos do seu funil **da** Track4you para o seu sistema (CRM, planilha, automação). Veja [O que são postbacks](../postbacks/overview).

### O dev da minha plataforma precisa de instruções. O que mando para ele?
O [Guia técnico da integração](../integrations/developer-guide). Ele tem o formato completo do que sai e do que precisa voltar.

## Conta e assinatura

### Como troco de plano?
Pelo menu do perfil, em **"Assinatura"**. Veja [Trocar de plano](../account/change-plan).

### O que acontece se o pagamento atrasar?
Tudo fica pausado (rastreamento e mensagens automáticas) até você regularizar. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

### Se eu cancelar, perco os meus dados?
O acesso continua até o fim do período pago. Depois, o aviso mostra a data até quando você pode assinar de novo sem perder os dados. Veja [Assinatura, faturas e cancelamento](../account/billing).

### Esqueci a senha. Como entro?
Use a opção de recuperar a senha na tela de login. Veja [Alterar ou recuperar a senha](../account/password).

## Não achou a resposta?

[Fale com o suporte](./contact-support) pelo WhatsApp.
