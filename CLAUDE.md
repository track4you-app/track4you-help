# CLAUDE.md — Central de Ajuda Track4you

Site estático (VitePress) da central de ajuda **help.track4you.app**. Como rodar, onde fica cada coisa e como escrever artigo: [`README.md`](README.md).

## Regras

- **Fonte da estrutura:** `docs/.vitepress/structure.ts`. Artigo novo entra ali primeiro; menu e home são gerados dele.
- **Tom:** manual de uso que vende o produto ("rastreamento avançado", "janela de atribuição", 99,9% de assertividade). Nunca explicar o motor de rastreamento, nunca citar bug, nunca publicar preço (linkar a landing).
- **Exceção — Integrações:** categoria documentada tecnicamente, pra mandar ao dev da plataforma (`integrations/developer-guide` é o pivô): como o click_id sai, como precisa voltar no postback, macros variam por plataforma. Documenta o contrato (o que sai/volta), nunca o motor interno.
- **`{{...}}` em texto quebra o build (Vue):** artigo que cita `{{click_id}}` fora de bloco de código vai inteiro dentro de `:::: v-pre` … `::::` (quatro dois-pontos, pra aceitar `::: tip` dentro).
- **Conteúdo vem do app real:** a fonte é o inventário em `Projects/TRACK4YOU/HELP-CENTER/01-INVENTARIO.md` (pasta de docs do Mario), que reflete a branch `develop` de `track4you-app/track4you-app-oficial`. Texto da tela entre aspas, igual ao app (front V2). Só o motor v2 é documentado; o v1 é legado.
- **i18n:** slug em inglês, igual em todos os idiomas; textos de interface só nos arquivos de `docs/.vitepress/locales/`, nunca fixos no tema.
- **Prints:** `docs/public/img/<idioma>/<categoria>/<artigo>-<n>.png`. Sempre com dados fictícios (ver o plano em `HELP-CENTER/00-PLANO-GERAL.md`).
- `npm run build` precisa passar antes de qualquer push (links quebrados derrubam o build).
