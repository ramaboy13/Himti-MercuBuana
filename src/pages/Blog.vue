<script>
import posts from '@/assets/data/post.json';
import BlogCard from '@/components/Blog/BlogCard.vue';

export default {
  name: 'BlogList',
  components: {
    BlogCard,
  },
  data() {
    return {
      posts: posts.posts,
      searchQuery: '',
      selectedTags: [],
      currentPage: 1,
      postsPerPage: 6,
    };
  },
  computed: {
    allTags() {
      const tags = new Set();
      this.posts.forEach((post) => {
        post.tags.forEach((tag) => tags.add(tag));
      });
      return Array.from(tags);
    },
    filteredPosts() {
      return this.posts.filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesTags =
          this.selectedTags.length === 0 ||
          this.selectedTags.every((tag) => post.tags.includes(tag));

        return matchesSearch && matchesTags;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.filteredPosts.slice(start, end);
    },
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
      this.currentPage = 1; // Reset to first page when filtering
    },
  },
  watch: {
    searchQuery() {
      this.currentPage = 1; // Reset to first page when searching
    },
  },
};
</script>

<template>
  <div class="container mx-auto px-4 py-8 pt-32">
    <h1 class="mb-1 text-3xl font-bold text-white">All blog posts</h1>
    <div class="bg-main-4 mt-2 mb-10 h-1 w-64"></div>

    <!-- Search and Filter Section -->
    <div
      class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <!-- Search -->
      <div class="relative w-full lg:w-1/3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search posts..."
          class="focus:ring-main-4 w-full rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:outline-hidden" />
        <span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      <!-- Tag Filter -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="[
            'rounded-full px-4 py-2 text-sm transition-colors',
            selectedTags.includes(tag)
              ? 'bg-main-4 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
          ]">
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Blog Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
    </div>

    <!-- Pagination -->
    <div class="mt-12 flex justify-center space-x-2">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="rounded-lg bg-gray-800 px-4 py-2 text-white disabled:opacity-50">
        Previous
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'rounded-lg px-4 py-2',
          currentPage === page
            ? 'bg-main-4 text-white'
            : 'bg-gray-800 text-white hover:bg-gray-700',
        ]">
        {{ page }}
      </button>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="rounded-lg bg-gray-800 px-4 py-2 text-white disabled:opacity-50">
        Next
      </button>
    </div>

    <!-- No Results Message -->
    <div
      v-if="filteredPosts.length === 0"
      class="mt-8 text-center text-gray-400">
      No posts found matching your criteria.
    </div>
  </div>
</template>

<style>
.aspect {
  aspect-ratio: 16/9;
}
</style>
