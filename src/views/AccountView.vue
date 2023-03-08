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
        if (response && response.data && "orders" in response.data) {
          Array.from(response.data.orders).forEach((order) => {
            console.log(order);
            let status = "Draft";
            if (order.transactions.length) {
              const transaction = order.transactions.find(
                (x) => x.status === "SUCCESS"
              );
              if (transaction && transaction.amount === order.amount) {
                status = "Pending";
              }
            }
            const item = {
              id: order.orderId,
              amount: order.amount,
              status: status,
              date: new Date(+order.orderId * 1000).toISOString().slice(0, 10),
            };
            target.items.push(item);
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

export default {
  name: "AccountView",
  data() {
    const fields = reactive(["Order number", "Date", "Status", "Amount"]);
    // const items = reactive([]);
    const items = reactive([
      {
        id: "1678129341",
        amount: 12533,
        status: "Draft",
        date: "2023-01-11",
      },
      {
        id: "1678149341",
        amount: 24533,
        status: "Pending",
        date: "2023-02-11",
      },
      {
        id: "1678169341",
        amount: 77533,
        status: "OK",
        date: "2023-04-11",
      },
    ]);
    return {
      fields,
      items,
    };
  },
  created() {
    // if (!this.items.length) {
    if (this.items.length < 4) {
      const token = localStorage.getItem("token");
      if (!token || !token.length) {
        this.$router.push("login");
      }
      getUser(token, this);
    }
  },
};
</script>

<template>
  <div class="account-container">
    <article id="account" class="account-container">
      <div class="account-row">
        <header class="account-title">My account</header>
        <button class="account-button">
          <router-link to="/cart" class="">New order</router-link>
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
              <span :class="item.status.toLowerCase()">{{ item.status }}</span>
            </td>
            <td>{{ item.amount }}</td>
          </tr>
        </tbody>
      </table>
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
      }
    }
    .pending {
      color: #dc6b04;
      background: #fff4cd;
      border-radius: 4px;
      padding: 4px 12px;
      gap: 10px;
    }
    .ok {
      color: #109f43;
      background: #e0ffd9;
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
        // color: black;
        // background: #d5d5d5;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        // border-radius: 4px 4px 0px 0px;
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
  }
}
</style>
