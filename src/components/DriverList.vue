<script setup>
import { Dialog, DialogDescription, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilSquareIcon, PlusIcon, TrashIcon } from '@heroicons/vue/16/solid/index.js'
import { ref } from 'vue'

const props = defineProps({
  isWriteView: {
    type: Boolean,
    default: true
  }
})
const isOpenDialog = ref(false);

const closeDialog = () => {
  isOpenDialog.value = false;
}

const openDialog = () => {
  isOpenDialog.value = true;
}
</script>

<template>
  <RouterLink v-if="props.isWriteView" class="bg-stone-300 text-zinc-800 p-2 rounded hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 flex items-center md:mr-auto" :to="{ name: 'create drivers'}">
    {{ $t('drivers.create') }} <PlusIcon class="h-8 justify-center sm:h-12 sm:w-12"/>
  </RouterLink>

  <div class="relative overflow-x-auto">
    <table class="border border-separate border-stone-800 w-full rounded-lg p-1">
      <thead>
      <tr>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">#</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('drivers.name') }}</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('drivers.surname') }}</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800">{{ $t('drivers.licence') }}</th>
        <th class="border bg-stone-800 text-zinc-200 border-stone-800" v-if="props.isWriteView">{{ $t('general.actions') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded">3</th>
        <th class="border text-zinc-200 bg-stone-700 border-stone-700 rounded" v-if="props.isWriteView">
          <div class="flex flex-row justify-center">
            <div class="group flex relative">
              <RouterLink as="button" :to="{ name: 'edit driver', params: { id: 3 } }" class="bg-stone-300 text-zinc-800 rounded my-2 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 p-0.5"><PencilSquareIcon class="h-7"/></RouterLink>
              <span class="group-hover:opacity-100 transition-opacity bg-black px-3 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 -m-9 w-fit mx-auto text-nowrap">{{ $t('drivers.edit') }}</span>
            </div>
            <div class="group flex relative">
              <button @click="openDialog" class="bg-stone-300 text-zinc-800 rounded my-2 ml-3 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 p-0.5"><TrashIcon class="h-7"/></button>
              <span class="group-hover:opacity-100 transition-opacity bg-black px-3 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 -m-9 w-fit mx-auto text-nowrap">{{ $t('drivers.delete') }}</span>
            </div>
          </div>
        </th>
      </tr>
      </tbody>
    </table>
  </div>

  <TransitionRoot appear :show="isOpenDialog" as="template" v-if="props.isWriteView">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-200 p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-stone-800"
              >
                {{ $t('drivers.delete') }}
              </DialogTitle>
              <DialogDescription as="span" class="text-sm font-light text-red-800">
                {{ $t('drivers.deleteDescription') }}
              </DialogDescription>
              <div class="mt-2">
                <p class="text-sm font-light text-red-800">
                  {{ $t('drivers.deleteBody') }}
                </p>
              </div>

              <div class="mt-4 flex gap-3">
                <button
                  type="button"
                  class="justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  @click="closeDialog"
                >
                  {{ $t('drivers.delete') }}
                </button>

                <button
                  type="button"
                  class="justify-center rounded-md border border-transparent bg-stone-100 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2"
                  @click="closeDialog"
                >
                  {{ $t('general.cancel') }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>

</style>