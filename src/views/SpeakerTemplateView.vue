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
  </article>
</template>

<style scoped lang="scss">
.speaker-container {
  background: transparent;
}
</style>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import Briefing from "@/components/speaker/Briefing.vue";
import Seminar from "@/components/speaker/Seminar.vue";
import speakers from "@/assets/data/speakers.json";

export default {
  name: "SpeakersTemplateView",
  components: {
    Breadcrumb,
    Briefing,
    Seminar,
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
