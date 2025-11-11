<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="glass-card flex h-full flex-col rounded-lg">
    <div class="h-48 w-full">
      <img
        :src="item.image"
        :alt="item.title"
        class="h-full w-full rounded-t-lg object-cover"
        loading="lazy"
      />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <span class="text-xs text-gray-400">{{ item.date }}</span>
      <h4 class="mt-2 text-xl font-semibold">{{ item.title }}</h4>
      <p class="mt-2 flex-1 text-sm text-gray-300">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>