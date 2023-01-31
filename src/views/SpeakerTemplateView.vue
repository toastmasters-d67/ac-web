<template>
  <article id="speaker" class="speaker-container">
    <Breadcrumb v-once />
    <Briefing
      :speakerKey="speakerKey"
      :name="name"
      :title="title"
      :contents="contents"
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
import { reactive } from "vue";
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import Briefing from "@/components/speaker/Briefing.vue";
import Seminar from "@/components/speaker/Seminar.vue";

export default {
  name: "SpeakersTemplateView",
  components: {
    Breadcrumb,
    Briefing,
    Seminar,
  },
  data() {
    const speakerKey = this.$route.params.key;
    const speaker = this.$tm("speakers").find(
      (x) => this.$rt(x.key) === speakerKey
    );
    const name = this.$rt(speaker.name);
    const title = this.$rt(speaker.title);
    const contents = reactive([]);
    Array.from(speaker.contents).forEach((source) => {
      contents.push(this.$rt(source));
    });
    const seminar = speaker.seminar;
    const topic = this.$rt(seminar.topic);
    const time = this.$rt(seminar.time);
    const location = this.$rt(seminar.location);
    const introduction = this.$rt(seminar.introduction);

    return {
      speakerKey,
      name,
      title,
      contents,
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
