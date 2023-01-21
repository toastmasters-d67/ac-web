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
        <i class="pi pi-globe venue-box-icon"></i>
        <span class="venue-box-text">
          No. 237-6, Section 1, Datong Rd, Xizhi District, New Taipei City
        </span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2937516051866!2d121.63301651513369!3d25.058030983961142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d53515f76e2a1%3A0xec355e84b8db421e!2z5a-s5ZKM5a605bGV6aSo5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2stw!4v1671638069563!5m2!1sen!2stw"
        class="venue-box-map"
        frameborder="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped lang="scss">
.venue-container {
  width: 100%;
  color: #004165;
  background: #e5e5e5;
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
  // width: 62.64%;
  // min-width: 291px;
  width: 87.2%;
  max-width: 915px;
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
      text-align: left;
    }
  }
  .venue-box-map {
    width: 100%;
    aspect-ratio: 902 / 479;
    margin-top: 25px;
    border: 3px solid;
    border-color: #a7c4d4;
    padding: 10px;
  }
}

/* Mobile Design */
@media screen and (max-width: 768px) {
  .venue-container {
    padding-top: 20px;
    padding-bottom: 0px;
    .venue-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 30px;
    }
  }
  .venue-box {
    // width: 62.64%;
    // min-width: 291px;
    .venue-box-name {
      font-size: 12px;
      line-height: 15px;
      margin-top: 0px;
      margin-bottom: 16px;
    }
    .venue-box-row {
      .venue-box-icon {
        font-size: 9px;
        margin-right: 8px;
      }
      .venue-box-text {
        font-size: 10px;
        line-height: 12px;
        margin-bottom: 8px;
      }
    }
    .venue-box-map {
      margin-top: 0px;
      border: 0.98px solid;
      padding: 3px;
    }
  }
}
</style>
