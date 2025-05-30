<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-black text-white"
  >
    <div class="max-w-[600px] w-full aspect-square">
      <LogoIcon class="w-full h-full" />
    </div>
    <h1 class="font-[PublicPlay] text-5xl sm:text-6xl mt-6">bitmill.dev</h1>
    <p class="mt-4 text-base sm:text-lg text-gray-400">contact@bitmill.dev</p>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from "~/components/LogoIcon.vue";
</script>
