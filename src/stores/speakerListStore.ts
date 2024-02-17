import { defineStore } from 'pinia'

export const useSpeakerListStore = defineStore('speakerList', {
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
      return locale === 'tw' ? speaker.name : speaker.translations[0].name
    }
  },
  actions: {
    async loadData (client: any) {
      if (this.speakers.length > 0) return
      try {
        const result = await client.query(`{
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
