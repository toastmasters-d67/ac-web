<template>
  <div class="speakers-container">
    <div class="unskew">
      <span class="speakers-title">Meet our speakers</span>
      <span class="speakers-text">
        We invite speakers to enlighten our conference
      </span>
      <div class="speakers">
        <div class="speaker" v-for="(speaker, index) in speakers" :key="index">
          <img
            :src="getImage(speaker.image)"
            class="speaker-image"
            :alt="speaker.image"
          />
          <div class="speaker-name">
            <div class="speaker-name-shadow"></div>
            <span class="speaker-name-text">{{ speaker.name }}</span>
          </div>
        </div>
      </div>
      <button class="button-view-all">
        <span class="button-text">View all</span>
        <img
          src="@/assets/icon/home/arrow-right.png"
          class="button-arrow-right"
          alt="arrow-right"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.speakers-container {
  width: 100%;
  background: #eaeaea;
  transform: rotate(-10deg) skew(-10deg);
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  .unskew {
    transform: rotate(10deg) skew(10deg);
    display: flex;
    flex-direction: column;
    .speakers-title {
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 49px;
      margin-top: 150px;
      margin-bottom: 32px;
    }
    .speakers-text {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 32px;
    }
  }
}
.speakers {
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-color: transparent;
  margin: 0 auto;
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
    .speaker-name {
      width: 223px;
      height: 39px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-self: auto;
      align-items: center;
      flex-shrink: 1;
      justify-content: flex-start;
      box-sizing: border-box;
      border-color: transparent;
      border-style: none;
      background-color: transparent;
      border-radius: 0;
      padding: 0;
      .speaker-name-shadow {
        position: absolute;
        top: 16px;
        width: 100%;
        height: 23px;
        background-color: #b3c6d1;
        border-color: transparent;
      }
      .speaker-name-text {
        position: absolute;
        height: auto;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 34px;
      }
    }
  }
}
.button-view-all {
  background-color: #004165;
  display: flex;
  align-items: center;
  border-color: transparent;
  padding: 12px 24px;
  margin: 0 auto;
  margin-bottom: 150px;
  cursor: pointer;
  .button-text {
    color: white;
    font-size: 22px;
    font-style: normal;
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
    getImage(image) {
      if (image.length) {
        return require(`@/assets/image/home/${image}.png`);
      }
      return "";
    },
  },
};
</script>
