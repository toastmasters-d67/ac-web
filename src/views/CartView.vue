<template>
  <div>
    <Marquee :sentences="[t('account.marquee.notice')]" v-once />
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

<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import Marquee from '@/components/app/AppMarquee.vue'
import Picker from '@/components/cart/CartPicker.vue'
import Summary from '@/components/cart/CartSummary.vue'

const { t } = useI18n()

const state = reactive({
  early: 0,
  double: 0,
  first: 0,
  second: 0,
  banquet: 0
})

const name = {
  early: '',
  double: '',
  first: '',
  second: '',
  banquet: ''
}

const price = {
  early: import.meta.env.VITE_TICKET_EARLY,
  double: import.meta.env.VITE_TICKET_DOUBLE,
  first: import.meta.env.VITE_TICKET_FIRST,
  second: import.meta.env.VITE_TICKET_SECOND,
  banquet: import.meta.env.VITE_TICKET_BANQUET
}

const updateBanquet = (): void => {
  const sum = state.double + state.first + state.second
  if (state.banquet > sum) {
    state.banquet = sum
  }
}

const setEarly = (event: { target: { value: string | number } }): void => {
  state.early = +event.target.value
}
const setDouble = (event: { target: { value: string | number } }): void => {
  state.double = +event.target.value
  updateBanquet()
}
const setFirst = (event: { target: { value: string | number } }): void => {
  state.first = +event.target.value
  updateBanquet()
}
const setSecond = (event: { target: { value: string | number } }): void => {
  state.second = +event.target.value
  updateBanquet()
}
const setBanquet = (event: { target: { value: string | number } }): void => {
  let value = +event.target.value
  const sum = state.double + state.first + state.second
  if (value > sum) {
    value = sum
  }
  state.banquet = value
}

onBeforeMount(() => {
  window.scrollTo({ top: 0 })
})
</script>

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
