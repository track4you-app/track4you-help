---
title: "Status do pixel e erros do TikTok"
description: 'O que significa cada status do pixel do TikTok na Track4you, inclusive "Pausado", e como corrigir cada código de erro do Histórico de Erros.'
---

# Status do pixel e erros do TikTok

Na tela **Pixels** você acompanha a saúde de cada pixel: o status na lista **"Meus Pixels"** e, logo abaixo, o **"Histórico de Erros"**, que mostra quando o TikTok recusou um envio e o que fazer para corrigir.

## O que significa cada status

![Coluna "Status" em "Meus Pixels" com os status "Recebendo dados", "Aguardando eventos", "Erros identificados" e "Pixel inativo"](/img/pt-BR/tiktok-pixel/status-and-errors-2.png)

| Status | O que significa | O que fazer |
|---|---|---|
| **"Recebendo dados"** (verde) | O TikTok aceitou eventos reais dos seus funis nas últimas 24 horas. | Nada. Está tudo certo. |
| **"Aguardando eventos"** (âmbar) | O Evento Teste foi feito e ainda não chegou nenhum evento real do funil. | Confira se o pixel está em um funil e se a página está recebendo visitas. |
| **"Pixel inativo"** (cinza) | O pixel ainda não fez o Evento Teste, ou não envia eventos há mais de 24 horas. | Faça o Evento Teste. Se o funil está parado, é só esperar novas visitas. |
| **"Erros identificados"** (vermelho) | O TikTok recusou 3 ou mais envios desse pixel nas últimas 24 horas. | Abra o **"Histórico de Erros"** e siga a correção indicada. |
| **"Pausado"** (cinza) | O seu plano não inclui o TikTok. | Volte para o Pro ou o Enterprise. Veja abaixo. |

## Pixel pausado

Quem passa para o Starter tem o envio ao TikTok pausado. O pixel e os funis continuam lá, e os funis continuam contando visitas, cliques e entradas no painel. Só nada vai para o TikTok enquanto o plano não incluir.

Ao voltar para o Pro ou o Enterprise, o envio retoma sozinho. Veja [Trocar de plano](../account/change-plan).

![Faixa "1 pixel do TikTok pausado" e selo "Pausado" na lista "Meus Pixels"](/img/pt-BR/tiktok-pixel/status-and-errors-3.png)

Enquanto estiver pausado:

- o Evento Teste é recusado com "O pixel do TikTok está disponível nos planos Pro e Enterprise.";
- no seletor de pixel do funil, o pixel aparece desabilitado, com o selo **"Pausado"**.

## Histórico de Erros

O **"Histórico de Erros"** fica embaixo da lista de pixels. Cada linha mostra a data, o horário, o pixel, o código do erro, a descrição e a **correção**.

![Seção "Histórico de Erros" com códigos do TikTok, descrição e correção](/img/pt-BR/tiktok-pixel/status-and-errors-1.png)

Use os filtros para achar um erro rápido:

- **"Período":** escolha as datas. Sem data, mostra tudo.
- **"Tipo":** filtra pelo código do erro. A lista do TikTok traz "40105 — Token inválido", "40102 — Token expirado", "40001 — Sem acesso ao pixel", "40002 — Evento recusado" e "40100 — Limite de envios".
- **"Pixel":** mostra só os erros de um pixel.
- **"Buscar":** procura pelo código do erro ou por um trecho da mensagem de erro. Use para os códigos que não estão no filtro **"Tipo"**.

O botão **"Exportar CSV"** baixa uma planilha com todo o histórico de erros, útil para mandar para o suporte ou para o seu time.

## O que fazer em cada erro

| Erro | Descrição | Como corrigir |
|---|---|---|
| **40105**, **40102**, **40104** | "Access Token do TikTok inválido ou expirado" | "Gere um novo Access Token em Gerenciador de eventos → pixel → Configurações e atualize o Pixel na plataforma." Veja [Trocar o Access Token do TikTok](./update-token). |
| **40001** | "Access Token sem acesso a este pixel do TikTok" | "Gere o Access Token na mesma conta de anúncio do pixel, com um usuário Admin ou Operador." |
| **40002** | "Evento recusado pelo TikTok" | "Confira o código do Pixel; se o erro persistir, contate o suporte." |
| **40100**, **40132**, **40133** | "Limite de envios do TikTok atingido" | "Não precisa fazer nada: os próximos eventos voltam a ser aceitos sozinhos." |
| Começa com **5** | "TikTok fora do ar no momento do envio" | "Não precisa fazer nada: os próximos eventos voltam a ser aceitos sozinhos." |
| Outro | Mensagem do TikTok | "Revise a configuração do Pixel e do Access Token; se o erro persistir, contate o suporte." |

## Como conferir se deu certo

- Depois de corrigir, faça o Evento Teste de novo pelo **avião** da linha do pixel.
- Sem erros novos nas 24 horas seguintes e com eventos chegando, o status volta para **"Recebendo dados"**.
- Com o filtro **"Período"** em hoje, o histórico mostra "Nenhum erro registrado no período.".

## Problemas comuns

- **Não vejo o "Histórico de Erros"**: ele só aparece quando você tem pelo menos um pixel cadastrado.
- **O mesmo erro continua depois de trocar o token**: confira se salvou o token novo no pixel certo.
- **O pixel está "Pausado" e não aparece erro**: é o esperado. Pixel pausado não tenta enviar, então não gera erro.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Trocar o Access Token do TikTok](./update-token)
- [Enviar o Evento Teste no TikTok](./test-event)
- [Eventos não chegam no TikTok](../troubleshooting/tiktok-events-missing)
- [Planos e limites](../account/plans-and-limits)
