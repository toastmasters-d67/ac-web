<template>
  <article id="home">
    <Slogan v-once />
    <Countdown v-once />
    <Speakers v-once />
    <Program v-once />
    <Souvenirs v-once />
    <Ticket v-once />
    <Podcast v-once />
  </article>
</template>

<script>
import Slogan from "@/components/home/Slogan.vue";
import Countdown from "@/components/home/Countdown.vue";
import Speakers from "@/components/home/Speakers.vue";
import Program from "@/components/home/Program.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";
import Podcast from "@/components/home/Podcast.vue";

export default {
  name: "HomeView",
  components: {
    Slogan,
    Countdown,
    Speakers,
    Program,
    Souvenirs,
    Ticket,
    Podcast,
  },
};
</script>
