<template>
  <div class="myorder-container">
    <span class="myorder-title">My order</span>
    <div class="myorder-paidunpaid-switcher">
      <button class="myorder-switcher-button button-active">Paid</button>
      <button class="myorder-switcher-button button-inactive">Unpaid</button>
    </div>
    <button class="myorder-order-selector">
      <span class="myorder-order-number">#Order 01</span>
      <i class="pi pi-code myorder-selector-icon" />
    </button>
    <ul class="myorder-tickets-list">
      <li v-for="ticket of tickets" :key="ticket.id" class="myorder-ticket">
        Ticket {{ ticket.id }} - {{ ticket.description }}
      </li>
      <li class="myorder-banquet">
        <div class="myorder-banquet-content">
          <img
            alt="banquet"
            src="@/assets/icon/order/banquet-icon.svg"
            class="myorder-banquet-icon"
          />
          <span class="myorder-banquet-text">Night banquet</span>
          <span class="myorder-banquet-number">
            {{ remainBanquets }}
          </span>
        </div>
        <span class="myorder-banquet-note">
          (Please assign Night Banquet ticket to recipients.)
        </span>
      </li>
    </ul>
    <hr class="myorder-line" />
    <button class="myorder-new-order">Create a new order</button>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  props: {
    tickets: {
      type: Object,
    },
    remainBanquets: {
      type: Number,
    },
  },
  methods: {
    onSubmit(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped lang="scss">
.myorder-container {
  width: 32.25%;
  height: fit-content;
  position: sticky;
  top: 80px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 40px 24px;
  .myorder-title {
    color: black;
    font-size: 28px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .myorder-paidunpaid-switcher {
    display: flex;
    border-color: transparent;
    border-radius: 29px;
    margin-bottom: 16px;
    .myorder-switcher-button {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(33, 67, 102, 1);
      font-size: 18px;
      font-weight: 600;
      border-radius: 100px;
      border-color: transparent;
      background-color: rgba(167, 196, 212, 1);
      padding: 8px 16px;
      cursor: pointer;
    }
    .button-active {
      background-color: rgba(167, 196, 212, 1);
    }
    .button-inactive {
      background-color: transparent;
    }
  }
  .myorder-order-selector {
    width: 100%;
    display: flex;
    padding: 8px 16px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 16px;
    .myorder-order-number {
      color: rgba(0, 0, 0, 1);
      flex-grow: 1;
      font-size: 16px;
      text-align: left;
      font-weight: 500;
      margin-right: 8px;
      margin-bottom: 0;
    }
    .myorder-selector-icon {
      position: relative;
      background: white;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }
  ul.myorder-tickets-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 24px;
    li.myorder-ticket {
      display: flex;
      font-size: 16px;
      font-weight: 500;
      color: black;
      border-radius: 4px;
      background-color: rgba(223, 223, 223, 1);
      padding: 8px 16px;
    }
    .myorder-banquet {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;
      border-color: transparent;
      background-color: rgba(223, 223, 223, 1);
      padding: 8px 16px;
      .myorder-banquet-content {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        border-color: transparent;
        margin-bottom: 4px;
        .myorder-banquet-icon {
          width: 28px;
          height: 28px;
        }
        .myorder-banquet-text {
          color: rgba(0, 0, 0, 1);
          flex-grow: 1;
          font-size: 16px;
          text-align: left;
          font-weight: 500;
        }
        .myorder-banquet-number {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-style: Bold;
          font-weight: 700;
          color: rgba(255, 255, 255, 1);
          border-radius: 14px;
          background-color: black;
        }
      }
      .myorder-banquet-note {
        color: rgba(120, 120, 120, 1);
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .myorder-line {
    width: 100%;
    margin-bottom: 24px;
  }
  .myorder-new-order {
    width: 100%;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    color: black;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15000000596046448);
    border-color: transparent;
    border-radius: 70px;
    background-color: rgba(255, 219, 130, 1);
    padding: 4px;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .myorder-container {
    width: 100%;
    position: relative;
    top: 0px;
    z-index: 0;
    ul.myorder-tickets-list {
      li.myorder-ticket {
        display: none;
      }
    }
  }
}
</style>
