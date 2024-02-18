<template>
  <div class="cta-buttons-container">
    <button
      class="cta-button contact"
      @click="() => (location.href = 'mailto:tmicon@toastmasters.org.tw')"
    >
      <span v-for="(item, index) in $tm('app.button.contact')" :key="index">
        {{ $rt(item) }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  scrollToElement: Function
})
</script>

<style scoped>
.cta-buttons-container {
  position: fixed;
  right: 2.5%;
  bottom: 6%;
  display: flex;
  flex-direction: column;

  .cta-button {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    box-shadow:
      0px 2px 4px rgba(0, 0, 0, 0.25),
      inset 2px 1px 10px white;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }

  .contact {
    background: linear-gradient(45.28deg, #d6bbea 25.9%, #e7becb 74.88%);
  }
}

@media (max-width: 768px) {
  .cta-buttons-container {
    .cta-button {
      width: 60px;
      height: 60px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 10px;
      line-height: 12px;
    }
  }
}
</style>
