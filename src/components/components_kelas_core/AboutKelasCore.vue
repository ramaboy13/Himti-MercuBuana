<template>
  <div class="min-h-screen bg-#512b90 flex flex-col md:flex-row items-center justify-center p-6 gap-10 text-white">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-white text-center mb-10">
        <span class="text-accent font-bold">About Program </span> Kelas Core
      </h1>

      <!-- Deskripsi Program Kelas -->
      <div class="text-center text-white mb-16">
        <p class="text-lg md:text-xl">
          Program Kelas Core adalah bagian dari Himpunan Mahasiswa Teknik Informatika Universitas Mercu Buana, yang bertujuan
          untuk memberikan keterampilan dan pengetahuan dalam bidang <strong>Data Science</strong> dan <strong>Web Development</strong> kepada mahasiswa.
        </p>
      </div>

      <!-- Menu Kelas Card -->
      <div class="overflow-hidden">
        <div class="carousel-wrapper relative w-full">
          <h2 class="text-2xl font-semibold text-white text-center mb-8">
            <!-- <span class="text-accent">Menu Kelas</span> yang Tersedia -->
          </h2>

          <!-- Card Carousel -->
          <div class="carousel flex gap-8 overflow-x-auto py-4">
            <!-- Card 1: Data Sains -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Data Science" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Data Sains</h3>
              <p class="text-white mb-4">Pelajari dasar-dasar ilmu data, analisis statistik, dan machine learning untuk memecahkan masalah dunia nyata.</p>
            </div>

            <!-- Card 2: Web Developer -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Web Developer" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Web Developer</h3>
              <p class="text-white mb-4">Membangun website dan aplikasi web menggunakan teknologi frontend dan backend terkini.</p>
            </div>

            <!-- Card 3: Mobile Developer -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Mobile Developer" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Mobile Developer</h3>
              <p class="text-white mb-4">Kembangkan aplikasi mobile untuk platform iOS dan Android menggunakan teknologi terkini.</p>
            </div>

            <!-- Card 4: Cybersecurity -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Cybersecurity" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Cybersecurity</h3>
              <p class="text-white mb-4">Pelajari bagaimana melindungi sistem dan aplikasi dari ancaman dunia maya yang semakin berkembang.</p>
            </div>

            <!-- Card 5: Cloud Computing -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Cloud Computing" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Cloud Computing</h3>
              <p class="text-white mb-4">Kuasai teknologi cloud untuk membangun infrastruktur dan layanan berbasis cloud secara efektif dan efisien.</p>
            </div>

            <!-- Card 6: Artificial Intelligence -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Artificial Intelligence" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
              <p class="text-white mb-4">Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.</p>
            </div>

            <!-- Card 7: Artificial Intelligence -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Artificial Intelligence" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
              <p class="text-white mb-4">Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.</p>
            </div>

            <!-- Card 8: Artificial Intelligence -->
            <div class="carousel-item bg-purple-700 p-6 rounded-lg shadow-lg w-72 h-80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/150" alt="Artificial Intelligence" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
              <p class="text-white mb-4">Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.</p>
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
          description:
            "Pelajari dasar-dasar ilmu data, analisis statistik, dan machine learning untuk memecahkan masalah dunia nyata.",
          image: "https://via.placeholder.com/150",
          link: "/data-sains"
        },
        {
          title: "Web Developer",
          description:
            "Membangun website dan aplikasi web menggunakan teknologi frontend dan backend terkini.",
          image: "https://via.placeholder.com/150",
          link: "/web-developer"
        },
        {
          title: "Mobile Developer",
          description:
            "Kembangkan aplikasi mobile untuk platform iOS dan Android menggunakan teknologi terkini.",
          image: "https://via.placeholder.com/150",
          link: "/mobile-developer"
        },
        {
          title: "Cybersecurity",
          description:
            "Pelajari bagaimana melindungi sistem dan aplikasi dari ancaman dunia maya yang semakin berkembang.",
          image: "https://via.placeholder.com/150",
          link: "/cybersecurity"
        },
        {
          title: "Cloud Computing",
          description:
            "Kuasai teknologi cloud untuk membangun infrastruktur dan layanan berbasis cloud secara efektif dan efisien.",
          image: "https://via.placeholder.com/150",
          link: "/cloud-computing"
        },
        
        {
          title: "Artificial Intelligence",
          description:
            "Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.",
          image: "https://via.placeholder.com/150",
          link: "/artificial-intelligence"
        },

        {
          title: "Artificial Intelligence",
          description:
            "Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.",
          image: "https://via.placeholder.com/150",
          link: "/artificial-intelligence"
        },

        {
          title: "Artificial Intelligence",
          description:
            "Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.",
          image: "https://via.placeholder.com/150",
          link: "/artificial-intelligence"
        },

        {
          title: "Artificial Intelligence",
          description:
            "Pelajari konsep AI, pembelajaran mesin, dan penerapannya dalam kehidupan sehari-hari.",
          image: "https://via.placeholder.com/150",
          link: "/artificial-intelligence"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* General styling for section */
.bg-accent {
  background-color: #512b90;
}

/* Carousel styling */
.carousel-wrapper {
  position: relative;
  overflow-x: visible; /* Menghilangkan scrolling horizontal */
}

.carousel {
  display: flex;
  gap: 16px;
  flex-wrap: wrap; /* Menjaga elemen agar membungkus dan tidak overflow */
  justify-content: center; /* Menjaga agar elemen tetap berada di tengah */
}

.carousel-item {
  width: 300px; /* Lebar tetap untuk kartu */
  box-sizing: border-box;
  transition: all 0.3s ease;
  margin: 0 8px; /* Memberikan sedikit jarak antar item */
  border-radius: 8px; /* Membuat sudut kartu lebih lembut */
}

.carousel-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Responsiveness untuk mobile dan tablet */
@media (max-width: 768px) {
  .carousel {
    flex-direction: row;
    justify-content: space-evenly; /* Menjaga jarak antar item */
  }

  .carousel-item {
    width: 100%; /* Memungkinkan kartu untuk menggunakan ruang penuh pada layar kecil */
    max-width: 300px; /* Menjaga ukuran kartu agar tidak terlalu besar pada layar kecil */
    margin-bottom: 16px; /* Memberikan jarak antar item */
  }
}
</style>
