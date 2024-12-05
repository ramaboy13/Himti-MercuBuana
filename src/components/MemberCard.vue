<script>
export default {
  name: 'MemberCard',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div
    class="flex h-full justify-center overflow-hidden bg-gray-100 p-6 dark:bg-neutral-900"
  >
    <!-- Gambar Anggota -->
    <img
      :src="member.image"
      :alt="member.name"
      class="h-48 w-full object-cover"
    />
    <div class="p-4">
      <!-- Nama Anggota -->
      <h3 class="mb-2 text-center text-xl font-semibold">{{ member.name }}</h3>
      <!-- Deskripsi Anggota -->
      <p class="text-center text-sm text-gray-600">{{ member.role }}</p>
      <p class="text-center text-sm text-gray-600">{{ member.badge }}</p>
      <!-- Tombol / Aksi -->
    </div>
  </div>
</template>

<style scoped>
/* Anda bisa menambahkan styling custom di sini */
</style>
