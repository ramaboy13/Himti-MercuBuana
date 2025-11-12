<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, nextTick, computed, ref } from 'vue'
import galleryData from '../assets/data/dataGallery.json'
import teamData from '../assets/data/dataTeam.json'
import GalleryCard from '../components/GalleryCard.vue'
import AboutSection from '../components/AboutPageSection.vue'
import FooterSection from '../components/FooterSection.vue'

// === Typing Animation Setup ===
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

  nextTick(() => {
    if (window.HSCarousel) {
      window.HSCarousel.autoInit()
    }
    if (window.HSAccordion) {
      window.HSAccordion.autoInit()
    }
  })
})

// === Team Division Logic ===
const divisions = computed(() => {
  const allMembers = teamData.data
  const grouped = allMembers.reduce((acc, member) => {
    const divisionName = member.role
    if (!acc[divisionName]) {
      acc[divisionName] = []
    }
    acc[divisionName].push(member)
    return acc
  }, {})

  const sortedDivisions = Object.keys(grouped).map((divisionName) => {
    const members = grouped[divisionName]
    members.sort((a, b) => {
      if (a.badge === 'Ketua Divisi') return -1
      if (b.badge === 'Ketua Divisi') return 1
      return a.name.localeCompare(b.name)
    })
    return {
      name: divisionName,
      members: members,
    }
  })

  return sortedDivisions
})

const scrollToContent = (e) => {
  e.preventDefault()
  const gallerySection = document.getElementById('gallery')
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="bg-main-1">
    <!-- Di dalam <template>, ganti bagian hero section dengan ini -->

    <section
      id="hero-about"
      class="relative flex min-h-screen flex-col items-center justify-center bg-main-1 px-4 py-20 text-white"
    >
      <!-- SVG Blur Background -->
      <div
        class="pointer-events-none absolute inset-0 z-0"
        style="display: flex; justify-content: center; align-items: center"
      >
        <svg
          width="951"
          height="1024"
          viewBox="0 0 951 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_281_35)">
            <rect
              x="300"
              y="-1"
              width="351"
              height="1024"
              fill="#AA4FF5"
              fill-opacity="0.35"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_281_35"
              x="0"
              y="-301"
              width="951"
              height="1624"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="120"
                result="effect1_foregroundBlur_281_35"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <!-- Konten Hero -->
      <div
        class="z-10 flex w-full max-w-4xl flex-1 flex-col justify-center text-center"
      >
        <div class="mx-auto mb-8 text-center">
          <div
            class="whitespace-nowrap text-[32px] font-bold leading-tight tracking-tight sm:text-[36px] md:text-[40px] lg:text-[40px]"
          >
            <span class="text-white">Ayo Kenali </span>
            <span class="typing-text text-main-4">{{ displayText }}</span>
          </div>

          <div
            class="mt-1 whitespace-nowrap text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[36px] md:text-[40px] lg:text-[40px]"
          >
            Universitas Mercu Buana Lebih Dekat!
          </div>
        </div>
        <a
          href="#gallery"
          @click.prevent="scrollToContent"
          class="mx-auto mt-6 inline-block rounded-full bg-main-2 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-main-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Lihat Kegiatan HIMTI
        </a>
      </div>

      <div class="relative z-10 h-24 flex items-center justify-center">
        <a
          href="#gallery"
          @click.prevent="scrollToContent"
          class="bounce-animation"
          aria-label="Scroll to gallery"
        >
          <Icon icon="mdi:arrow-down" class="text-4xl text-white" />
        </a>
      </div>
    </section>

    <AboutSection class="about-section" id="about" />

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
                v-for="item in galleryData.gallery"
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

    <section id="divisi" class="bg-main-1 pt-24 pb-[150px] text-white" data-aos="fade-up">
      <div class="container mx-auto max-w-7xl px-6">
        <h2 class="text-4xl font-bold">Divisi HIMTI Universitas Mercubuana</h2>
        <div class="mt-3 h-1 w-48 bg-purple-600"></div>
        <div
          class="hs-accordion-group mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start"
        >
          <div
            v-for="(division, index) in divisions"
            :key="division.name"
            class="hs-accordion rounded-lg border-2 border-purple-800 bg-purple-900/30"
            :id="`hs-accordion-divisi-${index}`"
          >
            <button
              type="button"
              class="hs-accordion-toggle flex w-full items-center justify-between gap-x-3 px-6 py-5 text-left text-xl font-semibold text-white transition hover:text-gray-300 hs-accordion-active:text-purple-400"
              :aria-controls="`hs-accordion-body-divisi-${index}`"
            >
              {{ division.name }}
              <Icon
                icon="mdi:chevron-down"
                class="block h-6 w-6 transition-transform hs-accordion-active:rotate-180"
              />
            </button>

            <div
              :id="`hs-accordion-body-divisi-${index}`"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              :aria-labelledby="`hs-accordion-divisi-${index}`"
            >
              <div class="border-t border-purple-700 p-6">
                <ul class="space-y-3">
                  <li
                    v-for="member in division.members"
                    :key="member.id"
                    class="flex items-center gap-2"
                  >
                    <Icon
                      :icon="
                        member.badge === 'Ketua Divisi'
                          ? 'mdi:star'
                          : 'mdi:account'
                      "
                      class="h-5 w-5"
                      :class="
                        member.badge === 'Ketua Divisi'
                          ? 'text-yellow-400'
                          : 'text-purple-400'
                      "
                    />
                    <span
                      :class="{
                        'font-bold': member.badge === 'Ketua Divisi',
                      }"
                    >
                      {{ member.name }}
                      <span
                        v-if="member.badge === 'Ketua Divisi'"
                        class="text-sm text-yellow-500"
                      >
                        (Ketua Divisi)
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

<FooterSection/>
</template>

<style scoped>
#hero-about {
  min-height: 100dvh;
}

.hs-carousel-slide {
  min-width: 300px;
}

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

/* --- existing styles --- */
#hero-about {
  min-height: 100dvh;
}

.hs-carousel-slide {
  min-width: 300px;
}

/* Custom carousel gap style */
.carousel-gap {
  gap: 50px;
}

/* Fix carousel padding consistency */
.hs-carousel-body {
  padding-left: 0;
  padding-right: 0;
}

/* Ensure carousel buttons are visible */
.hs-carousel-prev,
.hs-carousel-next {
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
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