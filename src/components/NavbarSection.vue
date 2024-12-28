<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logoHimti from '../assets/img/logo-himti.webp'

const isScrolled = ref(false)
const isOpen = ref(false)
const isDropdownOpen = ref(false)
const route = useRoute()
const router = useRouter()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const handleClickOutside = (event) => {
  const navbar = document.getElementById('mobile-nav')
  const hamburger = document.getElementById('hamburger-button')
  const dropdown = document.getElementById('nav-dropdown')
  const dropdownButton = document.getElementById('dropdown-button')

  if (
    isOpen.value &&
    navbar &&
    !navbar.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    isOpen.value = false
  }

  if (
    isDropdownOpen.value &&
    dropdown &&
    !dropdown.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    isDropdownOpen.value = false
  }
}

const handleNavigation = (item) => {
  if (item.path.startsWith('#')) {
    if (route.name !== 'Home') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.querySelector(item.path)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      })
    } else {
      const element = document.querySelector(item.path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  } else {
    router.push(item.path)
    isDropdownOpen.value = false
    isOpen.value = false
  }
}

// Main nav items
const navItems = computed(() => {
  const commonItems = [{ name: 'Home', path: '/' }]

  const pageSpecificItems = {
    Home: [
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Our Team', path: '#team' },
    ],
    Blog: [
      { name: 'About', path: '#about' },
      { name: 'Program', path: '#program' },
      { name: 'Our Team', path: '#team' },
    ],
  }

  return [...commonItems, ...(pageSpecificItems[route.name] || [])]
})

// Dropdown menu items
const dropdownItems = [
  { name: 'Blog', path: '/blog' },
  { name: 'Event', path: '/event' },
  { name: 'Team', path: '/team' },
  { name: 'FKTI', path: '/fkti' },
  { name: 'Kelascore', path: '/kelascore' },
  { name: 'Seminar IT', path: '/seminarit' },
]

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
      <a @click="router.push('/')" class="flex cursor-pointer items-center">
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
          <!-- Regular Nav Items -->
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="content-center py-2 hover:text-accent hover:[text-shadow:0px_0px_10px_#b100cd,0px_0px_20px_#b100cd,0px_0px_30px_#b100cd]"
          >
            <a
              @click="handleNavigation(item)"
              class="block cursor-pointer rounded-lg bg-white px-4 py-2 font-semibold text-main-1 transition duration-200 hover:bg-accent hover:text-white"
            >
              {{ item.name }}
            </a>
          </li>

          <!-- Dropdown Menu -->
          <li class="relative">
            <button
              id="dropdown-button"
              @click="toggleDropdown"
              class="flex items-center rounded-lg px-4 py-2 font-semibold text-white transition duration-200 hover:bg-accent hover:text-white"
            >
              More
              <Icon
                icon="bi:chevron-down"
                class="ml-2"
                :class="{ 'rotate-180': isDropdownOpen }"
              />
            </button>

            <!-- Dropdown Content -->
            <div
              id="nav-dropdown"
              v-show="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg lg:right-0"
            >
              <div class="py-1">
                <a
                  v-for="item in dropdownItems"
                  :key="item.path"
                  @click="handleNavigation(item)"
                  class="block cursor-pointer px-4 py-2 text-white hover:bg-accent hover:text-white"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </li>
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

.rotate-180 {
  transform: rotate(180deg);
}
</style>
