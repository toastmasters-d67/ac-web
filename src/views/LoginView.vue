<template>
  <article id="login" class="login-container">
    <Instruction v-once />
    <div class="login-login">
      <span class="login-login-title">{{ $t("login.login.title") }}</span>
      <span class="login-login-description">
        {{ $t("login.login.description") }}
      </span>
      <div class="login-form">
        <label for="email" class="login-label">
          {{ $t("login.form.email") }}
        </label>
        <input v-model="email" id="email" class="login-input" />
        <label for="password" class="login-label">
          {{ $t("login.form.password") }}
        </label>
        <input v-model="password" id="password" class="login-input" />
        <span class="login-forget-password">
          {{ $t("login.form.forget-password") }}
        </span>
        <button class="login-login-button">
          {{ $t("login.form.login-button") }}
        </button>
      </div>
      <div class="login-register">
        {{ $t("login.form.no-account") }}
        <span class="login-register-bold">
          {{ $t("login.form.register") }}
        </span>
      </div>
      <hr class="login-divider" />
      <button class="login-google-button" v-if="false">
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
  min-height: 796px;
  display: flex;
  border-color: transparent;
  background-color: white;
  .login-login {
    width: 32.22%;
    max-width: 464px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;
    margin: auto;
    .login-login-title {
      color: black;
      font-size: 40px;
      align-self: auto;
      font-style: Medium;
      text-align: center;
      font-weight: 500;
      margin-bottom: 8px;
      text-decoration: none;
    }
    .login-login-description {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      font-weight: 500;
      color: rgba(33, 67, 102, 1);
      margin-bottom: 40px;
    }
    .login-form {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .login-label {
        color: black;
        font-size: 24px;
        font-style: Medium;
        text-align: center;
        font-weight: 500;
        margin-bottom: 8px;
      }
      .login-input {
        width: 100%;
        height: 54px;
        position: relative;
        display: flex;
        overflow: hidden;
        align-items: flex-start;
        font-size: 24px;
        border-color: transparent;
        border-radius: 33px;
        background-color: rgba(241, 240, 240, 1);
        padding-left: 20px;
        margin-bottom: 16px;
      }
      .login-forget-password {
        width: 100%;
        color: black;
        font-size: 18px;
        text-align: right;
        font-weight: 500;
        text-decoration: none;
        margin-bottom: 40px;
      }
      .login-login-button {
        position: relative;
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 500;
        color: white;
        border-color: transparent;
        border-radius: 70px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 65, 101, 1);
        margin-bottom: 40px;
      }
    }
    .login-register {
      display: flex;
      flex-wrap: wrap;
      border-color: transparent;
      color: black;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      gap: 2px;
      .login-register-bold {
        color: rgba(33, 67, 102, 1);
        font-size: 20px;
        font-style: SemiBold;
        font-weight: 600;
      }
    }
    .login-divider {
      display: none;
    }
    .login-google-button {
      width: 100%;
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
      margin-top: 40px;
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
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .login-container {
    flex-direction: column-reverse;
    background-color: #f8f0e9;
    padding-top: 16px;
    .login-login {
      position: relative;
      width: 84%;
      .login-login-title {
        font-size: 24px;
        line-height: 29px;
      }
      .login-login-description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 36px;
      }
      .login-form {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        .login-label {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 4px;
        }
        .login-input {
          height: 46px;
          font-size: 16px;
          background: white;
          padding-left: 16px;
          margin-bottom: 16px;
        }
        .login-forget-password {
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 32px;
        }
        .login-login-button {
          height: 46px;
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 40px;
        }
      }
      .login-register {
        font-size: 14px;
        line-height: 17px;
        .login-register-bold {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .login-divider {
        display: block;
        width: 100%;
        border: 1px solid #b4b4b4;
        margin-top: 32px;
      }
      .login-google-button {
        height: 47px;
        .login-google-button-text {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
