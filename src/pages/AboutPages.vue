<script setup>
import { onMounted, nextTick } from 'vue'

import galleryData from '../assets/data/dataGallery.json'
import teamData from '../assets/data/dataTeam.json'
import AboutSection from '../components/AboutPageSection.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroAboutSection from '../components/HeroAboutSection.vue'
import GallerySection from '../components/GallerySection.vue'
import DivisionsSection from '../components/DivisionsSection.vue'

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
