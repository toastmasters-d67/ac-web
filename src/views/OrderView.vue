<template>
  <article id="order" class="order-container">
    <MyOrder v-once />
    <AttendeeInformation />
  </article>
</template>

<style scoped lang="scss">
.order-container {
  display: flex;
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
import AttendeeInformation from "@/components/order/Attendee.vue";

export default {
  name: "OrderInformationView",
  components: {
    MyOrder,
    AttendeeInformation,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
