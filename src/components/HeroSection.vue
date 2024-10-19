<template>
  <section
    id="home"
    class="flex h-screen items-center justify-center bg-cover bg-center px-4 md:px-8"
    style="background-image: url('/public/img/hero-bg2.jpg')"
  >
    <div
      class="flex-xl heroku flex w-full max-w-[80rem] flex-col-reverse items-center justify-between p-4 md:mt-8 md:flex-row md:space-x-12"
    >
      <!-- Text Section -->
      <div class="mt-6 w-48 text-white md:mt-0 md:w-2/3">
        <h5 class="text-lg font-semibold text-white md:text-2xl">
          HIMTI Universitas Mercu Buana
        </h5>
        <h1 class="mb-2 text-3xl font-bold md:text-5xl">
          Himpunan <span class="text-[#7B4399]">Teknik Informatika</span>
        </h1>

        <h1 class="mb-6 text-2xl font-semibold text-gray-300 md:text-xl">
          Tahun 2024 - 2025
        </h1>
        <!-- Line that follows the h1 width -->
        <div class="mb-6 mt-5 inline-block h-1 w-48 bg-[#7B4399]"></div>

        <p class="text-sm leading-relaxed text-gray-400 md:mb-4 md:text-base">
          Di Himpunan Teknik Informatika! Di sini, Anda dapat menemukan
          informasi terbaru tentang proyek, kegiatan, serta inisiatif yang kami
          lakukan untuk menciptakan dampak positif bagi masyarakat. Temukan
          bagaimana Anda dapat terlibat, mendukung, atau bekerja sama dengan
          kami untuk mencapai tujuan bersama.
        </p>
      </div>

      <!-- Logo Section with Pink Shadow -->
      <div class="mb-6 md:mb-0 md:ml-6">
        <div
          class="card-logo rounded-t-lg bg-gradient-to-b from-[#B17FBA] to-purple-500 p-6 shadow-[10px_10px_20px_rgba(231,72,176,0.7)]"
        >
          <img
            src="/public/img/Logo HiMTI.jpg"
            alt="HiMTI UMB"
            class="logo-himti h-40 w-40 object-contain md:h-72 md:w-72"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
@media (max-width: 780px) {
  .heroku {
    margin-top: 6rem;
    display: flex; /* Use flexbox for alignment */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    text-align: center; /* Center text inside the container */
  }

  /* Center the line under the text */
  .heroku .line {
    margin: 1rem auto; /* Center the line with auto margins */
  }
  .logo-himti {
    width: 100px;
    height: 100px;
    box-shadow: 0;
  }
  .card-logo {
    box-shadow: 0 10px 20px rgba(231, 72, 176, 0.7);
  }
}
</style>
