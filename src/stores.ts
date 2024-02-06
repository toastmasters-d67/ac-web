import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<string>(localStorage.getItem('locale') ?? 'tw')
  function setLanguage (lang: string): void {
    language.value = lang
  }

  return { language, setLanguage }
})
