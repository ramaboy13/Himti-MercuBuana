<template>
  <nav
    :class="[
      'fixed top-0 z-50 w-full p-1 shadow-md transition-colors duration-300',
      isScrolled ? 'bg-main-1' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo HimTi -->
      <img src="/img/Logo HiMTI.jpg" alt="Logo HimTi" class="h-13 w-12" />
      <ul class="flex space-x-4 text-white">
        <li>
          <router-link to="/" class="hover:text-gray-200">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-200"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/blog" class="hover:text-gray-200">Blog</router-link>
        </li>

        <!-- Dark Mode Toggle -->
        <div class="hs-dropdown">
          <button
            id="hs-dropdown-dark-mode"
            type="button"
            class="hs-dropdown-toggle hs-dark-mode group flex items-center font-medium text-gray-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <svg
              class="hs-dark-mode-active:hidden block size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <svg
              class="hs-dark-mode-active:block hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>

          <div
            id="selectThemeDropdown"
            class="hs-dropdown-menu hs-dropdown-open:opacity-100 z-10 mb-2 mt-2 hidden origin-bottom-left space-y-0.5 rounded-lg bg-white p-1 opacity-0 shadow-md transition-[margin,opacity] duration-300 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-dark-mode"
          >
            <button
              type="button"
              class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              data-hs-theme-click-value="default"
            >
              Default (Light)
            </button>
            <button
              type="button"
              class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              data-hs-theme-click-value="dark"
            >
              Dark
            </button>
            <button
              type="button"
              class="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              data-hs-theme-click-value="auto"
            >
              Auto (System)
            </button>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'NavbarSection',
  setup() {
    const isScrolled = ref(false)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        isScrolled.value = true
      } else {
        isScrolled.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
    }
  },
}
</script>

<style scoped>
/* Kamu bisa menambahkan gaya tambahan jika dibutuhkan */
</style>
