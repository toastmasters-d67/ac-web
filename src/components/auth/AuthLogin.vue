<template>
  <section id="login" class="login-container">
    <div class="login-login">
      <header class="login-title">{{ $t("login.title") }}</header>
      <span class="login-login-description">{{ $t("login.description") }}</span>
      <span class="first-login-description" v-html="firstLoginDescription"></span>
      <div class="login-form">
        <label for="email" class="login-label">{{ $t("register.email") }}</label>
        <input
          v-model.trim="state.email"
          type="email"
          :placeholder="$t('register.email')"
          class="login-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint" v-if="v$.email.$error">{{ errorMessages.email[v$.email.$errors[0].$validator] }}</p>
        <label for="password" class="login-label">{{ $t("register.password") }}</label>
        <input
          v-model.trim="state.password"
          type="password"
          :placeholder="$t('register.password')"
          class="login-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint" v-if="v$.password.$error">{{ errorMessages.password[v$.password.$errors[0].$validator] }}</p>
        <p class="form-input-hint">{{ loginError }}</p>
        <a class="login-forget-password" href="mailto:tmicon@toastmasters.org.tw">{{ $t("login.forget-password") }}</a>
        <button class="login-button" @click="loginUser">{{ $t("login.title") }}</button>
      </div>
      <div class="login-register">
        {{ $t("login.no-account") }}
        <router-link class="login-register register-link" to="/register">{{ $t("register.title") }}</router-link>
      </div>
      <hr class="login-divider" />
      <button class="login-google-button" v-if="false">
        <img alt="google" src="@/assets/icon/login/google.svg" class="login-google-button-logo" />
        <span class="login-google-button-text">Google</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import axios from 'axios'

const { t } = useI18n()
const router = useRouter()
const loginError = ref('')

const state = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state)

const errorMessages = {
  email: {
    required: t('error.email.empty'),
    email: t('error.email.format')
  },
  password: {
    required: t('error.password.empty'),
    minLength: t('error.password.min')
  }
}

const firstLoginDescription = t('login.firstlogin-description')

function clear (): void {
  loginError.value = ''
}

async function loginUser (): Promise<void> {
  await v$.value.$validate()
  if (!v$.value.$error) {
    const url = `${import.meta.env.VITE_API}/login`
    try {
      const response = await axios.post(url, state)
      const token = response.data.token
      if (token) {
        localStorage.setItem('token', token)
        await router.push('/me')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem('token')
        loginError.value = t('error.password.incorrect')
      } else {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 55.5%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #214366;
    text-decoration: none;
    border-color: transparent;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  .login-login {
    width: 84%;
    max-width: 464px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;

    .login-title {
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

    .first-login-description {
      background: #f9f2e6;
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 14px;
      margin-bottom: 58px;
      text-align: left;
      font-weight: 400;
      line-height: 20px;
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

      .form-input-hint {
        width: 100%;
        color: #d72727;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        text-align: left;
        margin: 10px;
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

      .login-button {
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
        cursor: pointer;
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
    }

    .register-link {
      color: rgb(0, 65, 101);
      font-size: 20px;
      font-weight: 600;
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
    width: 100%;

    .login-login {
      position: relative;
      width: 84%;

      .login-title {
        font-size: 24px;
        line-height: 29px;
      }

      .login-login-description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 36px;
      }

      .first-login-description {
        background: white;
        border-radius: 8px;
        font-size: 12px;
        line-height: 15px;
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

        .login-button {
          height: 46px;
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 40px;
        }
      }

      .login-register {
        font-size: 14px;
        line-height: 17px;
      }

      .register-link {
        font-size: 16px;
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
