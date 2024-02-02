<script lang="ts">
import Instruction from "@/components/auth/Instruction.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "RegisterView",
  components: {
    Instruction,
    Register,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  data() {
    return {
      step1HighlightText: this.$t(
        "login.introduction.step1.text-highlight-register"
      ),
    };
  },
};
</script>

<template>
  <div class="auth-container">
    <Instruction :step1HighlightText="step1HighlightText" v-once />
    <Register v-once />
  </div>
</template>

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
