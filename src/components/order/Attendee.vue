<template>
  <div class="attendee-container">
    <div class="attendee-heading">
      <span class="attendee-title">Attendee Information</span>
      <button
        class="attendee-button edit"
        @click="editing = !editing"
        v-if="!editing"
      >
        Edit
      </button>
      <button class="attendee-button save" @click="editing = !editing" v-else>
        Save
      </button>
    </div>
    <span class="attendee-required">
      Required&nbsp;<span class="red">*</span>
    </span>
    <div class="attendee-ticket-list">
      <div
        v-for="(ticket, index) in tickets"
        :key="ticket.id"
        class="attendee-ticket-item"
      >
        <div class="attendee-ticket-title">
          <span>Ticket {{ ticket.id }} - {{ ticket.description }}</span>
          <i class="pi pi-angle-up attendee-expandarrowup" />
        </div>
        <!-- Debug use -->
        <!-- <span style="font-size: 16px; color: blue">{{ ticket }}</span> -->
        <!-- Debug use -->
        <div class="attendee-ticket-form">
          <div class="attendee-ticket-input">
            <input
              v-model="ticket.firstName"
              class="attendee-input-text"
              required
              pattern=".*\S.*"
              :disabled="!editing"
            />
            <span class="attendee-input-placeholder" v-show="!ticket.firstName">
              First name&nbsp;<span class="red">*</span>
            </span>
          </div>
          <div class="attendee-ticket-input">
            <input
              v-model="ticket.lastName"
              class="attendee-input-text"
              required
              pattern=".*\S.*"
              :disabled="!editing"
            />
            <span class="attendee-input-placeholder" v-show="!ticket.lastName">
              Last name&nbsp;<span class="red">*</span>
            </span>
          </div>
          <div class="attendee-ticket-input">
            <input
              v-model="ticket.knownAs"
              class="attendee-input-text"
              placeholder="Also known as (Optional)"
              :disabled="!editing"
            />
          </div>
          <div class="attendee-ticket-input">
            <select
              v-model="ticket.clubName"
              class="attendee-input-text"
              :disabled="!editing"
            >
              <option
                v-for="item in clubs"
                :key="item.id"
                :value="item.english_name"
              >
                {{ item.english_name }}
              </option>
            </select>
            <span class="attendee-input-placeholder" v-show="!ticket.clubName">
              Club name&nbsp;<span class="red">*</span>
            </span>
          </div>
          <div class="attendee-ticket-checkbox">
            <input
              type="checkbox"
              class="attendee-checkbox-box"
              v-model="ticket.isVegetarian"
              :disabled="!editing"
            />
            <label for="vegetarian" class="attendee-checkbox-text"
              >I'm a vegetarian.
            </label>
          </div>
          <div class="attendee-ticket-checkbox" v-if="ticket.type != 1">
            <input
              type="checkbox"
              class="attendee-checkbox-box"
              v-model="ticket.addBanquet"
              :disabled="
                !editing ||
                disableBanquetCheckboxList[index].disableBanquetCheckbox
              "
            />
            <label for="banquet" class="attendee-checkbox-text"
              >Add a banquet ticket.
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Attendee",
  props: {
    tickets: {
      type: Object,
    },
    banquetTicketNumber: {
      type: Number,
    },
    assignedBanquets: {
      type: Number,
    },
    clubs: {
      type: Object,
    },
  },
  beforeUpdate() {
    var assignedBanquets = 0;
    this.tickets.forEach((ticket) => {
      if (ticket.addBanquet == true) {
        assignedBanquets++;
      }
    });

    if (this.assignedBanquets >= this.banquetTicketNumber) {
      this.tickets.forEach((ticket) => {
        if (ticket.addBanquet == false) {
          this.disableBanquetCheckboxList[
            ticket.id - 1
          ].disableBanquetCheckbox = true;
        }
      });
    } else {
      this.tickets.forEach((ticket) => {
        this.disableBanquetCheckboxList[
          ticket.id - 1
        ].disableBanquetCheckbox = false;
      });
    }

    this.$emit("updateAssignedBanquets", assignedBanquets);

    // Debug
    console.debug(this.tickets);
  },
  data() {
    const disableBanquetCheckboxList = reactive([]);
    this.tickets.forEach((ticket) => {
      const item = {
        id: ticket.id,
        disableBanquetCheckbox: false,
      };
      disableBanquetCheckboxList.push(item);
    });
    return {
      editing: false,
      banquetCheckboxDisabled: false,
      disableBanquetCheckboxList,
    };
  },
};
</script>

<style scoped lang="scss">
.red {
  color: red;
}
*:disabled {
  background-color: lightgrey;
}
.attendee-container {
  max-width: 713px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-color: transparent;
  flex-direction: column;
  background-color: white;
}
.attendee-heading {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  border-color: transparent;
  margin-bottom: 24px;
  background-color: white;
  .attendee-title {
    color: black;
    flex-grow: 1;
    font-size: 28px;
    text-align: left;
    font-weight: 600;
    margin-right: 24px;
  }
  .attendee-button {
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
    cursor: pointer;
  }
  .edit {
    color: black;
    background-color: white;
  }
  .save {
    color: white;
    background: #004165;
  }
}
.attendee-required {
  flex-grow: 1;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  color: rgba(83, 89, 90, 1);
  margin-bottom: 8px;
}
.attendee-ticket-list {
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  border-color: transparent;
}
.attendee-ticket-item {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  border-color: transparent;
  margin-bottom: 8px;
  flex-direction: column;
}
.attendee-ticket-title {
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
.attendee-expandarrowup {
  width: 25px;
  height: 25px;
}
.attendee-ticket-form {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-self: stretch;
  align-items: flex-start;
  gap: 16px 2.24%;
  border-color: transparent;
  margin-bottom: 16px;
  .attendee-ticket-input {
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
    .attendee-input-placeholder {
      position: absolute;
      top: 10px;
      left: 16px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(83, 89, 90, 1);
    }
    .attendee-input-text {
      width: 100%;
      height: 100%;
      font-size: 20px;
      border-color: transparent;
      border-radius: 4px;
      padding: 0 16px;
    }
    input:focus + .attendee-input-placeholder {
      display: none;
    }
    input:valid + .attendee-input-placeholder {
      display: none;
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
  .attendee-ticket-checkbox {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    .attendee-checkbox-box {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    .attendee-checkbox-text {
      color: black;
      font-size: 16px;
      text-align: left;
      font-weight: 600;
    }
  }
}
</style>
