<template>
  <div class="home">
    <Conference v-once />
    <Speakers v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </div>
</template>

<script>
import Conference from "@/components/home/Conference.vue";
import Speakers from "@/components/home/Speakers.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Conference,
    Speakers,
    Souvenirs,
    Ticket,
  },
};
</script>
