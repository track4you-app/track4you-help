// Cria o arquivo de cada artigo listado em docs/.vitepress/structure.ts que ainda não existe.
// Uso: node scripts/create-missing-articles.mjs [pt|en]   (padrão: pt)
// Nunca sobrescreve um artigo existente. Requer Node 22.18+ (lê o .ts direto).
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { categories } from '../docs/.vitepress/structure.ts'

const locale = process.argv[2] ?? 'pt'
const draftText = { pt: 'Este artigo está sendo escrito.', en: 'This article is being written.' }
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', locale === 'pt' ? '' : locale)

let created = 0
for (const c of categories) {
  for (const a of c.articles) {
    const file = join(root, c.key, `${a.slug}.md`)
    if (existsSync(file)) continue
    mkdirSync(dirname(file), { recursive: true })
    const title = a.title[locale]
    writeFileSync(
      file,
      `---\ntitle: ${JSON.stringify(title)}\ndescription: ''\nstatus: draft\n---\n\n# ${title}\n\n<div class="draft-note">${draftText[locale]}</div>\n`,
    )
    created++
  }
}
console.log(`${created} artigo(s) criado(s) em ${root}`)
