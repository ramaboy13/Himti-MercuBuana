<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import GalleryCard from '../components/GalleryCard.vue'

defineProps({
  galleryItems: {
    type: Array,
    default: () => []
  }
})

// -- LOGIC SLIDER BUTTONS --
const sliderContainer = ref(null)

const scrollLeft = () => {
  if (sliderContainer.value) {
    const { scrollLeft, scrollWidth } = sliderContainer.value
    if (scrollLeft <= 5) {
      sliderContainer.value.scrollTo({ left: scrollWidth, behavior: 'smooth' })
    } else {
      sliderContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }
}

const scrollRight = () => {
  if (sliderContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = sliderContainer.value
    if (scrollLeft + clientWidth >= scrollWidth - 5) {
      sliderContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      sliderContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }
}

// -- DRAG TO SCROLL (SMOOTH) --
const isDragging = ref(false)
const startX = ref(0)
const scrollLeftPos = ref(0)
const velocity = ref(0)
const lastX = ref(0)
const lastTime = ref(0)
const momentumId = ref(null)

const handleMouseDown = (e) => {
  if (!sliderContainer.value) return
  
  // Cancel any ongoing momentum
  if (momentumId.value) {
    cancelAnimationFrame(momentumId.value)
    momentumId.value = null
  }
  
  isDragging.value = true
  startX.value = e.pageX - sliderContainer.value.offsetLeft
  scrollLeftPos.value = sliderContainer.value.scrollLeft
  lastX.value = e.pageX
  lastTime.value = Date.now()
  velocity.value = 0
}

const handleMouseMove = (e) => {
  if (!isDragging.value || !sliderContainer.value) return
  e.preventDefault()
  
  const x = e.pageX - sliderContainer.value.offsetLeft
  const walk = (x - startX.value) * 1.2
  sliderContainer.value.scrollLeft = scrollLeftPos.value - walk
  
  // Calculate velocity for momentum
  const now = Date.now()
  const dt = now - lastTime.value
  if (dt > 0) {
    velocity.value = (e.pageX - lastX.value) / dt
  }
  lastX.value = e.pageX
  lastTime.value = now
}

const applyMomentum = () => {
  if (!sliderContainer.value || Math.abs(velocity.value) < 0.01) {
    velocity.value = 0
    return
  }
  
  sliderContainer.value.scrollLeft -= velocity.value * 15
  velocity.value *= 0.95 // Friction/damping
  
  momentumId.value = requestAnimationFrame(applyMomentum)
}

const handleMouseUp = () => {
  if (!isDragging.value) return
  isDragging.value = false
  
  // Apply momentum
  if (Math.abs(velocity.value) > 0.1) {
    applyMomentum()
  }
}

const handleMouseLeave = () => {
  if (isDragging.value) {
    isDragging.value = false
    
    // Apply momentum on leave too
    if (Math.abs(velocity.value) > 0.1) {
      applyMomentum()
    }
  }
}
</script>

<template>
  <section class="bg-main-1 pb-[300px] pt-[300px] text-white" id="gallery" data-aos="fade-up">
    <div class="container mx-auto max-w-7xl px-6">
      <h2 class="text-center text-3xl font-bold md:text-4xl">Galeri Kegiatan HIMTI</h2>
      <div class="mx-auto mt-3 h-1 w-48 bg-purple-600"></div>
      <p class="mx-auto mt-4 max-w-3xl text-center text-sm text-gray-300 md:text-base">
        Setiap foto di galeri ini merekam kisah tentang inovasi, kebersamaan,
        dan kepedulian. Kami percaya bahwa teknologi bukan hanya untuk
        kemajuan individu, tapi juga untuk kebaikan bersama.
      </p>
    </div>

    <!-- Gallery Carousel Container matching Program -->
    <div class="group relative mt-16 mt-8">
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 z-20 -ml-5 hidden -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#180D2A] bg-[#6d28d9] p-3 text-white opacity-0 shadow-lg transition-all hover:bg-[#5b21b6] group-hover:opacity-100 md:flex lg:left-8"
      >
        <Icon icon="mdi:chevron-left" width="30" />
      </button>

      <div
        ref="sliderContainer"
        class="scrollbar-hide flex w-full snap-x flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-14 pr-10 pl-6 select-none lg:pl-16 md:px-16"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseLeave"
      >
        <div
          v-for="item in galleryItems"
          :key="item.id"
          class="relative flex flex-shrink-0 snap-center transition-all duration-300 w-[85vw] sm:w-[320px]"
        >
          <GalleryCard :item="item" class="h-full w-full pointer-events-none sm:pointer-events-auto" />
        </div>
      </div>

      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#180D2A] bg-[#6d28d9] p-3 text-white opacity-0 shadow-lg transition-all hover:bg-[#5b21b6] group-hover:opacity-100 md:flex lg:right-8"
      >
        <Icon icon="mdi:chevron-right" width="30" />
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar agar desain bersih (tapi tetap bisa discroll pakai tombol/swipe) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>