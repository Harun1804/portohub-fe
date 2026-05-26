<template>
  <main class="pt-24 pb-20">
    <div v-if="project" class="container mx-auto px-6">
      <div class="mb-10 flex flex-col gap-6 border-b border-neutral-800 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span class="text-sm font-bold uppercase tracking-widest text-indigo-500">Case Study</span>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{{ project.title }}</h1>
          <p class="mt-4 max-w-3xl text-neutral-400">{{ project.description }}</p>
        </div>
        <button @click="goBack" class="flex items-center text-sm font-semibold text-neutral-400 transition hover:text-white">← Back to Portfolio</button>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="space-y-6 lg:col-span-2">
          <div class="aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <template v-if="project.img && String(project.img).trim()">
              <img :src="project.img" :alt="project.title" class="h-full w-full object-cover opacity-80" />
            </template>
            <template v-else-if="project.category && String(project.category).trim()">
              <div :style="categoryGradientStyle(project.category)" class="h-full w-full"></div>
            </template>
            <template v-else>
              <img src="/images/no-image.png" :alt="project.title" class="h-full w-full object-cover opacity-80" />
            </template>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            <section v-if="project.problem && project.problem.trim() !== ''" class="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h2 class="text-lg font-bold text-white">Problem</h2>
              <p class="mt-3 text-sm leading-6 text-neutral-400">{{ project.problem }}</p>
            </section>
            <section v-if="project.solution && project.solution.trim() !== ''" class="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h2 class="text-lg font-bold text-white">Solution</h2>
              <p class="mt-3 text-sm leading-6 text-neutral-400">{{ project.solution }}</p>
            </section>
            <section v-if="project.impact && project.impact.trim() !== ''" class="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h2 class="text-lg font-bold text-white">Impact</h2>
              <p class="mt-3 text-sm leading-6 text-neutral-400">{{ project.impact }}</p>
            </section>
          </div>
        </div>

        <aside class="space-y-8 lg:col-span-1">
          <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h3 class="border-b border-neutral-800 pb-4 text-xl font-bold text-white">Project Information</h3>
            <ul class="mt-6 space-y-4 text-sm">
              <li class="flex justify-between gap-6">
                <span class="text-neutral-500">Category</span>
                <span class="text-right font-medium text-white">{{ project.category }}</span>
              </li>
              <li class="flex justify-between gap-6">
                <span class="text-neutral-500">Client</span>
                <span class="text-right font-medium text-white">{{ project.client }}</span>
              </li>
              <li class="flex justify-between gap-6">
                <span class="text-neutral-500">Role</span>
                <span class="text-right font-medium text-white">{{ project.role }}</span>
              </li>
              <li class="flex justify-between gap-6">
                <span class="text-neutral-500">Period</span>
                <span class="text-right font-medium text-white">{{ project.period }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h3 class="text-xl font-bold text-white">Tech Stack</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tech in project.techStack" :key="tech" class="rounded-full bg-neutral-950 px-3 py-1.5 text-xs text-neutral-300">{{ tech }}</span>
            </div>
          </div>

          <div class="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8">
            <h2 class="text-2xl font-bold text-white">Key Contributions</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in project.highlights" :key="item" class="flex items-start gap-3 text-sm leading-6 text-neutral-300">
                <span class="mt-1 text-indigo-400">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section class="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 class="text-2xl font-bold text-white">Project Overview</h2>
          <p class="mt-4 text-sm leading-7 text-neutral-400">{{ project.overview }}</p>
        </div>
      </section>
    </div>

    <div v-else class="container mx-auto px-6 py-20 text-center">
      <h1 class="text-3xl font-bold text-white">Project not found</h1>
      <p class="mt-3 text-neutral-400">The requested project case study is not available.</p>
      <NuxtLink to="/portfolio" class="mt-6 inline-flex text-indigo-400 hover:underline">Back to Portfolio</NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { findProjectById } from "~/data/projects";
import { categoryGradientStyle } from "~/utils/gradients";

const route = useRoute();
const router = useRouter();
const project = computed(() => findProjectById(route.params.id));

useHead(() => ({
  title: project.value ? `${project.value.title} | Harun Ar-Rasyid` : "Project Not Found | Harun Ar-Rasyid",
}));

function goBack() {
  const filter = route.query.filter || "All";
  const search = route.query.search || "";
  const limit = route.query.limit || undefined;

  if (history.length > 1) router.back();
  else router.push({ path: "/portfolio", query: { filter, search, limit } });
}
</script>
