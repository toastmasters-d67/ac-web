<script>
import { reactive } from "vue";

export default {
  props: {
    state: {
      type: Object,
      default: function () {
        return {
          early: 0,
          double: 0,
          first: 0,
          second: 0,
          banquet: 0,
        };
      },
    },
    name: {
      type: Object,
      default: function () {
        return {
          early: "",
          double: "",
          first: "",
          second: "",
          banquet: "",
        };
      },
    },
    price: {
      type: Object,
      default: function () {
        return {
          early: 0,
          double: 0,
          first: 0,
          second: 0,
          banquet: 0,
        };
      },
    },
    setEarly: {
      type: Function,
    },
    setDouble: {
      type: Function,
    },
    setFirst: {
      type: Function,
    },
    setSecond: {
      type: Function,
    },
    setBanquet: {
      type: Function,
    },
  },
  data() {
    const state = reactive({
      early: 0,
      double: 0,
      first: 0,
      second: 0,
      banquet: 0,
    });
    const name = reactive({
      early: "Early Bird 2 Day Pass",
      double: "2 Day Pass",
      first: "First Day Pass",
      second: "Second Day Pass",
      banquet: "Dinner Banquet",
    });
    const price = reactive({
      early: process.env.VUE_APP_TICKET_EARLY,
      double: process.env.VUE_APP_TICKET_DOUBLE,
      first: process.env.VUE_APP_TICKET_FIRST,
      second: process.env.VUE_APP_TICKET_SECOND,
      banquet: process.env.VUE_APP_TICKET_BANQUET,
    });
    const detail = reactive({
      early:
        "The lowest price you can get - first come, first serve. Includes access to both conference days at 2023 Annual Conference, souvenirs and dinner party on site.",
      double: "",
      first: "",
      second: "",
      banquet:
        "The first day of conference, we provide a night banquet for all our guests who wants to attend.",
    });
    const amount = ref(computed(() => this.getAmount()));
    const numbers = reactive(Array.from(Array(11).keys()));
    const newebpay = ref(process.env.VUE_APP_NEWEBPAY);
    const content = ref("");
    const sha = ref("");
    const merchantID = ref("");
    const version = ref("");
    return {
      state,
      name,
      price,
      detail,
      amount,
      numbers,
    };
  },
};
</script>

<template>
  <div class="picker-container">
    <section id="picker" class="picker-ticket-container">
      <span class="picker-expiring">Until Mar 19, 2023</span>
      <div class="picker-row">
        <div class="picker-ticket">
          <div class="picker-ticket-title">
            <img
              src="@/assets/icon/cart/ticket-icon.svg"
              class="picker-ticket-icon"
              alt="ticket-icon"
            />
            <span class="picker-name">{{ name.early }}</span>
            <span class="picker-price">NT$ {{ price.early }}</span>
          </div>
          <span class="picker-ticket-detail">{{ detail.early }}</span>
        </div>
        <select v-model.number="state.early" class="picker-select">
          <option
            v-for="(option, index) in numbers"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <!-- <span>{{ state.early }}</span> -->
      </div>
      <div class="picker-row">
        <div class="picker-ticket">
          <div class="picker-ticket-title">
            <img
              src="@/assets/icon/cart/ticket-icon.svg"
              class="picker-ticket-icon"
              alt="ticket-icon"
            />
            <span class="picker-name">{{ name.double }}</span>
            <span class="picker-price">NT$ {{ price.double }}</span>
          </div>
          <span class="picker-ticket-detail">{{ detail.double }}</span>
        </div>
        <select v-model.number="state.double" class="picker-select">
          <option
            v-for="(option, index) in numbers"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <!-- <span>{{ state.double }}</span> -->
      </div>
      <div class="picker-row">
        <div class="picker-ticket">
          <div class="picker-ticket-title">
            <img
              src="@/assets/icon/cart/ticket-icon.svg"
              class="picker-ticket-icon"
              alt="ticket-icon"
            />
            <span class="picker-name">{{ name.first }}</span>
            <span class="picker-price">NT$ {{ price.first }}</span>
          </div>
          <span class="picker-ticket-detail">{{ detail.first }}</span>
        </div>
        <select v-model.number="state.first" class="picker-select">
          <option
            v-for="(option, index) in numbers"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <!-- <span>{{ state.first }}</span> -->
      </div>
      <div class="picker-row">
        <div class="picker-ticket">
          <div class="picker-ticket-title">
            <img
              src="@/assets/icon/cart/ticket-icon.svg"
              class="picker-ticket-icon"
              alt="ticket-icon"
            />
            <span class="picker-name">{{ name.second }}</span>
            <span class="picker-price">NT$ {{ price.second }}</span>
          </div>
          <span class="picker-ticket-detail">{{ detail.second }}</span>
        </div>
        <select v-model.number="state.second" class="picker-select">
          <option
            v-for="(option, index) in numbers"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <!-- <span>{{ state.second }}</span> -->
      </div>
      <span class="picker-additional">Additional Banquet Ticket</span>
      <hr class="picker-divider" />
      <div class="picker-row">
        <div class="picker-ticket">
          <div class="picker-ticket-title">
            <img
              src="@/assets/icon/cart/banquet-icon.svg"
              class="picker-ticket-icon"
              alt="banquet-icon"
            />
            <span class="picker-name">{{ name.banquet }}</span>
            <span class="picker-price">NT$ {{ price.banquet }}</span>
          </div>
          <span class="picker-ticket-detail">{{ detail.banquet }}</span>
        </div>
        <select v-model.number="state.banquet" class="picker-select">
          <option
            v-for="(option, index) in numbers"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
        <!-- <span>{{ state.banquet }}</span> -->
      </div>
    </section>
    <div class="picker-summary-container">
      <span class="picker-summary-title">Order summary</span>
      <div class="picker-summary-items">
        <span>2 Day Pass x2</span>
        <span>NT$ 4,400</span>
      </div>
      <hr class="picker-summary-divider" />
      <div class="picker-summary-amount">
        <span>Total</span>
        <span>NT$ {{ amount }}</span>
      </div>
      <button class="picker-button" @click="this.checkout">Check out</button>
      <form id="blue" :action="this.newebpay" method="POST">
        <input v-model="merchantID" type="hidden" name="MerchantID" />
        <input v-model="version" type="hidden" name="Version" />
        <input v-model="content" type="hidden" name="TradeInfo" />
        <input v-model="sha" type="hidden" name="TradeSha" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.picker-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 20px;
  .picker-ticket-container {
    width: 55.07%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px;
    padding-top: 70px;
    padding-bottom: 130px;
    padding-left: 7%;
    padding-right: 7%;
    .picker-expiring {
      display: flex;
      width: fit-content;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #52555a;
      background: linear-gradient(
          0deg,
          rgba(255, 204, 77, 0.7),
          rgba(255, 204, 77, 0.7)
        ),
        #ffffff;
      box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
      border-radius: 1000px;
      padding: 5px 12px;
      margin-bottom: 8px;
    }
    .picker-row {
      display: flex;
      align-items: center;
      gap: 64px;
      margin-bottom: 40px;
      .picker-ticket {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        .picker-ticket-title {
          position: relative;
          display: flex;
          text-align: start;
          width: 100%;
          .picker-ticket-icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }
          .picker-name {
            color: black;
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            display: flex;
          }
          .picker-price {
            min-width: 100px;
            position: relative;
            right: 0;
            color: #004165;
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            margin-left: auto;
          }
        }
        .picker-ticket-detail {
          display: flex;
          text-align: start;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #5e5e5e;
        }
      }
      .picker-select {
        width: 75px;
        color: black;
        background: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;

        border: 0.5px solid black;
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 8px 16px;
        gap: 12px;
      }
    }
    .picker-additional {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: flex-start;
      color: #5e5e5e;
      margin-bottom: 8px;
    }
    .picker-divider {
      width: 100%;
      border: 1px solid #cecece;
      margin-bottom: 16px;
    }
  }
  .picker-summary-container {
    width: 26.875%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 4px;
    padding: 40px;
    .picker-summary-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      display: flex;
      align-self: flex-start;
      color: black;
      margin-bottom: 40px;
    }
    .picker-summary-divider {
      width: 100%;
      border: 1px solid #cecece;
      margin-bottom: 16px;
    }
    .picker-summary-items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #53595a;
      margin-bottom: 16px;
    }
    .picker-summary-amount {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: black;
      margin-bottom: 60px;
    }
    .picker-button {
      width: 100%;
      color: white;
      background: #214366;
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      text-align: center;
      border-radius: 38px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      padding: 12px 24px;
      gap: 10px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .picker-container {
    flex-direction: column;
    align-items: center;
    .picker-ticket-container {
      width: 91.47%;
      .picker-row {
        gap: 32px;
      }
    }
    .picker-summary-container {
      width: 91.47%;
    }
  }
}
</style>
