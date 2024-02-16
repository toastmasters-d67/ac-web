import { defineStore } from 'pinia'

export const useSouvenirsStore = defineStore('souvenirs', {
  state: () => ({
    souvenirs: [] as Souvenirs[],
    error: null
  }),
  getters: {
    getPicture: () => (iconId: number) => {
      return window.innerWidth > 768
        ? `${import.meta.env.VITE_CMS_API}/assets/${iconId}`
        : `${import.meta.env.VITE_CMS_API}/assets/${iconId}?width=800&height=800`
    },
    getName: () => (souvenirs: Souvenirs, locale: string) => {
      return locale === 'tw' ? souvenirs.name : souvenirs.translations[0].name
    }
  },
  actions: {
    async loadSouvenirs (client: any) {
      if (this.souvenirs.length > 0) return
      try {
        const result = await client.query(`
        query Souvenirs {
          souvenirs(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            name
            picture { id }
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
              name
            }
          }
        }`)
        this.souvenirs = result.souvenirs
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load souvenirs:', err)
      }
    }
  }
})

interface Souvenirs {
  name: string
  picture: {
    id: number
  }
  translations: Array<{
    name: string
  }>
}
