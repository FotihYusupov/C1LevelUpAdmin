<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <div
      class="bg-white w-[30%] max-[1000px]:w-[70%] max-[600px]:w-[90%] p-4 rounded"
    >

      <h2 class="text-center text-[32px] font-medium mb-4">Login</h2>
      <form @submit="login" class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Username</label
          >
          <input
            type="text"
            id="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          class="block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const config = useRuntimeConfig();

definePageMeta({
  layout: "empty",
});

const login = async (e) => {
  e.preventDefault();
  try {
    const data = {
      username: username.value,
      password: password.value,
    };
    const res = await axios.post(`${config.public.url}/users/login`, data);
    localStorage.setItem("token", JSON.stringify(res.data.data.token));
    navigateTo("/");
  } catch (err) {
    toast.error("User Not Found!", {
      autoClose: 2000,
    });
    console.log(err);
  }
};

</script>
