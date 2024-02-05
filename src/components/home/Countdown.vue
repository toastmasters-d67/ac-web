<template>
  <section class="countdown-container">
    <header class="countdown-title">{{ $t("home.countdown.title") }}</header>
    <div class="countdown-row">
      <div class="countdown-item">
        <span class="countdown-unit">{{ $t("home.countdown.day") }}</span>
        <Timer :value="days" :full="120" />
      </div>
      <div class="countdown-item">
        <span class="countdown-unit">{{ $t("home.countdown.hour") }}</span>
        <Timer :value="hours" :full="24" />
      </div>
      <div class="countdown-item">
        <span class="countdown-unit">{{ $t("home.countdown.minute") }}</span>
        <Timer :value="minutes" :full="60" />
      </div>
      <div class="countdown-item">
        <span class="countdown-unit">{{ $t("home.countdown.second") }}</span>
        <Timer :value="seconds" :full="60" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Timer from "@/components/home/Timer.vue";

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const polling = ref(null);

function getTime() {
  let d = 0;
  let h = 0;
  let m = 0;
  let s = 0;
  const now = new Date();
  const date = new Date(import.meta.env.VITE_COUNTDOWN_DATE);
  const remaining = date - now;

  if (remaining > 0) {
    d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    h = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    m = Math.floor((remaining / (1000 * 60)) % 60);
    s = Math.floor((remaining / 1000) % 60);
  }

  days.value = d;
  hours.value = h;
  minutes.value = m;
  seconds.value = s;
}

function pollData() {
  polling.value = window.setInterval(() => {
    getTime();
  }, 1000);
}

onMounted(() => {
  getTime();
  pollData();
});

onBeforeUnmount(() => {
  if (polling.value) {
    window.clearInterval(polling.value);
  }
});
</script>

<style scoped lang="scss">
.countdown-container {
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 150px;
  padding-bottom: 150px;
  background: linear-gradient(
    180.29deg,
    #f8f0e9 0.27%,
    rgba(251, 239, 229, 0) 99.76%
  );

  .countdown-title {
    color: #004165;
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
  }

  .countdown-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    div:nth-child(-n + 4) {
      margin-right: 50px;
    }

    margin: 0 auto;

    .countdown-item {
      width: 200px;
      height: 273px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;

      .countdown-unit {
        color: #979797;
        font-size: 32px;
        font-weight: 500;
        line-height: 60px;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .countdown-container {
    padding-top: 0px;
    padding-bottom: 30px;

    .countdown-title {
      font-size: 15px;
      line-height: 18px;
    }

    .countdown-row {
      div:nth-child(-n + 4) {
        margin-right: 13px;
      }

      .countdown-item {
        width: 63px;
        height: 96px;
        margin-top: auto;
        margin-bottom: auto;

        .countdown-unit {
          font-size: 10px;
          line-height: 35px;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
