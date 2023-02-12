<template>
  <article id="order" class="order-container">
    <MyOrder v-once />
  </article>
</template>

<style scoped lang="scss">
.order-container {
  margin: 80px 8.33% 200px 8.33%;
}
@media screen and (max-width: 768px) {
  .order-container {
    margin: 80px 4.27% 200px 4.27%;
  }
}
</style>

<script>
import MyOrder from "@/components/order/MyOrder.vue";

export default {
  name: "OrderInformationView",
  components: {
    MyOrder,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
