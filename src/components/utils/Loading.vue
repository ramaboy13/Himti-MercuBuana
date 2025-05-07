<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
  words: {
    type: Array,
    required: false,
    default: ['Loading'],
  },
});

const words = props.words || ['Loading'];

// console.log(words);

const randomWord = computed(() => {
  return words[Math.floor(Math.random() * words.length)];
});
</script>

<template lang="">
  <div
    class="flex w-full flex-wrap items-center justify-center gap-2 text-center">
    <!-- <div class="loader"></div> -->
    <Icon icon="svg-spinners:270-ring" class="h-5" />
    {{ words.length > 1 ? randomWord : 'Loading' }}
  </div>
</template>

<style lang=""></style>
