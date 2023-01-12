<template>
  <nav class="navbar-container">
    <router-link to="/" class="navbar-logo">
      <img
        src="@/assets/icon/app/logo.png"
        class="navbar-logo-image"
        alt="logo"
      />
      <div class="navbar-logo-text">
        <span class="navbar-logo-text-1">Toastmasters Taiwan</span>
        <span class="navbar-logo-text-2">2023 Annual Conference</span>
      </div>
    </router-link>
    <div class="navbar-links">
      <router-link
        to="/#speakers"
        class="navbar-link"
        @click="scrollToElement('speakers')"
      >
        Speakers
      </router-link>
      <router-link
        to="/#program"
        class="navbar-link"
        @click="scrollToElement('program')"
      >
        Program
      </router-link>
      <router-link
        to="/#venue"
        class="navbar-link"
        @click="scrollToElement('venue')"
      >
        Venue
      </router-link>
      <span class="navbar-link">FAQ</span>
      <button class="navbar-button">Get your ticket</button>
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
            to="/#speakers"
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('speakers')"
          >
            Speakers
          </router-link>
          <router-link
            to="/#program"
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('program')"
          >
            Program
          </router-link>
          <router-link
            to="/#venue"
            class="navbar-mobile-link"
            @click="hideMenuAndScrollToElement('venue')"
          >
            Venue
          </router-link>
          <div class="navbar-mobile-link">FAQ</div>
          <button class="navbar-mobile-sidebar-cta">Get your ticket</button>
        </div>
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
.navbar-container {
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 5;
  width: 100%;
  height: 80px;
  background: #819db2;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  border-color: transparent;
  .navbar-logo {
    position: absolute;
    top: 15px;
    left: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .navbar-logo-image {
      width: 60px;
      height: 50px;
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
    top: 16px;
    right: 24px;
    width: 660px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    .navbar-link {
      font-weight: 700;
      margin-right: 40px;
      cursor: pointer;
    }
    .navbar-button {
      width: 210px;
      height: 48px;
      background: linear-gradient(267.67deg, #ddc8bf 5.3%, #a7c4d4 95.87%);
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      border-radius: 38px;
      border: 1px solid #eeeeee;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
      padding: 8px 24px;
      cursor: pointer;
    }
  }
  .navbar-mobile-container {
    display: none;
  }
}

/* Mobile design */
@media screen and (max-width: 768px) {
  .navbar-container {
    height: 63px;
    .navbar-logo {
      top: 11px;
      left: 22px;
      .navbar-logo-image {
        width: 50px;
        height: 41.49px;
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
    display: flex;
    height: 30px;
    margin-bottom: 24px;
    font-size: 20px;
  }
}
.navbar-mobile-sidebar-cta {
  width: 210px;
  height: 48px;
  background: linear-gradient(267.67deg, #ddc8bf 5.3%, #a7c4d4 95.87%);
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  border-radius: 38px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
  padding: 8px 24px;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      visibleFull: false,
    };
  },
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${id}`;
      }
    },
    hideMenuAndScrollToElement(id) {
      this.visibleFull = false;
      this.scrollToElement(id);
    },
  },
};
</script>
