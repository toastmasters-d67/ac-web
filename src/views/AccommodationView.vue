<template>
  <Breadcrumb v-once />
  <header class="accommodation-title">{{ $t("accommodation.title") }}</header>
  <article id="accommodation" class="accommodation-container">
    <div v-for="(accom, key) in store.accoms" :key="key" class="accommodation-item">
      <img
        :src="store.getPicture(key)"
        :alt="store.getName(key, locale)"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ store.getName(key, locale) }}
          </div>
          <div class="accommodation-price">
            {{ store.getPrice(key) }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ store.getTrans(key, locale) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAccomsStore } from '@/stores/accomsStore.ts'
import { useDirectusClient } from '@/composables/useDirectusClient.ts'
import Breadcrumb from '@/components/app/AppBreadcrumb.vue'

const { locale } = useI18n()
const store = useAccomsStore()
const client = useDirectusClient()

onMounted(() => {
  window.scrollTo({ top: 0 })
  void store.loadData(client)
})
</script>

<style scoped>
.accommodation-title {
  font-size: 32px;
  color: #004165;
  text-align: left;
  padding: 1rem;
  margin-left: 5%;
}

.accommodation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 43px;
  padding-bottom: 300px;

  .accommodation-banner-container {
    width: 100vw;
    transform: translateX(calc(600px - 50vw));

    @media screen and (max-width: 1200px) {
      transform: none;
    }

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-color: transparent;
    background-color: rgba(255, 234, 198, 1);
    padding-top: 9px;
    margin-bottom: 74px;

    .accommodation-banner-visual-left {
      width: 225px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-215%, -90%);
      overflow: hidden;
    }

    .accommodation-banner-visual-right {
      width: 175px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(100%, -110%);
      overflow: hidden;
    }

    .accommodation-banner-title {
      width: 216px;
      height: 56px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      color: white;
      border-color: transparent;
      background-image: url("@/assets/image/accommodation/banner-ellipse.svg");
      padding-top: 24px;
    }

    .accommodation-banner-divider {
      width: 216px;
      border: 1px solid #76551d;
      margin: 5px 0;
    }

    .accommodation-banner-title-text {
      font-size: 12px;
      font-weight: 400;
      color: rgb(142, 92, 5);
      margin-bottom: 51px;
    }
  }

  .accommodation-banner-content-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 46px;

    .accommodation-banner-content-box1 {
      height: 76px;
      display: flex;
      border: 1px solid rgba(142, 92, 5, 1);
      border-radius: 8px;
      background-color: rgba(255, 240, 219, 1);

      .accommodation-banner-box1-subbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgba(142, 91, 4, 1);
        padding: 8px;

        .accommodation-banner-subbox-title1 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .accommodation-banner-subbox-text1 {
          font-size: 10px;
          font-weight: 500;
        }

        .accommodation-banner-subbox-title2 {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .accommodation-banner-subbox-text2 {
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          text-decoration-line: line-through;
        }
      }

      .accommodation-banner-vertical-divider {
        border: 1px solid rgba(142, 92, 5, 1);
        margin: 0;
      }
    }
  }

  .accommodation-banner-content-box2 {
    width: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: rgba(142, 92, 5, 1);
    border: 1px solid rgba(142, 92, 5, 1);
    border-radius: 7px;
    background-color: rgba(255, 240, 219, 1);
    padding: 12px;

    .accommodation-banner-box2-note {
      font-size: 12px;
      font-weight: 400;
    }

    .accommodation-banner-box2-subbox {
      display: flex;
      gap: 35px;

      .accommodation-banner-box2-subbox-text {
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        margin-bottom: 2px;
      }
    }
  }

  .accommodation-banner-bottom {
    width: 100%;
    height: 97px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    color: white;
    background-color: rgba(150, 113, 50, 1);

    .accommodation-banner-bottom-bold {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .accommodation-area {
    font-size: 24px;
    color: #004165;
    text-align: left;
    margin-bottom: 28px;
  }

  .accommodation-item {
    display: flex;
    background: rgba(255, 255, 255, 0.4);
    padding: 30px;
    margin-bottom: 70px;

    .accommodation-image-large {
      width: 450px;
      height: 270px;
      margin-right: 50px;
    }

    .accommodation-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      .accommodation-content-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .accommodation-name {
          font-size: 24px;
          text-align: left;
        }

        .accommodation-price {
          font-size: 20px;
          text-align: right;
        }
      }

      .accommodation-transportation {
        text-align: left;

        .accommodation-transportation-title {
          display: flex;

          img {
            height: 36px;
            width: 36px;
            margin-right: 10px;
            align-self: self-end;
          }

          p {
            font-size: 24px;
            margin-bottom: 0;
          }
        }

        ul {
          padding-inline-start: 15px !important;

          li {
            font-size: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .accommodation-title {
    font-size: 18px;
    margin-bottom: 0px;
    margin-left: 2.5%;
    padding: 1rem;
  }

  .accommodation-banner-container {
    .accommodation-banner-visual-left {
      display: none;
    }

    .accommodation-banner-visual-right {
      display: none;
    }

    .accommodation-banner-content-container {
      flex-direction: column;
    }
  }

  .accommodation-container {
    padding-top: 0px;
    padding-bottom: 50px;
    margin-right: 2.5%;
    margin-left: 2.5%;

    .accommodation-area {
      font-size: 16px;
      padding: 1rem;
    }

    .accommodation-item {
      flex-direction: column;
      padding: 16px;

      .accommodation-image-large {
        width: 100%;
        height: auto;
        margin-bottom: 28px;
      }

      .accommodation-content {
        .accommodation-content-title {
          min-width: 0px;
          flex-direction: column;

          .accommodation-name {
            font-size: 20px;
            align-self: flex-start;
            margin-bottom: 10px;
          }

          .accommodation-price {
            font-size: 14px;
            align-self: flex-start;
          }
        }

        .accommodation-transportation {
          .accommodation-transportation-title {
            img {
              width: 16px;
              height: 16px;
            }

            p {
              font-size: 14px;
            }
          }

          ul {
            margin-top: 0;

            li {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
