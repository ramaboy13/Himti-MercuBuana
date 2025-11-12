<script></script>

<template>
  <section class=" relative mx-auto overflow-hidden" id="about">
    <div
      class="z-[1] h-full px-5 pt-24 text-white sm:z-0 sm:px-8 sm:pt-32 lg:ml-10 lg:mr-10 lg:pt-60"
    >
      <div
        class="mb-10 mt-8 flex flex-col items-start gap-8 md:mt-0 md:flex-row md:px-20"
      >
        <div class="w-full" data-aos="fade-right">
          <h1 class="text-4xl font-bold">Tentang HIMTI</h1>
          <div class="mt-2 h-1 w-64 bg-main-2"></div>
          <p class="my-6 text-justify leading-relaxed text-gray-500">
            Himpunan Teknik Informatika adalah organisasi yang berdedikasi untuk
            memajukan bidang teknologi informasi dan ilmu komputer di
            universitas mercubuana. Didirikan pada tahun 2005, kami telah tumbuh
            menjadi komunitas yang dinamis dan inklusif, menyatukan mahasiswa,
            akademisi, profesional, dan penggemar teknologi dari berbagai latar
            belakang.
          </p>
          <router-link
            to="/about"
            class="inline-block rounded-lg bg-main-2 px-6 py-4 text-white shadow-xl transition-colors hover:bg-accent text-center"
          >
            Selengkapnya
          </router-link>
        </div>
        <div class="w-full">
          <div
            class="mb-8 flex flex-row-reverse gap-6 md:flex-row"
            data-aos="fade-left"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-main-2 p-2 sm:size-16"
            >
              <Icon icon="mdi:eye-outline" color="white" width="50" />
            </div>
            <div class="">
              <h1 class="mb-1 text-right text-4xl font-bold md:text-start">
                Visi
              </h1>
              <div class="flex w-full justify-end md:justify-start">
                <div class="md mb-4 h-1 w-20 bg-main-2 text-right"></div>
              </div>
              <div class="text-justify text-gray-500">
                Menjadikan HIMTI (Himpunan Mahasiswa Teknik Informatika) sebagai
                wadah yang kreatif, inovatif, dan aspiratif bagi mahasiswa
                Teknik Informatika dalam mengembangkan minat dan bakat, guna
                menghasilkan tenaga profesional yang memenuhi kebutuhan industri
                dan masyarakat dalam persaingan global di dunia kerja.
              </div>
            </div>
          </div>
          <div class="rtl flex gap-6 text-left" data-aos="fade-up">
            <div
              class="flex size-14 items-center justify-center rounded-full bg-main-2 p-2 sm:size-16"
            >
              <Icon icon="mdi:bullseye-arrow" color="white" width="50" />
            </div>
            <div class="">
              <h1 class="mb-1 text-4xl font-bold">Misi</h1>
              <div class="mb-4 h-1 w-20 bg-main-2"></div>
              <div class="text-start text-gray-500">
                <li>
                  Memfasilitasi mahasiswa dan mahasiswi Teknik Informatika dalam
                  bidang akademis melalui penyelenggaraan penelitian,
                  pendidikan, dan pengabdian dalam dunia IT.
                </li>
                <li>
                  Mewadahi kreasi dan aspirasi mahasiswa Teknik Informatika.
                </li>
                <li>
                  Bekerja sama dengan berbagai pihak untuk menunjang
                  pengembangan bakat mahasiswa Teknik Informatika.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
