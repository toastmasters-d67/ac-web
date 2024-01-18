<script>
import { ref } from "vue";

export default {
  name: "Marquee",
  props: {
    sentences: {
      type: Object,
    },
  },
  data() {
    const content = ref(this.sentences.join(""));
    const segment = ref("");
    let offset = 6;
    let window = 120;
    const locale = ref(localStorage.getItem("locale") ?? "en");
    if (locale.value === "tw") {
      offset = 3;
      window = 100;
    }
    const marquee = ref(null);
    return {
      content,
      segment,
      offset,
      window,
      marquee,
    };
  },
  created() {
    this.pollMarquee();
  },
  methods: {
    runMarquee() {
      const start = this.content.substring(0, this.offset);
      const end = this.content.substring(this.offset);
      this.content = end + start;
      this.segment = this.content.substring(0, this.window);
    },
    pollMarquee() {
      this.marquee = window.setInterval(() => {
        this.runMarquee();
      }, 500);
    },
  },
  beforeUnmount() {
    window.clearInterval(this.marquee);
  },
};
</script>

<template>
  <section id="marquee" class="marquee-container">
    <div class="marquee-row">
      <i class="pi pi-megaphone marquee-icon"></i>
      <span ref="segmentSpan" class="marquee-segment">{{ this.segment }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.marquee-container {
  z-index: 5;
  width: 100%;
  height: 42px;
  color: black;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    #f8f0e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  .marquee-row {
    position: relative;
    width: 80%;
    height: 18px;
    padding-top: 13px;
    margin: 0 auto;

    .marquee-icon {
      position: absolute;
      left: 5px;
      width: 30px;
      height: 30px;
    }

    .marquee-segment {
      position: absolute;
      right: 5px;
      width: calc(100% - 40px);
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 768px) {
  .marquee-container {
    .marquee-row {
      width: 100%;
    }
  }
}
</style>
