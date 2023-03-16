<template>
  <article id="home">
    <Marquee v-once />
    <Slogan :scrollToElement="scrollToElement" v-once />
    <Countdown v-once />
    <Ticket v-once />
    <Speakers v-once />
    <Program v-once />
    <Venue v-once />
    <Souvenirs v-once />
  </article>
</template>

<script>
import Marquee from "@/components/home/Marquee.vue";
import Slogan from "@/components/home/Slogan.vue";
import Countdown from "@/components/home/Countdown.vue";
import Ticket from "@/components/home/Ticket.vue";
import Speakers from "@/components/home/Speakers.vue";
import Program from "@/components/home/Program.vue";
import Venue from "@/components/home/Venue.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";

export default {
  name: "HomeView",
  props: {
    scrollToElement: {
      type: Function,
    },
  },
  components: {
    Marquee,
    Slogan,
    Countdown,
    Ticket,
    Speakers,
    Program,
    Venue,
    Souvenirs,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
