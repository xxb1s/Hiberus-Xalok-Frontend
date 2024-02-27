<script setup>
import { ArrowLongLeftIcon, PlusIcon } from '@heroicons/vue/16/solid/index.js'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, setLocale } from 'yup';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

setLocale({
  mixed: {
    required: ({ path }) => {
      return t('validations.required', { field: t('vehicles.' + path)})
    }
  },
  string: {
    max: ({ path, max }) => {
      return t('validations.max', { field: t('vehicles.' + path), max: max })
    },
    min: ({ path, min }) => {
      return t('validations.min', { field: t('vehicles.' + path), min: min })
    },
    length: ({ path, length }) => {
      return t('validations.length', { field: t('vehicles.' + path), length: length })
    }
  }
})

const schema = toTypedSchema(
  object({
    brand: string().required().max(255).min(1),
    model: string().required().max(255).min(1),
    plate: string().required().max(10).min(3),
    licence: string().required().length(1)
  })
)

const { errors, defineField, meta } = useForm({
  validationSchema: schema
});

const [brand, brandAttrs] = defineField('brand');
const [model, modelAttrs] = defineField('model');
const [plate, plateAttrs] = defineField('plate');
const [licence, licenceAttrs] = defineField('licence');
</script>

<template>
  <div class="md:mr-auto">
    <RouterLink :to="{name: 'list vehicles'}" class="flex items-center rounded-lg p-2 focus:outline-none focus-visible:ring bg-stone-300 text-zinc-800 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200">
      <ArrowLongLeftIcon class="h-8 justify-center sm:h-12 sm:w-12"/> {{ $t('general.return') }}
    </RouterLink>
  </div>

  <div class="bg-stone-400 rounded-lg p-3 space-y-12">
    <h2 class="text-2xl">
      {{ $t('vehicles.create') }}
    </h2>

    <div class="mt-10 grid md:grid-cols-6 gap-x-6 gap-y-8 grid-cols-2 grid-rows-2 grid-flow-col items-center">

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="brand" class="block text-sm font-medium leading-6">{{ $t('vehicles.brand') }}</label>
        <div class="mt-2">
          <input type="text" v-model="brand" v-bind="brandAttrs" name="brand" id="brand" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.brandPlaceholder')"/>
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.brand }}</span>
      </div>

      <div class="col-start-1 col-end-7 md:col-start-3 md:col-end-5">
        <label for="model" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.model') }}</label>
        <div class="mt-2">
          <input type="text" v-model="model" v-bind="modelAttrs" name="model" id="model" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.modelPlaceholder')" />
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.model }}</span>
      </div>

      <div class="md:col-start-5 md:row-span-2 col-start-1 col-end-7 items-center text-center order-last">
        <button class="md:w-fit w-auto p-2 rounded flex items-center m-auto bg-stone-300 text-zinc-800 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200" v-if="(meta.touched && meta.valid)">
          {{ $t('vehicles.create') }} <PlusIcon class="h-8 justify-center sm:h-12"/>
        </button>
      </div>

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="plate" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.plate') }}</label>
        <div class="mt-2">
          <input type="text" v-model="plate" v-bind="plateAttrs" name="plate" id="plate" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.platePlaceholder')"/>
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.plate }}</span>
      </div>

      <div class="col-start-1 col-end-7 md:col-start-3 md:col-end-5">
        <label for="licence" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('vehicles.licence') }}</label>
        <div class="mt-2">
          <input type="text" v-model="licence" v-bind="licenceAttrs" name="licence" id="licence" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('vehicles.licencePlaceholder')"/>
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.licence }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>