Enhanced Blog List Component // src/components/BlogCard.vue
<template>
  <router-link
    :to="{ name: 'PostDetail', params: { id: post.id } }"
    class="group block cursor-pointer overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all hover:shadow-xl"
  >
    <div class="aspect-[16/9] overflow-hidden">
      <img
        :src="post.image"
        :alt="post.title"
        class="h-full w-full transform object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <div class="mb-2 flex items-center text-sm text-gray-400">
        <span>{{ post.author }}</span>
        <span class="mx-2">•</span>
        <span>{{ post.date }}</span>
      </div>
      <h2 class="mb-2 text-xl font-semibold text-white group-hover:text-main-4">
        {{ post.title }}
      </h2>
      <p class="mb-4 text-gray-300">{{ truncateText(post.excerpt, 100) }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    truncateText(text, length) {
      return text.length > length ? text.slice(0, length) + '...' : text
    },
  },
}
</script>
