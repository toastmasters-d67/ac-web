<script>
import { reactive, ref } from "vue";
import * as Yup from "yup";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export async function onSubmit(values, target) {
  const url = `${import.meta.env.VITE_API}/login`;
  try {
    axios
      .post(url, values)
      .then(function (response) {
        console.log("response =", response);
        let token = "";
        if (response && response.data && "token" in response.data) {
          token = response.data.token;
        }
        if (token.length) {
          localStorage.setItem("token", token);
          target.$router.push("/me").then(() => {
            target.$router.go();
          });
        }
      })
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          target.loginError = target.$t("error.password.incorrect");
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log("error =", error);
    localStorage.removeItem("token");
  }
}

export default {
  setup() {
    const v$ = useVuelidate();
    const state = reactive({
      email: "",
      password: "",
    });
    const initialErrors = reactive({
      email: "",
      password: "",
    });
    const errors = reactive({ ...initialErrors });
    const loginError = ref("");
    return { state, v$, errors, loginError, initialErrors };
  },
  data() {
    const errorMessages = reactive({
      requiredEmail: this.$t("error.email.empty"),
      requiredPassword: this.$t("error.password.empty"),
      email: this.$t("error.email.format"),
      min: this.$t("error.password.min"),
    });
    const firstLoginDescription = this.$t("login.firstlogin-description");
    return {
      errorMessages,
      firstLoginDescription,
    };
  },
  methods: {
    validate(field) {
      loginFormSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[field] = err.message;
        });
    },
    clear() {
      this.loginError = "";
      Object.assign(this.errors, this.initialErrors);
    },
    loginUser() {
      this.v$.$validate();
      if (this.v$.state.$errors.length) {
        Array.from(this.v$.state.$errors).forEach((error) => {
          this.errors[error.$property] = error.$message;
        });
        return;
      }
      loginFormSchema
        .validate(this.state, { abortEarly: false })
        .then(() => {
          this.errors = { email: "", password: "" };
          onSubmit(this.state, this);
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors[error.path] = error.message;
          });
        });
    },
  },
  validations() {
    return {
      state: {
        email: {
          email: helpers.withMessage(this.errorMessages.email, email),
          required: helpers.withMessage(
            this.errorMessages.requiredEmail,
            required
          ),
        },
        password: {
          min: helpers.withMessage(this.errorMessages.min, minLength(6)),
          required: helpers.withMessage(
            this.errorMessages.requiredPassword,
            required
          ),
        },
      },
    };
  },
};
</script>

<template>
  <section id="login" class="login-container">
    <div class="login-login">
      <header class="login-title">{{ $t("login.title") }}</header>
      <span class="login-login-description">
        {{ $t("login.description") }}
      </span>
      <span class="first-login-description" v-html="this.firstLoginDescription">
      </span>
      <div class="login-form">
        <label for="email" class="login-label">
          {{ $t("register.email") }}
        </label>
        <input
          v-model.trim="v$.state.email.$model"
          type="email"
          :placeholder="$t('register.email')"
          class="login-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint" v-if="!!errors.email">
          {{ errors.email }}
        </p>
        <label for="password" class="login-label">
          {{ $t("register.password") }}
        </label>
        <input
          v-model.trim="v$.state.password.$model"
          type="password"
          :placeholder="$t('register.password')"
          class="login-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint">{{ loginError }}</p>
        <p class="form-input-hint" v-if="!!errors.password">
          {{ errors.password }}
        </p>
        <a
          class="login-forget-password"
          href="mailto:tmicon@toastmasters.org.tw"
        >
          {{ $t("login.forget-password") }}
        </a>
        <button class="login-button" @click="this.loginUser">
          {{ $t("login.title") }}
        </button>
      </div>
      <div class="login-register">
        {{ $t("login.no-account") }}
        <router-link class="login-register register-link" to="/register">
          {{ $t("register.title") }}
        </router-link>
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
  </section>
</template>

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
