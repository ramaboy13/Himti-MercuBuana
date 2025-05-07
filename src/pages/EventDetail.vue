<template>
  <div class="from-main-1 min-h-screen bg-linear-to-b to-purple-950">
    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-4 py-8 pt-28 text-center">
      <p class="text-purple-200">Loading event details...</p>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="container mx-auto px-4 py-8 pt-28 text-center">
      <p class="text-red-400">{{ error }}</p>
      <router-link
        to="/event"
        class="mt-4 text-purple-300 hover:text-purple-200">
        Return to Events
      </router-link>
    </div>

    <!-- Event Content -->
    <div v-else-if="event" class="container mx-auto px-4 py-8 pt-28">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <!-- Main Content -->
        <div class="lg:col-span-8">
          <!-- Breadcrumb -->
          <div class="mb-4 flex items-center text-sm text-purple-300">
            <router-link to="/" class="hover:text-purple-200">Home</router-link>
            <span class="mx-2">/</span>
            <router-link to="/event" class="hover:text-purple-200">
              Events
            </router-link>
            <span class="mx-2">/</span>
            <span>{{ event.category }}</span>
          </div>

          <!-- Event Header -->
          <div class="mb-8">
            <span
              class="mb-4 inline-block rounded-lg bg-purple-500 px-3 py-1 text-sm font-medium text-white">
              {{ event.category }}
            </span>
            <h1 class="mb-4 text-3xl font-bold text-white">
              {{ event.title }}
            </h1>
            <div class="flex flex-wrap items-center gap-6 text-purple-200">
              <div class="flex items-center">
                <img
                  :src="event.authorImage || '/placeholder-author.jpg'"
                  :alt="event.author"
                  class="mr-3 h-10 w-10 rounded-full border border-purple-400/20" />
                <span>By {{ event.author }}</span>
              </div>
              <div class="flex items-center">
                <i class="far fa-calendar mr-2"></i>
                <span>{{ formatDate(event.date) }}</span>
              </div>
              <div class="flex items-center">
                <i class="far fa-eye mr-2"></i>
                <span>{{ formatNumber(event.views) }} Views</span>
              </div>
            </div>
          </div>

          <!-- Featured Image -->
          <div class="mb-8 overflow-hidden rounded-xl">
            <img
              :src="event.image || '/placeholder-event.jpg'"
              :alt="event.title"
              class="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>

          <!-- Event Details -->
          <div class="prose prose-invert mb-8 max-w-none">
            <h2 class="text-2xl font-bold text-white">Event Details</h2>
            <div class="mb-6 rounded-xl bg-white/5 p-6 backdrop-blur-xs">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 class="font-semibold text-purple-300">Date & Time</h3>
                  <p class="text-white">
                    {{ formatDate(event.date) }}, {{ event.time }}
                  </p>
                </div>
                <div>
                  <h3 class="font-semibold text-purple-300">Location</h3>
                  <p class="text-white">{{ event.location }}</p>
                </div>
              </div>
            </div>
            <div
              class="mb-8 text-justify text-purple-200"
              v-html="event.content"></div>
          </div>

          <!-- Event Highlights -->
          <div v-if="event.highlights?.length" class="mb-8">
            <h2 class="mb-4 text-xl font-bold text-white">Event Highlights</h2>
            <ul class="space-y-2 rounded-xl bg-white/5 p-6 backdrop-blur-xs">
              <li
                v-for="highlight in event.highlights"
                :key="highlight"
                class="flex items-center text-purple-200">
                <span class="mr-2 text-purple-400">•</span>
                {{ highlight }}
              </li>
            </ul>
          </div>

          <!-- Event Gallery -->
          <div v-if="event.gallery?.length" class="mb-8">
            <h2 class="mb-4 text-xl font-bold text-white">Event Gallery</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div
                v-for="(image, index) in event.gallery"
                :key="index"
                class="group relative overflow-hidden rounded-xl">
                <img
                  :src="image || '/placeholder-gallery.jpg'"
                  :alt="`Gallery image ${index + 1}`"
                  class="h-48 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110" />
                <div
                  class="absolute inset-0 bg-purple-950/0 transition-colors group-hover:bg-purple-950/20"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-4">
          <!-- Search -->
          <div class="mb-8 rounded-xl bg-white/5 p-6 backdrop-blur-xs">
            <h3 class="mb-4 text-lg font-bold text-white">Search Events</h3>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search events..."
                class="w-full rounded-lg border border-purple-300/20 bg-white/5 px-4 py-2 text-white placeholder-purple-300 backdrop-blur-xs transition-all focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-hidden" />
              <button class="absolute top-2.5 right-3">
                <i class="fas fa-search text-purple-300"></i>
              </button>
            </div>
          </div>

          <!-- Categories -->
          <div
            v-if="categories.length"
            class="mb-8 rounded-xl bg-white/5 p-6 backdrop-blur-xs">
            <h3 class="mb-4 text-lg font-bold text-white">Categories</h3>
            <ul class="space-y-3">
              <li v-for="category in categories" :key="category.id">
                <router-link
                  :to="{ name: 'Event', query: { category: category.name } }"
                  class="flex items-center justify-between text-purple-200 transition-colors hover:text-purple-300">
                  <span>{{ category.name }}</span>
                  <span class="rounded-full bg-purple-500/10 px-2 py-1 text-sm">
                    {{ category.count }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Tags -->
          <div
            v-if="tags.length"
            class="mb-8 rounded-xl bg-white/5 p-6 backdrop-blur-xs">
            <h3 class="mb-4 text-lg font-bold text-white">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <router-link
                v-for="tag in tags"
                :key="tag.id"
                :to="{ name: 'Event', query: { tag: tag.name } }"
                class="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-200 transition-colors hover:bg-purple-500 hover:text-white">
                {{ tag.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import eventData from '@/assets/data/DataEvent.json'

export default {
  name: 'EventDetail',

  setup() {
    const route = useRoute()
    const router = useRouter()
    const event = ref(null)
    const categories = ref([])
    const tags = ref([])
    const relatedEvents = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const searchQuery = ref('')

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    const formatNumber = (number) => {
      return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(number)
    }

    const loadEventData = async () => {
      try {
        isLoading.value = true
        error.value = null

        // Find the event by slug
        const foundEvent = eventData.recentEvents.find(
          (e) => e.slug === route.params.slug,
        )

        if (!foundEvent) {
          error.value = 'Event not found'
          return
        }

        // Set the event data
        event.value = foundEvent
        categories.value = eventData.categories || []
        tags.value = eventData.tags || []
        // Get related events (same category, excluding current event)
        relatedEvents.value = eventData.recentEvents
          .filter(
            (e) => e.category === foundEvent.category && e.id !== foundEvent.id,
          )
          .slice(0, 3)
      } catch (err) {
        console.error('Error loading event data:', err)
        error.value = 'Failed to load event details'
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      loadEventData()
    })

    return {
      event,
      categories,
      tags,
      relatedEvents,
      isLoading,
      error,
      searchQuery,
      formatDate,
      formatNumber,
    }
  },
}
</script>
