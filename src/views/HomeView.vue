<template>
  <article id="home">
    <Marquee :sentences="sentences" v-once />
    <Slogan v-once />
    <Countdown v-once />
    <Ticket v-once />
    <Speakers v-once />
    <Program v-once />
    <Venue v-once />
    <Souvenirs v-once />
  </article>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import Marquee from "@/components/app/Marquee.vue";
import Slogan from "@/components/home/Slogan.vue";
import Countdown from "@/components/home/Countdown.vue";
import Ticket from "@/components/home/Ticket.vue";
import Speakers from "@/components/home/Speakers.vue";
import Program from "@/components/home/Program.vue";
import Venue from "@/components/home/Venue.vue";
import Souvenirs from "@/components/home/Souvenirs.vue";

const { t } = useI18n();
const sentences = ref([
  `《${t("home.marquee.a")}.》 `,
  `《${t("home.marquee.b")}.》 `,
]);

onBeforeMount(() => {
  window.scrollTo({ top: 0 });
});
</script>
