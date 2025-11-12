<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section id="program" class="lg:pt-30 px-5 pt-20 text-white">
    <div class="mx-auto max-w-7xl">
      
      <fieldset
        class="mb-8 rounded-2xl bg-gradient-to-r from-main-5 via-main-5 to-pink-300 p-6 md:p-8 text-white"
        data-aos="fade-up"
      >
        <legend class="w-auto rounded-full border-8 border-main-1 bg-main-2 px-6 py-3 md:px-4 md:py-4 text-lg font-semibold text-white -ml-4 md:-ml-8">
          <p class="text-center text-2xl md:text-3xl font-bold">Program</p>
        </legend>

        <div
          class="grid grid-cols-12 items-center gap-4 md:gap-8 pt-6 lg:pt-0"
        >
          <div class="col-span-5 md:col-span-4">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold">
              Berikut adalah beberapa program yang kami tawarkan
            </p>
          </div>

          <div class="col-span-7 md:col-span-8">
            <p class="mb-4 text-xs md:text-sm lg:text-base leading-relaxed text-gray-200">
              Kami, Himpunan Mahasiswa Teknik Informatika Mercubuana, menyediakan
              berbagai program yang dirancang khusus untuk mendukung pengembangan
              akademik dan profesional mahasiswa di bidang teknologi informasi.
              Program-program ini tidak hanya bertujuan untuk memperluas
              pengetahuan teknis, tetapi juga untuk membentuk kemampuan
              kepemimpinan dan soft skill yang diperlukan di dunia kerja modern.
            </p>
            
            <button
              @click="router.push('/event')"
              class="mt-4 flex items-center gap-2 rounded-full bg-main-3 px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium transition-colors hover:bg-opacity-80"
            >
              Lebih Lanjut
              <Icon icon="mdi:arrow-right" class="text-sm md:text-lg" />
            </button>
          </div>
        </div>
      </fieldset>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:file-code-2" width="44" />
            <h2 class="ml-4 text-xl font-bold">Kelas Core</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">UI/UX</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">HTML, CSS, JavaScript</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Responsive Web</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/kelascore"
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>

              <Icon icon="mdi:arrow-right" color="white" width="24" />
            </router-link>
          </div>
        </div>

        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:presentation" width="44" />
            <h2 class="ml-4 text-xl font-bold">Seminar IT</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Pembelajaran Tentang IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Network Engineer</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Software Engineer</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/seminarit"
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>
              <Icon icon="mdi:arrow-right" color="white" width="24" />
            </router-link>
          </div>
        </div>

        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:users" width="44" />
            <h2 class="ml-4 text-xl font-bold">FKTI</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Keakraban Mahasiswa IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Knowledge</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Kepemimpinan</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/fkti"
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>
              <Icon icon="mdi:arrow-right" color="white" width="24" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>