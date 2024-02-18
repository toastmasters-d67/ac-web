<template>
  <div class="auth-container">
    <Instruction :step1HighlightText="step1HighlightText" v-once />
    <Login v-once />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Instruction from '@/components/auth/AuthInstruction.vue'
import Login from '@/components/auth/AuthLogin.vue'

const { t } = useI18n()
const windowHeight = ref(window.innerHeight)
const step1HighlightText = ref(
  t('login.introduction.step1.text-highlight-login')
)

const handleResize = (): void => {
  windowHeight.value = window.innerWidth
}

onBeforeMount(() => {
  window.scrollTo({ top: 0 })
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.auth-container {
  width: 100%;
  min-height: 796px;
  display: flex;
  border-color: transparent;
  background-color: white;
}

@media screen and (max-width: 768px) {
  .auth-container {
    flex-direction: column-reverse;
    background-color: #f8f0e9;
    padding-top: 16px;
  }
}
</style>
