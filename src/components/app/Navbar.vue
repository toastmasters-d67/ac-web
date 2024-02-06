<template>
  <nav class="navbar-container">
    <router-link to="/" class="navbar-logo" @click="scrollToTop()">
      <img
        src="@/assets/icon/app/logo.svg"
        class="navbar-logo-image"
        alt="logo"
      />
      <div class="navbar-logo-text">
        <span class="navbar-logo-text-1">{{ $t("app.navbar.d67") }}</span>
        <span class="navbar-logo-text-2">{{ year }} {{ $t("app.navbar.ac") }}</span>
      </div>
    </router-link>
    <div class="navbar-links">
      <router-link
        to="/#program"
        class="navbar-link"
        @click="scrollToElement('program')"
      >
        {{ $t("app.navbar.program") }}
      </router-link>
      <router-link
        to="/#speakers"
        class="navbar-link"
        @click="scrollToElement('speakers')"
      >
        {{ $t("app.navbar.speakers") }}
      </router-link>
      <router-link
        to="/#venue"
        class="navbar-link"
        @click="scrollToElement('venue')"
      >
        {{ $t("app.navbar.venue") }}
      </router-link>
      <router-link to="/faq" class="navbar-link">
        {{ $t("app.navbar.faq") }}
      </router-link>
      <div class="navbar-link">
        <select v-model="locale" class="navbar-select">
          <option
            v-for="item in localeOptions"
            :key="`locale-${item.lang}`"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </div>
      <router-link v-if="!isLogin" to="login" class="navbar-login-button">
        {{ $t("app.navbar.login") }}
      </router-link>
      <button v-else class="navbar-account-button" ref="accountButton">
        <img src="@/assets/icon/app/account.svg" alt="My Account" />
      </button>
      <div v-if="showAccountMenu" class="navbar-account-menu">
        <router-link
          to="/me"
          class="navbar-account-menu-link"
          @click="scrollToTop()"
        >
          {{ $t("app.navbar.account") }}
        </router-link>
        <div class="navbar-account-menu-link" @click="logout()">
          {{ $t("app.navbar.logout") }}
        </div>
      </div>
    </div>
    <div class="navbar-mobile-container">
      <Button
        @click="visibleFull = true"
        class="p-button-text navbar-mobile-button"
      >
        <img
          alt="logo"
          src="@/assets/icon/app/hamburger.svg"
          class="navbar-mobile-hamburger"
        />
      </Button>
      <Sidebar
        v-model:visible="visibleFull"
        position="full"
        class="p-sidebar-md"
      >
        <div class="navbar-mobile-links">
          <router-link
            to="/#program"
            class="navbar-mobile-link link-text1"
            @click="hideMenuAndScrollToElement('program')"
          >
            {{ $t("app.navbar.program") }}
          </router-link>
          <router-link
            to="/#speakers"
            class="navbar-mobile-link link-text1"
            @click="hideMenuAndScrollToElement('speakers')"
          >
            {{ $t("app.navbar.speakers") }}
          </router-link>
          <router-link
            to="/#venue"
            class="navbar-mobile-link link-text1"
            @click="hideMenuAndScrollToElement('venue')"
          >
            {{ $t("app.navbar.venue") }}
          </router-link>
          <router-link
            to="/faq"
            class="navbar-mobile-link link-text1"
            @click="hideMenu()"
          >
            {{ $t("app.navbar.faq") }}
          </router-link>
          <hr />
          <div class="navbar-mobile-link">
            <select v-model="locale" class="navbar-select">
              <option
                v-for="item in localeOptions"
                :key="`locale-${item.lang}`"
                :value="item.value"
              >
                {{ item.label }}
              </option>
            </select>
          </div>
          <router-link
            v-if="!isLogin"
            to="login"
            class="navbar-mobile-link"
            @click="hideMenu()"
          >
            {{ $t("app.navbar.login") }}
          </router-link>
          <router-link
            v-if="isLogin"
            to="/me"
            class="navbar-mobile-link"
            @click="hideMenuAndToTop()"
          >
            {{ $t("app.navbar.account") }}
          </router-link>
          <div v-if="isLogin" class="navbar-mobile-link" @click="logout()">
            {{ $t("app.navbar.logout") }}
          </div>
        </div>
      </Sidebar>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '@/stores.ts'

const router = useRouter()
const store = useLanguageStore()

const locale = ref(localStorage.getItem('locale') ?? 'tw')
const localeOptions = [
  { value: 'tw', label: '中文' },
  { value: 'en', label: 'EN' }
]
const visibleFull = ref(false)
const isLogin = ref(false)
const showAccountMenu = ref(false)
const year = import.meta.env.VITE_YEAR

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
  store.setLanguage(newLocale)
  location.reload()
})

onMounted(() => {
  const token = localStorage.getItem('token')
  isLogin.value = !!token
  document.addEventListener('click', onClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClick)
})

function hideMenu (): void {
  visibleFull.value = false
}

function hideMenuAndScrollToElement (id: any): void {
  hideMenu()
  scrollToElement(id)
}

function hideMenuAndToTop (): void {
  hideMenu()
  scrollToTop()
}

function onClick (event): void {
  if (event.target.closest('.navbar-account-button')) {
    showAccountMenu.value = !showAccountMenu.value
  } else {
    showAccountMenu.value = false
  }
}

function logout (): void {
  localStorage.removeItem('token')
  void router.push('/').then(() => {
    location.reload()
  })
}

function scrollToTop (): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToElement (id: string): void {
  const element = document.getElementById(id)
  if (element != null) {
    const top = element.offsetTop
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
a {
  color: black;
  text-decoration: none;
  border-color: transparent;
}

button {
  font-family: inherit;
}

hr {
  width: 100%;
  margin-bottom: 24px;
  border: 0;
  border-top: 2px solid black;
}

.navbar-container {
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 5;
  width: 100%;
  height: 80px;
  background: #f8f0e9;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  border-color: transparent;

  .navbar-logo {
    position: absolute;
    top: 15px;
    left: 3.96%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .navbar-logo-image {
      width: 60px;
      margin-right: 20px;
    }

    .navbar-logo-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .navbar-logo-text-1 {
        color: #004165;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
      }

      .navbar-logo-text-2 {
        color: #53595a;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
      }
    }
  }

  .navbar-links {
    position: absolute;
    top: 20px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    column-gap: 32px;
    margin-right: 32px;

    .navbar-link {
      font-weight: 700;
      cursor: pointer;
    }

    .navbar-select {
      color: black !important;
      background: transparent;
      font-family: "Montserrat" !important;
      font-size: 20px !important;
      font-weight: 700 !important;
      line-height: 24px;
      border: transparent;
    }
  }

  .navbar-mobile-container {
    display: none;
  }
}

.navbar-login-button {
  display: flex;
  align-items: center;
  border-radius: 38px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border: 1px solid white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
  background: #ffdb82;
  text-align: center;
  padding: 8px 24px;
  cursor: pointer;
}

.navbar-account-button {
  width: 27px;
  height: 27px;
  border-color: transparent;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
}

.navbar-account-menu {
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-color: transparent;
  border-radius: 8px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  .navbar-account-menu-link {
    font-size: 20px;
    line-height: 24px;
    padding: 10px 20px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-container {
    .navbar-logo {
      .navbar-logo-image {
        width: 50px;
        margin-right: 14px;
      }

      .navbar-logo-text {
        .navbar-logo-text-1 {
          font-size: 16px;
          line-height: 20px;
        }

        .navbar-logo-text-2 {
          font-size: 10px;
          line-height: 14px;
        }
      }
    }

    .navbar-links {
      gap: 18px;
      margin-right: 18px;

      .navbar-link {
        font-size: 16px;
      }

      .navbar-select {
        font-size: 16px !important;
      }
    }
  }

  .navbar-login-button {
    font-size: 16px;
    line-height: 20px;
    padding: 8px 16px;
  }
}

@media screen and (max-width: 768px) {
  .navbar-container {
    height: 63px;

    .navbar-logo {
      top: 11px;
      left: 22px;

      .navbar-logo-image {
        width: 50px;
        margin-right: 7px;
      }

      .navbar-logo-text {
        .navbar-logo-text-1 {
          font-weight: 500;
          font-size: 15px;
          line-height: 14px;
        }

        .navbar-logo-text-2 {
          font-weight: 500;
          font-size: 8px;
          line-height: 14px;
        }
      }
    }

    .navbar-links {
      display: none;
    }

    .navbar-mobile-container {
      width: 100%;
      display: flex;

      .navbar-mobile-button {
        top: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        padding-left: 18px;
        padding-right: 18px;
        border-width: 0;
        background-color: transparent;
        display: flex;

        .navbar-mobile-hamburger {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
}

.navbar-mobile-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  padding-left: 6.4%;

  .navbar-mobile-link {
    position: relative;
    width: 95%;
    display: flex;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    cursor: pointer;
  }

  .link-text1 {
    color: #675de2;
  }

  .navbar-select {
    color: black !important;
    background: transparent;
    font-family: "Montserrat" !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    line-height: 24px;
    border: transparent;
  }
}
</style>
