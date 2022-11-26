<template>
  <div class="home">
    <Speakers v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </div>
</template>

<script>
import Speakers from "@/components/home/Speakers.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Speakers,
    Souvenirs,
    Ticket,
  },
};
</script>
