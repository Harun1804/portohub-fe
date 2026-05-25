<template>
  <div>
    <Hero />

    <div class="text-center mb-12">
      <div class="flex items-center justify-center gap-4 mt-10">
        <div>
          <h2 class="text-3xl font-bold text-white sm:text-4xl">Recent Projects</h2>
          <p class="mt-3 text-neutral-400">Explore some of our latest standalone projects and microservices architecture.</p>
        </div>
      </div>
      <PortfolioGrid :limit="homeLimit" />

      <div class="mt-6">
        <NuxtLink :to="{ path: '/portfolio', query: { limit: homeLimit } }" class="text-sm text-indigo-400 hover:underline">View all projects →</NuxtLink>
      </div>
    </div>

    <section class="bg-neutral-950/50 border-t border-b border-neutral-800 py-20">
      <div class="container mx-auto px-6 text-center max-w-2xl">
        <h2 class="text-3xl font-bold text-white">Need a custom build?</h2>
        <p class="mt-4 text-neutral-400">We specialize in setting up robust infrastructures, clean interfaces, and highly performant web application development tailored from scratch.</p>
        <div class="mt-8">
          <NuxtLink to="/service-details" class="rounded-xl bg-neutral-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700">
            Explore All Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
useHead({
  title: 'SnapFolio - High Performance Tailwind Portfolio',
  meta: [
    { name: 'description', content: 'Modern clean portfolio layout built with Nuxt 4 and Tailwind CSS.' }
  ]
})

const homeLimit = ref(6)

// if the page was visited with a query limit, use it
const route = useRoute()
if (route.query.limit) homeLimit.value = Number(route.query.limit)

</script>