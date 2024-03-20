<script setup>
const { list, list2, addTo } = useCalculation();
const todo = ref("");
const add = () => {
  addTo({ id: list2.value.length, text: todo.value });
  todo.value = null;
};
</script>

<template>
  <div class="m-8">
    <div class="flex justify-between">
      <UInput
        v-model="todo"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        class="ml-4"
        color="white"
        :trailing="false"
        placeholder="AddToDo..."
      />
      <UButton  @click="add()">Add</UButton>
    </div>
    <h1>List ToDo</h1>
    <ol>
        <li v-for="item in list2" :key="item.id">{{ item.text }}</li>
    </ol>
  </div>
</template>