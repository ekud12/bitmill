<template>
  <div
    class="app-bg min-h-[100dvh] flex items-center justify-center text-white px-4"
  >
    <div class="text-center max-w-screen-md w-full">
      <LogoIcon class="mx-auto" />
      <h1 class="text-4xl sm:text-5xl lg:text-7xl mt-6 font-semibold">
        bitmill.dev
      </h1>
      <p
        class="mt-6 text-base sm:text-xb lg:text-2xl text-gray-400 leading-relaxed"
      >
        For inqueries, or just to make your backlog cry:
        <a
          class="email-link"
          href="mailto:contact@bitmill.dev"
        >
          contact@bitmill.dev
        </a>
      </p>
    </div>
    <div ref="sparkleContainer" class="sparkle-container" />
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

const sparkleContainer = ref<HTMLElement | null>(null);
const SPARKLE_COUNT = 30;

onMounted(() => {
  const container = sparkleContainer.value;
  if (!container) return;

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    const size = Math.random() * 3 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 10;

    sparkle.style.position = "absolute";
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.top = `${y}%`;
    sparkle.style.left = `${x}%`;
    sparkle.style.background = "#00dc82";
    sparkle.style.opacity = "0";
    sparkle.style.borderRadius = "50%";
    sparkle.style.boxShadow = `0 0 6px 2px rgba(255,255,255,0.15)`;
    sparkle.style.animationName = "shimmer";
    sparkle.style.animationDuration = "2.8s";
    sparkle.style.animationTimingFunction = "ease-in-out";
    sparkle.style.animationIterationCount = "infinite";
    sparkle.style.animationDelay = `${delay}s`;
    container.appendChild(sparkle);
  }
});
</script>

<style scoped>
.email-link {
  position: relative;
  color: transparent;
  background-image: linear-gradient(90deg, #00dc82, #a6ff00);
  background-clip: text;
  -webkit-background-clip: text;
  transition: background-position 0.5s ease;
  background-size: 200% 100%;
  background-position: left;
  text-decoration: none;
}

.email-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #00dc25, #a6ff00);
  transition: transform 0.4s ease;
  transform: scaleX(0);
  transform-origin: left;
}

.email-link:hover {
  background-position: right;
}

.email-link:hover::after {
  transform: scaleX(1);
}
.app-bg {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at 30% 30%, #111 0%, #000 100%);
  overflow: hidden;
  isolation: isolate;
  z-index: 0;
}

/* Polygonal glow mesh */
.app-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      115deg,
      rgba(0, 220, 130, 0.07) 1px,
      transparent 1px
    ),
    linear-gradient(60deg, rgba(41, 171, 226, 0.07) 1px, transparent 1px),
    radial-gradient(
      circle at 40% 60%,
      rgba(0, 220, 130, 0.06) 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 70% 20%,
      rgba(41, 171, 226, 0.04) 0%,
      transparent 60%
    );
  background-size: 80px 80px, 80px 80px, cover, cover;
  background-position: center;
  opacity: 0.8;
  z-index: -2;
  pointer-events: none;
  mask-image: radial-gradient(circle at 50% 50%, black 60%, transparent 100%);
}

.sparkle-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.sparkle {
  position: absolute;
  background: white;
  opacity: 0;
  border-radius: 50%;
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.2);
  animation: shimmer 2.4s ease-in-out infinite;
}
</style>
<style>
@keyframes shimmer {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.4);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.2);
  }
}
</style>
