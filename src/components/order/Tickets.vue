<script>
import { reactive, ref } from "vue";
import * as Yup from "yup";
import axios from "axios";
import Reminder from "@/components/order/Reminder.vue";

const ticketSchema = Yup.object().shape({
  orderId: Yup.string().required(),
  type: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  knownAs: Yup.string(),
  club: Yup.string().required(),
  vegetarian: Yup.bool().required().default(false),
  dtm: Yup.bool().required().default(false),
  banquet: Yup.bool().required().default(false),
});

const arrayOfTicketsSchema = Yup.array().of(ticketSchema);

export async function getCountOfTickets(token, target) {
  const url = `${process.env.VUE_APP_API}/orders/${target.$route.params.id}`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(url)
      .then(function (response) {
        if (response && response.data) {
          target.setCount(response.data);
          target.setActive(response.data);
        }
      })
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          this.$router.push("/login");
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTickets(token, target) {
  const url = `${process.env.VUE_APP_API}/tickets/${target.$route.params.id}`;
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(url)
      .then(function (response) {
        if (response && response.data) {
          target.readState(response.data);
          target.setAssignments(target.count.banquet);
        }
      })
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          this.$router.push("/login");
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log(error);
  }
}

export async function onSubmit(target) {
  const url = `${process.env.VUE_APP_API}/ticket`;
  try {
    axios
      .post(url, target.state)
      .then(function (response) {
        console.log("response =", response);
        target.$router.push("/me").then(() => {
          target.$router.go();
        });
      })
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          target.$router.push("/login").then(() => {
            target.$router.go();
          });
        } else {
          console.log(error);
          return Promise.reject(error);
        }
      });
  } catch (error) {
    console.log("error =", error);
  }
}

export default {
  name: "Tickets",
  components: {
    Reminder,
  },
  props: {
    count: {
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
    setCount: {
      type: Function,
    },
    setAssignments: {
      type: Function,
    },
    assignments: {
      type: Number,
    },
  },
  data() {
    const active = ref(false);
    const editing = ref(false);
    const showReminder = ref(false);
    const message = ref(this.$t("order.tickets.message"));
    const state = reactive([]);
    const errors = reactive([]);
    const clearedErrors = reactive({
      firstName: "",
      lastName: "",
      club: "",
    });
    const errorMessages = reactive({
      firstName: this.$t("error.firstname"),
      lastName: this.$t("error.lastname"),
      club: this.$t("error.club"),
    });
    const clubs = reactive([]);
    Array.from(this.$tm("clubs")).forEach((source, index) => {
      clubs.push({
        key: index + 1,
        name: this.$rt(source),
      });
    });

    return {
      active,
      editing,
      showReminder,
      message,
      state,
      errors,
      clearedErrors,
      errorMessages,
      clubs,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (!token || !token.length) {
      this.$router.push("/login");
    }
    getCountOfTickets(token, this);
  },
  methods: {
    setActive(data) {
      if (data.tickets.length === 0) {
        this.active = true;
        this.getState();
      } else {
        const token = localStorage.getItem("token");
        if (!token || !token.length) {
          this.$router.push("/login");
        }
        fetchTickets(token, this);
      }
    },
    readState(tickets) {
      let index = 1;
      Array.from(tickets).forEach((ticket) => {
        const item = {
          firstName: ticket.firstName,
          lastName: ticket.lastName,
          knownAs: ticket.knownAs,
          club: ticket.club,
          vegetarian: ticket.vegetarian,
          dtm: ticket.dtm,
          banquet: ticket.banquet,
          key: index,
          type: ticket.type,
          description: this.$t(`cart.picker.${ticket.type}.name`),
          icon: "pi pi-angle-up tickets-expand-arrow",
          show: true,
          banquetDisabled: false,
        };
        this.state.push(item);
        const initErrors = { ...this.clearedErrors };
        this.errors.push(initErrors);
        index++;
      });
    },
    getState() {
      let index = 1;
      Object.keys(this.count).forEach((key) => {
        for (let i = 0; i < this.count[key]; i++) {
          if (key !== "banquet") {
            const item = {
              orderId: this.$route.params.id,
              type: key,
              firstName: "",
              lastName: "",
              knownAs: "",
              club: "",
              vegetarian: false,
              dtm: false,
              banquet: false,
              key: index,
              description: this.$t(`cart.picker.${key}.name`),
              icon: "pi pi-angle-up tickets-expand-arrow",
              show: true,
              banquetDisabled: false,
            };
            this.state.push(item);
            const initErrors = { ...this.clearedErrors };
            this.errors.push(initErrors);
            index++;
          }
        }
      });
      if (this.count.banquet <= 0) {
        Array.from(this.state).forEach((ticket, index) => {
          this.state[index].banquetDisabled = true;
        });
      }
    },
    toggle(index) {
      this.state[index].show = !this.state[index].show;
    },
    submitTickets() {
      arrayOfTicketsSchema
        .validate(this.state, { abortEarly: false })
        .then(() => {
          this.confirm();
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            console.log("error =", error);
            const arr = error.path.split(".");
            const index = +arr[0].replace(/[^0-9\.]+/g, "");
            const key = arr[1];
            this.errors[index][key] = this.errorMessages[key];
          });
        });
    },
    confirm() {
      this.showReminder = true;
    },
    dismiss() {
      this.showReminder = false;
    },
    trigger() {
      onSubmit(this);
    },
    clickBanquet(ticket) {
      const change = ticket.banquet ? 1 : -1;
      const assignments = this.assignments + change;
      this.setAssignments(assignments);
      if (assignments < this.count.banquet) {
        Array.from(this.state).forEach((ticket, index) => {
          if (ticket.banquetDisabled) {
            this.state[index].banquetDisabled = false;
          }
        });
      } else {
        Array.from(this.state).forEach((ticket, index) => {
          if (!this.state[index].banquet) {
            this.state[index].banquetDisabled = true;
          }
        });
      }
    },
    getDirection(index) {
      const direction = this.state[index].show ? "up" : "down";
      return `pi pi-angle-${direction} tickets-expand-arrow`;
    },
    getBorderStyle(error) {
      const color =
        error === null || error === "" ? "rgba(83, 89, 90, 1)" : "red";
      return `border: ${color} 1px solid;`;
    },
    getDisabledButtonStyle(isDisabled) {
      if (isDisabled) {
        return "color: #b0b0b0; border: 1px solid #bababa; background: #f3f3f3";
      }
    },
    saveForm() {
      this.editing = !this.editing;
    },
    clear(index) {
      this.errors[index] = { ...this.clearedErrors };
    },
  },
};
</script>

<template>
  <section id="tickets">
    <Reminder
      :showReminder="showReminder"
      :message="message"
      :dismiss="dismiss"
      :trigger="trigger"
    />
    <form class="tickets-container">
      <div class="tickets-heading">
        <header class="tickets-title">{{ $t("order.tickets.title") }}</header>
        <button
          v-if="!editing && active"
          class="tickets-button edit"
          :disabled="!active"
          :style="getDisabledButtonStyle(!active)"
          @click="editing = !editing"
        >
          {{ $t("order.tickets.edit") }}
        </button>
        <button
          v-if="editing && active"
          class="tickets-button edit"
          @click="saveForm()"
        >
          {{ $t("order.tickets.save") }}
        </button>
        <div
          v-if="editing && active"
          class="tickets-button submit"
          @click="this.submitTickets"
        >
          {{ $t("order.tickets.submit") }}
        </div>
      </div>
      <span class="tickets-display-already-submitted" v-if="!active">
        {{ $t("order.tickets.submitted") }}
      </span>
      <span class="tickets-required">
        {{ $t("order.tickets.required") }} <span class="red">*</span>
      </span>
      <div class="tickets-items">
        <div v-for="(ticket, index) in state" :key="index" class="tickets-item">
          <div class="tickets-item-title" @click="toggle(index)">
            <span>
              {{ $t("order.ticket") }} {{ ticket.key }} -
              {{ ticket.description }}
            </span>
            <i :class="getDirection(index)"></i>
          </div>
          <div class="tickets-item-form" v-show="ticket.show">
            <div
              class="tickets-item-input"
              :style="getBorderStyle(errors[index].firstName)"
            >
              <input
                v-model="state[index].firstName"
                :id="`firstName-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
                @input="clear(index)"
              />
              <p class="form-input-hint" v-if="!!errors[index].firstName">
                {{ errors[index].firstName }}
              </p>
              <label
                :for="`firstName-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].firstName"
              >
                {{ $t("register.firstname") }} <span class="red">*</span>
              </label>
            </div>
            <div
              class="tickets-item-input"
              :style="getBorderStyle(errors[index].lastName)"
            >
              <input
                v-model="state[index].lastName"
                :id="`lastName-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
                @input="clear(index)"
              />
              <p class="form-input-hint" v-if="!!errors[index].lastName">
                {{ errors[index].lastName }}
              </p>
              <label
                :for="`lastName-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].lastName"
              >
                {{ $t("register.lastname") }} <span class="red">*</span>
              </label>
            </div>
            <div class="tickets-item-input">
              <input
                v-model="state[index].knownAs"
                :id="`knownAs-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
                @input="clear(index)"
              />
              <label
                :for="`knownAs-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].knownAs"
              >
                {{ $t("order.tickets.known") }} ({{
                  $t("order.tickets.optional")
                }})
              </label>
            </div>
            <div
              class="tickets-item-input"
              :style="getBorderStyle(errors[index].club)"
            >
              <select
                v-model="state[index].club"
                :id="`club-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
                @change="clear(index)"
              >
                <option v-for="item in clubs" :key="item.id" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
              <p class="form-input-hint" v-if="!!errors[index].club">
                {{ errors[index].club }}
              </p>
              <label
                :for="`club-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].club"
              >
                {{ $t("order.tickets.club") }} <span class="red">*</span>
              </label>
            </div>
            <div class="tickets-checkbox">
              <input
                type="checkbox"
                class="tickets-checkbox-input"
                v-model="state[index].dtm"
                :disabled="!editing"
              />
              <label for="dtm" class="tickets-checkbox-label">
                {{ $t("order.tickets.dtm") }}
              </label>
            </div>
            <div class="tickets-checkbox">
              <input
                type="checkbox"
                class="tickets-checkbox-input"
                v-model="state[index].vegetarian"
                :disabled="!editing"
              />
              <label for="vegetarian" class="tickets-checkbox-label">
                {{ $t("order.tickets.vegetarian") }}
              </label>
            </div>
            <div v-if="ticket.type !== 'early'" class="tickets-checkbox">
              <input
                type="checkbox"
                v-model="state[index].banquet"
                class="tickets-checkbox-input"
                @change="clickBanquet(ticket)"
                :disabled="!editing || ticket.banquetDisabled"
              />
              <label for="banquet" class="tickets-checkbox-label">
                {{ $t("order.tickets.banquet") }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
.tickets-container {
  width: 100%;
  max-width: 713px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-color: transparent;
  padding: 40px;
  .tickets-heading {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    border-color: transparent;
    margin-bottom: 24px;
    .tickets-title {
      color: black;
      flex-grow: 1;
      font-size: 28px;
      font-weight: 600;
      text-align: left;
    }
    .tickets-button {
      position: relative;
      width: 124px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      border: black solid 1px;
      border-radius: 70px;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
      padding: 4px;
      margin-left: 24px;
      cursor: pointer;
    }
    .edit {
      color: black;
      background-color: white;
    }
    .submit {
      color: white;
      background: #004165;
    }
  }
  .tickets-display-already-submitted {
    color: #004165;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  .tickets-required {
    color: rgba(83, 89, 90, 1);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 8px;
    .red {
      color: red;
    }
  }
  .tickets-items {
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: flex-start;
    border-color: transparent;
    .tickets-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      align-items: flex-start;
      border-color: transparent;
      margin-bottom: 8px;
      .tickets-item-title {
        position: relative;
        height: 54px;
        color: black;
        background: #dfdfdf;
        display: flex;
        align-self: stretch;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        border-radius: 4px;
        padding: 0px 12px;
        margin-bottom: 8px;
      }
      .tickets-expand-arrow {
        width: 25px;
        height: 25px;
      }
      .tickets-item-form {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-self: stretch;
        align-items: flex-start;
        gap: 16px 2.24%;
        border-color: transparent;
        margin-bottom: 16px;
        *:disabled {
          background-color: lightgrey;
        }
        .tickets-item-input {
          position: relative;
          height: 54px;
          background-color: white;
          display: flex;
          flex-basis: 48.8%;
          border: rgba(83, 89, 90, 1) 1px solid;
          border-radius: 4px;
          @media screen and (max-width: 900px) {
            flex-basis: 100%;
          }
          .tickets-input-placeholder {
            position: absolute;
            top: 10px;
            left: 16px;
            color: rgba(83, 89, 90, 1);
            font-size: 16px;
            font-weight: 500;
          }
          .tickets-input-text {
            width: 100%;
            height: 100%;
            font-size: 20px;
            border-color: transparent;
            border-radius: 4px;
            padding: 0 16px;
          }
          ::placeholder {
            position: absolute;
            top: 10px;
            left: 16px;
            color: rgba(83, 89, 90, 1);
            font-size: 16px;
            font-weight: 500;
          }
          .form-input-hint {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #d72727;
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            margin: 0;
            pointer-events: none;
          }
        }
        .tickets-checkbox {
          display: flex;
          align-items: center;
          flex-basis: 100%;
          .tickets-checkbox-input {
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }
          .tickets-checkbox-label {
            color: black;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .tickets-container {
    padding: 0px 5%;
    .tickets-heading {
      position: relative;
      order: 99;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 24px;
      .tickets-title {
        display: none;
      }
      .tickets-button {
        width: 100%;
        font-size: 16px;
        line-height: 20px;
        margin: auto;
      }
      .edit {
        color: black;
        background-color: white;
      }
      .submit {
        color: white;
        background: #004165;
      }
    }
    .tickets-display-already-submitted {
      display: flex;
      flex-direction: row;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    .tickets-required {
      font-size: 12px;
      line-height: 15px;
    }
    .tickets-items {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      align-items: flex-start;
      .tickets-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        align-items: flex-start;
        border-color: transparent;
        margin-bottom: 8px;
        .tickets-item-title {
          height: 48px;
          font-size: 14px;
          line-height: 17px;
          padding: 0px 16px;
        }
        .tickets-item-form {
          .tickets-item-input {
            height: 48px;
            display: flex;
            flex-basis: 100%;
            .tickets-input-placeholder {
              font-size: 14px;
              line-height: 17px;
            }
            .tickets-input-text {
              font-size: 20px;
              padding: 0 16px;
            }
            ::placeholder {
              font-size: 14px;
              line-height: 17px;
            }
            .form-input-hint {
              font-size: 16px;
              line-height: 20px;
            }
          }
          .tickets-checkbox {
            .tickets-checkbox-input {
              width: 12px;
              height: 12px;
            }
            .tickets-checkbox-label {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
