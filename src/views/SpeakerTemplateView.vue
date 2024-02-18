<template>
  <article id="speaker" class="speaker-container">
    <Briefing />
    <Seminar />
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSpeakerStore } from '@/stores/speakerStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'
import { useRoute } from 'vue-router'
import Briefing from '@/components/speaker/SpeakerBriefing.vue'
import Seminar from '@/components/speaker/SpeakerSeminar.vue'

const store = useSpeakerStore()
const client = useDirectusClient()
const route = useRoute()
const speakerKey = ref(route.params.key)

onMounted(() => {
  window.scrollTo({ top: 0 })
  void store.loadData(client, speakerKey.value)
})
</script>

<style scoped>
.speaker-container {
  background: transparent;
}
</style>
