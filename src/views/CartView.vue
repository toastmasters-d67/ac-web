<script>
import Picker from "@/components/cart/Picker.vue";

export default {
  name: "CartView",
  components: {
    Picker,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
  <article id="cart">
    <Picker v-once />
  </article>
</template>
