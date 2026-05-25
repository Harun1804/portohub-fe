<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6 mb-12 text-center md:text-left">
      <h1 class="text-4xl font-extrabold text-white sm:text-5xl">Service <span class="text-indigo-500">Details.</span></h1>
      <p class="mt-4 text-lg text-neutral-400 max-w-2xl">
        Comprehensive web development solutions tailored to scale your business and enhance user experience.
      </p>
    </div>

    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <aside class="space-y-6 lg:col-span-1">
          <div class="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
            <h3 class="text-xl font-bold text-white mb-4">All Services</h3>
            <ul class="space-y-3">
              <li v-for="service in servicesList" :key="service.name">
                <button 
                  @click="activeService = service.name"
                  :class="[
                    'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                    activeService === service.name 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  ]"
                >
                  {{ service.name }}
                  <span v-if="activeService === service.name">→</span >
                </button>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-indigo-900 to-neutral-900 p-6 rounded-2xl border border-indigo-800/50">
            <h3 class="text-xl font-bold text-white mb-2">Need Help?</h3>
            <p class="text-sm text-indigo-200 mb-4">Contact us to get a custom quote for your specific needs.</p>
            <a href="mailto:hello@example.com" class="block w-full text-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-400 transition">
              Email Us
            </a>
          </div>
        </aside>

        <div class="lg:col-span-2 space-y-8">
          <div class="aspect-video w-full rounded-2xl bg-neutral-800 flex items-center justify-center overflow-hidden border border-neutral-700">
            <span class="text-neutral-500 font-mono">[ Service Image Illustration ]</span>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-white">{{ activeService }}</h2>
            <p class="mt-4 text-neutral-300 leading-relaxed">
              In modern digital infrastructure, having a robust and scalable architecture is crucial. We build high-performance systems using microservices architectures, Go, and Nuxt 3/4. Our approach ensures that your application is not only fast but also maintainable and secure.
            </p>
            <p class="mt-4 text-neutral-300 leading-relaxed">
              We focus on clean code principles, CI/CD pipelines (via GitHub Actions/GitLab), and reliable deployment strategies using Docker and Nginx.
            </p>

            <h4 class="mt-8 text-xl font-semibold text-white">Key Benefits</h4>
            <ul class="mt-4 space-y-3">
              <li class="flex items-start text-neutral-300">
                <span class="text-indigo-500 mr-3">✓</span> Scalable Microservices Architecture
              </li>
              <li class="flex items-start text-neutral-300">
                <span class="text-indigo-500 mr-3">✓</span> High-performance Go Backend (Fiber/gRPC)
              </li>
              <li class="flex items-start text-neutral-300">
                <span class="text-indigo-500 mr-3">✓</span> Automated CI/CD Pipelines
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
useHead({ title: 'Service Details - SnapFolio' })

const servicesList = [
  { name: 'Web Development' },
  { name: 'Backend & Microservices' },
  { name: 'UI/UX Design' },
  { name: 'Cloud Server Deployment' }
]

const activeService = ref(servicesList[1].name) // Default to Backend
</script>