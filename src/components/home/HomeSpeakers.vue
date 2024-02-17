<template>
  <section id="speakers" class="speakers-container">
    <header class="speakers-title">{{ $t("home.speaker.title") }}</header>
    <div class="speakers">
      <div v-for="speaker in store.speakers" :key="speaker.id">
        <router-link :to="store.getLink(speaker.id)" class="speaker">
          <img
            :src="store.getIcon(speaker.icon.id)"
            class="speaker-image"
            :alt="store.getName(speaker, locale)"
          />
          <span class="speaker-name-text">{{ store.getName(speaker, locale) }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSpeakerListStore } from '@/stores/speakerListStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'

const { locale } = useI18n()
const store = useSpeakerListStore()
const client = useDirectusClient()

onMounted(() => {
  void store.loadData(client)
})
</script>

<style scoped lang="scss">
.speakers-container {
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 150px;

  .speakers-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-bottom: 90px;
  }
}

.speakers {
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-color: transparent;
  margin: 0 auto;
  padding-left: 70px;
  margin-bottom: 32px;

  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }

  .speaker {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-right: 70px;
    margin-bottom: 50px;

    .speaker-image {
      width: 250px;
      height: 250px;
      margin-bottom: 24px;
    }

    .speaker-name-text {
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
    }
  }
}

@media screen and (max-width: 768px) {
  .speakers-container {
    padding-top: 100px;
    padding-bottom: 50px;

    .speakers-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }
  }

  .speakers {
    padding-left: 10px;
    margin-bottom: 0;

    .speaker {
      margin-right: 10px;
      margin-bottom: 19px;

      .speaker-image {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }

      .speaker-name-text {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

  .button-view-all {
    width: 91px;
    border: 1px solid white;
    padding: 8px 15px;
    margin-bottom: 8px;

    .button-text {
      font-size: 10px;
      line-height: 12px;
      margin-right: 8px;
    }

    .button-arrow-right {
      font-size: 9px;
    }
  }
}
</style>
@/stores/speakerListStore
