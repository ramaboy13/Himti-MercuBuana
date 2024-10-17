<template>
  <nav class="bg-blue-600 p-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-2xl font-bold text-white">HimTi Mercu Buana</h1>
      <ul class="flex space-x-4 text-white">
        <li>
          <router-link to="/" class="hover:text-gray-200">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-200"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/blog" class="hover:text-gray-200">Blog</router-link>
        </li>
        <!-- Link ke Blog -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSection',
}
</script>

<style scoped></style>
