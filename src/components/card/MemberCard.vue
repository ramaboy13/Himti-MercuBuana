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
    'https://i.pinimg.com/1200x/0e/74/0e/0e740eb857f7c8aab7fc884c0cba0d66.jpg'

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
    isHovered.value ? props.member.name : truncatedName.value,
  )

  const cardClasses = computed(() =>
    isHovered.value ? 'hover:shadow-2xl' : 'scale-100',
  )
</script>

<template>
  <div
    class="relative h-full overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 select-none"
    :class="cardClasses"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div
      class="group relative h-full overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300">
      <div class="overflow-hidden">
        <!-- Badge -->
        <div
          v-if="member.badge"
          class="bg-accent absolute top-4 left-4 z-10 rounded-md px-3 py-1 text-xs text-clip">
          {{ member.badge }}
        </div>

        <!-- Gambar Anggota -->
        <img
          :src="member.image"
          :alt="member.name"
          class="sc h-72 w-full scale-105 object-cover transition-all duration-300 select-none group-hover:scale-100"
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
</style>
