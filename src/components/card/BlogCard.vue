<script setup>
  // THIS FILE IS UNDER DEVELOPMENT
  import { ref } from 'vue'

  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  })

  // Path gambar fallback
  const fallbackImage = new URL(
    '../../assets/img/fallback-image.png',
    import.meta.url
  ).href

  // sumber gambar yang akan ditampilkan
  const imageSrc = ref(new URL(props.imagePath, import.meta.url).href)

  // Fungsi untuk menangani kesalahan pemuatan gambar
  const handleError = () => {
    imageSrc.value = fallbackImage
  }
</script>

<template>
  <router-link
    :to="{ name: 'PostDetail', params: { id: props.post.id } }"
    class="group block cursor-pointer overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all hover:shadow-xl">
    <div class="aspect-16/9 overflow-hidden">
      <img
        :src="imageSrc"
        :alt="props.post.title"
        @error="handleError"
        class="scale-105 transform object-cover object-center transition-transform duration-300 group-hover:scale-100" />
    </div>
    <div class="p-6">
      <div class="mb-2 flex items-center text-sm text-gray-400">
        <span>{{ props.post.author }}</span>
        <span class="mx-2">•</span>
        <span>{{ props.post.date }}</span>
      </div>
      <h2 class="group-hover:text-main-4 mb-2 text-xl font-semibold text-white">
        {{ props.post.title }}
      </h2>
      <p class="mb-4 text-gray-300">{{ truncatedExcerpt }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in props.post.tags"
          :key="tag"
          class="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>
