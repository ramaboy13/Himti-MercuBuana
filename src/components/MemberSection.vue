<script>
import members from '../assets/data/dataTeam.json'
import MemberCarousel from './MemberCarousel.vue'

export default {
  components: {
    MemberCarousel,
  },
  data() {
    return {
      members,
    }
  },
}
</script>

<template>
  <section class="bg-main-1 pt-20" id="team">
    <!-- Konten teks tetap di dalam container -->
    <div class="relative mx-auto w-full max-w-6xl px-6 pt-6">
      <h2 class="mb-3 text-center text-3xl font-bold text-white">
        Temui tim kami yang terbaik
      </h2>
      <p class="mb-14 text-center text-gray-300">
        Inilah wajah-wajah tim HIMTI kami, sekumpulan anak muda berpengetahuan
        luas yang siap menghadirkan terobosan baru dalam kegiatan kemahasiswaan.
      </p>

      <router-link
        to="/team"
        class="mx-auto my-7 block w-56 rounded-full bg-main-2 px-6 py-2 text-center text-white hover:bg-purple-900 focus:bg-purple-950 focus:ring-2 focus:ring-accent md:text-lg"
      >
        <span>Lihat Selengkapnya</span>
      </router-link>
    </div>

    <!-- Carousel DI LUAR container, full-width -->
    <div class="w-full overflow-hidden">
      <MemberCarousel />
    </div>
  </section>
</template>
