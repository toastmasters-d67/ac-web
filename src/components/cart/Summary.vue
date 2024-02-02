<script lang="ts">
import { computed, reactive, ref } from "vue";
import axios from "axios";

export async function submit(token, target) {
  const base = import.meta.env.VITE_API;
  const url = `${base}/order`;
  const callback = `${base}/callback`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post(url, {
        amount: target.amount,
        email: "",
        description: `${import.meta.env.VITE_YEAR} Annual Conference`,
        url: base,
        callback: callback,
        early: target.state.early,
        double: target.state.double,
        first: target.state.first,
        second: target.state.second,
        banquet: target.state.banquet,
      })
      .then((response) => target.setValues(response))
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          this.$router.push("login");
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log(error);
  }
}

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
  },
  data() {
    const amount = ref(computed(() => this.getAmount()));
    const url = ref("");
    const content = ref("");
    const sha = ref("");
    const merchantID = ref("");
    const version = ref("");
    return {
      amount,
      url,
      content,
      sha,
      merchantID,
      version,
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
        sum += this.state[key] * this.price[key];
      });
      return sum;
    },
    setValues(response) {
      const { merchantID, version, content, sha, url } = response.data;
      this.merchantID = merchantID;
      this.version = version;
      this.content = content;
      this.sha = sha;
      this.url = url;
      setTimeout(function () {
        document.getElementById("blue").submit();
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="summary-container">
    <section id="summary">
      <span class="summary-title">{{ $t("cart.summary.order-sum") }}</span>
      <div class="summary-items" v-if="state.early">
        <span>{{ $t("cart.picker.early.name") }} x{{ state.early }}</span>
        <span>NT$ {{ subTotal.early }}</span>
      </div>
      <div class="summary-items" v-if="state.double">
        <span>{{ $t("cart.picker.double.name") }} x{{ state.double }}</span>
        <span>NT$ {{ subTotal.double }}</span>
      </div>
      <div class="summary-items" v-if="state.first">
        <span>{{ $t("cart.picker.first.name") }} x{{ state.first }}</span>
        <span>NT$ {{ subTotal.first }}</span>
      </div>
      <div class="summary-items" v-if="state.second">
        <span>{{ $t("cart.picker.second.name") }} x{{ state.second }}</span>
        <span>NT$ {{ subTotal.second }}</span>
      </div>
      <div class="summary-items" v-if="state.banquet">
        <span>{{ $t("cart.picker.banquet.name") }} x{{ state.banquet }}</span>
        <span>NT$ {{ subTotal.banquet }}</span>
      </div>
      <hr class="summary-divider" />
      <div class="summary-amount">
        <span>{{ $t("cart.summary.total") }}</span>
        <span>NT$ {{ amount }}</span>
      </div>
      <button class="picker-button" @click="this.checkout">
        {{ $t("cart.summary.checkout") }}
      </button>
      <form id="blue" :action="this.url" method="POST">
        <input v-model="merchantID" type="hidden" name="MerchantID" />
        <input v-model="version" type="hidden" name="Version" />
        <input v-model="content" type="hidden" name="TradeInfo" />
        <input v-model="sha" type="hidden" name="TradeSha" />
      </form>
    </section>
  </div>
</template>

<style scoped lang="scss">
.summary-container {
  width: 26.875%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 40px;

  .summary-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    display: flex;
    align-self: flex-start;
    color: black;
    margin-bottom: 40px;
  }

  .summary-divider {
    width: 100%;
    border: 1px solid #cecece;
    margin-bottom: 16px;
  }

  .summary-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #53595a;
    margin-bottom: 16px;
  }

  .summary-amount {
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

@media screen and (max-width: 768px) {
  .summary-container {
    width: 91.47%;
    padding: 12px 16px;

    .summary-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 24px;
    }

    .summary-items {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 8px;
    }

    .summary-divider {
      margin-bottom: 8px;
    }

    .summary-amount {
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
</style>
