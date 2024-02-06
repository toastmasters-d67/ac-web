<template>
  <li v-if="visible()" :class="containerClass(item)">
    <template v-if="!template">
      <router-link
        v-if="item.to"
        v-slot="{ navigate, href, isActive, isExactActive }"
        :to="item.to"
        custom
      >
        <a
          :href="href"
          :class="linkClass({ isActive, isExactActive })"
          @click="onClick($event, navigate)"
          :aria-current="isCurrentUrl()"
        >
          <span v-if="item.icon" :class="iconClass"></span>
          <span v-if="item.label" class="p-menuitem-text">{{ label() }}</span>
        </a>
      </router-link>
      <a
        v-else
        :href="item.url || '#'"
        :class="linkClass()"
        @click="onClick"
        :target="item.target"
        :aria-current="isCurrentUrl()"
      >
        <span v-if="item.icon" :class="iconClass"></span>
        <span v-if="item.label" class="p-menuitem-text">{{ label() }}</span>
      </a>
    </template>

    <component v-else :is="template" :item="item"></component>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: Object,
  template: Function,
  exact: Boolean
})

useRouter()

function onClick (event: any, navigate: (arg0: any) => void): void {
  if (props.item.command) {
    props.item.command({
      originalEvent: event,
      item: props.item
    })
  }

  if (props.item.to && navigate) {
    navigate(event)
  }
}

function containerClass (item: { class: string }): string[] {
  return [{ 'p-disabled': disabled(item) }, item.class]
}

function linkClass (routerProps: { isActive: any, isExactActive: any }) {
  return [
    'p-menuitem-link',
    {
      'router-link-active': routerProps?.isActive,
      'router-link-active-exact': props.exact && routerProps?.isExactActive
    }
  ]
}

function visible (): boolean {
  return typeof props.item.visible === 'function'
    ? props.item.visible()
    : props.item.visible !== false
}

function disabled (item: { class?: string, disabled?: any }): boolean {
  return typeof item.disabled === 'function' ? item.disabled() : item.disabled
}

function label (): string {
  return typeof props.item.label === 'function'
    ? props.item.label()
    : props.item.label
}

function isCurrentUrl () {
  const { to, url } = props.item
  const lastPath = `/${window.location.href.split('/').pop()}`

  return to === lastPath || url === lastPath ? 'page' : false
}

const iconClass = computed(() => {
  return ['p-menuitem-icon', props.item.icon]
})
</script>
