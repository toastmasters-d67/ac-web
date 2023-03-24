<template>
  <ConfirmDialogue ref="confirmDialogue"></ConfirmDialogue>
  <form class="attendee-container">
    <div class="attendee-heading">
      <span class="attendee-title">Attendee Information</span>
      <button
        class="attendee-button edit"
        :disabled="hasSubmitted"
        :style="getDisabledButtonStyle(hasSubmitted)"
        @click="editing = !editing"
        v-if="!editing"
      >
        Edit
      </button>
      <button class="attendee-button edit" @click="saveForm()" v-else>
        Save
      </button>
      <button
        class="attendee-button submit"
        v-if="editing"
        @click="this.submitForm"
      >
        Submit
      </button>
    </div>
    <span class="attendee-display-already-submitted" v-if="hasSubmitted">
      {{ displayAlreadySubmitted }}
    </span>
    <span class="attendee-required">
      Required&nbsp;<span class="red">*</span>
    </span>
    <div class="attendee-ticket-list">
      <div
        v-for="(ticket, index) in tickets"
        :key="ticket.id"
        class="attendee-ticket-item"
      >
        <div class="attendee-ticket-title" @click="toggle(index)">
          <span>Ticket {{ ticket.id }} - {{ ticket.description }}</span>
          <i :class="formStatus[index].icon" />
        </div>
        <div
          class="attendee-ticket-form"
          v-show="formStatus[index].showDetails"
        >
          <div
            class="attendee-ticket-input"
            :style="getStyle(formStatus[index].firstNameError)"
          >
            <input
              v-model="ticket.firstName"
              :id="`firstName-${ticket.id}`"
              class="attendee-input-text"
              @input="validateForm()"
              :disabled="!editing"
            />
            <label
              :for="`firstName-${ticket.id}`"
              class="attendee-input-placeholder"
              v-show="!ticket.firstName"
            >
              First name&nbsp;<span class="red">*</span>
            </label>
          </div>
          <div
            class="attendee-ticket-input"
            :style="getStyle(formStatus[index].lastNameError)"
          >
            <input
              v-model="ticket.lastName"
              :id="`lastName-${ticket.id}`"
              class="attendee-input-text"
              @input="validateForm()"
              :disabled="!editing"
            />
            <label
              :for="`lastName-${ticket.id}`"
              class="attendee-input-placeholder"
              v-show="!ticket.lastName"
            >
              Last name&nbsp;<span class="red">*</span>
            </label>
          </div>
          <div class="attendee-ticket-input">
            <input
              v-model="ticket.knownAs"
              class="attendee-input-text"
              placeholder="Also known as (Optional)"
              :disabled="!editing"
            />
          </div>
          <div
            class="attendee-ticket-input"
            :style="getStyle(formStatus[index].clubNameError)"
          >
            <select
              v-model="ticket.clubName"
              :id="`clubName-${ticket.id}`"
              class="attendee-input-text"
              @change="validateForm()"
              :disabled="!editing"
            >
              <option v-for="item in clubs" :key="item.id" :value="item.name">
                {{ item.name }}
              </option>
            </select>
            <label
              :for="`clubName-${ticket.id}`"
              class="attendee-input-placeholder"
              v-show="!ticket.clubName"
            >
              Club name&nbsp;<span class="red">*</span>
            </label>
          </div>
          <div
            class="attendee-ticket-checkbox"
            @click="clickVegetarian(ticket)"
          >
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
          <div
            class="attendee-ticket-checkbox"
            v-if="ticket.type != 1"
            @click="clickBanquet(ticket)"
          >
            <input
              type="checkbox"
              class="attendee-checkbox-box"
              v-model="ticket.addBanquet"
              :disabled="!editing || formStatus[index].banquetDisabled"
            />
            <label for="banquet" class="attendee-checkbox-text"
              >Add a banquet ticket.
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import ConfirmDialogue from "@/components/order/ConfirmDialogue.vue";

export default {
  name: "Attendee",
  components: {
    ConfirmDialogue,
  },
  props: {
    tickets: {
      type: Object,
    },
    totalBanquets: {
      type: Number,
    },
    assignedBanquets: {
      type: Number,
    },
    clubs: {
      type: Object,
    },
    hasSubmitted: {
      type: Boolean,
    },
  },
  beforeUpdate() {
    var assignedBanquets = 0;
    this.tickets.forEach((ticket) => {
      if (ticket.addBanquet == true) {
        assignedBanquets++;
      }
    });

    if (this.assignedBanquets >= this.totalBanquets) {
      this.tickets.forEach((ticket) => {
        if (ticket.addBanquet == false) {
          this.formStatus[ticket.id - 1].banquetDisabled = true;
        }
      });
    } else {
      this.tickets.forEach((ticket) => {
        this.formStatus[ticket.id - 1].banquetDisabled = false;
      });
    }

    this.$emit("updateAssignedBanquets", assignedBanquets);
  },
  async mounted() {
    try {
      window.onbeforeunload = () => {
        if (this.editing) return "";
      };
    } catch (err) {
      console.log(err);
    }
  },
  beforeUnmount() {
    window.onbeforeunload = null;
  },
  data() {
    const displayAlreadySubmitted =
      "You’ve already submitted. If you want to edit your information, please contact the service center tmicon@toastmasters.org.tw";

    const formStatus = reactive([]);
    this.tickets.forEach((ticket) => {
      const item = {
        id: ticket.id,
        icon: "pi pi-angle-up attendee-expandarrow",
        showDetails: true,
        banquetDisabled: false,
        firstNameError: null,
        lastNameError: null,
        clubNameError: null,
      };
      formStatus.push(item);
    });
    return {
      editing: false,
      formStatus,
      displayAlreadySubmitted,
    };
  },
  methods: {
    clickBanquet(ticket) {
      if (
        this.editing &&
        this.formStatus[ticket.id - 1].banquetDisabled == false
      ) {
        ticket.addBanquet = !ticket.addBanquet;
      }
    },
    clickVegetarian(ticket) {
      if (this.editing) {
        ticket.isVegetarian = !ticket.isVegetarian;
      }
    },
    toggle(index) {
      this.formStatus[index].showDetails = !this.formStatus[index].showDetails;
      const direction = this.formStatus[index].showDetails ? "up" : "down";
      this.formStatus[
        index
      ].icon = `pi pi-angle-${direction} attendee-expandarrow`;
    },
    getStyle(error) {
      if (error === null || error === "")
        return "border: rgba(83, 89, 90, 1) 1px solid;";
      else return "border: red 1px solid;";
    },
    getDisabledButtonStyle(isDisabled) {
      if (isDisabled) {
        return "color: #b0b0b0; border: 1px solid #bababa; background: #f3f3f3";
      }
    },
    saveForm() {
      this.editing = !this.editing;
    },
    async submitForm(event) {
      event.preventDefault();
      if (this.validateForm()) {
        var confirmResult = await this.$refs.confirmDialogue.show({
          title: "Confirm",
          message:
            "Once you submit this form, you won’t be able to edit in the future.",
          cancelButton: "Cancel",
          okButton: "Submit",
        });
        if (confirmResult) {
          this.editing = !this.editing;
          this.submit();
        }
      }
    },
    validateForm() {
      var isFormValid = true;
      this.tickets.forEach((ticket) => {
        let ticketStatus = this.formStatus[ticket.id - 1];
        if (!ticket.firstName)
          ticketStatus.firstNameError = "firstName required.";
        else ticketStatus.firstNameError = "";

        if (!ticket.lastName) ticketStatus.lastNameError = "lastName required.";
        else ticketStatus.lastNameError = "";

        if (!ticket.clubName) ticketStatus.clubNameError = "clubName required.";
        else ticketStatus.clubNameError = "";

        if (!ticket.firstName || !ticket.lastName || !ticket.clubName)
          isFormValid = false;
      });

      return isFormValid;
    },
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
  width: 100%;
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
.attendee-display-already-submitted {
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
.attendee-required {
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
.attendee-expandarrow {
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
