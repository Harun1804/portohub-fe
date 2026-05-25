<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6 mb-12">
      <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Services</p>
      <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Backend Engineering Services</h1>
      <p class="mt-4 max-w-3xl text-lg text-neutral-400">Technical services for teams that need scalable APIs, reliable integrations, maintainable backend architecture, and production-ready systems.</p>
    </div>

    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="space-y-8 lg:col-span-2">
          <div class="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <img v-if="active?.image" :src="active.image" :alt="active.name" class="h-full w-full rounded-2xl object-cover opacity-80" />
            <div v-else class="flex h-full items-center justify-center text-neutral-500 font-mono">[ Service Image Illustration ]</div>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-white">{{ active?.name }}</h2>
            <p class="mt-4 text-neutral-300 leading-relaxed">{{ active?.description }}</p>
            <p class="mt-4 text-neutral-400 leading-relaxed">{{ active?.moreInfo }}</p>

            <h4 class="mt-8 text-xl font-semibold text-white">Key Deliverables</h4>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li v-for="benefit in active?.benefits" :key="benefit" class="flex items-start rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-300">
                <span class="mr-3 text-indigo-500">✓</span>{{ benefit }}
              </li>
            </ul>
          </div>
        </div>

        <aside class="space-y-6 lg:col-span-1">
          <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 class="mb-4 text-xl font-bold text-white">All Services</h3>
            <ul class="space-y-3">
              <li v-for="service in servicesList" :key="service.name">
                <button
                  @click="activeServiceName = service.name"
                  :class="[
                    'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300',
                    activeServiceName === service.name ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800 hover:text-white',
                  ]"
                >
                  {{ service.name }}
                  <span v-if="activeServiceName === service.name">→</span>
                </button>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-indigo-800/50 bg-gradient-to-br from-indigo-900 to-neutral-900 p-6">
            <h3 class="mb-2 text-xl font-bold text-white">Need backend support?</h3>
            <p class="mb-4 text-sm text-indigo-200">Let’s discuss APIs, microservices, integration workflows, or system modernization.</p>
            <NuxtLink to="/contact" class="block w-full rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-indigo-400"> Contact Me </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue"

useHead({ title: "Services | Harun Ar-Rasyid" })

const servicesList = [
  {
    image: "/images/services/portfolio-1.webp",
    name: "Backend API Development",
    description: "Designing and building secure, maintainable, and scalable REST APIs for enterprise applications and digital products.",
    moreInfo: "Suitable for internal platforms, customer-facing applications, operational dashboards, and data-driven business workflows.",
    benefits: ["REST API design and implementation", "Authentication and authorization", "Database schema and query optimization", "Clean service-layer architecture"],
  },
  {
    image: "/images/services/portfolio-2.webp",
    name: "Microservices Architecture",
    description: "Modernizing backend systems through modular services, clear API contracts, and scalable service boundaries.",
    moreInfo: "Focused on maintainability, deployment flexibility, and reducing technical debt in growing backend systems.",
    benefits: ["Monolith-to-microservices planning", "Golang service development", "Inter-service communication", "Container-ready deployment structure"],
  },
  {
    image: "/images/services/portfolio-5.webp",
    name: "Enterprise System Integration",
    description: "Connecting internal systems, payment workflows, SAP, Odoo ERP, RFID, and third-party platforms through reliable backend integration.",
    moreInfo: "Best for organizations that need better data synchronization, process automation, and reduced manual operational work.",
    benefits: ["Payment gateway integration", "SAP and ERP workflow integration", "RFID and IoT data processing", "Batch and parallel processing"],
  },
  {
    image: "/images/services/portfolio-6.webp",
    name: "Backend Performance & Database Optimization",
    description: "Improving backend reliability and data access performance through query optimization, service refactoring, and architecture review.",
    moreInfo: "Useful for systems with growing traffic, slow queries, complex business rules, or maintainability problems.",
    benefits: ["SQL query optimization", "Backend refactoring", "Performance bottleneck analysis", "Maintainability improvement"],
  },
]

const activeServiceName = ref(servicesList[0].name)
const active = computed(() => servicesList.find((service) => service.name === activeServiceName.value) || servicesList[0])
</script>
