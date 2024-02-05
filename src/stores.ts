import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const language = ref<string>(localStorage.getItem("locale") ?? "tw");
  function set_language(lang: string) {
    language.value = lang;
  }

  return { language, set_language };
});
