<script lang="ts">
import { reactive } from "vue";
import Marquee from "@/components/app/Marquee.vue";
import Picker from "@/components/cart/Picker.vue";
import Summary from "@/components/cart/Summary.vue";

export default {
  name: "CartView",
  components: {
    Marquee,
    Picker,
    Summary,
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
      early: import.meta.env.VITE_TICKET_EARLY,
      double: import.meta.env.VITE_TICKET_DOUBLE,
      first: import.meta.env.VITE_TICKET_FIRST,
      second: import.meta.env.VITE_TICKET_SECOND,
      banquet: import.meta.env.VITE_TICKET_BANQUET,
    });
    return {
      state,
      name,
      price,
    };
  },
  methods: {
    setEarly(event) {
      this.state.early = +event.target.value;
    },
    setDouble(event) {
      this.state.double = +event.target.value;
      this.updateBanquet();
    },
    setFirst(event) {
      this.state.first = +event.target.value;
      this.updateBanquet();
    },
    setSecond(event) {
      this.state.second = +event.target.value;
      this.updateBanquet();
    },
    setBanquet(event) {
      let value = +event.target.value;
      const sum = this.state.double + this.state.first + this.state.second;
      if (value > sum) {
        value = sum;
      }
      this.state.banquet = value;
    },
    updateBanquet() {
      const sum = this.state.double + this.state.first + this.state.second;
      if (this.state.banquet > sum) {
        this.state.banquet = sum;
      }
    },
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
  <div>
    <Marquee :sentences="[this.$t('account.marquee.notice')]" v-once />
    <article id="cart" class="cart-container">
      <Picker
        :state="state"
        :name="name"
        :price="price"
        :setEarly="setEarly"
        :setDouble="setDouble"
        :setFirst="setFirst"
        :setSecond="setSecond"
        :setBanquet="setBanquet"
        v-once
      />
      <Summary :state="state" :name="name" :price="price" v-once />
    </article>
  </div>
</template>

<style scoped lang="scss">
.cart-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  .cart-container {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 9px;
    gap: 16px;
  }
}
</style>
