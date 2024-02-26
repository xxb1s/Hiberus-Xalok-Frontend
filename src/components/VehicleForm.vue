<script setup>
import { ArrowLongLeftIcon, PlusIcon } from '@heroicons/vue/16/solid/index.js'
</script>

<template>
  <div class="md:mr-auto">
    <RouterLink :to="{name: 'list vehicles'}" class="flex items-center rounded-lg p-2 focus:outline-none focus-visible:ring bg-stone-300 text-zinc-800 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200">
      <ArrowLongLeftIcon class="h-8 justify-center sm:h-12 sm:w-12"/> {{ $t('general.return') }}
    </RouterLink>
  </div>

  <form action="" class="bg-stone-400 rounded-lg p-3 space-y-12">
    <h2 class="text-2xl">
      {{ $t('vehicles.create') }}
    </h2>

    <div class="mt-10 grid md:grid-cols-6 gap-x-6 gap-y-8 grid-cols-2 grid-rows-2 grid-flow-col items-center">

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="brand" class="block text-sm font-medium leading-6">{{ $t('vehicles.brand') }}</label>
        <div class="mt-2">
          <input type="text" name="brand" id="brand" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.brandPlaceholder')"/>
        </div>
      </div>

      <div class="col-start-1 col-end-7 md:col-start-3 md:col-end-5">
        <label for="model" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.model') }}</label>
        <div class="mt-2">
          <input type="text" name="model" id="model" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.modelPlaceholder')" />
        </div>
      </div>

      <div class="md:col-start-5 md:row-span-2 col-start-1 col-end-7 items-center text-center order-last">
        <span class="md:w-fit w-auto bg-stone-300 text-zinc-800 p-2 rounded hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 flex items-center m-auto">
          {{ $t('vehicles.create') }} <PlusIcon class="h-8 justify-center sm:h-12"/>
        </span>
      </div>

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="plate" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.plate') }}</label>
        <div class="mt-2">
          <input type="text" name="plate" id="plate" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.platePlaceholder')"/>
        </div>
      </div>

      <div class="col-start-1 col-end-7 md:col-start-3 md:col-end-5">
        <label for="licence" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.licence') }}</label>
        <div class="mt-2">
          <input type="text" name="licence" id="licence" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.licencePlaceholder')"/>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>