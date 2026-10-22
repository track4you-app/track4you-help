---
title: "Editor de mensagens: blocos, formatação, botões e mídia"
description: 'Como montar mensagens com texto formatado, nome do lead, emoji, botões com link, imagem, vídeo, áudio, bolinha e delay, e os limites de cada bloco.'
---

# Editor de mensagens: blocos, formatação, botões e mídia

Toda mensagem da Track4you (boas-vindas, saída, disparos recorrentes e únicos) é montada no mesmo editor, em **blocos**. Cada bloco chega no Telegram como uma mensagem separada, na ordem em que aparece na tela.

## Os blocos

| Bloco | O que é | Limites |
|---|---|---|
| **Texto** ("Mensagem de Texto") | Texto com negrito, itálico, sublinhado, tachado, nome do lead, emoji e até 3 botões com link | Até 1000 caracteres · botão com até 20 caracteres |
| **Imagem** | Foto ou arte | JPEG, PNG, GIF, WEBP · até 5MB |
| **Vídeo** | Vídeo comum | MP4, MOV, WEBM · até 20MB |
| **Áudio** | Chega para o lead como mensagem de voz | MP3, OGG, WAV · até 10MB |
| **Bolinha** | Vídeo redondo do Telegram | MP4, MOV · até 20MB · o vídeo já deve estar no formato quadrado (1:1) |
| **Delay** ("Atraso (Delay)") | Pausa antes do próximo bloco, para a sequência chegar em ritmo de conversa | De 1 a 60 segundos |

Cada mensagem tem **até 5 blocos**. O contador no rodapé mostra quantos você já usou (ex.: "3/5 blocos").

::: tip Delay só nas mensagens no privado
O bloco **Delay** existe nas mensagens de Entrada e Saída. Nos disparos no canal (recorrentes e únicos) ele não aparece.
:::

## Passo a passo

<div class="steps">

1. Abra o editor pelo **"Configurar"** do cartão **"Entrada"** ou **"Saída"** (ou pelo modal de um disparo).

2. Adicione blocos pelos botões de **"Adicionar:"**, no topo do modal. Com o editor vazio, use **"Adicionar bloco"**. Para inserir um bloco no meio, clique no **+** entre dois blocos.

   ![Botões de "Adicionar:" no topo do modal "Configurar Mensagem"](/img/pt-BR/messages/message-editor-1.png)

3. **Bloco de texto:** o bloco novo já abre para você escrever (num texto já pronto, clique em **"Editar"**). Na barra do bloco:
   - **B**, **I**, **U** e **S** aplicam negrito, itálico, sublinhado e tachado no trecho selecionado.
   - **`{}`** insere o nome do lead: "Nome (First Name)" vira `{first_name}` e "Sobrenome (Last Name)" vira `{last_name}`.
   - O ícone de carinha abre os emojis.
   - O contador mostra quantos caracteres você usou (ex.: "86 / 1000").

   ![Bloco de texto em edição com a barra de formatação, o contador de caracteres e um botão "Ver regras do canal"](/img/pt-BR/messages/message-editor-2.png)

4. **Botões:** em **"Botões (Máx. 3)"**, clique em **"+ Adicionar Botão"**, escreva o texto do botão e clique no ícone de link para colar o endereço (ex.: `https://lancamentoblack.com.br/vip`). Clique em **"Salvar"** no campo do link. Depois, clique em **"Salvar"** no bloco para fechar a edição do texto.

5. **Imagem, vídeo, áudio ou bolinha:** clique na área **"Carregar ..."** ou arraste o arquivo para ela. O envio começa na hora; espere aparecer "Arquivo enviado com sucesso!". Para trocar o arquivo, use o ícone de troca no canto da mídia.

6. **Delay:** em **"Tempo de espera"**, digite de 1 a 60 **"segundos"**.

7. **Ordem:** arraste o bloco pela alça (as duas linhas à esquerda do nome) ou use as setas para cima e para baixo. A lixeira exclui o bloco.

8. Clique em **"Salvar"** no rodapé do modal.

</div>

::: tip Nome do lead só no privado
Use `{first_name}` e `{last_name}` nas mensagens de Entrada e Saída, que vão para uma pessoa só. Nos disparos no canal a mensagem é para todo mundo, então escreva sem o nome.
:::

::: warning Todo botão precisa de link
O botão leva o lead para o endereço que você colocou. Cole o link completo, começando com `https://`.
:::

## Problemas comuns

- **O "Salvar" do rodapé está cinza**: tem bloco de texto vazio, bloco de mídia sem arquivo ou texto ainda em edição. Preencha ou exclua o bloco e clique em **"Salvar"** dentro do bloco de texto. Se aparecer "Preencha todos os campos obrigatórios antes de salvar.", é o mesmo caso.
- **O botão mostra "Carregando..."**: ainda tem arquivo subindo, e o rodapé mostra quantos envios estão em andamento. Espere terminar e salve.
- **"Arquivo muito grande. Tamanho máximo: ..."**: reduza o arquivo para o limite do bloco (tabela acima).
- **"Formato de arquivo inválido. Formatos aceitos: ..."**: converta o arquivo para um dos formatos da lista.
- **"Isso não parece um domínio válido."** ou **"URL inválida."**: o link do botão está incompleto. Cole o endereço inteiro, com `https://`.
- **"Você atingiu o limite de envios. Tente novamente em ..."**: você subiu muitos arquivos em pouco tempo. Espere o tempo indicado.
- **Os botões de "Adicionar:" ficaram cinza**: a mensagem já tem 5 blocos ("Limite de 5 blocos atingido"). Exclua um bloco para adicionar outro.
- **"Erro ao salvar mensagem."**: tente de novo. Se continuar, [fale com o suporte](https://track4you.app/suporte).

## Relacionados

- [Mensagem de boas-vindas (Entrada)](./welcome-message)
- [Mensagem de saída](./exit-message)
- [Disparos recorrentes no canal](./recurring-posts)
- [Disparos únicos: enviar agora ou agendar](./one-time-posts)
