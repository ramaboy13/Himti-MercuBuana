<template>
  <section class="container mx-auto py-10">
    <h2 class="mt-12 text-center text-3xl font-bold text-blue-600">Blog</h2>
    <div class="mt-6">
      <article
        v-for="post in posts"
        :key="post.id"
        class="mb-6 rounded-lg bg-white p-6 shadow-md"
      >
        <h3 class="text-xl font-semibold text-blue-600">{{ post.title }}</h3>
        <p class="mt-2 text-gray-600">{{ post.excerpt }}</p>
        <button
          class="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Read More
        </button>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post 1',
          excerpt: 'This is a short description of post 1.',
        },
        {
          id: 2,
          title: 'Post 2',
          excerpt: 'This is a short description of post 2.',
        },
        {
          id: 3,
          title: 'Post 3',
          excerpt: 'This is a short description of post 3.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
