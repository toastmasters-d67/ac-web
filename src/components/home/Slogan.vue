<template>
  <section class="slogan-container" :style="getStyle()">
    <div class="slogan-date">{{ $t("home.slogan.date") }}</div>
    <div class="slogan-row">
      <span class="slogan-year">2023</span>
      <header class="slogan-title">{{ $t("home.slogan.title") }}</header>
    </div>
    <div class="slogan-row">
      <span class="slogan-word">{{ $t("home.slogan.slogan") }}</span>
    </div>
    <span class="slogan-text">
      {{ $t("home.slogan.text") }}
    </span>
    <button class="slogan-button">{{ $t("home.slogan.ticket") }}</button>
  </section>
</template>

<style scoped lang="scss">
.slogan-container {
  width: 100%;
  min-height: 548px;
  display: flex;
  flex-direction: column;
  color: white;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  text-align: left;
  padding-top: 73px;
  padding-left: 120px;
  padding-bottom: 50px;
  .slogan-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .slogan-date {
    width: 270px;
    height: 39px;
    background: rgba(255, 255, 255, 0.2);
    font-size: 32px;
    font-weight: 400;
    line-height: 39px;
    box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.2);
    gap: 10px;
    padding: 0px 10px;
  }
  .slogan-year {
    width: 39px;
    height: 20px;
    color: #214366;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 20px;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    transform: rotate(-90deg);
  }
  .slogan-title {
    width: 403px;
    height: 49px;
    color: #214366;
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
    text-shadow: 0px 4px 4px rgba(206, 212, 218, 0.25);
    padding-top: 7px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .slogan-word {
    width: 673px;
    background: linear-gradient(38.59deg, #de809c 11.59%, #675de2 77.61%);
    font-size: 55px;
    font-weight: 600;
    line-height: 70px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .slogan-text {
    max-width: 912px;
    color: #757575;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 32px;
    margin-top: 15px;
  }
  .slogan-button {
    width: 151px;
    color: black;
    background: #ffdb82;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    border: 1px solid white;
    border-radius: 38px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    padding: 8px 24px;
    margin-top: 40px;
    cursor: pointer;
  }
}
/* Mobile Design */
@media screen and (max-width: 768px) {
  .slogan-container {
    min-height: 213px;
    padding-top: 19.5px;
    padding-left: 26px;
    .slogan-date {
      height: 12px;
      font-size: 10px;
      line-height: 12px;
      padding: 0px 3.2px;
    }
    .slogan-year {
      width: 14px;
      height: 10px;
      font-size: 5px;
      line-height: 10px;
    }
    .slogan-title {
      width: 162px;
      height: 20px;
      font-size: 16px;
      line-height: 20px;
      padding-top: 0px;
      margin-bottom: 10px;
    }
    .slogan-word {
      width: 196px;
      font-size: 16px;
      line-height: 20px;
    }
    .slogan-text {
      width: 86.49%;
      min-width: 200px;
      font-weight: 500;
      font-size: 8px;
      line-height: 12px;
      margin-top: 10px;
    }
    .slogan-button {
      width: 76px;
      font-size: 10px;
      line-height: 12px;
      padding: 5px 12px;
      margin-top: 10px;
    }
  }
}
</style>

<script>
export default {
  name: "Slogan",
  methods: {
    getStyle() {
      const background = require("@/assets/image/home/slogan-background.png");
      return `background: url(${background}) no-repeat center bottom/cover`;
    },
  },
};
</script>
