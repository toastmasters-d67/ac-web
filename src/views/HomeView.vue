<template>
  <article id="home">
    <Marquee :sentences="sentences" v-once />
    <Slogan v-once />
    <Countdown v-once />
    <Ticket v-once />
    <Speakers v-once />
    <Program v-once />
    <Venue v-once />
    <Souvenirs v-once />
  </article>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import Marquee from '@/components/app/AppMarquee.vue'
import Slogan from '@/components/home/HomeSlogan.vue'
import Countdown from '@/components/home/HomeCountdown.vue'
import Ticket from '@/components/home/HomeTicket.vue'
import Speakers from '@/components/home/HomeSpeakers.vue'
import Program from '@/components/home/HomeProgram.vue'
import Venue from '@/components/home/HomeVenue.vue'
import Souvenirs from '@/components/home/HomeSouvenirs.vue'

const { t } = useI18n()
const sentences = ref([
  `《${t('home.marquee.a')}.》 `,
  `《${t('home.marquee.b')}.》 `
])

onBeforeMount(() => {
  window.scrollTo({ top: 0 })
})
</script>
