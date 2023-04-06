<script>
import { reactive, ref } from "vue";
import List from "@/components/order/List.vue";
import Tickets from "@/components/order/Tickets.vue";

export default {
  name: "OrderView",
  components: {
    List,
    Tickets,
  },
  data() {
    const count = reactive({
      early: 0,
      double: 0,
      first: 0,
      second: 0,
      banquet: 0,
    });
    const assignments = ref(0);
    return {
      count,
      assignments,
    };
  },
  methods: {
    setCount(data) {
      const { banquet, double, early, first, second } = data;
      this.count.banquet = banquet;
      this.count.double = double;
      this.count.early = early;
      this.count.first = first;
      this.count.second = second;
    },
    setAssignments(number) {
      this.assignments = number;
    },
  },
  computed: {
    getRemainder() {
      return this.count.banquet - this.assignments;
    },
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>

<template>
  <article id="order" class="order-container">
    <List :count="count" :remainder="getRemainder" />
    <Tickets
      :count="count"
      :setCount="setCount"
      :assignments="assignments"
      :setAssignments="setAssignments"
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
    gap: 0px;
    margin: 15px 4.27% 100px 4.27%;
  }
}
</style>
