<template>
  <section id="portfolio" class="container mx-auto px-6 py-20">
    <div class="mb-6">
      <div :class="['mt-4 flex flex-wrap items-center gap-4', paginated ? 'justify-between' : 'justify-center']">
        <!-- Categories (left edge) -->
        <div class="flex flex-wrap justify-start gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="[
              'rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
              activeFilter === category ? 'bg-indigo-600 text-white shadow-md' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Controls (right edge): search + page size -->
        <div class="flex items-center gap-3">
          <div v-if="paginated" class="flex items-center gap-2">
            <input v-model="search" @input="onSearch" placeholder="Search projects..." class="rounded-md bg-neutral-800 text-sm text-white px-3 py-1 w-56" />
            <label class="text-sm text-neutral-400">Show</label>
            <select v-model.number="pageSize" class="rounded-md bg-neutral-800 text-sm text-white px-3 py-1">
              <option v-for="opt in pageSizeOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <label class="text-sm text-neutral-400">per page</label>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
      <NuxtLink
        v-for="item in displayedProjects"
        :key="item.id"
        :to="{ path: `/portfolio/${item.id}`, query: { filter: activeFilter, search: search, limit: pageSize } }"
        class="group block overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 transition hover:-translate-y-1 hover:border-neutral-700"
      >
        <div class="relative aspect-video w-full overflow-hidden bg-neutral-800">
          <div class="absolute inset-0 flex items-center justify-center text-neutral-600 font-mono text-sm group-hover:scale-105 transition duration-500 bg-gradient-to-br from-neutral-800 to-neutral-900">
            <img :src="item.img" :alt="item.title" class="w-full h-full object-cover opacity-80" />
          </div>
        </div>
        <div class="p-5">
          <span class="text-xs font-medium uppercase tracking-wider text-indigo-400">{{ item.category }}</span>
          <h3 class="mt-2 text-lg font-bold text-white group-hover:text-indigo-400 transition">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-neutral-400 line-clamp-2">{{ item.description }}</p>
          <NuxtLink :to="{ path: `/portfolio/${item.id}`, query: { filter: activeFilter, search: search, limit: pageSize } }" class="mt-4 inline-flex items-center text-xs font-semibold text-indigo-400 hover:underline">
            Read Detail Project →
          </NuxtLink>
        </div>
      </NuxtLink>
    </div>

    <div v-if="paginated" class="mt-8 flex items-center justify-center gap-3">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 rounded bg-neutral-800 text-sm">Prev</button>
      <button v-for="p in totalPages" :key="p" @click="goToPage(p)" :class="['px-3 py-1 rounded text-sm', p === currentPage ? 'bg-indigo-600 text-white' : 'bg-neutral-800 text-neutral-300']">{{ p }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 rounded bg-neutral-800 text-sm">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
const props = defineProps({
  limit: { type: Number, default: null },
  paginated: { type: Boolean, default: false },
  pageSizeOptions: { type: Array, default: () => [6, 12, 24, 48, 96] },
});

const categories = ["All", "Web", "App", "Branding"];
const route = useRoute();
const activeFilter = ref(route.query.filter || "All");

onMounted(() => {
  if (route.query.filter) activeFilter.value = route.query.filter;
});

watch(
  () => route.query.filter,
  (val) => {
    if (val) activeFilter.value = val;
  },
);

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "Web", description: "High-performance storefront built with cutting-edge stack.", img: "/images/portfolio-1.webp" },
  { id: 2, title: "Mobile Banking App", category: "App", description: "Secure digital banking interface focusing on minimalist architecture.", img: "/images/portfolio-2.webp" },
  { id: 3, title: "Cozy Nebula Identity", category: "Branding", description: "Complete minimalist brand design guidelines and creative assets.", img: "/images/portfolio-5.webp" },
  { id: 4, title: "Automated Logistics Dashboard", category: "Web", description: "Real-time analytical microservices monitor tools.", img: "/images/portfolio-7.webp" },
  { id: 5, title: "Social Media Scheduler", category: "Web", description: "SaaS scheduling and analytics dashboard.", img: "/images/portfolio-8.webp" },
  { id: 6, title: "Healthcare Mobile App", category: "App", description: "Patient-focused appointment and records app.", img: "/images/portfolio-6.webp" },
  { id: 7, title: "Brand Refresh - Orion", category: "Branding", description: "Rebranding and identity system for Orion.", img: "/images/portfolio-9.webp" },
  { id: 8, title: "Analytics Microservice", category: "Web", description: "Stream-processing observability services.", img: "/images/portfolio-10.webp" },
];

const search = ref("");

const filteredProjects = computed(() => {
  const term = search.value && String(search.value).toLowerCase().trim();
  let list = projects;
  if (activeFilter.value !== "All") list = list.filter((p) => p.category === activeFilter.value);
  if (term) {
    return list.filter((p) => (p.title + " " + p.description).toLowerCase().includes(term));
  }
  return list;
});

// Pagination
const pageSizeOptions = props.pageSizeOptions;
const pageSize = ref(props.limit || pageSizeOptions[0]);
const currentPage = ref(1);

watch(
  () => props.limit,
  (v) => {
    if (v) pageSize.value = v;
  },
);

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProjects.value.length / pageSize.value)));

const displayedProjects = computed(() => {
  if (props.paginated) {
    const start = (currentPage.value - 1) * pageSize.value;
    return filteredProjects.value.slice(start, start + pageSize.value);
  }
  if (props.limit) return filteredProjects.value.slice(0, props.limit);
  return filteredProjects.value;
});

function goToPage(n) {
  currentPage.value = n;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function selectCategory(cat) {
  activeFilter.value = cat;
  currentPage.value = 1;
}
function onSearch() {
  currentPage.value = 1;
}

watch(pageSize, () => {
  currentPage.value = 1;
});
watch(search, () => {
  currentPage.value = 1;
});
</script>
