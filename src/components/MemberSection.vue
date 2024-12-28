<script>
import { Icon } from '@iconify/vue/dist/iconify.js'
import members from '../assets/data/dataTeam.json'
import MemberCarousel from './MemberCarousel.vue'

export default {
  components: {
    MemberCarousel,
    Icon,
  },
  data() {
    return {
      members, // Data anggota langsung digunakan
    }
  },
}
</script>

<template>
  <section class="bg-main-1 py-10 pt-32" id="team">
    <div class="relative mx-auto w-full max-w-6xl rounded-lg p-6">
      <h2 class="text-center text-3xl font-bold text-white">
        Temui tim kami yang terbaik
      </h2>
      <p class="mb-4 mt-2 text-center text-gray-300">
        Inilah wajah-wajah tim HIMTI kami, sekumpulan anak muda berpengetahuan
        luas yang siap menghadirkan terobosan baru dalam kegiatan kemahasiswaan.
      </p>

      <!-- Carousel -->
      <MemberCarousel />
      <!-- End Carousel -->

      <router-link
        to="/team"
        class="bg-main-4 mx-auto my-6 block w-44 rounded-full px-4 py-2 text-center text-white hover:bg-purple-900"
      >
        <span>Selengkapnya </span>
      </router-link>
    </div>
  </section>
</template>
