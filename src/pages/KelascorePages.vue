<template>
  <div class="min-h-screen pt-24">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div class="mb-8 md:mb-0 md:w-1/2">
          <div class="mb-4 text-orange-300">Start Learning Today</div>
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
            The Best Platform Enroll in Your Special Course
          </h1>
          <p class="mb-6 text-gray-200">
            Our mission is to help people to find the best course - online and
            teach with expert anywhere
          </p>
          <div class="flex space-x-4">
            <button
              class="rounded-lg bg-orange-400 px-6 py-3 text-white hover:bg-orange-500"
            >
              Get Started →
            </button>
            <button
              class="rounded-lg border border-white px-6 py-3 text-white hover:bg-white/10"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="md:w-1/2">
          <img :src="heroImage.main" alt="Hero Image" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Trusted Companies -->
    <div class="container mx-auto px-4 py-8">
      <p class="mb-8 text-center text-gray-200">Trusted by 4,000+ companies</p>

      <div class="relative flex overflow-hidden">
        <!-- First marquee container -->
        <div
          class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-20"
        >
          <img
            v-for="(company, index) in companies"
            :key="'a-' + index"
            :src="company"
            :alt="`Company Logo ${index + 1}`"
            class="h-8 object-contain md:h-24"
          />
        </div>

        <!-- Duplicated marquee container for seamless loop -->
        <div
          class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-20"
        >
          <img
            v-for="(company, index) in companies"
            :key="'b-' + index"
            :src="company"
            :alt="`Company Logo ${index + 1}`"
            class="h-8 object-contain md:h-24"
          />
        </div>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="mb-2 text-orange-300">Courses Details</div>
      <h2 class="mb-4 text-3xl font-bold text-white">Explore Our Categories</h2>
      <p class="mb-6 text-gray-200">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <button
        class="mb-8 rounded-lg bg-orange-400 px-6 py-3 text-white hover:bg-orange-500"
      >
        All Categories →
      </button>

      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="rounded-lg bg-white/10 p-6 backdrop-blur-xs transition-all hover:bg-white/20 hover:shadow-lg"
        >
          <img
            :src="category.image"
            :alt="category.name"
            class="mb-4 h-40 w-full rounded-lg object-cover"
          />
          <h3 class="text-xl font-semibold text-white">{{ category.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Coaching Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col items-center gap-12 md:flex-row">
        <div class="md:w-1/2">
          <img :src="heroImage.secondary" alt="Secondary Hero" class="w-full" />
        </div>
        <div class="md:w-1/2">
          <div class="mb-2 text-orange-300">About Us</div>
          <h2 class="mb-4 text-3xl font-bold text-white">
            We Offering Coaching by Skilled Advisors
          </h2>
          <p class="mb-8 text-gray-200">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start space-x-3"
            >
              <div class="mt-1 h-6 w-6">
                <img
                  :src="feature.icon"
                  :alt="feature.title"
                  class="w-full brightness-0 invert"
                />
              </div>
              <div>
                <h4 class="mb-2 font-semibold text-white">
                  {{ feature.title }}
                </h4>
                <p class="text-sm text-gray-200">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>

          <button
            class="mt-8 rounded-lg bg-orange-400 px-6 py-3 text-white hover:bg-orange-500"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import hero images
import heroImage1 from '../assets/img/KelasCore/HeroPages.png'
import heroImage2 from '../assets/img/KelasCore/HeroPages2.png'

// Import company logos
import logoCompanyAsus from '../assets/img/KelasCore/Company/Asus.png'
import logoCompanyFerrari from '../assets/img/KelasCore/Company/Ferrari.png'
import logoCompanyLenovo from '../assets/img/KelasCore/Company/Lenovo.png'
import logoCompanyNvidia from '../assets/img/KelasCore/Company/Nvidia.png'

export default {
  name: 'KelasCore',
  data() {
    return {
      // Hero Images
      heroImage: {
        main: heroImage1,
        secondary: heroImage2,
      },

      // Companies logos with duplicate for smooth marquee
      companies: [
        logoCompanyFerrari,
        logoCompanyAsus,
        logoCompanyLenovo,
        logoCompanyNvidia,
        // Duplicating array for smooth marquee
        logoCompanyFerrari,
        logoCompanyAsus,
        logoCompanyLenovo,
        logoCompanyNvidia,
      ],

      // Categories using online images
      categories: [
        {
          name: 'Business',
          image:
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80',
        },
        {
          name: 'English',
          image:
            'https://images.unsplash.com/photo-1453906971074-ce568cccbc63?w=500&q=80',
        },
        {
          name: 'Finance',
          image:
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80',
        },
        {
          name: 'Content Writing',
          image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80',
        },
        {
          name: 'Development',
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
        },
        {
          name: 'Art & Design',
          image:
            'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=500&q=80',
        },
      ],

      // Features with online icons
      features: [
        {
          title: 'Exclusive Coach',
          description:
            'Non proident ullamco est sit aliqua dolor do amet velit.',
          icon: 'https://api.iconify.design/ph/check-circle-bold.svg',
        },
        {
          title: 'Master Certified',
          description:
            'Non proident ullamco est sit aliqua dolor do amet velit.',
          icon: 'https://api.iconify.design/ph/certificate-bold.svg',
        },
        {
          title: 'Creative Minds',
          description:
            'Non proident ullamco est sit aliqua dolor do amet velit.',
          icon: 'https://api.iconify.design/ph/brain-bold.svg',
        },
        {
          title: 'Video Tutorials',
          description:
            'Non proident ullamco est sit aliqua dolor do amet velit.',
          icon: 'https://api.iconify.design/ph/video-camera-bold.svg',
        },
      ],
    }
  },
}
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Optional: Pause animation on hover */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
