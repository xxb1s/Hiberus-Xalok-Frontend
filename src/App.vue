<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-zinc-200">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
