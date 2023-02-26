<template>
  <article id="login" class="login-container">
    <Instruction v-once />
    <div class="login-google">
      <span class="login-google-title">{{ $t("login.google.title") }}</span>
      <span class="login-google-description">
        {{ $t("login.google.description") }}
      </span>
      <button class="login-google-button">
        <img
          alt="google"
          src="@/assets/icon/login/google.svg"
          class="login-google-button-logo"
        />
        <span class="login-google-button-text">Google</span>
      </button>
    </div>
  </article>
</template>

<script>
import Instruction from "@/components/login/Instruction.vue";

export default {
  name: "Login",
  data() {
    return {
      windowHeight: window.innerHeight,
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
    getImage() {
      if (this.windowHeight > 768) {
        return require(`@/assets/image/login/man-shopping-online.png`);
      } else {
        return require(`@/assets/image/login/man-shopping-online-mobile.png`);
      }
    },
  },
  components: { Instruction },
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 796px;
  display: flex;
  flex-shrink: 0;
  border-color: transparent;
  background-color: white;
  .login-google {
    width: 55.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;
    margin: auto;
    .login-google-title {
      color: rgba(0, 0, 0, 1);
      font-size: 40px;
      align-self: auto;
      font-style: Medium;
      text-align: center;
      font-weight: 500;
      margin-bottom: 8px;
      text-decoration: none;
    }
    .login-google-description {
      width: 90%;
      color: rgba(33, 67, 102, 1);
      font-size: 20px;
      align-self: auto;
      font-style: Medium;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 40px;
      text-decoration: none;
    }
    .login-google-button {
      max-width: 488px;
      width: 61%;
      height: 62px;
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      border-color: transparent;
      background: white;
      gap: 19px;
      margin-right: 19px;
      cursor: pointer;
      .login-google-button-logo {
        width: 22px;
        height: 22px;
      }
      .login-google-button-text {
        color: rgba(117, 117, 117, 1);
        font-size: 18px;
        align-self: auto;
        font-style: SemiBold;
        text-align: left;
        font-weight: 600;
        line-height: normal;
        font-stretch: normal;
        text-decoration: none;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .login-container {
    height: 660px;
    flex-direction: column;
    background-color: #f8f0e9;
    .login-google {
      position: absolute;
      top: 80px;
      width: 100%;
      height: 525px;
      .login-google-title {
        font-size: 24px;
        line-height: 29px;
      }
      .login-google-description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 0;
      }
      .login-google-button {
        position: absolute;
        width: 315px;
        height: 47px;
        bottom: 0;
        gap: 19px;
        margin-right: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
