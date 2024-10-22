import React from 'react'
import { render, screen } from '@testing-library/react'
import Nav from '../Nav'
import { jest } from '@jest/globals'
import '@testing-library/jest-dom'

import { ImageProps } from 'next/image'

interface MockedImageProps extends ImageProps {}

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: MockedImageProps) => {
        return <img {...props} src={props.src as string} />
    },
}))

jest.mock('../Expertise', () => () => <div data-testid="expertise">Expertise</div>)
jest.mock('../MadeIn', () => () => <div data-testid="made-in">Made In</div>)
jest.mock('../LanguagesSelectorMobile', () => () => <div data-testid="language-selector">Language Selector</div>)

describe('Nav component', () => {
  it('renders the logo', () => {
    render(<Nav />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the Ecosystem button on desktop', () => {
    render(<Nav />)
    const ecosystemButtonContainer = screen.getByText('Ecosystem').parentElement
    expect(ecosystemButtonContainer).toBeInTheDocument()
    expect(ecosystemButtonContainer).toHaveClass('hidden xl:flex')
  })

  it('renders the hamburger menu button', () => {
    render(<Nav />)
    const hamburgerButton = screen.getByRole('button')
    expect(hamburgerButton).toBeInTheDocument()
  })

  it('renders child components', () => {
    render(<Nav />)
    expect(screen.getByTestId('expertise')).toBeInTheDocument()
    expect(screen.getByTestId('made-in')).toBeInTheDocument()
    expect(screen.getByTestId('language-selector')).toBeInTheDocument()
  })
})