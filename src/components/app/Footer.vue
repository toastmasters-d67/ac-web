<template>
  <footer class="footer-container">
    <div class="footer-row">
      <router-link
        to="/#speakers"
        class="footer-link"
        @click="scrollToElement('speakers')"
      >
        {{ $t("app.navbar.speakers") }}
      </router-link>
      <router-link
        to="/#program"
        class="footer-link"
        @click="scrollToElement('program')"
      >
        {{ $t("app.navbar.program") }}
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
      <span class="footer-link">
        {{ $t("app.footer.contact") }}
      </span>
    </div>
    <div class="footer-row">
      <img
        src="@/assets/icon/app/footer-website.png"
        class="footer-logo"
        alt="website"
      />
      <img
        src="@/assets/icon/app/footer-facebook.png"
        class="footer-logo"
        alt="facebook"
      />
      <img
        src="@/assets/icon/app/footer-instagram.png"
        class="footer-logo"
        alt="instagram"
      />
      <img
        src="@/assets/icon/app/footer-podcast.png"
        class="footer-logo"
        alt="podcast"
      />
      <img
        src="@/assets/icon/app/footer-linkedin.png"
        class="footer-logo"
        alt="linkedin"
      />
      <img
        src="@/assets/icon/app/footer-youtube.png"
        class="footer-logo"
        alt="youtube"
      />
    </div>
    <div class="footer-reserved">
      © 2023 Toastmasters International. All rights reserved.
    </div>
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
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  padding: 50px;
  bottom: 0px;
}
.footer-row {
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
