<template>
  <section id="sponsors" class="sponsors-container">
    <header class="sponsors-title">{{ $t("home.sponsor.title") }}</header>

    <div class="sponsors-items">
      <div
        class="sponsors-item"
        v-for="sponsor in store.sponsors"
        :key="sponsor.company"
      >
      <a :href="store.getWebsite(sponsor)" target="_blank">
        <img
          :src="store.getPicture(sponsor.logo.id)"
          class="sponsors-item-image"
          alt="sponsors-bag"
        />
      </a>
        <div class="sponsors-item-text">{{ store.getCompany(sponsor, locale) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSponsorsStore } from '@/stores/sponsorsStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'

const { locale } = useI18n()
const store = useSponsorsStore()
const client = useDirectusClient()

onMounted(() => {
  void store.loadData(client)
})
</script>

<style scoped lang="scss">
.sponsors-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 200px;

  .sponsors-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .sponsors-coming-soon {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin: 70px auto;
  }
}

.sponsors-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 70px;
  gap: 5%;

  .sponsors-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .sponsors-item-image {
      width: 300px;
      height: 419px;
    }

    .sponsors-item-text {
      color: black;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.05em;
      line-height: 30px;
      text-align: center;
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .sponsors-container {
    .sponsors-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }

    .sponsors-coming-soon {
      font-size: 10px;
      line-height: 12px;
      margin: 30px auto;
    }
  }

  .sponsors-items {
    flex-direction: column;
    padding-top: 0px;
    gap: 40px;

    .sponsors-item {
      .sponsors-item-image {
        width: 200px;
        height: 200px;
      }

      .sponsors-item-text {
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
