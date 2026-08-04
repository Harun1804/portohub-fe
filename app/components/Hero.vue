<template>
  <section class="relative flex min-h-[88vh] items-center overflow-hidden bg-neutral-950 px-4 py-20">
    <div class="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[130px]"></div>
    <div class="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-[120px]"></div>

    <div class="container relative z-10 mx-auto grid items-center gap-12 px-2 lg:grid-cols-[1.15fr_0.85fr] lg:px-6">
      <div class="max-w-4xl">
        <span class="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
          Backend Engineer · Enterprise Systems · Microservices
        </span>

        <h1 class="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building scalable backend systems for enterprise applications.
        </h1>

        <p class="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">
          I am <span class="font-semibold text-white">{{ PROFILE.name }}</span>, a
          <span class="font-semibold text-indigo-300 underline decoration-indigo-500 decoration-2 underline-offset-4">{{ currentRole }}</span>
          focused on REST APIs, microservices architecture, system integration, payment/SAP workflows, and database optimization.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <span v-for="item in PROFILE.focusAreas" :key="item" class="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-300">
            {{ item }}
          </span>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <NuxtLink to="/portfolio" class="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:scale-[1.02]">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-800">
            Contact Me
          </NuxtLink>
        </div>
      </div>

      <aside class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Engineering Snapshot</p>
        <div class="mt-6 grid gap-4">
          <div class="rounded-2xl bg-neutral-950/70 p-5">
            <p class="text-3xl font-black text-white">Enterprise</p>
            <p class="mt-1 text-sm text-neutral-400">Backend systems, internal platforms, and integration workflows.</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-neutral-950/70 p-5">
              <p class="text-2xl font-black text-white">API</p>
              <p class="mt-1 text-xs text-neutral-400">REST services</p>
            </div>
            <div class="rounded-2xl bg-neutral-950/70 p-5">
              <p class="text-2xl font-black text-white">DB</p>
              <p class="mt-1 text-xs text-neutral-400">SQL optimization</p>
            </div>
          </div>
          <div class="rounded-2xl bg-neutral-950/70 p-5">
            <p class="text-sm text-neutral-300">Core stack</p>
            <p class="mt-2 text-sm font-medium text-white">Golang · Java Spring Boot · Laravel/Lumen · PostgreSQL · Docker · Kubernetes</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { PROFILE } from "~/data/profile"

const roles = ["Senior Backend Engineer", "Microservices Engineer", "Enterprise Integration Engineer", "Backend Developer"]
const currentRole = ref(roles[0])
let roleIndex = 0
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length
    currentRole.value = roles[roleIndex]
  }, 3000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
