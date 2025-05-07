<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 text-white">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        <span class="text-purple-300 font-bold">About Program </span> Kelas Core
      </h1>

      <!-- Deskripsi Program Kelas -->
      <div class="text-center text-white mb-12 max-w-3xl mx-auto">
        <p class="text-lg sm:text-xl leading-relaxed">
          Program Kelas Core adalah bagian dari Himpunan Mahasiswa Teknik Informatika Universitas Mercu Buana, yang bertujuan
          untuk memberikan keterampilan dan pengetahuan dalam bidang <strong class="text-purple-300">Data Science</strong> dan <strong class="text-purple-300">Web Development</strong> kepada mahasiswa.
        </p>
      </div>

      <!-- Menu Kelas Card -->
      <div class="relative">
        <h2 class="text-2xl font-semibold text-white text-center mb-8">
          <span class="text-purple-300">Menu Kelas</span> yang Tersedia
        </h2>

        <!-- Card Carousel -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(item, index) in classes" 
            :key="index"
            class="card-3d transform-style-preserve-3d perspective-1000 hover:rotate-y-15 transition-all duration-500 ease-out"
          >
            <div class="card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
              <div class="card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl p-6 shadow-2xl border-2 border-purple-400/20">
                <div class="absolute inset-0 rounded-xl border-2 border-purple-300/30 pointer-events-none"></div>
                <div class="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-400/10 to-transparent pointer-events-none"></div>
                
                <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover rounded-lg mb-4 border-2 border-purple-300/30">
                <h3 class="text-xl font-bold text-white mb-3">{{ item.title }}</h3>
                <p class="text-purple-100 mb-4">{{ item.description }}</p>
                <button class="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                  Pelajari Lebih
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      classes: [
        {
          title: "Data Sains",
          description: "Pelajari dasar-dasar ilmu data, analisis statistik, dan machine learning untuk memecahkan masalah dunia nyata.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          link: "/data-sains"
        },
        {
          title: "Web Developer",
          description: "Membangun website dan aplikasi web menggunakan teknologi frontend dan backend terkini.",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
          link: "/web-developer"
        },
        {
          title: "Mobile Developer",
          description: "Kembangkan aplikasi mobile untuk platform iOS dan Android menggunakan teknologi terkini.",
          image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          link: "/mobile-developer"
        },
        {
          title: "Cybersecurity",
          description: "Pelajari bagaimana melindungi sistem dan aplikasi dari ancaman dunia maya yang semakin berkembang.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          link: "/cybersecurity"
        },
        {
          title: "Cloud Computing",
          description: "Kuasai teknologi cloud untuk membangun infrastruktur dan layanan berbasis cloud secara efektif dan efisien.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
          link: "/cloud-computing"
        },
        {
          title: "Artificial Intelligence",
          description: "Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.",
          image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
          link: "/artificial-intelligence"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* 3D Card Effects */
.card-3d {
  perspective: 1000px;
  height: 420px;
}

.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.5s;
  height: 100%;
}

.card-front {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
}

.card-3d:hover .card-inner {
  transform: rotateY(15deg);
}

/* Gradient Border Effect */
.card-front::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #a855f7, #ec4899, #f59e0b);
  z-index: -1;
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-3d:hover .card-front::before {
  opacity: 1;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .card-3d {
    height: 380px;
  }
}

/* Smooth transitions */
img, button {
  transition: all 0.3s ease;
}

/* Button hover effect */
button:hover {
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
}
</style>