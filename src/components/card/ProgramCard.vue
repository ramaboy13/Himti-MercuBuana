<script setup>
import { Icon } from '@iconify/vue'

// Definisikan props yang diterima oleh komponen
const props = defineProps({
  title: String, // Judul card
  icon: String, // Nama ikon
  items: Array, // Daftar fitur
  route: String, // Route untuk tombol daftar
})
</script>

<template>
  <div
    class="content-center justify-center rounded-2xl border border-accent bg-gray-900 p-6 shadow-2xl"
  >
    <!-- Header Card -->
    <div class="mb-4 flex items-center">
      <Icon :icon="icon" width="44" />
      <h2 class="ml-4 text-xl font-bold">{{ title }}</h2>
    </div>

    <!-- List Fitur -->
    <ul class="mb-4">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="mb-2 flex items-center"
      >
        <i class="rounded-full bg-accent p-2 text-3xl text-primary">
          <Icon icon="mdi:check" width="20" />
        </i>
        <span class="ml-2">{{ item }}</span>
      </li>
    </ul>

    <!-- Tombol Daftar -->
    <div class="w-fit justify-self-center">
      <router-link
        :to="route"
        class="flex items-center gap-1 rounded-xl bg-accent bg-linear-to-br from-accent to-pink-300 px-4 py-2 text-primary shadow-lg hover:shadow-xl"
      >
        <span class="font-medium">Daftar</span>
        <Icon icon="mdi:arrow-right" :class="'text-primary'" width="auto" />
      </router-link>
    </div>
  </div>
</template>
