<template>
  <article id="speakers" class="speakers-container">
    <Breadcrumb v-once />
    <header class="speakers-title">Our Speakers</header>
    <div class="speakers">
      <div class="speaker" v-for="(speaker, index) in speakers" :key="index">
        <img
          :src="getImage(speaker.image)"
          class="speaker-image"
          :alt="speaker.image"
        />
        <span class="speaker-name">{{ speaker.name }}</span>
        <span class="speaker-title">{{ speaker.title }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.speakers-container {
  background: linear-gradient(
    225deg,
    rgba(108, 169, 192, 1) 0%,
    rgba(220, 213, 179, 1) 29%,
    rgba(236, 182, 146, 1) 81%,
    rgba(228, 167, 62, 1) 100%
  );
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 150px;
  .speakers-title {
    color: #004165;
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    text-align: center;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 80px;
  }
}
.speakers {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-color: transparent;
  margin: 0 auto;
  margin-bottom: 60px;
  div:nth-child(n + 1) {
    margin-right: 70px;
  }
  div:nth-child(n + 2) {
    margin-right: 70px;
  }
  .speaker {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;
    // margin-right: 70px;
    margin-bottom: 60px;
    cursor: pointer;
    .speaker-image {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin-bottom: 24px;
    }
    .speaker-name {
      // width: 224px;
      // height: 44px;
      color: black;
      font-size: 36px;
      font-weight: 600;
      line-height: 44px;
      text-align: center;
    }
    .speaker-title {
      // width: 224px;
      // height: 34px;
      color: #979797;
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
      text-align: center;
    }
  }
}
</style>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";
import speakers from "@/assets/data/speakers2.json";

export default {
  name: "SpeakersView",
  components: {
    Breadcrumb,
  },
  setup() {
    return { speakers };
  },
  methods: {
    getImage(image) {
      if (image.length) {
        return require(`@/assets/image/speakers/${image}-rounded.png`);
      }
      return "";
    },
  },
};
</script>
