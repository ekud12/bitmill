import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../app.vue'

describe('SEO and Meta Tags', () => {
  it('calls useHead with correct meta information', () => {
    // Check if the global useHead was called after mounting
    const globalUseHead = global.useHead as any
    globalUseHead.mockClear()
    
    mount(App)

    // Since useHead is called in setup, we need to check if it was called
    expect(globalUseHead).toHaveBeenCalled()
    
    const headConfig = globalUseHead.mock.calls[0][0]
    
    expect(headConfig.title).toBe('bitmill.dev - Digital Craftsmanship')
    expect(headConfig.meta).toEqual(expect.arrayContaining([
      expect.objectContaining({
        name: 'description',
        content: 'We build elegant software solutions that drive your business forward'
      }),
      expect.objectContaining({
        name: 'theme-color',
        content: '#c76078'
      })
    ]))
  })

  it('has proper semantic HTML structure', () => {
    const wrapper = mount(App)
    
    // Check for semantic elements
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true) // Now we have proper main element
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.findAll('section').length).toBeGreaterThan(0)
  })

  it('uses descriptive link text', () => {
    const wrapper = mount(App)
    const links = wrapper.findAll('a')
    
    links.forEach((link: any) => {
      const text = link.text().trim()
      // Links should not be empty or just "click here"
      expect(text).not.toBe('')
      expect(text.toLowerCase()).not.toBe('click here')
      expect(text.toLowerCase()).not.toBe('here')
    })
  })

  it('images would have alt text (if any images existed)', () => {
    const wrapper = mount(App)
    const images = wrapper.findAll('img')
    
    // If there were images, they should have alt text
    images.forEach((img: any) => {
      expect(img.attributes('alt')).toBeDefined()
      expect(img.attributes('alt')).not.toBe('')
    })
  })
})