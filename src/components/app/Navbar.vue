<template>
  <nav class="navbar-container">
    <router-link to="/" class="navbar-logo">
      <img
        src="@/assets/icon/app/logo.png"
        class="navbar-logo-image"
        alt="logo"
      />
      <span class="navbar-logo-text">2023 年度大會</span>
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
  </nav>
</template>

<style scoped lang="scss">
.navbar-container {
  width: 100%;
  height: 80px;
  background: #e5e5e5;
  position: relative;
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
  text-align: center;
  border-color: transparent;
  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }
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
    }
    .navbar-logo-text {
      color: rgba(33, 67, 102, 0.76);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0.03em;
      line-height: 39px;
      margin-left: 20px;
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
      background: rgba(255, 255, 255, 0.5);
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
}
</style>

<script>
export default {
  name: "Navbar",
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${id}`;
      }
    },
  },
};
</script>
