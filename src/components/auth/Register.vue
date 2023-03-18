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
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required().email(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string().required().min(6),
});

export async function onSubmit(values, target) {
  const url = `${process.env.VUE_APP_API}/user`;
  try {
    axios
      .post(url, values)
      .then(function (response) {
        console.log(response);
        target.$router.push("login");
      })
      .catch(function (error) {
        if (409 === error.response.status) {
          target.errors.email = target.$t("register.error.email");
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
  setup() {
    const v$ = useVuelidate();
    const state = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const initialErrors = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const errors = reactive({ ...initialErrors });
    const show = ref(false);
    return { state, v$, errors, initialErrors, show };
  },
  data() {
    const errorMessages = reactive({
      requiredFirstname: this.$t("register.error.required-firstname"),
      requiredLastname: this.$t("register.error.required-lastname"),
      requiredEmail: this.$t("register.error.required-email"),
      requiredPassword: this.$t("register.error.required-password"),
      emailFormat: this.$t("register.error.email-format"),
      email: this.$t("register.error.email"),
      min: this.$t("register.error.min"),
      sameAsPassword: this.$t("register.error.same-as-password"),
    });
    return {
      errorMessages,
    };
  },
  methods: {
    validate(field) {
      registerFormSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[field] = err.message;
        });
    },
    clear() {
      if (this.errors.email === this.$t("register.error.email")) {
        this.errors.email = "";
      }
      Object.assign(this.errors, this.initialErrors);
    },
    registerUser() {
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
            this.errorMessages.requiredFirstname,
            required
          ),
        },
        lastName: {
          required: helpers.withMessage(
            this.errorMessages.requiredLastname,
            required
          ),
        },
        email: {
          email: helpers.withMessage(this.errorMessages.emailFormat, email),
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
        confirmPassword: {
          sameAsPassword: helpers.withMessage(
            this.errorMessages.sameAsPassword,
            sameAs(this.state.password)
          ),
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
          {{ $t("register.form.first-name") }}
        </label>
        <input
          v-model.trim="v$.state.firstName.$model"
          type="text"
          :placeholder="$t('register.form.first-name')"
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
          {{ $t("register.form.last-name") }}
        </label>
        <input
          v-model.trim="v$.state.lastName.$model"
          type="text"
          :placeholder="$t('register.form.last-name')"
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
        {{ $t("register.form.email") }}
      </label>
      <input
        v-model.trim="v$.state.email.$model"
        type="email"
        :placeholder="$t('register.form.email')"
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
        {{ $t("register.form.password") }}
      </label>
      <input
        v-model.trim="v$.state.password.$model"
        type="password"
        :placeholder="$t('register.form.password')"
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
        {{ $t("register.form.confirm-password") }}
      </label>
      <input
        v-model.trim="v$.state.confirmPassword.$model"
        type="password"
        :placeholder="$t('register.form.confirm-password')"
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
      {{ $t("register.form.have-account") }}
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
