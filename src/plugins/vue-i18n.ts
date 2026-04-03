import { createI18n } from 'vue-i18n'
import fr from "@/locale/fr.ts";
import en from "@/locale/en.ts";

const i18n = createI18n({
  mode: 'composition',
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr: fr,
    en: en,
  }
})

export default i18n
