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
        <span>NT$ {{ totalAmount }}</span>
      </div>
      <button class="picker-button" @click="checkout">
        {{ $t("cart.summary.checkout") }}
      </button>
      <form id="blue" :action="url" method="POST">
        <input v-model="merchantID" type="hidden" name="MerchantID" />
        <input v-model="version" type="hidden" name="Version" />
        <input v-model="content" type="hidden" name="TradeInfo" />
        <input v-model="sha" type="hidden" name="TradeSha" />
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const props = defineProps({
  state: {
    type: Object,
    default: () => ({
      early: 0,
      double: 0,
      first: 0,
      second: 0,
      banquet: 0
    })
  },
  name: {
    type: Object,
    default: () => ({
      early: '',
      double: '',
      first: '',
      second: '',
      banquet: ''
    })
  },
  price: {
    type: Object,
    default: () => ({
      early: 0,
      double: 0,
      first: 0,
      second: 0,
      banquet: 0
    })
  }
})

const router = useRouter()

const totalAmount = computed(() => {
  let sum = 0
  for (const key in props.state) {
    sum += props.state[key] * props.price[key]
  }
  return sum
})

const subTotal = computed(() => ({
  early: props.state.early * props.price.early,
  double: props.state.double * props.price.double,
  first: props.state.first * props.price.first,
  second: props.state.second * props.price.second,
  banquet: props.state.banquet * props.price.banquet
}))

const url = ref('')
const content = ref('')
const sha = ref('')
const merchantID = ref('')
const version = ref('')

async function checkout (event) {
  event.preventDefault()
  if (totalAmount.value) {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('login')
      return
    }
    await submit(token)
  }
}

async function submit (token) {
  const base = import.meta.env.VITE_API
  const apiUrl = `${base}/order`
  const callbackUrl = `${base}/callback`

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  try {
    const response = await axios.post(apiUrl, {
      amount: totalAmount.value,
      email: '',
      description: `${import.meta.env.VITE_YEAR} Annual Conference`,
      url: base,
      callback: callbackUrl,
      early: props.state.early,
      double: props.state.double,
      first: props.state.first,
      second: props.state.second,
      banquet: props.state.banquet
    })

    setValues(response.data)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('token')
      router.push('login')
    } else {
      console.error(error)
    }
  }
}

function setValues (data) {
  merchantID.value = data.merchantID
  version.value = data.version
  content.value = data.content
  sha.value = data.sha
  url.value = data.url

  onMounted(() => {
    setTimeout(() => {
      document.getElementById('blue')?.submit()
    }, 1000)
  })
}
</script>

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
