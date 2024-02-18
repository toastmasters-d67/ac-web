<template>
  <Navbar
    :scrollToElement="scrollToElement"
    :scrollToTop="scrollToTop"
    v-once
  />
  <router-view v-once />
  <Footer :scrollToElement="scrollToElement" v-once />
  <ScrollToTopButton :scrollToTop="scrollToTop" v-once />
  <CtaButtons :scrollToElement="scrollToElement" />
</template>

<script setup lang="ts">
import Navbar from '@/components/app/AppNavbar.vue'
import Footer from '@/components/app/AppFooter.vue'
import ScrollToTopButton from '@/components/app/AppScrollToTopButton.vue'
import CtaButtons from '@/components/app/AppCtaButtons.vue'

const scrollToElement = (id: string): void => {
  const element = document.getElementById(id)
  if (element != null) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = `/#${id}`
  }
}

const scrollToTop = (behavior = 'smooth'): void => {
  window.scrollTo({ top: 0, behavior })
}
</script>

<style>
#app {
  font-family: Montserrat, "Noto Sans TC", Avenir, Helvetica, Arial, sans-serif;
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

@font-face {
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Noto Sans TC"),
    url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf")
      format("otf");
}

body {
  margin: 0;
  background: linear-gradient(
    195.99deg,
    rgba(111, 164, 190, 0.35) -36.09%,
    rgba(115, 182, 207, 0.35) -5.56%,
    rgba(239, 232, 193, 0.35) 49.53%,
    rgba(236, 182, 146, 0.35) 82%,
    white
  );
}
</style>
