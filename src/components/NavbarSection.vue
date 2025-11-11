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

const handleNavigation = async (item) => {
  const scrollToElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn(`Element with selector '${selector}' not found.`)
    }
  }

  if (item.path.startsWith('#')) {
    if (route.name !== 'home') {
      // Jika bukan di halaman Home, navigasi ke Home terlebih dahulu
      await router.push('/')
      setTimeout(() => {
        if (item.path === '#') {
          // Gulir ke atas jika path adalah '#'
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          // Gulir ke elemen target
          scrollToElement(item.path)
        }
      }, 100)
    } else {
      // Jika sudah di halaman Home
      if (item.path === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        scrollToElement(item.path)
      }
    }
  } else {
    // Navigasi ke path lain
    await router.push(item.path)
  }

  // Tutup dropdown dan menu dinamis setelah navigasi
  isDropdownOpen.value = false
  isOpen.value = false
}

// Main nav items
const navItems = computed(() => {
  const pageSpecificItems = {
    Home: [
      { name: 'Home', path: '#' }, // Path diubah menjadi '#' untuk halaman Home
      { name: 'About', path: '/about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
    Blog: [
      { name: 'Home', path: '/' }, // Path tetap '/' untuk halaman selain Home
      { name: 'About', path: '/about' },
      { name: 'Program', path: '#program' },
      { name: 'Members', path: '#team' },
      { name: 'Contact us', path: '#contact' },
    ],
  }

  // Kembalikan item spesifik untuk halaman aktif, fallback ke item umum jika tidak ditemukan
  return pageSpecificItems[route.name] || [{ name: 'Home', path: '/' }]
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

  // Inisialisasi otomatis dropdown
  const dropdown = document.querySelector('#hs-dropdown-to-destroy')
  if (dropdown) {
    HSDropdown.autoInit() // Auto-initialize semua elemen dropdown
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)

  const dropdown = document.querySelector('#hs-dropdown-to-destroy')
  if (dropdown) {
    const instance = HSDropdown.getInstance(dropdown, true)
    if (instance) {
      instance.destroy()
    }
  }
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 z-10 w-full shadow-md transition-colors duration-300',
      isScrolled && !isOpen ? 'bg-slate-800/[.1] backdrop-blur' : 'bg-main-1',
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
        <ul class="block items-center gap-0 text-slate-100 lg:flex lg:py-0">
          <!-- Regular Nav Items -->
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="relative content-center py-2"
          >
            <a
              @click="handleNavigation(item)"
              class="nav-link block cursor-pointer px-4 font-semibold transition duration-200 focus:text-slate-400"
            >
              {{ item.name }}
            </a>
          </li>
          <!-- Dropdown Menu -->
          <div
            id="hs-dropdown-to-destroy"
            class="hs-dropdown relative inline-flex h-full [--gpu-acceleration:true]"
          >
            <button
              id="hs-dropdown-scale-animation"
              type="button"
              class="hs-dropdown-toggle text-md inline-flex items-center rounded-lg bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-accent focus:text-slate-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 lg:bg-transparent lg:px-4 lg:text-slate-200 focus:lg:bg-transparent focus:lg:text-slate-200"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              More
              <Icon
                icon="fe:arrow-down"
                class="ml-1 transition-transform duration-300 ease-in-out hs-dropdown-open:rotate-180"
              />
            </button>

            <div
              class="hs-dropdown-menu absolute z-50 hidden min-w-60 scale-95 rounded-lg bg-slate-800/[.7] opacity-0 shadow-sm shadow-slate-700 backdrop-blur-lg transition-[transform,opacity] duration-200 ease-in-out hs-dropdown-open:scale-100 hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
              style="backdrop-filter: blur(16px)"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-scale-animation"
            >
              <div class="space-y-0.5 p-1">
                <a
                  v-for="item in dropdownItems"
                  :key="item.path"
                  @click="handleNavigation(item)"
                  class="hover flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
          <!-- End Dropdown Menu -->
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

/* .hs-dropdown-menu {
  background: rgba(66, 5, 90, 0.486);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
} */

.nav-link:after {
  display: block;
  content: '';
  border-bottom: solid 3px #581c87;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.nav-link:hover:after {
  transform: scaleX(1);
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
