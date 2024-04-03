<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [
{
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Inbox",
    icon: "i-heroicons-inbox",
    badge: "4",
    to: "/inbox",
  },
  {
    label: "Todo List",
    icon: "i-heroicons-user-group",
    to: "/todo"
  },
  {
    label: "Id and search params",
    icon: "i-heroicons-user-group",
    to: "/users-id/:id"
  },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>