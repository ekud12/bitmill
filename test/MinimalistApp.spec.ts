import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '~/app.vue'
import LogoIcon from '~/components/LogoIcon.vue'

describe('Minimalist App Component', () => {
  const createWrapper = () => {
    return mount(App, {
      global: {
        components: {
          LogoIcon
        },
        stubs: {
          LogoIcon: true
        }
      }
    })
  }

  describe('Core Structure', () => {
    it('renders the main container', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      expect(wrapper.find('.min-h-screen').exists()).toBe(true)
      expect(wrapper.find('.bg-galah-white').exists()).toBe(true)
    })

    it('has proper main element with accessibility attributes', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const main = wrapper.find('main#main')
      expect(main.exists()).toBe(true)
      expect(main.attributes('role')).toBe('main')
    })
  })

  describe('Accessibility Features', () => {
    it('includes skip to main content link', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const skipLink = wrapper.find('a[href="#main"]')
      expect(skipLink.exists()).toBe(true)
      expect(skipLink.classes()).toContain('sr-only')
      expect(skipLink.text()).toBe('Skip to main content')
    })

    it('has screen reader status message', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const status = wrapper.find('[role="status"]')
      expect(status.exists()).toBe(true)
      expect(status.attributes('aria-live')).toBe('polite')
      expect(status.classes()).toContain('sr-only')
    })

    it('marks decorative elements as aria-hidden', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const particleContainer = wrapper.find('.fixed.inset-0.pointer-events-none')
      expect(particleContainer.attributes('aria-hidden')).toBe('true')
    })
  })

  describe('Logo Component', () => {
    it('renders logo with proper accessibility attributes', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const logoContainer = wrapper.find('[role="img"]')
      expect(logoContainer.exists()).toBe(true)
      expect(logoContainer.attributes('aria-label')).toBe('bitmill logo')
    })

    it('applies scale transformation to logo', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const logoWrapper = wrapper.find('.scale-150')
      expect(logoWrapper.exists()).toBe(true)
    })
  })

  describe('Text Content', () => {
    it('displays main heading', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const heading = wrapper.find('h1')
      expect(heading.exists()).toBe(true)
      expect(heading.text()).toBe('GPU ACCELERATED')
      expect(heading.classes()).toContain('text-reveal')
    })

    it('displays subtitle', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const subtitle = wrapper.find('h2')
      expect(subtitle.text()).toBe('Developer Tools')
      expect(subtitle.classes()).toContain('text-reveal-delay-1')
    })

    it('displays descriptive content', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const paragraphs = wrapper.findAll('.text-reveal-delay-2 p')
      expect(paragraphs.length).toBeGreaterThan(0)
      expect(paragraphs[0].text()).toContain('Harness the full power of modern GPUs')
    })

    it('shows typewriter animation elements', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const typewriterContainer = wrapper.find('.typewriter-text')
      expect(typewriterContainer.exists()).toBe(true)
      expect(typewriterContainer.classes()).toContain('text-galah-pink')
      expect(typewriterContainer.classes()).toContain('uppercase')
      
      const typewriterContent = wrapper.find('.typewriter-content')
      expect(typewriterContent.exists()).toBe(true)
      
      const typewriterCursor = wrapper.find('.typewriter-cursor')
      expect(typewriterCursor.exists()).toBe(true)
      expect(typewriterCursor.text()).toBe('|')
    })
  })

  describe('Visual Effects', () => {
    it('renders geometric vector background', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const svgs = wrapper.findAll('svg')
      expect(svgs.length).toBeGreaterThan(0)
      
      // Find the background SVG specifically
      const backgroundSvg = svgs.find(svg => svg.classes().includes('fixed'))
      expect(backgroundSvg?.exists()).toBe(true)
    })

    it('applies white background with select-none', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const container = wrapper.find('.min-h-screen')
      expect(container.classes()).toContain('bg-galah-white')
      expect(container.classes()).toContain('select-none')
    })

    it('uses black text for heading', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const heading = wrapper.find('h1')
      expect(heading.classes()).toContain('text-black')
      expect(heading.classes()).toContain('font-bold')
    })
  })

  describe('Responsive Design', () => {
    it('applies responsive text sizes', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const heading = wrapper.find('h1')
      expect(heading.classes()).toContain('text-6xl')
      expect(heading.classes()).toContain('md:text-8xl')
      
      const subtitle = wrapper.find('h2')
      expect(subtitle.classes()).toContain('text-3xl')
      expect(subtitle.classes()).toContain('md:text-4xl')
    })

    it('has responsive padding', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const textContainer = wrapper.find('.max-w-4xl')
      expect(textContainer.classes()).toContain('px-8')
    })
  })

  describe('Meta Information', () => {
    it('calls useHead with correct SEO data', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      expect(global.useHead).toHaveBeenCalledWith({
        title: 'bitmill - GPU Accelerated Development Tools',
        meta: expect.arrayContaining([
          { name: 'description', content: 'Next-generation GPU-accelerated build tools. 10x faster builds with zero compromise. Coming 2025.' },
          { name: 'theme-color', content: '#5b5e61' },
          { property: 'og:title', content: 'bitmill - GPU Accelerated Development Tools' },
          { property: 'og:description', content: 'Next-generation GPU-accelerated build tools. 10x faster builds with zero compromise.' },
          { name: 'twitter:card', content: 'summary_large_image' }
        ])
      })
    })
  })

  describe('Contact Section', () => {
    it('renders contact email link', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const contactLink = wrapper.find('a[href="mailto:contact@bitmill.dev"]')
      expect(contactLink.exists()).toBe(true)
      expect(contactLink.text()).toContain('contact@bitmill.dev')
    })

    it('has proper contact section styling', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const contactContainer = wrapper.find('.contact-fade-in')
      expect(contactContainer.exists()).toBe(true)
      expect(contactContainer.classes()).toContain('rounded-full')
    })

    it('includes pulse dot animation', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      
      const pulseDot = wrapper.find('.pulse-dot')
      expect(pulseDot.exists()).toBe(true)
      expect(pulseDot.classes()).toContain('bg-galah-pink')
    })
  })
})