---
title: "Editar ou excluir uma integração"
description: 'Ações de cada integração: Evento Teste, Ver Tutorial, Editar e Excluir, e o que muda na plataforma quando você edita.'
---

# Editar ou excluir uma integração

Cada linha de **"Integrações Realizadas"** tem quatro ações:

![Ações da integração: Evento Teste, Ver Tutorial, Editar e Excluir](/img/pt-BR/integrations/manage-integrations-1.png)

| Ícone | Ação | Para que serve |
|---|---|---|
| Avião de papel | **Evento Teste** | Manda um evento de teste para o pixel. Veja [Evento Teste da integração](./test-event). |
| Livro | **Ver Tutorial** | Mostra de novo o link de divulgação e a URL de postback, para copiar. |
| Lápis | **Editar Integração** | Muda nome, pixel, "Identificador de URL" e destino. |
| Lixeira | **Excluir** | Remove a integração. |

O link de divulgação também pode ser copiado direto na coluna "Link Divulgação".

## Editar

Dá para mudar o **"Nome"**, o **"Pixel"**, o **"Identificador de URL"** e o **"Link de Redirect (Destino)"**. O **"Tipo de Evento"** (e o nome do evento personalizado) fica travado: para outro evento, crie uma integração nova.

::: warning Mudou o "Identificador de URL"? Atualize a plataforma
O identificador muda o parâmetro em que o click id chega na plataforma e a macro da URL de postback. Depois de salvar, abra **"Ver Tutorial"**, copie a URL de postback nova e atualize na plataforma. Confira com ela qual macro corresponde ao novo parâmetro. Veja o [Guia técnico](./developer-guide).
:::

O link de divulgação **não muda** quando você edita: os anúncios e conteúdos que já usam o link continuam funcionando, agora levando para o destino novo.

## Excluir

Ao excluir, a integração sai da lista e libera a vaga no limite do seu plano. Antes de excluir:

- tire o link de divulgação dos anúncios e conteúdos;
- remova a URL de postback da plataforma.

## Relacionados

- [Criar uma integração](./create-integration)
- [Configurar o postback na sua plataforma](./platform-postback)
- [Status e Histórico de Eventos](./event-history)
