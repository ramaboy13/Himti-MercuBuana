<template>
  <section id="app" class="p-8 text-white">
    <div class="mx-auto max-w-7xl">
      <!-- Program Card -->

      <fieldset
        class="mb-8 rounded-2xl bg-gradient-to-r from-purple-800 to-pink-300 p-8 text-white"
      >
        <legend
          class="w-60 rounded-full border-8 border-main-1 bg-purple-900 px-4 py-2 text-lg font-semibold text-white"
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
            <button
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white transition hover:bg-accent"
            >
              <span>Lebih Lanjut </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right ml-2"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </button>
          </div>
        </div>
      </fieldset>

      <!-- Card Gird Colum  -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Card Kelas Core  -->
        <div
          class="content-center justify-center rounded-2xl border border-violet-800 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-code-2"
            >
              <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="m5 12-3 3 3 3" />
              <path d="m9 18 3-3-3-3" />
            </svg>
            <h2 class="ml-4 text-xl font-bold">Kelas Core</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" /></svg
              ></i>
              <span class="ml-2">UI/UX</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">HTML, CSS, JavaScript</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Responsive Web</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <button
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Card Seminar IT -->
        <div
          class="content-center justify-center rounded-2xl border border-violet-800 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-presentation"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
            <h2 class="ml-4 text-xl font-bold">Seminar IT</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Pembelajaran Tentang IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Network Engineer</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Software Engineer</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <button
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Card FKTI -->
        <div
          class="content-center justify-center rounded-2xl border border-violet-800 bg-gray-900 p-6 shadow-2xl"
        >
          <div class="mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h2 class="ml-4 text-xl font-bold">FKTI</h2>
          </div>
          <ul class="mb-4">
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Keakraban Mahasiswa IT</span>
            </li>
            <li class="mb-2 flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Knowledge</span>
            </li>
            <li class="flex items-center">
              <i class="rounded-full bg-main-2 p-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </i>
              <span class="ml-2">Kepemimpinan</span>
            </li>
          </ul>
          <div class="flex justify-center">
            <button
              class="flex items-center rounded-full bg-main-2 px-4 py-2 text-white"
            >
              <span class="mr-2">Daftar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
