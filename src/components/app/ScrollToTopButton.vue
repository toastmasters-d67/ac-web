<template>
  <button
    ref="scrollToTopButton"
    class="scroll-to-top-button"
    @click="scrollToTop('smooth')"
  >
    <img
      alt="Scroll To Top"
      class="scroll-to-top-img"
      src="@/assets/icon/app/scroll-to-top.svg"
    />
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps({
  scrollToTop: Function
})

const scrollToTopButton = ref(null)

function handelScroll (): void {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.value.style.display = 'block'
  } else {
    scrollToTopButton.value.style.display = 'none'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handelScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handelScroll)
})
</script>

<style scoped lang="scss">
.scroll-to-top-button {
  position: fixed;
  right: 1.53%;
  bottom: 50%;
  border: transparent;
  background-color: transparent;
  display: none;

  .scroll-to-top-img {
    width: 47px;
    height: 47px;
  }
}
</style>
