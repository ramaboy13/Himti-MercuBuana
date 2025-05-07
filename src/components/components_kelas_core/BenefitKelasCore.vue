<template>
  <div class="min-h-screen bg-#512b90 flex flex-col md:flex-row items-center justify-center p-6 gap-10 text-white">
    <!-- Kiri: Grid Foto -->
    <div class="w-full md:w-1/4 grid grid-cols-2 gap-1 rounded-[15px] border-dashed border-4 border-purple-300 p-1 mb-8 md:mb-0">
      <div class="bg-pink-300 flex items-center justify-center rounded-2xl aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="https://via.placeholder.com/60" class="rounded-full w-16 h-16 object-cover" alt="Person 1">
      </div>
      <div class="bg-purple-300 flex items-center justify-center rounded-2xl aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="https://via.placeholder.com/60" class="rounded-full w-16 h-16 object-cover" alt="Person 2">
      </div>
      <div class="bg-yellow-300 flex items-center justify-center rounded-2xl aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="https://via.placeholder.com/60" class="rounded-full w-16 h-16 object-cover" alt="Person 3">
      </div>
      <div class="bg-red-300 flex items-center justify-center rounded-2xl aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="https://via.placeholder.com/60" class="rounded-full w-16 h-16 object-cover" alt="Person 4">
      </div>
    </div>

    <!-- Kanan: Benefits -->
    <div class="w-full md:w-1/2 mt-8 md:mt-0 ml-20 animate__animated animate__fadeIn">
      <h2 class="text-3xl md:text-4xl font-semibold mb-8 leading-snug text-white text-justify">
        <span class="text-accent font-bold">Benefits Program </span>  Kelas Core
      </h2>

      <div class="space-y-6 text-sm md:text-base text-justify">
        <div class="flex gap-4 items-start hover:bg-gray-800 transition duration-300">
          <div class="text-purple-300 text-xl">💻</div>
          <div>
            <h4 class="font-bold text-white">Pemrograman Dasar</h4>
            <p class="text-purple-100">Pelajari dasar-dasar pemrograman yang menjadi pondasi dalam mengembangkan aplikasi dan sistem informasi inovatif.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start hover:bg-gray-800 transition duration-300">
          <div class="text-pink-300 text-xl">🔍</div>
          <div>
            <h4 class="font-bold text-white">Algoritma dan Struktur Data</h4>
            <p class="text-purple-100">Pahami konsep algoritma dan struktur data untuk menyelesaikan masalah komputasi secara efisien dan efektif.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start hover:bg-gray-800 transition duration-300">
          <div class="text-indigo-300 text-xl">🧠</div>
          <div>
            <h4 class="font-bold text-white">Pengembangan Aplikasi</h4>
            <p class="text-purple-100">Kembangkan keterampilan dalam membuat aplikasi yang dapat menyelesaikan tantangan dunia nyata dengan teknologi terkini.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start hover:bg-gray-800 transition duration-300">
          <div class="text-red-300 text-xl">📚</div>
          <div>
            <h4 class="font-bold text-white">Pembelajaran Mandiri</h4>
            <p class="text-purple-100">Tingkatkan kemampuan belajar mandiri dengan berbagai materi dan sumber daya yang dapat diakses kapan saja.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineBenefits'
}
</script>

<style scoped>
</style>
