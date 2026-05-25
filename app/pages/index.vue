<template>
  <div>
    <Hero />

    <section class="border-y border-neutral-800 bg-neutral-950/70 py-16">
      <div class="container mx-auto grid gap-6 px-6 md:grid-cols-3">
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Specialization</p>
          <h2 class="mt-3 text-2xl font-bold text-white">Backend Systems</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-400">REST APIs, microservices, enterprise applications, and production-focused backend solutions.</p>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Integration</p>
          <h2 class="mt-3 text-2xl font-bold text-white">Business Workflows</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-400">Payment gateway, SAP, Odoo ERP, RFID, and internal system synchronization.</p>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Delivery</p>
          <h2 class="mt-3 text-2xl font-bold text-white">Maintainable Code</h2>
          <p class="mt-3 text-sm leading-6 text-neutral-400">Clean APIs, database optimization, containerized deployment, and scalable architecture.</p>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-6 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Selected Case Studies</p>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">Enterprise Backend Projects</h2>
        <p class="mx-auto mt-4 max-w-2xl text-neutral-400">A curated selection of backend, integration, and microservices projects built across enterprise environments.</p>
      </div>

      <PortfolioGrid :limit="6" />

      <div class="text-center">
        <NuxtLink to="/portfolio" class="text-sm font-semibold text-indigo-400 hover:underline">View all case studies →</NuxtLink>
      </div>
    </section>

    <section class="border-t border-neutral-800 bg-neutral-950 py-20">
      <div class="container mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-3xl font-bold text-white">Need a backend engineer for scalable systems?</h2>
        <p class="mt-4 text-neutral-400">I help teams design, build, and improve backend services, system integrations, microservices, and enterprise workflows.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/service" class="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">Explore Services</NuxtLink>
          <NuxtLink to="/contact" class="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">Start a Conversation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Harun Ar-Rasyid | Senior Backend Engineer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Harun Ar-Rasyid, a backend engineer specializing in scalable backend systems, REST APIs, microservices, enterprise integration, and database optimization.",
    },
  ],
})
</script>
