<script setup>

</script>

<template>
  <div class="m-2 md:m-10 flex flex-col gap-6 rounded-md bg-stone-500 py-10 px-10">
    <span class="text-4xl font-bold pb-6">{{ $t('header.trips') }}</span>

    <RouterView/>
  </div>
</template>

<style scoped>

</style>