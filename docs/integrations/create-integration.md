---
title: "Criar uma integração"
description: 'Passo a passo para criar uma integração: configuração, Evento Teste no Facebook e instalação do link e do postback.'
---

# Criar uma integração

:::: v-pre

Cada integração liga **um tipo de evento** da sua plataforma (registro, FTD, depósito ou personalizado) a um pixel. Se quiser mandar registro **e** FTD, crie duas integrações.

## Antes de começar

- Plano **Pro** ou **Enterprise**.
- Pixel cadastrado e com o token funcionando. Veja [Cadastrar o pixel](../meta-pixel/add-pixel).
- Gerenciador de Eventos da Meta aberto em outra aba, para pegar o **código de teste**.
- Saber **em qual parâmetro da URL a sua plataforma recebe o click id** (pergunte ao suporte dela). Veja a explicação no [Guia técnico](./developer-guide#o-nome-do-parametro-e-configuravel).

## Passo a passo

<div class="steps">

1. No menu, abra **Integrações** e clique em **"Nova Integração"**.

   ![Botão "Nova Integração"](/img/pt-BR/integrations/create-integration-1.png)

2. Na etapa **"Configuração"**, preencha:
   - **"Nome":** um nome só seu para identificar a integração (ex.: "Registro Casa Demo").
   - **"Pixel":** o pixel que vai receber as conversões.
   - **"Tipo de Evento":** "Registro", "FTD", "Depósito" ou "Personalizado". Veja [Tipos de evento](./event-types).
   - **"Identificador de URL":** o nome do parâmetro em que a sua plataforma lê o click id. Se não souber, deixe "click_id (padrão)" e confirme com a plataforma.
   - **"Link de Redirect (Destino)":** a página da sua plataforma para onde o lead vai (ex.: a página de cadastro com o seu link de afiliado). Precisa começar com `https://`.

   Clique em **"Próximo"**.

   ![Etapa "Configuração" da Nova Integração](/img/pt-BR/integrations/create-integration-2.png)

3. Na etapa **"Facebook"**, confira como o evento vai chegar no pixel. Copie o **código de teste** no Gerenciador de Eventos da Meta (aba "Eventos de teste"), cole em **"Código de Teste"** e clique em **"Enviar Evento Teste"**. Quando o botão mostrar **"Enviado!"**, o **"Próximo"** é liberado.

   ![Etapa "Facebook" com o Evento Teste](/img/pt-BR/integrations/create-integration-3.png)

4. Na etapa **"Instalação"**, copie os dois itens:
   - **"Seu Link de Divulgação"**: vai nos seus anúncios, bio, grupos e conteúdos.
   - **"Sua URL de Webhook (Postback)"**: vai na sua plataforma. Veja [Configurar o postback na sua plataforma](./platform-postback).

   Clique em **"Concluir"**.

   ![Etapa "Instalação" com o link de divulgação e a URL de postback](/img/pt-BR/integrations/create-integration-4.png)

</div>

::: warning FTD e Personalizado precisam de aprovação na Meta
Depois do Evento Teste, o evento aparece na tela de teste da Meta com um aviso (⚠️). Clique para **confirmar o evento**: só assim ele fica disponível para usar nas campanhas. Registro e Depósito são eventos padrão e não precisam disso.
:::

## Como conferir se deu certo

- A integração aparece em **"Integrações Realizadas"** com o status **"Aguardando dados"**.
- Depois da primeira conversão real vinda da plataforma, o status muda para **"Recebendo dados"** e o evento aparece no **"Histórico de Eventos"**.

## Problemas comuns

- **"Limite de integrações atingido."**: o seu plano chegou no máximo de integrações. Exclua uma que não usa ou mude de plano na página Planos.
- **"Já existe uma integração com o nome ..."**: use outro nome.
- **"Já existe uma integração com este evento personalizado."**: cada evento personalizado só pode ser usado em uma integração.
- **"Próximo" não libera na etapa "Facebook"**: o código de teste precisa ter pelo menos 4 caracteres e o envio precisa dar "Enviado!". Veja [Evento Teste da integração](./test-event).

::::

## Relacionados

- [Configurar o postback na sua plataforma](./platform-postback)
- [Guia técnico da integração (para desenvolvedores)](./developer-guide)
- [Evento Teste da integração](./test-event)
- [Status e Histórico de Eventos](./event-history)
