<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref, onMounted } from 'vue'

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

const scrollToContent = (e) => {
  e.preventDefault()
  const gallerySection = document.getElementById('gallery')
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero-about"
    class="relative flex min-h-screen flex-col items-center justify-center bg-main-1 px-4 py-20 text-white"
  >
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

    <div
      class="z-10 flex w-full max-w-4xl flex-1 flex-col justify-center text-center"
    >
      <div class="mx-auto mb-8 text-center">
        <div
          class=" text-[32px] font-bold leading-tight tracking-tight sm:text-[36px] md:text-[40px] lg:text-[40px]"
        >
          <span class="text-white">Ayo Kenali </span>
          <span class="typing-text text-main-4">{{ displayText }}</span>
        </div>

        <div
          class="mt-1 text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[36px] md:text-[40px] lg:text-[40px]"
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
</template>

<style scoped>
#hero-about {
  min-height: 100dvh;
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