<script>
import Instruction from "@/components/auth/Instruction.vue";
import Register from "@/components/auth/Register.vue";

export default {
  name: "RegisterView",
  components: {
    Instruction,
    Register,
  },
};
</script>

<template>
  <div class="auth-container">
    <Instruction v-once />
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
    height: 660px;
    flex-direction: column;
    background-color: #f8f0e9;
  }
}
</style>
