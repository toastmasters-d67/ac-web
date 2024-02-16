import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    general: {
      date: '',
      title: '',
      slogan: '',
<<<<<<< HEAD
      longwelcom: '',
=======
      longwelcome: '',
>>>>>>> f9fb16a67743af29d4070139045d3c6e66681191
      shortwelcome: '',
      marquee1: '',
      marquee2: '',
      logo: {
        id: 0
      },
      translations: []
    } satisfies General,
    error: null
  }),
  getters: {
    getItem: (state) => (item: keyof General, locale: string) => {
      return locale === 'tw' ? state.general[item] : state.general.translations[0][item]
    },
    getLogo: (state) => {
      if (state.general.logo.id === 0) return ''
      return `${import.meta.env.VITE_CMS_API}/assets/${state.general.logo.id}`
    }
  },
  actions: {
    async loadGeneral (client: any) {
      if (this.general.date === '') {
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
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
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
          this.general = result.general[0]
          this.error = null
        } catch (err) {
          this.error = err as null
          console.error('Failed to load general:', err)
        }
      }
    }
  }
})

interface General {
  date: string
  title: string
  slogan: string
<<<<<<< HEAD
  longwelcom: string
=======
  longwelcome: string
>>>>>>> f9fb16a67743af29d4070139045d3c6e66681191
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
