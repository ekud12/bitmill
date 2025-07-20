import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../app.vue'

describe('App Landing Page', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        stubs: {
          // Stub any child components if needed
        }
      }
    })
  })

  describe('Header Section', () => {
    it('renders the header with navigation', () => {
      const header = wrapper.find('header')
      expect(header.exists()).toBe(true)
      expect(header.classes()).toContain('fixed')
      expect(header.classes()).toContain('z-50')
    })

    it('displays the bitmill brand name', () => {
      const brand = wrapper.find('.text-2xl.font-bold')
      expect(brand.text()).toBe('bitmill')
      expect(brand.classes()).toContain('text-galah-white')
    })

    it('renders navigation links', () => {
      const navLinks = wrapper.findAll('nav a')
      expect(navLinks.length).toBeGreaterThan(0)
      
      const aboutLink = navLinks.find((link: any) => link.text() === 'About')
      expect(aboutLink?.attributes('href')).toBe('#about')
      
      const servicesLink = navLinks.find((link: any) => link.text() === 'Services')
      expect(servicesLink?.attributes('href')).toBe('#services')
    })

    it('has a contact CTA button in header', () => {
      const contactBtn = wrapper.find('nav .bg-galah-pink')
      expect(contactBtn.exists()).toBe(true)
      expect(contactBtn.text()).toBe('Contact')
    })
  })

  describe('Hero Section', () => {
    it('displays the main heading with updated content', () => {
      const heading = wrapper.find('h1')
      expect(heading.exists()).toBe(true)
      expect(heading.text()).toContain('Accelerate Your')
      expect(heading.text()).toContain('Development Workflow')
      expect(heading.classes()).toContain('text-5xl')
    })

    it('displays the updated tagline', () => {
      const tagline = wrapper.find('section p.text-xl')
      expect(tagline.exists()).toBe(true)
      expect(tagline.text()).toContain('GPU technology')
    })

    it('renders two CTA buttons', () => {
      const heroSection = wrapper.findAll('section')[0]
      const buttons = heroSection.findAll('button')
      expect(buttons.length).toBe(2)
      
      expect(buttons[0].text()).toBe('Start Your Project')
      expect(buttons[0].classes()).toContain('bg-galah-pink')
      
      expect(buttons[1].text()).toBe('View Our Work')
      expect(buttons[1].classes()).toContain('bg-galah-gray')
    })
  })

  describe('Features Section', () => {
    it('displays the features heading', () => {
      const featuresHeading = wrapper.findAll('h2').find((h2: any) => h2.text() === 'What We Offer')
      expect(featuresHeading).toBeDefined()
    })

    it('renders three feature cards', () => {
      const featureCards = wrapper.findAll('.p-8.rounded-xl')
      expect(featureCards.length).toBe(3)
    })

    it('each feature card has correct structure', () => {
      const featureCards = wrapper.findAll('.bg-white.p-8.rounded-xl')
      
      featureCards.forEach((card: any) => {
        const icon = card.find('.w-12.h-12')
        const title = card.find('h3')
        const description = card.find('p')
        
        expect(icon.exists()).toBe(true)
        expect(title.exists()).toBe(true)
        expect(description.exists()).toBe(true)
      })
    })

    it('feature cards have hover effects', () => {
      const featureCard = wrapper.find('.p-8.rounded-xl')
      expect(featureCard.classes()).toContain('hover:shadow-lg')
      expect(featureCard.classes()).toContain('transition-all')
    })
  })

  describe('About Section', () => {
    it('has correct section ID for navigation', () => {
      const aboutSection = wrapper.find('#about')
      expect(aboutSection.exists()).toBe(true)
    })

    it('displays the about heading', () => {
      const aboutHeading = wrapper.findAll('h2').find((h2: any) => 
        h2.text().includes('Revolutionizing Build Performance')
      )
      expect(aboutHeading).toBeDefined()
    })

    it('shows company statistics', () => {
      const stats = wrapper.findAll('.text-3xl.font-bold')
      expect(stats.length).toBeGreaterThanOrEqual(3)
      
      // Check for the new statistics
      const statsText = stats.map((stat: any) => stat.text())
      expect(statsText).toContain('10x')
      expect(statsText).toContain('GPU')
      expect(statsText).toContain('24/7')
    })

    it('has descriptive text for each statistic', () => {
      const grayDescriptions = wrapper.findAll('#about .text-galah-gray')
      const slateDescriptions = wrapper.findAll('#about .text-galah-slate')
      const allDescriptions = [...grayDescriptions, ...slateDescriptions].map((el: any) => el.text())
      
      expect(allDescriptions).toContain('Faster Builds')
      expect(allDescriptions).toContain('Powered')
      expect(allDescriptions.some((desc: string) => desc.includes('Support'))).toBe(true)
    })
  })

  describe('Services Section', () => {
    it('has correct section ID for navigation', () => {
      const servicesSection = wrapper.find('#services')
      expect(servicesSection.exists()).toBe(true)
    })

    it('displays the services heading', () => {
      const servicesHeading = wrapper.findAll('h2').find((h2: any) => h2.text() === 'Coming Soon')
      expect(servicesHeading).toBeDefined()
    })

    it('renders six service cards', () => {
      const serviceCards = wrapper.findAll('#services .p-6.rounded-xl')
      expect(serviceCards.length).toBe(6)
    })

    it('service cards have correct content structure', () => {
      const serviceCards = wrapper.findAll('#services .bg-white.p-6.rounded-xl')
      const expectedServices = [
        'Build Acceleration',
        'Cloud Integration',
        'Developer Analytics',
        'Team Collaboration',
        'Enterprise Security',
        'Early Access'
      ]
      
      serviceCards.forEach((card: any, index: number) => {
        const title = card.find('h3')
        const description = card.find('p')
        const link = card.find('a')
        
        expect(title.exists()).toBe(true)
        expect(title.text()).toBe(expectedServices[index])
        expect(description.exists()).toBe(true)
        const statusSpan = card.find('span')
        expect(statusSpan.exists()).toBe(true)
        // Status spans should contain either 2024 or Limited Spots
        const text = statusSpan.text()
        expect(text === 'Coming 2024' || text === 'Limited Spots').toBe(true)
      })
    })
  })

  describe('Contact Section', () => {
    it('has correct section ID for navigation', () => {
      const contactSection = wrapper.find('#contact')
      expect(contactSection.exists()).toBe(true)
    })

    it('displays the contact heading', () => {
      const contactHeading = wrapper.findAll('h2').find((h2: any) => 
        h2.text().includes('Join the Future of Development')
      )
      expect(contactHeading).toBeDefined()
    })

    it('shows contact email link', () => {
      const emailLink = wrapper.find('a[href="mailto:contact@bitmill.dev"]')
      expect(emailLink.exists()).toBe(true)
      expect(emailLink.text()).toContain('Get Early Access')
    })

    it('email link has proper styling', () => {
      const emailLink = wrapper.find('a[href="mailto:contact@bitmill.dev"]')
      expect(emailLink.classes()).toContain('bg-galah-pink')
      expect(emailLink.classes()).toContain('hover:bg-galah-rose')
    })
  })

  describe('Footer', () => {
    it('renders the footer', () => {
      const footer = wrapper.find('footer')
      expect(footer.exists()).toBe(true)
    })

    it('displays copyright text', () => {
      const footer = wrapper.find('footer')
      expect(footer.text()).toContain('© 2024 bitmill.dev')
      expect(footer.text()).toContain('Accelerating Development with GPU Technology')
    })
  })

  describe('Responsive Design', () => {
    it('uses responsive classes for mobile', () => {
      // Check for responsive utility classes
      const responsiveElements = wrapper.findAll('[class*="md:"], [class*="lg:"], [class*="sm:"]')
      expect(responsiveElements.length).toBeGreaterThan(0)
    })

    it('hero heading has responsive text sizes', () => {
      const heading = wrapper.find('h1')
      expect(heading.classes()).toContain('text-5xl')
      expect(heading.classes()).toContain('md:text-7xl')
    })

    it('grid layouts are responsive', () => {
      const grids = wrapper.findAll('[class*="grid"]')
      const responsiveGrids = grids.filter((el: any) => 
        el.classes().some((c: string) => c.includes('md:grid-cols') || c.includes('lg:grid-cols'))
      )
      expect(responsiveGrids.length).toBeGreaterThan(0)
    })
  })

  describe('Color Palette Usage', () => {
    it('uses all galah color palette classes', () => {
      const html = wrapper.html()
      
      // Check for all galah colors being used
      expect(html).toContain('galah-rose')
      expect(html).toContain('galah-pink')
      expect(html).toContain('galah-slate')
      expect(html).toContain('galah-gray')
      expect(html).toContain('galah-white')
      expect(html).toContain('galah-feather')
    })
    
    it('uses each color in multiple contexts', () => {
      const html = wrapper.html()
      
      // Rose should be used in buttons, text, and backgrounds
      const roseMatches = html.match(/galah-rose/g)
      expect(roseMatches).toBeTruthy()
      expect(roseMatches!.length).toBeGreaterThan(3)
      
      // Pink should be used prominently in buttons, backgrounds, and accents
      const pinkMatches = html.match(/galah-pink/g)
      expect(pinkMatches).toBeTruthy()
      expect(pinkMatches!.length).toBeGreaterThan(8)
      
      // Slate should be used for text and borders
      const slateMatches = html.match(/galah-slate/g)
      expect(slateMatches).toBeTruthy()
      expect(slateMatches!.length).toBeGreaterThan(5)
      
      // Gray should be used prominently for headings, navigation, and text
      const grayMatches = html.match(/galah-gray/g)
      expect(grayMatches).toBeTruthy()
      expect(grayMatches!.length).toBeGreaterThan(15)
      
      // White should be used for backgrounds
      const whiteMatches = html.match(/galah-white/g)
      expect(whiteMatches).toBeTruthy()
      expect(whiteMatches!.length).toBeGreaterThan(2)
      
      // Feather should be used for subtle backgrounds
      const featherMatches = html.match(/galah-feather/g)
      expect(featherMatches).toBeTruthy()
      expect(featherMatches!.length).toBeGreaterThan(1)
    })

    it('primary buttons use pink color prominently', () => {
      const pinkButtons = wrapper.findAll('.bg-galah-pink')
      expect(pinkButtons.length).toBeGreaterThan(0)
    })
    
    it('gray is used prominently for headings and navigation', () => {
      const grayElements = wrapper.findAll('.text-galah-gray')
      expect(grayElements.length).toBeGreaterThan(5)
    })

    it('text uses appropriate contrast colors', () => {
      const grayText = wrapper.findAll('.text-galah-gray')
      const slateText = wrapper.findAll('.text-galah-slate')
      
      expect(grayText.length).toBeGreaterThan(0)
      expect(slateText.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const h1 = wrapper.findAll('h1')
      const h2 = wrapper.findAll('h2')
      const h3 = wrapper.findAll('h3')
      
      expect(h1.length).toBe(1) // Only one H1
      expect(h2.length).toBeGreaterThan(0) // Multiple H2s for sections
      expect(h3.length).toBeGreaterThan(0) // H3s for subsections
    })

    it('links have href attributes', () => {
      const links = wrapper.findAll('a')
      links.forEach((link: any) => {
        expect(link.attributes('href')).toBeDefined()
      })
    })

    it('interactive elements are keyboard accessible', () => {
      const buttons = wrapper.findAll('button')
      const links = wrapper.findAll('a')
      
      // All buttons and links should be focusable (no tabindex=-1)
      buttons.forEach((btn: any) => {
        const tabindex = btn.attributes('tabindex')
        expect(tabindex).not.toBe('-1')
      })
      
      links.forEach((link: any) => {
        const tabindex = link.attributes('tabindex')
        expect(tabindex).not.toBe('-1')
      })
    })
    
    it('has skip-to-main-content link', () => {
      const skipLink = wrapper.find('a[href="#main"]')
      
      expect(skipLink.exists()).toBe(true)
      expect(skipLink.text()).toBe('Skip to main content')
      expect(skipLink.classes()).toContain('sr-only')
    })
    
    it('has proper ARIA labels and landmarks', () => {
      // Check for landmark roles
      expect(wrapper.find('[role="banner"]').exists()).toBe(true) // header
      expect(wrapper.find('[role="main"]').exists()).toBe(true) // main content
      expect(wrapper.find('[role="navigation"]').exists()).toBe(true) // nav
      expect(wrapper.find('[role="contentinfo"]').exists()).toBe(true) // footer
      
      // Check for aria-labelledby attributes
      expect(wrapper.find('[aria-labelledby="hero-heading"]').exists()).toBe(true)
      expect(wrapper.find('[aria-labelledby="features-heading"]').exists()).toBe(true)
      expect(wrapper.find('[aria-labelledby="about-heading"]').exists()).toBe(true)
      expect(wrapper.find('[aria-labelledby="services-heading"]').exists()).toBe(true)
      expect(wrapper.find('[aria-labelledby="contact-heading"]').exists()).toBe(true)
    })
    
    it('has proper aria-label attributes on interactive elements', () => {
      const emailLink = wrapper.find('a[href="mailto:contact@bitmill.dev"]')
      expect(emailLink.attributes('aria-label')).toContain('Email us')
      
      const learnMoreBtn = wrapper.find('button[aria-label*="Learn more"]')
      expect(learnMoreBtn.exists()).toBe(true)
    })
    
    it('uses aria-hidden for decorative elements', () => {
      const decorativeSpans = wrapper.findAll('span[aria-hidden="true"]')
      expect(decorativeSpans.length).toBeGreaterThan(0)
    })
  })
})