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
  computed: {
    subTotal: {
      get() {
        return reactive({
          early: this.state.early * this.price.early,
          double: this.state.double * this.price.double,
          first: this.state.first * this.price.first,
          second: this.state.second * this.price.second,
          banquet: this.state.banquet * this.price.banquet,
        });
      },
    },
  },
  methods: {
    checkout(event) {
      event.preventDefault();
      if (this.amount) {
        const token = localStorage.getItem("token");
        if (!token || !token.length) {
          this.$router.push("login");
        }
        console.log("token =", token);
        submit(token, this);
      }
    },
    getAmount() {
      let sum = 0;
      Object.keys(this.state).forEach((key) => {
        // console.log("key =", key);
        // console.log("this.state[key] =", this.state[key]);
        // console.log("this.price[key] =", this.price[key]);
        sum += this.state[key] * this.price[key];
        // console.log("sum =", sum);
      });
      console.log("sum =", sum);
      return sum;
    },
    setValues(response) {
      console.log("setValues(): ", response);
      const { merchantID, version, content, sha } = response.data;
      console.log("setValues() content: ", content);
      console.log("setValues() sha: ", sha);
      this.merchantID = merchantID;
      this.version = version;
      this.content = content;
      this.sha = sha;
      setTimeout(function () {
        console.log("Executed after 1 second");
        document.getElementById("blue").submit();
      }, 1000);
    },
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
      </div>
    </section>
    <div class="picker-summary-container">
      <span class="picker-summary-title">Order summary</span>
      <div class="picker-summary-items" v-if="state.early">
        <span>{{ name.early }} x{{ state.early }}</span>
        <span>NT$ {{ subTotal.early }}</span>
      </div>
      <div class="picker-summary-items" v-if="state.double">
        <span>{{ name.double }} x{{ state.double }}</span>
        <span>NT$ {{ subTotal.double }}</span>
      </div>
      <div class="picker-summary-items" v-if="state.first">
        <span>{{ name.first }} x{{ state.first }}</span>
        <span>NT$ {{ subTotal.first }}</span>
      </div>
      <div class="picker-summary-items" v-if="state.second">
        <span>{{ name.second }} x{{ state.second }}</span>
        <span>NT$ {{ subTotal.second }}</span>
      </div>
      <div class="picker-summary-items" v-if="state.banquet">
        <span>{{ name.banquet }} x{{ state.banquet }}</span>
        <span>NT$ {{ subTotal.banquet }}</span>
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
    margin-top: 20px;
    margin-bottom: 9px;
    gap: 16px;
    .picker-ticket-container {
      width: 91.47%;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 4.267%;
      padding-right: 4.267%;
      .picker-expiring {
        font-size: 12px;
        line-height: 15px;
      }
      .picker-row {
        gap: 22px;
        margin-bottom: 35px;
        .picker-ticket {
          .picker-ticket-title {
            .picker-ticket-icon {
              width: 20px;
              height: 20px;
            }
            .picker-name {
              font-size: 14px;
              line-height: 17px;
            }
            .picker-price {
              min-width: 67px;
              font-size: 14px;
              line-height: 17px;
            }
          }
          .picker-ticket-detail {
            font-size: 12px;
            line-height: 15px;
          }
        }
        .picker-select {
          font-size: 14px;
          line-height: 17px;
          padding: 8px;
          padding-left: 12px;
        }
      }
      .picker-additional {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 4px;
      }
      .picker-divider {
        width: 100%;
        border: 1px solid #cecece;
        margin-top: 0px;
        margin-bottom: 24px;
      }
    }
    .picker-summary-container {
      width: 91.47%;
      padding: 12px 16px;
      .picker-summary-title {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 24px;
      }
      .picker-summary-items {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 8px;
      }
      .picker-summary-divider {
        margin-bottom: 8px;
      }
      .picker-summary-amount {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;
      }
      .picker-button {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>
