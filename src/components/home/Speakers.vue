<template>
  <section id="speakers" class="speakers-container">
    <header class="speakers-title">Meet our speakers</header>
    <div class="speakers">
      <div v-for="(speaker, index) in speakers" :key="index">
        <router-link :to="getLink(speaker.key)" class="speaker">
          <img
            :src="getImage(speaker.key)"
            class="speaker-image"
            :alt="speaker.image"
          />
          <span class="speaker-name-text">{{ speaker.name }}</span>
        </router-link>
      </div>
    </div>
    <router-link to="/speakers" class="button-view-all">
      <span class="button-text">View all</span>
      <img
        src="@/assets/icon/home/arrow-right.png"
        class="button-arrow-right"
        alt="arrow-right"
      />
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.speakers-container {
  background: #e5e5e5;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 150px;
  .speakers-title {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 49px;
    margin-bottom: 90px;
  }
}
.speakers {
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-color: transparent;
  margin: 0 auto;
  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }
  margin-bottom: 60px;
  .speaker {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-right: 70px;
    margin-bottom: 60px;
    .speaker-image {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      margin-bottom: 24px;
    }
    .speaker-name-text {
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
    }
    // .speaker-name {
    //   width: 223px;
    //   height: 39px;
    //   background-image: linear-gradient(to top, #b3c6d1 23px, transparent 100%);
    //   box-sizing: border-box;
    //   border-color: transparent;
    //   border-style: none;
    //   border-radius: 0;
    //   padding: 0;
    // }
  }
}
.button-view-all {
  width: 120px;
  background: linear-gradient(267.67deg, #ddc8bf 5.3%, #a7c4d4 95.87%);
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  padding: 12px 24px;
  margin: 0 auto;
  margin-bottom: 150px;
  .button-text {
    color: white;
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    margin-right: 8px;
  }
  .button-arrow-right {
    width: 24px;
    height: 24px;
  }
}
</style>

<script>
import speakers from "@/assets/data/speakers.json";

export default {
  name: "Speakers",
  setup() {
    return { speakers };
  },
  methods: {
    getLink(key) {
      if (key.length) {
        return `/speakers/${key}`;
      }
      return "";
    },
    getImage(key) {
      if (key.length) {
        return require(`@/assets/image/speakers/speaker-${key}-rounded.png`);
      }
      return "";
    },
  },
};
</script>
