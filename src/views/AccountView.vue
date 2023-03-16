<script>
import { reactive } from "vue";
import axios from "axios";

export async function getUser(token, target) {
  const url = `${process.env.VUE_APP_API}/user`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(url)
      .then(function (response) {
        if (
          response &&
          response.data &&
          "orders" in response.data &&
          response.data.orders &&
          response.data.orders.length
        ) {
          Array.from(response.data.orders).forEach((order) => {
            const item = {
              id: order.orderId,
              amount: order.amount,
              status: "pending",
              date: new Date(+order.orderId * 1000).toISOString().slice(0, 10),
            };
            if (order.transactions.length) {
              const transaction = order.transactions.find(
                (x) => x.status === "SUCCESS"
              );
              if (transaction && transaction.amount === order.amount) {
                item.status = "paid";
              }
            }
            target.items.push(item);
          });
        }
      })
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
  name: "AccountView",
  data() {
    const fields = reactive([
      this.$t("account.number"),
      this.$t("account.date"),
      this.$t("account.status"),
      this.$t("account.amount"),
    ]);
    const items = reactive([]);
    return {
      fields,
      items,
    };
  },
  methods: {
    getStatus(item) {
      if (item.status === "pending") {
        return this.$t("account.pending");
      } else if (item.status === "paid") {
        return this.$t("account.paid");
      }
      return "OK";
    },
  },
  created() {
    if (!this.items.length) {
      const token = localStorage.getItem("token");
      if (!token || !token.length) {
        this.$router.push("login");
      }
      getUser(token, this);
    }
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
  <div class="account-container">
    <article id="account" class="account-container">
      <div class="account-row">
        <header class="account-title">{{ $t("account.title") }}</header>
        <button class="account-button">
          <router-link to="/cart" class="">
            <span class="plus">+</span> {{ $t("account.new") }}
          </router-link>
        </button>
      </div>
      <table id="tableComponent" class="table table-bordered table-striped">
        <thead class="table-head">
          <tr>
            <th v-for="field in fields" :key="field" @click="sortTable(field)">
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>
              <span
                :class="item.status.toLocaleLowerCase()"
                v-text="getStatus(item)"
              >
              </span>
            </td>
            <td>$ {{ item.amount }}</td>
          </tr>
        </tbody>
      </table>
      <div class="rwd-account" v-for="item in items" :key="item">
        <div class="rwd-title">
          <div v-for="field in fields" :key="field" @click="sortTable(field)">
            {{ field }}
          </div>
        </div>
        <div class="rwd-content">
          <div>{{ item.id }}</div>
          <div>{{ item.date }}</div>
          <div
            :class="item.status.toLocaleLowerCase()"
            v-text="getStatus(item)"
          ></div>
          <div>$ {{ item.amount }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.account-container {
  width: 100%;
  border-color: transparent;
  background-color: transparent;
  padding-top: 100px;
  padding-bottom: 100px;
  a {
    color: black;
    text-decoration: none;
    border-color: transparent;
  }
  #account {
    width: 80%;
    margin: 0 auto;
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
        .plus {
          font-size: 25px;
          line-height: 1;
          vertical-align: bottom;
        }
      }
    }
    .paid {
      color: #dc6b04;
      background: #ffe3b9;
      border-radius: 4px;
      padding: 4px 12px;
      gap: 10px;
    }
    .ok {
      color: #109f43;
      background: #cdffc0;
      border-radius: 4px;
      padding: 4px 12px;
      gap: 10px;
    }
    table {
      border-collapse: collapse;
      border-radius: 10px 10px 0px 0px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
      margin: 0 auto;
      margin-top: 30px;
      th {
        color: white;
        background-color: #009879;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        width: 25vw;
        height: 75px;
      }
      td {
        color: #5e5e5e;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        background-color: white;
        width: 25vw;
        height: 50px;
      }
      tr {
        border-bottom: 1px solid #dddddd;
      }
      tr:nth-of-type(even) td {
        background-color: #f3f3f3;
      }
    }
    .rwd-account {
      display: none;
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
      background: #fff;
      border-radius: 4px;
      padding: 12px 12px 0 12px;
      display: flex !important;
      justify-content: space-between;
      margin-bottom: 16px;
      box-shadow: 0px 4px 16px -12px rgba(0, 0, 0, 0.15);
      .rwd-title {
        text-align: left;
        div {
          margin-bottom: 12px;
          font-weight: 800;
        }
      }
      .rwd-content {
        text-align: right;
        div {
          margin-bottom: 12px;
          color: #868686;
        }
        .ok,
        .paid {
          text-align: center;
        }
      }
    }
  }
}
</style>
