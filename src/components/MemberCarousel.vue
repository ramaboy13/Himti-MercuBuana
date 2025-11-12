<script>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
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
    const carouselTrack = ref(null)
    const carouselContainer = ref(null)
    const scrollInterval = ref(null)

    const loadMembers = () => {
      try {
        members.value = data.data || []
      } catch (error) {
        console.error('Error loading members:', error)
        members.value = []
      }
    }

    const startAutoScroll = () => {
      if (!carouselTrack.value || members.value.length === 0) return

      let scrollAmount = 0
      const scrollStep = 1
      const resetThreshold = carouselTrack.value.scrollWidth - carouselContainer.value.clientWidth

      const scroll = () => {
        if (scrollAmount >= resetThreshold) {
          carouselTrack.value.style.transition = 'transform 0s'
          scrollAmount = 0
          carouselTrack.value.style.transform = 'translateX(0)'
          setTimeout(() => {
            carouselTrack.value.style.transition = 'transform 0.3s'
          }, 50)
        } else {
          scrollAmount += scrollStep
          carouselTrack.value.style.transform = `translateX(-${scrollAmount}px)`
        }
        scrollInterval.value = requestAnimationFrame(scroll)
      }

      scrollInterval.value = requestAnimationFrame(scroll)
    }

    const stopAutoScroll = () => {
      if (scrollInterval.value) {
        cancelAnimationFrame(scrollInterval.value)
        scrollInterval.value = null
      }
    }

    onMounted(() => {
      loadMembers()
      nextTick(() => {
        startAutoScroll()
      })
    })

    onUnmounted(() => {
      stopAutoScroll()
    })

    return {
      members,
      carouselTrack,
      carouselContainer,
    }
  },
}
</script>

<template>
  <div class="h-full text-center overflow-hidden">
    <div class="relative">
      <div ref="carouselContainer" class="carousel-container w-full overflow-hidden">
        <div ref="carouselTrack" class="carousel-track flex">
          <div
            v-for="member in members"
            :key="member.id || member.name"
            class="carousel-slide"
          >
            <div class="member-card-container">
              <MemberCard :member="member" v-if="member" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="members.length === 0" class="flex min-h-60 flex-col rounded-xl shadow-sm dark:bg-neutral-800 dark:shadow-neutral-700/70">
        <div class="flex flex-auto flex-col items-center justify-center p-4 md:p-5">
          <div class="flex justify-center">
            <div class="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-accent" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  min-height: 24rem;
  padding: 1rem 0;
  width: 100%;
}

.carousel-track {
  transition: transform 0.3s ease;
  will-change: transform;
  padding: 0 1rem;
  gap: 2rem;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 280px;
  padding: 0;
  margin: 0;
}

@media (max-width: 1200px) {
  .carousel-slide {
    width: 270px;
  }
  .carousel-track {
    gap: 0.875rem;
  }
}

@media (max-width: 1024px) {
  .carousel-slide {
    width: 260px;
  }
  .carousel-track {
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .carousel-slide {
    width: 240px;
  }
  .carousel-track {
    gap: 0.625rem;
    padding: 0 0.5rem;
  }
}

@media (max-width: 640px) {
  .carousel-slide {
    width: 220px;
  }
  .carousel-track {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
}

.member-card-container {
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.member-card-container:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.member-card-container::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  border-radius: 1rem;
}

.member-card-container:hover::before {
  opacity: 1;
}

.member-card-container > * {
  position: relative;
  z-index: 2;
}

:deep(.member-card img) {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 1rem;
}

:deep(.member-card) {
  height: auto;
  min-height: 400px;
}
</style>