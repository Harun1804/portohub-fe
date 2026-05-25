<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6">
      <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
        <div>
          <span class="text-sm font-bold tracking-widest text-indigo-500 uppercase">Case Study</span>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Petalin Project</h1>
        </div>
        <button @click="goBack" class="text-sm font-semibold text-neutral-400 hover:text-white transition flex items-center">← Back to Portfolio</button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        <div class="lg:col-span-2 space-y-6">
          <div class="aspect-[16/10] rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <span class="text-neutral-600 font-mono">[ Main Project Mockup ]</span>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="aspect-video rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <span class="text-neutral-600 text-xs font-mono">[ Image 1 ]</span>
            </div>
            <div class="aspect-video rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <span class="text-neutral-600 text-xs font-mono">[ Image 2 ]</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 space-y-8">
          <div class="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h3 class="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Project Information</h3>
            <ul class="space-y-4 text-sm">
              <li class="flex justify-between">
                <span class="text-neutral-500">Category</span>
                <span class="font-medium text-white">Fullstack / Microservices</span>
              </li>
              <li class="flex justify-between">
                <span class="text-neutral-500">Client</span>
                <span class="font-medium text-white">Internal</span>
              </li>
              <li class="flex justify-between">
                <span class="text-neutral-500">Tech Stack</span>
                <span class="font-medium text-white text-right">Go, gRPC, Vue/Nuxt, MySQL</span>
              </li>
              <li class="flex justify-between pt-4 border-t border-neutral-800">
                <span class="text-neutral-500">Project URL</span>
                <a href="#" class="font-medium text-indigo-400 hover:underline">github.com/petalin</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p class="text-neutral-400 leading-relaxed text-sm">
              Petalin is a complex full-stack project focusing on modern microservices architecture. The backend is powered by Go with gRPC for seamless inter-service communication, utilizing a Schema-First approach.
            </p>
            <p class="text-neutral-400 leading-relaxed text-sm mt-4">
              Challenges included setting up robust service discovery and handling database connectivity within a containerized Docker environment. The frontend consumes a unified Portfolio API built specifically for this ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({ title: "Case Study: Petalin - SnapFolio" });

const route = useRoute();
const router = useRouter();

function goBack() {
  const filter = route.query.filter || "All";
  const search = route.query.search || "";
  const limit = route.query.limit || undefined;
  if (history.length > 1) {
    router.back();
  } else {
    router.push({ path: "/portfolio", query: { filter, search, limit } });
  }
}
</script>
