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
      <i class="pi pi-arrow-right button-arrow-right"></i>
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.speakers-container {
  background: #e5e5e5;
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
.button-view-all {
  width: 170px;
  background: #ffdb82;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  padding: 12px 24px;
  margin: 0 auto;
  .button-text {
    color: #6f6f6e;
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    margin-right: 8px;
  }
  .button-arrow-right {
    color: #6f6f6e;
  }
}

/* Mobile Design */
@media screen and (max-width: 768px) {
  .speakers-container {
    padding-top: 50px;
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
