<template>
  <article id="speaker" class="speaker-container">
    <Breadcrumb v-once />
    <Briefing
      :speakerKey="speakerKey"
      :name="name"
      :title="title"
      :intro="intro"
    />
    <Seminar
      :seminarTopic="seminarTopic"
      :seminarTime="seminarTime"
      :seminarLocation="seminarLocation"
      :seminarIntroduction="seminarIntroduction"
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
import { ref } from "vue";
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import Briefing from "@/components/speaker/Briefing.vue";
import Seminar from "@/components/speaker/Seminar.vue";
import Voting from "@/components/speaker/Voting.vue";

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
    let name = ref("");
    let title = ref("");
    let intro = ref("");
    let seminarTopic = ref("");
    let seminarTime = ref("");
    let seminarLocation = ref("");
    let seminarIntroduction = ref("");

    import(`@/assets/data/speakers/${speakerKey}.json`).then((module) => {
      name.value = module.name;
      title.value = module.title;
      intro.value = module.intro;
      seminarTopic.value = module.seminar.topic;
      seminarTime.value = module.seminar.time;
      seminarLocation.value = module.seminar.location;
      seminarIntroduction.value = module.seminar.introduction;
    });

    return {
      speakerKey,
      name,
      title,
      intro,
      seminarTopic,
      seminarTime,
      seminarLocation,
      seminarIntroduction,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
