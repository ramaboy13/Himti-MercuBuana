<script setup lang="js">
  import { Icon } from '@iconify/vue/dist/iconify.js'
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import socialData from '../assets/data/socmed.json' // Import data sosial media

  const route = useRoute()

  // Daftar link sosial media
  // kalau tidak ada socmed kosongkan saja url nya nanti otomatis tidak akan ditampilkan
  const socialLinks = socialData.data

  const filteredSocialLinks = computed(
    () => socialLinks.filter((social) => social.url) // ambil yang memiliki link
  )

  // Menentukan navigasi berdasarkan halaman
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
      class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div v-for="(item, index) in navItems" :key="index" class="px-5 py-2">
          <a
            :href="item.path"
            class="hover:text-main-4 text-base leading-6 text-gray-500">
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a
          v-for="(social, index) in filteredSocialLinks"
          :key="index"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            social.name === 'LinkedIn' ? 'scale-125' : '', // Skala lebih besar untuk LinkedIn
            'cursor-pointer text-2xl text-gray-400 transition-colors duration-200 hover:text-accent',
          ]">
          <span class="sr-only">{{ social.name }}</span>

          <Icon :icon="social.icon" />
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
