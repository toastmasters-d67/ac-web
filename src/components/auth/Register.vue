<script>
import { reactive, ref } from "vue";
import * as Yup from "yup";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import axios from "axios";

const registerFormSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string().required().min(6),
});

export async function onSubmit(values, target) {
  const url = `${import.meta.env.VITE_API}/user`;
  try {
    axios
      .post(url, values)
      .then(function (response) {
        console.log(response);
        target.$router.push("/login");
      })
      .catch(function (error) {
        if (409 === error.response.status) {
          target.errors.email = target.$t("error.email.occupied");
          target.show = true;
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log("error =", error);
  }
}

export default {
  data() {
    const v$ = useVuelidate();
    const state = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const clearedErrors = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const errors = reactive({ ...clearedErrors });
    const show = ref(false);
    const errorMessages = reactive({
      firstNameEmpty: this.$t("error.firstname"),
      lastNameEmpty: this.$t("error.lastname"),
      emailEmpty: this.$t("error.email.empty"),
      passwordEmpty: this.$t("error.password.empty"),
      emailFormat: this.$t("error.email.format"),
      email: this.$t("error.email.occupied"),
      min: this.$t("error.password.min"),
      passwordMatch: this.$t("error.password.match"),
    });
    return { state, v$, errors, clearedErrors, show, errorMessages };
  },
  methods: {
    clear() {
      if (this.errors.email === this.$t("error.email.occupied")) {
        this.errors.email = "";
      }
      Object.assign(this.errors, this.clearedErrors);
    },
    registerUser(event) {
      event.preventDefault();
      this.v$.$validate();
      if (this.v$.state.$errors.length) {
        Array.from(this.v$.state.$errors).forEach((error) => {
          this.errors[error.$property] = error.$message;
        });
        return;
      }
      registerFormSchema
        .validate(this.state, { abortEarly: false })
        .then(() => {
          this.errors = {};
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
        firstName: {
          required: helpers.withMessage(
            this.errorMessages.firstNameEmpty,
            required,
          ),
        },
        lastName: {
          required: helpers.withMessage(
            this.errorMessages.lastNameEmpty,
            required,
          ),
        },
        email: {
          email: helpers.withMessage(this.errorMessages.emailFormat, email),
          required: helpers.withMessage(
            this.errorMessages.emailEmpty,
            required,
          ),
        },
        password: {
          min: helpers.withMessage(this.errorMessages.min, minLength(6)),
          required: helpers.withMessage(
            this.errorMessages.passwordEmpty,
            required,
          ),
        },
        confirmPassword: {
          passwordMatch: helpers.withMessage(
            this.errorMessages.passwordMatch,
            sameAs(this.state.password),
          ),
          min: helpers.withMessage(this.errorMessages.min, minLength(6)),
          required: helpers.withMessage(
            this.errorMessages.passwordEmpty,
            required,
          ),
        },
      },
    };
  },
};
</script>

<template>
  <section id="register" class="register-container">
    <header class="register-title">
      {{ $t("register.title") }}
    </header>
    <span class="register-title-note">
      {{ $t("register.description") }}
    </span>
    <div class="register-name">
      <div class="register-row row-name">
        <label class="register-label">
          {{ $t("register.firstname") }}
        </label>
        <input
          v-model.trim="v$.state.firstName.$model"
          type="text"
          :placeholder="$t('register.firstname')"
          class="register-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint" v-if="!!errors.firstName">
          {{ errors.firstName }}
        </p>
      </div>
      <div class="register-row row-name">
        <label class="register-label">
          {{ $t("register.lastname") }}
        </label>
        <input
          v-model.trim="v$.state.lastName.$model"
          type="text"
          :placeholder="$t('register.lastname')"
          class="register-input"
          required
          @click="clear"
          @input="clear"
        />
        <p class="form-input-hint" v-if="!!errors.lastName">
          {{ errors.lastName }}
        </p>
      </div>
    </div>

    <div class="register-row">
      <label class="register-label">
        {{ $t("register.email") }}
      </label>
      <input
        v-model.trim="v$.state.email.$model"
        type="email"
        :placeholder="$t('register.email')"
        class="register-input"
        required
        @click="clear"
        @input="clear"
      />
      <p class="form-input-hint" v-if="!!errors.email || show">
        {{ errors.email }}
      </p>
    </div>
    <div class="register-row">
      <label class="register-label">
        {{ $t("register.password") }}
      </label>
      <input
        v-model.trim="v$.state.password.$model"
        type="password"
        :placeholder="$t('register.password')"
        class="register-input"
        required
        @click="clear"
        @input="clear"
      />
      <p class="form-input-hint" v-if="!!errors.password">
        {{ errors.password }}
      </p>
    </div>
    <div class="register-row">
      <label class="register-label">
        {{ $t("register.confirm") }}
      </label>
      <input
        v-model.trim="v$.state.confirmPassword.$model"
        type="password"
        :placeholder="$t('register.confirm')"
        class="register-input"
        required
        @click="clear"
        @input="clear"
      />
      <p class="form-input-hint" v-if="!!errors.confirmPassword">
        {{ errors.confirmPassword }}
      </p>
    </div>
    <button type="submit" class="register-button" @click="this.registerUser">
      {{ $t("register.title") }}
    </button>

    <span class="register-button-note">
      {{ $t("register.have-account") }}
      <router-link to="/login">
        {{ $t("login.title") }}
      </router-link>
    </span>
    <hr class="register-divider" />
  </section>
</template>

<style scoped lang="scss">
.register-container {
  width: 55.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  border-color: transparent;
  margin: auto;

  a {
    color: #214366;
    text-decoration: none;
    border-color: transparent;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  .form-input-hint {
    width: 84%;
    max-width: 464px;
    color: #d72727;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
    margin: 10px;
  }

  .register-title {
    font-size: 40px;
    font-weight: 500;
    line-height: 49px;
    margin-top: 80px;
    margin-bottom: 8px;
  }

  .register-title-note {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 70px;
  }

  .register-name {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .register-row {
    width: 84%;
    max-width: 464px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    .register-label {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      margin-bottom: 10px;
    }

    .register-input {
      width: 100%;
      height: 54px;
      background: #f1f0f0;
      font-size: 24px;
      border-radius: 33px;
      border-color: transparent;
      padding: 5px;
      padding-left: 20px;
    }
  }

  .register-button {
    width: 84%;
    max-width: 464px;
    height: 54px;
    color: white;
    background: #004165;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 70px;
    padding: 10px;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 60px;
    cursor: pointer;
  }

  .register-button-note {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 100px;
  }

  .register-divider {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .register-container {
    width: 100%;

    a {
      font-size: 16px;
      line-height: 20px;
    }

    .form-input-hint {
      color: #d72727;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
      margin: 10px;
    }

    .register-title {
      font-size: 28px;
      line-height: 34px;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .register-title-note {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 36px;
    }

    .register-name {
      width: 84%;
      max-width: 464px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .register-row {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 16px;

      .register-label {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 4px;
      }

      .register-input {
        height: 46px;
        background: white;
        font-size: 16px;
      }
    }

    .row-name {
      width: 48.095%;
    }

    .register-button {
      height: 46px;
      font-size: 18px;
      line-height: 22px;
      margin-top: 16px;
      margin-bottom: 35px;
    }

    .register-button-note {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 32px;
    }

    .register-divider {
      display: block;
      width: 84%;
      max-width: 464px;
      border: 1px solid #b4b4b4;
      margin-top: 32px;
    }
  }
}
</style>
