<template>
  <section class="briefing-container">
    <div class="briefing-speaker">
      <header class="briefing-speaker-name">{{ name }}</header>
      <div class="briefing-speaker-title">{{ title }}</div>
      <img
        src="@/assets/icon/speaker/speaker-divider.png"
        class="briefing-speaker-divider"
        alt="divider"
      />
      <div class="briefing-speaker-row">
        <img
          :src="getImage(speakerKey)"
          class="briefing-speaker-image"
          alt="play"
        />
        <div class="briefing-speaker-text">
          {{ content }}
        </div>
      </div>
      <div class="briefing-speaker-row">
        <img
          src="@/assets/icon/speaker/speaker-facebook.png"
          class="briefing-logo"
          alt="facebook"
        />
        <img
          src="@/assets/icon/speaker/speaker-instagram.png"
          class="briefing-logo"
          alt="instagram"
        />
        <img
          src="@/assets/icon/speaker/speaker-youtube.png"
          class="briefing-logo"
          alt="youtube"
        />
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
  min-width: 1200px;
  margin: 0 auto;
  .briefing-speaker-divider {
    width: 1200px;
    border: 1px solid #cccccc;
  }
  .briefing-speaker-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .briefing-speaker-image {
      width: 510px;
      height: 655px;
      border-color: transparent;
      margin-right: 50px;
    }
    .briefing-speaker-text {
      width: 680px;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 40px;
    }
    .briefing-logo {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      cursor: pointer;
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
    content: {
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
