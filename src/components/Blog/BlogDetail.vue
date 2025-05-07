<script setup>
import { axiosInstance } from '@/lib/axios/http';
import { ref, onMounted, reactive, computed } from 'vue';
import Loading from '../utils/Loading.vue';
import FooterSection from '../FooterSection.vue';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});
const isLoading = ref(false);
let article = reactive({});

const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await axiosInstance.get(`/posts/${props.id}`);
    article = response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <!-- Blog Article -->
  <div
    class="mx-auto min-h-screen max-w-3xl px-4 pt-20 pb-12 text-white sm:px-6 lg:px-8 lg:pt-25">
    <Loading v-if="isLoading" />
    <div v-else class="max-w-2xl">
      <!-- Avatar Media -->
      <div class="mb-6 flex items-center justify-between">
        <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
          <div class="shrink-0">
            <img
              loading="lazy"
              class="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar" />
          </div>

          <div class="grow">
            <div class="flex items-center justify-between gap-x-2">
              <div>
                <div
                  class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]">
                  <div class="hs-tooltip-toggle block text-start sm:mb-1">
                    <span class="font-semibold text-white">Leyla Ludic</span>
                  </div>
                </div>

                <ul class="text-xs text-gray-500">
                  <li
                    class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden">
                    Jan 18
                  </li>
                  <li
                    class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden">
                    8 min read
                  </li>
                </ul>
              </div>

              <!-- Button Group -->
              <div>
                <button
                  type="button"
                  @click=""
                  class="inline-flex cursor-pointer items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50">
                  <Icon icon="simple-icons:x" />
                  Share
                </button>
              </div>
              <!-- End Button Group -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Avatar Media -->

      <!-- Content -->
      <div class="space-y-5 text-white md:space-y-8">
        <div class="space-y-3">
          <h2 class="text-2xl font-bold md:text-3xl">
            {{ article.title }}
          </h2>

          <span></span>

          <p class="text-white-2 text-lg">
            {{ article.body }}
          </p>
        </div>

        <p class="text-white-2 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          perspiciatis placeat esse soluta saepe. Harum mollitia quo ad quidem
          accusamus. Debitis?
        </p>

        <figure>
          <img
            class="w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image" />
          <figcaption class="mt-3 text-center text-sm text-gray-500 italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </figcaption>
        </figure>

        <div>
          <a
            v-for="tag in article.tags"
            class="m-1 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-hidden"
            href="#">
            {{ tag }}
          </a>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->

  <!-- Sticky Share Group -->
  <div class="sticky inset-x-0 bottom-6 text-center">
    <div class="inline-block rounded-full bg-white px-4 py-3 shadow-md">
      <div class="flex items-center gap-x-1.5">
        <!-- Button -->
        <div class="hs-tooltip inline-block">
          <button
            type="button"
            class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden">
            <Icon icon="mdi:hearts" />
            {{ article.reactions?.likes }}
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 inline-block rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-2xs transition-opacity"
              role="tooltip">
              Like
            </span>
          </button>
        </div>
        <!-- Button -->

        <div class="mx-3 block h-3 border-e border-gray-300"></div>

        <!-- Button -->
        <div class="hs-tooltip inline-block">
          <button
            type="button"
            class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden">
            <Icon icon="fe:eye" />
            {{ article.views }}
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 inline-block rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-2xs transition-opacity"
              role="tooltip">
              Comment
            </span>
          </button>
        </div>
        <!-- Button -->

        <div class="mx-3 block h-3 border-e border-gray-300"></div>

        <!-- Button -->
        <div class="hs-dropdown relative inline-flex">
          <button
            id="hs-blog-article-share-dropdown"
            type="button"
            class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-hidden"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown">
            <Icon icon="lucide:upload" />
            Share
          </button>
          <div
            class="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 mb-1 hidden w-56 rounded-xl bg-gray-900 p-2 opacity-0 shadow-md transition-[opacity,margin]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-blog-article-share-dropdown">
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:bg-white/10 focus:outline-hidden"
              href="#">
              <Icon icon="line-md:link" />
              Copy link
            </a>
            <div class="my-2 border-t border-gray-600"></div>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:bg-white/10 focus:outline-hidden"
              href="#">
              <Icon icon="simple-icons:x" />
              Share on X
            </a>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:bg-white/10 focus:outline-hidden"
              href="#">
              <Icon icon="simple-icons:facebook" />
              Share on Facebook
            </a>
            <a
              class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 focus:bg-white/10 focus:outline-hidden"
              href="#">
              <Icon icon="simple-icons:linkedin" />
              Share on LinkedIn
            </a>
          </div>
        </div>
        <!-- Button -->
      </div>
    </div>
  </div>
  <!-- End Sticky Share Group -->

  <FooterSection />
</template>

<style lang=""></style>
