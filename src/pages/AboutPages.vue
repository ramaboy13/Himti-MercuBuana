<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, nextTick, computed } from 'vue'
import galleryData from '../assets/data/dataGallery.json'
import teamData from '../assets/data/dataTeam.json'
import GalleryCard from '../components/GalleryCard.vue'
import AboutSection from '../components/AboutSection.vue'

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
  const aboutSection = document.getElementById('about') 
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  nextTick(() => {
    if (window.HSCarousel) {
      window.HSCarousel.autoInit()
    } else {
      console.warn(
        'HSCarousel (Preline) not found. Carousel mungkin tidak berfungsi.'
      )
    }
    if (window.HSCollapse) {
      window.HSAccordion.autoInit()
    } else {
      console.warn(
        'HSCollapse (Preline) not found. Accordion mungkin tidak berfungsi.'
      )
    }
  })
})
</script>

<template>
  <div class="bg-main-1">
    <section
      id="hero-about"
      class="relative flex min-h-screen flex-col items-center justify-center bg-main-1 px-4 py-20 text-white"
    >
      <div class="z-10 w-full max-w-4xl flex-1 text-center flex flex-col justify-center">
        <h1
          class="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          <span class="text-white">Ayo Kenali Himpunan</span><br />
          <span class="text-main-4">Teknik Informatika</span><br />
          Universitas Mercu Buana<br />
          Lebih Dekat!
        </h1>
        <a
        href="#about"
        @click.prevent="scrollToContent"
        class="inline-block rounded-full bg-main-2 px-2 py-4 text-base font-semibold text-white transition-colors hover:bg-main-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        data-aos="fade-up"
        data-aos-delay="100"
        >
        Lihat Kegiatan
        </a>
      </div>


      <div class="relative z-10 h-24">
        <a
          href="#about"
          @click.prevent="scrollToContent"
          class="animate-bounce"
          aria-label="Scroll to content"
        >
          <Icon icon="mdi:arrow-down" class="text-4xl text-white" />
        </a>
      </div>
      <div class="absolute bottom-0 w-full">
        <svg
            id="visual"
            viewBox="0 0 540 960"
            class="w-full sm:hidden"
            preserveAspectRatio="none"
        >
            <path d="M0 834L12.8 831C25.7 828 51.3 822 77 817.8C102.7 813.7 128.3 811.3 154 816.7C179.7 822 205.3 835 231.2 834.5C257 834 283 820 308.8 820C334.7 820 360.3 834 386 840.2C411.7 846.3 437.3 844.7 463 841.2C488.7 837.7 514.3 832.3 527.2 829.7L540 827L540 961L527.2 961C514.3 961 488.7 961 463 961C437.3 961 411.7 961 386 961C360.3 961 334.7 961 308.8 961C283 961 257 961 231.2 961C205.3 961 179.7 961 154 961C128.3 961 102.7 961 77 961C51.3 961 25.7 961 12.8 961L0 961Z"fill="#512b90"></path>
            <path d="M0 856L12.8 853.3C25.7 850.7 51.3 845.3 77 842C102.7 838.7 128.3 837.3 154 838.5C179.7 839.7 205.3 843.3 231.2 848.3C257 853.3 283 859.7 308.8 861.5C334.7 863.3 360.3 860.7 386 855.5C411.7 850.3 437.3 842.7 463 843.5C488.7 844.3 514.3 853.7 527.2 858.3L540 863L540 961L527.2 961C514.3 961 488.7 961 463 961C437.3 961 411.7 961 386 961C360.3 961 334.7 961 308.8 961C283 961 257 961 231.2 961C205.3 961 179.7 961 154 961C128.3 961 102.7 961 77 961C51.3 961 25.7 961 12.8 961L0 961Z"fill="#6534a9"></path>
            <path d="M0 883L12.8 884C25.7 885 51.3 887 77 886.7C102.7 886.3 128.3 883.7 154 883C179.7 882.3 205.3 883.7 231.2 880.2C257 876.7 283 868.3 308.8 865.7C334.7 863 360.3 866 386 870.7C411.7 875.3 437.3 881.7 463 882.5C488.7 883.3 514.3 878.7 527.2 876.3L540 874L540 961L527.2 961C514.3 961 488.7 961 463 961C437.3 961 411.7 961 386 961C360.3 961 334.7 961 308.8 961C283 961 257 961 231.2 961C205.3 961 179.7 961 154 961C128.3 961 102.7 961 77 961C51.3 961 25.7 961 12.8 961L0 961Z"fill="#7b3dc2"></path>
            <path d="M0 890L12.8 890.2C25.7 890.3 51.3 890.7 77 893.7C102.7 896.7 128.3 902.3 154 903.5C179.7 904.7 205.3 901.3 231.2 901.5C257 901.7 283 905.3 308.8 905C334.7 904.7 360.3 900.3 386 899.2C411.7 898 437.3 900 463 900.2C488.7 900.3 514.3 898.7 527.2 897.8L540 897L540 961L527.2 961C514.3 961 488.7 961 463 961C437.3 961 411.7 961 386 961C360.3 961 334.7 961 308.8 961C283 961 257 961 231.2 961C205.3 961 179.7 961 154 961C128.3 961 102.7 961 77 961C51.3 961 25.7 961 12.8 961L0 961Z"fill="#9246db"></path>
            <path d="M0 916L12.8 918.7C25.7 921.3 51.3 926.7 77 930.7C102.7 934.7 128.3 937.3 154 937.3C179.7 937.3 205.3 934.7 231.2 930.8C257 927 283 922 308.8 921C334.7 920 360.3 923 386 926.2C411.7 929.3 437.3 932.7 463 931.7C488.7 930.7 514.3 925.3 527.2 922.7L540 920L540 961L527.2 961C514.3 961 488.7 961 463 961C437.3 961 411.7 961 386 961C360.3 961 334.7 961 308.8 961C283 961 257 961 231.2 961C205.3 961 179.7 961 154 961C128.3 961 102.7 961 77 961C51.3 961 25.7 961 12.8 961L0 961Z"fill="#aa4ff5"></path>
        </svg>
        <svg
            id="visual"
            viewBox="0 0 960 540"
            class="hidden w-full sm:inline-block"
            preserveAspectRatio="none"
        >
            <path d="M0 402L22.8 405C45.7 408 91.3 414 137 422.2C182.7 430.3 228.3 440.7 274 442.7C319.7 444.7 365.3 438.3 411.2 433.8C457 429.3 503 426.7 548.8 428.3C594.7 430 640.3 436 686 433.3C731.7 430.7 777.3 419.3 823 415.3C868.7 411.3 914.3 414.7 937.2 416.3L960 418L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"fill="#512b90"></path>
            <path d="M0 436L22.8 439.8C45.7 443.7 91.3 451.3 137 454.8C182.7 458.3 228.3 457.7 274 457.3C319.7 457 365.3 457 411.2 451.3C457 445.7 503 434.3 548.8 432.2C594.7 430 640.3 437 686 441C731.7 445 777.3 446 823 444.5C868.7 443 914.3 439 937.2 437L960 435L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"fill="#6534a9"></path>
            <path d="M0 481L22.8 476.2C45.7 471.3 91.3 461.7 137 462.5C182.7 463.3 228.3 474.7 274 474.8C319.7 475 365.3 464 411.2 459.5C457 455 503 457 548.8 460.8C594.7 464.7 640.3 470.3 686 469.2C731.7 468 777.3 460 823 455.2C868.7 450.3 914.3 448.7 937.2 447.8L960 447L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"fill="#7b3dc2"></path>
            <path d="M0 477L22.8 480.7C45.7 484.3 91.3 491.7 137 494C182.7 496.3 228.3 493.7 274 494.7C319.7 495.7 365.3 500.3 411.2 503C457 505.7 503 506.3 548.8 503.7C594.7 501 640.3 495 686 491.2C731.7 487.3 777.3 485.7 823 486.2C868.7 486.7 914.3 489.3 937.2 490.7L960 492L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"fill="#9246db"></path>
            <path d="M0 510L22.8 508.7C45.7 507.3 91.3 504.7 137 503.3C182.7 502 228.3 502 274 504.3C319.7 506.7 365.3 511.3 411.2 510.5C457 509.7 503 503.3 548.8 505C594.7 506.7 640.3 516.3 686 519C731.7 521.7 777.3 517.3 823 514.8C868.7 512.3 914.3 511.7 937.2 511.3L960 511L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"fill="#aa4ff5"></path>
        </svg>
      </div>
    </section>

    <AboutSection class="about-section" id="about" />

    <section class="bg-main-1 pb-24 text-white" data-aos="fade-up">
      <div class="container mx-auto max-w-7xl px-6">
        <h2 class="text-center text-4xl font-bold">
          Galeri Kegiatan HIMTI
        </h2>
        <p
          class="mx-auto mt-4 max-w-3xl text-center text-base text-gray-300"
        >
          Setiap foto di galeri ini merekam kisah tentang inovasi,
          kebersamaan, dan kepedulian. Kami percaya bahwa teknologi bukan
          hanya untuk kemajuan individu, tapi juga untuk kebaikan bersama.
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
        <div class="overflow-hidden">
          <div class="hs-carousel w-full rounded-lg bg-transparent py-4">
            <div
              class="hs-carousel-body flex flex-nowrap gap-6 pl-6 lg:pl-24"
            >
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

        <div
          class="absolute start-0 top-1/2 -translate-y-1/2 pl-6 lg:pl-24"
        >
          <button type="button" class="hs-carousel-prev">
            <span
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-700"
            >
              <Icon icon="mdi:chevron-left" class="text-3xl" />
            </span>
          </button>
        </div>
        <div class="absolute end-0 top-1/2 -translate-y-1/2 pr-6 lg:pr-24">
          <button type="button" class="hs-carousel-next">
            <span
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-700"
            >
              <Icon icon="mdi:chevron-right" class="text-3xl" />
            </span>
          </button>
        </div>
      </div>
    </section>
    
    <section id="divisi" class="bg-main-1 py-24 text-white" data-aos="fade-up">
      <div class="container mx-auto max-w-7xl px-6">
        <h2 class="text-4xl font-bold">Divisi HIMTI Universitas Mercubuana</h2>
        <div class="mt-3 h-1 w-48 bg-purple-600"></div>
        <div class="hs-accordion-group mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
          <div
            v-for="(division, index) in divisions"
            :key="division.name"
            class="hs-accordion rounded-lg border-2 border-purple-800 bg-purple-900/30"
            :id="`hs-accordion-divisi-${index}`"
          >
            <button
              type="button"
              class="hs-accordion-toggle hs-accordion-active:text-purple-400 flex w-full items-center justify-between gap-x-3 px-6 py-5 text-left text-xl font-semibold text-white transition hover:text-gray-300"
              :aria-controls="`hs-accordion-body-divisi-${index}`"
            >
              {{ division.name }}
              <Icon
                icon="mdi:chevron-down"
                class="hs-accordion-active:rotate-180 block h-6 w-6 transition-transform"
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
</template>

<style scoped>
#hero-about {
  min-height: 100dvh;
}

.hs-carousel-slide {
  min-width: 300px;
}
</style>