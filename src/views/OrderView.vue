<template>
  <article id="order" class="order-container">
    <MyOrder :tickets="tickets" :remainBanquetTickets="remainBanquetTickets" />
    <AttendeeInformation
      :tickets="tickets"
      :banquetTicketNumber="banquetTicketNumber"
      :assignedBanquets="assignedBanquets"
      :clubs="clubs"
      @updateAssignedBanquets="assignedBanquets = $event"
    />
  </article>
</template>

<style scoped lang="scss">
.order-container {
  display: flex;
  margin: 80px 8.33% 200px 8.33%;
}
@media screen and (max-width: 768px) {
  .order-container {
    margin: 80px 4.27% 200px 4.27%;
  }
}
</style>

<script>
import { reactive, computed } from "vue";
import MyOrder from "@/components/order/MyOrder.vue";
import AttendeeInformation from "@/components/order/Attendee.vue";

export default {
  name: "OrderInformationView",
  components: {
    MyOrder,
    AttendeeInformation,
  },
  // setup => create tickets form as it should be
  data() {
    // Hard-code some test data
    const tickets = reactive([
      {
        id: 1,
        type: 1, // Early Bird
        description: "Early Bird 2 Day Pass",
        firstName: "",
        lastName: "",
        knownAs: "",
        clubName: "",
        isVegetarian: false,
        addBanquet: false,
      },
      {
        id: 2,
        type: 1, // Early Bird
        description: "Early Bird 2 Day Pass",
        firstName: "",
        lastName: "",
        knownAs: "",
        clubName: "",
        isVegetarian: false,
        addBanquet: false,
      },
      {
        id: 3,
        type: 3, // First Day
        description: "First Day Pass",
        firstName: "",
        lastName: "",
        knownAs: "",
        clubName: "",
        isVegetarian: false,
        addBanquet: false,
      },
      {
        id: 4,
        type: 4, // Second Day
        description: "Second Day Pass",
        firstName: "",
        lastName: "",
        knownAs: "",
        clubName: "",
        isVegetarian: false,
        addBanquet: false,
      },
      {
        id: 5,
        type: 4, // Second Day
        description: "Second Day Pass",
        firstName: "",
        lastName: "",
        knownAs: "",
        clubName: "",
        isVegetarian: false,
        addBanquet: false,
      },
    ]);
    const banquetTicketNumber = 2;
    const assignedBanquets = 0;
    const remainBanquetTickets = computed(
      () => this.banquetTicketNumber - this.assignedBanquets
    );
    const clubs = reactive([
      { id: 1, english_name: "Happiness Toastmasters Club" },
      { id: 2, english_name: "Hsinchu Toastmasters Club" },
      { id: 3, english_name: "Sparkle Toastmasters Club" },
    ]);
    return {
      tickets,
      banquetTicketNumber,
      assignedBanquets,
      remainBanquetTickets,
      clubs,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  updated() {
    console.log(
      this.banquetTicketNumber,
      this.assignedBanquets,
      this.remainBanquetTickets
    );
  },
};
</script>
