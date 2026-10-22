---
title: "Tipos de evento: Registro, FTD, Depósito e Personalizado"
description: 'Qual evento escolher em cada integração, como ele chega no pixel da Meta e quais precisam de aprovação.'
---

# Tipos de evento: Registro, FTD, Depósito e Personalizado

O **"Tipo de Evento"** define qual conversão da sua plataforma a integração vai levar para o pixel, e com qual nome ela chega na Meta.

![Como o evento será recebido no pixel](/img/pt-BR/integrations/event-types-1.png)

| Tipo de Evento | Quando usar | Chega no pixel como | Aprovação na Meta | Recebe o valor pelo postback |
|---|---|---|---|---|
| **Registro** | O lead criou a conta na plataforma | **Concluir Cadastro** (`CompleteRegistration`) | Não precisa: aparece como "Evento de API" na campanha | Não |
| **FTD** | Primeiro depósito do lead | **FTD** | **Precisa confirmar** no Gerenciador de Eventos | Sim |
| **Depósito** | Depósitos em geral | **Compra** (`Purchase`) | Não precisa: aparece como "Evento de API" na campanha | Sim |
| **Personalizado** | Qualquer outro evento (ex.: lead qualificado, aposta feita) | O nome que você digitar | **Precisa confirmar** no Gerenciador de Eventos | Não |

## Qual escolher para otimizar campanhas

- Para escalar com qualidade, otimize para o evento **mais perto do dinheiro** que tenha volume: normalmente **FTD** ou **Depósito**.
- Se o volume de FTD ainda for baixo, comece com **Registro** e suba para FTD quando os números crescerem.
- Pode criar uma integração para cada evento (Registro, FTD e Depósito) e mandar todos para o mesmo pixel.

## Evento personalizado

Ao escolher "Personalizado", aparece o campo do nome do evento (ex.: `lead_qualificado`). Use letras minúsculas e `_`, sem espaços nem acentos: é assim que ele vai aparecer na Meta. Cada nome só pode ser usado em uma integração.

::: warning Aprovação de FTD e Personalizado
Esses eventos são personalizados para a Meta. Depois do primeiro envio, abra o Gerenciador de Eventos, aba "Eventos de teste", e **confirme o evento** que aparece com o aviso (⚠️). Sem isso ele não aparece na hora de criar a campanha.
:::

## Valor da conversão

FTD e Depósito recebem o valor do depósito pela URL de postback (parâmetro `amount`). O valor aparece na coluna "Valor" do [Histórico de Eventos](./event-history). Veja como configurar no [Guia técnico](./developer-guide#parametros).

::: tip O tipo de evento não muda depois de concluída
Depois que a integração é concluída, o "Tipo de Evento" fica travado. Para mudar, crie uma integração nova.
:::

## Relacionados

- [Criar uma integração](./create-integration)
- [Evento Teste da integração](./test-event)
- [Otimizar campanhas para entradas no canal](../meta-pixel/optimize-for-channel-joins)
