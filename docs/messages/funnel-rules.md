---
title: "Mensagens diferentes por funil"
description: 'Crie regras por funil para usar boas-vindas, saída e tempo de aprovação próprios para quem chega por um link específico.'
---

# Mensagens diferentes por funil

Com as regras **"Personalizadas (Por Funil)"**, quem chega por um funil específico recebe mensagens próprias, diferentes das **"Configurações Padrão"**. Exemplo: o lead do funil de lançamento recebe uma boas-vindas falando da oferta, e o lead do grupo orgânico recebe outra, falando do conteúdo diário.

## Antes de começar

- **Pelo menos 2 funis** cadastrados. Com menos, o botão aparece travado com o aviso "Disponível a partir de 2 funis cadastrados.". Veja [Criar um funil](../funnels/create-funnel).
- O funil da regra com **"Solicitação de Entrada"** ligada: as mensagens no privado vão para quem pede entrada pelo link dele. Veja [Solicitação de Entrada no funil](../funnels/join-request).
- Bot de mensagens configurado. Veja [Configurar o bot de mensagens](./setup-message-bot).

## Passo a passo

<div class="steps">

1. No menu **Mensagens**, vá até **"Personalizadas (Por Funil)"** e clique em **"Nova Regra"**.

   ![Seção "Personalizadas (Por Funil)" com os botões "Nova Regra" e "Editar Regra" em destaque](/img/pt-BR/messages/funnel-rules-1.png)

2. No modal **"Selecionar Funil"**, escolha o funil em "Selecione um funil" e clique em **"Confirmar"**. O funil aparece na lista de regras.

3. Clique em **"Editar Regra"** para abrir os cartões **"Entrada"**, **"Saída"** e **"Auto-Aceite"** desse funil.

   ![Regra do funil "Grupo VIP Orgânico" aberta, com os cartões Entrada, Saída e Auto-Aceite](/img/pt-BR/messages/funnel-rules-2.png)

4. Em **"Entrada"** e/ou **"Saída"**, clique em **"Configurar"**, monte a mensagem no editor e clique em **"Salvar"**. Aparece "Mensagem personalizada salva!". Veja [Editor de mensagens](./message-editor).

5. Se quiser um tempo de aprovação próprio para esse funil, ligue o **"Auto-Aceite"** da regra e escolha o tempo de espera. Aparece "Atualizado.".

</div>

::: warning Configure algo para a regra ficar salva
Depois do **"Confirmar"**, a regra só fica gravada quando você salva pelo menos uma mensagem (Entrada ou Saída) ou mexe no Auto-Aceite dela. Se sair da página antes disso, a regra não fica na lista.
:::

## Como ler a lista de regras

Cada regra mostra o nome do funil e etiquetas com o resumo do que está configurado: "Entrada Ativa" ou "Entrada Desativada", "Saída Ativa" ou "Saída Desativada" e o tempo do aceite (ex.: "Aceite: 1min").

Quando todos os funis já têm regra, o modal mostra "Todos os funis já foram adicionados.".

## Remover uma regra

Clique na lixeira da regra e confirme em **"Remover"**. Aparece "Removido." e o funil volta a seguir as **"Configurações Padrão"**.

## Como conferir se deu certo

Com uma conta pessoal do Telegram que **não** seja administradora do canal, peça entrada pela página do funil da regra. A boas-vindas que chega no privado é a da regra, e não a padrão.

## Problemas comuns

- **"Nova Regra" travado**: você tem menos de 2 funis. Crie outro funil.
- **A regra sumiu ao recarregar**: ela foi criada, mas nada foi salvo nela. Crie de novo e salve uma mensagem (passo 4).
- **"Erro ao salvar."** ou **"Erro ao remover."**: tente de novo. Se continuar, [fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Mensagem de saída](./exit-message)
- [Aprovação automática (Auto-Aceite)](./auto-accept)
- [Solicitação de Entrada no funil](../funnels/join-request)
