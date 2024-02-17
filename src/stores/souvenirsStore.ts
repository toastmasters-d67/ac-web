import { defineStore } from 'pinia'

export const useSouvenirsStore = defineStore('souvenirs', {
  state: () => ({
    souvenirs: [] as Souvenir[],
    error: null
  }),
  getters: {
    getPicture: () => (iconId: number) => {
      return window.innerWidth > 768
        ? `${import.meta.env.VITE_CMS_API}/assets/${iconId}`
        : `${import.meta.env.VITE_CMS_API}/assets/${iconId}?width=800&height=800`
    },
    getName: () => (souvenir: Souvenir, locale: string) => {
      return locale === 'tw' ? souvenir.name : souvenir.translations[0].name
    }
  },
  actions: {
    async loadData (client: any) {
      if (this.souvenirs.length > 0) return
      try {
        const result = await client.query(`{
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

interface Souvenir {
  name: string
  picture: {
    id: number
  }
  translations: Array<{
    name: string
  }>
}
