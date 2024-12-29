<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const route = useRoute()
const router = useRouter()

const navItems = computed(() => {
  const pageSpecificItems = {
    Home: [
      { name: 'Home', path: '#' }, // Path diubah menjadi '#' untuk halaman Home
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
    Blog: [
      { name: 'Home', path: '/' }, // Path tetap '/' untuk halaman selain Home
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
  }

  // Kembalikan item spesifik untuk halaman aktif, fallback ke item umum jika tidak ditemukan
  return pageSpecificItems[route.name] || [{ name: 'Home', path: '/' }]
})
</script>

<template>
  <!-- Foooter -->
  <section class="bg-gray-900">
    <div
      class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div v-for="(item, index) in navItems" :key="index" class="px-5 py-2">
          <a
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-main-4"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="#" class="text-gray-400 hover:text-main-4">
          <span class="sr-only">Facebook</span>
          <Icon icon="simple-icons:facebook" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 hover:text-main-4">
          <span class="sr-only">Instagram</span>
          <Icon icon="simple-icons:instagram" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 hover:text-main-4">
          <span class="sr-only">Twitter</span>
          <Icon icon="simple-icons:twitter" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 hover:text-main-4">
          <span class="sr-only">GitHub</span>
          <Icon icon="simple-icons:github" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 hover:text-main-4">
          <span class="sr-only">Linkedin</span>
          <Icon icon="simple-icons:linkedin" width="23" height="23" />
        </a>
      </div>
      <p class="mt-8 text-center text-sm leading-6 text-gray-400 lg:text-base">
        © 2024 HIMTI Mercu Buana, Inc. All rights reserved.
      </p>
    </div>
  </section>
  <!-- ========== END FOOTER ========== -->
</template>

<style scoped></style>
