import { defineStore } from 'pinia'

export const useSpeakerStore = defineStore('speaker', {
  state: () => ({
    speaker: {
      name: '',
      title: '',
      content: '',
      facebook: '',
      instagram: '',
      youtube: '',
      picture: {
        id: 0
      },
      translations: []
    } satisfies Speaker,
    seminars: [] as Seminar[],
    error: null
  }),
  getters: {
    getSpeakerItem: (state) => (item: keyof Speaker, locale: string) => {
      if (state.speaker.name === '') return ''
      return locale === 'tw' ? state.speaker[item] : state.speaker.translations[0][item]
    },
    getContent: (state) => (locale: string) => {
      if (state.speaker.name === '') return ''
      return locale === 'tw' ? state.speaker.content : state.speaker.translations[0].content
    },
    getPicture: (state) => {
      if (state.speaker.picture.id === 0) return ''
      return `${import.meta.env.VITE_CMS_API}/assets/${state.speaker.picture.id}`
    },
    getFacebook: (state) => {
      return state.speaker.facebook
    },
    getInstagram: (state) => {
      return state.speaker.instagram
    },
    getYoutube: (state) => {
      return state.speaker.youtube
    },
    getSeminarItem: (state) => (key: number, item: keyof Seminar, locale: string) => {
      return locale === 'tw' ? state.seminars[key][item] : state.seminars[key].translations[0][item]
    },
    getIntroduction: (state) => (key: number, locale: string) => {
      return locale === 'tw' ? state.seminars[key].introduction : state.seminars[key].translations[0].introduction
    }
  },
  actions: {
    async loadData (client: any, speakerKey: string) {
      try {
        const result = await client.query(`{
          speakers(filter: { id: { _eq: "${speakerKey}" } }) {
            name
            title
            content
            facebook
            instagram
            youtube
            picture { id }
            translations {
              name
              title
              content
            }
            seminars(filter: { year: { _eq: "${import.meta.env.VITE_YEAR}" } }) {
              time
              topic
              location
              introduction
              translations {
                topic
                location
                introduction
              }
            }
          }
        }`)
        this.speaker = result.speakers[0]
        this.seminars = result.speakers[0].seminars
        this.error = null
      } catch (err) {
        this.error = err as null
        console.error('Failed to load venue:', err)
      }
    }
  }
})

interface Speaker {
  name: string
  title: string
  content: string
  facebook: string
  instagram: string
  youtube: string
  picture: {
    id: number
  }
  translations: Array<{
    name: string
    title: string
    content: string
  }>
}

interface Seminar {
  time: string
  topic: string
  location: string
  introduction: string
  translations: Array<{
    topic: string
    location: string
    introduction: string
  }>
}
