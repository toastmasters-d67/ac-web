<template>
  <nav class="navbar-container">
    <router-link to="/" class="navbar-logo" @click="setWindowToTop()">
      <img
        src="@/assets/icon/app/logo.svg"
        class="navbar-logo-image"
        alt="logo"
      />
      <div class="navbar-logo-text">
        <span class="navbar-logo-text-1">{{ $t("app.navbar.d67") }}</span>
        <span class="navbar-logo-text-2">{{ $t("app.navbar.ac") }}</span>
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
      <img
        src="@/assets/icon/app/myaccount.svg"
        class="navbar-myaccount"
        alt="My Account"
        v-if="false"
      />
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
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('program')"
          >
            <span class="navbar-mobile-link-text1">
              {{ $t("app.navbar.program") }}
            </span>
          </router-link>
          <router-link
            to="/#speakers"
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('speakers')"
          >
            <span class="navbar-mobile-link-text1">
              {{ $t("app.navbar.speakers") }}
            </span>
          </router-link>
          <router-link
            to="/#venue"
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('venue')"
          >
            <span class="navbar-mobile-link-text1">
              {{ $t("app.navbar.venue") }}
            </span>
          </router-link>
          <router-link to="/faq" class="navbar-mobile-link" @click="hideMenu()">
            <span class="navbar-mobile-link-text1">
              {{ $t("app.navbar.faq") }}
            </span>
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
        </div>
        <router-link to="login" class="navbar-login-button login-mobile">
          {{ $t("app.navbar.login") }}
        </router-link>
      </Sidebar>
    </div>
  </nav>
</template>

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
.navbar-myaccount {
  height: 24.75px;
  width: 24.75px;
  border-radius: 0px;
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
    .navbar-mobile-link-text1 {
      color: #675de2;
    }
    .navbar-mobile-arrowdown {
      position: absolute;
      top: 5.5px;
      right: 0;
    }
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
.login-mobile {
  margin: 35% auto 0;
}
</style>

<script>
import { reactive, ref, watch } from "vue";

export default {
  name: "Navbar",
  props: {
    scrollToElement: {
      type: Function,
    },
  },
  setup() {
    const locale = ref(localStorage.getItem("locale") ?? "en");
    const localeOptions = reactive([
      {
        value: "en",
        label: "EN",
      },
      {
        value: "tw",
        label: "中文",
      },
    ]);
    const visibleFull = ref(false);

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
      location.reload();
    });

    return {
      locale,
      localeOptions,
      visibleFull,
    };
  },
  methods: {
    hideMenuAndScrollToElement(id) {
      this.visibleFull = false;
      this.scrollToElement(id);
    },
    hideMenu() {
      this.visibleFull = false;
    },
    setWindowToTop() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>
