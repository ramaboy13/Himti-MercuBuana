<script>
import { computed, ref } from 'vue'

export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true,
      validator: (value) => {
        return value && value.name && value.image && value.role
      },
    },
  },
  setup(props) {
    const isHovered = ref(false)

    const truncatedName = computed(() => {
      const maxLength = 15
      return props.member.name.length > maxLength
        ? props.member.name.substring(0, maxLength) + '...'
        : props.member.name
    })

    const displayedName = computed(() => {
      return isHovered.value ? props.member.name : truncatedName.value
    })

    const cardClasses = computed(() => [
      'relative h-full overflow-hidden rounded-lg border border-main-4 bg-gray-800 shadow-lg transition-all duration-300',
      isHovered.value
        ? 'hover:scale-105 hover:shadow-2xl dark:bg-neutral-900'
        : 'scale-100 shadow-lg dark:bg-neutral-900',
    ])

    const onMouseEnter = () => {
      isHovered.value = true
    }

    const onMouseLeave = () => {
      isHovered.value = false
    }

    return {
      isHovered,
      displayedName,
      cardClasses,
      onMouseEnter,
      onMouseLeave,
    }
  },
}
</script>

<template>
  <div
    :class="cardClasses"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      class="relative h-full overflow-hidden rounded-lg border border-main-4 bg-gray-800 shadow-lg transition-all duration-300"
    >
      <!-- Badge -->
      <div
        v-if="member.badge"
        class="absolute left-4 top-4 z-10 rounded-md bg-main-4 px-3 py-1 text-xs text-white"
      >
        {{ member.badge }}
      </div>

      <!-- Gambar Anggota -->
      <img
        :src="member.image"
        :alt="member.name"
        class="h-72 w-full object-cover"
        loading="lazy"
        @error="$emit('imageError', member)"
      />

      <!-- Konten Anggota -->
      <div class="p-5">
        <h3
          class="mb-1 text-center text-lg font-semibold text-white dark:text-white"
        >
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
.hover\:scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: scale(var(--tw-scale-x), var(--tw-scale-y));
}

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
