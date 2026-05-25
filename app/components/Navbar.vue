<template>
  <nav class="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/85 backdrop-blur-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-lg font-black tracking-tight text-white sm:text-xl">
        HARUN<span class="text-indigo-500">.DEV</span>
      </NuxtLink>

      <div class="hidden items-center space-x-8 md:flex">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" :class="navClass(item.to)">
          {{ item.label }}
        </NuxtLink>
      </div>

      <NuxtLink
        to="/contact"
        class="hidden rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-indigo-500 md:block"
      >
        Hire Me
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/portfolio" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact" },
]

function navClass(path) {
  const isActive = path === "/" ? route.path === "/" : route.path.startsWith(path)
  return [
    "text-sm font-medium transition",
    isActive ? "text-indigo-400 font-semibold" : "text-neutral-300 hover:text-indigo-400",
  ]
}
</script>
