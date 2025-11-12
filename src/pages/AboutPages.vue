<script setup>
import { onMounted, nextTick } from 'vue'

// 1. Impor data JSON Anda
import galleryData from '../assets/data/dataGallery.json'
import teamData from '../assets/data/dataTeam.json'

// 2. Impor komponen yang sudah ada
import AboutSection from '../components/AboutPageSection.vue'
import FooterSection from '../components/FooterSection.vue'

// 3. Impor komponen baru yang kita pecah
import HeroAboutSection from '../components/HeroAboutSection.vue'
import GallerySection from '../components/GallerySection.vue'
import DivisionsSection from '../components/DivisionsSection.vue'

// Inisialisasi Preline (Carousel & Accordion) tetap di halaman utama
// agar dieksekusi setelah semua komponen di-render
onMounted(() => {
  nextTick(() => {
    if (window.HSCarousel) {
      window.HSCarousel.autoInit()
    }
    if (window.HSAccordion) {
      window.HSAccordion.autoInit()
    }
  })
})
</script>

<template>
  <div class="bg-main-1">
    <HeroAboutSection />

    <AboutSection class="about-section" id="about" />

    <GallerySection :galleryItems="galleryData.gallery" />

    <DivisionsSection :members="teamData.data" />

    <FooterSection />
  </div>
</template>

<style scoped>
/* File ini bisa jadi tidak memerlukan style sama sekali,
   karena style sudah dipindahkan ke komponennya masing-masing */
</style>