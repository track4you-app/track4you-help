---
title: "Evento Teste da integração"
description: 'Valide a conexão da integração com o pixel da Meta usando o código de teste do Gerenciador de Eventos.'
---

# Evento Teste da integração

O Evento Teste confirma que a integração consegue entregar o evento no seu pixel **antes** de qualquer conversão real. Ele é obrigatório na criação e pode ser repetido quando quiser.

## Antes de começar

- Gerenciador de Eventos da Meta aberto no pixel da integração, na aba **"Eventos de teste"**.
- Copie o **código de teste** que a Meta mostra ali (ex.: `TEST12345`).

## Passo a passo

<div class="steps">

1. Na criação da integração, chegue na etapa **"Facebook"**. Para uma integração já criada, clique no ícone **"Evento Teste"** (avião de papel) na lista.
2. Cole o código em **"Código de Teste"**. O campo aceita no mínimo 4 caracteres e já ajusta para maiúsculas sem espaços.
3. Clique em **"Enviar Evento Teste"**. O botão mostra **"Enviado!"** quando o envio dá certo.

   ![Código de teste e botão "Enviar Evento Teste"](/img/pt-BR/integrations/test-event-1.png)

4. Volte ao Gerenciador de Eventos: o evento aparece na lista de eventos de teste em alguns segundos.

</div>

::: warning FTD e Personalizado: confirme o evento
Nesses dois tipos o evento chega com um aviso (⚠️) na tela de teste da Meta. Clique nele e **confirme o evento**. Só depois disso ele aparece para seleção na criação da campanha.
:::

::: tip O Evento Teste não vai para as suas métricas
Ele é marcado como teste para a Meta e não entra nos relatórios da campanha nem no "Histórico de Eventos" do Track4you.
:::

## Problemas comuns

- **Evento não aparece no Gerenciador de Eventos**: confira se está olhando o mesmo pixel escolhido na integração e se o código de teste é o atual (ele muda de tempos em tempos).
- **Erro ao enviar**: o token do pixel pode estar inválido ou expirado. Veja [Atualizar o token do pixel](../meta-pixel/update-token).

## Relacionados

- [Tipos de evento: Registro, FTD, Depósito e Personalizado](./event-types)
- [Criar uma integração](./create-integration)
- [Evento Teste do pixel](../meta-pixel/test-event)
