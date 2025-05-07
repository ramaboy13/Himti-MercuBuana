<script>
  import { Icon } from '@iconify/vue/dist/iconify.js'
  import { nextTick, onMounted, ref, watch } from 'vue'
  import data from '../assets/data/dataTeam.json'
  import MemberCard from './card/MemberCard.vue'

  export default {
    name: 'MemberCarousel',
    components: {
      MemberCard,
      Icon,
    },
    setup() {
      const members = ref([])
      const isCarouselInitialized = ref(false)

      const destroyCarousel = () => {
        try {
          const carouselElement = document.querySelector('[data-hs-carousel]')

          if (!carouselElement) {
            console.warn('Carousel element not found. Skipping destruction.')
            return
          }

          const carouselInstance =
            window.HSCarousel.getInstance(carouselElement)

          if (carouselInstance) {
            carouselInstance.destroy()
            console.log('Carousel destroyed successfully.')
          }

          isCarouselInitialized.value = false
        } catch (error) {
          console.error('Error destroying carousel:', error)
        }
      }

      const reinitializeCarousel = () => {
        try {
          window.HSCarousel.autoInit()
          console.log('Carousel reinitialized successfully.')
          isCarouselInitialized.value = true
        } catch (error) {
          console.error('Error reinitializing carousel:', error)
        }
      }

      const initCarousel = async () => {
        try {
          await nextTick() // Tunggu hingga DOM selesai diperbarui
          const carouselElement = document.querySelector('[data-hs-carousel]')

          if (!carouselElement) {
            console.warn('Carousel element not found for initialization.')
            return
          }

          destroyCarousel() // Hancurkan carousel sebelumnya jika ada
          reinitializeCarousel() // Inisialisasi ulang carousel
        } catch (error) {
          console.error('Error initializing carousel:', error)
        }
      }

      const loadMembers = () => {
        try {
          members.value = data.data || []
        } catch (error) {
          console.error('Error loading members:', error)
          members.value = []
        }
      }

      // Watch perubahan pada data members
      watch(
        () => members.value,
        async (newMembers) => {
          if (newMembers.length > 0) {
            await initCarousel()
          }
        },
        { immediate: true },
      )

      // Lifecycle hooks
      onMounted(() => {
        loadMembers()
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
        "loadingClasses": "hidden",
        "dotsItemClasses": "hs-carousel-active:bg-white hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
        "slidesQty": {
          "xs": 1,
          "md": 3,
          "lg": 4
        }
      }'
      class="relative">
      <div class="hs-carousel w-full overflow-hidden rounded-lg bg-transparent">
        <div class="relative min-h-96">
          <div
            class="hs-carousel-body bg-red absolute bottom-0 start-0 top-0 flex flex-nowrap transition-transform duration-700"
            :class="{ 'opacity-0': !isCarouselInitialized }"
            :data-initialized="isCarouselInitialized">
            <div
              v-for="(member, index) in members"
              :key="member.id || index"
              class="hs-carousel-slide w-full px-1 sm:w-1/2 lg:w-1/3">
              <!-- Member Card -->
              <div
                class="relative transform transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-lg">
                <MemberCard :member="member" v-if="member" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div
        v-if="members.length === 0"
        class="flex min-h-full flex-col rounded-xl shadow-xs dark:bg-neutral-800 dark:shadow-neutral-700/70">
        <div
          class="flex flex-auto flex-col items-center justify-center p-4 md:p-5">
          <div class="flex justify-center">
            <div
              class="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-accent"
              role="status"
              aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        type="button"
        class="hs-carousel-prev absolute start-0 top-1/2 inline-flex h-[46px] w-[46px] -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-accent text-gray-800 hover:bg-main-2 hs-carousel-disabled:pointer-events-none hs-carousel-disabled:opacity-50"
        aria-label="Previous slide">
        <span class="text-2xl" aria-hidden="true">
          <Icon
            icon="material-symbols:chevron-left-rounded"
            color="black"
            width="24" />
        </span>
        <span class="sr-only">Previous</span>
      </button>

      <button
        type="button"
        class="hs-carousel-next absolute end-0 top-1/2 inline-flex h-[46px] w-[46px] -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full bg-accent text-gray-800 hover:bg-main-2 hs-carousel-disabled:pointer-events-none hs-carousel-disabled:opacity-50"
        aria-label="Next slide">
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <span class="rounded-full bg-red-500">
            <Icon
              icon="material-symbols:chevron-right-rounded"
              color="black"
              width="24" />
          </span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .hs-carousel-body {
    will-change: transform;
    opacity: 0; /* Awalnya disembunyikan */
    transition: opacity 0.3s ease-in-out;
  }

  .hs-carousel-body[data-initialized='true'] {
    opacity: 1; /* Tampilkan jika sudah diinisialisasi */
  }

  .hs-carousel-slide {
    transition: opacity 0.3s ease-in-out;
    overflow: visible;
  }

  .hs-carousel-slide:hover::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    z-index: -2; /* Membantu mengangkat */
  }

  .hs-carousel-slide > div {
    transition:
      transform 0.3s ease-in-out,
      z-index 0.3s;
  }

  /* Optional: Tambahkan animasi fade untuk transisi slide */
  .hs-carousel-slide.active {
    opacity: 1;
  }

  .hs-carousel-slide:not(.active) {
    opacity: 0.5;
  }
</style>
