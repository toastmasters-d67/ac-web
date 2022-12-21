<template>
  <article id="home">
    <Slogan v-once />
    <Countdown v-once />
    <Ticket v-once />
    <Speakers v-once />
    <Program v-once />
    <Venue v-once />
    <Souvenirs v-once />
    <Podcast v-once />
  </article>
</template>

<script>
import Slogan from "@/components/home/Slogan.vue";
import Countdown from "@/components/home/Countdown.vue";
import Ticket from "@/components/home/Ticket.vue";
import Speakers from "@/components/home/Speakers.vue";
import Program from "@/components/home/Program.vue";
import Venue from "@/components/home/Venue.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Podcast from "@/components/home/Podcast.vue";

export default {
  name: "HomeView",
  components: {
    Slogan,
    Countdown,
    Ticket,
    Speakers,
    Program,
    Venue,
    Souvenirs,
    Podcast,
  },
};
</script>
