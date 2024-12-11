<script>
export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedName() {
      const maxLength = 15
      return this.member.name.length > maxLength
        ? this.member.name.substring(0, maxLength) + '...'
        : this.member.name
    },
  },
}
</script>

<template>
  <div
    class="relative h-full overflow-hidden rounded-lg bg-main-2 shadow-lg dark:bg-neutral-900"
  >
    <!-- Badge -->
    <div
      class="absolute bottom-24 left-2 rounded-md bg-purple-700 px-2 py-1 text-xs text-white"
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
    <div class="p-4">
      <h3
        class="mb-0 text-center text-lg font-semibold text-white dark:text-white"
      >
        {{ truncatedName }}
      </h3>
      <p class="text-center text-sm text-gray-400 dark:text-gray-300">
        {{ member.role }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan padding jika perlu */
</style>
