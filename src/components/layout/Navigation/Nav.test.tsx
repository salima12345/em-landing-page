import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './Nav'

jest.mock('./Expertise', () => {
  return function MockExpertise() {
    return <div data-testid="expertise">Expertise Component</div>
  }
})

jest.mock('./MadeIn', () => {
  return function MockMadeIn() {
    return <div data-testid="made-in">MadeIn Component</div>
  }
})

jest.mock('./Ecosystem', () => {
  return function MockEcosystem() {
    return <div data-testid="ecosystem">Ecosystem Component</div>
  }
})

describe('Nav Component', () => {
  it('renders with correct wrapper classes', () => {
    render(<Nav />)
    const nav = screen.getByTestId('nav')
    expect(nav).toHaveClass('flex', 'items-center', 'justify-between', 'max-w-[912px]', 'w-full')
  })

  it('renders Ecosystem component', () => {
    render(<Nav />)
    expect(screen.getByTestId('ecosystem')).toBeInTheDocument()
  })

  describe('Responsive behavior', () => {
    beforeEach(() => {
      render(<Nav />)
    })

    it('renders wrapper div for Expertise and MadeIn with correct classes', () => {
      const wrapper = screen.getByTestId('nav').querySelector('.flex.items-center.gap-3.hidden.xl\\:flex')
      expect(wrapper).toBeInTheDocument()
    })

    it('contains Expertise and MadeIn components inside wrapper', () => {
      const expertise = screen.getByTestId('expertise')
      const madeIn = screen.getByTestId('made-in')
      
      expect(expertise).toBeInTheDocument()
      expect(madeIn).toBeInTheDocument()
      
      const wrapper = screen.getByTestId('nav').querySelector('.flex.items-center.gap-3.hidden.xl\\:flex')
      expect(wrapper).toContainElement(expertise)
      expect(wrapper).toContainElement(madeIn)
    })
  })
})

describe('Nav MediaQuery behavior', () => {
  let originalMatchMedia: typeof window.matchMedia

  beforeAll(() => {
    originalMatchMedia = window.matchMedia
  })

  afterAll(() => {
    window.matchMedia = originalMatchMedia
  })

  it('hides Expertise and MadeIn on mobile screens', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false, 
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    render(<Nav />)
    const wrapper = screen.getByTestId('nav').querySelector('.flex.items-center.gap-3.hidden.xl\\:flex')
    expect(wrapper).toHaveClass('hidden')
  })

  it('shows Expertise and MadeIn on xl screens', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query.includes('min-width: 1280px'), 
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    render(<Nav />)
    const wrapper = screen.getByTestId('nav').querySelector('.flex.items-center.gap-3.hidden.xl\\:flex')
    expect(wrapper).toHaveClass('xl:flex')
  })
})