# Central de Ajuda Track4you

Código de **help.track4you.app**: a central de ajuda da Track4you, feita em [VitePress](https://vitepress.dev) e hospedada na Vercel. Cada push na `main` publica o site.

## Rodar local

```bash
npm install
npm run dev       # http://localhost:5173 com recarga ao salvar
npm run build     # gera docs/.vitepress/dist
npm run preview   # serve o build em http://localhost:4173
```

## Onde fica cada coisa

| Caminho | O que é |
|---|---|
| `docs/.vitepress/structure.ts` | **Árvore da central**: categorias, artigos, títulos por idioma, blocos da home. Menu lateral e home saem daqui |
| `docs/.vitepress/config.mts` | Config do site: busca, idiomas, `noindex` enquanto não publica, sitemap |
| `docs/.vitepress/locales/pt.mts` | Textos de interface em PT-BR (menu, rodapé, busca, 404) |
| `docs/.vitepress/locales/en.mts` | Textos em inglês, prontos mas **não ligados** ainda |
| `docs/.vitepress/theme/` | Tema: cores do app (`custom.css`), home (`components/HelpHome.vue`), ícones |
| `docs/index.md` | Home (os textos ficam no front-matter `home:`) |
| `docs/<categoria>/<artigo>.md` | Artigos em PT-BR |
| `docs/public/` | Logo, favicon e prints (`img/pt-BR/<categoria>/<artigo>-<n>.png`) |
| `scripts/create-missing-articles.mjs` | Cria o `.md` de cada artigo do `structure.ts` que ainda não existe |

## Escrever um artigo

1. O artigo precisa estar em `structure.ts`. Se for novo, adicione ali e rode `npm run articles:create`.
2. Front-matter: `title`, `description` (uma frase, aparece na busca e no Google). Tire `status: draft` quando o artigo estiver pronto.
3. Siga o template: **Pra que serve** · **Antes de começar** · **Passo a passo** · **Como conferir** · **Problemas comuns** · **Relacionados**.
4. Passo a passo numerado com círculo roxo: envolva a lista em `<div class="steps">` … `</div>`, com linha em branco antes e depois da lista.
5. Avisos: `::: tip`, `::: warning`, `::: danger` (títulos em PT-BR: `::: tip Dica`).
6. Prints em `docs/public/img/pt-BR/<categoria>/<artigo>-<n>.png`, referenciados como `/img/pt-BR/...`.

### Tom (regras do Mario)

- Manual de uso que **vende o produto**: "rastreamento avançado", "janela de atribuição", trackeamento com 99,9% de assertividade.
- **Nunca** explicar como o rastreamento funciona por dentro, nem citar bugs.
- Palavras da tela entre aspas, iguais às do app. Sem preços: linkar a landing. Suporte: `https://track4you.app/suporte` (WhatsApp).

## Idiomas

PT-BR fica na raiz (`/`). Os slugs são em inglês e iguais em todos os idiomas. Para ligar o inglês:

1. traduzir os `title.en` / `description.en` em `structure.ts`;
2. `node scripts/create-missing-articles.mjs en` e escrever os artigos em `docs/en/`;
3. copiar `docs/index.md` para `docs/en/index.md` com os textos em inglês;
4. registrar `en: { ...en, link: '/en/' }` em `locales` e `en: enSearch` na busca do `config.mts`.

Prints em inglês ficam em `/img/en/...`.

## Publicação

- Vercel, projeto `track4you-help`, deploy automático a cada push na `main`.
- Enquanto `HELP_PUBLISHED` não for `true` (variável de ambiente na Vercel), o site sai com `noindex` (fora do Google).
- Domínio final: `help.track4you.app` (Etapa 7 do plano).

Plano completo, inventário do produto e estrutura: pasta de docs do Mario, `Projects/TRACK4YOU/HELP-CENTER/`.
