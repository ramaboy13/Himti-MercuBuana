<script setup lang="js">
  import { ref, computed } from 'vue'

  let props = defineProps({
    member: {
      type: Object,
      required: true,
      validator: (value) => value.name && value.role && value.image,
    },
  })

  // Data Dummy for Development delete this when production
  props.member.name = 'Shani Indira Natio'
  props.member.image =
    'https://i.pinimg.com/1200x/33/3c/e8/333ce8249a43ab0266428b179f210502.jpg'

  const isHovered = ref(false)
  const maxNameLength = 15

  // Computed properties
  const truncatedName = computed(() => {
    if (props.member.name.length <= maxNameLength) return props.member.name
    const truncated = props.member.name.slice(0, maxNameLength)
    return truncated.lastIndexOf(' ') > 0
      ? truncated.slice(0, truncated.lastIndexOf(' ') + 2) + '.'
      : truncated + '...'
  })

  const displayedName = computed(() =>
    isHovered.value ? props.member.name : truncatedName.value
  )

  const cardClasses = computed(
    () =>
      `relative h-full overflow-hidden rounded-lg border border-accent bg-gray-800 shadow-lg transition-all ${
        isHovered.value ? 'hover:shadow-2xl' : 'scale-100'
      } dark:bg-neutral-900`
  )
</script>

<template>
  <div
    :class="cardClasses"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div
      class="group relative h-full overflow-hidden rounded-lg border-accent bg-gray-800 shadow-lg transition-all">
      <div class="overflow-hidden">
        <!-- Badge -->
        <div
          v-if="member.badge"
          class="absolute left-4 top-4 z-10 text-clip rounded-md bg-accent px-3 py-1 text-xs">
          {{ member.badge }}
        </div>

        <!-- Gambar Anggota -->
        <img
          :src="member.image"
          :alt="member.name"
          class="h-72 w-full scale-105 object-cover transition-all group-hover:scale-100"
          loading="lazy"
          @error="$emit('imageError', member)" />
      </div>

      <!-- Konten Anggota -->
      <div class="p-5">
        <h3
          class="mb-1 text-center text-lg font-semibold text-white dark:text-white">
          {{ displayedName }}
        </h3>
        <p class="text-center text-sm text-gray-400 dark:text-gray-300">
          {{ member.role }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* .hover\:scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: scale(var(--tw-scale-x), var(--tw-scale-y));
} */

  .hover\:shadow-2xl {
    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  /* Tambahkan animasi smooth untuk transisi hover */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
</style>
