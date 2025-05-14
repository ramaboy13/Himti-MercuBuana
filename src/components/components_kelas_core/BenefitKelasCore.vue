<template>
  <div class="min-h-screen bg-#512b90 flex flex-col md:flex-row items-center justify-center p-4 md:p-6 gap-6 md:gap-10 text-white">
    <!-- Left: Photo Grid -->
    <div class="w-full md:w-1/4 grid grid-cols-2 gap-1 rounded-[15px] border-dashed border-4 border-purple-300 p-1">
      <div 
        v-for="(item, index) in photos" 
        :key="index"
        :class="`${item.bg} flex items-center justify-center rounded-2xl aspect-square transform transition duration-300 hover:scale-105 hover:shadow-lg`"
      >
        <img 
          :src="item.src" 
          class="rounded-full w-12 md:w-16 h-12 md:h-16 object-cover" 
          :alt="item.alt"
          loading="lazy"
        >
      </div>
    </div>

    <!-- Right: Benefits -->
    <div class="w-full md:w-1/2 md:ml-10 lg:ml-20 animate__animated animate__fadeIn">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 leading-snug text-white text-center md:text-justify">
        <span class="text-purple-300 font-bold">Benefits Program </span> Kelas Core
      </h2>

      <div class="space-y-4 md:space-y-6 text-sm md:text-base">
        <div 
          v-for="(benefit, index) in benefits"
          :key="index"
          class="flex gap-3 md:gap-4 items-start p-3 rounded-lg hover:bg-gray-800/50 transition duration-300 group"
        >
          <div class="text-2xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" :class="benefit.iconColor">
            {{ benefit.icon }}
          </div>
          <div>
            <h4 class="font-bold text-white">{{ benefit.title }}</h4>
            <p class="text-purple-100">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineBenefits',
  data() {
    return {
      photos: [
        { bg: 'bg-pink-300', src: 'https://via.placeholder.com/60', alt: 'Person 1' },
        { bg: 'bg-purple-300', src: 'https://via.placeholder.com/60', alt: 'Person 2' },
        { bg: 'bg-yellow-300', src: 'https://via.placeholder.com/60', alt: 'Person 3' },
        { bg: 'bg-red-300', src: 'https://via.placeholder.com/60', alt: 'Person 4' }
      ],
      benefits: [
        { 
          icon: '💻', 
          iconColor: 'text-purple-300', 
          title: 'Pemrograman Dasar', 
          description: 'Pelajari dasar-dasar pemrograman yang menjadi pondasi dalam mengembangkan aplikasi dan sistem informasi inovatif.' 
        },
        { 
          icon: '🔍', 
          iconColor: 'text-pink-300', 
          title: 'Algoritma dan Struktur Data', 
          description: 'Pahami konsep algoritma dan struktur data untuk menyelesaikan masalah komputasi secara efisien dan efektif.' 
        },
        { 
          icon: '🧠', 
          iconColor: 'text-indigo-300', 
          title: 'Pengembangan Aplikasi', 
          description: 'Kembangkan keterampilan dalam membuat aplikasi yang dapat menyelesaikan tantangan dunia nyata dengan teknologi terkini.' 
        },
        { 
          icon: '📚', 
          iconColor: 'text-red-300', 
          title: 'Pembelajaran Mandiri', 
          description: 'Tingkatkan kemampuan belajar mandiri dengan berbagai materi dan sumber daya yang dapat diakses kapan saja.' 
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
img, div {
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .floating-element-1 {
    top: 5%;
    left: -5%;
  }
  .floating-element-2 {
    top: 15%;
    right: 5%;
  }
  .floating-element-3 {
    bottom: 15%;
    left: 5%;
  }
}
</style>