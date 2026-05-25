<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6">
      <div class="mb-8 flex flex-col gap-4 border-b border-neutral-800 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Portfolio</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Backend Engineering Case Studies</h1>
          <p class="mt-4 max-w-3xl text-neutral-400">Explore selected work in microservices, enterprise backend systems, payment/SAP integration, RFID tracking, ERP workflows, and automation.</p>
        </div>
        <NuxtLink to="/" class="text-sm font-semibold text-indigo-400 hover:underline">← Back Home</NuxtLink>
      </div>
    </div>

    <PortfolioGrid :paginated="true" :limit="initialLimit" />
  </main>
</template>

<script setup>
const route = useRoute()
const initialLimit = route.query.limit ? Number(route.query.limit) : 6

useHead({ title: "Projects | Harun Ar-Rasyid" })
</script>
