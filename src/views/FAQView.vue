<template>
  <article id="faq" class="faq-container">
    <Breadcrumb v-once />
    <header class="faq-page-title">{{ $t("faq.title") }}</header>
    <div class="faq-questions">
      <div v-for="(item, key) in items" :key="key" class="faq-question">
        <div class="faq-row" @click="toggle(key)">
          <span>{{ item.question }}</span>
          <i :class="item.icon"></i>
        </div>
        <span v-if="item.show" class="faq-answer">{{ item.answer }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.faq-container {
  max-height: 1200px;
  width: 100%;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 60px;
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
    padding-top: 0px;
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

<script>
import { reactive } from "vue";
import Breadcrumb from "@/components/app/Breadcrumb.vue";

export default {
  name: "FAQView",
  components: {
    Breadcrumb,
  },
  data() {
    const items = reactive([]);
    Array.from(this.$tm("faq.items")).forEach((source) => {
      const item = {
        question: this.$rt(source.question),
        answer: this.$rt(source.answer),
        icon: "pi pi-angle-down faq-icon",
        show: false,
      };
      items.push(item);
    });
    return { items };
  },
  methods: {
    toggle(key) {
      this.items[key].show = !this.items[key].show;
      const direction = this.items[key].show ? "up" : "down";
      this.items[key].icon = `pi pi-angle-${direction} faq-icon`;
    },
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
