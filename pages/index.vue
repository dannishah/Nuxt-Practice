<template>
  <div class="text-3xl overflow-auto m-2 max-w-screen font-bold underline">
      
    <!-- <UTable :rows="entries" /> -->
    <!-- {{ entries }} -->
    <!-- <div
      class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="entries.length"
      />
    </div> -->
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
const page = ref(1);
const entries = ref([]);
const pageCount = ref(5);

// useHead({
//   title: 'My App',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
// })

// const { data: items, error, refresh, pending, } = await useFetch("https://api.publicapis.org/entries");
// entries.value = [...items.value.entries];

// const rows = computed(() => {
//   return entries.slice((page.value - 1) * pageCount, (page.value) * pageCount)
// })
</script>


