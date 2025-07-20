import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Global test utilities configuration
config.global.stubs = {
  // Stub Nuxt-specific components if needed
}

// Make composables available globally
global.useHead = vi.fn()
global.useRoute = vi.fn(() => ({ path: '/' }))
global.useRouter = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
}))

// Mock Nuxt imports
vi.mock('#app', () => ({
  useHead: vi.fn()
}))