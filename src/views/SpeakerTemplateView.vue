<template>
  <article id="speaker" class="speaker-container">
    <Breadcrumb v-once />
    <Briefing
      :speakerKey="speakerKey"
      :name="name"
      :title="title"
      :content="content"
    />
    <Seminar
      :topic="topic"
      :time="time"
      :location="location"
      :introduction="introduction"
    />
    <Voting v-once />
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
import Seminar from "@/components/speaker/Seminar.vue";
import Voting from "@/components/speaker/Voting.vue";
import speakers from "@/assets/data/speakers.json";

export default {
  name: "SpeakersView",
  components: {
    Breadcrumb,
    Briefing,
    Seminar,
    Voting,
  },
  data() {
    const speakerKey = this.$route.params.key;
    const speaker = speakers.find((x) => x.key === speakerKey);
    const { name, title, content, seminar } = speaker;
    const { topic, time, location, introduction } = seminar;

    return {
      speakerKey,
      name,
      title,
      content,
      topic,
      time,
      location,
      introduction,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
