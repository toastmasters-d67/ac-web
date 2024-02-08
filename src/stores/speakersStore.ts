import { defineStore } from 'pinia'

export const useSpeakersStore = defineStore('speakers', {
  state: () => ({
    speakers: [] as Speaker[],
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
        query Speakers {
          speakers(filter: { seminars: { year: { _eq: "${import.meta.env.VITE_YEAR}" } } }) {
            id
            name
            icon { id }
            translations(filter: { languages_id: { name: { _eq: "English" } } }) {
              name
            }
          }
        }`)
        this.speakers = result.speakers
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load speakers:', err)
      }
    }
  }
})

interface Speaker {
  id: number
  name: string
  icon: {
    id: number
  }
  translations: Array<{
    name: string
  }>
}
