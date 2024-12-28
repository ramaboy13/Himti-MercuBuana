<script setup lang="ts"></script>

<template>
  <section id="program" class="lg:pt-30 px-5 pt-20 text-white">
    <div class="mx-auto max-w-7xl">
      <!-- Program Card -->

      <fieldset
        class="mb-8 rounded-2xl bg-gradient-to-r from-main-4 to-pink-300 p-8 text-white"
      >
        <legend
          class="w-60 rounded-full border-8 border-main-1 bg-main-4 px-4 py-2 text-lg font-semibold text-white"
        >
          <p class="text-center text-3xl font-bold">Program</p>
        </legend>

        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <!-- Kolom Kiri -->
          <p class="text-2xl font-semibold">
            Berikut adalah beberapa program yang kami tawarkan
          </p>

          <!-- Kolom Kanan -->
          <div class="rounded-2xl p-6">
            <p class="mb-6 text-justify leading-relaxed drop-shadow-2xl">
              Kami, Himpunan Mahasiswa Teknik Informatika Mercubuana,
              menyediakan berbagai program yang dirancang khusus untuk mendukung
              pengembangan akademik dan profesional mahasiswa di bidang
              teknologi informasi. Program-program ini tidak hanya bertujuan
              untuk memperluas pengetahuan teknis, tetapi juga untuk membentuk
              kemampuan kepemimpinan dan soft skill yang diperlukan di dunia
              kerja modern.
            </p>
          </div>
        </div>
      </fieldset>

      <!-- Card Gird Colum  -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Card Kelas Core  -->
        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:file-code-2" width="44" />
            <h2 class="ml-4 text-xl font-bold">Kelas Core</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">UI/UX</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">HTML, CSS, JavaScript</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Responsive Web</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/kelascore"
              class="flex items-center rounded-full bg-main-4 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>

              <Icon icon="mdi:arrow-right" color="white" width="24" />
            </router-link>
          </div>
        </div>

        <!-- Card Seminar IT -->
        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:presentation" width="44" />
            <h2 class="ml-4 text-xl font-bold">Seminar IT</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Pembelajaran Tentang IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Network Engineer</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Software Engineer</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/seminarit"
              class="flex items-center rounded-full bg-main-4 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>
              <Icon icon="mdi:arrow-right" color="white" width="24" />
            </router-link>
          </div>
        </div>

        <!-- Card FKTI -->
        <div
          class="content-center justify-center rounded-2xl border border-main-4 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <Icon icon="lucide:users" width="44" />
            <h2 class="ml-4 text-xl font-bold">FKTI</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Keakraban Mahasiswa IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Knowledge</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-4 p-2 text-3xl">
                <Icon icon="mdi:check" color="white" width="20" />
              </i>
              <span class="ml-2">Kepemimpinan</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <router-link
              to="/fkti"
              class="flex items-center rounded-full bg-main-4 px-4 py-2 text-white"
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
