<template>
  <div class="header-container">
    <img src="@/assets/icon/app/logo.png" class="header-logo" alt="logo" />
    <div class="header-links">
      <span class="header-link">Our speakers</span>
      <span class="header-link">Agenda</span>
      <span class="header-link">Venue &amp; Transportation</span>
      <button class="header-button">Get your ticket</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 80px;
  color: white;
  background: #772432;
  position: relative;
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
  text-align: center;
  border-color: transparent;
  .header-logo {
    position: absolute;
    top: 15px;
    left: 38px;
    width: 60px;
    height: 50px;
    cursor: pointer;
  }
  .header-links {
    position: absolute;
    top: 16px;
    right: 24px;
    width: 790px;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-link {
      font-weight: 700;
      margin-right: 40px;
      cursor: pointer;
    }
    .header-button {
      width: 201px;
      height: 48px;
      background: #f2df74;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      border-radius: 38px;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
      padding: 8px 24px;
      cursor: pointer;
    }
  }
}
</style>
