---
title: "Criar um funil"
description: 'Passo a passo para criar um funil na Track4you: nome, pixel, domínio, Solicitação de Entrada e páginas, e onde copiar o script e o link de entrada.'
---

# Criar um funil

Ao criar o funil, você liga o seu canal, o seu domínio, o seu pixel e as suas páginas. No final, a Track4you entrega o script para instalar na página e o link de entrada para o botão.

## Antes de começar

- **Canal do Telegram conectado.** Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel).
- **Domínio cadastrado.** Veja [Cadastrar seu domínio](../domains/add-domain).
- **Pixel cadastrado**, de preferência com o Evento Teste feito. Veja [Cadastrar o pixel na Track4you](../meta-pixel/add-pixel).
- **O endereço das páginas** que vão fazer parte do funil (ex.: `lancamentoblack.com.br/vip`).

## Passo a passo

<div class="steps">

1. No menu, abra **Funis** e clique em **"Novo"**. O contador ao lado mostra quantos funis você já usa do seu plano.

   ![Tela "Funis" com a "Lista de Funis" e o botão "Novo"](/img/pt-BR/funnels/create-funnel-1.png)

2. Na etapa **"Configuração"** do modal **"Novo Funil"**, preencha:
   - **"Nome do Funil":** um nome só seu para identificar o funil (ex.: "Lançamento Black"). Cada funil precisa de um nome diferente.
   - **"Pixel":** o pixel que vai receber as conversões desse funil.
   - **"Domínio":** o domínio onde estão as páginas do funil.

   ![Modal "Novo Funil" com nome, pixel, domínio e duas páginas adicionadas](/img/pt-BR/funnels/create-funnel-2.png)

3. Em **"Solicitação de Entrada"**, ligue **"Ativar Solicitação de Entrada"** se quiser que o lead peça para entrar no canal. É essa opção que libera a mensagem de boas-vindas e a aprovação automática. Ela só fica disponível para canal privado. Veja [Solicitação de Entrada no funil](./join-request).

   ![Opção "Ativar Solicitação de Entrada" ligada, com a explicação aberta](/img/pt-BR/funnels/create-funnel-3.png)

4. Em **"Adicionar URLs"**, digite o final do endereço de cada página, o que vem depois do domínio, e clique em **"Adicionar"** (ou aperte Enter). Exemplo: para a página `lancamentoblack.com.br/vip`, digite só `vip`. Você pode adicionar até 5 páginas por funil e remover qualquer uma pela lixeira.

5. Clique em **"Próximo"**. A Track4you cria o funil e mostra a etapa **"Instalação"**.

6. Na etapa **"Instalação"**, copie os dois itens com os botões **"Copiar"**:
   - **"Adicione esse código ao Head do seu site":** o script que vai no cabeçalho das páginas.
   - **"Utilize esse link para entrada no seu Grupo":** o link de entrada que vai no botão da página.

   Confira também a lista **"Este funil rastreará as seguintes páginas:"** e clique em **"Fechar"**.

   ![Etapa "Instalação" com o script, o link de entrada e as páginas do funil](/img/pt-BR/funnels/create-funnel-4.png)

</div>

O script tem este formato:

```html
<script src="https://track4you.app/v2/9f8e7d6c-5b4a-4c3d-9e2f-1a0b9c8d7e6f.js" defer></script>
```

E o link de entrada, este:

```text
https://t4y.io/v2/0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d
```

::: tip Copiou e fechou sem querer?
O script e o link ficam sempre disponíveis no botão **"Ver Tutorial"** (ícone de livro) na linha do funil. Veja [Editar, ver tutorial ou excluir um funil](./manage-funnels).
:::

Agora falta instalar: cole o script nas páginas ([Instalar o script na sua página](./install-script)) e coloque o link de entrada no botão ([Configurar o botão da página](./entry-link)).

## Como conferir se deu certo

- O funil aparece na **"Lista de Funis"** com o pixel, o domínio e as páginas em **"Páginas Registradas"**.
- Depois de instalar o script e o botão, faça o [teste do funil](./test-funnel).

## Problemas comuns

- **"Crie um Canal antes de criar um funil."**: conecte o seu canal primeiro. Veja [Conectar seu canal à Track4you](../telegram-channel/connect-channel).
- **A lista de "Pixel" ou de "Domínio" não abre**: você ainda não cadastrou um pixel ou um domínio. Cadastre em **Pixels** ou **Domínios** e volte.
- **"Ativar Solicitação de Entrada" está desabilitado**: o seu canal é público. A Solicitação de Entrada funciona só em canal privado. Veja [Canal público ou privado?](../telegram-channel/public-vs-private).
- **"Essa combinação de domínio + URL já está cadastrada em outro funil."**: cada página só pode estar em um funil. Remova a página do outro funil ou use outra página.
- **"Número máximo de URLs atingido"**: o funil aceita até 5 páginas. Para mais páginas, crie outro funil.
- **Abriu o aviso de assinatura em vez do formulário**: a sua assinatura precisa estar ativa para criar funis. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).
- **Chegou no limite de funis do plano**: exclua um funil que não usa mais ou mude de plano. Veja [Planos e limites](../account/plans-and-limits).

## Relacionados

- [O que é um funil](./what-is-a-funnel)
- [Instalar o script na sua página](./install-script)
- [Configurar o botão da página](./entry-link)
- [Solicitação de Entrada no funil](./join-request)
- [Testar se o funil está rastreando](./test-funnel)
