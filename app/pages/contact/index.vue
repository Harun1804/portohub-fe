<template>
  <main class="pt-24 pb-20">
    <div class="container mx-auto px-6">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-indigo-400">Contact</p>
        <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Let’s Build Reliable Backend Systems.</h1>
        <p class="mt-4 text-lg text-neutral-400">Open to backend engineering opportunities, freelance collaboration, and enterprise system integration projects.</p>
      </div>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="space-y-8">
          <div class="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm">
            <h3 class="mb-8 text-2xl font-bold text-white">Contact Information</h3>

            <ul class="space-y-6">
              <li class="flex items-start">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">@</div>
                <div class="ml-5">
                  <p class="text-sm font-medium uppercase tracking-wider text-neutral-500">Email</p>
                  <a :href="`mailto:${PROFILE.email}`" class="mt-1 text-lg font-semibold text-white transition-colors hover:text-indigo-400">{{ PROFILE.email }}</a>
                </div>
              </li>

              <li class="flex items-start">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">⌖</div>
                <div class="ml-5">
                  <p class="text-sm font-medium uppercase tracking-wider text-neutral-500">Location</p>
                  <p class="mt-1 text-lg font-semibold text-white">{{ PROFILE.location }}</p>
                  <p class="text-sm text-neutral-400">Available for remote collaboration</p>
                </div>
              </li>
            </ul>

            <hr class="my-8 border-neutral-800" />

            <div>
              <p class="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-500">Professional Links</p>
              <div class="flex flex-wrap gap-3">
                <a :href="PROFILE.linkedin" target="_blank" rel="noreferrer" class="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-indigo-600 hover:text-white">LinkedIn</a>
                <a :href="PROFILE.github" target="_blank" rel="noreferrer" class="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-indigo-600 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form @submit.prevent="submitForm" class="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-400">Full Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-600 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="mb-2 block text-sm font-medium text-neutral-400">Email Address</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-600 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-400">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-600 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Backend engineering opportunity"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-400">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-600 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Tell me about the role, project, or system you want to build..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
            </button>

            <p v-if="showSuccess" class="mt-4 text-center text-sm text-emerald-400">✓ Your message has been prepared successfully.</p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { PROFILE } from "~/data/profile";

useHead({ title: "Contact | Harun Ar-Rasyid" });

const form = ref({ name: "", email: "", subject: "", message: "" });
const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;

  try {
    const response = await $fetch("http://localhost:8080/api/contact", {
      method: "POST",
      body: form.value,
    });

    if (response && (response.status === true || response.code === 201 || response.success === true)) {
      showSuccess.value = true;
      form.value = { name: "", email: "", subject: "", message: "" }; // Reset Form
    }
  } catch (error) {
    console.error("Gagal mengirim pesan:", error);
    alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
  } finally {
    isSubmitting.value = false;
    // Hilangkan pesan sukses setelah 5 detik
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  }
};
</script>
