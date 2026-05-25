<template>
  <nav class="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/85 backdrop-blur-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4 relative">
      <NuxtLink to="/" class="text-lg font-black tracking-tight text-white sm:text-xl"> HARUN<span class="text-indigo-500">.DEV</span> </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden items-center space-x-8 md:flex">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" :class="navClass(item.to)">
          {{ item.label }}
        </NuxtLink>
      </div>

      <!-- Desktop CTA -->
      <NuxtLink to="/contact" class="hidden rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-indigo-500 md:block"> Hire Me </NuxtLink>

      <!-- Mobile: hamburger -->
      <button @click="open = !open" class="inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-neutral-900/60 md:hidden" :aria-expanded="open" aria-label="Toggle navigation">
        <svg v-if="!open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile menu -->
      <transition name="fade">
        <div v-show="open" class="absolute left-0 right-0 top-full z-40 mt-0 border-t border-neutral-800 bg-neutral-950/95 md:hidden">
          <div class="container mx-auto flex flex-col items-stretch px-4 py-4 space-y-2">
            <NuxtLink v-for="item in navItems" :key="item.to + '-mobile'" :to="item.to" :class="[navClass(item.to), 'block px-3 py-2 rounded']" @click="open = false">
              {{ item.label }}
            </NuxtLink>

            <NuxtLink to="/contact" class="mx-auto mt-1 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold tracking-wide text-white transition hover:bg-indigo-500" @click="open = false"> Hire Me </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
const route = useRoute();

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/portfolio" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact" },
];

function navClass(path) {
  const isActive = path === "/" ? route.path === "/" : route.path.startsWith(path);
  return ["text-sm font-medium transition", isActive ? "text-indigo-400 font-semibold" : "text-neutral-300 hover:text-indigo-400"];
}
</script>
