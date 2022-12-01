<template>
  <div class="slogan-container" :style="getStyle()">
    <div class="slogan-date">
      <div class="slogan-date-shadow"></div>
      <span class="slogan-date-text">Feb 3</span>
    </div>
    <span class="slogan-title">Innovate</span>
    <span class="slogan-title">Intergrate</span>
    <span class="slogan-title">Motivate</span>
    <button class="slogan-button">Get your ticket</button>
  </div>
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
  padding-top: 73px;
  padding-left: 120px;
  .slogan-title {
    height: 88px;
    font-size: 72px;
    font-weight: 700;
    line-height: 88px;
    text-align: left;
  }
  .slogan-date {
    width: 119px;
    height: 39px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: transparent;
    .slogan-date-shadow {
      position: absolute;
      top: 14px;
      width: 100%;
      height: 23px;
      background-color: #004165;
    }
    .slogan-date-text {
      position: absolute;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
    }
  }
  .slogan-button {
    width: 201px;
    height: 48px;
    background: #f2df74;
    color: black;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    border-radius: 38px;
    border-color: transparent;
    padding: 8px 24px;
    margin-top: 40px;
    cursor: pointer;
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
