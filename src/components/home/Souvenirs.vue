<template>
  <section class="souvenirs-container">
    <header class="souvenirs-title">Souvenirs</header>
    <div class="souvenirs-items">
      <div class="souvenirs-item">
        <div class="souvenirs-item-shadow">
          <img
            src="@/assets/image/home/souvenirs-pen.png"
            class="souvenirs-item-image"
            alt="pen"
          />
        </div>
        <div class="souvenirs-item-text">Knock Type Ballpoint Pen</div>
      </div>
      <div class="souvenirs-item">
        <div class="souvenirs-item-shadow flip">
          <img
            src="@/assets/image/home/souvenirs-holder.png"
            class="souvenirs-item-image flip"
            alt="holder"
          />
        </div>
        <div class="souvenirs-item-text">Card Holder With Magnets</div>
      </div>
      <div class="souvenirs-item">
        <div class="souvenirs-item-shadow">
          <img
            src="@/assets/image/home/souvenirs-cutlery.png"
            class="souvenirs-item-image"
            alt="cutlery"
          />
        </div>
        <div class="souvenirs-item-text">Cutlery Set</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.souvenirs-container {
  width: 100%;
  color: #004165;
  background: #e5e5e5;
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
}
.souvenirs-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 70px;
  div:nth-child(-n + 2) {
    margin-right: 80px;
  }
  .souvenirs-item {
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
      width: 200px;
    }
    .souvenirs-item-text {
      width: 187px;
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
</style>
