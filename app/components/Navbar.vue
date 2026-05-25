<template>
  <nav class="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-xl font-black tracking-wider text-white">
        GALAXY<span class="text-indigo-500">FOLIO.</span>
      </NuxtLink>

      <div class="hidden space-x-8 md:flex">
        <NuxtLink
          to="/"
          :class="[ 'text-sm font-medium transition', route.path === '/' ? 'text-indigo-400 font-semibold' : 'text-neutral-300 hover:text-indigo-400' ]"
        >Home</NuxtLink>
        <NuxtLink
          to="/portfolio"
          :class="[ 'text-sm font-medium transition', route.path.startsWith('/portfolio') ? 'text-indigo-400 font-semibold' : 'text-neutral-300 hover:text-indigo-400' ]"
        >Projects</NuxtLink>
        <NuxtLink
          to="/service"
          :class="[ 'text-sm font-medium transition', route.path.startsWith('/service') ? 'text-indigo-400 font-semibold' : 'text-neutral-300 hover:text-indigo-400' ]"
        >Services</NuxtLink>
      </div>

      <a href="#contact" class="hidden rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-indigo-500 md:block">
        Get In Touch
      </a>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
</script>