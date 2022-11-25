<template>
  <div class="home">
    <Speaker v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </div>
</template>

<script>
import Speaker from "@/components/home/Speakers.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Speaker,
    Souvenirs,
    Ticket,
  },
};
</script>
