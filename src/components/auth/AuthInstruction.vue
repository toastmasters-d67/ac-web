<template>
  <section class="instruction-container">
    <span class="instruction-title">
      <span class="instruction-title-text">
        <span class="instruction-title-highlight"
          >{{ $t("login.introduction.title.text-highlight") }}
        </span>
        {{ $t("login.introduction.title.text") }}
      </span>
    </span>
    <div class="instruction-steps">
      <div class="instruction-step">
        <span class="instruction-step-number">1</span>
        <span class="instruction-step-text">
          <span class="text-highlight">
            {{ step1HighlightText }}
          </span>
          {{ $t("login.introduction.step1.text") }}
        </span>
      </div>
      <div class="instruction-step">
        <span class="instruction-step-number">2</span>
        <span class="instruction-step-text"
          >{{ $t("login.introduction.step2.text") }}
          <span class="text-highlight">
            {{ $t("login.introduction.step2.text-highlight") }}
          </span>
        </span>
      </div>
      <div class="instruction-step">
        <span class="instruction-step-number">3</span>
        <span class="instruction-step-text"
          >{{ $t("login.introduction.step3.text1") }}
          <span class="text-highlight">
            {{ $t("login.introduction.step3.text-highlight") }}
          </span>
        </span>
      </div>
    </div>
    <img
      alt="manshoppingonline"
      :src="getImage()"
      class="login-man-shopping-online"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import largeMan from '@/assets/image/login/man-shopping-online.png'
import smallMan from '@/assets/image/login/man-shopping-online-mobile.png'

defineProps({
  step1HighlightText: String
})

const windowHeight = ref(window.innerHeight)

function handleResize (): void {
  windowHeight.value = window.innerWidth
}

function getImage (): string {
  return windowHeight.value > 768 ? largeMan : smallMan
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.instruction-container {
  position: relative;
  width: 44.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-color: transparent;
  background-color: #f8f0e9;
  padding-left: 5.7%;
  padding-right: 20px;
  padding-top: 148px;

  .instruction-title {
    text-align: left;
    margin-bottom: 94px;

    .instruction-title-highlight {
      font-size: 32px;
      font-weight: 500;
      line-height: 39px;
      letter-spacing: 0em;
      color: rgba(233, 168, 55, 1);
    }

    .instruction-title-text {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      color: #004165;
    }
  }

  .login-man-shopping-online {
    width: 297px;
    right: 0;
    bottom: 0;
    position: absolute;
    border-color: transparent;
  }

  .instruction-steps {
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-color: transparent;
    margin-bottom: 24px;
    gap: 24px;

    .instruction-step {
      width: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;
      flex-shrink: 0;

      .instruction-step-number {
        width: 40px;
        height: 40px;
        font-size: 20px;
        text-align: center;
        border-radius: 500px;
        background-color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        padding: 10px;
        margin-right: 22.5px;
        margin-bottom: 0;
      }

      .instruction-step-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: rgba(33, 67, 102, 1);
      }

      .text-highlight {
        color: rgba(233, 168, 55, 1);
        font-weight: 700;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .instruction-container {
    width: 100%;
    height: auto;
    background: none;
    padding: 40px 0 100px 0;

    .instruction-title {
      margin: 24px auto 8px;

      .instruction-title-highlight {
        font-size: 20px;
        line-height: 24px;
      }

      .instruction-title-text {
        font-size: 16px;
        line-height: 20px;
      }
    }

    .login-man-shopping-online {
      position: relative;
      width: 166px;
      order: -1;
      margin: auto;
    }

    .instruction-steps {
      margin: auto;
      margin-bottom: 24px;
      gap: 8px;

      .instruction-step {
        .instruction-step-number {
          width: 32px;
          height: 32px;
          font-size: 14px;
          line-height: 17px;
          padding: 9px;
          margin-right: 17px;
        }

        .instruction-step-text {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
