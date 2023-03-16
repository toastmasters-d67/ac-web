<template>
  <section id="souvenirs" class="souvenirs-container">
    <header class="souvenirs-title">{{ $t("home.souvenir.title") }}</header>
    <div class="souvenirs-items">
      <div class="souvenirs-item">
        <div class="souvenirs-item-shadow"></div>
        <img
          src="@/assets/image/home/souvenirs-bag.png"
          class="souvenirs-item-image souvenirs-bag"
          alt="souvenirs-bag"
        />
        <div class="souvenirs-item-text">{{ $t("home.souvenir.bag") }}</div>
      </div>
      <div class="souvenirs-item">
        <div class="souvenirs-item-shadow flip"></div>
        <img
          src="@/assets/image/home/souvenirs-towel.png"
          class="souvenirs-item-image souvenirs-towel"
          alt="souvenirs-towel"
        />
        <div class="souvenirs-item-text">{{ $t("home.souvenir.towel") }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.souvenirs-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 200px;
  .souvenirs-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .souvenirs-coming-soon {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin: 70px auto;
  }
}
.souvenirs-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 70px;
  gap: 5%;
  .souvenirs-item {
    position: relative;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .souvenirs-item-shadow {
      width: 220px;
      height: 285px;
      background: #ebf0f6;
      border-radius: 200px 200px 0px 0px;
      padding: 30px 10px 0px;
      gap: 10px;
    }
    .souvenirs-item-image {
      position: absolute;
      width: 200px;
    }
    .souvenirs-bag {
      top: 30px;
    }
    .souvenirs-towel {
      top: 70px;
    }
    .souvenirs-item-text {
      color: black;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 30px;
      text-align: center;
      margin-top: 30px;
    }
    .flip {
      transform: rotate(-180deg);
    }
  }
}

@media screen and (max-width: 768px) {
  .souvenirs-container {
    .souvenirs-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }
    .souvenirs-coming-soon {
      font-size: 10px;
      line-height: 12px;
      margin: 30px auto;
    }
  }
  .souvenirs-items {
    padding-top: 0px;
    .souvenirs-item {
      width: 100px;
      .souvenirs-item-shadow {
        width: 100px;
        height: 132.43px;
        padding: 20px 10px 10px;
      }
      .souvenirs-item-image {
        width: 90px;
      }
      .souvenirs-bag {
        top: 20px;
      }
      .souvenirs-towel {
        top: 37px;
      }
      .souvenirs-item-text {
        font-size: 10px;
        line-height: 10px;
        margin-top: 10px;
      }
    }
  }
}
</style>
