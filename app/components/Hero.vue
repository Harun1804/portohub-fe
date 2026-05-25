<template>
  <section class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-neutral-950 px-4">
    <div class="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]"></div>

    <div class="relative z-10 text-center max-w-3xl">
      <span class="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-4">
        Available for Freelance
      </span>
      <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        Harun Ar-Rasyid <span class="block text-indigo-500 mt-2"></span>
      </h1>
      
      <p class="mt-6 text-xl text-neutral-400">
        I am a <span class="font-semibold text-white underline decoration-indigo-500 decoration-2">{{ currentRole }}</span>
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <NuxtLink to="/portfolio" class="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:scale-[1.02]">
          View My Work
        </NuxtLink>
        <NuxtLink to="/service" class="rounded-xl border border-neutral-800 bg-neutral-900/50 px-6 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-neutral-800">
          Our Services
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const roles = ['Software Engineer', 'Backend Engineer', 'Tech Enthusiast']
const currentRole = ref(roles[0])
let roleIndex = 0

onMounted(() => {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length
    currentRole.value = roles[roleIndex]
  }, 3000) // Berganti peran setiap 3 detik
})
</script>