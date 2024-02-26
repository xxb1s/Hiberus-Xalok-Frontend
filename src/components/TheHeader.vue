<script setup>
import { RouterLink } from 'vue-router'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, IdentificationIcon, TruckIcon } from '@heroicons/vue/16/solid/index.js'
</script>

<template>
  <header class="m-2 rounded bg-stone-800 p-5 text-zinc-200">
    <nav class="flex md:flex-row flex-col items-center gap-8">
      <RouterLink
        to="/"
        class="w-28 flex-none rounded p-3 text-center text-2xl font-semibold hover:bg-zinc-200 hover:text-stone-800"
        >Xalok</RouterLink
      >
      <Popover class="relative w-auto flex-initial font-semibold" v-slot="{ open }">
        <PopoverButton class="inline-flex gap-x-1.5 rounded p-3 hover:bg-stone-700">
          {{ $t("header.administration") }}
          <ChevronDownIcon class="-mr-1 h-5 w-5" :class="{ 'rotate-180 transform': open }" />
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
            class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-4 sm:px-0"
          >
            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
              <div class="relative grid gap-8 bg-white p-7">
                <RouterLink
                  to="/vehicles"
                  class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-stone-300 focus:outline-none focus-visible:ring"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                    <TruckIcon class="text-stone-700" />
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-stone-700">{{ $t("header.vehicles") }}</p>
                    <p class="text-sm text-stone-500">{{ $t("header.vehiclesDescription") }}</p>
                  </div>
                </RouterLink>
                <RouterLink
                  to="/"
                  class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-stone-300 focus:outline-none focus-visible:ring"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                    <IdentificationIcon class="text-stone-700" />
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-stone-700">{{ $t("header.drivers") }}</p>
                    <p class="text-sm text-stone-500">{{ $t("header.driversDescription") }}</p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <RouterLink
        to="/about"
        class="w-16 flex-initial rounded p-3 text-center font-semibold hover:bg-stone-700"
      >
        {{ $t("header.trips") }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped></style>
