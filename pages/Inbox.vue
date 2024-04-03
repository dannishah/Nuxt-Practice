<template>
   <div>
   <div class="flex justify-between">
      <UInput
        v-model="value1"
        type="number"
        size="xl"
        class="ml-4"
        color="white"
        :trailing="false"
        placeholder="AddToDo..."
      />
      <!-- <UInputMenu type="number" v-model="action" :options="items" /> -->
      <UInput
        v-model="value2"
        type="number"
        size="xl"
        class="ml-4"
        color="white"
        :trailing="false"
        placeholder="AddToDo..."
      />
      <UButton @click="add()">Add</UButton>
    </div>
    <h1>Result</h1>
    {{ result }}
       </div>
</template>

<script setup>
const value1 = ref(0);
const value2 = ref(0);
// const action = Symbol('+');

// const items = ['+', '-', '*', '/' ]



const { result, calculate } = useCalculation();
const add = () => {
  console.log(typeof action, "action")
   calculate( value1.value, value2.value );
};

</script>