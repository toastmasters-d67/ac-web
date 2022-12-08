<template>
  <section id="speakers" class="speakers-container">
    <div class="skew">
      <div class="unskew">
        <header class="speakers-title">Meet our speakers</header>
        <span class="speakers-text">
          We invite speakers to enlighten our conference
        </span>
        <div class="speakers">
          <div
            class="speaker"
            v-for="(speaker, index) in speakers"
            :key="index"
          >
            <img
              :src="getImage(speaker.image)"
              class="speaker-image"
              :alt="speaker.image"
            />
            <div class="speaker-name">
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
  </section>
</template>

<style scoped lang="scss">
.speakers-container {
  background: #e5e5e5;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-bottom: 150px;
  .skew {
    background: #f5f5f5;
    transform: rotate(-10deg) skew(-10deg);
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
        // font-style: normal;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        margin-bottom: 32px;
      }
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
    cursor: pointer;
    .speaker-image {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      margin-bottom: 24px;
    }
    .speaker-name {
      width: 223px;
      height: 39px;
      background-image: linear-gradient(to top, #b3c6d1 23px, transparent 100%);
      box-sizing: border-box;
      border-color: transparent;
      border-style: none;
      border-radius: 0;
      padding: 0;
      .speaker-name-text {
        font-size: 28px;
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
  border-radius: 30px;
  border-color: transparent;
  padding: 12px 24px;
  margin: 0 auto;
  margin-bottom: 150px;
  cursor: pointer;
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
    getImage(image) {
      if (image.length) {
        return require(`@/assets/image/home/${image}.png`);
      }
      return "";
    },
  },
};
</script>
