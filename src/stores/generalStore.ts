import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    general: [] as General[],
    error: null
  }),
  getters: {
    getLink: () => (id: number) => {
      return `/speaker/${id}`
    },
    getIcon: () => (iconId: number) => {
      return `${import.meta.env.VITE_CMS_API}/assets/${iconId}`
    },
    getName: () => (speaker: Speaker, locale: string) => {
      return locale === 'en' ? speaker.translations[0].name : speaker.name
    }
  },
  actions: {
    async loadSpeakers (client: any) {
      try {
        const result = await client.query(`
        query General {
          general(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            date
            title
            slogan
            longwelcom
            shortwelcome
            marquee1
            marquee2
            logo { id }
            translations(filter: { languages_id: { name: { _eq: "English" } } }) {
              date
              title
              slogan
              longwelcome
              shortwelcome
              marquee1
              marquee2
            }
          }
        }`)
        this.general = result.general
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load general:', err)
      }
    }
  }
})

interface General {
  date: string
  title: string
  slogan: string
  longwelcome: string
  shortwelcome: string
  marquee1: string
  marquee2: string
  logo: {
    id: number
  }
  translations: Array<{
    date: string
    title: string
    slogan: string
    longwelcome: string
    shortwelcome: string
    marquee1: string
    marquee2: string
  }>
}
