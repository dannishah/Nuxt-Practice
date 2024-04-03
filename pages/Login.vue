<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useRouter } from 'vue-router';
import { navigateTo, useFetch } from '#imports';

const router = useRouter()
const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
    const { data: result } = await useFetch(`http://localhost:8000/data?email=${state.email}&password=${state.password}`)
//     const { data } = await $fetch("http://localhost:8000/data", {
//     method: "POST",
//     body: {
//       email: state.email,
//       password: state.password,
//     },
//   });
console.log(result.data.length > 0, "okkkkk");

  if(result.status = 200 && result.data.length > 0 ){
    navigateTo('/')
    localStorage.setItem('user', result.data)
  }
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
    <nuxt-link to="/register">Register</nuxt-link>
  </UForm>
</template>