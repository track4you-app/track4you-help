---
title: "Status do pixel e Histórico de Erros"
description: 'O que significa cada status do pixel na Track4you (Recebendo dados, Pixel Inativo, Pixel com erros) e como usar o Histórico de Erros para corrigir problemas.'
---

# Status do pixel e Histórico de Erros

Na tela **Pixels** você acompanha a saúde de cada pixel: o status na lista **"Meus Pixels"** e, logo abaixo, o **"Histórico de Erros"**, que mostra quando a Meta recusou um envio e o que fazer para corrigir.

## O que significa cada status

![Coluna "Status" na lista "Meus Pixels", com os status "Recebendo dados" e "Pixel com erros"](/img/pt-BR/meta-pixel/status-and-errors-2.png)

| Status | O que significa | O que fazer |
|---|---|---|
| **"Recebendo dados"** (verde) | O pixel foi validado com a Meta e está pronto para receber os eventos dos seus funis. | Nada. Está tudo certo. |
| **"Pixel Inativo"** (cinza) | O pixel ainda não foi validado. | Faça o Evento Teste. Veja [Enviar o Evento Teste e confirmar os eventos](./test-event). |
| **"Pixel com erros"** (vermelho) | A Meta recusou vários envios desse pixel nas últimas 24 horas. | Abra o **"Histórico de Erros"** e siga a correção indicada. |

## Histórico de Erros

O **"Histórico de Erros"** fica embaixo da lista de pixels. Cada linha mostra a data, o horário, o pixel, o código do erro, a descrição e a **correção**.

![Seção "Histórico de Erros" com os filtros Período, Tipo, Pixel e Buscar](/img/pt-BR/meta-pixel/status-and-errors-1.png)

Use os filtros para achar um erro rápido:

- **"Período":** escolha as datas. Sem data, mostra tudo.
- **"Tipo":** filtra pelo código do erro ("190 — OAuthException", "100 — ID inválido", "803 — Indisponível").
- **"Pixel":** mostra só os erros de um pixel.
- **"Buscar":** procura pelo código do erro (ex.: `190`) ou por um trecho da mensagem de erro.

O botão **"Exportar CSV"** baixa uma planilha com todo o histórico de erros (Data, Horário, Pixel, Erro, Descrição e Correção), útil para mandar para o suporte ou para o seu time.

## O que fazer em cada erro

| Erro | Descrição | Como corrigir |
|---|---|---|
| **190** | "Token de acesso inválido ou expirado (OAuthException)" | Gere um token novo no Gerenciador de Eventos e atualize o pixel na Track4you. Veja [Trocar o token do pixel sem perder eventos](./update-token). |
| **100** | "ID do Pixel inválido ou token sem permissão" | Confira se o ID do pixel está certo e se o token é desse mesmo pixel. Corrija pelo **lápis** da linha do pixel. |
| **803** | "Pixel não encontrado ou indisponível" | Verifique no Business Manager se o pixel existe, está ativo e se o seu portfólio ainda tem acesso a ele. |
| Outro | Mensagem da Meta | Revise o pixel e o token. Se o erro continuar, fale com o suporte. |

## Como conferir se deu certo

- Depois de corrigir, faça o Evento Teste de novo pelo **avião** da linha do pixel.
- Sem erros novos nas 24 horas seguintes, o status volta para **"Recebendo dados"**.
- Com o filtro **"Período"** em hoje, o histórico mostra "Nenhum erro registrado no período.".

## Problemas comuns

- **Não vejo o "Histórico de Erros"**: ele só aparece quando você tem pelo menos um pixel cadastrado.
- **O mesmo erro continua aparecendo depois de trocar o token**: confira se salvou o token novo no pixel certo e se não gerou outro token na Meta depois disso (o mais recente é o único que vale).

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Trocar o token do pixel sem perder eventos](./update-token)
- [Enviar o Evento Teste e confirmar os eventos](./test-event)
- [Eventos não chegam no pixel](../troubleshooting/meta-events-missing)
