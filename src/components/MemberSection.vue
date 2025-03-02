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
        Temui Tim Terbaik Kami
      </h2>
      <p class="mb-14 text-center text-white/80">
        Berkenalan dengan anggota tim HIMTI, para generasi muda yang berdedikasi
        dan siap memberikan inovasi terbaik dalam setiap kegiatan kemahasiswaan.
      </p>

      <!-- Carousel -->
      <MemberCarousel />
      <!-- End Carousel -->

      <router-link
        to="/team"
        class="bg-accent text-primary hover:bg-main-2 mx-auto my-6 block w-44 rounded-xl px-4 py-2 text-center transition-transform duration-300 focus:scale-95 focus:ring-2 focus:ring-purple-400 md:text-lg">
        <span>Selengkapnya</span>
      </router-link>
    </div>
  </section>
</template>
