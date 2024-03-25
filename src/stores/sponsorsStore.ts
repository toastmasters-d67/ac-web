import { defineStore } from 'pinia'

export const useSponsorsStore = defineStore('sponsors', {
  state: () => ({
    sponsors: [] as Sponsor[],
    error: null
  }),
  getters: {
    getPicture: () => (iconId: number) => {
      return window.innerWidth > 768
        ? `${import.meta.env.VITE_CMS_API}/assets/${iconId}`
        : `${import.meta.env.VITE_CMS_API}/assets/${iconId}?width=800&height=800`
    },
    getCompany: () => (sponsor: Sponsor, locale: string) => {
      return locale === 'tw' ? sponsor.company : sponsor.translations[0].company
    },
    getWebsite: () => (sponsor: Sponsor) => {
      return sponsor.website
    }
  },
  actions: {
    async loadData (client: any) {
      if (this.sponsors.length > 0) return
      try {
        const result = await client.query(`{
          sponsors(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            company
            website
            logo { id }
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
              company
            }
          }
        }`)
        this.sponsors = result.sponsors
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load sponsors:', err)
      }
    }
  }
})

interface Sponsor {
  company: string
  website: string
  logo: {
    id: number
  }
  translations: Array<{
    company: string
  }>
}
