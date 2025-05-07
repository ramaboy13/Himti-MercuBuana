<script setup>
// THIS FILE IS UNDER DEVELOPMENT

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Path gambar fallback
const fallbackImage = new URL(
  '../../assets/img/fallback-image.png',
  import.meta.url,
).href;

// sumber gambar yang akan ditampilkan
// const imageSrc = ref(new URL(props.imagePath, import.meta.url).href);

// Fungsi untuk menangani kesalahan pemuatan gambar
const handleError = () => {
  imageSrc.value = fallbackImage;
};
</script>

<template>
  <router-link
    :to="{ name: 'Blog Detail', params: { id: props.data.id } }"
    class="group flex flex-col focus:outline-hidden">
    <!-- Card -->
    <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
      <img
        class="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
        src="https://i.pinimg.com/736x/d9/99/9b/d9999b0e7ae0d2f73bacb633a1320be9.jpg"
        :alt="`image-${props.data.id}`" />
    </div>

    <div class="fade mt-7">
      <h3 class="text-xl font-semibold text-white group-hover:text-gray-400">
        {{ props.data.title }}
      </h3>
      <p class="hy mt-3 line-clamp-3 text-white">
        {{ props.data.body }}
      </p>
      <p
        class="mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 transition-all group-hover:underline group-focus:underline">
        Read more
        <Icon icon="fe:arrow-right" />
      </p>
    </div>
    <!-- End Card -->
  </router-link>
</template>
