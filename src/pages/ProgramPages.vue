<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

import FooterSection from '../components/FooterSection.vue'

// -- TYPING ANIMATION --
const fullText = 'Himpunan Teknik Informatika'
const displayText = ref('')
const currentIndex = ref(0)

const typeText = () => {
  if (currentIndex.value < fullText.length) {
    displayText.value += fullText.charAt(currentIndex.value)
    currentIndex.value++
    setTimeout(typeText, 100)
  }
}

onMounted(() => {
  typeText()
})

// -- STATE FILTER --
const activeTab = ref('Semua')
const tabs = ['Semua', 'Kelas Belajar', 'Seminar', 'Company Visit', 'Kompetisi']

// -- DATA PROGRAM --
const allPrograms = [
  {
    id: 1,
    title: 'Kelas Core',
    category: 'Kelas Belajar',
    icon: 'lucide:file-code-2',
    features: ['UI/UX', 'Programming', 'Data Mining'],
    link: '/program/kelas-core',
    isExternal: false,
  },
  {
    id: 2,
    title: 'Seminar',
    category: 'Seminar',
    icon: 'lucide:presentation',
    features: [
      'Pengenalan Dunia IT',
      'Dasar Web Development',
      'Studi Kasus Industri',
    ],
    link: '/seminarit',
    isExternal: false,
  },
  {
    id: 3,
    title: 'FKTI',
    category: 'Semua',
    icon: 'lucide:users',
    features: ['Keakraban Mahasiswa IT', 'Knowledge', 'Kepemimpinan'],
    link: '/fkti',
    isExternal: false,
  },
  {
    id: 4,
    title: 'Company Visit',
    category: 'Company Visit',
    icon: 'lucide:building-2',
    features: [
      'Pengenalan Industri',
      'Sharing dengan Praktisi',
      'Observasi Proses Kerja',
    ],
    link: '#',
    isExternal: false,
  },
  {
    id: 5,
    title: 'Kompetisi',
    category: 'Kompetisi',
    icon: 'lucide:trophy',
    features: [
      'Competitive Programming',
      'Capture The Flag',
      'UI/UX Design Challenge',
    ],
    link: '#',
    isExternal: false,
  },
]

// -- LOGIC FILTER --
const filteredPrograms = computed(() => {
  if (activeTab.value === 'Semua') {
    return allPrograms
  }
  return allPrograms.filter((p) => p.category === activeTab.value)
})

// -- SCROLL TO PROGRAM --
const scrollToProgram = () => {
  const element = document.getElementById('program-content')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// -- LOGIC SLIDER BUTTONS --
const sliderContainer = ref(null)

const scrollLeft = () => {
  if (sliderContainer.value) {
    sliderContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (sliderContainer.value) {
    sliderContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
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
  <div
    class="relative flex min-h-screen flex-col overflow-x-hidden bg-main-1 font-sans text-white"
  >
    <!-- Background Gradient - Spotlights on Top-Left and Bottom-Right -->
    <div
      class="pointer-events-none absolute left-0 top-0 z-0 w-full"
      style="
        height: 120vh;
        background: radial-gradient(circle at 10% 20%, rgba(120, 39, 231, 0.45) 0%, transparent 45%),
                    radial-gradient(circle at 90% 80%, rgba(139, 61, 168, 0.45) 0%, transparent 45%),
                    #180D2A;
        background-blend-mode: screen;
      "
    ></div>

    <div
      class="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-12"
    >
      <div class="flex w-full flex-1 flex-col items-center justify-center">
        <div
          class="mx-auto flex flex-col items-center justify-center text-center font-bold text-white max-w-6xl w-full"
        >
          <h1 class="text-[24px] leading-tight tracking-tight sm:text-[28px] md:text-[40px] lg:text-[40px] font-bold font-poppins">
            <span
              >Rangkaian Program
              <span class="typing-text text-main-4">{{ displayText }}</span>&nbsp;</span
            >
            <br class="hidden md:block" />
            <span>Universitas Mercu Buana untuk&nbsp;</span>
            <br class="hidden md:block" />
            <span>Mengembangkan Potensimu.</span>
          </h1>
        </div>

        <button
          @click="scrollToProgram"
          class="mx-auto mt-6 inline-block rounded-2xl bg-main-2 px-10 py-4 text-base md:text-lg font-bold text-white transition-colors hover:bg-main-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          data-aos="fade-up"
        data-aos-delay="100"
        >
          Jelajahi Program HIMTI
        </button>
      </div>

      <div class="relative z-10 flex h-24 items-center justify-center">
        <div
          class="bounce-animation cursor-pointer"
          @click="scrollToProgram"
        >
          <Icon
            icon="mdi:arrow-down"
            class="text-4xl text-white"
          />
        </div>
      </div>
    </div>

    <!-- Program Content Section with vertical glow -->
    <!-- Program Content Section -->
    <div
      id="program-content"
      class="relative z-10 flex-grow pb-20 pt-10 bg-main-1"
    >
      
      <div class="container mx-auto px-4">
      <div class="text-center md:text-left">
        <div class="mb-[37px] inline-block text-left" data-aos="fade-right">
          <h1 class="mb-6 text-3xl md:text-5xl font-bold leading-tight text-white">
            Program
          </h1>
          <div class="h-[6px] w-[250px] rounded-full bg-[#8D3AEC]"></div>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 md:gap-[40px] pb-4"
          data-aos="fade-left"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-2 py-2 text-base transition-all duration-200 md:text-lg"
            :class="
              activeTab === tab
                ? 'font-bold text-white'
                : 'font-medium text-gray-400 hover:text-gray-200'
            "
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div v-if="filteredPrograms.length > 0" class="group relative mt-8">
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 z-20 -ml-5 hidden -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#180D2A] bg-[#6d28d9] p-3 text-white opacity-0 shadow-lg transition-all hover:bg-[#5b21b6] group-hover:opacity-100 md:flex"
        >
          <Icon icon="mdi:chevron-left" width="30" />
        </button>

        <div
          ref="sliderContainer"
          class="scrollbar-hide flex w-full snap-x flex-nowrap gap-6 overflow-x-auto scroll-smooth pb-14 pr-10 select-none"
          @mousedown="handleMouseDown"
          @mousemove="handleMouseMove"
          @mouseup="handleMouseUp"
          @mouseleave="handleMouseLeave"
        >
          <div
            v-for="program in filteredPrograms"
            :key="program.id"
            class="relative flex flex-shrink-0 snap-center flex-col justify-between rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl transition-all duration-300 w-[85vw] sm:w-[340px]"
            data-aos="fade-up"
          >
            <div>
              <div class="mb-4 flex items-center">
                <Icon :icon="program.icon" width="44" class="text-white" />
                <h2 class="ml-4 text-xl font-bold text-white">
                  {{ program.title }}
                </h2>
              </div>
              <ul class="mb-4 space-y-2">
                <li
                  v-for="(feature, idx) in program.features"
                  :key="idx"
                  class="flex items-center"
                >
                  <div class="rounded-full bg-main-2 p-2">
                    <Icon icon="mdi:check" width="20" class="text-white" />
                  </div>
                  <span class="ml-2 line-clamp-2 text-sm text-gray-200">{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="mt-auto flex justify-end">
              <component
                :is="program.isExternal ? 'a' : 'router-link'"
                :to="program.link"
                :href="program.link"
              >
                <button
                  class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white transition-colors hover:bg-main-3"
                >
                  <span class="mr-2 text-sm font-medium">Daftar</span>
                  <Icon icon="mdi:arrow-right" width="24" class="text-white" />
                </button>
              </component>
            </div>
          </div>
        </div>

        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#180D2A] bg-[#6d28d9] p-3 text-white opacity-0 shadow-lg transition-all hover:bg-[#5b21b6] group-hover:opacity-100 md:flex"
        >
          <Icon icon="mdi:chevron-right" width="30" />
        </button>
      </div>

      <div v-else class="py-20 text-center">
        <div
          class="mx-auto w-full max-w-sm rounded-2xl bg-[#2C2B31] p-10 shadow-lg"
        >
          <h3 class="text-xl font-bold text-gray-300">
            Program Belum Tersedia
          </h3>
          <p class="mt-2 text-gray-500">Nantikan informasi selanjutnya!</p>
        </div>
      </div>
      </div>
    </div>

    <FooterSection class="relative z-10" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

/* Typing animation cursor */
.typing-text {
  border-right: 2px solid white;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

/* Hide scrollbar agar desain bersih (tapi tetap bisa discroll pakai tombol/swipe) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom bounce animation for arrow */
.bounce-animation {
  animation: bounce-custom 2s infinite;
}

@keyframes bounce-custom {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
