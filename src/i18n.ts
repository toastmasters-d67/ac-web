import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

export default createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "tw",
  // @ts-expect-error TS(1343): The 'import.meta' meta-property is only allowed wh... Remove this comment to see the full error message
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "tw",
  messages: messages,
  globalInjection: true,
});
