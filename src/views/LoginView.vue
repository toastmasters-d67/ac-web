<template>
  <div class="login-container">
    <div class="login-instruction">
      <span class="login-instruction-title">
        <span class="login-instruction-title-text">
          <span class="login-instruction-title-highlight"
            >{{ $t("login.introduction.title.text-highlight") }}
          </span>
          {{ $t("login.introduction.title.text") }}
        </span>
      </span>
      <div class="login-instruction-steps">
        <div class="login-instruction-step">
          <span class="login-instruction-step-number">1</span>
          <span class="login-instruction-step-text"
            >{{ $t("login.introduction.step1.text") }}
            <span class="text-highlight">
              {{ $t("login.introduction.step1.text-highlight") }}
            </span>
          </span>
        </div>
        <div class="login-instruction-step">
          <span class="login-instruction-step-number">2</span>
          <span class="login-instruction-step-text"
            >{{ $t("login.introduction.step2.text") }}
            <span class="text-highlight">
              {{ $t("login.introduction.step2.text-highlight") }}
            </span>
          </span>
        </div>
        <div class="login-instruction-step">
          <span class="login-instruction-step-number">3</span>
          <span class="login-instruction-step-text"
            >{{ $t("login.introduction.step3.text") }}
            <span class="text-highlight">
              {{ $t("login.introduction.step3.text-highlight") }}
            </span>
          </span>
        </div>
      </div>
      <img
        alt="manshoppingonline"
        :src="getImage()"
        class="login-man-shopping-online"
      />
    </div>
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
  </div>
</template>

<script>
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
  .login-instruction {
    position: relative;
    width: 44.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    border-color: transparent;
    background-color: #f8f0e9;
    padding-left: 5.7%;
    padding-right: 20px;
    padding-top: 148px;
    .login-instruction-title {
      text-align: left;
      margin-bottom: 94px;
      .login-instruction-title-highlight {
        font-size: 32px;
        font-weight: 500;
        line-height: 39px;
        letter-spacing: 0em;
        color: rgba(233, 168, 55, 1);
      }
      .login-instruction-title-text {
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        color: #004165;
      }
    }
    .login-man-shopping-online {
      width: 297px;
      right: 0;
      bottom: 0;
      position: absolute;
      border-color: transparent;
    }
    .login-instruction-steps {
      width: fit-content;
      display: flex;
      flex-direction: column;
      border-color: transparent;
      margin-bottom: 24px;
      gap: 24px;
      .login-instruction-step {
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        flex-shrink: 0;
        .login-instruction-step-number {
          width: 40px;
          height: 40px;
          font-size: 20px;
          text-align: center;
          border-radius: 500px;
          background-color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 10px;
          margin-right: 22.5px;
          margin-bottom: 0;
        }
        .login-instruction-step-text {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: rgba(33, 67, 102, 1);
        }
        .text-highlight {
          color: rgba(233, 168, 55, 1);
          font-weight: 700;
        }
      }
    }
  }
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
    .login-instruction {
      width: 100%;
      height: auto;
      background: none;
      padding: 0;
      padding-top: 94px;
      .login-instruction-title {
        margin: 24px auto 8px;
        .login-instruction-title-highlight {
          font-size: 20px;
          line-height: 24px;
        }
        .login-instruction-title-text {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .login-man-shopping-online {
        position: relative;
        width: 166px;
        order: -1;
        margin: auto;
      }
      .login-instruction-steps {
        margin: auto;
        margin-bottom: 24px;
        gap: 8px;
        .login-instruction-step {
          .login-instruction-step-number {
            width: 32px;
            height: 32px;
            font-size: 14px;
            line-height: 17px;
            padding: 9px;
            margin-right: 17px;
          }
          .login-instruction-step-text {
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
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
