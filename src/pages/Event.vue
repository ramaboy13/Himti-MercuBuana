<script setup>
import maintenance from '../components/state/MaintenanceState.vue'
</script>

<template>
  <section class="">
    <!-- Maintenance Content -->
    <div class="flex h-screen items-center justify-center">
      <maintenance />
    </div>

    <!-- Main content -->

    <!-- <h2 class="text-center text-3xl font-bold text-blue-600">EVENT</h2>
    <div class="mt-6">
      <article
        v-for="post in posts"
        :key="post.id"
        class="mb-6 rounded-lg bg-white p-6 shadow-md"
      >
        <h3 class="text-xl font-semibold text-blue-600">{{ post.title }}</h3>
        <p class="mt-2 text-gray-600">{{ post.excerpt }}</p>
        <button
          class="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Read More
        </button>
      </article>
    </div>  -->
  </section>
</template>

<style scoped></style>
