<template>
  <div class="auth-container">
    <Instruction :step1HighlightText="step1HighlightText" v-once />
    <Register v-once />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Instruction from '@/components/auth/AuthInstruction.vue'
import Register from '@/components/auth/AuthRegister.vue'

const { t } = useI18n()
const step1HighlightText = ref(
  t('login.introduction.step1.text-highlight-register')
)

onBeforeMount(() => {
  window.scrollTo({ top: 0 })
})
</script>

<style scoped lang="scss">
.auth-container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  border-color: transparent;
  background-color: white;
}

@media screen and (max-width: 768px) {
  .auth-container {
    min-height: 660px;
    flex-direction: column-reverse;
    background-color: #f8f0e9;
  }
}
</style>
