<script>
import members from '../assets/data/dataTeam.json'
import MemberCarousel from './MemberCarousel.vue'

export default {
  components: {
    MemberCarousel,
  },
  data() {
    return {
      members, // Data anggota langsung digunakan
    }
  },
}
</script>

<template>
  <section class="bg-main-1 pt-20" id="team">
    <div class="relative mx-auto w-full max-w-6xl rounded-lg px-6 pt-6">
      <h2 class="mb-3 text-center text-3xl font-bold text-white">
        Temui tim kami yang terbaik
      </h2>
      <p class="mb-14 text-center text-gray-300">
        Inilah wajah-wajah tim HIMTI kami, sekumpulan anak muda berpengetahuan
        luas yang siap menghadirkan terobosan baru dalam kegiatan kemahasiswaan.
      </p>

      <!-- Carousel -->
      <MemberCarousel />
      <!-- End Carousel -->

      <router-link
        to="/team"
        class="mx-auto my-6 block w-44 rounded-full bg-main-4 px-4 py-2 text-center text-white hover:bg-purple-900 focus:bg-purple-950 focus:ring-2 focus:ring-accent md:text-lg"
      >
        <span>Selengkapnya </span>
      </router-link>
    </div>
  </section>
</template>
