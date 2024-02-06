import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'tw',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'tw',
  messages,
  globalInjection: true
})
