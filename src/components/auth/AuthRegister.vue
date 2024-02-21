<template>
  <section id="register" class="register-container">
    <header class="register-title">{{ t("register.title") }}</header>
    <span class="register-title-note">{{ t("register.description") }}</span>
    <form @submit.prevent="handleSubmit(onSubmit)">
      <div class="register-name">
        <div class="register-row row-name">
          <label for="firstName" class="register-label">{{ t("register.firstname") }}</label>
          <input v-model="firstName" id="firstName" type="text" :placeholder="t('register.firstname')" class="register-input" @input="clearForm" />
          <ErrorMessage :name="'firstName'" class="form-input-hint"/>
        </div>
        <div class="register-row row-name">
          <label for="lastName" class="register-label">{{ t("register.lastname") }}</label>
          <input v-model="lastName" id="lastName" type="text" :placeholder="t('register.lastname')" class="register-input" @input="clearForm" />
          <ErrorMessage :name="'lastName'" class="form-input-hint"/>
        </div>
      </div>
      <div class="register-row">
        <label for="email" class="register-label">{{ t("register.email") }}</label>
        <input v-model="email" id="email" type="email" :placeholder="t('register.email')" class="register-input" @input="clearForm" />
        <ErrorMessage :name="'email'" class="form-input-hint"/>
      </div>
      <div class="register-row">
        <label for="password" class="register-label">{{ t("register.password") }}</label>
        <input v-model="password" id="password" type="password" :placeholder="t('register.password')" class="register-input" @input="clearForm" />
        <ErrorMessage :name="'password'" class="form-input-hint"/>
      </div>
      <div class="register-row">
        <label for="confirmPassword" class="register-label">{{ t("register.confirm") }}</label>
        <input v-model="confirmPassword" id="confirmPassword" type="password" :placeholder="t('register.confirm')" class="register-input" @input="clearForm" />
        <ErrorMessage :name="'confirmPassword'" class="form-input-hint"/>
      </div>
      <button type="submit" class="register-button">{{ t("register.title") }}</button>
    </form>
    <span class="register-button-note">{{ t("register.have-account") }} <router-link to="/login">{{ t("login.title") }}</router-link></span>
  </section>
</template>

<script setup lang="ts">
import { useField, useForm, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import axios from 'axios'

const { t } = useI18n()
const router = useRouter()

const schema = yup.object({
  firstName: yup.string().required(t('register.validation.firstname_required')),
  lastName: yup.string().required(t('register.validation.lastname_required')),
  email: yup.string().email(t('register.validation.email_invalid')).required(t('register.validation.email_required')),
  password: yup.string().min(6, t('register.validation.password_length')).required(t('register.validation.password_required')),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], t('register.validation.password_match')).required(t('register.validation.confirm_required'))
})

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema
})

const { value: firstName } = useField('firstName')
const { value: lastName } = useField('lastName')
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: confirmPassword } = useField('confirmPassword')

const onSubmit = async (values: any): Promise<void> => {
  try {
    await axios.post(`${import.meta.env.VITE_API}/user`, values)
    await router.push('/login')
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 409) {
      errors.value.email = t('error.email.occupied')
    } else {
      console.error(error)
    }
  }
}

const clearForm = (): void => {
  resetForm()
}
</script>
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

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
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
