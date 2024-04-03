<template>
<div>
    <h1>Here is the route id: {{ route.params.id }}</h1>
    <h1>Here is the Search: {{ route.query.search }}</h1>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

</script>