<template>
  <article class="home">
    <Slogan v-once />
    <Conference v-once />
    <Podcast v-once />
    <Speakers v-once />
    <Souvenirs v-once />
    <Ticket v-once />
  </article>
</template>

<script>
import Slogan from "@/components/home/Slogan.vue";
import Conference from "@/components/home/Conference.vue";
import Podcast from "@/components/home/Podcast.vue";
import Speakers from "@/components/home/Speakers.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";
import Ticket from "@/components/home/Ticket.vue";

export default {
  name: "HomeView",
  components: {
    Slogan,
    Conference,
    Podcast,
    Speakers,
    Souvenirs,
    Ticket,
  },
};
</script>
