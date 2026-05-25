<template>
  <div class="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white">
    <Navbar />

    <div class="transition-all duration-300">
      <slot />
    </div>

    <footer class="border-t border-neutral-800 bg-neutral-950 py-8 text-center text-sm text-neutral-400">
      <div class="container mx-auto px-4">
        <p>&copy; {{ new Date().getFullYear() }} <span class="font-bold text-indigo-400">GalaxyFolio</span>. All Rights Reserved.</p>
        <p class="mt-2 text-xs text-neutral-600">Built with Nuxt 4 & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>