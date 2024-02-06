<template>
  <section class="seminar-container">
    <div class="seminar-box">
      <header class="seminar-title">{{ $t("speaker.seminar") }}</header>
      <div
        v-for="(seminar, key) in seminars"
        :key="key"
        class="seminar-subcontainer"
      >
        <div class="seminar-separator"></div>
        <div class="seminar-content">
          <div class="seminar-content-basic-info">
            <div class="seminar-row">
              <span class="seminar-row-title">
                {{ $t("speaker.topic") }} |
              </span>
              <span class="seminar-row-subtitle">{{ seminar.topic }}</span>
            </div>
            <div class="seminar-row">
              <span class="seminar-row-title">{{ $t("speaker.time") }} |</span>
              <span class="seminar-row-subtitle">{{ seminar.time }}</span>
            </div>
            <div class="seminar-row">
              <span class="seminar-row-title">
                {{ $t("speaker.location") }} |
              </span>
              <span class="seminar-row-subtitle">{{ seminar.location }}</span>
            </div>
          </div>
          <div class="seminar-content-introduction">
            <div class="seminar-row">
              <span class="seminar-row-title">
                {{ $t("speaker.introduction") }} |
              </span>
              <span
                class="seminar-row-text"
                v-html="seminar.introduction"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  seminars: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.seminar-container {
  width: 100%;
  color: black;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;

  .seminar-box {
    width: 83.33%;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 25px 50px;
    margin: 0 auto;

    .seminar-title {
      font-size: 40px;
      font-weight: 400;
      line-height: 60px;
    }

    .seminar-separator {
      width: 100%;
      border: 1px solid #979797;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .seminar-subcontainer {
      width: 100%;

      .seminar-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 50px;

        .seminar-content-basic-info {
          width: 40%;
          display: flex;
          flex-direction: column;
          margin-right: 50px;
        }

        .seminar-content-introduction {
          width: 52%;
          display: flex;
          flex-direction: column;
        }

        .seminar-row {
          display: flex;
          flex-direction: column;

          .seminar-row-title {
            color: rgba(33, 67, 102, 0.76);
            font-size: 32px;
            line-height: 60px;
            text-align: left;
          }

          .seminar-row-subtitle {
            font-size: 24px;
            line-height: 48px;
            text-align: left;
            margin-bottom: 50px;
          }

          .seminar-row-text {
            display: flex;
            flex-direction: column;
            font-size: 20px;
            line-height: 40px;
            text-align: left;
          }

          @media screen and (max-width: 1024px) {
            .seminar-row-subtitle {
              font-size: 20px;
              line-height: 40px;
            }

            .seminar-row-text {
              font-size: 16px;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .seminar-container {
    padding-top: 24px;
    padding-bottom: 24px;

    .seminar-box {
      width: 83.73%;
      border-radius: 20px;
      padding: 25px;

      .seminar-title {
        font-size: 20px;
        line-height: 30px;
      }

      .seminar-separator {
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .seminar-subcontainer {
        width: 100%;

        .seminar-content {
          flex-direction: column;
          margin-bottom: 25px;

          .seminar-content-basic-info {
            width: 100%;
            margin-right: 50px;
          }

          .seminar-content-introduction {
            width: 100%;
          }

          .seminar-row {
            display: flex;
            flex-direction: column;

            .seminar-row-title {
              font-size: 16px;
              line-height: 40px;
            }

            .seminar-row-subtitle {
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 10px;
            }

            .seminar-row-text {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
