<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import logoHimti from '../assets/img/logo-himti.webp'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useRoute } from 'vue-router'

// State reactive untuk scroll dan menu toggle
const isScrolled = ref(false)
const isOpen = ref(false)
const thisPage = useRoute()

// Fungsi menangani scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Fungsi toggle menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Fungsi menangani klik di luar navbar
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

// Nav items with dynamic routing
const navItems = computed(() => {
  if (thisPage.name === 'Home') {
    return [
      { name: 'Home', path: '#' },
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Our Team', path: '#team' },
    ]
  } else if (thisPage.name === 'Blog') {
    return [
      { name: 'Home', path: '/' },
      { name: 'Section 2', path: '/#section2' },
      { name: 'Section 3', path: '/#section3' },
    ]
  }
  console.log(thisPage.name)
  return []
})

// Setup lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 z-10 w-full shadow-md transition-colors duration-300',
      isScrolled && !isOpen ? 'bg-transparent backdrop-blur' : 'bg-main-1',
    ]"
  >
    <div class="mx-auto flex items-center justify-between px-5 py-3">
      <!-- Logo HimTi -->
      <a href="#" class="flex items-center">
        <img :src="logoHimti" alt="Logo HimTi" class="h-13 w-12" />
        <h1
          class="title ml-3 hidden font-poppins text-2xl font-bold text-white md:inline md:text-lg"
        >
          HIMTI MERCU BUANA
        </h1>
      </a>

      <!-- Hamburger Icon (mobile) -->
      <button
        id="hamburger-button"
        @click="toggleMenu"
        class="text-white focus:outline-none lg:hidden"
      >
        <Icon icon="pajamas:hamburger" class="text-2xl" />
      </button>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        @click="isOpen = false"
      ></div>

      <!-- Navbar Links -->
      <div
        id="mobile-nav"
        :class="[
          'fixed bottom-0 right-0 top-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:right-auto lg:top-auto lg:z-auto lg:h-auto lg:w-auto lg:transform-none',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          'bg-main-1 p-4 shadow-lg lg:flex lg:items-center lg:space-x-5 lg:bg-transparent lg:p-0 lg:shadow-none',
        ]"
      >
        <ul class="block gap-4 text-white lg:flex lg:py-0">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="content-center py-2 hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
          >
            <template v-if="thisPage !== 'Home'">
              <router-link :to="item.path" class="block text-white">
                {{ item.name }}
              </router-link>
            </template>
            <template v-else>
              <a
                :href="item.path"
                class="block rounded-lg bg-white px-4 py-2 font-semibold text-main-1 transition duration-200 hover:bg-accent hover:text-white"
              >
                {{ item.name }}
              </a>
            </template>
          </li>

          <div
            class="hs-dropdown content-center [--adaptive:none] [--strategy:static] sm:[--strategy:fixed]"
          >
            <button
              id="hs-navbar-example-dropdown"
              type="button"
              class="hs-dropdown-toggle flex w-full items-center font-medium text-neutral-400 hover:text-neutral-500 focus:text-neutral-500 focus:outline-none"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Mega Menu"
            >
              More
              <Icon icon="bi:chevron-down" class="ms-1 text-sm" />
            </button>

            <div
              class="hs-dropdown-menu top-full z-10 hidden space-y-1 rounded-lg bg-main-3 p-1 text-white opacity-0 transition-[opacity,margin] duration-[150ms] ease-in-out before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:w-48 sm:border-neutral-700 sm:shadow-md sm:dark:border"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-navbar-example-dropdown"
            >
              <a
                class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-600 focus:text-neutral-300 focus:outline-none"
                href="#"
              >
                About
              </a>
              <a
                class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-600 focus:text-neutral-300 focus:outline-none"
                href="#"
              >
                Downloads
              </a>
              <a
                class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-600 focus:text-neutral-300 focus:outline-none"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
        </ul>
      </div>
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
