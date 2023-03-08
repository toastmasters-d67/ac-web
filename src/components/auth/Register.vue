<script>
import { reactive } from "vue";
import * as Yup from "yup";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from "axios";

const registerFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required().email(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
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
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

export function validName(name) {
  const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
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
    const errors = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    return { state, v$, errors };
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
    registerUser() {
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
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        lastName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(this.state.password) },
      },
    };
  },
};
</script>

<template>
  <section id="register" class="register-container">
    <header class="register-title">Register</header>
    <span class="register-title-note">
      Please register before you purchase the ticket.
    </span>
    <div class="register-row">
      <label class="register-label">First name</label>
      <input
        v-model.trim="v$.state.firstName.$model"
        type="text"
        placeholder="First name"
        class="register-input"
        required
      />
      <p class="form-input-hint" v-if="!!errors.firstName">
        {{ errors.firstName }}
      </p>
    </div>

    <div class="register-row">
      <label class="register-label">Last name</label>
      <input
        v-model.trim="v$.state.lastName.$model"
        type="text"
        placeholder="Last name"
        class="register-input"
        required
      />
      <p class="form-input-hint" v-if="!!errors.lastName">
        {{ errors.lastName }}
      </p>
    </div>

    <div class="register-row">
      <label class="register-label">Email</label>
      <input
        v-model.trim="v$.state.email.$model"
        type="email"
        placeholder="Email"
        class="register-input"
        required
      />
      <p class="form-input-hint" v-if="!!errors.email">
        {{ errors.email }}
      </p>
    </div>
    <div class="register-row">
      <label class="register-label">Password</label>
      <input
        v-model.trim="v$.state.password.$model"
        type="password"
        placeholder="Password"
        class="register-input"
        required
      />
      <p class="form-input-hint" v-if="!!errors.password">
        {{ errors.password }}
      </p>
    </div>
    <div class="register-row">
      <label class="register-label">Confirmed password</label>
      <input
        v-model.trim="v$.state.confirmPassword.$model"
        type="password"
        placeholder="Confirmed password"
        class="register-input"
        required
      />
      <p class="form-input-hint" v-if="!!errors.confirmPassword">
        {{ errors.confirmPassword }}
      </p>
    </div>
    <button type="submit" class="register-button" @click="this.registerUser">
      Register
    </button>

    <span class="register-button-note">
      Already have an account?
      <router-link to="/login">Log in</router-link>
    </span>
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
    width: 464px;
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
  .register-box {
    display: flex;
    flex-direction: row;
  }
  .register-row {
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
      width: 464px;
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
    width: 464px;
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
}
@media screen and (max-width: 768px) {
  .register-container {
    position: absolute;
    top: 80px;
    width: 100%;
    height: 525px;
  }
}
</style>
