<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import GalleryCard from '../components/GalleryCard.vue'

defineProps({
  galleryItems: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="bg-main-1 pt-[300px] pb-[300px] text-white" id="gallery" data-aos="fade-up">
    <div class="container mx-auto max-w-7xl px-6">
      <h2 class="text-center text-4xl font-bold">Galeri Kegiatan HIMTI</h2>
      <div class="mt-3 h-1 w-48 bg-purple-600 mx-auto"></div>
      <p class="mx-auto mt-4 max-w-3xl text-center text-base text-gray-300">
        Setiap foto di galeri ini merekam kisah tentang inovasi, kebersamaan,
        dan kepedulian. Kami percaya bahwa teknologi bukan hanya untuk
        kemajuan individu, tapi juga untuk kebaikan bersama.
      </p>
    </div>

    <div
      data-hs-carousel='{
            "isDraggable": true,
            "isInfiniteLoop": true,
            "slidesQty": {
              "xs": 1.2,
              "sm": 2.5,
              "lg": 4
            },
            "loadingClasses": "hidden"
          }'
      class="relative mt-16"
    >
      <div class="overflow-hidden px-6 lg:px-24">
        <div class="hs-carousel w-full rounded-lg bg-transparent py-4">
          <div class="hs-carousel-body flex flex-nowrap carousel-gap">
            <div
              v-for="item in galleryItems" 
              :key="item.id"
              class="hs-carousel-slide"
            >
              <GalleryCard :item="item" class="h-full" />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute left-4 top-1/2 z-20 -translate-y-1/2 lg:left-12">
        <button
          type="button"
          class="hs-carousel-prev inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-700"
          aria-label="Previous slide"
        >
          <Icon icon="mdi:chevron-left" class="text-3xl" />
        </button>
      </div>
      <div class="absolute right-4 top-1/2 z-20 -translate-y-1/2 lg:right-12">
        <button
          type="button"
          class="hs-carousel-next inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-700"
          aria-label="Next slide"
        >
          <Icon icon="mdi:chevron-right" class="text-3xl" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hs-carousel-slide {
  min-width: 300px;
}

.carousel-gap {
  gap: 50px;
}

.hs-carousel-body {
  padding-left: 0;
  padding-right: 0;
}

.hs-carousel-prev,
.hs-carousel-next {
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>