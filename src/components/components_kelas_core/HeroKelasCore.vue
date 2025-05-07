<template>
  <div class="bg-#512b90 min-h-screen flex flex-col justify-between py-20 px-20">
   <!-- Section Header -->
   <section class="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
      <!-- Text Area -->
      <div class="lg:w-1/2 text-white text-center lg:text-left">
        <h2 class="text-lg sm:text-xl font-semibold text-purple-200 tracking-wide">Kelas Core</h2>
        <h1 class="mb-2 text-2xl font-bold md:text-4xl">
           <span ref="typedText" class="typing-text text-accent"></span>
       </h1>
        <h3 class="text-lg sm:text-2xl font-medium text-purple-100 mt-2">Tahun 2024 - 2025</h3>
        <div class="w-24 h-1 bg-pink-400 my-6 mx-auto lg:mx-0"></div>
        <p class="text-gray-200 text-sm sm:text-base leading-relaxed text-justify">
          Kelas Core adalah program pembelajaran inti yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika Universitas Mercu Buana. 
          Program ini dirancang untuk memberikan pemahaman mendalam mengenai konsep dasar teknologi dan informatika seperti pemrograman, algoritma, 
          dan struktur data. Tujuan utama adalah membekali mahasiswa dengan keterampilan teknis untuk mengembangkan aplikasi dan sistem informasi inovatif.
        </p>
      </div>

      <!-- Ilustrasi / Gambar -->
      <div class="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img src="http://localhost:5173/src/assets/img/C-Tech%202.avif" alt="Ilustrasi Kelas Core" class="w-48 sm:w-80 drop-shadow-2xl rounded-xl" />

      <!-- Quotes di sebelah kanan gambar -->
      <!-- <div class="lg:w-1/1 text-white">
        <blockquote class="text-lg font-semibold italic text-center text-gray-300">
          "Pendidikan adalah senjata paling 
        </blockquote>
        <blockquote class="text-lg font-semibold italic text-center text-gray-300">
          ampuh yang dapat digunakan untuk mengubah dunia."  
        </blockquote>
      </div> -->
      </div>
    </section>

    <!-- Section Footer -->
    <section class="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 py-6 shadow-inner w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white justify-items-center">
          <div v-for="tech in technologies" :key="tech.name" class="flex flex-col items-center hover:text-yellow-300 transition-all duration-300">
            <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 mb-2" />
            <span class="text-sm text-center">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const typedText = ref(null)

onMounted(() => {
  new Typed(typedText.value, {
    strings: ['HIMPUNAN TEKNIK INFORMATIKA'],
    typeSpeed: 50,  // Kecepatan ketikan
    backSpeed: 25,  // Kecepatan kembali (jika ada backspacing)
    showCursor: true,  // Menampilkan kursor
    cursorChar: '|',  // Karakter kursor
    loop: false,  // Loop jika ingin diulang
  })
})

const technologies = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/ffffff' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/ffffff' },
  { name: 'Go', icon: 'https://cdn.simpleicons.org/go/ffffff' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/ffffff' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/ffffff' },
]
</script>

<style scoped>
.typing-text {
  display: inline-block;
}

.typed-cursor {
  font-size: 2rem; 
}
</style>