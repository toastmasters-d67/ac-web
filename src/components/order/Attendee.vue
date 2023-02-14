<template>
  <div class="attendee-container">
    <div class="attendee-heading">
      <span class="attendee-title">Attendee Information</span>
      <button class="attendee-edit">Edit</button>
    </div>
    <span class="attendee-required">
      Required&nbsp;<span class="red">*</span>
    </span>
    <div class="attendee-ticket-list">
      <div
        v-for="ticket in tickets"
        :key="ticket.id"
        class="attendee-ticket-item"
      >
        <div class="attendee-ticket-title">
          <span>Ticket {{ key }} - {{ ticket.description }}</span>
          <i class="pi pi-angle-up attendee-expandarrowup" />
        </div>
        <div class="attendee-ticket-form">
          <div class="attendee-ticket-input">
            <input
              v-model="firstName"
              class="attendee-input-text"
              required
              pattern=".*\S.*"
            />
            <span class="attendee-input-placeholder">
              First name&nbsp;<span class="red">*</span>
            </span>
          </div>
          <div class="attendee-ticket-input">
            <input
              v-model="lastName"
              class="attendee-input-text"
              required
              pattern=".*\S.*"
            />
            <span class="attendee-input-placeholder">
              Last name&nbsp;<span class="red">*</span>
            </span>
          </div>
          <div class="attendee-ticket-input">
            <input
              v-model="knownAs"
              class="attendee-input-text"
              placeholder="Also known as (Optional)"
            />
          </div>
          <select v-model="clubName" class="attendee-ticket-input">
            <option
              v-for="item in clubs"
              :key="item.id"
              :value="item.english_name"
            >
              {{ item.english_name }}
            </option>
          </select>
          <div class="attendee-ticket-checkbox">
            <input
              class="attendee-checkbox-box"
              type="checkbox"
              id="vegetarian"
              value="true"
              v-model="isVegetarian"
            />
            <label for="vegetarian" class="attendee-checkbox-text"
              >I'm a vegetarian.
            </label>
          </div>
          <div class="attendee-ticket-checkbox" v-if="ticket.addBanquet">
            <input
              class="attendee-checkbox-box"
              type="checkbox"
              id="banquet"
              value="true"
              v-model="hasBanquet"
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
  data() {
    // Hard-code some test data
    const tickets = reactive([
      {
        id: 1,
        description: "Ticket 01 - Early Bird 2 Day Pass",
        addBanquet: false,
      },
      {
        id: 2,
        description: "Ticket 02 - Early Bird 2 Day Pass",
        addBanquet: false,
      },
      {
        id: 3,
        description: "Ticket 03 - First Day Pass",
        addBanquet: true,
      },
      {
        id: 4,
        description: "Ticket 04 - Second Day Pass",
        addBanquet: true,
      },
    ]);
    const clubs = reactive([
      { id: 1, english_name: "Happiness Toastmasters Club" },
      { id: 2, english_name: "Hsinchu Toastmasters Club" },
      { id: 3, english_name: "Sparkle Toastmasters Club" },
    ]);
    return {
      key: 0,
      firstName: "",
      lastName: "",
      knownAs: "",
      clubName: "",
      isVegetarian: false,
      hasBanquet: false,
      tickets,
      clubs,
    };
  },
};
</script>

<style scoped lang="scss">
.red {
  color: red;
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
  .attendee-edit {
    width: 124px;
    height: 48px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 18px;
    font-style: Medium;
    font-weight: 500;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border: black solid 1px;
    border-radius: 70px;
    background-color: white;
    padding: 4px;
    cursor: pointer;
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
