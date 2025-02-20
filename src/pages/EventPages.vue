<template>
  <div class="bg-gradient-to-bpx-4 min-h-screen px-4 py-8 pt-24">
    <!-- Search and Filter Section -->
    <div class="container mx-auto">
      <div class="mb-8 rounded-xl bg-white/10 p-6 backdrop-blur-lg">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div class="relative md:col-span-5">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search events..."
              class="w-full rounded-lg border border-purple-300/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
            />
            <span class="absolute right-3 top-3 text-gray-400">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="md:col-span-3">
            <select
              v-model="selectedCategory"
              class="w-full rounded-lg border border-purple-300/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
            >
              <option value="" class="bg-purple-950 text-white">
                All Categories
              </option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.name"
                class="bg-purple-950 text-white"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="md:col-span-4">
            <select
              v-model="dateFilter"
              class="w-full rounded-lg border border-purple-300/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
            >
              <option value="" class="bg-purple-950 text-white">
                All Time
              </option>
              <option value="today" class="bg-purple-950 text-white">
                Today
              </option>
              <option value="week" class="bg-purple-950 text-white">
                This Week
              </option>
              <option value="month" class="bg-purple-950 text-white">
                This Month
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Recent Events Section -->
      <div class="mb-12">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-white">Recent Events</h2>
          <router-link
            :to="{ name: 'Event', query: { type: 'recent' } }"
            class="text-purple-300 transition-colors hover:text-purple-200"
          >
            ALL RECENT EVENTS
          </router-link>
        </div>

        <div
          v-if="filteredRecentEvents.length > 0"
          class="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          <!-- Featured Event -->
          <div class="lg:col-span-7">
            <router-link
              :to="{
                name: 'EventDetail',
                params: { slug: filteredRecentEvents[0].slug },
              }"
              class="block"
            >
              <div
                class="group relative h-[300px] overflow-hidden rounded-xl sm:h-[400px]"
              >
                <img
                  :src="filteredRecentEvents[0].image"
                  :alt="filteredRecentEvents[0].title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/50 to-transparent"
                >
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <span
                      class="mb-3 inline-block rounded-lg bg-purple-500 px-3 py-1 text-sm font-medium text-white"
                    >
                      {{ filteredRecentEvents[0].category }}
                    </span>
                    <h3 class="mb-2 text-xl font-bold text-white sm:text-2xl">
                      {{ filteredRecentEvents[0].title }}
                    </h3>
                    <div class="flex items-center text-sm text-purple-200">
                      <span>By {{ filteredRecentEvents[0].author }}</span>
                      <span class="mx-2">•</span>
                      <span>{{
                        formatDate(filteredRecentEvents[0].date)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Recent Events List -->
          <div class="lg:col-span-5">
            <div class="space-y-4">
              <router-link
                v-for="event in filteredRecentEvents.slice(1)"
                :key="event.id"
                :to="{ name: 'EventDetail', params: { slug: event.slug } }"
                class="group block overflow-hidden rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div class="flex gap-4">
                  <img
                    :src="event.image"
                    :alt="event.title"
                    class="h-24 w-24 rounded-lg object-cover"
                  />
                  <div>
                    <span
                      class="mb-2 inline-block rounded-lg bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-300"
                    >
                      {{ event.category }}
                    </span>
                    <h3
                      class="font-semibold text-white transition-colors group-hover:text-purple-300"
                    >
                      {{ event.title }}
                    </h3>
                    <div class="mt-1 text-sm text-purple-200">
                      <span>By {{ event.author }}</span>
                      <span class="mx-1">•</span>
                      <span>{{ formatNumber(event.views) }} Views</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div
        v-if="!hasResults"
        class="flex min-h-[300px] items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm"
      >
        <div class="text-center">
          <h3 class="text-xl font-semibold text-white">No events found</h3>
          <p class="mt-2 text-purple-200">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import eventDataJson from '../assets/data/DataEvent.json' // Import JSON langsung

export default {
  name: 'EventPages',
  setup() {
    const router = useRouter()
    const searchQuery = ref('')
    const selectedCategory = ref('')
    const dateFilter = ref('')
    const eventData = ref({
      recentEvents: [],
      categories: [],
    })

    // Load data on component mount
    onMounted(() => {
      try {
        // Gunakan data JSON yang diimpor
        eventData.value = eventDataJson
      } catch (error) {
        console.error('Error loading event data:', error)
      }
    })

    // Filter functions
    const filterBySearch = (event) => {
      if (!searchQuery.value) return true
      const query = searchQuery.value.toLowerCase()
      return (
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
      )
    }

    const filterByCategory = (event) => {
      return (
        !selectedCategory.value || event.category === selectedCategory.value
      )
    }

    const filterByDate = (event) => {
      if (!dateFilter.value) return true
      const eventDate = new Date(event.date)
      const today = new Date()

      switch (dateFilter.value) {
        case 'today':
          return eventDate.toDateString() === today.toDateString()
        case 'week':
          const weekAgo = new Date(today)
          weekAgo.setDate(today.getDate() - 7)
          return eventDate >= weekAgo
        case 'month':
          const monthAgo = new Date(today)
          monthAgo.setMonth(today.getMonth() - 1)
          return eventDate >= monthAgo
        default:
          return true
      }
    }

    // Computed properties
    const filteredRecentEvents = computed(() => {
      return (
        eventData.value.recentEvents?.filter(
          (event) =>
            filterBySearch(event) &&
            filterByCategory(event) &&
            filterByDate(event),
        ) || []
      )
    })

    const hasResults = computed(() => filteredRecentEvents.value.length > 0)
    const categories = computed(() => eventData.value.categories || [])

    // Utility functions
    const formatDate = (date) =>
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    const formatNumber = (number) =>
      new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(number)

    return {
      router,
      searchQuery,
      selectedCategory,
      dateFilter,
      eventData,
      filteredRecentEvents,
      hasResults,
      categories,
      formatDate,
      formatNumber,
    }
  },
}
</script>
