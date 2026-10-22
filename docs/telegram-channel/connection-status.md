---
title: "Status da integração do canal"
description: 'Entenda o diagnóstico em tempo real do seu canal na Track4you e o que fazer quando aparece o aviso "Conexão do canal foi perdida".'
---

# Status da integração do canal

A tela **Canal** traz um diagnóstico em tempo real da conexão do seu canal com a Track4you. Com tudo verde, o rastreamento está funcionando. Se algo sair do lugar, o diagnóstico mostra exatamente onde, e o painel avisa você.

## Onde ver

Abra **Canal** no menu. Abaixo do card do canal fica o **"Status da Integração"**, com duas partes: **"Status do Bot"** e **"Status do Canal"**.

![Card "Status da Integração" com todas as linhas verdes](/img/pt-BR/telegram-channel/connection-status-1.png)

## O que cada linha significa

| Linha | Tudo certo | Precisa de atenção | O que fazer |
|---|---|---|---|
| **"Conexão com a Track4you"** | "Conectado!" | "Não encontrada! Refaça a configuração." | O token do bot mudou ou o bot foi usado em outra ferramenta. Gere um token novo no @BotFather e use **"Reconectar"**. Veja [Reconectar o bot com um token novo](./reconnect-bot) |
| **"Conexão com o Canal"** | "Conectado!" | "Não encontrada! Adicione o bot no Canal." | O bot saiu do canal ou perdeu o cargo de administrador. Adicione o bot de novo como administrador, com todas as permissões |
| **"Tipo do Canal"** | "Privado (Recomendado)" | "Público! Recomendamos canal privado." | O canal funciona, mas sem a Solicitação de Entrada. Veja [Canal público ou privado?](./public-vs-private) |
| **"Verificação de interferências"** | "Nenhuma interferência detectada." | — | Mantenha o bot exclusivo da Track4you |

Quando a conexão com o canal falha, as linhas do "Status do Canal" mostram só um traço ("—") até a conexão voltar.

## O selo do card

No card **"Canal Configurado"**, ao lado do nome do canal:

- **"Ativo"** (verde): a conexão está funcionando.
- **"Inativo"** (vermelho): alguma das conexões falhou. Nesse caso, aparece também o botão **"Reconectar"**.

## O aviso "Conexão do canal foi perdida"

Se a conexão cair, o painel mostra um aviso em qualquer tela (menos na própria tela **Canal**): **"Conexão do canal foi perdida"**, com o alerta **"Todas as suas marcações estão inativas."**. Ele aparece de novo a cada tela que você abre, até a conexão ser corrigida.

![Aviso "Conexão do canal foi perdida" com o botão "Corrigir Configuração"](/img/pt-BR/telegram-channel/connection-status-2.png)

Clique em **"Corrigir Configuração"** para ir direto à tela **Canal**, veja qual linha está vermelha e siga a coluna "O que fazer" da tabela acima.

::: danger Corrija o quanto antes
Enquanto a conexão estiver perdida, as entradas no canal não são rastreadas. Resolva assim que o aviso aparecer para não deixar campanha rodando sem dados.
:::

## Problemas comuns

- **O aviso apareceu logo depois de eu usar o bot em outra ferramenta**: o bot de rastreamento precisa ser exclusivo da Track4you. Tire o bot da outra ferramenta, gere um token novo no @BotFather e reconecte. Veja [Reconectar o bot com um token novo](./reconnect-bot).
- **Alguém removeu o bot do canal**: adicione o bot de novo como administrador, com todas as permissões, e recarregue a tela **Canal**.
- **Corrigi, mas o selo continua "Inativo"**: recarregue a tela **Canal**. Se não mudar, fale com o [suporte](https://track4you.app/suporte).

Mais detalhes em ["Conexão do canal foi perdida"](../troubleshooting/channel-connection-lost).

## Relacionados

- [Reconectar o bot com um token novo](./reconnect-bot)
- [Conectar seu canal à Track4you](./connect-channel)
- [Canal público ou privado?](./public-vs-private)
- [Entradas no canal não aparecem](../troubleshooting/no-joins)
