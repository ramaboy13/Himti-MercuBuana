<!-- ModalComponent.vue -->
<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['close'])

  const closeModal = () => {
    emit('close')
  }
</script>

<template>
  <transition
    enter-active-class="out-in duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <!-- Latar belakang gelap -->
    <div
      v-if="isVisible"
      class="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-xs">
      <div class="absolute inset-0" @click="closeModal"></div>
      <!-- Konten modal -->
      <div
        class="bg-primary relative w-10/12 max-w-lg rounded-lg p-6 text-center text-white shadow-lg dark:bg-gray-800">
        <!-- Tombol tutup -->
        <button
          @click="closeModal"
          class="text-accent hover:text-main-2 absolute top-2 right-5 cursor-pointer text-3xl dark:hover:text-gray-300">
          &times;
        </button>
        <!-- Slot untuk konten modal -->
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
