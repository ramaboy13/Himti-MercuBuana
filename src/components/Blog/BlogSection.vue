<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { axiosInstance } from '../../lib/axios/http';
import BlogCard from './BlogCard.vue';
import Loading from '../utils/Loading.vue';
import FooterSection from '../FooterSection.vue';

// const searchInput = ref('');
const isLoading = ref(false);
let responseData = reactive([]);
let length = ref(0);
const sortBy = ref('latest');

const sortedData = computed(() => {
  // Buat salinan array untuk menghindari mutasi data asli
  return [...responseData].sort((a, b) => {
    return sortBy.value === 'latest'
      ? b.id - a.id // Descending: ID besar ke kecil
      : a.id - b.id; // Ascending: ID kecil ke besar
  });
  // const data = [...responseData.value];
  // switch (sortBy.value) {
  //   case 'newest':
  //     return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  //   case 'oldest':
  //     return data.sort((a, b) => new Date(a.date) - new Date(b.date));
  //   default:
  //     return data;
  // }
});

const fetchData = async () => {
  try {
    isLoading.value = true;
    const { data } = await axiosInstance.get(`/posts`, {
      params: { postId: 1 },
    });
    length.value = data.posts.length;
    responseData = data.posts;
    console.log(responseData);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div
    class="mx-auto min-h-dvh max-w-[85rem] px-4 py-25 text-white sm:px-6 lg:px-8 lg:py-20">
    <!-- Title -->
    <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Blogs</h2>
      <p class="mt-1 text-slate-400">
        Stay in the know with insights from industry experts.
      </p>
    </div>
    <!-- End Title -->

    <!-- Filter  -->
    <div class="my-4 border-b border-slate-400 py-2">
      <div class="flex items-center justify-end">
        <div class="flex items-center gap-2">
          <label for="sort" class="shrink-0 text-sm lg:text-base">
            Sort by:
          </label>
          <select
            id="sort"
            v-model="sortBy"
            class="block w-full cursor-pointer rounded-lg border-gray-200 bg-gray-800 px-4 py-3 pe-8 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50">
            <option selected value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
    <!-- End Filter -->
    <!-- Grid -->
    <Loading
      v-if="isLoading"
      :words="[
        'Mengambil artikel dengan kecepatan cahaya...',
        'Tunggu sebentar, kami sedang memastikan tidak ada typo...',
        'Sedang mengambil artikel...',
        'Loading',
      ]" />

    <div v-else-if="length === 0" class="text-center">
      <h2 class="text-xl font-bold md:text-4xl md:leading-tight">
        No Data Found
      </h2>
      <p class="mt-1 text-gray-600">No data found for the given Post ID.</p>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <BlogCard v-for="item in sortedData" :key="item.id" :data="item" />
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>

  <FooterSection />
</template>
<style lang="css"></style>
