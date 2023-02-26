<template>
  <article id="register" class="register-container">
    <Instruction v-once />
    <div class="register-register">
      <span class="register-register-title">
        {{ $t("login.register.title") }}
      </span>
      <span class="register-register-description">
        {{ $t("login.register.description") }}
      </span>
      <div class="register-form">
        <label for="firstName" class="register-label">
          {{ $t("login.form.first-name") }}
        </label>
        <input v-model="firstName" id="firstName" class="register-input" />
        <label for="lastName" class="register-label">
          {{ $t("login.form.last-name") }}
        </label>
        <input v-model="lastName" id="lastName" class="register-input" />
        <label for="email" class="register-label">
          {{ $t("login.form.email") }}
        </label>
        <input v-model="email" id="email" class="register-input" />
        <label for="password" class="register-label">
          {{ $t("login.form.password") }}
        </label>
        <input v-model="password" id="password" class="register-input" />
        <label for="confirmPassword" class="register-label">
          {{ $t("login.form.confirm-password") }}
        </label>
        <input
          v-model="confirmPassword"
          id="confirmPassword"
          class="register-input"
        />
        <button class="register-register-button">
          {{ $t("login.form.register") }}
        </button>
      </div>
      <div class="register-login">
        {{ $t("login.form.already-account") }}
        <router-link to="/login" class="register-login-bold">
          {{ $t("login.form.login") }}
        </router-link>
      </div>
      <hr class="register-divider" />
    </div>
  </article>
</template>

<script>
import Instruction from "@/components/login/Instruction.vue";

export default {
  name: "Register",
  components: { Instruction },
};
</script>

<style scoped lang="scss">
.register-container {
  width: 100%;
  min-height: 796px;
  display: flex;
  border-color: transparent;
  background-color: white;
  .register-register {
    width: 32.22%;
    max-width: 464px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;
    padding-top: 80px;
    padding-bottom: 80px;
    margin: auto;
    .register-register-title {
      color: black;
      font-size: 40px;
      align-self: auto;
      font-style: Medium;
      text-align: center;
      font-weight: 500;
      margin-bottom: 8px;
      text-decoration: none;
    }
    .register-register-description {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      font-weight: 500;
      color: rgba(33, 67, 102, 1);
      margin-bottom: 40px;
    }
    .register-form {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .register-label {
        color: black;
        font-size: 24px;
        font-style: Medium;
        text-align: center;
        font-weight: 500;
        margin-bottom: 8px;
      }
      .register-input {
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
      .register-register-button {
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
        margin-top: 24px;
        margin-bottom: 40px;
        cursor: pointer;
      }
    }
    .register-login {
      display: flex;
      flex-wrap: wrap;
      border-color: transparent;
      color: black;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      gap: 2px;
      .register-login-bold {
        color: rgba(33, 67, 102, 1);
        font-size: 20px;
        font-style: SemiBold;
        font-weight: 600;
        text-decoration: none;
      }
    }
    .register-divider {
      display: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .register-container {
    flex-direction: column-reverse;
    background-color: #f8f0e9;
    padding-top: 16px;
    .register-register {
      position: relative;
      width: 84%;
      .register-register-title {
        font-size: 24px;
        line-height: 29px;
      }
      .register-register-description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 36px;
      }
      .register-form {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        .register-label {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 4px;
        }
        .register-input {
          height: 46px;
          font-size: 16px;
          background: white;
          padding-left: 16px;
          margin-bottom: 16px;
        }
        .register-register-button {
          height: 46px;
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 40px;
        }
      }
      .register-login {
        font-size: 14px;
        line-height: 17px;
        .register-login-bold {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .register-divider {
        display: block;
        width: 100%;
        border: 1px solid #b4b4b4;
        margin-top: 32px;
      }
    }
  }
}
</style>
