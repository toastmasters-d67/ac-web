<template>
  <article id="home">
    <Slogan v-once />
    <Podcast v-once />
    <Speakers v-once />
    <Program v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </article>
</template>

<script>
import Slogan from "@/components/home/Slogan.vue";
import Podcast from "@/components/home/Podcast.vue";
import Speakers from "@/components/home/Speakers.vue";
import Program from "@/components/home/Program.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Slogan,
    Podcast,
    Speakers,
    Program,
    Souvenirs,
    Ticket,
  },
};
</script>
