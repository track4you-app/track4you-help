---
title: "Editar ou excluir um domínio"
description: 'Como trocar o endereço de um domínio cadastrado (vale para todos os funis ligados a ele) e como excluir um domínio que não usa mais.'
---

# Editar ou excluir um domínio

Mudou as páginas de endereço ou quer liberar espaço no plano? Na tela **Domínios** você edita ou exclui cada domínio pelos ícones da coluna **"Ações"**.

![Ícones de editar (lápis) e excluir (lixeira) na linha do domínio](/img/pt-BR/domains/manage-domains-1.png)

## Editar um domínio

Editar troca o endereço em **todos os funis ligados a esse domínio** de uma vez. É o caminho certo quando as suas páginas mudaram de domínio e os funis continuam os mesmos.

<div class="steps">

1. No menu, abra **Domínios** e clique no **lápis** da linha do domínio.

2. No modal **"Editar Domínio"**, troque o endereço em **"Endereço do Domínio"**. Vale a mesma regra do cadastro: só o domínio, sem `https://` e sem o nome da página.

3. Clique em **"Salvar"**. A tela confirma com "Domínio editado".

</div>

::: warning Instale o script nas páginas do novo domínio
Se as páginas mudaram de endereço, confira se o script de rastreamento está no `<head>` das páginas novas. Veja [Instalar o script na sua página](../funnels/install-script).
:::

## Excluir um domínio

Só dá para excluir um domínio que **não está ligado a nenhum funil**.

<div class="steps">

1. No menu, abra **Domínios** e clique na **lixeira** da linha do domínio.

2. Confira o domínio na mensagem **"Excluir o domínio?"** e clique em **"Excluir"**.

   ![Confirmação "Excluir o domínio?" com o botão "Excluir"](/img/pt-BR/domains/manage-domains-2.png)

</div>

::: danger A exclusão não tem volta
"Essa ação é irreversível." Se precisar do domínio de novo, cadastre outra vez em [Cadastrar seu domínio](./add-domain).
:::

## Como conferir se deu certo

- **Editou:** a lista **"Meus Domínios"** mostra o endereço novo.
- **Excluiu:** a tela mostra "Domínio removido", o domínio sai da lista e o contador ao lado do botão **"Novo"** diminui.

## Problemas comuns

- **"Este domínio não pode ser deletado, pois está vinculado a um funil."**: algum funil usa esse domínio. Abra **Funis**, exclua os funis que usam esse domínio (se ainda precisar deles, crie de novo com outro domínio) e depois volte e exclua o domínio. Veja [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels).
- **"O domínio "..." já foi adicionado"** ao editar: o endereço novo já está cadastrado em outra linha. Se essa outra linha não tem funil, exclua ela e edite de novo: assim os funis do domínio antigo passam para o endereço novo.
- **"Domínio inválido"**: o endereço precisa ter ponto, como `seusite.com.br`.

Ainda com dúvida? Fale com o [suporte pelo WhatsApp](https://track4you.app/suporte).

## Relacionados

- [Cadastrar seu domínio](./add-domain)
- [Editar, ver tutorial ou excluir um funil](../funnels/manage-funnels)
- [Instalar o script na sua página](../funnels/install-script)
