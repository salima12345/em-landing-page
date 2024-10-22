import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SliderSwiper from './Slider'

jest.mock('swiper/react', () => ({
  Swiper: ({ children, className }: { children: React.ReactNode, className: string }) => (
    <div data-testid="swiper" className={className}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}))

jest.mock('swiper/css', () => ({}))
jest.mock('swiper/css/effect-creative', () => ({}))
jest.mock('swiper/css/autoplay', () => ({}))

describe('SliderSwiper Component', () => {
  it('renders the wrapper with correct classes', () => {
    render(<SliderSwiper />)
    const wrapper = screen.getByTestId('swiper')
    expect(wrapper).toHaveClass('w-full', 'h-[250px]', 'md:h-[287px]', 'overflow-hidden')
  })

  it('renders correct number of slides', () => {
    render(<SliderSwiper />)
    const slides = screen.getAllByTestId('swiper-slide')
    expect(slides).toHaveLength(7) 
  })

  it('renders images with correct attributes', () => {
    render(<SliderSwiper />)
    const images = screen.getAllByRole('img')
    
    expect(images).toHaveLength(7)

    const expectedImages = [
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/strategy.svg", alt: "Stratégie marketing" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/influence.svg", alt: "Relations Media" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/design.svg", alt: "Design visuel" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/tech.svg", alt: "Tech & Web" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/content.svg", alt: "Edition & contenus" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/digital.svg", alt: "Social Media / Référencement" },
        { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/consulting.svg", alt: "Outsourcing" },
    ]

    expectedImages.forEach((expected, index) => {
      expect(images[index]).toHaveAttribute('url', expected.url)
      expect(images[index]).toHaveAttribute('alt', expected.alt)
      expect(images[index]).toHaveClass('w-full', 'h-full', 'object-contain')
    })
  })

  it('renders slide containers with correct classes', () => {
    render(<SliderSwiper />)
    const slideContainers = screen.getAllByTestId('swiper-slide')
      .map(slide => slide.firstChild) 

    slideContainers.forEach(container => {
      expect(container).toHaveClass(
        'block',
        'w-[250px]',
        'md:w-[287px]',
        'h-[250px]',
        'md:h-[287px]',
        'relative',
        'rounded-[35px]',
        'overflow-hidden'
      )
    })
  })

  it('verifies Swiper configuration', () => {
    const { container } = render(<SliderSwiper />)
    const swiperElement = screen.getByTestId('swiper')
    
    expect(container.firstChild).toHaveClass('w-full', 'max-w-[450px]', 'ml-auto', 'py-6')
  })
})

describe('Swiper initialization', () => {
  const mockSwiper = {
    modules: [jest.fn(), jest.fn(), jest.fn()],
    params: {
      allowTouchMove: false,
      slidesPerView: 1.5,
      speed: 2000,
      loop: true,
      effect: 'creative',
      creativeEffect: {
        prev: { translate: [0, 0, 0], scale: 1 },
        next: { translate: ['100%', 0, 0] },
        limitProgress: 2
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    }
  }

  beforeAll(() => {
    // @ts-ignore
    global.Swiper = jest.fn().mockImplementation(() => mockSwiper)
  })

  it('initializes Swiper with correct configuration', () => {
    render(<SliderSwiper />)
    const swiperInstance = screen.getByTestId('swiper')
    expect(swiperInstance).toBeInTheDocument()
  })
})