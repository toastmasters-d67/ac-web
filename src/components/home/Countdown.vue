<template>
  <section class="countdown-container">
    <div class="countdown-item">
      <span class="countdown-unit">Days</span>
      <Timer :value="days" :full="120" />
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Hours</span>
      <Timer :value="hours" :full="24" />
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Minutes</span>
      <Timer :value="minutes" :full="60" />
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Seconds</span>
      <Timer :value="seconds" :full="60" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.countdown-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 150px;
  div:nth-child(-n + 4) {
    margin-right: 50px;
  }
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
      color: gray;
      font-size: 32px;
      font-weight: 500;
      line-height: 60px;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 15px;
    }
  }
}
</style>

<script>
import { ref } from "vue";
import Timer from "@/components/home/Timer.vue";

export default {
  name: "Countdown",
  components: {
    Timer,
  },
  data() {
    const [d, h, m, s] = this.getTime();
    const days = ref(d);
    const hours = ref(h);
    const minutes = ref(m);
    const seconds = ref(s);
    const polling = ref(null);
    return {
      days,
      hours,
      minutes,
      seconds,
      polling,
    };
  },
  created() {
    this.pollData();
  },
  methods: {
    getTime() {
      const now = new Date();
      const date = new Date("apr 22, 2023 00:00:00");
      const remaining = date - now;
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(remaining / (1000 * 60)) % 60;
      const seconds = Math.floor(remaining / 1000) % 60;
      return [days, hours, minutes, seconds];
    },
    countdown() {
      const [days, hours, minutes, seconds] = this.getTime();
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
    pollData() {
      this.polling = window.setInterval(() => {
        this.countdown();
      }, 1000);
    },
  },
  beforeUnmount() {
    window.clearInterval(this.polling);
  },
};
</script>
