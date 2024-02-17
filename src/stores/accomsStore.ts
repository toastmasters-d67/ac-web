import { defineStore } from 'pinia'

export const useAccomsStore = defineStore('accoms', {
  state: () => ({
    accoms: [] as Accom[],
    error: null
  }),
  getters: {
    getName: (state) => (key: number, locale: string) => {
      return locale === 'tw' ? state.accoms[key].name : state.accoms[key].translations[0].name
    },
    getTrans: (state) => (key: number, locale: string) => {
      return locale === 'tw' ? state.accoms[key].transportation : state.accoms[key].translations[0].transportation
    },
    getPicture: (state) => (key: number) => {
      const pictureId = state.accoms[key].picture.id
      if (pictureId === 0) return ''
      return `${import.meta.env.VITE_CMS_API}/assets/${pictureId}`
    },
    getPrice: (state) => (key: number) => {
      return state.accoms[key].price
    }
  },
  actions: {
    async loadData (client: any) {
      if (this.accoms.length > 0) return
      try {
        const result = await client.query(`{
          accommodations(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            name
            transportation
            price
            picture { id }
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
              name
              transportation
            }
          }
        }`)
        this.accoms = result.accommodations
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load accommodations:', err)
      }
    }
  }
})

interface Accom {
  name: string
  transportation: string
  price: number
  picture: { id: number }
  translations: Array<{
    name: string
    transportation: string
  }>
}
