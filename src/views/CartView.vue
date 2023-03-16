<script>
import { reactive } from "vue";
import Picker from "@/components/cart/Picker.vue";
import Summary from "@/components/cart/Summary.vue";

export default {
  name: "CartView",
  components: {
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
      early: process.env.VUE_APP_TICKET_EARLY,
      double: process.env.VUE_APP_TICKET_DOUBLE,
      first: process.env.VUE_APP_TICKET_FIRST,
      second: process.env.VUE_APP_TICKET_SECOND,
      banquet: process.env.VUE_APP_TICKET_BANQUET,
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
    },
    setFirst(event) {
      this.state.first = +event.target.value;
    },
    setSecond(event) {
      this.state.second = +event.target.value;
    },
    setBanquet(event) {
      let value = +event.target.value;
      const sum = this.state.double + this.state.first + this.state.second;
      if (value > sum) {
        value = sum;
      }
      this.state.banquet = value;
    },
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
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
