<script setup lang="ts">
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
    to: "/users/:id"
  },
  // {
  //   label: "Settings",
  //   icon: "i-heroicons-cog-8-tooth",
  //   children: [
  //     {
  //       label: "General",
  //       to: "/setting"
  //     },
  //     {
  //       label: "Members",
  //       to: "/setting"
  //     },
  //     {
  //       label: "Notifications",
  //       to: "/setting"
  //     },
  //   ],
  // },
];
</script>

<template>
  <UDashboardLayout style="max-width: 100vw;">
    <UDashboardPanel :width="300" :resizable="{ min: 200, max: 400 }">
      <UDashboardNavbar>
        <template #left>
          <NuxtImg src="/public/favicon" />
        </template>
        <template #right>
         <nuxt-link to="/login">login</nuxt-link>
         <nuxt-link to="/register">register</nuxt-link>
        </template>
      </UDashboardNavbar>
      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links" />
        <template #footer>
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>
    <slot />
  </UDashboardLayout>
</template>
