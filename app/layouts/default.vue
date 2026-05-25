<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white">
    <Navbar />

    <div class="transition-all duration-300">
      <slot />
    </div>

    <footer class="border-t border-neutral-800 bg-neutral-950 py-10 text-sm text-neutral-400">
      <div class="container mx-auto flex flex-col gap-4 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p class="font-semibold text-white">Harun Ar-Rasyid</p>
          <p class="mt-1 text-xs text-neutral-500">Senior Backend Engineer · Microservices · Enterprise Integration</p>
        </div>
        <p class="text-xs text-neutral-500">© {{ new Date().getFullYear() }} Harun Ar-Rasyid. Built with Nuxt & Tailwind CSS.</p>
      </div>
    </footer>
  </div>
</template>
