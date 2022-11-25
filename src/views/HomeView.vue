<template>
  <div class="home">
    <Ticket v-once />
  </div>
</template>

<script>
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Ticket,
  },
};
</script>
