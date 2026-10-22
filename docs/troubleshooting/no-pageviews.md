---
title: "Visitas não aparecem no painel"
description: 'O que conferir quando o card "Pageviews" do Dashboard fica zerado: script, domínio, páginas do funil e assinatura.'
---

# Visitas não aparecem no painel

**Sintoma:** você abriu a sua página, mas o card **"Pageviews"** do Dashboard continua zerado.

Quase sempre é um detalhe de instalação. Confira os itens abaixo, na ordem.

## O que conferir

<div class="steps">

1. **O período do Dashboard.** O Dashboard abre mostrando o dia de hoje. Se o teste foi ontem, escolha o período certo e clique em **"Buscar"**.

2. **O script está no `<head>` da página, sem alteração.** Em **Funis**, clique no ícone de livro (**"Ver Tutorial"**) do funil e copie o código do passo **"Adicione esse código ao Head do seu site"** com o botão **"Copiar"**. Cole inteiro dentro do `<head>` de **cada página** do funil, sem apagar nada (nem o `defer` do final).

   ![Tutorial de Instalação com o código do script e o botão "Copiar" em destaque](/img/pt-BR/funnels/install-script-1.png)

3. **A página foi publicada depois de colar o script.** No WordPress, Elementor e outros construtores, salve, publique e limpe o cache do site.

4. **O domínio cadastrado é o mesmo da página.** Em **Domínios**, o endereço precisa ser igual ao da barra do navegador. Subdomínio conta como domínio diferente: página em `lp.sinaisvipdemo.com.br` precisa do domínio `lp.sinaisvipdemo.com.br` cadastrado, e não só `sinaisvipdemo.com.br`.

5. **A página está cadastrada no funil, com o caminho exato.** Se a página é `lancamentoblack.com.br/vip`, o funil precisa ter a URL `vip`. A página inicial do domínio (sem caminho) não pode ser cadastrada no funil: use uma página com caminho próprio para cada funil.

6. **A página abre com `https://`.** Páginas sem o cadeado de segurança no navegador não são rastreadas.

7. **A assinatura está ativa.** Com pagamento em atraso ou assinatura cancelada, o rastreamento fica pausado. Veja [Pagamento em atraso ou assinatura cancelada](../account/overdue-or-canceled).

</div>

## Como testar de novo

Abra a página numa aba anônima, sem bloqueador de anúncios, espere ela carregar por completo e confira o Dashboard em alguns minutos. O passo a passo completo está em [Testar se o funil está rastreando](../funnels/test-funnel).

## Ainda não apareceu?

Fale com o [suporte](https://track4you.app/suporte) e mande o endereço da página e o nome do funil.

## Relacionados

- [Instalar o script na sua página](../funnels/install-script)
- [Cadastrar seu domínio](../domains/add-domain)
- [Criar um funil](../funnels/create-funnel)
- [Cliques não aparecem](./no-clicks)
