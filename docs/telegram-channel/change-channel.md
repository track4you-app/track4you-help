---
title: "Trocar de canal ou desconectar"
description: 'Como desconectar o canal do Telegram da Track4you e conectar outro no lugar: o que precisa ser feito antes e o que acontece depois.'
---

# Trocar de canal ou desconectar

Cada canal da Track4you fica ligado a **1 canal do Telegram** por vez, em todos os planos. Para colocar outro canal do Telegram no lugar, você desconecta o atual e conecta o novo. Não existe opção de editar o canal: a troca é sempre desconectar e conectar de novo.

Quer rastrear outro canal sem tirar este? Não precisa desconectar: veja [Rastrear mais de um canal](./multiple-channels).

## Antes de começar

- **O canal só pode ser desconectado se nenhum funil estiver usando ele.** Antes, exclua os funis ligados ao canal em **Funis**. Veja [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels).
- Tem certeza de que é preciso trocar? Se o problema é a conexão que caiu, use [Reconectar o bot com um token novo](./reconnect-bot): ele resolve sem mexer nos funis.

::: danger Excluir funil é irreversível
Ao excluir um funil, ele sai da sua lista de funis de forma definitiva. Anote as páginas e configurações de cada funil antes, para recriar no canal novo.
:::

## Passo a passo

<div class="steps">

1. Em **Funis**, exclua os funis ligados ao canal que vai sair.

2. Abra **Canal** no menu e clique em **"Desconectar"**, no card do canal.

   ![Card do canal com o botão "Desconectar" em destaque](/img/pt-BR/telegram-channel/change-channel-1.png)

3. Confirme em **"Excluir o Canal?"** clicando em **"Excluir"**. Vai aparecer a mensagem **"Canal removido"**.

   ![Confirmação "Excluir o Canal?" com o botão "Excluir"](/img/pt-BR/telegram-channel/change-channel-2.png)

4. Para conectar o canal novo, clique em **"Novo Canal"** e siga [Conectar seu canal à Track4you](./connect-channel). Depois, recrie os funis em **Funis** e atualize o script e o link de entrada nas suas páginas.

</div>

::: tip Vai continuar usando o bot antigo?
Depois de desconectar, o bot continua como administrador no canal antigo do Telegram. Se não for mais usar, remova o bot de lá pelo próprio Telegram. Para o canal novo, crie um bot novo no @BotFather e siga o passo a passo de conexão do começo.
:::

## Como conferir se deu certo

- Depois de desconectar, a tela **Canal** mostra **"Canal desconectado"** e o botão **"Novo Canal"**.
- Depois de conectar o canal novo, o card **"Canal Configurado"** mostra o nome do canal novo com o selo **"Ativo"**.

## Problemas comuns

- **"Este canal não pode ser deletado, pois está vinculado a um funil."**: ainda existe funil usando o canal. Exclua esses funis em **Funis** e tente de novo.
- **"Número máximo de canais atingido"** ao conectar o novo: o canal antigo ainda está conectado. Desconecte primeiro (passos 2 e 3) ou adicione o novo em [Rastrear mais de um canal](./multiple-channels).

::: tip Precisa rastrear mais de um canal?
Adicione um canal novo no mesmo login, com plano próprio. Veja [Rastrear mais de um canal](./multiple-channels).
:::

## Relacionados

- [Rastrear mais de um canal](./multiple-channels)
- [Conectar seu canal à Track4you](./connect-channel)
- [Reconectar o bot com um token novo](./reconnect-bot)
- [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels)
- [Planos e limites](../account/plans-and-limits)
