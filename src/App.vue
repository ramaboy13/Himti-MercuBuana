<script setup>
import NavbarSection from './components/NavbarSection.vue'
</script>

<template>
  <div class="wrapper">
    <NavbarSection />
    <!-- router-view akan menggantikan komponen dinamis sesuai dengan route -->
    <router-view />
    <!-- <FooterSection /> -->
  </div>
</template>

<style scoped>
.wrapper {
  cursor: url('./assets/img/cursor.png'), auto;
}
</style>
