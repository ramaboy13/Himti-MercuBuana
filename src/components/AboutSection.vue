<template>
  <section class="relative mx-auto" id="about">
    <!-- SVG Waves at the top -->
    <div class="absolute left-0 right-0 top-0 w-full">
      <!-- Mobile -->
      <svg
        id="visual"
        viewBox="0 0 540 160"
        width="100%"
        height="auto"
        preserveAspectRatio="none"
        class="w-full sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 138L12.8 138.3C25.7 138.7 51.3 139.3 77 134.8C102.7 130.3 128.3 120.7 154 117.3C179.7 114 205.3 117 231.2 120.8C257 124.7 283 129.3 308.8 131.8C334.7 134.3 360.3 134.7 386 131C411.7 127.3 437.3 119.7 463 115.7C488.7 111.7 514.3 111.3 527.2 111.2L540 111L540 0L527.2 0C514.3 0 488.7 0 463 0C437.3 0 411.7 0 386 0C360.3 0 334.7 0 308.8 0C283 0 257 0 231.2 0C205.3 0 179.7 0 154 0C128.3 0 102.7 0 77 0C51.3 0 25.7 0 12.8 0L0 0Z"
          fill="#512b90"
        ></path>
        <path
          d="M0 93L12.8 93.3C25.7 93.7 51.3 94.3 77 98.2C102.7 102 128.3 109 154 112C179.7 115 205.3 114 231.2 114.2C257 114.3 283 115.7 308.8 116.8C334.7 118 360.3 119 386 118.5C411.7 118 437.3 116 463 112C488.7 108 514.3 102 527.2 99L540 96L540 0L527.2 0C514.3 0 488.7 0 463 0C437.3 0 411.7 0 386 0C360.3 0 334.7 0 308.8 0C283 0 257 0 231.2 0C205.3 0 179.7 0 154 0C128.3 0 102.7 0 77 0C51.3 0 25.7 0 12.8 0L0 0Z"
          fill="#6534a9"
        ></path>
        <path
          d="M0 95L12.8 93.3C25.7 91.7 51.3 88.3 77 86.2C102.7 84 128.3 83 154 78.8C179.7 74.7 205.3 67.3 231.2 66.3C257 65.3 283 70.7 308.8 76C334.7 81.3 360.3 86.7 386 87C411.7 87.3 437.3 82.7 463 83C488.7 83.3 514.3 88.7 527.2 91.3L540 94L540 0L527.2 0C514.3 0 488.7 0 463 0C437.3 0 411.7 0 386 0C360.3 0 334.7 0 308.8 0C283 0 257 0 231.2 0C205.3 0 179.7 0 154 0C128.3 0 102.7 0 77 0C51.3 0 25.7 0 12.8 0L0 0Z"
          fill="#7b3dc2"
        ></path>
        <path
          d="M0 52L12.8 54.8C25.7 57.7 51.3 63.3 77 64C102.7 64.7 128.3 60.3 154 56.3C179.7 52.3 205.3 48.7 231.2 48.7C257 48.7 283 52.3 308.8 52.7C334.7 53 360.3 50 386 52C411.7 54 437.3 61 463 62.2C488.7 63.3 514.3 58.7 527.2 56.3L540 54L540 0L527.2 0C514.3 0 488.7 0 463 0C437.3 0 411.7 0 386 0C360.3 0 334.7 0 308.8 0C283 0 257 0 231.2 0C205.3 0 179.7 0 154 0C128.3 0 102.7 0 77 0C51.3 0 25.7 0 12.8 0L0 0Z"
          fill="#9246db"
        ></path>
        <path
          d="M0 36L12.8 33C25.7 30 51.3 24 77 24.3C102.7 24.7 128.3 31.3 154 32.2C179.7 33 205.3 28 231.2 29C257 30 283 37 308.8 37.5C334.7 38 360.3 32 386 29.8C411.7 27.7 437.3 29.3 463 32.2C488.7 35 514.3 39 527.2 41L540 43L540 0L527.2 0C514.3 0 488.7 0 463 0C437.3 0 411.7 0 386 0C360.3 0 334.7 0 308.8 0C283 0 257 0 231.2 0C205.3 0 179.7 0 154 0C128.3 0 102.7 0 77 0C51.3 0 25.7 0 12.8 0L0 0Z"
          fill="#aa4ff5"
        ></path>
      </svg>

      <!-- Desktop -->
      <svg
        id="visual"
        viewBox="0 0 960 140"
        width="100%"
        height="auto"
        preserveAspectRatio="none"
        class="hidden w-full sm:block"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 110L22.8 103.7C45.7 97.3 91.3 84.7 137 81.3C182.7 78 228.3 84 274 92.8C319.7 101.7 365.3 113.3 411.2 112.8C457 112.3 503 99.7 548.8 96.8C594.7 94 640.3 101 686 100.5C731.7 100 777.3 92 823 92.5C868.7 93 914.3 102 937.2 106.5L960 111L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
          fill="#512b90"
        ></path>
        <path
          d="M0 61L22.8 64.2C45.7 67.3 91.3 73.7 137 75.5C182.7 77.3 228.3 74.7 274 70.3C319.7 66 365.3 60 411.2 62.2C457 64.3 503 74.7 548.8 79C594.7 83.3 640.3 81.7 686 79.2C731.7 76.7 777.3 73.3 823 75.5C868.7 77.7 914.3 85.3 937.2 89.2L960 93L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
          fill="#6534a9"
        ></path>
        <path
          d="M0 56L22.8 53.2C45.7 50.3 91.3 44.7 137 49C182.7 53.3 228.3 67.7 274 68.3C319.7 69 365.3 56 411.2 54.5C457 53 503 63 548.8 62.5C594.7 62 640.3 51 686 53.2C731.7 55.3 777.3 70.7 823 78C868.7 85.3 914.3 84.7 937.2 84.3L960 84L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
          fill="#7b3dc2"
        ></path>
        <path
          d="M0 26L22.8 31.8C45.7 37.7 91.3 49.3 137 49.5C182.7 49.7 228.3 38.3 274 38.3C319.7 38.3 365.3 49.7 411.2 51.8C457 54 503 47 548.8 43.5C594.7 40 640.3 40 686 42C731.7 44 777.3 48 823 49.2C868.7 50.3 914.3 48.7 937.2 47.8L960 47L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
          fill="#9246db"
        ></path>
        <path
          d="M0 25L22.8 26.8C45.7 28.7 91.3 32.3 137 34.3C182.7 36.3 228.3 36.7 274 35.5C319.7 34.3 365.3 31.7 411.2 30.5C457 29.3 503 29.7 548.8 27.3C594.7 25 640.3 20 686 17.8C731.7 15.7 777.3 16.3 823 16.2C868.7 16 914.3 15 937.2 14.5L960 14L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
          fill="#aa4ff5"
        ></path>
      </svg>
    </div>

    <!-- Main Container -->
    <div
      class="relative px-4 pt-40 text-white sm:px-8 sm:pt-32 lg:px-32 lg:pt-60"
    >
      <!-- Two Columns Layout -->
      <div
        class="mb-52 mt-8 flex flex-col items-start gap-8 md:mt-0 md:flex-row"
      >
        <!-- Left Side (Tentang HIMTI + Description) -->
        <div class="md:w-1/2">
          <h1 class="text-3xl font-bold">Tentang HIMTI</h1>
          <div class="mt-2 h-1 w-52 bg-accent"></div>
          <p class="my-6 text-justify leading-relaxed">
            Himpunan Teknik Informatika adalah organisasi yang berdedikasi untuk
            memajukan bidang teknologi informasi dan ilmu komputer di
            Universitas Mercu Buana. Didirikan pada tahun 2005, kami telah
            tumbuh menjadi komunitas yang dinamis dan inklusif, menyatukan
            mahasiswa, akademisi, profesional, dan penggemar teknologi dari
            berbagai latar belakang.
          </p>
          <button
            class="rounded-lg bg-accent px-4 py-2 text-white shadow-xl transition-colors hover:bg-[#7B1FA2]"
          >
            Selengkapnya
          </button>
        </div>

        <!-- Right Side (Visi & Misi) -->
        <div class="md:w-1/2">
          <!-- Visi Section -->
          <div class="mb-8">
            <div class="mb-4 flex items-center">
              <i class="rounded-full bg-accent p-2 text-3xl">
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
                  class="lucide lucide-eye"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </i>
              <h2 class="ml-4 text-2xl font-bold">Visi</h2>
            </div>
            <p class="mb-2 mt-8 text-justify leading-relaxed">
              Menjadikan HIMTI (Himpunan Teknik Informatika) sebagai wadah
              kreatif, inovatif, dan Aspiratif Mahasiswa Teknik Informatika
              dalam mengembangkan minat dan bakatnya, serta membentuk lulusan
              yang profesional yang mampu memenuhi kebutuhan industri dan
              masyarakat dalam persaingan global di dunia kerja.
            </p>
          </div>

          <!-- Misi Section -->
          <div>
            <div class="mb-4 flex items-center">
              <i class="rounded-full bg-accent p-2 text-3xl">
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
                  class="lucide lucide-target"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </i>
              <h2 class="ml-4 text-2xl font-bold">Misi</h2>
            </div>
            <ul
              class="mt-8 list-inside list-disc space-y-2 text-justify md:text-justify"
            >
              <li>
                Memfasilitasi Mahasiswa dan Mahasiswi Teknik Informatika dalam
                akademisi, dengan menyelenggarakan penelitian, pendidikan, dan
                pengabdian diri di dunia IT.
              </li>
              <li>
                Mewadahi ide dan aspirasi-aspirasi Mahasiswa Teknik Informatika.
              </li>
              <li>
                Bekerjasama dengan berbagai pihak industri untuk pengembangan
                sumber daya manusia.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  .relative.px-4.pt-40 {
    padding-top: 8rem;
  }
}
</style>
