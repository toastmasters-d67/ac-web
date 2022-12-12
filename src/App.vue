<template>
  <Navbar v-once />
  <router-view v-once />
  <Footer v-once />
  <ScrollToTop v-once />
</template>

<style lang="scss">
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"),
    url("./assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");
}
</style>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Footer from "@/components/app/Footer.vue";
import ScrollToTop from "@/components/app/ScrollToTop.vue";
export default {
  components: {
    Navbar,
    Footer,
    ScrollToTop,
  },
};
</script>
