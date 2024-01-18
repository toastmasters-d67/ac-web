<template>
  <button
    ref="scrollToTopButton"
    class="scroll-to-top-button"
    @click="scrollToTop('smooth')"
  >
    <img
      alt="Scroll To Top"
      class="scroll-to-top-img"
      src="@/assets/icon/app/scroll-to-top.svg"
    />
  </button>
</template>

<script>
export default {
  name: "ScrollToTopButton",
  props: {
    scrollToTop: {
      type: Function,
    },
  },
  methods: {
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

<style scoped lang="scss">
.scroll-to-top-button {
  position: fixed;
  right: 1.53%;
  bottom: 50%;
  border: transparent;
  background-color: transparent;
  display: none;

  .scroll-to-top-img {
    width: 47px;
    height: 47px;
  }
}
</style>
