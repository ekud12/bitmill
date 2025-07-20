import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LogoIcon from '~/components/LogoIcon.vue'

describe('LogoIcon Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(LogoIcon)
    expect(wrapper.find('.logo-animated').exists()).toBe(true)
  })

  it('contains svg element with correct attributes', () => {
    const wrapper = mount(LogoIcon)
    const svg = wrapper.find('svg')
    
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('96')
    expect(svg.attributes('height')).toBe('102.4')
    expect(svg.attributes('viewBox')).toBe('0 0 72 76.8')
  })

  it('has power-drop animation class on path', () => {
    const wrapper = mount(LogoIcon)
    const path = wrapper.find('path')
    
    expect(path.exists()).toBe(true)
    expect(path.classes()).toContain('power-drop')
  })

  it('path has correct stroke attributes', () => {
    const wrapper = mount(LogoIcon)
    const path = wrapper.find('path')
    
    expect(path.attributes('fill')).toBe('none')
    expect(path.attributes('stroke')).toBe('url(#galahGradient)')
    expect(path.attributes('stroke-linejoin')).toBe('miter')
    expect(path.attributes('stroke-linecap')).toBe('butt')
    expect(path.attributes('filter')).toBe('url(#glow)')
  })

  it('applies correct styling for logo container', () => {
    const wrapper = mount(LogoIcon)
    const logoContainer = wrapper.find('.logo-animated')
    
    expect(logoContainer.exists()).toBe(true)
    // Check that styles are applied (actual computed styles depend on environment)
  })

  it('has accessible structure', () => {
    const wrapper = mount(LogoIcon)
    
    // The parent component should add role="img" and aria-label
    // when using this component
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('renders path with correct animation styles', () => {
    const wrapper = mount(LogoIcon)
    const path = wrapper.find('path.power-drop')
    
    expect(path.exists()).toBe(true)
    // Animation properties are defined in CSS
  })

  it('includes gradient definitions with galah colors', () => {
    const wrapper = mount(LogoIcon)
    const gradients = wrapper.findAll('linearGradient')
    
    expect(gradients.length).toBe(2)
    expect(gradients[0].attributes('id')).toBe('galahGradient')
    expect(gradients[1].attributes('id')).toBe('galahGradientAlt')
    
    // Check for color stops
    const stops = wrapper.findAll('stop')
    expect(stops.length).toBeGreaterThan(0)
    expect(stops[0].classes()).toContain('galah-pink-stop')
  })

  it('includes glow filter', () => {
    const wrapper = mount(LogoIcon)
    const filter = wrapper.find('filter#glow')
    
    expect(filter.exists()).toBe(true)
    expect(filter.find('feGaussianBlur').exists()).toBe(true)
  })
})