<template>
  <div class="home">
    <Slogan v-once />
    <Conference v-once />
    <Speakers v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </div>
</template>

<script>
import Slogan from "@/components/home/Slogan.vue";
import Conference from "@/components/home/Conference.vue";
import Speakers from "@/components/home/Speakers.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Slogan,
    Conference,
    Speakers,
    Souvenirs,
    Ticket,
  },
};
</script>
