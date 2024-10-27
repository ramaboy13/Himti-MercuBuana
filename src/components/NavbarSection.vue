<script>
import { onMounted, onUnmounted, ref } from 'vue'
import logoHimti from '../assets/img/Logo_HiMTI.webp'

export default {
  name: 'NavbarSection',
  setup() {
    const isScrolled = ref(false)
    const isOpen = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isOpen,
      toggleMenu,
      logoHimti,
    }
  },
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 z-10 w-full p-1 shadow-md transition-colors duration-300',
      isScrolled ? 'bg-main-1' : 'bg-transparent',
    ]"
  >
    <div class="mx-auto flex items-center justify-between px-5 py-3">
      <!-- Logo HimTi -->
      <div class="flex items-center">
        <img :src="logoHimti" alt="Logo HimTi" class="h-13 w-12" />
        <h1
          class="title ml-3 hidden font-poppins text-2xl font-bold text-white md:inline md:text-lg"
        >
          HIMTI MERCU BUANA
        </h1>
      </div>

      <!-- Hamburger Icon (mobile) -->
      <button
        @click="toggleMenu"
        class="text-white focus:outline-none lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Navbar Links -->
      <ul
        :class="[
          isOpen ? 'block' : 'hidden',
          'text-white lg:flex lg:items-center lg:space-x-5 lg:bg-transparent',
          'absolute right-4 top-16 rounded-lg bg-main-1 p-4 shadow-lg lg:static lg:flex lg:space-x-5 lg:rounded-none lg:p-0 lg:shadow-none',
        ]"
        class="lg:static lg:flex lg:items-center lg:space-x-5"
      >
        <li>
          <router-link to="/" class="block px-3 py-2 hover:text-gray-200"
            >Home</router-link
          >
        </li>
        <li>
          <a href="#about" class="block px-3 py-2 hover:text-gray-200">About</a>
        </li>
        <li>
          <a href="#member" class="block px-3 py-2 hover:text-gray-200"
            >Member</a
          >
        </li>
        <li>
          <router-link to="/blog" class="block px-3 py-2 hover:text-gray-200"
            >Blog</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 780px) {
  .title {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
