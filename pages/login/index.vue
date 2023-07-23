<script lang="ts">
export default {
  setup() {
    return { name: "xico" };
  },
};
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <h1 class="text-2xl m-5 font-semibold">Login</h1>
    <form class="w-96">
      <div class="flex items-start justify-center flex-col p-2">
        <label
          for="email"
          class="block font-medium text-gray-700 py-2 text-lg"
          >Email</label
        >
        <input
          type="email"
          name="email"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="flex items-start justify-center flex-col p-2">
        <label
          for="password"
          class="block font-medium text-gray-700 py-2 text-lg"
          >Password</label
        >
        <input
          type="password"
          name="password"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        class="w-full bg-green-400 text-white rounded-md h-10 my-4 text-lg font-semibold"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>
