<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { categories, popular, quickStart, SUPPORT_URL, type Locale } from '../../structure'
import HelpIcon from './HelpIcon.vue'

// Textos da home vêm do front-matter de cada index.md (um por idioma); listas vêm de structure.ts.
const { frontmatter, localeIndex } = useData()
const locale = computed<Locale>(() => (localeIndex.value === 'root' ? 'pt' : (localeIndex.value as Locale)))
const prefix = computed(() => (localeIndex.value === 'root' ? '' : `/${localeIndex.value}`))
const href = (path: string) => withBase(`${prefix.value}${path}`)
const fm = computed(() => frontmatter.value.home ?? {})

function openSearch() {
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform)
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: !isMac, metaKey: isMac }))
}
</script>

<template>
  <div class="help-home">
    <section class="hero">
      <img class="hero-mark" src="/favicon-dark.png" alt="" aria-hidden="true" />
      <h1>{{ fm.title }}</h1>
      <p class="hero-text">{{ fm.text }}</p>
      <button type="button" class="hero-search" @click="openSearch">
        <HelpIcon name="search" :size="20" />
        <span>{{ fm.searchPlaceholder }}</span>
        <kbd>Ctrl K</kbd>
      </button>
      <div class="popular">
        <span>{{ fm.popularLabel }}</span>
        <a v-for="p in popular" :key="p.link" :href="href(p.link)">{{ p.title[locale] }}</a>
      </div>
    </section>

    <section class="quick">
      <div class="quick-head">
        <div>
          <span class="eyebrow">{{ fm.quickEyebrow }}</span>
          <h2>{{ fm.quickTitle }}</h2>
          <p>{{ fm.quickText }}</p>
        </div>
        <a class="btn-primary" :href="href('/getting-started/first-funnel')">
          {{ fm.quickButton }} <HelpIcon name="arrow" :size="16" />
        </a>
      </div>
      <ol class="quick-steps">
        <li v-for="(s, i) in quickStart" :key="s.link">
          <a :href="href(s.link)">
            <span class="step-n">{{ i + 1 }}</span>
            <strong>{{ s.title[locale] }}</strong>
            <span class="step-text">{{ s.text[locale] }}</span>
          </a>
        </li>
      </ol>
    </section>

    <section class="cats">
      <h2>{{ fm.categoriesTitle }}</h2>
      <div class="cat-grid">
        <div v-for="c in categories" :key="c.key" class="cat">
          <a class="cat-head" :href="href(`/${c.key}/${c.articles[0].slug}`)">
            <span class="cat-icon"><HelpIcon :name="c.icon" /></span>
            <h3>{{ c.title[locale] }}</h3>
          </a>
          <p>{{ c.description[locale] }}</p>
          <ul>
            <li v-for="a in c.articles.slice(0, 3)" :key="a.slug">
              <a :href="href(`/${c.key}/${a.slug}`)">{{ a.title[locale] }}</a>
            </li>
          </ul>
          <a v-if="c.articles.length > 3" class="cat-more" :href="href(`/${c.key}/${c.articles[0].slug}`)">
            {{ fm.seeAll }} ({{ c.articles.length }})
          </a>
        </div>
      </div>
    </section>

    <section class="support">
      <div class="support-text">
        <span class="cat-icon"><HelpIcon name="message" /></span>
        <div>
          <h2>{{ fm.supportTitle }}</h2>
          <p>{{ fm.supportText }}</p>
        </div>
      </div>
      <a class="btn-whatsapp" :href="SUPPORT_URL" target="_blank" rel="noopener">{{ fm.supportButton }}</a>
    </section>
  </div>
</template>

<style scoped>
.help-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 72px;
}
.hero {
  padding: 72px 0 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}
.hero-mark { width: 72px; height: 72px; }
.hero h1 {
  margin: 0;
  font-size: clamp(34px, 6vw, 48px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--t4y-title);
  text-wrap: balance;
}
.hero-text { margin: 0; max-width: 560px; color: var(--t4y-muted); font-size: 17px; }
.hero-search {
  width: 100%;
  max-width: 680px;
  height: 56px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 16px 0 20px;
  background: var(--t4y-card);
  border: 1px solid var(--t4y-border);
  border-radius: 12px;
  color: var(--t4y-muted);
  font: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: text;
  transition: border-color 0.2s;
}
.hero-search:hover { border-color: var(--t4y-focus); }
.hero-search span { flex: 1; min-width: 0; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.hero-search kbd {
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid var(--t4y-border);
  border-radius: 6px;
  padding: 2px 8px;
}
.popular { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: center; font-size: 13px; color: var(--t4y-muted); }
.popular a {
  color: var(--t4y-text);
  background: rgba(147, 51, 234, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 9999px;
  padding: 4px 12px;
  text-decoration: none;
}
.popular a:hover { color: var(--t4y-title); }

.quick {
  background: var(--t4y-card);
  border: 1px solid var(--t4y-border);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 56px;
}
.quick-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px; }
.quick-head > div { display: flex; flex-direction: column; gap: 6px; max-width: 640px; }
.eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--t4y-primary-light); }
.quick h2 { margin: 0; border: 0; padding: 0; font-size: 28px; line-height: 1.15; font-weight: 800; letter-spacing: -0.025em; color: var(--t4y-title); }
.quick p { margin: 0; color: var(--t4y-muted); font-size: 15px; }
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--t4y-primary);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 12px;
  min-height: 44px;
  box-sizing: border-box;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--t4y-primary-hover); color: #fff; }
.quick-steps { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
.quick-steps li { margin: 0; }
.quick-steps a {
  height: 100%;
  box-sizing: border-box;
  background: var(--t4y-bg);
  border: 1px solid var(--t4y-modal-border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  transition: border-color 0.2s;
}
.quick-steps a:hover { border-color: var(--t4y-primary-light); }
.step-n { width: 28px; height: 28px; border-radius: 9999px; background: var(--t4y-primary); color: #fff; font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; }
.quick-steps strong { color: var(--t4y-title); font-size: 16px; }
.step-text { color: var(--t4y-muted); font-size: 14px; line-height: 1.5; }

.cats { display: flex; flex-direction: column; gap: 20px; margin-bottom: 56px; }
.cats > h2 { margin: 0; border: 0; padding: 0; font-size: 22px; font-weight: 700; color: var(--t4y-title); }
.cat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
.cat {
  background: var(--t4y-card);
  border: 1px solid var(--t4y-border);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.cat-head { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.cat-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(63, 67, 116, 0.5);
  border: 1px solid var(--t4y-modal-border);
  color: var(--t4y-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cat h3 { margin: 0; font-size: 18px; font-weight: 700; color: var(--t4y-title); }
.cat p { margin: 0; font-size: 14px; line-height: 1.5; color: var(--t4y-muted); }
.cat ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 500; }
.cat li { margin: 0; line-height: 1.4; }
.cat ul a, .cat-more { color: var(--t4y-primary-light); text-decoration: none; }
.cat ul a:hover, .cat-more:hover { color: var(--t4y-title); }
.cat-more { font-size: 13px; font-weight: 700; margin-top: auto; }

.support {
  background: var(--t4y-modal);
  border: 1px solid var(--t4y-modal-border);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.support-text { display: flex; align-items: center; gap: 16px; flex: 1 1 420px; min-width: 0; }
.support h2 { margin: 0; border: 0; padding: 0; font-size: 20px; font-weight: 700; color: var(--t4y-title); }
.support p { margin: 4px 0 0; font-size: 15px; color: var(--t4y-muted); }
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  background: var(--t4y-success);
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 12px;
  min-height: 44px;
  box-sizing: border-box;
  text-decoration: none;
}
.btn-whatsapp:hover { color: #0f172a; filter: brightness(1.08); }

@media (max-width: 640px) {
  .help-home { padding: 0 16px 48px; }
  .hero { padding: 48px 0 40px; }
  .quick, .support { padding: 24px; }
  .hero-search kbd { display: none; }
}
</style>
