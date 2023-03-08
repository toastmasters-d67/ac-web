<template>
  <section class="briefing-container">
    <div class="briefing-speaker">
      <header class="briefing-speaker-name">{{ name }}</header>
      <div class="briefing-speaker-title">{{ title }}</div>
      <hr class="briefing-speaker-divider" />
      <div class="briefing-speaker-intro">
        <img
          :src="getImage(speakerKey)"
          class="briefing-speaker-image"
          alt="play"
        />
        <div class="briefing-speaker-text">
          <span v-for="(item, key) in contents" :key="key">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="briefing-speaker-links">
        <a :href="facebook" target="_blank" v-if="facebook">
          <img
            src="@/assets/icon/speaker/speaker-facebook.png"
            class="briefing-logo"
            alt="facebook"
          />
        </a>
        <a :href="instagram" target="_blank" v-if="instagram">
          <img
            src="@/assets/icon/speaker/speaker-instagram.png"
            class="briefing-logo"
            alt="instagram"
          />
        </a>
        <a :href="youtube" target="_blank" v-if="youtube">
          <img
            src="@/assets/icon/speaker/speaker-youtube.png"
            class="briefing-logo"
            alt="youtube"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.briefing-container {
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  text-align: left;
  a {
    color: black;
    border-color: transparent;
  }
  .briefing-speaker-name {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .briefing-speaker-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: #53595a;
  }
}
.briefing-speaker {
  width: 83.33%;
  max-width: 1200px;
  margin: 0 auto;
  .briefing-speaker-divider {
    width: 100%;
    border: 1px solid #cccccc;
  }
  .briefing-speaker-intro {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .briefing-speaker-image {
      max-width: 510px;
      width: 42.5%;
      align-self: flex-start;
      border-color: transparent;
      margin-right: 50px;
    }
    .briefing-speaker-text {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 40px;
      font-weight: 400;
      @media screen and (max-width: 1024px) {
        font-size: 16px;
        line-height: 32px;
      }
    }
  }
  .briefing-speaker-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .briefing-logo {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 768px) {
  .briefing-container {
    .briefing-speaker-name {
      font-size: 24px;
      font-weight: 400;
      line-height: 38px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .briefing-speaker-title {
      font-size: 10px;
      line-height: 10px;
    }
  }
  .briefing-speaker {
    width: 83.33%;
    margin: 0 auto;
    .briefing-speaker-divider {
      display: none;
    }
    .briefing-speaker-intro {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      .briefing-speaker-image {
        width: 68.27%;
      }
      .briefing-speaker-text {
        font-size: 14px;
        line-height: 20px;
      }
    }
    .briefing-speaker-links {
      .briefing-logo {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "SpeakerBriefing",
  props: {
    speakerKey: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    contents: {
      type: Array,
      default: function () {
        return [];
      },
    },
    facebook: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    youtube: {
      type: String,
      default: "",
    },
  },
  methods: {
    getImage(speakerKey) {
      if (speakerKey.length) {
        return require(`@/assets/image/speaker/speaker-${speakerKey}.png`);
      }
      return "";
    },
  },
};
</script>
