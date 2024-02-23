<script setup>
</script>

<template>
  <main>
    <div class="container mx-auto flex flex-col gap-10 rounded-md bg-stone-500 py-10 text-center">
      <span class="text-5xl font-bold">{{ $t('home.presentation') }}</span>
      <span class="text-4xl">{{ $t('home.technologies') }}</span>
      <ul class="text-2xl font-light flex flex-col gap-3 mx-auto">
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://vuejs.org/">Vue</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://vitejs.dev/">Vite</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://symfony.com/">Symfony</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://www.docker.com/">Docker</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://docs.docker.com/compose/">Docker Compose</a></li>
      </ul>
      <blockquote class="p-4 mx-3 bg-zinc-300 border-x-8 border-zinc-400">
        <p class="italic font-light leading-relaxed text-stone-900">{{ $t('home.block') }} <span class="font-mono">composer.json</span> {{ $t('home.and') }} <span class="font-mono">package.json</span></p>
      </blockquote>

      <span class="text-4xl">{{ $t('home.structure') }}</span>
      <div class="mx-6 gap-3 flex flex-col font-light text-xl">
        <span>{{ $t('home.description1') }}</span>
        <span>{{ $t('home.description2') }}</span>
        <span>{{ $t('home.description3') }}</span>
        <span>{{ $t('home.description4') }}</span>
      </div>

      <span class="text-4xl">{{ $t('home.credits') }}</span>
      <span class="text-2xl">{{ $t('home.made') }} <a class="italic font-light" href="mailto:cbrghton@gmail.com">Carlos Brighton Saldaña Ortiz</a></span>
      <span class="text-xl">{{ $t('home.socials') }}</span>
      <ul class="text-xl font-light flex flex-col gap-3 mx-auto">
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://github.com/xxb1s">GitHub</a></li>
        <li class="hover:font-medium hover:scale-125 hover:rounded-md hover:bg-stone-800 hover:text-zinc-200 px-8"><a target="_blank" href="https://www.linkedin.com/in/carlos-brighton/">LinkedIn</a></li>
      </ul>
    </div>
  </main>
</template>
