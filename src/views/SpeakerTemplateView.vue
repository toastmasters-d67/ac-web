<template>
  <article id="speaker" class="speaker-container">
    <Breadcrumb v-once />
    <Briefing v-once />
  </article>
</template>

<style scoped lang="scss">
.speaker-container {
  background: linear-gradient(
    225deg,
    rgba(108, 169, 192, 1) 0%,
    rgba(220, 213, 179, 1) 29%,
    rgba(236, 182, 146, 1) 81%,
    rgba(228, 167, 62, 1) 100%
  );
}
</style>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import Briefing from "@/components/speaker/Briefing.vue";

export default {
  name: "SpeakersView",
  components: {
    Breadcrumb,
    Briefing,
  },
};
</script>
