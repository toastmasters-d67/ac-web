<script lang="ts">
import { reactive } from "vue";
import Briefing from "@/components/speaker/Briefing.vue";
import Seminar from "@/components/speaker/Seminar.vue";
import axios from "axios";
const CMS_URL = import.meta.env.VITE_CMS_API;
export default {
  name: "SpeakersTemplateView",
  components: {
    Briefing,
    Seminar,
  },
  data() {
    const speakerKey = this.$route.params.key;
    const translations = [];
    let seminars = reactive([]);
    const name = "";
    const title = "";
    const contents = "";
    const facebook = "";
    const instagram = "";
    const youtube = "";
    const image = "";
    const time = [];

    return {
      translations,
      speakerKey,
      name,
      title,
      contents,
      facebook,
      instagram,
      youtube,
      image,
      seminars,
      time,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  methods: {
    async getChineseData() {
      await axios({
        url: `${CMS_URL}/items/seminars/?filter[speaker][_eq]=${this.speakerKey}`,
        method: "get",
      })
        .then((res) => {
          Array.from(
            res.data.data.forEach((source) => {
              this.translations.push(source.translations[0]);
              this.time.push(source.time);
              if (this.$store.state.langu == "tw") {
                const item = {
                  time: source.time,
                  topic: source.topic,
                  location: source.location,
                  introduction: source.introduction,
                };

                this.seminars.push(item);
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getForigienData() {
      let count = 0;
      Array.from(
        this.translations.forEach((translation_id) => {
          axios({
            url: `${CMS_URL}/items/seminars_translations/?filter[id][_eq]=${translation_id}`,
            method: "get",
          }).then((res) => {
            Array.from(
              res.data.data.forEach((source) => {
                const item = {
                  time: this.time[count],
                  topic: source.topic,
                  location: source.location,
                  introduction: source.introduction,
                };
                this.seminars.push(item);
                count = count + 1;
              })
            );
          });
        })
      );
    },

    async getAllData() {
      await this.getChineseData();
      if (this.$store.state.langu == "en") {
        this.getForigienData();
      }
    },
  },

  mounted() {
    axios
      .get(`${CMS_URL}/items/speakers/?filter[id][_eq]=${this.speakerKey}`, {})
      .then((response) => {
        Array.from(
          response.data.data.forEach((source) => {
            this.facebook = source.facebook;
            this.instagram = source.instagram;
            this.youtube = source.youtube;
            this.image = `${CMS_URL}/assets/${source.picture}`;
            if (this.$store.state.langu == "tw") {
              this.name = source.name;
              this.title = source.title;
              this.contents = source.contents;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
    if (this.$store.state.langu == "en") {
      axios
        .get(
          `${CMS_URL}/items/speakers_translations/?filter[id][_eq]=${this.speakerKey}`,
          {}
        )
        .then((response) => {
          Array.from(
            response.data.data.forEach((source) => {
              this.name = source.name;
              this.title = source.title;
              this.contents = source.contents;
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }

    this.getAllData();
  },
};
</script>

<template>
  <article id="speaker" class="speaker-container">
    <!-- <Breadcrumb v-once /> -->
    <Briefing
      :name="name"
      :title="title"
      :contents="contents"
      :facebook="facebook"
      :instagram="instagram"
      :youtube="youtube"
      :image="image"
    />
    <Seminar
      :topic="topic"
      :time="time"
      :location="location"
      :introduction="introduction"
      :seminars="seminars"
    />
    <!-- <Seminar :seminars="seminars" /> -->
  </article>
</template>

<style scoped lang="scss">
.speaker-container {
  background: transparent;
}
</style>
