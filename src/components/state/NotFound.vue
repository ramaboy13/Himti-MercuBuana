<script>
export default {
  name: 'NotFound',
}
</script>

<template lang="">
  <div
    class="flex min-h-screen flex-col items-center justify-center px-4 dark:bg-gray-900 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md select-none space-y-8 text-center">
      <div class="mb-8">
        <h2
          class="mt-6 text-6xl font-extrabold text-gray-300 dark:text-gray-100"
        >
          404
        </h2>
        <p class="mt-2 text-3xl font-bold text-gray-300 dark:text-gray-100">
          Page not found
        </p>
        <p class="mt-2 text-sm text-gray-400 dark:text-gray-400">
          Sorry, we couldn't find the page you were looking for.
        </p>
      </div>
      <div class="mt-8">
        <a
          href="/"
          class="inline-flex items-center rounded-full border border-transparent bg-accent px-4 py-2 text-base font-medium text-primary duration-200 hover:scale-105 hover:bg-main-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0"
        >
          <Icon icon="akar-icons:arrow-left" class="mr-1" />
          Go back home
        </a>
      </div>
    </div>
    <div class="mt-16 w-full max-w-2xl select-none">
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div
            class="w-full border-t border-gray-500 dark:border-gray-600"
          ></div>
        </div>
        <div class="relative flex justify-center">
          <span
            class="bg-primary px-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400"
          >
            If you think this is a mistake, please contact
            <a
              class="mb-8 text-purple-600 hover:text-purple-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/himti_mercubuana/"
              >support</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
