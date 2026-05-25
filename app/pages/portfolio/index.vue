<template>
  <div class="container mx-auto px-6 py-12">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white">Projects</h1>
        <p class="text-neutral-400 text-sm mt-1">Browse all projects</p>
      </div>
      <NuxtLink to="/" class="text-sm text-indigo-400 hover:underline">← Back Home</NuxtLink>
    </div>

    <PortfolioGrid :paginated="true" :limit="initialLimit" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const initialLimit = route.query.limit ? Number(route.query.limit) : 6

useHead({ title: 'Projects - SnapFolio' })
</script>
