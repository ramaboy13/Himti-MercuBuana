<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'

// --- DATA TIMELINE ---
const timelineItems = ref([
  {
    date: '01 Feb 2025 - Pendaftaran',
    title: 'Pendaftaran',
    desc: 'Mahasiswa dapat melakukan pendaftaran program Kelas Core melalui portal resmi.',
  },
  {
    date: '10 Feb 2025 - Penempatan Kelas',
    title: 'Penempatan Kelas',
    desc: 'Tes minat dan kompetensi dasar digunakan untuk menentukan peserta masuk jalur UI/UX, Frontend, Backend, atau Data Mining.',
  },
  {
    date: '25 Feb 2025 - Kelas UI/UX',
    title: 'Kelas UI/UX',
    desc: 'Pengenalan design thinking, user research, wireframing, dan dasar visual design dan lain-lain.',
  },
  {
    date: '01 Mar 2025 - Kelas Frontend Developer',
    title: 'Kelas Frontend',
    desc: 'Pembelajaran HTML, CSS, JavaScript, responsive layout, dan dasar framework modern.',
  },
  {
    date: '10 Mar 2025 - Kelas Backend Developer',
    title: 'Kelas Backend',
    desc: 'Pengenalan struktur server, pengelolaan database, API, dan autentikasi dasar.',
  },
  {
    date: '15 Mar 2025 - Kelas Data Mining',
    title: 'Kelas Data Mining',
    desc: 'Dasar data cleaning, exploratory data analysis, hingga pengenalan model machine learning.',
  },
  {
    date: '30 Apr 2025 - Final Project',
    title: 'Final Project',
    desc: 'Peserta mengembangkan proyek akhir berbasis studi kasus nyata dari mentor.',
  },
])

// --- LOGIC COUNTDOWN ---
const targetDate = new Date('2025-02-01T00:00:00').getTime()
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let timerInterval = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    clearInterval(timerInterval)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#1e002e] font-sans text-white"
  >
    <div class="flex-grow">


      <div class="container relative z-0 mx-auto px-4 pb-20 pt-40 text-center">
        <h1 class="mb-6 text-4xl font-bold text-white md:text-5xl">
          Kelas Core
        </h1>
        <p class="mx-auto mb-12 max-w-3xl px-4 leading-relaxed text-gray-300">
          Program Kelas Core adalah pembelajaran terstruktur yang meningkatkan
          kompetensi mahasiswa melalui empat fokus utama: UI/UX Design, Frontend
          Development, Backend Development, dan Data Mining, memberikan
          pemahaman menyeluruh tentang pembuatan produk digital dari perancangan
          hingga implementasi berbasis data.
        </p>

        <h2 class="mb-8 text-2xl font-semibold text-white">
          Registrasi akan dibuka
        </h2>

        <div class="mb-10 flex flex-wrap justify-center gap-4">
          <div
            class="w-24 rounded-xl border border-purple-500/30 bg-[#4c1d95] p-4 shadow-lg md:w-32"
          >
            <div class="text-3xl font-bold md:text-4xl">{{ days }}</div>
            <div class="mt-1 text-xs uppercase tracking-wider">Hari</div>
          </div>
          <div
            class="w-24 rounded-xl border border-purple-500/30 bg-[#4c1d95] p-4 shadow-lg md:w-32"
          >
            <div class="text-3xl font-bold md:text-4xl">{{ hours }}</div>
            <div class="mt-1 text-xs uppercase tracking-wider">Jam</div>
          </div>
          <div
            class="w-24 rounded-xl border border-purple-500/30 bg-[#4c1d95] p-4 shadow-lg md:w-32"
          >
            <div class="text-3xl font-bold md:text-4xl">{{ minutes }}</div>
            <div class="mt-1 text-xs uppercase tracking-wider">Menit</div>
          </div>
          <div
            class="w-24 rounded-xl border border-purple-500/30 bg-[#4c1d95] p-4 shadow-lg md:w-32"
          >
            <div class="text-3xl font-bold md:text-4xl">{{ seconds }}</div>
            <div class="mt-1 text-xs uppercase tracking-wider">Detik</div>
          </div>
        </div>

        <a
          href="https://forms.google.com/"
          target="_blank"
          class="inline-block transition-transform hover:-translate-y-1"
        >
          <button
            class="rounded-full border border-purple-400 bg-[#5b21b6] px-10 py-3 font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all hover:bg-[#4c1d95]"
          >
            Daftar Disini
          </button>
        </a>

        <div class="mt-16 animate-bounce opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-t-[3rem] bg-[#3c1e70] py-20">
        <div class="container mx-auto px-4">
          <h2 class="mb-4 text-center text-3xl font-bold md:text-4xl">
            Timeline Kelas Core
          </h2>
          <div
            class="mx-auto mb-16 h-1 w-24 rounded-full bg-purple-400/50"
          ></div>

          <div class="relative mx-auto max-w-6xl">
            <div
              class="absolute left-4 top-2 h-full w-0.5 bg-purple-300/30 md:left-1/2 md:-translate-x-1/2 md:transform"
            ></div>

            <div class="space-y-12">
              <div
                v-for="(item, index) in timelineItems"
                :key="index"
                class="relative flex flex-col items-start md:flex-row md:items-center"
              >
                <div class="hidden justify-end pr-12 md:flex md:w-1/2">
                  <div
                    class="whitespace-nowrap rounded-full border border-purple-400/20 bg-[#6d44a0] px-6 py-3 text-sm font-semibold shadow-md"
                  >
                    {{ item.date }}
                  </div>
                </div>

                <div
                  class="absolute left-4 z-10 h-4 w-4 rounded-full border-4 border-[#3c1e70] bg-[#a855f7] shadow-lg md:left-1/2 md:h-5 md:w-5 md:-translate-x-1/2 md:transform"
                ></div>

                <div class="hidden pl-12 text-left md:block md:w-1/2">
                  <p
                    class="text-sm font-medium leading-relaxed text-white md:text-base"
                  >
                    {{ item.desc }}
                  </p>
                </div>

                <div class="w-full pl-12 md:hidden">
                  <div
                    class="mb-2 inline-block rounded-full border border-purple-400/20 bg-[#6d44a0] px-4 py-2 text-xs font-semibold"
                  >
                    {{ item.date }}
                  </div>
                  <p class="mt-1 text-sm leading-relaxed text-gray-200">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

div {
  font-family: 'Poppins', sans-serif;
}
</style>
