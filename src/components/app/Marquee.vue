<template>
  <section id="marquee" class="marquee-container">
    <div class="marquee-row">
      <i class="pi pi-megaphone marquee-icon"></i>
      <span ref="segmentSpan" class="marquee-segment">{{ segment }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  sentences: Array,
});

const content = ref(props.sentences.join(""));
const segment = ref("");
let offset = 6;
let windowSize = 120;
const locale = ref(localStorage.getItem("locale") ?? "en");
if (locale.value === "tw") {
  offset = 3;
  windowSize = 100;
}
const marqueeInterval = ref(null);

onMounted(() => {
  marqueeInterval.value = setInterval(() => {
    runMarquee();
  }, 500);
});

onBeforeUnmount(() => {
  clearInterval(marqueeInterval.value);
});

function runMarquee() {
  const start = content.value.substring(0, offset);
  const end = content.value.substring(offset);
  content.value = end + start;
  segment.value = content.value.substring(0, windowSize);
}
</script>

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
