<script>
import { reactive, ref } from "vue";
import * as Yup from "yup";
import axios from "axios";
import ConfirmDialogue from "@/components/order/ConfirmDialogue.vue";

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

export async function onSubmit(values, target) {
  const url = `${process.env.VUE_APP_API}/ticket`;
  try {
    axios
      .post(url, values)
      .then(function (response) {
        console.log("response =", response);
        target.$router.push("me").then(() => {
          target.$router.go();
        });
      })
      .catch(function (error) {
        if (401 === error.response.status) {
          localStorage.removeItem("token");
          target.loginError = target.$t("login.error.password");
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
    ConfirmDialogue,
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
    const tickets = reactive([]);
    const state = reactive([]);
    const errors = reactive([]);
    const clearedErrors = reactive({
      firstName: "",
      lastName: "",
      club: "",
    });
    const errorMessages = reactive({
      firstName: this.$t("order.error.firstname"),
      lastName: this.$t("order.error.lastname"),
      club: this.$t("order.error.club"),
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
      tickets,
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
      this.$router.push("login");
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
          this.$router.push("login");
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
        this.errors.push(this.clearedErrors);
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
            this.errors.push(this.clearedErrors);
            index++;
          }
        }
      });
    },
    toggle(index) {
      this.state[index].show = !this.state[index].show;
    },
    submitTickets() {
      arrayOfTicketsSchema
        .validate(this.state, { abortEarly: false })
        .then(() => {
          onSubmit(this.state, this);
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
    clickBanquet() {
      let assignments = 0;
      Array.from(this.state).forEach((ticket) => {
        if (ticket.banquet) {
          assignments += 1;
        }
      });
      this.setAssignments(assignments);
      if (assignments < this.count.banquet) {
        Array.from(this.tickets).forEach((ticket, index) => {
          if (ticket.banquetDisabled) {
            this.tickets[index].banquetDisabled = false;
          }
        });
      } else {
        Array.from(this.tickets).forEach((ticket, index) => {
          if (!this.state[index].banquet) {
            this.tickets[index].banquetDisabled = true;
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
  },
};
</script>

<template>
  <section id="tickets">
    <ConfirmDialogue ref="confirmDialogue"></ConfirmDialogue>
    <form class="tickets-container">
      <div class="tickets-heading">
        <header class="tickets-title">Attendee Information</header>
        <button
          v-if="!editing && active"
          class="tickets-button edit"
          :disabled="!active"
          :style="getDisabledButtonStyle(!active)"
          @click="editing = !editing"
        >
          Edit
        </button>
        <button
          v-if="editing && active"
          class="tickets-button edit"
          @click="saveForm()"
        >
          Save
        </button>
        <button
          v-if="editing && active"
          class="tickets-button submit"
          @click="this.submitTickets"
        >
          Submit
        </button>
      </div>
      <span class="tickets-display-already-submitted" v-if="!active">
        You've already submitted. If you want to edit your information, please
        contact the service center tmicon@toastmasters.org.tw
      </span>
      <span class="tickets-required">
        Required <span class="red">*</span>
      </span>
      <div class="tickets-ticket-list">
        <div
          v-for="(ticket, index) in state"
          :key="index"
          class="tickets-ticket-item"
        >
          <div class="tickets-ticket-title" @click="toggle(index)">
            <span>Ticket {{ ticket.key }} - {{ ticket.description }}</span>
            <i :class="getDirection(index)"></i>
          </div>
          <div class="tickets-ticket-form" v-show="ticket.show">
            <div
              class="tickets-ticket-input"
              :style="getBorderStyle(errors[index].firstName)"
            >
              <input
                v-model="state[index].firstName"
                :id="`firstName-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
              />
              <p class="form-input-hint" v-if="!!errors[index].firstName">
                {{ errors[index].firstName }}
              </p>
              <label
                :for="`firstName-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].firstName"
              >
                First name <span class="red">*</span>
              </label>
            </div>
            <div
              class="tickets-ticket-input"
              :style="getBorderStyle(errors[index].lastName)"
            >
              <input
                v-model="state[index].lastName"
                :id="`lastName-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
              />
              <p class="form-input-hint" v-if="!!errors[index].lastName">
                {{ errors[index].lastName }}
              </p>
              <label
                :for="`lastName-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].lastName"
              >
                Last name <span class="red">*</span>
              </label>
            </div>
            <div class="tickets-ticket-input">
              <input
                v-model="state[index].knownAs"
                class="tickets-input-text"
                placeholder="Also known as (Optional)"
                :disabled="!editing"
              />
            </div>
            <div
              class="tickets-ticket-input"
              :style="getBorderStyle(errors[index].club)"
            >
              <select
                v-model="state[index].club"
                :id="`clubName-${ticket.key}`"
                class="tickets-input-text"
                :disabled="!editing"
              >
                <option v-for="item in clubs" :key="item.id" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
              <p class="form-input-hint" v-if="!!errors[index].club">
                {{ errors[index].club }}
              </p>
              <label
                :for="`clubName-${ticket.key}`"
                class="tickets-input-placeholder"
                v-show="!state[index].club"
              >
                Club name <span class="red">*</span>
              </label>
            </div>
            <div class="tickets-ticket-checkbox">
              <input
                type="checkbox"
                class="tickets-checkbox-box"
                v-model="state[index].dtm"
                :disabled="!editing"
              />
              <label for="vegetarian" class="tickets-checkbox-text">
                I'm a DTM.
              </label>
            </div>
            <div class="tickets-ticket-checkbox">
              <input
                type="checkbox"
                class="tickets-checkbox-box"
                v-model="state[index].vegetarian"
                :disabled="!editing"
              />
              <label for="vegetarian" class="tickets-checkbox-text">
                I'm a vegetarian.
              </label>
            </div>
            <div
              class="tickets-ticket-checkbox"
              v-if="ticket.type != 1"
              @click="clickBanquet(ticket)"
            >
              <input
                type="checkbox"
                class="tickets-checkbox-box"
                v-model="state[index].banquet"
                :disabled="!editing || ticket.banquetDisabled"
              />
              <label for="banquet" class="tickets-checkbox-text">
                Add a banquet ticket.
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
.red {
  color: red;
}
*:disabled {
  background-color: lightgrey;
}
.tickets-container {
  width: 100%;
  max-width: 713px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-color: transparent;
  flex-direction: column;
  background-color: white;
}
.form-input-hint {
  width: 84%;
  max-width: 464px;
  color: #d72727;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  margin: 10px;
}
.tickets-heading {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  border-color: transparent;
  margin-bottom: 24px;
  background-color: white;
  .tickets-title {
    color: black;
    flex-grow: 1;
    font-size: 28px;
    text-align: left;
    font-weight: 600;
  }
  .tickets-button {
    width: 124px;
    height: 48px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border: black solid 1px;
    border-radius: 70px;
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
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  color: #004165;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  margin-bottom: 24px;
}
.tickets-required {
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  color: rgba(83, 89, 90, 1);
  margin-bottom: 8px;
}
.tickets-ticket-list {
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  border-color: transparent;
}
.tickets-ticket-item {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  border-color: transparent;
  margin-bottom: 8px;
  flex-direction: column;
}
.tickets-ticket-title {
  height: 54px;
  position: relative;
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: black;
  border-radius: 4px;
  background-color: rgba(223, 223, 223, 1);
  padding: 0px 12px;
  margin-bottom: 8px;
}
.tickets-expand-arrow {
  width: 25px;
  height: 25px;
}
.tickets-ticket-form {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  gap: 16px 2.24%;
  border-color: transparent;
  margin-bottom: 16px;
  .tickets-ticket-input {
    height: 54px;
    position: relative;
    display: flex;
    flex-basis: 48.8%;
    border: rgba(83, 89, 90, 1) 1px solid;
    border-radius: 4px;
    background-color: white;
    @media screen and (max-width: 900px) {
      flex-basis: 100%;
    }
    .tickets-input-placeholder {
      position: absolute;
      top: 10px;
      left: 16px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(83, 89, 90, 1);
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
      font-size: 16px;
      font-weight: 500;
      color: rgba(83, 89, 90, 1);
    }
  }
  .tickets-ticket-checkbox {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    .tickets-checkbox-box {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    .tickets-checkbox-text {
      color: black;
      font-size: 16px;
      text-align: left;
      font-weight: 600;
    }
  }
}
</style>
