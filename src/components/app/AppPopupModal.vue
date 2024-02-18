<template>
  <transition name="fade">
    <div class="popup-modal" v-if="isVisible.value">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)

function open () {
  isVisible.value = true
}

function close () {
  isVisible.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.popup-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  z-index: 99;
}
</style>
