<template>
  <div
    class="h-full rounded p-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
  >
    <div class="flex items-start max-[600px]:block">
      <div class="bg-blue-100 dark:bg-gray-700 rounded p-4 w-[50%] max-[600px]:w-full">
        <div>
          <span class="flex items-center">
            <svg class="max-[600px]:hidden" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="colorMode.preference == 'dark' ? '#ffffff' : '#1f2937'"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
            <h2 class="text-xl font-medium ml-2 mb-3 max-[600px]:ml-0 max-[600px]:leading-[22px]">
              Administrator panelidagi login va parol haqida.
            </h2>
          </span>
          <p class="text-lg leading-6 mb-2 max-[600px]:text-[14px] max-[600px]:leading-1">
            Administrator panelingiz uchun login va parolingizni hech kimga aytmang!
          </p>
        </div>
        <div>
          <span class="flex items-center">
            <svg class="max-[600px]:hidden" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="colorMode.preference == 'dark' ? '#ffffff' : '#1f2937'"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
            <h2 class="text-xl font-medium ml-2 mb-3 max-[600px]:ml-0 max-[600px]:leading-[22px]">
              Muammo.
            </h2>
          </span>
          <p class="text-lg leading-6 mb-2 max-[600px]:text-[14px] max-[600px]:leading-1">
            Agar tizimingizda muammolarga duch kelsangiz, biz bilan bog'laning!
          </p>
        </div>
      </div>
      <div>
        <img src="/default.svg" alt="Default home page photo">
      </div>
    </div>
  </div>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
