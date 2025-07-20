import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '~/app.vue'
import LogoIcon from '~/components/LogoIcon.vue'

// Mock useHead composable
vi.mock('#app', () => ({
  useHead: vi.fn()
}))

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('has proper accessibility structure', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    // Check skip link
    const skipLink = wrapper.find('a[href="#main"]')
    expect(skipLink.exists()).toBe(true)
    expect(skipLink.classes()).toContain('sr-only')
    expect(skipLink.text()).toBe('Skip to main content')
    
    // Check main content area
    const main = wrapper.find('main#main')
    expect(main.exists()).toBe(true)
    expect(main.attributes('role')).toBe('main')
  })

  it('renders logo component', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const logoWrapper = wrapper.find('[aria-label="bitmill logo"]')
    expect(logoWrapper.exists()).toBe(true)
    expect(logoWrapper.attributes('role')).toBe('img')
  })

  it('displays correct heading text', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('GPU ACCELERATED')
    expect(heading.classes()).toContain('text-reveal')
  })

  it('displays marketing copy with proper delays', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const paragraphs = wrapper.findAll('p')
    
    expect(paragraphs[0].text()).toBe('Build tools redefined.')
    expect(paragraphs[0].classes()).toContain('text-reveal-delay-1')
    
    expect(paragraphs[1].text()).toBe('10x faster. Zero compromise.')
    expect(paragraphs[1].classes()).toContain('text-reveal-delay-2')
  })

  it('shows coming soon date', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const comingSoon = wrapper.find('.text-reveal-delay-3 span')
    expect(comingSoon.exists()).toBe(true)
    expect(comingSoon.text()).toBe('Coming 2025')
  })

  it('has screen reader status message', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const status = wrapper.find('[role="status"]')
    expect(status.exists()).toBe(true)
    expect(status.attributes('aria-live')).toBe('polite')
    expect(status.find('span').text()).toBe('GPU accelerated build tools coming in 2025')
  })

  it('renders background particles', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    const particles = wrapper.findAll('.particle')
    expect(particles).toHaveLength(5)
    
    // Check aria-hidden for decorative elements
    const particleContainer = wrapper.find('.fixed.inset-0')
    expect(particleContainer.attributes('aria-hidden')).toBe('true')
  })

  it('applies correct color theme classes', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          LogoIcon
        },
        mocks: {
          useHead: vi.fn()
        }
      }
    })
    
    await flushPromises()
    
    // Check background gradient
    const container = wrapper.find('.min-h-screen')
    expect(container.classes()).toContain('bg-gradient-to-br')
    expect(container.classes()).toContain('from-galah-slate')
    
    // Check text colors
    const heading = wrapper.find('h1')
    expect(heading.classes()).toContain('from-galah-pink')
    expect(heading.classes()).toContain('via-galah-rose')
    expect(heading.classes()).toContain('to-galah-pink')
  })
})