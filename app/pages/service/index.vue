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
          
          <div class="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 relative">
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
              <div class="h-32 w-32 text-indigo-500/20" v-html="active?.svgIcon"></div>
            </div>
          </div>

          <div>
            <div class="flex items-center mb-4">
              <div class="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 p-4" v-html="active?.svgIcon"></div>
              <h2 class="text-3xl font-bold text-white">{{ active?.name }}</h2>
            </div>
            
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
                  <span class="flex items-center gap-3">
                    <span class="h-5 w-5 opacity-70" v-html="service.svgIcon"></span>
                    {{ service.name }}
                  </span>
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
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>`,
    name: "Backend API Development",
    description: "Designing and building secure, maintainable, and scalable REST APIs for enterprise applications and digital products.",
    moreInfo: "Suitable for internal platforms, customer-facing applications, operational dashboards, and data-driven business workflows.",
    benefits: ["REST API design and implementation", "Authentication and authorization", "Database schema and query optimization", "Clean service-layer architecture"],
  },
  {
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>`,
    name: "Microservices Architecture",
    description: "Modernizing backend systems through modular services, clear API contracts, and scalable service boundaries.",
    moreInfo: "Focused on maintainability, deployment flexibility, and reducing technical debt in growing backend systems.",
    benefits: ["Monolith-to-microservices planning", "Golang service development", "Inter-service communication", "Container-ready deployment structure"],
  },
  {
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>`,
    name: "Enterprise System Integration",
    description: "Connecting internal systems, payment workflows, SAP, Odoo ERP, RFID, and third-party platforms through reliable backend integration.",
    moreInfo: "Best for organizations that need better data synchronization, process automation, and reduced manual operational work.",
    benefits: ["Payment gateway integration", "SAP and ERP workflow integration", "RFID and IoT data processing", "Batch and parallel processing"],
  },
  {
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /><path stroke-linecap="round" stroke-linejoin="round" d="M13 3L10 12h4l-3 9" /></svg>`,
    name: "Backend Performance & Database Optimization",
    description: "Improving backend reliability and data access performance through query optimization, service refactoring, and architecture review.",
    moreInfo: "Useful for systems with growing traffic, slow queries, complex business rules, or maintainability problems.",
    benefits: ["SQL query optimization", "Backend refactoring", "Performance bottleneck analysis", "Maintainability improvement"],
  },
]

const activeServiceName = ref(servicesList[0].name)
const active = computed(() => servicesList.find((service) => service.name === activeServiceName.value) || servicesList[0])
</script>