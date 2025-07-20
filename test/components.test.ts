import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../app.vue'

describe('Component Interactions', () => {
  describe('Button Hover States', () => {
    it('CTA buttons have hover transform effects', () => {
      const wrapper = mount(App)
      const ctaButton = wrapper.find('.bg-galah-pink.transform')
      
      expect(ctaButton.classes()).toContain('hover:-translate-y-0.5')
      expect(ctaButton.classes()).toContain('hover:shadow-lg')
    })

    it('secondary buttons have hover state changes', () => {
      const wrapper = mount(App)
      const secondaryButton = wrapper.find('.bg-galah-gray')
      
      expect(secondaryButton.classes()).toContain('hover:bg-galah-slate')
      expect(secondaryButton.classes()).toContain('text-galah-white')
    })
  })

  describe('Card Components', () => {
    it('feature cards have consistent structure', () => {
      const wrapper = mount(App)
      const featureCards = wrapper.findAll('.p-8.rounded-xl')
      
      featureCards.forEach((card: any) => {
        expect(card.classes()).toContain('shadow-sm')
        expect(card.classes()).toContain('hover:shadow-lg')
        expect(card.classes()).toContain('transition-all')
      })
    })

    it('service cards have proper spacing', () => {
      const wrapper = mount(App)
      const serviceCards = wrapper.findAll('#services .p-6')
      
      serviceCards.forEach((card: any) => {
        expect(card.classes()).toContain('p-6')
        expect(card.classes()).toContain('rounded-xl')
      })
    })
  })

  describe('Navigation Behavior', () => {
    it('navigation links use anchor navigation', () => {
      const wrapper = mount(App)
      const navLinks = wrapper.findAll('nav a[href^="#"]')
      
      expect(navLinks.length).toBeGreaterThan(0)
      navLinks.forEach((link: any) => {
        const href = link.attributes('href')
        expect(href).toMatch(/^#[a-z]+$/)
      })
    })

    it('external links open in same window', () => {
      const wrapper = mount(App)
      const emailLink = wrapper.find('a[href^="mailto:"]')
      
      // Should not have target="_blank" for mailto links
      expect(emailLink.attributes('target')).toBeUndefined()
    })
  })

  describe('Responsive Utilities', () => {
    it('navigation is hidden on mobile', () => {
      const wrapper = mount(App)
      const desktopNav = wrapper.find('.hidden.md\\:flex')
      
      expect(desktopNav.exists()).toBe(true)
      expect(desktopNav.classes()).toContain('hidden')
      expect(desktopNav.classes()).toContain('md:flex')
    })

    it('grid columns adjust for different screen sizes', () => {
      const wrapper = mount(App)
      
      // Features grid
      const featuresGrid = wrapper.find('.grid.md\\:grid-cols-3')
      expect(featuresGrid.exists()).toBe(true)
      
      // Services grid
      const servicesGrid = wrapper.find('.grid.md\\:grid-cols-2.lg\\:grid-cols-3')
      expect(servicesGrid.exists()).toBe(true)
    })
  })

  describe('Typography', () => {
    it('uses consistent font weights', () => {
      const wrapper = mount(App)
      
      const headings = wrapper.findAll('h1, h2, h3')
      headings.forEach((heading: any) => {
        const classes = heading.classes()
        // Check for either font-bold or font-semibold
        const hasFontWeight = classes.includes('font-bold') || classes.includes('font-semibold')
        expect(hasFontWeight).toBe(true)
      })
    })

    it('body text uses appropriate sizes', () => {
      const wrapper = mount(App)
      
      const paragraphs = wrapper.findAll('p')
      // At least some paragraphs should have text sizing
      const paragraphsWithSizing = paragraphs.filter((p: any) => {
        const classes = p.classes()
        return classes.some((c: string) => 
          c.startsWith('text-') && ['text-xl', 'text-2xl', 'text-lg', 'text-base', 'text-sm'].includes(c)
        )
      })
      
      // Check that we have paragraphs and at least some have explicit sizing
      expect(paragraphs.length).toBeGreaterThan(0)
      expect(paragraphsWithSizing.length).toBeGreaterThan(0)
    })
  })

  describe('Visual Hierarchy', () => {
    it('sections have consistent spacing', () => {
      const wrapper = mount(App)
      const sections = wrapper.findAll('section')
      
      sections.forEach((section: any) => {
        const classes = section.classes()
        // Should have vertical padding or margin
        const hasPadding = classes.some((c: string) => c.includes('py-') || c.includes('pt-') || c.includes('pb-'))
        expect(hasPadding).toBe(true)
      })
    })

    it('CTAs stand out visually', () => {
      const wrapper = mount(App)
      const ctaButtons = wrapper.findAll('.bg-galah-pink')
      
      ctaButtons.forEach((cta: any) => {
        // Should have sufficient padding (check for individual padding classes)
        const classes = cta.classes()
        const hasHorizontalPadding = classes.some((c: string) => c.includes('px-'))
        const hasVerticalPadding = classes.some((c: string) => c.includes('py-'))
        expect(hasHorizontalPadding && hasVerticalPadding).toBe(true)
      })
    })
  })

  describe('Background Decorations', () => {
    it('has decorative background elements', () => {
      const wrapper = mount(App)
      const bgDecoration = wrapper.find('.fixed.inset-0.pointer-events-none')
      
      expect(bgDecoration.exists()).toBe(true)
      expect(bgDecoration.classes()).toContain('-z-10')
    })

    it('background blurs are positioned correctly', () => {
      const wrapper = mount(App)
      const blurElements = wrapper.findAll('.blur-3xl')
      
      expect(blurElements.length).toBeGreaterThan(3)
      blurElements.forEach((blur: any) => {
        expect(blur.classes()).toContain('absolute')
        expect(blur.classes()).toContain('rounded-full')
      })
    })
  })
})