<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="profile bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="dark:text-white text-3xl font-bold mb-4">{{ user.username }}</h1>
      <p class="text-gray-700 dark:text-white mb-4"><span class="font-semibold">Password:</span> {{ user.password }}</p>
      <!-- <p class="text-gray-700 dark:text-white mb-4"><span class="font-semibold">Location:</span> {{ user.location }}</p>
      <p class="text-gray-700 dark:text-white mb-4"><span class="font-semibold">Bio:</span> {{ user.bio }}</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const config = useRuntimeConfig();

const user = ref({});

const darkMode = ref(false);
onMounted(async () => {
  const token = JSON.parse(localStorage.getItem('token'))
  const res = await axios.get(`${config.public.url}/users/get-me`, {
    headers: {
      Authorization: `Bearer: ${token}`
    }
  })
  user.value = res.data.data
})
</script>

<style scoped>

</style>
