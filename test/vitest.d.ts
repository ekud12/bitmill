import { vi } from 'vitest'

declare global {
  const useHead: ReturnType<typeof vi.fn>
  const useRoute: ReturnType<typeof vi.fn>
  const useRouter: ReturnType<typeof vi.fn>
}