<template>
  <article id="speaker" class="speaker-container">
    <Briefing
      :name="name"
      :title="title"
      :contents="contents"
      :facebook="facebook"
      :instagram="instagram"
      :youtube="youtube"
      :image="image"
    />
    <Seminar :time="time" :seminars="seminars" />
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useLanguageStore } from '@/stores/languageStore.ts'
import Briefing from '@/components/speaker/SpeakerBriefing.vue'
import Seminar from '@/components/speaker/SpeakerSeminar.vue'
import { useRoute } from 'vue-router'

const CMS_URL = import.meta.env.VITE_CMS_API
const store = useLanguageStore()

const route = useRoute()
const speakerKey = ref(route.params.key)
const seminars = ref([])
const translations = ref([])
const time = ref([])

const name = ref('')
const title = ref('')
const contents = ref('')
const facebook = ref('')
const instagram = ref('')
const youtube = ref('')
const image = ref('')

const getChineseData = async (): Promise<void> => {
  try {
    const response = await axios.get(
      `${CMS_URL}/items/seminars/?filter[speaker][_eq]=${speakerKey.value.toString()}`
    )
    response.data.data.forEach((source) => {
      translations.value.push(source.translations[0])
      time.value.push(source.time)
      if (store.language === 'tw') {
        seminars.value.push({
          time: source.time,
          topic: source.topic,
          location: source.location,
          introduction: source.introduction
        })
      }
    })
  } catch (error) {
    console.error(error)
  }
}

const getForigienData = async (): Promise<void> => {
  let count = 0
  for (const id of translations.value) {
    try {
      const response = await axios.get(
        `${CMS_URL}/items/seminars_translations/?filter[id][_eq]=${id}`
      )
      response.data.data.forEach((source) => {
        seminars.value.push({
          time: time.value[count],
          topic: source.topic,
          location: source.location,
          introduction: source.introduction
        })
        count++
      })
    } catch (error) {
      console.error(error)
    }
  }
}

const getAllData = async (): Promise<void> => {
  await getChineseData()
  if (store.language === 'en') {
    await getForigienData()
  }
}

const fetchSpeakerDetails = async (): Promise<void> => {
  try {
    const response = await axios.get(
      `${CMS_URL}/items/speakers/?filter[id][_eq]=${speakerKey.value}`
    )
    const data = response.data.data[0] // Assuming there's only one speaker per key
    facebook.value = data.facebook
    instagram.value = data.instagram
    youtube.value = data.youtube
    image.value = `${CMS_URL}/assets/${data.picture}`
    if (store.language === 'tw') {
      name.value = data.name
      title.value = data.title
      contents.value = data.contents
    } else {
      const transResponse = await axios.get(
        `${CMS_URL}/items/speakers_translations/?filter[id][_eq]=${translations.value[0]}`
      )
      const transData = transResponse.data.data[0] // Assuming there's only one translation per speaker
      name.value = transData.name
      title.value = transData.title
      contents.value = transData.contents
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  window.scrollTo({ top: 0 })
  void fetchSpeakerDetails()
  void getAllData()
})
</script>

<style scoped lang="scss">
.speaker-container {
  background: transparent;
}
</style>
