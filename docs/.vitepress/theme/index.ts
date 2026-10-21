import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HelpHome from './components/HelpHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HelpHome', HelpHome)
  },
} satisfies Theme
