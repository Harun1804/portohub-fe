<template>
  <section id="portfolio" class="container mx-auto px-6 py-16">
    <div class="mb-8">
      <div :class="['flex flex-wrap items-center gap-4', paginated ? 'justify-between' : 'justify-center']">
        <div class="flex flex-wrap justify-start gap-2">
          <button
            v-for="category in projectCategories"
            :key="category"
            @click="selectCategory(category)"
            :class="[
              'rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
              activeFilter === category ? 'bg-indigo-600 text-white shadow-md' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <div v-if="paginated" class="flex flex-wrap items-center gap-3">
          <input
            v-model="search"
            placeholder="Search by title, stack, or keyword..."
            class="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-indigo-500 focus:outline-none sm:w-72"
          />
          <select v-model.number="pageSize" class="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white">
            <option v-for="opt in pageSizeOptions" :key="opt" :value="opt">{{ opt }} per page</option>
          </select>
        </div>
      </div>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="item in displayedProjects"
        :key="item.id"
        :to="{ path: `/portfolio/${item.id}`, query: { filter: activeFilter, search, limit: pageSize } }"
        class="group block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-neutral-900"
      >
        <div class="relative aspect-video w-full overflow-hidden bg-neutral-800">
          <img :src="(item.img && String(item.img).trim()) ? item.img : '/images/no-image.png'" :alt="item.title" class="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
        </div>
        <div class="p-5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-indigo-400">{{ item.category }}</span>
            <span class="text-xs text-neutral-600">•</span>
            <span class="text-xs text-neutral-500">{{ item.period }}</span>
          </div>
          <h3 class="mt-2 text-lg font-bold text-white transition group-hover:text-indigo-300">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-neutral-400 line-clamp-3">{{ item.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in item.techStack.slice(0, 3)" :key="tech" class="rounded-full bg-neutral-950 px-3 py-1 text-[11px] text-neutral-400">
              {{ tech }}
            </span>
          </div>
          <span class="mt-5 inline-flex text-xs font-semibold text-indigo-400 group-hover:underline">Read Case Study →</span>
        </div>
      </NuxtLink>
    </div>

    <div v-if="paginated" class="mt-8 flex items-center justify-center gap-3">
      <button @click="prevPage" :disabled="currentPage === 1" class="rounded bg-neutral-900 px-3 py-2 text-sm text-neutral-300 disabled:cursor-not-allowed disabled:opacity-40">Prev</button>
      <button v-for="p in totalPages" :key="p" @click="goToPage(p)" :class="['rounded px-3 py-2 text-sm', p === currentPage ? 'bg-indigo-600 text-white' : 'bg-neutral-900 text-neutral-300']">{{ p }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="rounded bg-neutral-900 px-3 py-2 text-sm text-neutral-300 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { PROJECTS, projectCategories } from "~/data/projects"

const props = defineProps({
  limit: { type: Number, default: null },
  paginated: { type: Boolean, default: false },
  pageSizeOptions: { type: Array, default: () => [6, 12, 24] },
})

const route = useRoute()
const pageSizeOptions = props.pageSizeOptions
const activeFilter = ref(String(route.query.filter || "All"))
const search = ref(String(route.query.search || ""))
const pageSize = ref(Number(route.query.limit || props.limit || pageSizeOptions[0]))
const currentPage = ref(1)

const filteredProjects = computed(() => {
  const term = search.value.toLowerCase().trim()
  let list = PROJECTS

  if (activeFilter.value !== "All") {
    list = list.filter((project) => project.category === activeFilter.value)
  }

  if (!term) return list

  return list.filter((project) => {
    const haystack = [
      project.title,
      project.description,
      project.category,
      project.client,
      project.role,
      project.techStack.join(" "),
      project.highlights.join(" "),
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(term)
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProjects.value.length / pageSize.value)))

const displayedProjects = computed(() => {
  if (props.paginated) {
    const start = (currentPage.value - 1) * pageSize.value
    return filteredProjects.value.slice(start, start + pageSize.value)
  }

  if (props.limit) return filteredProjects.value.slice(0, props.limit)
  return filteredProjects.value
})

function selectCategory(category) {
  activeFilter.value = category
  currentPage.value = 1
}

function goToPage(page) {
  currentPage.value = page
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

watch([search, pageSize], () => {
  currentPage.value = 1
})
</script>
