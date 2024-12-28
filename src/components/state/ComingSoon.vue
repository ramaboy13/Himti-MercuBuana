<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>
<template>
  <!-- Page Coming Soon -->
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-8 animate-pulse text-4xl font-bold text-white lg:text-5xl">
      Coming Soon
    </h1>

    <p class="text-md mb-8 px-3 text-center text-white lg:text-lg">
      We're working hard to bring you something
      <span class="text-purple-500"> amazing</span>. Stay tuned!
    </p>
    <button>
      <router-link
        to="/"
        class="text-md rounded-full bg-accent px-4 py-2 font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 lg:px-6 lg:py-3 lg:text-lg"
      >
        Go Home
      </router-link>
    </button>
  </div>
</template>
<style lang=""></style>
