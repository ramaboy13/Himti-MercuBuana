<script>
export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
  computed: {
    displayedName() {
      return this.isHovered ? this.member.name : this.truncatedName
    },
    truncatedName() {
      const maxLength = 15
      return this.member.name.length > maxLength
        ? this.member.name.substring(0, maxLength) + '...'
        : this.member.name
    },
    cardClasses() {
      return [
        'relative h-full overflow-hidden rounded-lg border border-main-4 bg-gray-800 shadow-lg transition-all duration-300',
        this.isHovered
          ? 'hover:scale-105 hover:shadow-2xl dark:bg-neutral-900'
          : 'scale-100 shadow-lg dark:bg-neutral-900',
      ]
    },
  },
}
</script>

<template>
  <div
    :class="cardClasses"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="border-main-4 relative h-full overflow-hidden rounded-lg border bg-gray-800 shadow-lg transition-all duration-300"
    >
      <!-- Badge -->
      <div
        class="bg-main-4 absolute left-4 top-4 z-10 rounded-md px-3 py-1 text-xs text-white"
      >
        {{ member.badge }}
      </div>

      <!-- Gambar Anggota -->
      <img
        :src="member.image"
        :alt="member.name"
        class="h-72 w-full object-cover"
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
}

.hover\:shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
