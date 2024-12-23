<script>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { nextTick, onMounted, ref, watch } from 'vue' // Tambahkan nextTick
import data from '../assets/data/dataTeam.json'
import MemberCard from './MemberCard.vue'

export default {
  name: 'MemberCarousel',
  components: {
    MemberCard,
    Icon,
  },
  setup() {
    const members = ref([])
    const isCarouselInitialized = ref(false)

    const initCarousel = async () => {
      await nextTick()
      try {
        // Pastikan HSCarousel tersedia
        if (typeof window !== 'undefined' && window.HSCarousel) {
          // Destroy carousel yang ada jika ada
          const carouselElement = document.querySelector('[data-hs-carousel]')
          if (carouselElement) {
            const carousel = window.HSCarousel.getInstance(carouselElement)
            if (carousel) {
              carousel.destroy()
            }
          }
          // Inisialisasi carousel baru
          window.HSCarousel.init()
          isCarouselInitialized.value = true
        }
      } catch (error) {
        console.error('Error initializing carousel:', error)
      }
    }

    const loadMembers = () => {
      try {
        members.value = data.data
      } catch (error) {
        console.error('Error loading members:', error)
        members.value = []
      }
    }

    // Watch perubahan pada members
    watch(
      members,
      () => {
        initCarousel()
      },
      { deep: true },
    )

    // Lifecycle hooks
    onMounted(async () => {
      loadMembers()
      await initCarousel()
    })

    return {
      members,
      isCarouselInitialized,
    }
  },
}
</script>

<template>
  <div class="h-full text-center">
    <div
      data-hs-carousel='{
        "isDraggable": true,
        "isInfiniteLoop": true,
        "isAutoplay": true,
        "interval": 3000,
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
        "slidesQty": {
          "xs": 1,
          "md": 3,
          "lg": 4
        }
      }'
      class="relative"
    >
      <div class="hs-carousel w-full overflow-hidden rounded-lg bg-transparent">
        <div class="relative min-h-96">
          <div
            class="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap transition-transform duration-700"
            :class="{ 'opacity-0': !isCarouselInitialized }"
          >
            <div
              v-for="(member, index) in members"
              :key="member.id || index"
              class="hs-carousel-slide w-full px-1 sm:w-1/2 lg:w-1/3"
            >
              <MemberCard :member="member" v-if="member" />
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        type="button"
        class="hs-carousel-prev absolute inset-y-0 start-0 inline-flex h-full w-[46px] items-center justify-center rounded-s-lg text-gray-800 hover:bg-gray-800/10 focus:bg-gray-800/10 focus:outline-none hs-carousel-disabled:pointer-events-none hs-carousel-disabled:opacity-50 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Previous slide"
      >
        <span class="text-2xl" aria-hidden="true">
          <Icon
            icon="material-symbols:chevron-left-rounded"
            color="black"
            width="24"
          />
        </span>
        <span class="sr-only">Previous</span>
      </button>

      <button
        type="button"
        class="hs-carousel-next absolute inset-y-0 end-0 inline-flex h-full w-[46px] items-center justify-center rounded-e-lg text-gray-800 hover:bg-gray-800/10 focus:bg-gray-800/10 focus:outline-none hs-carousel-disabled:pointer-events-none hs-carousel-disabled:opacity-50 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Next slide"
      >
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <span class="rounded-full bg-red-500">
            <Icon
              icon="material-symbols:chevron-right-rounded"
              color="black"
              width="24"
            />
          </span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.hs-carousel-body {
  will-change: transform;
}

.hs-carousel-slide {
  transition: opacity 0.3s ease-in-out;
}

/* Optional: Tambahkan animasi fade untuk transisi slide */
.hs-carousel-slide.active {
  opacity: 1;
}

.hs-carousel-slide:not(.active) {
  opacity: 0.5;
}
</style>
