<template>
  <nav class="p-breadcrumb p-component">
    <ul>
      <BreadcrumbItem
        v-if="home"
        :item="home"
        class="p-breadcrumb-home"
        :template="$slots.item"
        :exact="exact"
      />
      <template v-for="item of model" :key="item.label">
        <li
          class="p-breadcrumb-chevron pi pi-chevron-right"
          :aria-hidden="true"
        ></li>
        <BreadcrumbItem :item="item" :template="$slots.item" :exact="exact" />
      </template>
    </ul>
  </nav>
</template>

<style>
.p-breadcrumb {
  background: transparent;
  padding-top: 50px;
  margin-bottom: 50px;
  margin-left: 5%;
  border: 0;
  overflow-x: auto;
}
.p-menuitem-text {
  font-family: "Montserrat" !important;
  font-size: 24px;
  font-weight: 500;
  line-height: 15px;
  color: #214366 !important;
}
.p-breadcrumb-chevron {
  color: #214366 !important;
  margin: 0 0.5rem 0 0.5rem;
}
.p-breadcrumb ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.p-breadcrumb .p-menuitem-text {
  line-height: 1;
}
.p-breadcrumb .p-menuitem-link {
  text-decoration: none;
}
.p-breadcrumb::-webkit-scrollbar {
  display: none;
}
</style>

<script>
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import BreadcrumbItem from "@/components/app/BreadcrumbItem.vue";
import mapping from "@/assets/data/breadcrumb.json";

export default {
  name: "Breadcrumb",
  components: {
    BreadcrumbItem: BreadcrumbItem,
  },
  setup() {
    const home = reactive({
      label: mapping["/"],
      to: "/",
    });
    const route = useRoute();
    const path = computed(() => route.path);
    const segments = path.value.slice(1).split("/");
    const model = reactive([]);
    Array.from(segments).forEach((segment) => {
      const key = path.value.indexOf(segment);
      const url = `${path.value.slice(0, key)}${segment}`;
      const item = {
        label: mapping[segment],
        to: url,
      };
      model.push(item);
    });
    const exact = ref(true);

    return { home, model, exact };
  },
};
</script>
