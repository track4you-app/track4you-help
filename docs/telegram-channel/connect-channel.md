---
title: "Conectar seu canal à Track4you"
description: 'Coloque o bot de rastreamento como administrador do canal, valide o token, busque o canal e salve: seu canal do Telegram passa a ser rastreado.'
---

# Conectar seu canal à Track4you

Conectar o canal é o primeiro passo do rastreamento avançado: a partir daqui, a Track4you passa a identificar quem entra e quem sai do seu canal do Telegram. Cada conta tem **1 canal conectado**, em todos os planos.

## Antes de começar

- O **bot de rastreamento** criado e o **token** em mãos. Veja [Criar o bot de rastreamento no BotFather](./create-bot).
- Ser **administrador** do canal no Telegram.
- **Assinatura ativa** na Track4you.
- Recomendado: canal **privado**. Veja [Canal público ou privado?](./public-vs-private).

## Passo a passo

<div class="steps">

1. **No Telegram, coloque o bot como administrador do canal.** Abra o canal, toque no nome dele para abrir as informações e vá em **Administradores** → **Adicionar Administrador**. Procure pelo username do bot (ex.: `@sinaisvipdemo_track_bot`), **habilite todas as permissões** e salve.

2. **Envie qualquer mensagem no canal e aguarde de 3 a 5 minutos.** Pode ser um simples "ok": essa mensagem faz o canal aparecer na busca da Track4you. Depois, se quiser, apague a mensagem.

3. **Na Track4you, abra Canal no menu e clique em "Novo Canal".**

   ![Tela Telegram com "Canal desconectado" e o botão "Novo Canal"](/img/pt-BR/telegram-channel/connect-channel-1.png)

4. O modal **"Novo Canal"** abre com o guia dos 3 passos que você já fez no Telegram ("Criar Bot no @BotFather", "Adicionar Bot ao Canal" e "Enviar mensagem e aguardar").

   ![Modal "Novo Canal" com o guia de 3 passos](/img/pt-BR/telegram-channel/connect-channel-2.png)

5. Cole o token em **"Token do Bot"** e clique em **"Validar Token"**. Quando o token está certo, o campo fica verde e o botão muda para **"Validado"**.

   ![Token do bot validado, com o botão "Validado"](/img/pt-BR/telegram-channel/connect-channel-3.png)

6. Clique em **"Buscar canais"** e escolha o seu canal em **"Canal"**.

   ![Canal "Sinais VIP Demo" escolhido e o botão "Salvar"](/img/pt-BR/telegram-channel/connect-channel-4.png)

7. Clique em **"Salvar"**. Vai aparecer a mensagem **"Canal configurado!"**.

</div>

::: warning Um canal, uma conta
Cada canal do Telegram fica conectado a uma única conta da Track4you. Se o mesmo canal for conectado em outra conta, a conexão anterior e os funis ligados a ele naquela conta deixam de existir.
:::

## Como conferir se deu certo

A tela **Canal** mostra o card **"Canal Configurado"** com o nome do canal, o selo **"Ativo"**, o username do bot e o token mascarado. Logo abaixo, o **"Status da Integração"** fica com todas as linhas verdes.

![Canal configurado, com o selo "Ativo" e o diagnóstico todo verde](/img/pt-BR/telegram-channel/connect-channel-5.png)

::: warning Importante
O bot configurado para a Track4you não deve ser usado ao mesmo tempo em outras plataformas ou finalidades. O uso em outro lugar interfere no rastreamento.
:::

Para entender cada linha do diagnóstico, veja [Status da integração do canal](./connection-status).

## Problemas comuns

- **"Token inválido."**: o token foi copiado pela metade ou com espaço. Copie de novo a mensagem do @BotFather, inteira, e cole outra vez.
- **"Nenhum canal encontrado. Siga o tutorial e tente novamente."**: confira se o bot está como administrador do canal, envie uma mensagem nova no canal, aguarde alguns minutos e clique em **"Buscar canais"** de novo.
- **O canal certo não aparece na lista, mas outros aparecem**: a lista mostra os chats onde o bot está. Confira se você adicionou o bot no canal certo e mande uma mensagem nele.
- **"Número máximo de canais atingido"**: a sua conta já tem um canal conectado. Para trocar, veja [Trocar de canal ou desconectar](./change-channel).
- **"Novo Canal" abre um aviso de assinatura**: a sua assinatura não está ativa. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).
- **Salvou, mas "Conexão com o Canal" está vermelha**: o bot não está como administrador ou não tem todas as permissões. Ajuste no Telegram e recarregue a tela **Canal**.

Não resolveu? Fale com o [suporte](https://track4you.app/suporte).

## Relacionados

- [Criar o bot de rastreamento no BotFather](./create-bot)
- [Canal público ou privado?](./public-vs-private)
- [Status da integração do canal](./connection-status)
- [Cadastrar seu domínio](../domains/add-domain)
