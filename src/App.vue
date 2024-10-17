<script setup>
import FooterSection from './components/FooterSection.vue'
import NavbarSection from './components/NavbarSection.vue'
</script>

<template>
  <NavbarSection />
  <!-- router-view akan menggantikan komponen dinamis sesuai dengan route -->
  <router-view />
  <FooterSection />
</template>

<style scoped></style>
