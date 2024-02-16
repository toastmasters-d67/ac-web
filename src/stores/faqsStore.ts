import { defineStore } from 'pinia'

export const useFaqsStore = defineStore('faqs', {
  state: () => ({
    faqs: [] as Faqs[],
    error: null
  }),
  getters: {
    getQuestion: () => (faqs: Faqs, locale: string) => {
      return locale === 'tw' ? faqs.question : faqs.translations[0].question
    },
    getAnswer: () => (faqs: Faqs, locale: string) => {
      return locale === 'tw' ? faqs.answer : faqs.translations[0].answer
    }
  },
  actions: {
    async loadFaqs (client: any) {
      if (this.faqs.length > 0) return
      try {
        const result = await client.query(`
        query Faqs {
          faqs(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            question
            answer
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
              question
              answer
            }
          }
        }`)
        this.faqs = result.faqs
        for (const faq of this.faqs) {
          faq.icon = 'pi pi-angle-down faq-icon'
          faq.show = false
        }
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load faqs:', err)
      }
    }
  }
})

interface Faqs {
  question: string
  answer: string
  icon: string
  show: boolean
  translations: Array<{
    question: string
    answer: string
  }>
}
