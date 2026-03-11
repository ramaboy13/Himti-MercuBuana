<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

const route = useRoute()
const router = useRouter()

// LOGIKA NAVIGASI AGAR BISA SCROLL DI HOME & PINDAH DI PAGE LAIN
const navItems = computed(() => {
  const pageSpecificItems = {
    Home: [
      { name: 'Home', path: '#' },
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
    // --- TAMBAHAN UNTUK HALAMAN PROGRAM ---
    // Agar menu muncul lengkap saat di halaman /program
    Program: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/#about' }, // Balik ke Home -> Scroll About
      { name: 'Program', path: '#' }, // Stay (Top)
      { name: 'Members', path: '/#team' }, // Balik ke Home -> Scroll Team
      { name: 'Contact us', path: '/#contact' }, // Balik ke Home -> Scroll Contact
    ],
    Blog: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
    About: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
    // DEFAULT FALLBACK (Menu Lengkap)
    // Jika halaman tidak dikenali, tampilkan menu standar ini
    Default: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/#about' },
      { name: 'Program', path: '/program' },
      { name: 'Members', path: '/#team' },
      { name: 'Contact us', path: '/#contact' },
    ],
  }

  // Ambil menu sesuai nama route, atau pakai Default jika tidak ada
  return pageSpecificItems[route.name] || pageSpecificItems['Default']
})
</script>

<template>
  <section class="bg-gray-900">
    <div
      class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div v-for="(item, index) in navItems" :key="index" class="px-5 py-2">
          <a
            :href="item.path"
            class="text-base leading-6 text-gray-500 transition-colors hover:text-main-4"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>

      <div class="mt-8 flex justify-center space-x-6">
        <a href="#" class="text-gray-400 transition-colors hover:text-main-4">
          <span class="sr-only">Facebook</span>
          <Icon icon="simple-icons:facebook" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 transition-colors hover:text-main-4">
          <span class="sr-only">Instagram</span>
          <Icon icon="simple-icons:instagram" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 transition-colors hover:text-main-4">
          <span class="sr-only">Twitter</span>
          <Icon icon="simple-icons:twitter" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 transition-colors hover:text-main-4">
          <span class="sr-only">GitHub</span>
          <Icon icon="simple-icons:github" width="23" height="23" />
        </a>
        <a href="#" class="text-gray-400 transition-colors hover:text-main-4">
          <span class="sr-only">Linkedin</span>
          <Icon icon="simple-icons:linkedin" width="23" height="23" />
        </a>
      </div>

      <p class="mt-8 text-center text-sm leading-6 text-gray-400 lg:text-base">
        © 2025 HIMTI Mercu Buana, Inc. All rights reserved.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
