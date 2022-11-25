<template>
  <div class="home">
    <Souvenirs v-once />
    <Ticket v-once />
  </div>
</template>

<script>
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Souvenirs,
    Ticket,
  },
};
</script>
