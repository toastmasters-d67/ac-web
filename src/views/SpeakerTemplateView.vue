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
    if (speaker === undefined) {
      this.$router.push("/").then(() => {
        this.$router.go();
      });
    }
    const name = this.$rt(speaker.name);
    const title = this.$rt(speaker.title);
    const contents = reactive([]);
    const facebook = this.$rt(speaker.facebook);
    const instagram = this.$rt(speaker.instagram);
    const youtube = this.$rt(speaker.youtube);
    Array.from(speaker.contents).forEach((source) => {
      contents.push(this.$rt(source));
    });
    const seminars = reactive([]);
    Array.from(speaker.seminars).forEach((source) => {
      let introduction = reactive([]);
      Array.from(source.introduction).forEach((intro) => {
        introduction.push(this.$rt(intro));
      });
      seminars.push({
        topic: this.$rt(source.topic),
        time: this.$rt(source.time),
        location: this.$rt(source.location),
        introduction: introduction,
      });
    });

    return {
      speakerKey,
      name,
      title,
      contents,
      facebook,
      instagram,
      youtube,
      seminars,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
  <article id="speaker" class="speaker-container">
    <Breadcrumb v-once />
    <Briefing
      :speakerKey="speakerKey"
      :name="name"
      :title="title"
      :contents="contents"
      :facebook="facebook"
      :instagram="instagram"
      :youtube="youtube"
    />
    <Seminar :seminars="seminars" />
  </article>
</template>

<style scoped lang="scss">
.speaker-container {
  background: transparent;
}
</style>
