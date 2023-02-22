<template>
  <article id="order" class="order-container">
    <MyOrder :tickets="tickets" :remainBanquets="remainBanquets" />
    <Attendee
      :tickets="tickets"
      :totalBanquets="totalBanquets"
      :assignedBanquets="assignedBanquets"
      :clubs="clubs"
      @updateAssignedBanquets="assignedBanquets = $event"
    />
  </article>
</template>

<style scoped lang="scss">
.order-container {
  display: flex;
  gap: 20px;
  margin: 80px 8.33% 200px 8.33%;
}
@media screen and (max-width: 768px) {
  .order-container {
    flex-direction: column;
    margin: 80px 4.27% 200px 4.27%;
  }
}
</style>

<script>
import { reactive, computed } from "vue";
import MyOrder from "@/components/order/MyOrder.vue";
import Attendee from "@/components/order/Attendee.vue";

export default {
  name: "OrderInformationView",
  components: {
    MyOrder,
    Attendee,
  },
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
    const totalBanquets = 2;
    const assignedBanquets = 0;
    const remainBanquets = computed(
      () => this.totalBanquets - this.assignedBanquets
    );
    const clubs = reactive([
      { id: 1, english_name: "Happiness Toastmasters Club" },
      { id: 2, english_name: "Hsinchu Toastmasters Club" },
      { id: 3, english_name: "Sparkle Toastmasters Club" },
    ]);
    return {
      tickets,
      totalBanquets,
      assignedBanquets,
      remainBanquets,
      clubs,
    };
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  updated() {
    console.log(this.totalBanquets, this.assignedBanquets, this.remainBanquets);
  },
};
</script>
