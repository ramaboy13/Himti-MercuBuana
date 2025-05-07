<!-- ModalComponent.vue -->
<script setup>
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
      class="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="absolute inset-0" @click="closeModal"></div>
      <!-- Konten modal -->
      <div
        class="relative w-10/12 max-w-lg rounded-lg bg-primary p-6 text-center text-white shadow-lg dark:bg-gray-800">
        <!-- Tombol tutup -->
        <button
          @click="closeModal"
          class="absolute right-5 top-2 text-3xl text-accent hover:text-main-2 dark:hover:text-gray-300">
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
