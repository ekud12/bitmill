<template>
  <div
  class="flex min-h-[100dvh] flex-col items-center justify-center bg-black text-white"
  >
    <LogoIcon />
    <h1 class="ext-5xl text-4xl lg:text-7xl mt-6">bitmill.dev</h1>
    <p class="mt-4 text-base sm:text-lg text-gray-400">contact@bitmill.dev</p>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from "~/components/LogoIcon.vue";

 
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "bitmill.dev - Development studio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "bitmill.dev - Development studio",
    },
    { name: "theme-color", content: "#00DC82" },
    { name: "color-scheme", content: "dark light" },
    { name: "rating", content: "General" },
    { name: "classification", content: "Business, Technology" },
    { name: "category", content: "Software Development" },
  ],
});
</script>
