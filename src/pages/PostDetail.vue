<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import posts from '../assets/data/post.json'

export default {
  name: 'PostDetail',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = ref(null)
    const searchQuery = ref('')

    // Get all unique tags from posts
    const allTags = computed(() => {
      const tags = new Set()
      posts.posts.forEach((post) => {
        post.tags.forEach((tag) => tags.add(tag))
      })
      return Array.from(tags)
    })

    // Get top 5 posts by ID
    const topPosts = computed(() => {
      return posts.posts.slice(0, 5).map((post) => ({
        id: post.id,
        title: post.title,
      }))
    })

    // Get previous and next posts
    const previousPost = computed(() => {
      if (!post.value) return null
      const currentIndex = posts.posts.findIndex((p) => p.id === post.value.id)
      return currentIndex > 0 ? posts.posts[currentIndex - 1] : null
    })

    const nextPost = computed(() => {
      if (!post.value) return null
      const currentIndex = posts.posts.findIndex((p) => p.id === post.value.id)
      return currentIndex < posts.posts.length - 1
        ? posts.posts[currentIndex + 1]
        : null
    })

    // Load post data when route changes
    const loadPost = () => {
      const postId = parseInt(route.params.id)
      post.value = posts.posts.find((p) => p.id === postId)
      if (!post.value) {
        router.push({ name: 'NotFound' })
      }
    }

    // Handle search
    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({
          name: 'Blog',
          query: { search: searchQuery.value },
        })
      }
    }

    onMounted(loadPost)
    watch(() => route.params.id, loadPost)

    return {
      post,
      searchQuery,
      allTags,
      topPosts,
      previousPost,
      nextPost,
      handleSearch,
    }
  },
}
</script>

<!-- src/views/PostDetail.vue -->
<template>
  <div class="min-h-screen bg-main-1 pt-32">
    <!-- Navigation Breadcrumb -->
    <div class="container mx-auto px-4 py-4 text-sm text-gray-300">
      <div class="flex items-center gap-2">
        <router-link to="/" class="hover:text-main-4">Home</router-link> /
        <router-link to="/blog" class="hover:text-main-4">Blog</router-link> /
        <span class="text-main-4">{{ post?.title }}</span>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Featured Image -->
          <div class="mb-6 overflow-hidden rounded-lg">
            <img
              :src="post?.image"
              :alt="post?.title"
              class="h-full w-full object-cover"
            />
          </div>

          <!-- Post Header -->
          <h1 class="mb-4 text-3xl font-bold text-white">{{ post?.title }}</h1>
          <div
            class="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400"
          >
            <span>By {{ post?.author }}</span>
            <span>{{ post?.date }}</span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post?.tags"
                :key="tag"
                class="bg-main-4 text-main-4 rounded-full bg-opacity-20 px-3 py-1"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Post Content -->
          <div class="prose max-w-none text-gray-300">
            {{ post?.content }}
          </div>

          <!-- Navigation Buttons -->
          <div
            class="mt-8 flex justify-between border-b border-t border-gray-700 py-4"
          >
            <router-link
              v-if="previousPost"
              :to="{ name: 'PostDetail', params: { id: previousPost.id } }"
              class="hover:text-main-4 flex items-center gap-2 text-gray-400"
            >
              ← {{ previousPost.title }}
            </router-link>
            <div v-else></div>

            <router-link
              v-if="nextPost"
              :to="{ name: 'PostDetail', params: { id: nextPost.id } }"
              class="hover:text-main-4 flex items-center gap-2 text-gray-400"
            >
              {{ nextPost.title }} →
            </router-link>
          </div>

          <!-- Comments Section -->
          <div class="mt-12">
            <h3 class="mb-6 text-xl font-semibold text-white">
              Leave a comment
            </h3>
            <form class="space-y-4">
              <textarea
                placeholder="Your comment"
                rows="4"
                class="focus:border-main-4 w-full rounded bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
              ></textarea>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <input
                  type="text"
                  placeholder="Your name"
                  class="focus:border-main-4 rounded bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  class="focus:border-main-4 rounded bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="url"
                  placeholder="Your website"
                  class="focus:border-main-4 rounded bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                class="bg-main-4 rounded px-6 py-2 text-white hover:bg-opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Search Widget -->
          <div class="rounded-lg bg-gray-800 p-6">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search..."
                class="focus:border-main-4 w-full rounded bg-gray-700 p-3 pr-10 text-white placeholder-gray-400 focus:outline-none"
                @keyup.enter="handleSearch"
              />
              <button
                @click="handleSearch"
                class="hover:text-main-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                🔍
              </button>
            </div>
          </div>

          <!-- Tags Widget -->
          <div class="rounded-lg bg-gray-800 p-6">
            <h3 class="mb-4 text-lg font-semibold text-white">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <router-link
                v-for="tag in allTags"
                :key="tag"
                :to="{ name: 'Blog', query: { tag } }"
                class="hover:bg-main-4 rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300 hover:text-white"
              >
                {{ tag }}
              </router-link>
            </div>
          </div>

          <!-- Top Posts Widget -->
          <div class="rounded-lg bg-gray-800 p-6">
            <h3 class="mb-4 text-lg font-semibold text-white">Top Posts</h3>
            <ol class="list-decimal space-y-3 pl-4">
              <li v-for="post in topPosts" :key="post.id" class="text-gray-300">
                <router-link
                  :to="{ name: 'PostDetail', params: { id: post.id } }"
                  class="hover:text-main-4"
                >
                  {{ post.title }}
                </router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prose {
  color: #6f7071;
}

.prose p {
  margin-bottom: 1rem;
}

.prose blockquote {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-left-width: 4px;
  border-color: #4a5568;
  padding-left: 1rem;
  font-style: italic;
  color: #a0aec0;
}
</style>
