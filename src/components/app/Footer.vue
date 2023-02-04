<template>
  <footer class="footer-container">
    <div class="footer-links">
      <router-link
        to="/#program"
        class="footer-link"
        @click="scrollToElement('program')"
      >
        {{ $t("app.navbar.program") }}
      </router-link>
      <router-link
        to="/#speakers"
        class="footer-link"
        @click="scrollToElement('speakers')"
      >
        {{ $t("app.navbar.speakers") }}
      </router-link>
      <router-link
        to="/#venue"
        class="footer-link"
        @click="scrollToElement('venue')"
      >
        {{ $t("app.navbar.venue") }}
      </router-link>
      <router-link to="/faq" class="footer-link">
        {{ $t("app.navbar.faq") }}
      </router-link>
      <a href="mailto:tmicon@toastmasters.org.tw" class="footer-link">
        {{ $t("app.footer.contact") }}
      </a>
    </div>
    <div class="footer-logos">
      <a href="https://www.toastmasters.org.tw/" target="_blank">
        <img
          src="@/assets/icon/app/footer-website.png"
          class="footer-logo"
          alt="website"
        />
      </a>
      <a href="https://www.facebook.com/D67TM" target="_blank">
        <img
          src="@/assets/icon/app/footer-facebook.png"
          class="footer-logo"
          alt="facebook"
        />
      </a>
      <a href="https://www.instagram.com/toastmasters__d67/" target="_blank">
        <img
          src="@/assets/icon/app/footer-instagram.png"
          class="footer-logo"
          alt="instagram"
        />
      </a>
      <a
        href="https://open.firstory.me/user/toastmasters/platforms"
        target="_blank"
      >
        <img
          src="@/assets/icon/app/footer-podcast.png"
          class="footer-logo"
          alt="podcast"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/toastmasters-international-d67"
        target="_blank"
      >
        <img
          src="@/assets/icon/app/footer-linkedin.png"
          class="footer-logo"
          alt="linkedin"
        />
      </a>
      <a href="https://www.youtube.com/user/tmctw" target="_blank">
        <img
          src="@/assets/icon/app/footer-youtube.png"
          class="footer-logo"
          alt="youtube"
      /></a>
    </div>
    <div class="footer-reserved">© {{ $t("app.footer.reserved") }}</div>
  </footer>
</template>

<style scoped>
a {
  color: #53595a;
  text-decoration: none;
}
.footer-container {
  width: 100%;
  color: #53595a;
  background: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-color: transparent;
  border-radius: 0;
  font-style: normal;
  text-align: center;
  padding: 50px;
  bottom: 0px;
}
.footer-links {
  display: flex;
  flex-flow: row wrap;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 40px;
}
.footer-link {
  font-size: 20px;
  line-height: 18px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
}
.footer-logos {
  display: flex;
  flex-flow: row wrap;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 40px;
}
.footer-logo {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.footer-reserved {
  font-size: 14px;
  line-height: 18px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    padding: 20px 0px;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    flex-flow: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .footer-link {
    font-size: 16px;
    line-height: 15px;
    margin-bottom: 15px;
  }
  .footer-logos {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .footer-logo {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .footer-reserved {
    font-size: 11px;
  }
}
</style>

<script>
export default {
  name: "Footer",
  props: {
    scrollToElement: {
      type: Function,
    },
  },
};
</script>
