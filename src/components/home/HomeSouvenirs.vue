<template>
  <section id="souvenirs" class="souvenirs-container">
    <header class="souvenirs-title">{{ $t("home.souvenir.title") }}</header>

    <div class="souvenirs-items">
      <div
        class="souvenirs-item"
        v-for="souvenir in store.souvenirs"
        :key="souvenir.name"
      >
        <img
          :src="store.getPicture(souvenir.picture.id)"
          class="souvenirs-item-image"
          alt="souvenirs-bag"
        />
        <div class="souvenirs-item-text">{{ store.getName(souvenir, locale) }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSouvenirsStore } from '@/stores/souvenirsStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'

const { locale } = useI18n()
const store = useSouvenirsStore()
const client = useDirectusClient()

onMounted(() => {
  void store.loadData(client)
})
</script>

<style scoped>
.souvenirs-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 200px;

  .souvenirs-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .souvenirs-coming-soon {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin: 70px auto;
  }
}

.souvenirs-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 70px;
  gap: 5%;

  .souvenirs-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .souvenirs-item-image {
      width: 300px;
      height: 419px;
    }

    .souvenirs-item-text {
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
  .souvenirs-container {
    .souvenirs-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }

    .souvenirs-coming-soon {
      font-size: 10px;
      line-height: 12px;
      margin: 30px auto;
    }
  }

  .souvenirs-items {
    flex-direction: column;
    padding-top: 0px;
    gap: 40px;

    .souvenirs-item {
      .souvenirs-item-image {
        width: 200px;
        height: 200px;
      }

      .souvenirs-item-text {
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
