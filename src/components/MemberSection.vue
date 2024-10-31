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

      <button
        class="mx-auto mb-6 block rounded-full bg-main-2 px-4 py-2 text-white hover:bg-purple-900"
      >
        Lihat Selengkapnya
      </button>

      <div
        data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-purple-600 hs-carousel-active:border-purple-600 size-3 border border-gray-400 rounded-full cursor-pointer"
      }'
        class="relative"
      >
        <div class="hs-carousel relative min-h-96 w-full overflow-hidden">
          <div
            class="hs-carousel-body absolute bottom-0 start-0 top-0 flex space-x-4 opacity-0 transition-transform duration-700"
          >
            <!-- Responsive 1-member slide on mobile, 2 on tablet, 3 on desktop -->
            <div
              v-for="(slide, index) in chunkedMembers"
              :key="index"
              class="hs-carousel-slide flex space-x-4"
            >
              <div
                v-for="member in slide"
                :key="member.id"
                class="mx-auto w-full max-w-xs rounded-lg bg-gray-900 p-1 text-center text-white shadow-lg sm:w-1/2 lg:w-1/3"
              >
                <img
                  :src="member.image"
                  alt="member photo"
                  class="mx-auto mb-4 h-72 w-full rounded-lg"
                />
                <h3 class="font-bold">{{ member.name }}</h3>
                <p class="">{{ member.role }}</p>
              </div>
            </div>
            <!-- End responsive slide -->
          </div>
        </div>

        <button
          type="button"
          class="hs-carousel-prev absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
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
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          type="button"
          class="hs-carousel-next absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
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
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        <div
          class="hs-carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center space-x-2"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=1',
        },
        {
          id: 2,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=2',
        },
        {
          id: 3,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=3',
        },
        {
          id: 4,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=4',
        },
        {
          id: 5,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=5',
        },
        {
          id: 6,
          name: 'Bimo Saputro',
          role: 'Divisi Riset Teknologi',
          image: 'https://picsum.photos/200?random=6',
        },
      ],
    }
  },
  computed: {
    // Chunk the members array into groups of 3 for each slide on desktop, 2 on tablet, and 1 on mobile
    chunkedMembers() {
      const chunkSize =
        window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1
      return Array.from(
        { length: Math.ceil(this.members.length / chunkSize) },
        (_, i) => this.members.slice(i * chunkSize, i * chunkSize + chunkSize),
      )
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateChunks)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateChunks)
  },
  methods: {
    updateChunks() {
      this.chunkedMembers = this.chunkMembers()
    },
  },
}
</script>

<style scoped>
.hs-carousel-prev,
.hs-carousel-next {
  transition: background-color 0.3s ease;
}
.hs-carousel-prev:hover,
.hs-carousel-next:hover {
  background-color: rgba(128, 128, 128, 0.2);
}
</style>
