<script>
import { reactive } from "vue";
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import Briefing from "@/components/speaker/Briefing.vue";
import Seminar from "@/components/speaker/Seminar.vue";
import axios from 'axios';
const CMS_URL = import.meta.env.VITE_CMS_API;
export default {
  name: "SpeakersTemplateView",
  components: {
    Breadcrumb,
    Briefing,
    Seminar,
  },
  data() {
    
    // origin
    const speakerKey = this.$route.params.key;
    // const speaker = this.$tm("speakers").find(
    //   (x) => this.$rt(x.key) === speakerKey
    // );

    // if (speaker === undefined) {
    //   this.$router.push("/").then(() => {
    //     this.$router.go();
    //   });
    // }
    // const name = this.$rt(speaker.name);
    // const title = this.$rt(speaker.title);
    // const contents = reactive([]);
    // const facebook = this.$rt(speaker.facebook);
    // const instagram = this.$rt(speaker.instagram);
    // const youtube = this.$rt(speaker.youtube);
    // Array.from(speaker.contents).forEach((source) => {
    //   contents.push(this.$rt(source));
    // });
    // const seminars = reactive([]);
    // Array.from(speaker.seminars).forEach((source) => {
    //   let introduction = reactive([]);
    //   Array.from(source.introduction).forEach((intro) => {
    //     introduction.push(this.$rt(intro));
    //   });
    //   seminars.push({
    //     topic: this.$rt(source.topic),
    //     time: this.$rt(source.time),
    //     location: this.$rt(source.location),
    //     introduction: introduction,
    //   });

      // directus get id
      let seminars = reactive([]);
      const name = '';
      const title = '';
      const contents = '';
      const facebook = '';
      const instagram = '';
      const youtube = '';
      const image = '';

      // seminar
      const time=[];
      const introduction=[];
      const topic =[];
      const location=[];



    // });

    return {
      // speakerKey,
      name,
      title,
      contents,
      facebook,
      instagram,
      youtube,
      image,
      seminars,

      time,
      introduction,
      topic,
      location,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
   
  },
  // methods(){
  //   getImage(){

  //   }
  // },
  mounted(){

    // speaker
    const id = localStorage.getItem("speaker_id")
    // 共同 
    axios.get(`${CMS_URL}/items/speakers/?filter[id][_eq]=${id}`, {
      })
      .then(response => {
        Array.from(response.data.data.forEach((source) => {
          this.facebook = source.facebook;
            this.instagram = source.instagram;
            this.youtube = source.youtube
            this.image = `${CMS_URL}/assets/${source.picture}`
            console.log("圖片：" , this.image)
          if(this.$store.state.langu == "tw"){
            this.name = source.name;
            this.title = source.title;
            this.contents = source.contents;
            console.log(source.name," ", source.title);
          }
      
    })
        )
      })
      .catch(error => {
        console.log(error);
      })
      // 英文
    if( this.$store.state.langu == "en") {
      axios.get(`${CMS_URL}/items/speakers_translations/?filter[id][_eq]=${id}`, {
      })
      .then(response => {
        Array.from(response.data.data.forEach((source) => {

      // this.speakPer.push(source.name);
        console.log("en:" , source.name," ", source.title);
        this.name = source.name;
            this.title = source.title;
            this.contents = source.contents;
        }))})
      .catch(error => {
        console.log(error);
      })
    }

    // seminar
    
    axios.get(`${CMS_URL}/items/seminars/?filter[speaker][_eq]=${id}`, {
      })
      .then(response => {
        Array.from(response.data.data.forEach((source) => {
            // this.time.push(source.time);

          if(this.$store.state.langu == "tw"){
            const item ={
              time: source.time,
              topic: source.topic,
              location: source.location,
              introduction: source.introduction
            };
            // this.topic.push(source.topic);
            // this.location.push(source.location);
            // this.instroduction.push(source.introduction);

            this.seminars.push(item)
            
          }
      
    })
        )
      })
      .catch(error => {
        console.log(error);
      })
      // 英文
      if( this.$store.state.langu == "en") {
        // this.seminars.location = []
        // this.seminars.topic = []
        // this.seminars.introduction = []
      axios.get(`${CMS_URL}/items/seminars_translations/?filter[speaker][_eq]=${id}`, {
      })
      .then(response => {
        Array.from(response.data.data.forEach((source) => {
          // this.topic.push(source.topic);
          // this.location.push(source.location);
          // this.instroduction.push(source.introduction);

            const item ={
              time: source.time,
              topic: source.topic,
              location: source.location,
              introduction: source.introduction
            };

            this.seminars.push(item)
            console.log("semin:", this.seminars);
        }))})
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>

<template>
  <article id="speaker" class="speaker-container">
    <!-- <Breadcrumb v-once /> -->
    <!-- <Briefing
      :speakerKey="speakerKey"
      :name="name"
      :title="title"
      :contents="contents"
      :facebook="facebook"
      :instagram="instagram"
      :youtube="youtube"
    /> -->
    <Briefing
      :name="name"
      :title="title"
      :contents="contents"
      :facebook="facebook"
      :instagram="instagram"
      :youtube="youtube"
      :image = "image"
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
