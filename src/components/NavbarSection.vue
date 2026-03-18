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

const handleClickOutside = (event) => {
  const navbar = document.getElementById('mobile-nav')
  const hamburger = document.getElementById('hamburger-button')
  const dropdown = document.getElementById('nav-dropdown')

  if (
    isOpen.value &&
    navbar &&
    !navbar.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    isOpen.value = false
  }
}

// LOGIKA NAVIGASI
const handleNavigation = async (item) => {
  const smoothScrollTo = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  if (item.path.startsWith('#')) {
    if (route.path !== '/') {
      await router.push('/')
      setTimeout(() => {
        if (item.path === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
        else smoothScrollTo(item.path)
      }, 500)
    } else {
      if (item.path === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
      else smoothScrollTo(item.path)
    }
  } else {
    await router.push(item.path)
  }
  isOpen.value = false
}

// DAFTAR MENU
const navItems = computed(() => {
  const pageSpecificItems = {
    Home: [
      { name: 'Home', path: '#' },
      { name: 'About', path: '/about' },
      { name: 'Program', path: '/program' },
      { name: 'Members', path: '/team' },
      { name: 'Contact Us', path: '#contact' },
    ],
    Program: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Program', path: '/program' },
      { name: 'Members', path: '/team' },
      { name: 'Contact Us', path: '#contact' },
    ],
    Default: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Program', path: '/program' },
      { name: 'Members', path: '/team' },
      { name: 'Contact Us', path: '#contact' },
    ],
  }
  return pageSpecificItems[route.name] || pageSpecificItems['Default']
})


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  const dropdown = document.querySelector('#hs-dropdown-to-destroy')
  if (dropdown) HSDropdown.autoInit()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out',
      isOpen
        ? 'bg-[#180D2A] py-3 shadow-md'
        : isScrolled
          ? 'bg-[#180D2A]/90 py-3 shadow-md backdrop-blur-md'
          : 'bg-transparent py-5',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between px-5">
      <a
        @click="router.push('/')"
        class="flex cursor-pointer items-center"
      >
        <img :src="logoHimti" alt="Logo HimTi" class="h-10 w-auto md:h-12" />
      </a>

      <button
        id="hamburger-button"
        @click="toggleMenu"
        class="p-2 text-white focus:outline-none lg:hidden"
      >
        <Icon icon="pajamas:hamburger" class="text-2xl" />
      </button>

      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/60 lg:hidden"
        @click="isOpen = false"
      ></div>

      <div
        id="mobile-nav"
        :class="[
          'fixed bottom-0 right-0 top-0 z-50 w-72 transform transition-transform duration-300 ease-in-out lg:relative lg:right-auto lg:top-auto lg:z-auto lg:h-auto lg:w-auto lg:transform-none',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          'flex flex-col bg-[#1e102e] p-6 shadow-2xl lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none',
        ]"
      >
        <ul
          class="flex flex-col items-start gap-6 text-slate-100 lg:flex-row lg:items-center lg:gap-8"
        >
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="relative flex items-center"
          >
            <a
              v-if="item.name === 'Contact Us'"
              @click="handleNavigation(item)"
              class="flex cursor-pointer items-center justify-center rounded-[10px] bg-[#9557A6] px-6 py-2.5 text-base font-bold text-white shadow-md transition-all hover:bg-purple-900"
            >
              {{ item.name }}
            </a>

            <a
              v-else
              @click="handleNavigation(item)"
              class="nav-link block cursor-pointer px-2 text-base font-bold transition duration-200 hover:text-[#c084fc]"
              :class="{ 'text-[#c084fc]': route.path === item.path }"
            >
              {{ item.name }}
            </a>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

nav {
  font-family: 'Poppins', sans-serif;
}

.nav-link {
  position: relative;
}

@media (min-width: 1024px) {
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #c084fc;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }
}
</style>
