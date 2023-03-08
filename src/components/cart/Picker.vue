<script>
import { computed, reactive, ref } from "vue";
import axios from "axios";

export async function submit(token, target) {
  const base = process.env.VUE_APP_API;
  const url = `${base}/order`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post(url, {
        amount: target.amount,
        email: "",
        description: "2023 Annual Conference",
        url: base,
        callback: process.env.VUE_APP_CALLBACK,
        early: target.state.early,
        double: target.state.double,
        first: target.state.first,
        second: target.state.second,
        banquet: target.state.banquet,
      })
      .then((response) => target.setValues(response))
      .catch((error) => {
        console.log(error.toJSON());
      });
  } catch (error) {
    console.log(error);
  }
}

export default {
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
      amount,
      numbers,
      newebpay,
      content,
      sha,
      merchantID,
      version,
    };
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
    <section id="picker">
      <div class="picker-row">
        <span class="picker-title">{{ name.early }}</span>
        <span class="picker-price">NT$ {{ price.early }}</span>
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
        <span class="picker-title">{{ name.double }}</span>
        <span class="picker-price">NT$ {{ price.double }}</span>
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
        <span class="picker-title">{{ name.first }}</span>
        <span class="picker-price">NT$ {{ price.first }}</span>
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
        <span class="picker-title">{{ name.second }}</span>
        <span class="picker-price">NT$ {{ price.second }}</span>
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

      <div class="picker-row">
        <span class="picker-title">{{ name.banquet }}</span>
        <span class="picker-price">NT$ {{ price.banquet }}</span>
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

      <br />
      <div class="picker-row">
        <!-- <span>amount</span>
        <span>{{ amount }}</span> -->
        <button class="picker-button" @click="this.checkout">Check out</button>
      </div>

      <br />
      <form id="blue" :action="this.newebpay" method="POST">
        <input v-model="merchantID" type="hidden" name="MerchantID" />
        <input v-model="version" type="hidden" name="Version" />
        <input v-model="content" type="hidden" name="TradeInfo" />
        <input v-model="sha" type="hidden" name="TradeSha" />
      </form>
    </section>
  </div>
</template>

<style scoped lang="scss">
.picker-container {
  width: 100%;
  // width: 55.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: white;
  border-color: transparent;
  padding-top: 100px;
  padding-bottom: 100px;
  // margin: 0 auto;
  // margin-top: 100px;
  // margin-bottom: 100px;
  .picker-row {
    position: relative;
    width: 600px;
    // display: flex;
    // flex-direction: row;
    // flex-direction: column;
    // align-items: flex-start;
    margin-bottom: 20px;
    .picker-title {
      // width: 500px;
      color: black;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      // display: flex;
      // align-items: center;
    }
    .picker-price {
      color: #004165;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      // display: flex;
      // align-items: center;
      text-align: center;
      // margin-left: 25px;
      margin-left: 35px;
      // margin-left: 50px;
    }
    .picker-select {
      position: absolute;
      right: 10px;
      width: 75px;
      // width: 68px;
      // height: 36px;
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
    .picker-button {
      width: 300px;
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
</style>
