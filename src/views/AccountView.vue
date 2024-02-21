<template>
  <div>
    <Marquee :sentences="[$t('account.marquee.notice')]" v-once />
    <article id="account" class="account-container">
      <div class="account-row">
        <header class="account-title">{{ $t("account.title") }}</header>
      </div>
      <table id="tableComponent" class="table table-bordered table-striped">
        <thead class="table-head">
          <tr>
            <th v-for="field in fields" :key="field">
              {{ field }}
              <i
                v-if="field == $t('account.status')"
                class="pi pi-question-circle"
                @click="$refs.popup.open()"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>
              <span :class="getStatusClass(item)">
                {{ item.statusText }}
              </span>
            </td>
            <td>$ {{ item.amount }}</td>
            <td>
              <button
                v-if="item.button.length"
                statusText
                class="account-button"
                @click="browseOrder(item.id)"
              >
                {{ item.button }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="rwd-account" v-for="item in items" :key="item">
        <div class="rwd-title">
          <div v-for="field in fields" :key="field">
            {{ field }}
          </div>
        </div>
        <div class="rwd-content">
          <div>{{ item.id }}</div>
          <div>{{ item.date }}</div>
          <div :class="getStatusClass(item)">{{ item.statusText }}</div>
          <div>$ {{ item.amount }}</div>
          <button
            v-if="item.button.length"
            class="account-button"
            @click="browseOrder(item.id)"
          >
            {{ item.button }}
          </button>
        </div>
      </div>
    </article>
    <PopupModal ref="popup">
      <div class="popup-container">
        <div class="popup-title">
          {{ $t("account.popup.title") }}
          <i
            class="pi pi-times popup-close"
            @click="$refs.popup.close()"
          />
        </div>
        <div class="popup-content">
          <span class="popup-status complete">
            {{ $t("account.complete") }}
          </span>
          <span>{{ $t("account.popup.complete-description") }}</span>
        </div>
        <div class="popup-content">
          <span class="popup-status pending">
            {{ $t("account.pending") }}
          </span>
          {{ $t("account.popup.pending-description") }}
        </div>
        <div class="popup-content">
          <span class="popup-status unpaid">
            {{ $t("account.unpaid") }}
          </span>
          <span class="popup-description">
            {{ $t("account.popup.unpaid-description") }}
          </span>
        </div>
      </div>
    </PopupModal>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import Marquee from '@/components/app/AppMarquee.vue'
import PopupModal from '@/components/app/AppPopupModal.vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const fields = reactive([
  t('account.number'),
  t('account.date'),
  t('account.status'),
  t('account.amount'),
  t('account.attendee')
])

const items = reactive([])

function getDate (orderId: string): string {
  try {
    return new Date(+orderId * 1000).toISOString().slice(0, 10)
  } catch (error) {
    if (error.message === 'Invalid time value') {
      const arr = [
        orderId.slice(0, 4),
        orderId.slice(4, 6),
        orderId.slice(6, 8)
      ]
      return arr.join('-')
    }
    return ''
  }
}

function getStatusClass (item: never): string {
  return 'account-status ' + item.status.toLocaleLowerCase()
}

function browseOrder (id: any): void {
  router.push(`order/${id}`)
}

async function getUser (token: string): Promise<void> {
  const url = `${import.meta.env.VITE_API}/user`
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await axios.get(url)
    if (
      response?.data &&
      'orders' in response.data &&
      response.data.orders?.length
    ) {
      response.data.orders.forEach((order) => {
        const item = {
          id: order.orderId,
          amount: order.amount,
          status: 'unpaid',
          statusText: t('account.unpaid'),
          button: '',
          date: getDate(order.orderId)
        }
        if (order.tickets.length) {
          item.status = 'complete'
          item.statusText = t('account.complete')
          item.button = t('account.view')
        } else if (order.transactions.length) {
          const transaction = order.transactions.find(
            (x) => x.status === 'SUCCESS'
          )
          if (transaction && transaction.amount === order.amount) {
            item.status = 'pending'
            item.statusText = t('account.pending')
            item.button = t('account.edit')
          }
        }
        items.push(item)
      })
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('token')
      router.push('/login')
    } else {
      console.error(error)
    }
  }
}

onMounted(() => {
  if (items.length === 0) {
    const token = localStorage.getItem('token')
    if (!token?.length) {
      router.push('/login')
    } else {
      getUser(token)
    }
  }
  window.scrollTo({ top: 0 })
})
</script>

<style scoped lang="scss">
.account-container {
  width: 80%;
  border-color: transparent;
  background-color: transparent;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0 auto;

  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }

  .account-row {
    position: relative;
    margin-bottom: 20px;

    .account-title {
      color: black;
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      text-align: left;
    }

    .account-button {
      position: absolute;
      top: 0px;
      right: 10px;
      width: 189px;
      background: #ffdb82;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      border-color: transparent;
      border-radius: 70px;
      box-shadow: 0px 4px 16px -12px rgba(0, 0, 0, 0.15);
      text-align: center;
      padding: 8px 24px;
      cursor: pointer;

      .plus {
        font-size: 25px;
        line-height: 1;
        vertical-align: bottom;
      }
    }
  }

  .account-status {
    border-radius: 4px;
    padding: 4px 12px;
    margin-bottom: 30px;
  }

  .unpaid {
    color: #e31c1c;
    background: #ffd3cd;
  }

  .pending {
    color: #dc6b04;
    background: #ffe3b9;
  }

  .complete {
    color: #109f43;
    background: #cdddc0;
  }

  table {
    border-collapse: collapse;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
    margin: 0 auto;
    margin-top: 30px;

    th {
      color: white;
      background-color: #004165;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      width: 25vw;
      height: 75px;

      i {
        width: 20px;
        height: 20px;
      }
    }

    td {
      color: #5e5e5e;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      background-color: white;
      width: 25vw;
      height: 65px;
    }

    tr {
      border-bottom: 1px solid #dddddd;
    }

    tr:nth-of-type(even) td {
      background-color: #f3f3f3;
    }
  }

  .account-button {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: black;
    box-sizing: border-box;
    padding: 8px 16px;
    background: white;
    border: 1px solid #bcbcbc;
    border-radius: 70px;
    cursor: pointer;
  }

  .rwd-account {
    display: none;
  }
}

.popup-container {
  width: 60.28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin: auto;

  .popup-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #004165;

    .popup-close {
      padding: 4px;
    }
  }

  .popup-content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    .popup-status {
      font-size: 18px;
      line-height: 22px;
      border-radius: 4px;
      padding: 4px 12px;
      margin-right: 16px;
    }

    .complete {
      color: #109f43;
      background: #cdffc0;
    }

    .pending {
      color: #dc6b04;
      background: #ffe3b9;
    }

    .unpaid {
      color: #e31c1c;
      background: #ffd3cd;
    }

    .popup-description {
      width: fit-content;
      display: flex;
      flex: 1;
    }
  }
}

@media screen and (max-width: 768px) {
  .account-container {
    padding-top: 20px;
    padding-bottom: 20px;

    .account-title {
      font-size: 18px !important;
    }

    .account-button {
      font-size: 16px !important;
      padding: 5.5px 20px !important;
      width: auto !important;
    }

    table {
      display: none;
    }

    .rwd-account {
      background: white;
      border-radius: 4px;
      padding: 12px 12px 0 12px;
      display: flex !important;
      justify-content: space-between;
      margin-bottom: 16px;
      box-shadow: 0px 4px 16px -12px rgba(0, 0, 0, 0.15);

      .rwd-title {
        text-align: left;

        div {
          margin-bottom: 16px;
          font-weight: 800;
        }
      }

      .rwd-content {
        text-align: right;

        div {
          margin-bottom: 16px;
          color: #868686;
        }

        .account-status {
          margin-bottom: 8px;
        }

        .unpaid {
          color: #e31c1c;
          background: #ffd3cd;
        }

        .pending {
          color: #dc6b04;
          background: #ffe3b9;
        }

        .complete {
          color: #109f43;
          background: #cdddc0;
        }

        .account-button {
          font-size: 14px;
          line-height: 17px;
          padding: 4px 16px;
        }
      }
    }
  }

  .popup-container {
    width: 91.47%;
    gap: 16px;
    padding: 24px 16px;

    .popup-title {
      text-align: start;
      font-size: 18px;
      line-height: 22px;
      margin-top: 32px;
      margin-bottom: 8px;

      .popup-close {
        padding: 0px;
        transform: translateY(-32px);
      }
    }

    .popup-content {
      flex-direction: column;
      align-items: flex-start;
      font-size: 14px;
      line-height: 17px;

      .popup-status {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
