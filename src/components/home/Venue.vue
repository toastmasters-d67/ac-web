<template>
  <section id="venue" class="venue-container">
    <header class="venue-title">How to get there?</header>
    <div class="venue-box">
      <span class="venue-box-name">Kuanhe Exhibition Hall</span>
      <div class="venue-box-row">
        <i class="pi pi-phone venue-box-icon"></i>
        <span class="venue-box-text">(02) 2649-3034</span>
      </div>
      <div class="venue-box-row">
        <i class="pi pi-map-marker venue-box-icon"></i>
        <span class="venue-box-text">
          No. 237-6, Section 1, Datong Rd, Xizhi District, New Taipei City,
          Taiwan 221
        </span>
      </div>
      <img
        src="@/assets/image/home/venue-map.png"
        class="venue-box-map"
        alt="map"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.venue-container {
  width: 100%;
  color: #004165;
  background: #e5e5e5;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 50px;
  .venue-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
.venue-box {
  width: 902px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-color: transparent;
  margin: 0 auto;
  .venue-box-name {
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .venue-box-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    .venue-box-icon {
      font-size: 18px;
      margin-right: 15px;
    }
    .venue-box-text {
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin-bottom: 15px;
    }
  }
  .venue-box-map {
    width: 902px;
    height: 479px;
    margin-top: 25px;
  }
}
</style>
