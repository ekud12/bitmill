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
  title: "bitmill.dev – Development Studio",
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
    },
    {
      name: "description",
      content:
        "Custom software engineering by bitmill.dev – specialists in full-stack, cloud-native, and AI-powered development solutions.",
    },
    {
      name: "keywords",
      content:
        "software development, AI engineering, cloud services, full-stack, bitmill, bitmill.dev, TypeScript, Node.js, .NET, Nuxt, web development",
    },
    {
      name: "author",
      content: "bitmill.dev",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#00DC82",
    },
    {
      name: "color-scheme",
      content: "dark light",
    },
    {
      name: "rating",
      content: "general",
    },
    {
      name: "classification",
      content: "Business, Technology, Software",
    },
    {
      name: "category",
      content: "Software Development",
    },
    {
      property: "og:title",
      content: "bitmill.dev – Development Studio",
    },
    {
      property: "og:description",
      content:
        "Engineering custom software, cloud-native apps, and AI integrations. Built by bitmill.dev.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://bitmill.dev",
    },
    {
      property: "og:image",
      content: "https://bitmill.dev/og-image.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "bitmill.dev – Development Studio",
    },
    {
      name: "twitter:description",
      content:
        "We build scalable apps, fast. AI, cloud, and engineering with no fluff.",
    },
    {
      name: "twitter:image",
      content: "https://bitmill.dev/og-image.jpg",
    },
  ],
});
</script>
