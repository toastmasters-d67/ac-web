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
  computed: {
    banquetNumbers: {
      get() {
        const maxBanquetNumber =
          this.state.double + this.state.first + this.state.second;
        return reactive(Array.from(Array(maxBanquetNumber + 1).keys()));
      },
    },
  },
  data() {
    const numbers = reactive(Array.from(Array(31).keys()));
    return {
      numbers,
    };
  },
};
</script>

<template>
  <section id="picker" class="picker-container">
    <div class="picker-row">
      <div class="picker-ticket">
        <div class="picker-title">
          <img
            src="@/assets/icon/cart/ticket-icon.svg"
            class="picker-icon"
            alt="ticket-icon"
          />
          <span class="picker-name">{{ $t("cart.picker.early.name") }}</span>
          <span class="picker-price">
            NT$ {{ $t("cart.picker.early.price") }}
          </span>
        </div>
        <span class="picker-note">{{ $t("cart.picker.early.note") }}</span>
      </div>
      <span class="picker-sold-out">{{ $t("cart.picker.sold-out") }}</span>
    </div>
    <div class="picker-row">
      <div class="picker-ticket">
        <div class="picker-title">
          <img
            src="@/assets/icon/cart/ticket-icon.svg"
            class="picker-icon"
            alt="ticket-icon"
          />
          <span class="picker-name">{{ $t("cart.picker.double.name") }}</span>
          <span class="picker-price">
            NT$ {{ $t("cart.picker.double.price") }}
          </span>
        </div>
      </div>
      <select
        :value="state.double"
        @change="setDouble($event)"
        class="picker-select"
      >
        <option v-for="(option, index) in numbers" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="picker-row">
      <div class="picker-ticket">
        <div class="picker-title">
          <img
            src="@/assets/icon/cart/ticket-icon.svg"
            class="picker-icon"
            alt="ticket-icon"
          />
          <span class="picker-name">{{ $t("cart.picker.first.name") }}</span>
          <span class="picker-price">
            NT$ {{ $t("cart.picker.first.price") }}
          </span>
        </div>
      </div>
      <select
        :value="state.first"
        @change="setFirst($event)"
        class="picker-select"
      >
        <option v-for="(option, index) in numbers" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="picker-row">
      <div class="picker-ticket">
        <div class="picker-title">
          <img
            src="@/assets/icon/cart/ticket-icon.svg"
            class="picker-icon"
            alt="ticket-icon"
          />
          <span class="picker-name">{{ $t("cart.picker.second.name") }}</span>
          <span class="picker-price">
            NT$ {{ $t("cart.picker.second.price") }}
          </span>
        </div>
      </div>
      <select
        :value="state.second"
        @change="setSecond($event)"
        class="picker-select"
      >
        <option v-for="(option, index) in numbers" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <span class="picker-additional">{{ $t("cart.picker.additional") }}</span>
    <hr class="picker-divider" />
    <div class="picker-row">
      <div class="picker-ticket">
        <div class="picker-title">
          <img
            src="@/assets/icon/cart/banquet-icon.svg"
            class="picker-icon"
            alt="banquet-icon"
          />
          <span class="picker-name">{{ $t("cart.picker.banquet.name") }}</span>
          <span class="picker-price">
            NT$ {{ $t("cart.picker.banquet.price") }}
          </span>
        </div>
        <span class="picker-note">{{ $t("cart.picker.banquet.note") }}</span>
      </div>
      <select
        :value="state.banquet"
        @change="setBanquet($event)"
        class="picker-select"
      >
        <option
          v-for="(option, index) in banquetNumbers"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </section>
</template>

<style scoped lang="scss">
.picker-container {
  width: 55.07%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  padding-top: 70px;
  padding-bottom: 130px;
  padding-left: 7%;
  padding-right: 7%;
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
      .picker-title {
        position: relative;
        display: flex;
        text-align: start;
        width: 100%;
        .picker-icon {
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
      .picker-note {
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
    .picker-sold-out {
      width: 100px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: black;
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
@media screen and (max-width: 768px) {
  .picker-container {
    width: 91.47%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 4.267%;
    padding-right: 4.267%;
    .picker-row {
      gap: 22px;
      margin-bottom: 35px;
      .picker-ticket {
        .picker-title {
          .picker-icon {
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
        .picker-note {
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
      .picker-sold-out {
        width: 60px;
        font-size: 14px;
        line-height: 17px;
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
}
</style>
