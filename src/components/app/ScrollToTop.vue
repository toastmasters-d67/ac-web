<template>
  <button
    ref="scrollToTopButton"
    class="scroll-to-top-button"
    v-on:click="scrollToTop()"
  >
    <img alt="Scroll To Top" src="@/assets/icon/app/scroll-to-top.svg" />
  </button>
</template>

<script>
export default {
  name: "ScrollToTop",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handelScroll() {
      var mybutton = this.$refs.scrollToTopButton;
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handelScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handelScroll);
  },
};
</script>

<style scoped>
.scroll-to-top-button {
  position: fixed;
  right: 22px;
  bottom: 30%;
  border: transparent;
  background-color: transparent;
  display: none;
}
</style>
