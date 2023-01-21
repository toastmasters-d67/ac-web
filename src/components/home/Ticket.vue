<template>
  <section id="ticket" class="ticket-container">
    <header class="ticket-title">Ticket Price</header>
    <div class="ticket-row">
      <div class="ticket-item white">
        <span class="ticket-item-title">2 Day Pass</span>
        <span class="ticket-item-price">$ 2600</span>
        <ul class="ticket-item-list">
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Lunchboxes for 2 days</span>
          </li>
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Souvenirs</span>
          </li>
          <li class="ticket-item-row">
            <img
              src="@/assets/icon/home/ticket-dashed-box.svg"
              class="ticket-item-icon"
            />
            <span class="ticket-item-text"
              >Dinner banquet on 4/22 $800 (optional)</span
            >
          </li>
        </ul>
      </div>
      <div class="ticket-item early-bird">
        <span class="ticket-item-expiring">Until Mar 19, 2023</span>
        <span class="ticket-item-title title-early-bird">Early Bird Pass</span>
        <span class="ticket-item-price price-early-bird">$ 2200</span>
        <ul class="ticket-item-list">
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Lunchboxes for 2 days</span>
          </li>
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Souvenirs</span>
          </li>
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text"
              >Dinner banquet on 4/22 included</span
            >
          </li>
        </ul>
      </div>
      <div class="ticket-item white">
        <span class="ticket-item-title">First Day Pass</span>
        <span class="ticket-item-price">$ 1600</span>
        <ul class="ticket-item-list">
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Lunchbox</span>
          </li>
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Souvenirs</span>
          </li>
          <li class="ticket-item-row">
            <img
              src="@/assets/icon/home/ticket-dashed-box.svg"
              class="ticket-item-icon"
            />
            <span class="ticket-item-text"
              >Dinner banquet on 4/22 $800 (optional)</span
            >
          </li>
        </ul>
      </div>
      <div class="ticket-item white">
        <span class="ticket-item-title">Second Day Pass</span>
        <span class="ticket-item-price">$ 1600</span>
        <ul class="ticket-item-list">
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Lunchbox</span>
          </li>
          <li class="ticket-item-row">
            <i class="pi pi-check"></i>
            <span class="ticket-item-text">Souvenirs</span>
          </li>
          <li class="ticket-item-row">
            <img
              src="@/assets/icon/home/ticket-dashed-box.svg"
              class="ticket-item-icon"
            />
            <span class="ticket-item-text"
              >Dinner banquet on 4/22 $800 (optional)</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="ticket-coming-soon">
      The tickets will be available for order soon. Please stay tuned!
    </div>
    <!-- <button class="ticket-button">
      <span class="button-text">Order Ticket</span>
      <i class="pi pi-arrow-right button-arrow-right"></i>
    </button> -->
  </section>
</template>

<style scoped lang="scss">
.ticket-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-bottom: 200px;
  .ticket-title {
    color: #004165;
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin-bottom: 50px;
  }
  .ticket-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;
    div:nth-child(-n + 3) {
      margin-right: 15px;
    }
    margin: 0 auto;
  }
  .ticket-coming-soon {
    width: 60%;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;
  }
  .ticket-button {
    color: #6f6f6e;
    background: #ffdb82;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border: 2px solid white;
    border-radius: 30px;
    box-sizing: border-box;
    gap: 8px;
    padding: 12px 24px;
    margin-top: 60px;
    cursor: pointer;
    .button-text {
      font-size: 22px;
      font-weight: 600;
      line-height: 27px;
      margin-right: 5px;
    }
  }
}
.white {
  width: 300px;
  background: rgba(255, 255, 255, 0.6);
  border-color: #bc92b7;
  padding-top: 35px;
}
.early-bird {
  width: 312px;
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
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
  margin-bottom: 48px;
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
  .title-early-bird {
    font-size: 30px;
  }
  .ticket-item-price {
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .price-early-bird {
    font-size: 60px;
  }
}
ul.ticket-item-list {
  width: 207px;
  list-style-type: none;
  list-style-position: inside;
  color: black;
  font-size: 18px;
  font-weight: 500;
  line-height: 35px;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-bottom: 75px;
  li.ticket-item-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    .ticket-item-icon {
      width: 17px;
      height: 17px;
    }
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
