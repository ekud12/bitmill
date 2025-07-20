<template>
  <div class="min-h-screen bg-galah-white flex items-center justify-center overflow-hidden select-none relative">
    <!-- Skip to main content link for screen readers -->
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-galah-rose text-white px-4 py-2 rounded z-50">Skip to main content</a>

    <main id="main" role="main" class="relative z-10 flex flex-col items-center justify-center">
      <!-- Logo Component centered -->
      <div class="scale-150 flex justify-center" role="img" aria-label="bitmill logo">
        <LogoIcon />
      </div>

      <!-- Revealing Text with proper accessibility and fixed colors -->
      <div class="text-center space-y-8 max-w-4xl mx-auto px-8">
        <div class="space-y-4">
          <h1 class="text-reveal text-6xl md:text-8xl font-bold text-black leading-tight">
            GPU ACCELERATED
          </h1>
          <h2 class="text-reveal-delay-1 text-3xl md:text-4xl font-semibold text-black">
            Developer Tools
          </h2>
        </div>

        <div class="space-y-6 text-reveal-delay-2">
          <p class="text-xl md:text-2xl text-black font-medium">
            Harness the full power of modern GPUs for lightning-fast builds,
            real-time code analysis, and seamless development workflows.
          </p>
          <p class="text-lg md:text-xl text-black opacity-80">
            Experience 10x faster compilation, instant hot-reloading,
            and AI-powered code optimization — all running on your GPU.
          </p>
        </div>

        <div class="text-reveal-delay-3 pt-4">
          <span class="text-xl text-galah-pink tracking-widest uppercase font-bold typewriter-text">
            <span class="typewriter-content"></span>
            <span class="typewriter-cursor">|</span>
          </span>
        </div>

        <!-- Accessible loading indicator for screen readers -->
        <div role="status" aria-live="polite" class="sr-only">
          <span>GPU accelerated build tools coming in 2025</span>
        </div>
      </div>
    </main>

    <!-- Elegant Contact Section -->
    <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="contact-fade-in relative overflow-hidden bg-galah-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-galah-pink/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
        <!-- Fill animation background -->
        <div class="fill-animation absolute inset-0 rounded-full"></div>
        
        <a href="mailto:contact@bitmill.dev" 
           class="relative flex items-center space-x-3 text-galah-slate group-hover:text-white transition-colors duration-700 font-medium">
          <div class="w-2 h-2 bg-galah-pink rounded-full pulse-dot"></div>
          <span class="text-sm font-medium tracking-wide">contact@bitmill.dev</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M7 8l4-4m0 0l4 4m-4-4v18"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Geometric Vector Background -->
    <svg class="fixed inset-0 w-full h-full pointer-events-none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="2" fill="#e8a7b3" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="20" r="1.5" fill="#c76078" opacity="0.4"/>
          <circle cx="80" cy="80" r="1" fill="#e8a7b3" opacity="0.5"/>
        </pattern>

        <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,5 45,15 45,35 30,45 15,35 15,15"
                   fill="none" stroke="#e8a7b3" stroke-width="0.5" opacity="0.2"/>
        </pattern>
      </defs>

      <!-- Circuit board style background -->
      <rect width="100%" height="100%" fill="url(#circuitPattern)"/>

      <!-- Hexagonal grid overlay -->
      <rect width="100%" height="100%" fill="url(#hexPattern)"/>

      <!-- Floating geometric shapes -->
      <g class="floating-shapes">
        <!-- Large hexagon -->
        <polygon points="200,150 250,180 250,240 200,270 150,240 150,180"
                 fill="none" stroke="#c76078" stroke-width="2" opacity="0.15">
          <animateTransform attributeName="transform"
                          type="rotate"
                          values="0 200 210;360 200 210"
                          dur="20s"
                          repeatCount="indefinite"/>
        </polygon>

        <!-- Medium triangle -->
        <polygon points="800,100 850,180 750,180"
                 fill="#e8a7b3" opacity="0.1">
          <animateTransform attributeName="transform"
                          type="translate"
                          values="0,0;-50,30;0,0"
                          dur="15s"
                          repeatCount="indefinite"/>
        </polygon>

        <!-- Small circles -->
        <circle cx="100" cy="400" r="15" fill="#c76078" opacity="0.2">
          <animate attributeName="cy" values="400;350;400" dur="8s" repeatCount="indefinite"/>
        </circle>

        <circle cx="900" cy="500" r="10" fill="#e8a7b3" opacity="0.25">
          <animate attributeName="cx" values="900;950;900" dur="10s" repeatCount="indefinite"/>
        </circle>

        <!-- Rectangle -->
        <rect x="70" y="80" width="40" height="20" fill="none" stroke="#c76078" stroke-width="1" opacity="0.2">
          <animateTransform attributeName="transform"
                          type="rotate"
                          values="0 90 90;180 90 90;0 90 90"
                          dur="12s"
                          repeatCount="indefinite"/>
        </rect>

        <!-- Tech lines -->
        <line x1="0" y1="200" x2="200" y2="200" stroke="#e8a7b3" stroke-width="1" opacity="0.1">
          <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="6s" repeatCount="indefinite"/>
        </line>

        <line x1="800" y1="300" x2="1000" y2="350" stroke="#c76078" stroke-width="1" opacity="0.15">
          <animate attributeName="stroke-dasharray" values="0,200;150,50;0,200" dur="8s" repeatCount="indefinite"/>
        </line>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '~/components/LogoIcon.vue'
import { onMounted } from 'vue'

// Page metadata with proper SEO
useHead({
  title: 'bitmill - GPU Accelerated Development Tools',
  meta: [
    { name: 'description', content: 'Next-generation GPU-accelerated build tools. 10x faster builds with zero compromise. Coming 2025.' },
    { name: 'theme-color', content: '#5b5e61' },
    { property: 'og:title', content: 'bitmill - GPU Accelerated Development Tools' },
    { property: 'og:description', content: 'Next-generation GPU-accelerated build tools. 10x faster builds with zero compromise.' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Infinite typewriter effect
onMounted(() => {
  const typewriterElement = document.querySelector('.typewriter-content') as HTMLElement
  const cursor = document.querySelector('.typewriter-cursor') as HTMLElement
  
  if (!typewriterElement || !cursor) return
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    // Show static text immediately for reduced motion
    typewriterElement.textContent = 'COMING 2025'
    cursor.style.opacity = '0'
    return
  }
  
  // Array of sentences to cycle through
  const sentences = [
    'COMING 2025',
    'GPU ACCELERATION',
    'LIGHTNING FAST BUILDS',
    '10X PERFORMANCE',
    'ZERO COMPROMISE',
    'NEXT GENERATION TOOLS'
  ]
  
  let currentSentenceIndex = 0
  let isDeleting = false
  let currentText = ''
  let charIndex = 0
  
  function typeWriter() {
    const currentSentence = sentences[currentSentenceIndex]
    
    if (!isDeleting) {
      // Typing phase
      currentText = currentSentence.slice(0, charIndex + 1)
      charIndex++
      
      if (charIndex > currentSentence.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => {
          isDeleting = true
          typeWriter()
        }, 2000) // Pause at end of sentence
        return
      }
    } else {
      // Deleting phase
      currentText = currentSentence.slice(0, charIndex - 1)
      charIndex--
      
      if (charIndex === 0) {
        // Finished deleting, move to next sentence
        isDeleting = false
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length
        setTimeout(() => {
          typeWriter()
        }, 500) // Pause before starting next sentence
        return
      }
    }
    
    typewriterElement.textContent = currentText
    
    // Variable speed: slower when typing, faster when deleting
    const speed = isDeleting ? 100 : 150
    setTimeout(typeWriter, speed)
  }
  
  // Start typewriter effect after delay to match text-reveal-delay-3
  setTimeout(() => {
    typeWriter()
  }, 3000) // 3s delay to match text-reveal-delay-3
})
</script>

<style scoped>
/* Text reveal animations with staggered delays */
@keyframes textReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-reveal {
  animation: textReveal 1.5s ease-out forwards;
}

.text-reveal-delay-1 {
  opacity: 0;
  animation: textReveal 1.5s ease-out 0.5s forwards;
}

.text-reveal-delay-2 {
  opacity: 0;
  animation: textReveal 1.5s ease-out 1s forwards;
}

.text-reveal-delay-3 {
  opacity: 0;
  animation: textReveal 1.5s ease-out 1.5s forwards;
}

/* Particle animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(30px) translateX(-20px);
  }
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.6;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: float 20s infinite ease-in-out;
}

.particle-2 {
  top: 60%;
  right: 15%;
  animation: float 25s infinite ease-in-out reverse;
}

.particle-3 {
  bottom: 30%;
  left: 30%;
  animation: float 30s infinite ease-in-out;
}

.particle-4 {
  top: 40%;
  right: 40%;
  animation: float 22s infinite ease-in-out reverse;
}

.particle-5 {
  bottom: 20%;
  right: 25%;
  animation: float 28s infinite ease-in-out;
}

/* Enhanced focus styles for accessibility */
a:focus,
button:focus {
  outline: 3px solid #c76078;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Contact section animations */
.contact-fade-in {
  animation: contactFadeIn 2s ease-out 2s forwards;
  opacity: 0;
}

@keyframes contactFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fill animation for contact button */
.fill-animation {
  background: linear-gradient(to right, #e8a7b3, #c76078);
  transform: scaleX(0);
  transform-origin: left;
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease;
}

.group:hover .fill-animation {
  transform: scaleX(1);
  opacity: 0.9;
}

.pulse-dot {
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
}

/* Typewriter animation */
.typewriter-text {
  position: relative;
}

.typewriter-content {
  display: inline-block;
}

.typewriter-cursor {
  display: inline-block;
  animation: blink 1s infinite;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Reduced motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Disable SVG animations for reduced motion */
  svg animate,
  svg animateTransform {
    animation-play-state: paused !important;
  }

  .text-reveal,
  .text-reveal-delay-1,
  .text-reveal-delay-2,
  .text-reveal-delay-3,
  .contact-fade-in,
  .pulse-dot,
  .typewriter-cursor,
  .fill-animation {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  
  /* Show full text immediately for reduced motion */
  .typewriter-content {
    opacity: 1 !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .particle {
    opacity: 1;
    background-color: currentColor !important;
  }
}
</style>