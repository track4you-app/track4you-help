---
title: "Não consigo criar domínio, pixel ou funil"
description: 'Por que o botão "Novo" não cria o item: assinatura inativa, limite do plano atingido ou item que precisa existir antes.'
---

# Não consigo criar domínio, pixel ou funil

**Sintoma:** você clica em **"Novo"** em Domínios, Pixels, Funis ou Postbacks e não consegue criar o item.

São três causas possíveis. Veja qual é a sua.

## 1. Abre um aviso de assinatura

![Aviso "Sua assinatura está em atraso" ao clicar em "Novo"](/img/pt-BR/troubleshooting/cannot-create-1.png)

A assinatura não está ativa (pagamento em atraso, cancelada ou sem plano). Para criar itens novos, a assinatura precisa estar em dia. Clique em **"Conferir Assinatura"** (ou **"Renovar Assinatura"**, se ela foi cancelada) e regularize. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

## 2. O plano chegou no limite

Olhe o contador ao lado do botão **"Novo"** (ex.: "4/4"; ele não aparece no celular). Se ele está no máximo, o seu plano já tem todos os itens que inclui:

| Recurso | Starter | Pro | Enterprise |
|---|---|---|---|
| Domínios | 2 | 4 | 8 |
| Pixels | 2 | 4 | 8 |
| Funis | 6 | 12 | 24 |
| Integrações | não inclui | 4 | 12 |
| Postbacks | 4 | 4 | 4 |
| Canal | 1 | 1 | 1 |

Para criar mais:

- **libere espaço** excluindo um item que você não usa mais; ou
- **passe para um plano maior**. Veja [Trocar de plano](../account/change-plan).

::: tip Domínio ou pixel em uso não sai
Um domínio ou pixel ligado a um funil não pode ser excluído (aparece **"Este domínio não pode ser deletado, pois está vinculado a um funil."** ou **"Este Pixel não pode ser deletado, pois está vinculado a um funil."**). Exclua o funil primeiro (no caso do pixel, você também pode editar o funil e escolher outro pixel).
:::

## 3. Falta um item que vem antes

O funil liga canal, pixel e domínio. Por isso a ordem é sempre: **Canal → Domínio → Pixel → Funil**.

- **"Crie um Canal antes de criar um funil."**: conecte o canal primeiro. Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel).
- **As listas de "Pixel" ou "Domínio" não abrem no funil**: ainda não há pixel ou domínio cadastrado. Veja [Cadastrar seu domínio](../domains/add-domain) e [Cadastrar o pixel na Track4you](../meta-pixel/add-pixel).

## Outras mensagens ao criar

- **"Domínio inválido"**: digite o domínio completo, com o ponto (ex.: `lancamentoblack.com.br`).
- **"O domínio "..." já foi adicionado"**: esse domínio já está na sua lista.
- **"O Pixel ... já foi registrado para este usuário."**: esse pixel já está cadastrado.
- **"Token inválido"** ou **"ID do Pixel inválida"**: copie de novo o ID e o token no Gerenciador de Eventos da Meta. Veja [Onde encontrar o ID do pixel e o token](../meta-pixel/find-pixel-id-and-token).
- **"Essa combinação de domínio + URL já está cadastrada em outro funil."**: cada página só pode estar em um funil. Use outra página ou edite o funil que já tem essa.
- **Nome do funil repetido**: cada funil precisa de um nome diferente.

## E o menu bloqueado?

- **Integrações com cadeado**: o plano Starter não inclui Integrações. Passe para o Pro ou o Enterprise.
- **Mensagens com cadeado**: conecte o canal e crie pelo menos um funil com **"Ativar Solicitação de Entrada"** ligado. Veja [Solicitação de Entrada no funil](../funnels/join-request).

Ainda não conseguiu? Fale com o [suporte](https://track4you.app/suporte).

## Relacionados

- [Planos e limites](../account/plans-and-limits)
- [Trocar de plano](../account/change-plan)
- [Seu primeiro funil rodando: checklist](../getting-started/first-funnel)
