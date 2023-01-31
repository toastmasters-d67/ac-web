<template>
  <section id="venue" class="venue-container">
    <header class="venue-title">{{ $t("home.venue.title") }}</header>
    <div class="venue-box">
      <span class="venue-box-name">{{ $t("home.venue.venue") }}</span>
      <div class="venue-box-row">
        <i class="pi pi-phone venue-box-icon"></i>
        <span class="venue-box-text">(02) 2649-3034</span>
      </div>
      <div class="venue-box-row">
        <i class="pi pi-globe venue-box-icon"></i>
        <span class="venue-box-text">
          {{ $t("home.venue.address") }}
        </span>
      </div>
      <a
        href="https://goo.gl/maps/hk4DmRVfQ2e4q5FA9"
        class="venue-box-button"
        target="_blank"
      >
        {{ $t("home.venue.show") }}
      </a>
      <img
        src="@/assets/image/home/venue-map.png"
        class="venue-box-map"
        alt="map"
      />
    </div>
    <router-link to="/venue" class="button-directions">
      <span class="button-text">{{ $t("home.venue.directions") }}</span>
      <i class="pi pi-arrow-right button-arrow-right"></i>
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.venue-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 50px;
  a {
    color: #004165;
    text-decoration: none;
    border-color: transparent;
  }
  .venue-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .button-directions {
    width: 191px;
    height: 43px;
    background: #f5db8c;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 8px 24px;
    gap: 8px;
    margin: 0 auto;
    .button-text {
      color: #004165;
      font-size: 22px;
      font-weight: 500;
      line-height: 27px;
      text-align: center;
    }
    .button-arrow-right {
      color: #004165;
    }
  }
}
.venue-box {
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
  .venue-box-button {
    background: #f5db8c;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    border-radius: 20px;
    padding: 5px 10px;
    gap: 10px;
  }
  .venue-box-map {
    width: 100%;
    aspect-ratio: 902 / 479;
    margin-top: 25px;
    border: 3px solid;
    border-color: #a7c4d4;
    padding: 10px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 768px) {
  .venue-container {
    padding-top: 100px;
    padding-bottom: 0px;
    .venue-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 30px;
    }
    .button-directions {
      width: 145px;
      height: 33px;
      .button-text {
        font-size: 14px;
        line-height: 17px;
      }
      .button-arrow-right {
        font-size: 14px;
      }
    }
  }
  .venue-box {
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
    .venue-box-button {
      font-size: 10px;
      line-height: 12px;
    }
    .venue-box-map {
      border: 0.98px solid;
      padding: 3px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>
