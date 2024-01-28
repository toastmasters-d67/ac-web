<script>
import Instruction from "@/components/auth/Instruction.vue";
import Login from "@/components/auth/Login.vue";

export default {
  name: "LoginView",
  components: {
    Instruction,
    Login,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      step1HighlightText: this.$t(
        "login.introduction.step1.text-highlight-login",
      ),
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerWidth;
    },
  },
};
</script>

<template>
  <div class="auth-container">
    <Instruction :step1HighlightText="step1HighlightText" v-once />
    <Login v-once />
  </div>
</template>

<style scoped lang="scss">
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
