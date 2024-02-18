<template>
  <article id="faq" class="faq-container">
    <Breadcrumb v-once />
    <header class="faq-page-title">{{ $t("faq.title") }}</header>
    <div class="faq-questions">
      <div v-for="faq in store.faqs" :key="faq.question" class="faq-question">
        <div class="faq-row" @click="() => toggle(faq)">
          <span>{{ store.getQuestion(faq, locale) }}</span>
          <i :class="faq.icon"></i>
        </div>
        <span v-if="faq.show" class="faq-answer" v-html="store.getAnswer(faq, locale)"></span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFaqsStore } from '@/stores/faqsStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'
import Breadcrumb from '@/components/app/AppBreadcrumb.vue'

const { locale } = useI18n()
const store = useFaqsStore()
const client = useDirectusClient()

onMounted(() => {
  window.scrollTo({ top: 0 })
  void store.loadData(client)
})

const toggle = (faq: { show: boolean, icon: string }): void => {
  faq.show = !faq.show
  const direction = faq.show ? 'up' : 'down'
  faq.icon = `pi pi-angle-${direction} faq-icon`
}
</script>

<style scoped>
.faq-container {
  width: 100%;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-bottom: 150px;

  .faq-page-title {
    color: #004165;
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .faq-questions {
    color: black;
    margin-top: 20px;

    .faq-question {
      position: relative;
      max-width: 990px;
      width: 68.75%;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 22px;
      font-weight: 500;
      line-height: 27px;
      text-align: left;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
      gap: 10px;
      padding: 16px 24px;
      margin-top: 15px !important;
      margin-bottom: 15px !important;
      margin: 0 auto;

      .faq-row {
        max-width: 990px;
        width: 93.33%;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        .faq-icon {
          position: absolute;
          right: 30px;
        }
      }

      .faq-answer {
        max-width: 910px;
        width: 91.92%;
        min-height: 80px;
        font-size: 18px;
        line-height: 22px;
        text-align: left;
        padding-top: 5px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .faq-container {
    .faq-page-title {
      font-size: 20px;
      line-height: 24px;
      margin-top: 30px;
      margin-bottom: 60px;
    }

    .faq-questions {
      .faq-question {
        font-size: 14px;
        line-height: 17px;
        gap: 5px;

        .faq-row {
          .faq-icon {
            right: 20px;
          }
        }

        .faq-answer {
          min-height: 30px;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
