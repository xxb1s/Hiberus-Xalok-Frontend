<script setup>
import { PlusIcon } from '@heroicons/vue/16/solid/index.js'
</script>

<template>
  <RouterLink class="bg-stone-300 text-zinc-800 p-2 rounded hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 flex items-center md:mr-auto" :to="{ name: 'create trips'}">
    {{ $t('trips.create') }} <PlusIcon class="h-8 justify-center sm:h-12 sm:w-12"/>
  </RouterLink>

  <div class="relative overflow-x-auto">
    <table class="border border-separate border-stone-800 w-full rounded-lg p-1">
      <thead>
      <tr>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">#</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('trips.date') }}</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('trips.vehiclePlate') }}</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('trips.driverName') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>