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
      return t('validations.required', { field: t('drivers.' + path)})
    }
  },
  string: {
    max: ({ path, max }) => {
      return t('validations.max', { field: t('drivers.' + path), max: max })
    },
    min: ({ path, min }) => {
      return t('validations.min', { field: t('drivers.' + path), min: min })
    },
    length: ({ path, length }) => {
      return t('validations.length', { field: t('drivers.' + path), length: length })
    }
  }
})

const schema = toTypedSchema(
  object({
    name: string().required().max(255).min(3),
    surname: string().required().max(255).min(3),
    licence: string().required().length(1)
  })
)

const { errors, defineField, meta } = useForm({
  validationSchema: schema
})

const [name, nameAttrs] = defineField('name');
const [surname, surnameAttrs] = defineField('surname');
const [licence, licenceAttrs] = defineField('licence');
</script>

<template>
  <div class="md:mr-auto">
    <RouterLink :to="{name: 'list drivers'}" class="flex items-center rounded-lg p-2 focus:outline-none focus-visible:ring bg-stone-300 text-zinc-800 hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200">
      <ArrowLongLeftIcon class="h-8 justify-center sm:h-12 sm:w-12"/> {{ $t('general.return') }}
    </RouterLink>
  </div>

  <form class="bg-stone-400 rounded-lg p-3 space-y-12">
    <h2 class="text-2xl">
      {{ $t('drivers.create') }}
    </h2>

    <div class="mt-10 grid md:grid-cols-6 gap-x-6 gap-y-8 grid-cols-2 grid-rows-2 grid-flow-col items-center">

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="name" class="block text-sm font-medium leading-6">{{ $t('drivers.name') }}</label>
        <div class="mt-2">
          <input type="text" name="name" id="name" v-model="name" v-bind="nameAttrs" autocomplete="given-name" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('drivers.namePlaceholder')"/>
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.name }}</span>
      </div>

      <div class="col-start-1 col-end-7 md:col-start-3 md:col-end-5">
        <label for="surname" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('drivers.surname') }}</label>
        <div class="mt-2">
          <input type="text" name="surname" id="surname" v-model="surname" v-bind="surnameAttrs" autocomplete="family-name" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('drivers.surnamePlaceholder')" />
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.surname }}</span>
      </div>

      <div class="md:col-start-5 md:row-span-2 col-start-1 col-end-7 items-center text-center order-last">
        <button class="md:w-fit w-auto bg-stone-300 text-zinc-800 p-2 rounded hover:bg-stone-800 hover:text-zinc-200 active:ring active:ring-zinc-200 focus:ring focus:ring-zinc-200 flex items-center m-auto" v-if="(meta.touched && meta.valid)">
          {{ $t('drivers.create') }} <PlusIcon class="h-8 justify-center sm:h-12"/>
        </button>
      </div>

      <div class="col-start-1 col-end-7 md:col-end-3">
        <label for="licence" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('drivers.licence') }}</label>
        <div class="mt-2">
          <input type="text" name="licence" id="licence" v-model="licence" v-bind="licenceAttrs" class="block w-full rounded-md bg-zinc-200 border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:text-sm sm:leading-6" :placeholder="$t('drivers.licencePlaceholder')"/>
        </div>
        <span class="text-red-700 text-sm font-light">{{ errors.licence }}</span>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>