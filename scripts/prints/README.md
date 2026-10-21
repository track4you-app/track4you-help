# Prints da central

Prints são tirados no app real (Chrome do Mario, conta logada) com **dados fictícios**. Nada é salvo no app.

## Ferramentas

| Arquivo | O que faz |
|---|---|
| `fake-data.js` | Colar no console da aba do app (ou rodar via Claude in Chrome). Troca os dados da tela pelos fictícios da `HELP-CENTER/dados-fake.md` **antes** de a tela desenhar: intercepta as respostas do Inertia/axios e reescreve as props (conta, canal, domínios, pixels, funis, cards do Dashboard) |
| `crop.py` | Recorta, desenha o destaque (laranja `#f59e0b`) e salva em `docs/public/img/pt-BR/<categoria>/<artigo>-<n>.png` |

## Passo a passo

1. Abrir `https://track4you.app/dashboard` (zoom do Chrome normal) e rodar `fake-data.js`.
2. Rodar também a trava de escrita e os mocks (sessão de 21/10/2026):
   - interceptor de request do axios que **bloqueia todo método diferente de GET** e responde `can-delete`/`can-create` com sucesso;
   - `window.__T4Y_mock['<trecho-da-url>'] = <json>` para dados vindos por axios (ex.: `pixels/errors`, `retention/v2`, `enters/hourly`);
   - `window.fetch` respondendo `api.telegram.org` (`getMe`, `getUpdates`) para mostrar o modal "Novo Canal" validado sem chamar o Telegram.
3. Navegar **pelo app** (`$inertia.visit('/rota')`, sem recarregar a página) para os dados fictícios valerem em todas as telas.
4. Abrir o estado (modal, aba), tirar o mouse de cima, capturar o recorte em resolução cheia (`zoom` do Claude in Chrome com `scale: 1`).
5. `python crop.py <png> <largura_css_do_recorte> '<json>'` (ver docstring).
6. No fim, **recarregar a página** (descarta tudo).

Lista do que capturar por artigo: `HELP-CENTER/04-ROTEIRO-PRINTS.md` (pasta de docs do Mario).
