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

<script setup lang="ts">
import { reactive, ref, onBeforeMount, computed } from "vue";
import List from "@/components/order/List.vue";
import Tickets from "@/components/order/Tickets.vue";

const count = reactive({
  early: 0,
  double: 0,
  first: 0,
  second: 0,
  banquet: 0,
});

const assignments = ref(0);

const setCount = (data) => {
  const { banquet, double, early, first, second } = data;
  count.banquet = banquet;
  count.double = double;
  count.early = early;
  count.first = first;
  count.second = second;
};

const setAssignments = (number) => {
  assignments.value = number;
};

const getRemainder = computed(() => count.banquet - assignments.value);

onBeforeMount(() => {
  window.scrollTo({ top: 0 });
});
</script>

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
