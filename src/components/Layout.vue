<script setup lang="ts">
import Footer from './Footer.vue';
</script>

<template>
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
main {
  display: grid;
  min-height: 100vh;
  place-items: center;
  place-content: center;
  gap: var(--size-4);
}
</style>
