<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6 mb-12 text-center md:text-left">
      <h1 class="text-4xl font-extrabold text-white sm:text-5xl">Service <span class="text-indigo-500">Details.</span></h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-2xl">Comprehensive web development solutions tailored to scale your business and enhance user experience.</p>
    </div>

    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-8">
          <div class="aspect-video w-full rounded-2xl bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
            <img v-if="active && active.image" :src="active.image" :alt="active.name" class="w-full h-full object-cover rounded-2xl" />
            <div v-else class="text-neutral-500 font-mono">[ Service Image Illustration ]</div>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-white">{{ active?.name }}</h2>
            <p v-if="active?.description" class="mt-4 text-neutral-300 leading-relaxed">{{ active.description }}</p>
            <p v-else class="mt-4 text-neutral-300 leading-relaxed">No description available.</p>

            <div v-if="active?.moreInfo" class="mt-4 text-neutral-300 leading-relaxed">{{ active.moreInfo }}</div>

            <h4 v-if="active?.benefits && active.benefits.length" class="mt-8 text-xl font-semibold text-white">Key Benefits</h4>
            <ul v-if="active?.benefits && active.benefits.length" class="mt-4 space-y-3">
              <li v-for="(b, idx) in active.benefits" :key="idx" class="flex items-start text-neutral-300"><span class="text-indigo-500 mr-3">✓</span>{{ b }}</li>
            </ul>
          </div>
        </div>

        <aside class="space-y-6 lg:col-span-1">
          <div class="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
            <h3 class="text-xl font-bold text-white mb-4">All Services</h3>
            <ul class="space-y-3">
              <li v-for="service in servicesList" :key="service.name">
                <button
                  @click="activeServiceName = service.name"
                  :class="[
                    'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                    activeServiceName === service.name ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800 hover:text-white',
                  ]"
                >
                  {{ service.name }}
                  <span v-if="activeServiceName === service.name">→</span>
                </button>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-indigo-900 to-neutral-900 p-6 rounded-2xl border border-indigo-800/50">
            <h3 class="text-xl font-bold text-white mb-2">Need Help?</h3>
            <p class="text-sm text-indigo-200 mb-4">Contact us to get a custom quote for your specific needs.</p>
            <a href="mailto:hello@example.com" class="block w-full text-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-400 transition"> Email Us </a>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
useHead({ title: "Service Details - SnapFolio" });

const servicesList = [
  {
    image: "/images/services/portfolio-1.webp",
    name: "Web Development",
    description: "Building high-performance web applications using modern frameworks and best practices.",
    benefits: ["Scalable Microservices Architecture", "High-performance Go Backend (Fiber/gRPC)", "Automated CI/CD Pipelines"],
  },
  { image: "/images/services/portfolio-2.webp", name: "Backend & Microservices", description: "Developing scalable backend systems and microservices architectures." },
  { image: "/images/services/portfolio-5.webp", name: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces and experiences." },
  { image: "/images/services/portfolio-6.webp", name: "Cloud Server Deployment", description: "Deploying and managing cloud infrastructure for optimal performance and reliability." },
];

const activeServiceName = ref(servicesList[1].name);
const active = computed(() => servicesList.find((s) => s.name === activeServiceName.value) || servicesList[1]);
</script>
