<template>
  <div class="logo-animated">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="102.4"
      viewBox="0 0 72 76.8"
      style="overflow: visible"
    >
      <!-- Add gradient definitions for galah colors -->
      <defs>
        <linearGradient id="galahGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" class="galah-pink-stop" />
          <stop offset="33%" class="galah-rose-stop" />
          <stop offset="66%" class="galah-pink-stop" />
          <stop offset="100%" class="galah-feather-stop" />
        </linearGradient>
        
        <linearGradient id="galahGradientAlt" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" class="galah-rose-stop" />
          <stop offset="50%" class="galah-gray-stop" />
          <stop offset="100%" class="galah-slate-stop" />
        </linearGradient>

        <!-- Add enhanced glow filter -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feGaussianBlur stdDeviation="8" result="outerGlow"/>
          <feMerge>
            <feMergeNode in="outerGlow"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path
        class="power-drop"
        d="m43.4-18.536c.976.016 1.168.04 1.488.2.448.216.696.576 1.88 2.696.12.216.376.664.568.984.192.328.344.6.344.624 0 .016.168.304.368.648s.472.8.592 1.024c.184.328.952 1.672 1.92 3.36 1.568 2.736 1.68 2.96 1.68 3.408 0 .488-.104.72-.976 2.192-.288.48-.608 1.024-.704 1.2-.24.432-1.224 2.12-2.168 3.72-.424.728-.856 1.464-.952 1.64-.192.344-1.224 2.12-2.28 3.92a54 54 0 0 0-.816 1.4c-.088.152-.448.768-.8 1.36-.344.6-.656 1.136-.688 1.2-.056.128-.128.248-.784 1.328-.664 1.104-1.016 1.096-1.68-.032-.216-.368-.392-.688-.392-.704s-.216-.392-.48-.84c-.264-.44-.48-.816-.48-.824 0-.016-.264-.48-.592-1.04-.616-1.056-.736-1.424-.648-1.96.032-.184.376-.88.816-1.624 1.088-1.864 2.288-3.92 2.384-4.072a56 56 0 0 1 1.08-1.872c.336-.568.968-1.656 1.4-2.4.752-1.296 1.408-2.416 3.08-5.28 1.496-2.552 1.624-2.792 1.624-3.064a.6.6 0 0 0-.168-.44l-.184-.176-10.416-.04c-6.128-.024-10.48-.072-10.576-.112-.512-.24-.784-.592-1.52-1.928a6 6 0 0 0-.28-.48 255 255 0 0 0-1.232-2.192c-.704-1.216-.744-1.448-.32-1.728.248-.168.256-.168 9.52-.144 5.096.016 9.776.032 10.392.048m-1.112 9.704a.64.64 0 0 1 .368.176c.256.288.232.44-.144 1.096l-.608 1.072c-.128.232-.336.592-.456.8-.12.2-.24.424-.272.488s-.128.224-.216.36a4 4 0 0 0-.216.36c-.2.424-.848 1.448-1.04 1.632-.52.52.352.488-11.104.456l-10.4-.024-.216.176c-.328.256-.296.544.152 1.312.2.36.48.848.608 1.088.136.24.384.664.552.944.168.272.304.512.304.528 0 .024.216.4.48.848s.48.824.48.84.152.288.344.616c.192.32.448.76.568.984.128.216.584 1.032 1.032 1.8l.96 1.68c.08.152.328.576.544.944.216.36.392.672.392.688 0 .024.216.4.48.848s.48.824.48.84.216.392.48.84.48.824.48.84.152.288.344.616c.504.848.768 1.312 1.12 1.984.272.528.304.648.272.976q-.06.5-.792 1.744c-.088.152-.416.712-.72 1.24-.312.528-.776 1.328-1.04 1.784-.552.936-.8 1.136-1.192.976-.216-.096-.392-.352-1.112-1.64-.184-.32-.296-.528-1.376-2.4-.328-.576-.92-1.6-1.304-2.28s-.8-1.4-.92-1.6-.32-.536-.432-.744a156 156 0 0 0-1.144-2 314 314 0 0 1-2.088-3.656c-.112-.2-.416-.712-.672-1.144-.256-.44-.464-.8-.464-.816 0-.032-.624-1.136-.792-1.4a2.2 2.2 0 0 1-.328-1.064c0-.368.248-.904 1-2.176a46 46 0 0 0 .784-1.36c.056-.088.4-.688.768-1.32 1.496-2.56 2.584-4.44 3.336-5.736.088-.136.328-.56.536-.928.456-.784.824-1.176 1.24-1.304.216-.064 3.128-.08 10.496-.056 5.608.016 10.312.048 10.448.072m-12.352 9.76c.384.2.624.512 1.248 1.632.088.152.504.888.936 1.64.432.744.848 1.472.92 1.608.08.136.568.984 1.08 1.88.52.896 1.024 1.776 1.12 1.952.104.176.504.88.896 1.568s.744 1.296.768 1.36c.032.064.136.24.224.392.32.528 1.792 3.104 2.784 4.864.728 1.296.984 1.616 1.28 1.616s.528-.264 1.136-1.32c.28-.48.552-.952.608-1.04s.128-.216.16-.28.368-.656.76-1.312c.384-.648.704-1.2.704-1.216s.208-.376.472-.808c.256-.432.944-1.616 1.528-2.624.584-1.016 1.416-2.432 1.84-3.16a286 286 0 0 0 2.448-4.216c.896-1.592 1.28-2.144 1.664-2.384l.392-.24 2.992-.024c2.928-.024 3-.016 3.272.144.224.144.272.224.272.448 0 .28-.16.6-1.192 2.336-.272.456-.488.84-.488.856s-.392.688-.864 1.496a323 323 0 0 0-2.28 3.904c-.112.2-.472.824-.808 1.384-.336.568-.608 1.04-.608 1.056 0 .008-.272.488-.608 1.048-.568.96-.88 1.504-2.792 4.792-.824 1.424-1.024 1.656-1.616 1.84-.408.128-.912.136-7.096.088-4.256-.04-6.752-.088-6.928-.144-.4-.12-.752-.488-1.208-1.248-.216-.368-.392-.68-.392-.696s-.152-.288-.344-.616c-.192-.32-.44-.744-.552-.944s-.56-.992-1-1.76-.888-1.544-.984-1.72-.512-.896-.92-1.6l-.936-1.64a1846 1846 0 0 0-3.664-6.4c-.632-1.088-.808-1.408-.96-1.744-.144-.32-.152-.368-.032-.584a.8.8 0 0 1 .296-.32c.112-.048 1.328-.056 3.208-.032 2.448.04 3.08.072 3.264.168"
        fill="none"
        stroke="url(#galahGradient)"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        filter="url(#glow)"
      />
    </svg>
  </div>
</template>

<style scoped>
/* Galah color stops for gradients */
.galah-pink-stop {
  stop-color: #e8a7b3;
}

.galah-rose-stop {
  stop-color: #c76078;
}

.galah-feather-stop {
  stop-color: #cdd0d4;
}

.galah-gray-stop {
  stop-color: #8e959f;
}

.galah-slate-stop {
  stop-color: #5b5e61;
}

/* Logo container */
.logo-animated {
  background: transparent;
  width: 96px;
  aspect-ratio: 72/76.8;
  position: relative;
}

/* Base path animation */
.logo-animated path {
  stroke-width: 2;
  stroke-dasharray: 1480;
  stroke-dashoffset: 1480;
  animation: drawLogo 3s ease forwards;
  filter: drop-shadow(0 0 12px rgba(232, 167, 179, 0.8)) 
          drop-shadow(0 0 4px rgba(199, 96, 120, 1));
}

/* Draw animation */
@keyframes drawLogo {
  to {
    stroke-dashoffset: 0;
  }
}

/* Option 1: Galah Pulse */
.logo-animated path.galah-pulse {
  animation: drawLogo 3s ease forwards, galahPulse 3s ease-in-out infinite;
}

@keyframes galahPulse {
  0%, 100% {
    filter: drop-shadow(0 0 4px rgba(232, 167, 179, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(199, 96, 120, 0.8)) 
            drop-shadow(0 0 40px rgba(232, 167, 179, 0.4));
  }
}

/* Option 2: Subtle Glow */
.logo-animated path.subtle-glow {
  animation: drawLogo 3s ease forwards, subtleGlow 4s ease-in-out infinite;
}

@keyframes subtleGlow {
  0%, 100% {
    filter: drop-shadow(0 0 6px rgba(232, 167, 179, 0.5));
  }
  25% {
    filter: drop-shadow(0 0 10px rgba(199, 96, 120, 0.7));
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(142, 149, 159, 0.6));
  }
  75% {
    filter: drop-shadow(0 0 12px rgba(205, 208, 212, 0.5));
  }
}

/* Option 3: Galah Color Morph */
.logo-animated path.galah-morph {
  animation: drawLogo 3s ease forwards, galahMorph 8s ease-in-out infinite;
}

@keyframes galahMorph {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(232, 167, 179, 0.6)) 
            drop-shadow(0 0 2px rgba(199, 96, 120, 0.8));
  }
  20% {
    filter: drop-shadow(0 0 10px rgba(199, 96, 120, 0.8)) 
            drop-shadow(0 0 4px rgba(232, 167, 179, 0.6));
  }
  40% {
    filter: drop-shadow(0 0 8px rgba(142, 149, 159, 0.7)) 
            drop-shadow(0 0 3px rgba(91, 94, 97, 0.5));
  }
  60% {
    filter: drop-shadow(0 0 12px rgba(205, 208, 212, 0.6)) 
            drop-shadow(0 0 4px rgba(142, 149, 159, 0.5));
  }
  80% {
    filter: drop-shadow(0 0 10px rgba(91, 94, 97, 0.5)) 
            drop-shadow(0 0 6px rgba(232, 167, 179, 0.7));
  }
}

/* Default power-drop animation with galah colors */
.logo-animated path.power-drop {
  animation: drawLogo 4s ease forwards, galahPowerDrop 12s ease-in-out infinite;
}

@keyframes galahPowerDrop {
  0% {
    opacity: 1;
    filter: drop-shadow(0 0 8px rgba(232, 167, 179, 0.6));
  }
  15% {
    filter: drop-shadow(0 0 12px rgba(199, 96, 120, 0.8));
  }
  30% {
    filter: drop-shadow(0 0 10px rgba(142, 149, 159, 0.7));
  }
  45% {
    filter: drop-shadow(0 0 15px rgba(232, 167, 179, 0.9));
  }

  /* Power drop effect */
  50% {
    opacity: 0.9;
  }
  51% {
    opacity: 0.3;
    filter: drop-shadow(0 0 4px rgba(91, 94, 97, 0.3));
  }
  52% {
    opacity: 0;
  }

  /* Flicker back with color surge */
  53% {
    opacity: 0.2;
    filter: drop-shadow(0 0 20px rgba(232, 167, 179, 1));
  }
  54% {
    opacity: 0.9;
    filter: drop-shadow(0 0 30px rgba(199, 96, 120, 1));
  }
  55% {
    opacity: 0.1;
  }
  56% {
    opacity: 1;
    filter: drop-shadow(0 0 25px rgba(232, 167, 179, 0.9));
  }
  57% {
    opacity: 0.5;
  }
  58% {
    opacity: 1;
    filter: drop-shadow(0 0 15px rgba(199, 96, 120, 0.8));
  }

  70% {
    filter: drop-shadow(0 0 10px rgba(205, 208, 212, 0.6));
  }
  85% {
    filter: drop-shadow(0 0 8px rgba(142, 149, 159, 0.7));
  }
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 8px rgba(232, 167, 179, 0.6));
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .logo-animated path {
    stroke-width: 2;
    filter: none !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .logo-animated path {
    animation: drawLogo 3s ease forwards !important;
  }
}


</style>
