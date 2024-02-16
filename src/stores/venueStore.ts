import { defineStore } from 'pinia'

export const useVenueStore = defineStore('venue', {
  state: () => ({
    venue: {
      name: '',
      address: '',
      car: '',
      metro: '',
      bus: '',
      telephone: '',
      link: '',
      picture: {
        id: 0
      },
      translations: []
    } satisfies Venue,
    error: null
  }),
  getters: {
    getItem: (state) => (item: keyof Venue, locale: string) => {
      return locale === 'tw' ? state.venue[item] : state.venue.translations[0][item]
    },
    getPicture: (state) => {
      if (state.venue.picture.id === 0) return ''
      return `${import.meta.env.VITE_CMS_API}/assets/${state.venue.picture.id}`
    },
    getTelephone: (state) => {
      return state.venue.telephone
    },
    getLink: (state) => {
      return state.venue.link
    }
  },
  actions: {
    async loadVenue (client: any) {
      try {
        const result = await client.query(`
        query Venue {
          venue(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
            name
            address
            car
            metro
            bus
            telephone
            link
            picture { id }
            translations(filter: { languages_code: { name: { _eq: "English" } } }) {
              name
              address
              car
              metro
              bus
            }
          }
        }`)
        this.venue = result.venue[0]
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load venue:', err)
      }
    }
  }
})

interface Venue {
  name: string
  address: string
  car: string
  metro: string
  bus: string
  telephone: string
  link: string
  picture: {
    id: number
  }
  translations: Array<{
    name: string
    address: string
    car: string
    metro: string
    bus: string
  }>
}