<script setup>
import { ArrowLongLeftIcon, PlusIcon } from '@heroicons/vue/16/solid/index.js'
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { ref } from 'vue'
import VehicleList from '@/components/VehicleList.vue'
import DriverList from '@/components/DriverList.vue'
import dayjs from 'dayjs'

const dateTrip = ref([]);
const invalidDate = (date) => {
  return date < dayjs().startOf('day');
}

const validatePicker = (date) => {
  console.log(date)
  console.log(invalidDate(date))
}
</script>

<template>
  <div class="md:mr-auto">
    <RouterLink :to="{name: 'list trips'}" class="flex items-center rounded-lg p-2 focus:outline-none focus-visible:ring bg-stone-300 text-zinc-800 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200">
      <ArrowLongLeftIcon class="h-8 justify-center sm:h-12 sm:w-12"/> {{ $t('general.return') }}
    </RouterLink>
  </div>

  <form action="" class="bg-stone-400 rounded-lg p-3 flex flex-col gap-5">
    <h2 class="text-2xl">
      {{ $t('trips.create') }}
    </h2>

    <div class="w-full md:w-4/12">
      <label for="tripDate" class="block text-sm font-medium leading-6">{{ $t('trips.date') }}</label>
      <VueTailwindDatepicker id="tripDate" :disable-in-range="true" v-model="dateTrip" as-single @click-prev="validatePicker($event)" @click-next="validatePicker($event)" :placeholder="$t('trips.datePlaceholder')" :formatter="{ date: 'YYYY-MM-DD', month: 'MMM' }" :disable-date="invalidDate" overlay input-classes="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6"/>
    </div>

    <h3 class="text-xl mt-5">{{ $t('trips.vehicles') }}</h3>
    <VehicleList :is-write-view="false" />

    <h3 class="text-xl mt-5">{{ $t('trips.drivers') }}</h3>
    <DriverList :is-write-view="false" />

    <span class="md:w-fit w-full bg-stone-300 text-zinc-800 p-2 rounded hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 flex flex-row items-center md:m-auto text-center">
          {{ $t('trips.create') }} <PlusIcon class="h-8 sm:h-12"/>
    </span>
  </form>
</template>

<style scoped>

</style>