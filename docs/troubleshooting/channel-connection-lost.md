---
title: "\"Conexão do canal foi perdida\""
description: 'O que fazer quando aparece o aviso "Conexão do canal foi perdida": como achar a causa na tela Canal e reconectar o bot.'
---

# "Conexão do canal foi perdida"

![Aviso "Conexão do canal foi perdida" com o botão "Corrigir Configuração" em destaque](/img/pt-BR/telegram-channel/connection-status-2.png)

**Sintoma:** ao abrir o painel aparece o aviso **"Conexão do canal foi perdida"** / **"Suas marcações estão inativas"**.

A Track4you perdeu o contato com o seu bot de rastreamento ou com o canal. Enquanto isso não for corrigido, as entradas no canal não são rastreadas. A correção leva poucos minutos.

## Como resolver

<div class="steps">

1. No aviso, clique em **"Corrigir Configuração"**. Abre a tela **Canal**.

2. Veja o cartão **"Status da Integração"** e identifique a linha com problema:
   - **"Conexão com o Canal"** em **"Não encontrada! Adicione o bot no Canal."**: o bot saiu do canal ou perdeu o cargo de administrador.
   - **"Conexão com a Track4you"** em **"Não encontrada! Refaça a configuração."**: o token do bot mudou ou o bot está sendo usado em outra ferramenta.

3. **Se o problema é o canal:** no Telegram, adicione o bot de rastreamento de volta como **administrador do canal, com todas as permissões**.

4. **Se o problema é a Track4you:** tire o bot de qualquer outra ferramenta (ele precisa ser exclusivo da Track4you). Depois, no @BotFather, gere um novo token para o bot.

5. Na tela **Canal**, clique em **"Reconectar"** (botão amarelo).

   ![Canal "Inativo" com o botão "Reconectar" em destaque](/img/pt-BR/telegram-channel/reconnect-bot-1.png)

6. No **"Reconectar Bot"**, cole em **"Novo Token"** o token do bot (o novo, se você gerou um no passo 4) e clique em **"Reconectar"**.

</div>

## Como conferir se deu certo

- O canal volta a mostrar **"Ativo"**.
- As linhas do **"Status da Integração"** ficam em **"Conectado!"**.
- O aviso para de aparecer ao navegar pelo painel.

## Problemas comuns

- **"Token inválido."**: o token foi copiado pela metade ou é de outro bot. Copie de novo no @BotFather.
- **O reconectar avisa que o bot não está no canal**: adicione o bot ao canal como administrador (passo 3) e tente de novo.
- **A conexão cai de novo depois de um tempo**: o bot ainda está ligado em outra ferramenta. Crie um bot só para a Track4you. Veja [Criar o bot de rastreamento no BotFather](../telegram-channel/create-bot).

Ainda com o aviso? Fale com o [suporte](https://track4you.app/suporte).

## Relacionados

- [Status da integração do canal](../telegram-channel/connection-status)
- [Reconectar o bot com um token novo](../telegram-channel/reconnect-bot)
- [Entradas no canal não aparecem](./no-joins)
