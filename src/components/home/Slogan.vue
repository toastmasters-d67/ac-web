<template>
  <section class="slogan-container" :style="getStyle()">
    <div class="slogan-date">Apr 22-23, 2023</div>
    <div class="slogan-row">
      <span class="slogan-year">2023</span>
      <header class="slogan-title">Annual Conference</header>
    </div>
    <div class="slogan-row">
      <span class="slogan-word color-1">Innovate</span>
      <span class="slogan-word color-period">.</span>
      <span class="slogan-word color-2">Intergrate</span>
      <span class="slogan-word color-period">.</span>
      <span class="slogan-word color-3">Motivate</span>
    </div>
    <span class="slogan-text">
      It is our great pleasure to welcome you to the 2023 Annual Conference of
      the Toastmasters International in Taipei. Learn to improve your public
      speaking, leadership, and communication skills through 16 education
      sessions across four tracks.
    </span>
    <button class="slogan-button">Get Ticket</button>
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
    color: #214366;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3em;
    line-height: 20px;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    transform: rotate(-90deg);
  }
  .slogan-title {
    color: #214366;
    font-size: 96px;
    font-weight: 700;
    line-height: 117px;
    text-shadow: 0px 4px 4px rgba(206, 212, 218, 0.25);
  }
  .slogan-word {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin-right: 30px;
  }
  .color-1 {
    color: #fac8d5;
  }
  .color-2 {
    color: #dedafe;
  }
  .color-3 {
    color: #fffbd8;
  }
  .color-period {
    color: #dde1e1;
  }
  .slogan-text {
    width: 830px;
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
    background: linear-gradient(267.67deg, #ddc8bf 5.3%, #a7c4d4 95.87%);
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
      font-size: 5px;
      font-weight: 600;
      line-height: 10px;
      letter-spacing: 0.1em;
    }
    .slogan-title {
      font-size: 16px;
      line-height: 20px;
    }
    .slogan-word {
      height: 40px;
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
