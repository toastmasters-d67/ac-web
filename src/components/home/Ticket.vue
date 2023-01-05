<template>
  <section id="ticket" class="ticket-container">
    <div class="ticket-item white">
      <span class="ticket-item-title">2 Day Pass</span>
      <span class="ticket-item-price">$ 280</span>
      <ul class="ticket-item-list">
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">2 day pass</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">Souvenirs</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-shopping-cart"></i>
          <span class="ticket-item-text">Dinner party $ 15 (optional)</span>
        </li>
      </ul>
      <button class="ticket-item-button">Order</button>
    </div>
    <div class="ticket-item early-bird">
      <span class="ticket-item-expiring">Until Jan 30, 2023</span>
      <span class="ticket-item-title">Early Bird Pass</span>
      <span class="ticket-item-price">$ 200</span>
      <ul class="ticket-item-list">
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">2 day pass</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">Souvenirs</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-shopping-cart"></i>
          <span class="ticket-item-text">Dinner party $ 15 (optional)</span>
        </li>
      </ul>
      <button class="ticket-item-button">Order</button>
    </div>
    <div class="ticket-item white">
      <span class="ticket-item-title">First Day Pass</span>
      <span class="ticket-item-price">$ 150</span>
      <ul class="ticket-item-list">
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">1 day pass</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">Souvenirs</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-shopping-cart"></i>
          <span class="ticket-item-text">Dinner party $ 15 (optional)</span>
        </li>
      </ul>
      <button class="ticket-item-button">Order</button>
    </div>
    <div class="ticket-item white">
      <span class="ticket-item-title">Second Day Pass</span>
      <span class="ticket-item-price">$ 150</span>
      <ul class="ticket-item-list">
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">1 day pass</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-check"></i>
          <span class="ticket-item-text">Souvenirs</span>
        </li>
        <li class="ticket-item-row">
          <i class="pi pi-shopping-cart"></i>
          <span class="ticket-item-text">Dinner party $ 15 (optional)</span>
        </li>
      </ul>
      <button class="ticket-item-button">Order</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ticket-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  border-color: transparent;
  padding-bottom: 250px;
  margin: 0 auto;
  div:nth-child(-n + 3) {
    margin-right: 15px;
  }
  .ticket-title {
    width: 301px;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    display: block;
  }
  .ticket-button {
    width: 202px;
    height: 48px;
    background: #ffbc58;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.15);
    border-radius: 38px;
    border-color: transparent;
    padding: 8px 24px;
    margin-top: 32px;
    margin-bottom: 50px;
    cursor: pointer;
  }
}
.white {
  width: 300px;
  background: rgba(255, 255, 255, 0.6);
  border-color: #bc92b7;
  padding-top: 35px;
  padding-bottom: 35px;
}
.early-bird {
  width: 320px;
  height: 470px;
  background: linear-gradient(
    22.11deg,
    #dd7f9b 7.45%,
    #db879e 18.33%,
    #cfa7bc 50.92%,
    #c4a3c1 60.32%,
    #a997cf 80.73%,
    #8980df 90.89%,
    #4b41e4 101.74%,
    #372ce6 101.74%
  );
  border-color: white;
  padding-top: 80px;
}
.ticket-item {
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
  .ticket-item-expiring {
    position: absolute;
    left: 50px;
    top: -15px;
    color: #52555a;
    background: linear-gradient(
        0deg,
        rgba(255, 204, 77, 0.7),
        rgba(255, 204, 77, 0.7)
      ),
      white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    padding: 5px 20px;
    gap: 10px;
    box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
    border-radius: 1000px;
  }
  .ticket-item-title {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 60px;
    text-align: center;
  }
  .ticket-item-price {
    font-size: 48px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .ticket-item-button {
    width: 151px;
    height: 46px;
    background: linear-gradient(
      267.67deg,
      rgba(221, 200, 191, 0.6) 5.3%,
      rgba(167, 196, 212, 0.6) 95.87%
    );
    border-color: transparent;
    border-radius: 20px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
ul.ticket-item-list {
  width: 170px;
  list-style-type: none;
  list-style-position: inside;
  color: black;
  font-size: 18px;
  font-weight: 500;
  line-height: 35px;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  li.ticket-item-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    .ticket-item-text {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 30px;
      margin-left: 18px;
    }
  }
}
</style>
