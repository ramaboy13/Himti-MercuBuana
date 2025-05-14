<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 gap-10 text-white">


    <!-- Main Content -->
    <div class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between pt-20">
      <!-- Left content -->
      <div class="md:w-1/2 mb-10 md:mb-0 md:pr-15 z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Develop your skills in a new and unique way</h1>
        <p class="text-lg mb-8">
          Unlock a transformative approach to skill development in a variety 
          that will enhance your versatility. All the experiences and 
          training you deserve in one place.
        </p>
        <div class="flex space-x-4">
          <button class="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-800 transition font-bold">Start Trial</button>
          <a href="#" class="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-[#512b90] transition">Know more</a href="#">
        </div>
      </div>

      <!-- Right content with image and floating elements -->
      <div class="md:w-1/2 relative">
        <div class="relative z-10 md:pl-15">
          <img 
            src="https://img.lovepik.com/png/20231114/person-reading-book-vector-cartoon-sticker-person-with-book_590308_wh860.png" 
            alt="Student with books" 
            class="rounded-lg"
          />
          
          <!-- Floating elements -->
          <div 
            class="absolute rounded-lg bg-[#41237a] p-3 shadow-lg flex items-center floating-element-1"
          >
            <div class="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-2">
              <span>📊</span>
            </div>
            <div>
              <p class="font-bold">Online Classes</p>
              <p class="text-xs text-pink-300">24/7 Available</p>
            </div>
          </div>

          <div 
            class="absolute rounded-lg bg-[#41237a] p-3 shadow-lg flex items-center floating-element-2"
          >
            <div class="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-2">
              <span>🌟</span>
            </div>
            <div>
              <p class="font-bold">New Courses</p>
              <p class="text-xs text-pink-300">Weekly Updated</p>
            </div>
          </div>

          <div 
            class="absolute rounded-lg bg-[#41237a] p-3 shadow-lg flex items-center floating-element-3"
          >
            <div class="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-2">
              <span>📱</span>
            </div>
            <div>
              <p class="font-bold">Mobile Learning</p>
              <p class="text-xs text-pink-300">Learn Anywhere</p>
            </div>
          </div>
        </div>
        
        <!-- Background circle -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-70 blur-3xl -z-10"></div>
      </div>
    </div>

    <!-- Marquee of logos -->
    <div class="w-full bg-purple-600 py-10 mt-8  overflow-hidden">
      <div class="marquee-container">
        <div class="marquee-content">
          <div v-for="(logo, index) in [...logos, ...logos]" :key="index" class="flex items-center mx-8">
            <div class="w-6 h-6 bg-white rounded-full mr-2"></div>
            <span class="text-lg font-bold">{{ logo }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EteshHeroPage',
  data() {
    return {
      logos: ["Studingo", "Masterclass", "Presets", "Tools"]
    }
  },
  mounted() {
    this.animateFloatingElements();
  },
  methods: {
    animateFloatingElements() {
      // Initial positions and directions for floating elements
      const elements = [
        { 
          el: document.querySelector('.floating-element-1'),
          x: 10, y: 10, dirX: 0.3, dirY: 0.2
        },
        { 
          el: document.querySelector('.floating-element-2'),
          x: 60, y: 20, dirX: -0.2, dirY: 0.3
        },
        { 
          el: document.querySelector('.floating-element-3'),
          x: 30, y: 60, dirX: 0.2, dirY: -0.3
        }
      ];
      
      // Update positions periodically
      setInterval(() => {
        elements.forEach(item => {
          // Update position
          item.x += item.dirX;
          item.y += item.dirY;
          
          // Bounce off edges
          if (item.x <= 0 || item.x >= 80) item.dirX *= -1;
          if (item.y <= 0 || item.y >= 80) item.dirY *= -1;
          
          // Apply new position
          item.el.style.top = `${item.y}%`;
          item.el.style.left = `${item.x - 20}%`;
        });
      }, 50);
    }
  }
}
</script>

<style scoped>
.floating-element-1 {
  top: 10%;
  left: -10%;
  animation: float 6s ease-in-out infinite;
}

.floating-element-2 {
  top: 20%;
  right: 10%;
  animation: float 8s ease-in-out infinite reverse;
}

.floating-element-3 {
  bottom: 20%;
  left: 10%;
  animation: float 7s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.marquee-container {
  overflow: hidden;
  width: 100%;
}

.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>