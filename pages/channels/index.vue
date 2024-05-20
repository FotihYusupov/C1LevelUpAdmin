<template class="dark:bg-slate-700">
  <button
    @click="addModalOpen = !addModalOpen"
    class="block mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Add channel
  </button>

  <div
    v-if="addModalOpen"
    class="fixed z-50 w-full h-full top-0 left-0"
    style="background-color: #8282826b"
  >
    <div class="fixed top-24 left-[36%] z-50 max-[600px]:left-[4%]">
      <div class="relative p-4 max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            @click="addModalOpen = !addModalOpen"
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
              Add channel
            </h3>
            <form @submit="AddChannel">
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="channelName"
                >Channel Name</label
              >
              <input
                class="block w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="channelName"
                type="text"
                placeholder="Channel Name"
                required
              />
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="channelLink"
                >Channel Link</label
              >
              <input
                class="block w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="channelLink"
                type="text"
                placeholder="Channel Link"
                required
              />
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="channelId"
                >Channel Chat Id</label
              >
              <input
                class="block arrows-none w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="channelId"
                type="number"
                placeholder="Channel Chat Id"
                required
              />
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

  <div
    v-if="updateModalOpen"
    class="fixed z-50 w-full h-full top-0 left-0"
    style="background-color: #8282826b"
  >
    <div class="fixed top-24 left-[36%] z-50 max-[600px]:left-[4%]">
      <div class="relative p-4 max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            @click="updateModalOpen = !updateModalOpen"
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
              Update channel
            </h3>
            <form @submit="updateChannel">
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="updateChannelName"
                >Channel Name</label
              >
              <input
                class="block w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="updateChannelName"
                type="text"
                placeholder="Channel Name"
                required
              />
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="updateChannelLink"
                >Channel Link</label
              >
              <input
                class="block w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="updateChannelLink"
                type="text"
                placeholder="Channel Link"
                required
              />
              <label
                class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="updateChannelId"
                >Channel Chat Id</label
              >
              <input
                class="block arrows-none w-[400px] max-[600px]:w-[270px] p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="updateChannelId"
                type="number"
                placeholder="Channel Chat Id"
                required
              />
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

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Channel name</th>
          <th scope="col" class="px-6 py-3">Link</th>
          <th scope="col" class="px-6 py-3">Chat id</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="channel in channels"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ channel.name }}
          </th>
          <td class="px-6 py-4"><a target="_blank" :href="channel.channelLink">{{ channel.channelLink }}</a></td>
          <td class="px-6 py-4">{{ channel.chatId }}</td>
          <td class="px-6 py-4 text-right">
            <button
              @click="openUpdateModel(channel)"
              :id="channel._id"
              class="font-medium mr-2 text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              @click="deleteChannel"
              :id="channel._id"
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const addModalOpen = ref(false);
const config = useRuntimeConfig();
const token = ref(null);
const channels = ref([]);
const updateModalOpen = ref(false);

onMounted(() => {
  const getToken = JSON.parse(localStorage.getItem("token"));
  token.value = getToken;
  getChannels();
});

const getChannels = async () => {
  // console.log(token.value)
  const res = await axios.get(`${config.public.url}/channels`, {
    headers: {
      Authorization: `Bearer: ${token.value}`,
    },
  });
  channels.value = res.data.data;
};

const AddChannel = async (e) => {
  e.preventDefault();
  try {
    await axios.post(
      `${config.public.url}/channels`,
      {
        name: channelName.value,
        channelLink: channelLink.value,
        chatId: channelId.value,
      },
      {
        headers: {
          Authorization: `Bearer: ${token.value}`,
        },
      }
    );
    addModalOpen.value = false;
    getChannels();
    toast.success("Success!", {
      autoClose: 2000,
    });
  } catch (err) {
    toast.error("Interval server error!", {
      autoClose: 2000,
    });
  }
};

const deleteChannel = async (e) => {
  try {
    const id = e.target.id;
    const res = await axios.delete(`${config.public.url}/channels/${id}`, {
      headers: {
        Authorization: `Bearer: ${token.value}`,
      },
    });
    getChannels();
    toast.success("Success!", {
      autoClose: 2000,
    });
  } catch (err) {
    toast.error("Interval server error!", {
      autoClose: 2000,
    });
  }
};

const findChannelId = ref('')

const openUpdateModel = (channel) => {
  updateModalOpen.value = true;
  findChannelId.value = channel._id
  setTimeout(() => {
    (updateChannelName.value = channel.name),
      (updateChannelLink.value = channel.channelLink),
      (updateChannelId.value = channel.chatId);
  }, 100);
};

const updateChannel = async (e) => {
  e.preventDefault();
  try {
    await axios.put(
      `${config.public.url}/channels/${findChannelId.value}`,
      {
        name: updateChannelName.value,
        channelLink: updateChannelLink.value,
        chatId: updateChannelId.value,
      },
      {
        headers: {
          Authorization: `Bearer: ${token.value}`,
        },
      }
    );
    updateModalOpen.value = false;
    getChannels();
    toast.success("Success!", {
      autoClose: 2000,
    });
  } catch (err) {
    toast.error("Interval server error!", {
      autoClose: 2000,
    });
  }
};
</script>
