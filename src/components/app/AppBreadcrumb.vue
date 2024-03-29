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

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import BreadcrumbItem from '@/components/app/AppBreadcrumbItem.vue'
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n()
const route = useRoute()

const mapping: Record<string, string> = tm('app.breadcrumb')
const home = reactive({
  label: rt(mapping['/']),
  to: '/'
})

const model = reactive([])
const segments = route.path.slice(1).split('/')
segments.forEach((segment, index) => {
  const url = `/${segments.slice(0, index + 1).join('/')}`
  const item = {
    label: rt(mapping[segment] || segment),
    to: url
  }
  model.push(item)
})

const exact = ref(true)
</script>

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
  color: #675de2 !important;
}

.p-breadcrumb-chevron {
  color: #675de2 !important;
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

@media screen and (max-width: 768px) {
  .p-breadcrumb {
    padding-top: 25px;
    margin-bottom: 15px;
    margin-left: 2.5%;
  }

  .p-menuitem-text {
    font-size: 10px;
    line-height: 15px;
  }

  .p-breadcrumb-chevron {
    margin: 0 0.25rem 0 0.25rem;
    font-size: 10px;
  }
}
</style>
