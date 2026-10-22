---
title: "O que são as Integrações"
description: 'Leve registros, FTDs e depósitos da sua casa de apostas, corretora ou plataforma direto para o pixel da Meta, com rastreamento avançado de ponta a ponta.'
---

# O que são as Integrações

As Integrações levam as conversões que acontecem **dentro da sua plataforma** (casa de apostas, corretora, plataforma de afiliados) direto para o seu pixel da Meta: **registro, primeiro depósito (FTD), depósitos** ou qualquer evento que você quiser.

Com isso, a Meta passa a otimizar as campanhas para quem **realmente cadastra e deposita**, não só para quem clica. É rastreamento avançado de verdade: cada conversão é ligada ao clique que gerou, dentro da janela de atribuição, com 99,9% de assertividade.

![Tela de Integrações com a lista "Integrações Realizadas"](/img/pt-BR/integrations/overview-1.png)

## Como funciona, em 3 partes

1. **Link de divulgação.** Cada integração gera um link curto (`https://t4y.io/v2/...`). É ele que vai nos seus anúncios e conteúdos: a Track4you registra o clique e leva o lead para a sua plataforma.
2. **URL de postback.** Você cola essa URL na sua plataforma. Quando a conversão acontece, a plataforma avisa a Track4you por ela.
3. **Envio para o pixel.** A Track4you reconhece o lead e entrega a conversão para o pixel da Meta, pronta para otimizar campanhas.

## Antes de começar

- **Plano:** Integrações fazem parte dos planos **Pro** (até 4 integrações) e **Enterprise** (até 12). Compare os planos na [página da Track4you](https://track4you.app).
- **Pixel cadastrado** na Track4you. Veja [Cadastrar o pixel](../meta-pixel/add-pixel).
- **Sua plataforma precisa ter postback (S2S) com click id.** A integração só funciona com plataformas que devolvem o identificador do clique pelo postback. Antes de configurar, confirme isso com o suporte ou com o gerente de afiliados da plataforma.

::: tip Vai precisar de ajuda do time técnico da plataforma?
Mande para eles o [Guia técnico da integração](./developer-guide). Ele explica, passo a passo, como o identificador do clique é repassado e como ele precisa voltar.
:::

## Relacionados

- [Criar uma integração](./create-integration)
- [Tipos de evento: Registro, FTD, Depósito e Personalizado](./event-types)
- [Configurar o postback na sua plataforma](./platform-postback)
- [Guia técnico da integração (para desenvolvedores)](./developer-guide)
