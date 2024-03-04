<template>
  <div :class="['ticket-item', type]">
    <span class="ticket-item-expiring" v-if="expiring">{{ $t(expiring) }}</span>
    <span class="ticket-item-title" :class="type+'-title'">{{ $t(title) }}</span>
    <span class="early-bird-title-note" v-if="note">{{ $t(note) }}</span>
    <span class="ticket-item-price" :class="type+'-price'">$ {{ price }}</span>
    <span class="early-bird-price-note" v-if="priceNote">{{ $t('home.ticket.early-bird-price-note', { price: priceNote }) }}</span>
    <ul class="ticket-item-list">
      <li class="ticket-item-row" v-for="(item, index) in check" :key="index">
        <i class="pi pi-check"></i>
        <span class="ticket-item-text">{{ $t(item) }}</span>
      </li>
      <li class="ticket-item-row" v-if="option">
        <img
          src="@/assets/icon/home/ticket-dashed-box.svg"
          class="ticket-item-icon"
        />
        <span class="ticket-item-text">{{ $t('home.ticket.banquet-optional', { price: option }) }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  title: String,
  price: [Number, String],
  check: Array,
  option: Number,
  note: String,
  priceNote: String,
  expiring: String
})
</script>

<style scoped lang="scss">
.ticket-container {
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 100px;
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

  .ticket-note {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
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
    margin-top: 23px;
    text-decoration: none;
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
    line-height: 60px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .ticket-item-price-note {
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    text-decoration-line: line-through;
  }

  .early-bird-title {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 50px;
  }

  .early-bird-title-note {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 22px;
  }

  .early-bird-price {
    font-size: 60px;
    font-weight: 500;
    line-height: 40px;
  }

  .early-bird-price-note {
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    text-decoration-line: line-through;
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

@media screen and (max-width: 768px) {
  .ticket-container {
    padding-top: 70px;
    padding-bottom: 100px;

    .ticket-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 30px;
    }

    .ticket-row {
      div:nth-child(-n + 3) {
        margin-right: 9px;
      }
    }

    .ticket-note {
      flex-direction: column;
      font-size: 10px;
      line-height: 12px;
    }

    .ticket-button {
      border: 1px solid white;
      gap: 5px;
      padding: 8px 15px;
      margin-top: 16px;

      .button-text {
        font-size: 10px;
        line-height: 12px;
      }
    }
  }

  .white {
    width: 150px;
    padding-top: 20px;
  }

  .early-bird {
    width: 163px;
    height: 222px;
    padding-top: 30px;
  }

  .ticket-item {
    margin-bottom: 24px;

    .ticket-item-expiring {
      top: -12px;
      font-size: 10px;
      line-height: 12px;
      padding: 5px 12px;
    }

    .ticket-item-title {
      font-size: 12px;
      line-height: 15px;
    }

    .ticket-item-price {
      font-size: 24px;
      line-height: 30px;
      margin: 17px auto;
    }

    .ticket-item-price-note {
      font-size: 16px;
      font-weight: 500;
      line-height: 40px;
    }

    .early-bird-title {
      font-size: 15px;
      letter-spacing: 0.05em;
      line-height: 20px;
    }

    .early-bird-title-note {
      font-size: 10px;
      line-height: 15px;
      letter-spacing: 0;
    }

    .early-bird-price {
      font-size: 32px;
      margin-top: 9px;
      margin-bottom: 9px;
    }

    .early-bird-price-note {
      font-size: 10px;
      line-height: 10px;
      margin-bottom: 9px;
    }
  }

  ul.ticket-item-list {
    width: 124px;
    font-weight: 400;
    margin-bottom: 16px;

    li.ticket-item-row {
      .ticket-item-text {
        font-size: 10px;
        line-height: 10px;
        margin-left: 9px;
      }
    }
  }
}
</style>
