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

    // Handle click outside navbar
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('mobile-nav')
      const hamburger = document.getElementById('hamburger-button')

      if (
        isOpen.value &&
        navbar &&
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        isOpen.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
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
        id="hamburger-button"
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

      <!-- Mobile Menu Overlay -->
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        @click="isOpen = false"
      ></div>

      <!-- Navbar Links -->
      <ul
        id="mobile-nav"
        :class="[
          'fixed bottom-0 right-0 top-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:right-auto lg:top-auto lg:z-auto lg:h-auto lg:w-auto lg:transform-none',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          'bg-main-1 p-4 shadow-lg lg:flex lg:items-center lg:space-x-5 lg:bg-transparent lg:p-0 lg:shadow-none',
        ]"
      >
        <li class="py-2 lg:py-0">
          <router-link
            to="/"
            class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
            >Home</router-link
          >
        </li>
        <li class="py-2 lg:py-0">
          <a
            href="#about"
            class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
            >About</a
          >
        </li>
        <li class="py-2 lg:py-0">
          <a
            href="#program"
            class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
            >Program</a
          >
        </li>
        <li class="py-2 lg:py-0">
          <a
            href="#team"
            class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
            >Our Team</a
          >
        </li>
        <li class="group relative py-2 lg:py-0">
          <button
            class="peer block w-full px-3 py-2 text-left text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd] lg:hover:cursor-pointer"
          >
            More
          </button>
          <ul
            class="invisible absolute space-y-2 bg-main-1 pl-4 opacity-0 transition-all duration-300 hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100 lg:right-0 lg:min-w-[120px] lg:space-y-0 lg:rounded-lg lg:p-2 lg:pl-2 lg:shadow-lg"
          >
            <li>
              <router-link
                to="/blog"
                class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd]"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link
                to="/event"
                class="block px-3 py-2 text-white hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd]"
                >Event</router-link
              >
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0">
          <a
            href="#contact"
            class="block rounded-lg bg-white px-4 py-2 font-semibold text-main-1 transition duration-200 hover:bg-accent hover:text-white"
            >Contact Us</a
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
