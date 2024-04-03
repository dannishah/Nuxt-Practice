<template>
  <Head>
    <Title>Practice Site</Title>
    <Meta name="description" content="My website" />
    <Style type="text/css" children="body { background-color: white; }"></Style>
  </Head>
  <NuxtLoadingIndicator />
 <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
  <!-- <NuxtPage></NuxtPage> -->
</template>
<script setup>
// import '~assets/css/main.css'

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
