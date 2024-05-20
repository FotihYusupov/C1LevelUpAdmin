<template class="dark:bg-slate-700">
  <button
    @click="adModalOpen = !adModalOpen"
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Send
  </button>

  <div
    v-if="adModalOpen"
    class="fixed z-50 w-full h-full top-0 left-0"
    style="background-color: #8282826b"
  >
    <div class="fixed top-24 left-[36%] z-50 max-[600px]:left-[4%]">
      <div class="relative p-4 max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            @click="adModalOpen = !adModalOpen"
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center w-50">
            <h3
              class="mb-5 text-3xl font-semibold text-gray-500 dark:text-gray-400 max-[600px]:text-2xl"
            >
              Send advertisement
            </h3>
            <form @submit="newAd">
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
                >Upload file</label
              >
              <input
                name="image"
                class="block w-[400px] mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
              />
              <label
                for="message"
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your message</label
              >
              <textarea
                name="text"
                id="message"
                rows="4"
                class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                required
              ></textarea>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-2 flex justify-around flex-wrap dark:bg-slate-700 w-[100%]">
    <div
      v-for="ad in ads"
      class="w-[300px] mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a v-if="ad.image" href="#">
        <img
          width="300"
          height="300"
          class="rounded-t-lg"
          :src="ad.image"
          alt=""
        />
      </a>
      <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ ad.startTime.slice(0, 25) }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ ad.endTime.slice(0, 25) }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ ad.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { toast } from "vue3-toastify";

const token = ref(null);
const config = useRuntimeConfig();
const ads = ref([]);
const adModalOpen = ref(false);

onMounted(() => {
  const getToken = JSON.parse(localStorage.getItem("token"));
  token.value = getToken;
  getAd();
});

const getAd = async () => {
  const res = await axios.get(`${config.public.url}/players/ads`, {
    headers: {
      Authorization: `Bearer: ${token.value}`,
    },
  });
  ads.value = res.data.data;
};

const newAd = async (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios.post(`${config.public.url}/players/send`, formData, {
      headers: {
        Authorization: `Bearer: ${token.value}`,
      },
    });
    getAd();
    adModalOpen.value = false
    toast.success("Success!", {
      autoClose: 2000,
    });
  } catch (err) {
    toast.error("Interval Server error!", {
      autoClose: 2000,
    });
  }
};
</script>
