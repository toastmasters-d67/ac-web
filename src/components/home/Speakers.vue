<template>
  <section id="speakers" class="speakers-container">
    <header class="speakers-title">{{ $t("home.speaker.title") }}</header>
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
      <div class="speaker">
        <img :src="getImage('tbd')" class="speaker-image" :alt="TBD" />
        <span class="speaker-name-text">{{ $t("home.speaker.tbd") }}</span>
      </div>
      <div class="speaker">
        <img :src="getImage('tbd')" class="speaker-image" :alt="TBD" />
        <span class="speaker-name-text">{{ $t("home.speaker.tbd") }}</span>
      </div>
      <div class="speaker">
        <img :src="getImage('tbd')" class="speaker-image" :alt="TBD" />
        <span class="speaker-name-text">{{ $t("home.speaker.tbd") }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.speakers-container {
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 150px;
  .speakers-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-bottom: 90px;
  }
}
.speakers {
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-color: transparent;
  margin: 0 auto;
  padding-left: 70px;
  margin-bottom: 32px;
  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }
  .speaker {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-right: 70px;
    margin-bottom: 50px;
    .speaker-image {
      width: 250px;
      height: 250px;
      border-radius: 20px;
      margin-bottom: 24px;
    }
    .speaker-name-text {
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
    }
  }
}

@media screen and (max-width: 768px) {
  .speakers-container {
    padding-top: 100px;
    padding-bottom: 50px;
    .speakers-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }
  }
  .speakers {
    padding-left: 10px;
    margin-bottom: 0;
    .speaker {
      margin-right: 10px;
      margin-bottom: 19px;
      .speaker-image {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
      .speaker-name-text {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
  .button-view-all {
    width: 91px;
    border: 1px solid white;
    padding: 8px 15px;
    margin-bottom: 8px;
    .button-text {
      font-size: 10px;
      line-height: 12px;
      margin-right: 8px;
    }
    .button-arrow-right {
      font-size: 9px;
    }
  }
}
</style>

<script>
import { reactive } from "vue";

export default {
  name: "Speakers",
  data() {
    const speakers = reactive([]);
    Array.from(this.$tm("speakers")).forEach((source) => {
      const item = {
        key: this.$rt(source.key),
        name: this.$rt(source.name),
      };
      speakers.push(item);
    });
    return { speakers };
  },
  methods: {
    getLink(key) {
      if (key.length) {
        return `/${key}`;
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
