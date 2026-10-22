---
title: "O que são postbacks"
description: 'Receba os eventos do seu funil (visita, clique, entrada e saída do canal) no seu CRM, planilha ou automação, em tempo real.'
---

# O que são postbacks

Postbacks fazem a Track4you **avisar o seu sistema** sempre que algo acontece no funil. Você cadastra uma URL e, a cada evento, a Track4you envia para ela os dados do lead: de onde ele veio, a campanha (UTMs), a localização, o funil e, nas entradas e saídas, o ID do Telegram.

É o caminho inverso das [Integrações](../integrations/overview): lá a sua plataforma avisa a Track4you; aqui é a Track4you que avisa o seu sistema.

![Tela "Postbacks" com a lista "Meus Postbacks"](/img/pt-BR/postbacks/overview-1.png)

## Pra que usar

- **CRM:** criar ou atualizar o contato quando o lead entra no canal, já com a campanha de origem.
- **Planilha:** registrar cada entrada e saída em uma linha, por meio de uma automação (n8n, Make, Zapier ou similar).
- **Automações próprias:** disparar uma sequência de e-mails, avisar o time comercial ou alimentar o seu próprio painel.

Os dados chegam com a mesma qualidade do rastreamento avançado da Track4you: cada entrada vem ligada ao funil e à campanha que a gerou.

## Os 4 eventos

Cada postback é ligado a **um** evento. Você escolhe o evento na hora de cadastrar:

| Evento na tela | Quando é enviado |
|---|---|
| "Visualização de Página" | Quando alguém abre uma página do funil com o script instalado |
| "Clique no Botão" | Quando alguém clica no botão que leva ao canal |
| "Entrada no Canal" | Quando o lead entra no canal pelo funil |
| "Saída do Canal" | Quando o lead sai do canal |

Quer receber mais de um evento na mesma URL? Cadastre um postback para cada evento, com a mesma URL. Também dá para ter mais de um postback do mesmo evento (por exemplo, um para o CRM e outro para a planilha).

## Limite

Você pode cadastrar **até 4 postbacks**, em qualquer plano. O contador ao lado do botão **"Novo"** mostra quantos você já usou (por exemplo, "2/4").

## Antes de começar

- Tenha uma **URL pública** que receba requisições (o endereço de webhook do seu CRM, do n8n, do Make etc.), começando com `https://`.
- Se quem vai montar o recebimento é um desenvolvedor, mande para ele o artigo [Formato dos dados enviados](./payload-reference).

## Relacionados

- [Cadastrar e testar um postback](./create-postback)
- [Formato dos dados enviados](./payload-reference)
- [O que são as Integrações](../integrations/overview)
